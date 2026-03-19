<script lang="ts">
    let { cratesData }: { cratesData: Record<string, any> } = $props();
    
    // Helper to format crate data
    const getCrate = (name: string) => {
        const c = cratesData?.[name];
        return { name, version: c?.version || 'v?.?.?', desc: c?.description || 'Loading...' };
    };
</script>

<section class="relative border border-glow-teal bg-janus-bg/80 backdrop-blur-md p-8 rounded-lg overflow-hidden">
    <div class="absolute inset-0 bg-[url('/symbios.png')] bg-center bg-no-repeat bg-contain opacity-15 pointer-events-none"></div>
    <h2 class="text-3xl text-janus-teal mb-2">The Symbios Ecosystem</h2>
    <p class="text-gray-400 mb-12">Morphogenetic engineering mapped from pure logic to interactive WASM canvases. Data flows bottom to top.</p>

    <div class="flex flex-col-reverse gap-6 relative">

        <!-- Layer 1 (bottom): Sovereign Logic -->
        <div class="z-10">
            <h3 class="text-lg text-janus-slate border-b border-janus-slate pb-2 mb-4">1. Game-engine agnostic (Rust)</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                {#each ['symbios-genetics', 'symbios','symbios-turtle-3d', 'symbios-robot', 'symbios-ground', 'symbios-tensor', 'symbios-shape', 'symbios-neat'] as crate (crate)}
                    {@const c = getCrate(crate)}
                    <div class="p-4 border border-janus-slate/40 rounded bg-black/50 hover:border-janus-teal transition-colors">
                        <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-gray-200">{c.name}</span>
                            <span class="text-xs text-janus-teal">{c.version}</span>
                        </div>
                        <p class="text-xs text-gray-500 line-clamp-2">{c.desc}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Layer 2 (middle): Bevy Integration -->
        <div class="z-10">
            <h3 class="text-lg text-janus-slate border-b border-janus-slate pb-2 mb-4">2. Integration Layer (Bevy)</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                {#each ['bevy_symbios', 'bevy_symbios_texture', 'bevy_symbios_ground', 'bevy_symbios_shape'] as crate (crate)}
                    {@const c = getCrate(crate)}
                    <div class="p-4 border border-janus-slate/40 rounded bg-black/50 hover:border-janus-purple transition-colors">
                        <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-gray-200">{c.name}</span>
                            <span class="text-xs text-janus-purple">{c.version}</span>
                        </div>
                        <p class="text-xs text-gray-500 line-clamp-2">{c.desc}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Layer 3 (top): Applications -->
        <div class="z-10">
            <h3 class="text-lg text-janus-slate border-b border-janus-slate pb-2 mb-4">3. Interactive Canvases (WASM)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div class="p-4 border border-janus-amber/60 rounded bg-janus-amber/5">
                    <span class="font-bold text-janus-amber block mb-2">lsystem-explorer</span>
                    <p class="text-xs text-gray-400 mb-4">Interactive Evolutionary Computation workbench.</p>
                    <a href="https://thejanusstream.github.io/lsystem-explorer" target="_blank" class="block text-center w-full py-2 bg-janus-amber/10 text-gray-200 text-xs uppercase tracking-widest border border-janus-amber rounded hover:bg-janus-amber hover:text-black transition-colors">Launch App</a>
                </div>

                <div class="p-4 border border-janus-amber/60 rounded bg-janus-amber/5">
                    <span class="font-bold text-janus-amber block mb-2">symbios-ground-lab</span>
                    <p class="text-xs text-gray-400 mb-4">Procedural terraforming & urban tensor mapping.</p>
                    <a href="https://thejanusstream.github.io/symbios-ground-lab" target="_blank" class="block text-center w-full py-2 bg-janus-amber/10 text-gray-200 text-xs uppercase tracking-widest border border-janus-amber rounded hover:bg-janus-amber hover:text-black transition-colors">Launch App</a>
                </div>

                <div class="p-4 border border-janus-amber/60 rounded bg-janus-amber/5">
                    <span class="font-bold text-janus-amber block mb-2">symbios-robot-lab</span>
                    <p class="text-xs text-gray-400 mb-4">Robots with evolving bodies & brains.</p>
                    <a href="https://thejanusstream.github.io/symbios-robot-lab" target="_blank" class="block text-center w-full py-2 bg-janus-amber/10 text-gray-200 text-xs uppercase tracking-widest border border-janus-amber rounded hover:bg-janus-amber hover:text-black transition-colors">Launch App</a>
                </div>

                <!-- Artificial Life Explorer (Non-Symbios but fits here)
                <div class="p-4 border border-janus-teal/60 rounded bg-janus-teal/5">
                    <span class="font-bold text-janus-teal block mb-2">artificial-life-explorer</span>
                    <p class="text-xs text-gray-400 mb-4">Active matter & Reaction-Diffusion simulations.</p>
                    <a href="https://thejanusstream.github.io/artificial-life-explorer" target="_blank" class="block text-center w-full py-2 bg-janus-teal/10 text-gray-200 text-xs uppercase tracking-widest border border-janus-teal/50 rounded hover:bg-janus-teal hover:text-black transition-colors">Launch App</a>
                </div>
                -->

            </div>
        </div>

    </div>
</section>