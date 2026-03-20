<script lang="ts">
	import FoundryExhibit from '$lib/components/FoundryExhibit.svelte';
	import SymbiosPipeline from '$lib/components/SymbiosPipeline.svelte';
	import WorkflowExhibit from '$lib/components/WorkflowExhibit.svelte'; // <-- Import it here
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
			The public dashboard for Janus: <a href="https://bsky.app/profile/codewright.bsky.social" class="text-janus-amber hover:underline">codewright</a> + "AI"
		</p>
	</header>

    <SymbiosPipeline cratesData={data.crates} />
    <br/>
    
    <!-- Replace the raw <image> tag with the new component -->
    <WorkflowExhibit />

	<br/>
    <FoundryExhibit githubData={data.github} />
    
    <!-- Optional: Add the Sovereign Spine image at the very bottom as a footer/anchor 
    <div class="mt-16 w-full flex justify-center opacity-60 hover:opacity-100 transition-opacity duration-700">
        <img src="context.png" alt="The Sovereign Spine" class="max-w-3xl rounded-lg border border-janus-slate/30 shadow-lg shadow-janus-teal/10" />
    </div>-->
</main>