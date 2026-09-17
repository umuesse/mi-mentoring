<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Slide } from '$lib/slides';
	import { extractFirstUrl, splitBulletText } from '$lib/extractUrl';
	import LinkifiedText from '$lib/components/LinkifiedText.svelte';
	import QrLink from '$lib/components/QrLink.svelte';

	const linkInlineClass =
		'text-mi-violet underline decoration-mi-violet/40 underline-offset-2 hover:text-mi-magenta dark:text-mi-magenta dark:decoration-mi-magenta/40';
	const linkBulletUrlClass =
		'break-all font-mono text-[0.88em] font-medium leading-snug ' + linkInlineClass;

	let {
		slide,
		theme,
		revealedCount = 0,
		revealAllBullets = false,
		variant = 'screen'
	}: {
		slide: Slide;
		theme: 'light' | 'dark';
		revealedCount?: number;
		/** PDF/Druck: alle Punkte einer sequenziellen Folie sichtbar */
		revealAllBullets?: boolean;
		variant?: 'screen' | 'print';
	} = $props();

	const bulletItems = $derived(
		slide.type !== 'bullets'
			? []
			: !slide.sequential || revealAllBullets
				? slide.items
				: slide.items.slice(0, revealedCount)
	);

	const itemFade = $derived(
		slide.type === 'bullets' &&
			slide.sequential &&
			!revealAllBullets &&
			variant === 'screen'
	);
</script>

