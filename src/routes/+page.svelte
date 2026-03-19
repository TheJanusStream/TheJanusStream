<script lang="ts">
	import FoundryExhibit from '$lib/components/FoundryExhibit.svelte';
	import SymbiosPipeline from '$lib/components/SymbiosPipeline.svelte';
    import type { PageData } from './$types';

	// Svelte 5 syntax for accepting server load data
	let { data }: { data: PageData } = $props();
</script>

<main class="mx-auto max-w-7xl px-6 py-16">
	<header class="mb-20 text-center">
		<h1 class="mb-6 text-5xl font-bold tracking-tighter">
			<span class="text-white">The</span><span class="text-janus-teal">Janus</span><span
				class="text-janus-amber">Stream</span
			>
		</h1>
		<p class="mx-auto max-w-2xl text-xl text-gray-400">
			The public forge for Sovereign Symbiosis. We build local-first cognitive environments and
			physics-driven generative tooling.
		</p>
	</header>

	<FoundryExhibit githubData={data.github} />

	<SymbiosPipeline cratesData={data.crates} />
</main>
