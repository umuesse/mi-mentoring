/**
 * Rendert handout/index.html als A4-PDF im MI-Styleguide.
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const PORT = process.env.HANDOUT_PORT || '4181';
const outPdf = join(root, 'Handout-MI-Mentoring-WiSe-2026-27.pdf');

const mime = {
	'.html': 'text/html; charset=utf-8',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.css': 'text/css; charset=utf-8'
};

function startServer() {
	const server = createServer(async (req, res) => {
		try {
			const url = new URL(req.url || '/', `http://127.0.0.1:${PORT}`);
			let rel = decodeURIComponent(url.pathname);
			if (rel === '/') rel = '/handout/index.html';
			const file = join(root, rel.replace(/^\//, ''));
			if (!file.startsWith(root)) {
				res.writeHead(403).end();
				return;
			}
			const data = await readFile(file);
			res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
			res.end(data);
		} catch {
			res.writeHead(404).end('not found');
		}
	});
	return new Promise((resolve) => {
		server.listen(Number(PORT), '127.0.0.1', () => resolve(server));
	});
}

async function main() {
	const server = await startServer();
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage();
		await page.emulateMedia({ media: 'print' });
		await page.goto(`http://127.0.0.1:${PORT}/handout/index.html`, {
			waitUntil: 'networkidle',
			timeout: 120000
		});
		await page.evaluate(() => document.fonts.ready);
		await page.pdf({
			path: outPdf,
			format: 'A4',
			printBackground: true,
			preferCSSPageSize: true,
			displayHeaderFooter: true,
			headerTemplate: '<div></div>',
			footerTemplate: `<div style="font-family:'PT Sans',sans-serif;font-size:8px;color:#5c5c5c;width:100%;padding:0 14mm;display:flex;justify-content:space-between;">
				<span>Medieninformatik Mentoring · WiSe 2026/27</span>
				<span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
			</div>`,
			margin: { top: '12mm', bottom: '16mm', left: '0', right: '0' },
			timeout: 120000
		});
		console.log('PDF geschrieben:', outPdf);
	} finally {
		await browser.close();
		server.close();
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