{#if slide.type === 'intro'}
	<div class="text-center">
		{#if slide.image}
			<div class="mb-10 flex justify-center">
				<div
					class="inline-flex max-w-[min(85vw,420px)] items-center justify-center rounded-2xl px-6 py-5 text-black dark:bg-white dark:shadow-lg dark:ring-1 dark:ring-black/10"
				>
					<img
						src={slide.image.src}
						alt={slide.image.alt}
						class="h-auto max-h-[min(28vh,220px)] w-full object-contain"
						width="130"
						height="70"
						loading="eager"
						decoding="async"
					/>
				</div>
			</div>
		{/if}
		<p
			class="mb-5 text-[clamp(0.85rem,1.8vw,1rem)] font-medium uppercase tracking-[0.22em] text-mi-violet"
		>
			Medieninformatik · TH Köln
		</p>
		<h1
			class="mb-8 text-balance font-semibold leading-[1.08] tracking-tight text-mi-ink"
			style="font-size: clamp(2.75rem, 8vw, 4.75rem);"
		>
			{slide.title}
		</h1>
		{#if slide.subtitle}
			<p
				class="mx-auto max-w-3xl text-pretty leading-snug text-mi-muted"
				style="font-size: clamp(1.2rem, 2.8vw, 1.65rem);"
			>
				<LinkifiedText text={slide.subtitle} linkClass={linkInlineClass} />
			</p>
		{/if}
	</div>
{:else if slide.type === 'bullets'}
	<div>
		{#if slide.title}
			<h2
				class="mb-7 border-b border-mi-green/50 pb-4 font-semibold leading-tight text-mi-violet dark:border-mi-green/35"
				style="font-size: clamp(1.6rem, 4vw, 2.5rem);"
			>
				{slide.title}
			</h2>
		{/if}
		<ul class="space-y-7 text-left">
			{#each bulletItems as item, i (i)}
				{@const parts = splitBulletText(item)}
				{@const qrHref = parts.url ?? extractFirstUrl(item)}
				<li
					class="grid grid-cols-1 items-start gap-5 {variant === 'print'
						? ''
						: 'sm:grid-cols-[1fr_min(38%,220px)] sm:gap-6'}"
					style="font-size: clamp(1.05rem, 2.2vw, 1.4rem);"
					in:fade={itemFade ? { duration: 200 } : { duration: 0 }}
				>
					<div class="flex min-w-0 gap-4 leading-snug text-mi-ink">
						<span
							class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-mi-magenta"
							aria-hidden="true"
						></span>
						<div class="min-w-0 flex-1 space-y-2">
							<p class="text-pretty">
								<LinkifiedText text={parts.body} linkClass={linkInlineClass} />
							</p>
							{#if parts.url}
								<p class="m-0">
									<a
										href={parts.url}
										class={linkBulletUrlClass}
										target={parts.url.startsWith('mailto:') ? undefined : '_blank'}
										rel={parts.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
										>{parts.url.startsWith('mailto:') ? parts.url.slice(7) : parts.url}</a
									>
								</p>
							{/if}
							{#if parts.after}
								<p class="text-pretty text-[0.92em] leading-snug text-mi-muted">
									<LinkifiedText text={parts.after} linkClass={linkInlineClass} />
								</p>
							{/if}
						</div>
					</div>
					{#if qrHref && variant === 'screen'}
						<div class="flex w-full justify-center sm:justify-end">
							<QrLink href={qrHref} {theme} size={200} compact showUrl={false} />
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{:else if slide.type === 'code'}
	<div>
		{#if slide.title}
			<h2
				class="mb-7 font-semibold leading-tight text-mi-violet"
				style="font-size: clamp(1.35rem, 3.2vw, 2rem);"
			>
				{slide.title}
			</h2>
		{/if}
		<pre
			class="overflow-x-auto rounded-2xl border border-mi-ink/10 bg-mi-code p-7 text-left font-mono leading-relaxed text-zinc-100 shadow-inner shadow-black/25 dark:border-white/10 dark:bg-zinc-950"
			style="font-size: clamp(0.95rem, 2vw, 1.15rem);"
		><code>{slide.code}</code></pre>
	</div>
{:else if slide.type === 'quote'}
	<blockquote
		class="relative mx-auto max-w-4xl border-l-[4px] border-mi-magenta pl-9 text-left md:pl-12"
	>
		<p
			class="text-pretty font-normal italic leading-snug text-mi-ink"
			style="font-size: clamp(1.45rem, 3.5vw, 2.15rem);"
		>
			«<LinkifiedText text={slide.text} linkClass={linkInlineClass} />»
		</p>
		{#if slide.attribution}
			<footer
				class="mt-8 font-medium text-mi-muted"
				style="font-size: clamp(0.95rem, 2vw, 1.1rem);"
			>
				— <LinkifiedText text={slide.attribution} linkClass={linkInlineClass} />
			</footer>
		{/if}
	</blockquote>
{:else if slide.type === 'figures'}
	<div
		class="flex flex-col items-center justify-center text-center {variant === 'print'
			? 'min-h-0 py-2'
			: 'min-h-[min(72dvh,640px)]'}"
	>
		<div
			class="grid w-full max-w-6xl gap-8 {slide.images.length === 2
				? 'grid-cols-1 sm:grid-cols-2 sm:gap-6'
				: 'grid-cols-1'}"
		>
			{#each slide.images as fig}
				<figure class="flex min-h-0 flex-col items-center justify-center">
					<div
						class="flex w-full max-w-[min(94vw,960px)] items-center justify-center rounded-2xl bg-mi-ink/4 px-3 py-4 dark:bg-white/6 {slide.images.length === 2
							? 'sm:max-w-none'
							: ''}"
					>
						<img
							src={fig.src}
							alt={fig.alt}
							class="h-auto w-full object-contain {variant === 'print'
								? slide.images.length === 1
									? 'max-h-[115mm]'
									: 'max-h-[82mm] sm:max-h-[70mm]'
								: slide.images.length === 1
									? 'max-h-[60vh]'
									: 'max-h-[38vh] sm:max-h-[min(50vh,60vh)]'}"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<figcaption
						class="mt-4 max-w-md text-pretty text-mi-muted"
						style="font-size: clamp(0.9rem, 1.9vw, 1.05rem);"
					>
						{fig.caption}
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
{:else if slide.type === 'linkQr'}
	<div>
		{#if slide.title}
			<h2
				class="mb-4 font-semibold leading-tight text-mi-violet"
				style="font-size: clamp(1.6rem, 4vw, 2.5rem);"
			>
				{slide.title}
			</h2>
		{/if}
		{#if slide.hint}
			<p
				class="mb-10 max-w-3xl text-pretty leading-snug text-mi-muted"
				style="font-size: clamp(1rem, 2.2vw, 1.3rem);"
			>
				<LinkifiedText text={slide.hint} linkClass={linkInlineClass} />
			</p>
		{/if}
		{#if variant === 'print'}
			<p class="break-all font-mono text-sm">
				<a href={slide.url} class={linkInlineClass}>{slide.url}</a>
			</p>
		{:else}
			<QrLink href={slide.url} {theme} size={300} />
		{/if}
	</div>
{/if}
