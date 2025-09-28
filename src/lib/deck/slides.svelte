<script lang="ts">
	import { onMount } from 'svelte'

	import Reveal from 'reveal.js'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Notes from 'reveal.js/plugin/notes/notes'

	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/black.css'
	import 'reveal.js/plugin/highlight/monokai.css'

	import Presentation from './presentation.svelte'

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			slideNumber: true
			// controls: false,
			// progress: false
		})

		deck.initialize()
	})
</script>


<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
	<!-- MI Logo oben links auf allen Slides -->
	<div class="fixed top-0 left-0 w-full z-50" style="background-color: #efefef; max-height: 80px; padding: 40px 0;">
		<div class="flex justify-start px-4">
			<img src="/src/lib/assets/milogo.png" alt="MI Logo" class="h-16 w-auto" />
		</div>
	</div>
</div>