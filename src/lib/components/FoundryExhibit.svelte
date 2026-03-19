<script lang="ts">
	let { githubData }: { githubData: Record<string, any> } = $props();
	const foundryRepo = githubData?.['TheJanusStream/the-janus-foundry'] || {};
</script>

<section class="border-glow-amber bg-janus-bg/80 mb-16 rounded-lg border p-8 backdrop-blur-md">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<!-- Left: The Software -->
		<div>
			<h2 class="text-janus-amber mb-4 text-3xl">The Janus Foundry</h2>
			<p class="mb-6 leading-relaxed text-gray-400">
				A local-first, privacy-centric cognitive environment. Built with Tauri and Svelte, it embeds
				a WASM Prolog reasoning engine to validate AI logic against structural graphs, enabling a
				high-bandwidth "Glass Box" partnership.
			</p>
			<div class="text-janus-slate mb-8 flex items-center space-x-6 text-sm">
				<span class="flex items-center"
					><span class="text-janus-teal mr-2">★</span> {foundryRepo.stars || '---'} Stars</span
				>
				<span>Sovereign Local Stack</span>
			</div>
			<div class="flex space-x-4">
				<a
					href={foundryRepo.url}
					class="bg-janus-teal/10 text-janus-teal border-janus-teal hover:bg-janus-teal/20 rounded border px-6 py-2 transition-colors"
					>View Source</a
				>
				<a
					href="{foundryRepo.url}/releases"
					class="bg-janus-amber/10 text-janus-amber border-janus-amber hover:bg-janus-amber/20 rounded border px-6 py-2 transition-colors"
					>Download GUI</a
				>
			</div>
		</div>

		<!-- Right: The Workflow Diagram (CSS/HTML based) -->
		<div class="flex flex-col justify-center space-y-4 text-sm">
			<h3 class="border-janus-slate mb-2 border-b pb-2 text-xl text-gray-200">
				The Co-Evolution Cycle
			</h3>
			<div class="border-janus-slate/50 rounded border bg-black/30 p-4">
				<span class="text-janus-teal font-bold">1. Hypothesis (AI):</span> Generates logic, code, or structures.
			</div>
			<div class="bg-janus-slate/50 mx-auto h-6 w-1"></div>
			<div class="border-janus-amber/50 rounded border bg-black/30 p-4">
				<span class="text-janus-amber font-bold">2. Ground Truth (Human):</span> Executes, compiles, and
				tests in reality.
			</div>
			<div class="bg-janus-slate/50 mx-auto h-6 w-1"></div>
			<div class="border-janus-purple/50 rounded border bg-black/30 p-4">
				<span class="text-janus-purple font-bold">3. Correction (Synthesis):</span> Feedback refines the
				AI's internal model.
			</div>
		</div>
	</div>
</section>
