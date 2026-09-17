/**
 * Erzeugt MI-Mentoring-Präsentation.pdf aus der gebauten App (Druckansicht ?print=1).
 * Voraussetzung: `npm run build` wurde ausgeführt (wird von export:pdf mit ausgeführt).
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import process from 'node:process';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const viteCli = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const PORT = process.env.PDF_PORT || '4179';
const outPdf = path.join(root, 'MI-Mentoring-Präsentation.pdf');
const baseUrl = `http://127.0.0.1:${PORT}`;

async function waitForServer(href, attempts = 90) {
	for (let i = 0; i < attempts; i++) {
		try {
			const res = await fetch(href);
			if (res.ok) return;
		} catch {
			/* noch nicht erreichbar */
		}
		await new Promise((r) => setTimeout(r, 400));
	}
	throw new Error(`Server nicht erreichbar: ${href}`);
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function main() {
	const preview = spawn(
		process.execPath,
		[viteCli, 'preview', '--host', '127.0.0.1', '--port', PORT, '--strictPort'],
		{
		cwd: root,
		stdio: 'inherit',
		env: { ...process.env }
	});

	try {
		await waitForServer(`${baseUrl}/`);
		const browser = await chromium.launch();
		const page = await browser.newPage();
		await page.emulateMedia({ media: 'print' });
		await page.goto(`${baseUrl}/?print=1`, { waitUntil: 'domcontentloaded', timeout: 120000 });
		await page.waitForSelector('.print-page', { timeout: 120000 });
		await sleep(4000);
		await page.pdf({
			path: outPdf,
			format: 'A4',
			printBackground: true,
			preferCSSPageSize: true,
			margin: { top: '10mm', bottom: '12mm', left: '12mm', right: '12mm' },
			displayHeaderFooter: false,
			timeout: 600000
		});
		await browser.close();
		console.log('PDF geschrieben:', outPdf);
	} finally {
		preview.kill('SIGTERM');
		await sleep(300);
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
