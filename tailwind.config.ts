import type { Config } from 'tailwindcss';

/**
 * Tailwind v4: Farben, Schrift und Spacing werden primär in `src/routes/layout.css`
 * über `@theme { ... }` gepflegt (TH-Köln-MI-Look: IBM Plex Sans, Violett, Grün, Magenta).
 * Diese Datei hält den Content-Scan explizit und bleibt kompatibel mit der Vite-Integration.
 */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}']
} satisfies Config;
