<script lang="ts">
    let { cratesData }: { cratesData: Record<string, any> } = $props();
    
    // Helper to format crate data
    const getCrate = (name: string) => {
        const c = cratesData?.[name];
        return { name, version: c?.version || 'v?.?.?', desc: c?.description || 'Loading...' };
    };
</script>

<section class="border border-glow-teal bg-janus-bg/80 backdrop-blur-md p-8 rounded-lg">
    <h2 class="text-3xl text-janus-teal mb-2">The Symbios Ecosystem</h2>
    <p class="text-gray-400 mb-12">Morphogenetic engineering mapped from pure logic to interactive WASM canvases. Data flows left to right.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        <!-- Column 1: Sovereign Logic -->
        <div class="space-y-6 z-10">
            <h3 class="text-lg text-janus-slate border-b border-janus-slate pb-2 mb-4">1. Sovereign Logic (No_std/Rust)</h3>
            {#each ['symbios', 'symbios-genetics', 'symbios-tensor', 'symbios-wfc'] as crate}
                {@const c = getCrate(crate)}
                <div class="p-4 border border-janus-slate/40 rounded bg-black/50 hover:border-janus-teal transition-colors">
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-bold text-gray-200">{c.name}</span>
                        <span class="text-xs text-janus-teal">{c.version}</span>
                    </div>
                    <p class="text-xs text-gray-500 truncate">{c.desc}</p>
                </div>
            {/each}
        </div>

        <!-- Column 2: Bevy Integration -->
        <div class="space-y-6 z-10">
            <h3 class="text-lg text-janus-slate border-b border-janus-slate pb-2 mb-4">2. Integration Layer (Bevy 0.17)</h3>
            {#each ['bevy_symbios', 'bevy_symbios_texture', 'bevy_symbios_ground', 'bevy_symbios_shape'] as crate}
                {@const c = getCrate(crate)}
                <div class="p-4 border border-janus-slate/40 rounded bg-black/50 hover:border-janus-purple transition-colors">
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-bold text-gray-200">{c.name}</span>
                        <span class="text-xs text-janus-purple">{c.version}</span>
                    </div>
                    <p class="text-xs text-gray-500 truncate">{c.desc}</p>
                </div>
            {/each}
        </div>

        <!-- Column 3: Applications -->
        <div class="space-y-6 z-10">
            <h3 class="text-lg text-janus-slate border-b border-janus-slate pb-2 mb-4">3. Interactive Canvases (WASM)</h3>
            
            <div class="p-4 border border-janus-amber/60 rounded bg-janus-amber/5">
                <span class="font-bold text-janus-amber block mb-2">lsystem-explorer</span>
                <p class="text-xs text-gray-400 mb-4">Interactive Evolutionary Computation workbench.</p>
                <a href="https://thejanusstream.github.io/lsystem-explorer" target="_blank" class="block text-center w-full py-2 bg-janus-amber/20 text-janus-amber text-xs uppercase tracking-widest border border-janus-amber/50 rounded hover:bg-janus-amber hover:text-black transition-colors">Launch App</a>
            </div>

            <div class="p-4 border border-janus-amber/60 rounded bg-janus-amber/5">
                <span class="font-bold text-janus-amber block mb-2">symbios-ground-lab</span>
                <p class="text-xs text-gray-400 mb-4">Procedural terraforming & urban tensor mapping.</p>
                <a href="https://thejanusstream.github.io/symbios-ground-lab" target="_blank" class="block text-center w-full py-2 bg-janus-amber/20 text-janus-amber text-xs uppercase tracking-widest border border-janus-amber/50 rounded hover:bg-janus-amber hover:text-black transition-colors">Launch App</a>
            </div>
            
            <!-- Artificial Life Explorer (Non-Symbios but fits here) -->
            <div class="p-4 border border-janus-teal/60 rounded bg-janus-teal/5">
                <span class="font-bold text-janus-teal block mb-2">artificial-life-explorer</span>
                <p class="text-xs text-gray-400 mb-4">Active matter & Reaction-Diffusion simulations.</p>
                <a href="https://thejanusstream.github.io/artificial-life-explorer" target="_blank" class="block text-center w-full py-2 bg-janus-teal/20 text-janus-teal text-xs uppercase tracking-widest border border-janus-teal/50 rounded hover:bg-janus-teal hover:text-black transition-colors">Launch App</a>
            </div>
        </div>

    </div>
</section>