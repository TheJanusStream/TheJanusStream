<script lang="ts">
	import ExhibitCarousel from '$lib/components/ExhibitCarousel.svelte';
	import FoundryExhibit from '$lib/components/FoundryExhibit.svelte';
	import SymbiosPipeline from '$lib/components/SymbiosPipeline.svelte';
	import WorkflowExhibit from '$lib/components/WorkflowExhibit.svelte';
    import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const exhibitLabels = ['Symbios', 'Workflow', 'Foundry'];
</script>

<main class="mx-auto max-w-7xl px-6 py-16">
	<header class="mb-20 text-center">
		<h1 class="mb-6 text-5xl font-bold tracking-tighter">
			<span class="text-white">The</span><span class="text-janus-teal">Janus</span><span
				class="text-janus-amber">Stream</span
			>
		</h1>
		<p class="mx-auto max-w-2xl text-xl text-gray-400">
			The public dashboard for Janus: <a href="https://bsky.app/profile/codewright.bsky.social" class="text-janus-amber hover:underline">codewright</a> + "AI"
		</p>
	</header>

	<ExhibitCarousel labels={exhibitLabels}>
		{#snippet children(current)}
			{#if current === 0}
				<SymbiosPipeline cratesData={data.crates} githubData={data.github} />
			{:else if current === 1}
				<WorkflowExhibit />
			{:else}
				<FoundryExhibit githubData={data.github} />
			{/if}
		{/snippet}
	</ExhibitCarousel>
</main>
