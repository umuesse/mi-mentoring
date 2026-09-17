<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/img/favicon.ico" sizes="any" type="image/x-icon" />
</svelte:head>
{@render children()}
