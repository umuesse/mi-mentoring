<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { slideIndexFromUrl, urlWithSlideIndex } from '$lib/slideUrl';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { slides, type Slide } from '$lib/slides';
	import { slideOutlineLabel } from '$lib/slideOutline';
	import SlideContent from '$lib/components/SlideContent.svelte';

	let currentIndex = $state(0);
	/** Nach initialem Lesen von ?slide= — verhindert URL-Loops */
	let slideUrlReady = $state(false);
	/** 1 = vor (raus links / rein rechts), −1 = zurück (raus rechts / rein links) */
	let navDirection = $state<1 | -1>(1);
	let revealedCount = $state(0);
	let lastIndex = $state(0);

	const SLIDE_OFFSET = 140;
	const SLIDE_MS = 380;

	function goToSlide(target: number) {
		if (target === currentIndex) return;
		navDirection = target > currentIndex ? 1 : -1;
		currentIndex = target;
	}

	let theme = $state<'light' | 'dark'>('light');

	const isPrintMode = $derived(
		browser && page.url.searchParams.get('print') === '1'
	);

	onMount(() => {
		const saved = localStorage.getItem('mi-mentoring-theme');
		if (saved === 'dark' || saved === 'light') {
			theme = saved;
		} else if (typeof window !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		}

		if (page.url.searchParams.get('print') !== '1') {
			const fromUrl = slideIndexFromUrl(page.url, slides.length);
			if (fromUrl !== currentIndex) {
				currentIndex = fromUrl;
			}
		}
		slideUrlReady = true;
	});

	$effect(() => {
		if (!browser || !slideUrlReady || isPrintMode) return;
		const want = urlWithSlideIndex(page.url, currentIndex);
		const have = page.url.pathname + page.url.search;
		if (want !== have) {
			goto(want, { replaceState: true, keepFocus: true, noScroll: true });
		}
	});

	$effect(() => {
		if (typeof document === 'undefined') return;
		if (isPrintMode) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.toggle('dark', theme === 'dark');
		}
		try {
			if (!isPrintMode) localStorage.setItem('mi-mentoring-theme', theme);
		} catch {
			/* private mode */
		}
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
	}

	$effect(() => {
		const s = slides[currentIndex];
		if (s.type === 'bullets' && s.sequential) {
			if (currentIndex > lastIndex) revealedCount = 0;
			else if (currentIndex < lastIndex) revealedCount = s.items.length;
		}
		lastIndex = currentIndex;
	});

	function canAdvanceWithinSlide(s: Slide): boolean {
		return s.type === 'bullets' && !!s.sequential && revealedCount < s.items.length;
	}

	function goNext() {
		const s = slides[currentIndex];
		if (canAdvanceWithinSlide(s)) {
			revealedCount += 1;
			return;
		}
		if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1);
	}

	function goPrev() {
		const s = slides[currentIndex];
		if (s.type === 'bullets' && s.sequential && revealedCount > 0) {
			revealedCount -= 1;
			return;
		}
		if (currentIndex > 0) goToSlide(currentIndex - 1);
	}

	function onKeydown(e: KeyboardEvent) {
		if (isPrintMode) return;
		/** Alt/Option + M — Hell-/Dunkelmodus (z. B. ⌥ M auf Apple-Tastaturen) */
		if (
			e.altKey &&
			!e.ctrlKey &&
			!e.metaKey &&
			!e.shiftKey &&
			(e.key === 'm' || e.key === 'M' || e.code === 'KeyM')
		) {
			e.preventDefault();
			toggleTheme();
			return;
		}

		if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
			e.preventDefault();
			goNext();
		} else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
			e.preventDefault();
			goPrev();
		} else if (e.key === 'Home') {
			e.preventDefault();
			goToSlide(0);
		} else if (e.key === 'End') {
			e.preventDefault();
			goToSlide(slides.length - 1);
		}
	}

	const progress = $derived(((currentIndex + 1) / slides.length) * 100);
	const slide = $derived(slides[currentIndex]);
</script>

<svelte:window onkeydown={onKeydown} />

