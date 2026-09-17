export type InlineSegment =
	| { kind: 'plain'; text: string }
	| { kind: 'bold'; text: string }
	| { kind: 'italic'; text: string };

/** Minimale Inline-Syntax in Folientexten: **fett**, *kursiv* (kein vollständiges Markdown). */
export function parseInlineMarkup(text: string): InlineSegment[] {
	const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
	const segments: InlineSegment[] = [];
	let lastIndex = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(text)) !== null) {
		if (m.index > lastIndex) {
			segments.push({ kind: 'plain', text: text.slice(lastIndex, m.index) });
		}
		if (m[1] !== undefined) {
			segments.push({ kind: 'bold', text: m[1] });
		} else if (m[2] !== undefined) {
			segments.push({ kind: 'italic', text: m[2] });
		}
		lastIndex = re.lastIndex;
	}
	if (lastIndex < text.length) {
		segments.push({ kind: 'plain', text: text.slice(lastIndex) });
	}
	if (segments.length === 0) {
		return [{ kind: 'plain', text }];
	}
	return segments;
}
