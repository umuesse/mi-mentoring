<script lang="ts">
	import { browser } from '$app/environment';

	type Theme = 'light' | 'dark';

	interface Props {
		href: string;
		theme?: Theme;
		/** Pixel für die QR-Bitmap (Canvas) */
		size?: number;
		/** Kompakte Darstellung für Bullet-Zeilen */
		compact?: boolean;
		/** false: nur QR (Text steht bereits nebenan, z. B. Bullet-Zeile) */
		showUrl?: boolean;
	}

	let { href, theme = 'light', size = 280, compact = false, showUrl = true }: Props = $props();

	let dataUrl = $state('');
	let error = $state<string | null>(null);

	$effect(() => {
		if (!browser) return;

		let cancelled = false;
		const isDark = theme === 'dark';
		const fg = isDark ? '#fafafa' : '#0a0a0a';
		const bg = isDark ? '#18181f' : '#fefefe';

		import('qrcode')
			.then(({ default: QRCode }) =>
				QRCode.toDataURL(href, {
					width: compact ? Math.min(size, 200) : size,
					margin: 1,
					errorCorrectionLevel: 'M',
					color: { dark: fg, light: bg }
				})
			)
			.then((url) => {
				if (!cancelled) {
					dataUrl = url;
					error = null;
				}
			})
			.catch((e: unknown) => {
				if (!cancelled) {
					error = e instanceof Error ? e.message : 'QR-Code konnte nicht erzeugt werden.';
					dataUrl = '';
				}
			});

		return () => {
			cancelled = true;
		};
	});
</script>

<div
	class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
	class:sm:items-center={compact}
	class:justify-end={!showUrl}
	aria-label={showUrl ? 'Link mit QR-Code' : 'QR-Code zum Link'}
>
	{#if showUrl}
		<div class="min-w-0 flex-1 text-balance break-words">
			<p
				class="font-mono font-medium leading-snug tracking-tight text-mi-ink"
				class:text-[clamp(1.05rem,2.2vw,1.45rem)]={!compact}
				class:text-[clamp(0.9rem,1.8vw,1.15rem)]={compact}
			>
				<a
					href={href}
					class="text-mi-violet underline decoration-mi-violet/40 underline-offset-2 hover:text-mi-magenta dark:text-mi-magenta dark:decoration-mi-magenta/40"
					target={href.startsWith('mailto:') ? undefined : '_blank'}
					rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
					>{href}</a
				>
			</p>
		</div>
	{/if}

	<div class="mx-auto shrink-0 sm:mx-0" class:sm:ml-auto={!showUrl}>
		{#if error}
			<p class="max-w-[200px] text-center text-sm text-mi-magenta" role="alert">{error}</p>
		{:else if dataUrl}
			<img
				src={dataUrl}
				alt=""
				class="h-auto rounded-xl border border-mi-ink/15 bg-mi-surface shadow-sm dark:border-white/10"
				class:w-[min(42vw,220px)]={!compact}
				class:sm:w-[min(28vw,260px)]={!compact}
				class:w-[min(36vw,180px)]={compact}
				class:sm:w-[min(22vw,200px)]={compact}
				width={compact ? Math.min(size, 200) : size}
				height={compact ? Math.min(size, 200) : size}
			/>
			{#if !compact}
				<p class="mt-2 text-center text-xs text-mi-muted">QR zum Öffnen auf dem Smartphone</p>
			{/if}
		{:else}
			<div
				class="flex items-center justify-center rounded-xl border border-dashed border-mi-ink/20 bg-mi-ink/5 text-sm text-mi-muted dark:border-white/15"
				class:h-[min(42vw,220px)]={!compact}
				class:w-[min(42vw,220px)]={!compact}
				class:sm:h-[min(28vw,260px)]={!compact}
				class:sm:w-[min(28vw,260px)]={!compact}
				class:h-[min(36vw,180px)]={compact}
				class:w-[min(36vw,180px)]={compact}
				class:sm:h-[min(22vw,200px)]={compact}
				class:sm:w-[min(22vw,200px)]={compact}
			>
				…
			</div>
		{/if}
	</div>
</div>
