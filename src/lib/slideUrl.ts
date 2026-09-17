const SLIDE_PARAM = 'slide';

/** Foliennummer aus der URL (1-basiert, wie in der Fußleiste). Ungültig → 0. */
export function slideIndexFromUrl(url: URL, slideCount: number): number {
	const raw = url.searchParams.get(SLIDE_PARAM);
	if (raw === null || raw === '') return 0;
	const folie = parseInt(raw, 10);
	if (!Number.isFinite(folie)) return 0;
	return Math.min(slideCount - 1, Math.max(0, folie - 1));
}

/** Pfad + Query mit aktualisierter Folie; Folie 1 → Parameter entfernen. */
export function urlWithSlideIndex(url: URL, index: number): string {
	const next = new URL(url);
	const folie = index + 1;
	if (folie <= 1) next.searchParams.delete(SLIDE_PARAM);
	else next.searchParams.set(SLIDE_PARAM, String(folie));
	return next.pathname + next.search;
}
