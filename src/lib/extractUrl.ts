/** Erste nutzbare Ziel-URL in einer Bullet-Zeile: https-Link oder mailto: (E-Mail) */
export function extractFirstUrl(text: string): string | null {
	const https = text.match(/https?:\/\/[^\s<>\u00A0"'`]+/i);
	if (https) return stripTrailingJunk(https[0]);

	const mailto = text.match(/mailto:[^\s<>\u00A0]+/i);
	if (mailto) return stripTrailingJunk(mailto[0]);

	const email = text.match(/\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b/i);
	if (email) return `mailto:${email[0]}`;

	return null;
}

function stripTrailingJunk(url: string): string {
	return url.replace(/[.,;:!?)]+$/u, '');
}

export type LinkSegment =
	| { kind: 'text'; text: string }
	| { kind: 'link'; href: string; label: string };

/**
 * Zerlegt Freitext in Text- und Link-Segmente (https/mailto/E-Mail).
 * Für Einzel-URLs in Bullet-Zeilen weiterhin {@link splitBulletText} nutzen.
 */
export function linkifySegments(text: string): LinkSegment[] {
	const re = /(https?:\/\/[^\s<>\u00A0"'`]+)|(mailto:[^\s<>\u00A0]+)|(\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b)/gi;
	const segments: LinkSegment[] = [];
	let lastIndex = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(text)) !== null) {
		if (m.index > lastIndex) {
			segments.push({ kind: 'text', text: text.slice(lastIndex, m.index) });
		}
		const raw = m[0];
		let href: string;
		let label: string;
		if (/^mailto:/i.test(raw)) {
			href = stripTrailingJunk(raw);
			label = href.replace(/^mailto:/i, '');
		} else if (/^[\w.+-]+@[\w.-]+\.[a-z]{2,}$/i.test(raw)) {
			href = `mailto:${raw}`;
			label = raw;
		} else {
			href = stripTrailingJunk(raw);
			label = href;
		}
		segments.push({ kind: 'link', href, label });
		lastIndex = m.index + raw.length;
	}
	if (lastIndex < text.length) {
		segments.push({ kind: 'text', text: text.slice(lastIndex) });
	}
	if (segments.length === 0) {
		return [{ kind: 'text', text }];
	}
	return segments;
}

/** Ende einer http(s)-URL im String (exklusiv) */
function endOfHttpUrl(text: string, start: number): number {
	let i = start;
	while (i < text.length) {
		const c = text[i];
		if (/\s/.test(c)) break;
		if (c === ')' || c === ']' || c === '>' || c === '"' || c === "'") break;
		i++;
	}
	return i;
}

export type SplitBullet = {
	/** Text ohne Link (erste Zeile) */
	body: string;
	/** Anzuzeigende URL / mailto (zweite Zeile), falls vorhanden */
	url: string | null;
	/** Optionaler Rest nach der URL (z. B. Hinweis in Klammern) */
	after?: string;
};

/**
 * Trennt Beschreibung und Link für die Darstellung:
 * Zeile 1 = body, Zeile 2 = url, optional Zeile 3 = after
 */
export function splitBulletText(text: string): SplitBullet {
	const trimmed = text.trim();
	const httpsMatch = trimmed.match(/https?:\/\//i);
	if (httpsMatch && httpsMatch.index !== undefined) {
		const start = httpsMatch.index;
		const end = endOfHttpUrl(trimmed, start);
		const rawUrl = trimmed.slice(start, end);
		let before = trimmed.slice(0, start).replace(/\s*[—–]\s*$/u, '').trim();
		let after = trimmed.slice(end).trim();
		after = after.replace(/^\(\s*/, '').replace(/\s*\)$/, '').trim();
		return {
			body: before,
			url: stripTrailingJunk(rawUrl),
			after: after || undefined
		};
	}

	const emailMatch = trimmed.match(/\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b/i);
	if (emailMatch && emailMatch.index !== undefined) {
		const start = emailMatch.index;
		const end = start + emailMatch[0].length;
		let before = trimmed.slice(0, start).replace(/\s*[—–·]\s*$/u, '').trim();
		const after = trimmed.slice(end).trim();
		return {
			body: before,
			url: `mailto:${emailMatch[0]}`,
			after: after || undefined
		};
	}

	return { body: trimmed, url: null };
}
