<script lang="ts">
	type PicInput = string | { src: string; title?: string | null }

	export let picOne: PicInput | null = null
	export let picTwo: PicInput | null = null
	export let picThree: PicInput | null = null
	export let picFour: PicInput | null = null
	export let cols: number = 2

	// Normalisierte Liste gültiger Bilder (null/undefined werden herausgefiltert)
	interface NormalizedPic { src: string; title: string | null }
	$: images = ([picOne, picTwo, picThree, picFour].filter(Boolean) as PicInput[]).map(
		(p) => (typeof p === 'string' ? { src: p, title: null } : { src: p.src, title: p.title ?? null })
	) as NormalizedPic[]

	// Spaltenanzahl auf sinnvolle Grenzen beschränken (1-4)
	$: columnCount = Math.min(Math.max(cols, 1), 4)
</script>

<section class="w-full h-full flex items-center justify-center overflow-hidden pt-3 pb-6">
    <div
        class="grid gap-4 w-full h-full place-items-center content-center"
        style={`grid-template-columns: repeat(${columnCount}, minmax(0, 1fr));`}
    >
		{#each images as item, i (item.src)}
			<div class="w-full h-full flex flex-col items-center justify-center">
                <img
					src={item.src}
					alt={item.title ?? `Bild ${i + 1}`}
                    class="max-w-full object-contain rounded-md shadow"
					style="max-height: min(500px, calc(100% - 2.5rem));"
				/>
				{#if item.title}
					<div style="font-size: 1rem; margin-top: -0.5rem;" class="text-gray-300 text-center leading-snug">{item.title}</div>
				{/if}
			</div>
		{/each}
	</div>
</section>