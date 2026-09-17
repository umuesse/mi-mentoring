import type { Slide } from '$lib/slides';

/** Kurztitel für Inhaltsverzeichnis und PDF-Foliennavigation */
export function slideOutlineLabel(slide: Slide, index: number): string {
	switch (slide.type) {
		case 'intro':
			return slide.title;
		case 'bullets':
			return slide.title ?? `Punkte · Folie ${index + 1}`;
		case 'quote':
			return slide.text.length > 56 ? `${slide.text.slice(0, 53).trim()}…` : slide.text;
		case 'code':
			return slide.title ?? 'Checkliste';
		case 'figures':
			return slide.images.length === 1
				? slide.images[0].caption
				: slide.images.map((img) => img.caption).join(' · ');
		case 'linkQr':
			return slide.title ?? slide.url;
		default:
			return `Folie ${index + 1}`;
	}
}
