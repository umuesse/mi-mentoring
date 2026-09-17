<script lang="ts">
	import { linkifySegments } from '$lib/extractUrl';
	import { parseInlineMarkup } from '$lib/inlineMarkup';

	let {
		text,
		class: className = '',
		linkClass = ''
	}: {
		text: string;
		class?: string;
		/** Tailwind-Klassen für jeden <a>-Link */
		linkClass?: string;
	} = $props();
</script>

<span class={className}>
	{#each linkifySegments(text) as seg, i (i)}
		{#if seg.kind === 'text'}
			{#each seg.text.split('\n') as line, lineIndex (lineIndex)}
				{#if lineIndex > 0}<br />{/if}
				{#each parseInlineMarkup(line) as part, partIndex (partIndex)}
					{#if part.kind === 'plain'}
						{part.text}
					{:else if part.kind === 'bold'}
						<strong class="font-semibold not-italic">{part.text}</strong>
					{:else}
						<em>{part.text}</em>
					{/if}
				{/each}
			{/each}
		{:else}
			<a
				href={seg.href}
				class={linkClass}
				target={seg.href.startsWith('mailto:') ? undefined : '_blank'}
				rel={seg.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
				>{seg.label}</a
			>
		{/if}
	{/each}
</span>