<svelte:head>
	<title>MI Mentoring · {isPrintMode ? 'Druck/PDF' : 'Präsentation'}</title>
	{#if isPrintMode}
		<style>
			@page {
				size: a4;
				margin: 12mm;
			}
			.print-root {
				background: #fff;
			}
			.print-page {
				page-break-after: always;
				break-after: page;
			}
			.print-page:last-child {
				page-break-after: auto;
				break-after: auto;
			}
			.print-toc-list {
				columns: 2;
				column-gap: 10mm;
				font-size: 9pt;
				line-height: 1.45;
			}
			.print-toc-list li {
				break-inside: avoid;
				margin-bottom: 0.35em;
			}
		</style>
	{/if}
</svelte:head>

{#if isPrintMode}
	<div class="print-root bg-white text-mi-ink">
		<section class="print-page px-6 py-10 md:px-10">
			<div class="mx-auto max-w-5xl">
				<p
					class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-mi-violet"
				>
					MI Mentoring · WiSe 2026/27
				</p>
				<h1 class="mb-6 text-3xl font-semibold text-mi-ink">Inhaltsverzeichnis</h1>
				<ol class="print-toc-list list-decimal pl-5 text-mi-ink">
					{#each slides as tocSlide, ti (ti)}
						<li>
							<span class="font-medium text-mi-violet">{ti + 1}.</span>
							{slideOutlineLabel(tocSlide, ti)}
						</li>
					{/each}
				</ol>
			</div>
		</section>
		{#each slides as printSlide, pi (pi)}
			<section
				class="print-page relative flex flex-col justify-center px-6 py-10 pb-14 md:px-10"
			>
				<div class="mx-auto w-full max-w-5xl">
					<SlideContent
						slide={printSlide}
						theme="light"
						revealAllBullets={true}
						revealedCount={0}
						variant="print"
					/>
				</div>
				<p
					class="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-sm font-medium text-mi-muted"
					aria-hidden="true"
				>
					Folie {pi + 1} / {slides.length}
				</p>
			</section>
		{/each}
	</div>
{:else}
<!-- Fortschritt -->
<div
	class="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-mi-ink/10 dark:bg-white/10"
	aria-hidden="true"
>
	<div
		class="h-full bg-gradient-to-r from-mi-violet via-mi-magenta to-mi-green transition-[width] duration-300 ease-out"
		style:width="{progress}%"
	></div>
</div>

<div
	class="relative flex min-h-dvh flex-col overflow-hidden bg-gradient-to-br from-white via-mi-surface to-violet-50/40 dark:from-mi-surface dark:via-mi-surface dark:to-mi-elevated/80"
>
	<main
		class="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 pb-32"
	>
		<div
			class="grid w-full max-w-5xl min-h-[min(52vh,28rem)] overflow-x-clip [&>*]:col-start-1 [&>*]:row-start-1"
		>
			{#key currentIndex}
				<div
					class="will-change-transform"
					in:fly={{
						x: navDirection * SLIDE_OFFSET,
						opacity: 0,
						duration: SLIDE_MS,
						easing: cubicOut
					}}
					out:fly={{
						x: navDirection * -SLIDE_OFFSET,
						opacity: 0,
						duration: SLIDE_MS,
						easing: cubicOut
					}}
				>
					<SlideContent
						{slide}
						{theme}
						{revealedCount}
						revealAllBullets={false}
						variant="screen"
					/>
				</div>
			{/key}
		</div>
	</main>

	<footer
		class="fixed bottom-0 left-0 right-0 z-40 border-t border-mi-ink/10 bg-mi-surface/90 px-4 py-5 backdrop-blur-md dark:border-white/10 dark:bg-mi-elevated/95"
	>
		<div class="mx-auto flex max-w-5xl items-center justify-between gap-4">
			<button
				type="button"
				class="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-mi-ink/15 bg-mi-surface text-mi-ink shadow-sm transition hover:border-mi-magenta/40 hover:text-mi-magenta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mi-violet disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/15 dark:bg-mi-elevated"
				onclick={goPrev}
				disabled={currentIndex === 0 &&
					!(slide.type === 'bullets' && slide.sequential && revealedCount > 0)}
				aria-label="Vorherige Folie"
			>
				<ChevronLeft class="h-7 w-7" strokeWidth={2} />
			</button>

			<div class="text-center text-mi-muted" style="font-size: clamp(0.95rem, 2vw, 1.1rem);">
				<span class="font-semibold text-mi-ink">{currentIndex + 1}</span>
				<span class="mx-1 text-mi-ink/30">/</span>
				<span>{slides.length}</span>
				{#if slide.type === 'bullets' && slide.sequential}
					<span class="mt-1 block text-mi-violet" style="font-size: 0.85em;">
						Punkte: {revealedCount}/{slide.items.length}
					</span>
				{/if}
			</div>

			<button
				type="button"
				class="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-mi-ink/15 bg-mi-surface text-mi-ink shadow-sm transition hover:border-mi-magenta/40 hover:text-mi-magenta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mi-violet disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/15 dark:bg-mi-elevated"
				onclick={goNext}
				disabled={currentIndex === slides.length - 1 && !canAdvanceWithinSlide(slide)}
				aria-label="Nächste Folie"
			>
				<ChevronRight class="h-7 w-7" strokeWidth={2} />
			</button>
		</div>
	</footer>
</div>
{/if}
