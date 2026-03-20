<script lang="ts">
    // No dynamic props needed for this specific exhibit,
    // but the script tag is here for future extensibility.
</script>

<section class="group relative rounded-lg overflow-hidden border border-janus-slate/40">
    <div class="absolute inset-0 bg-[url('/workshop.png')] bg-center bg-no-repeat bg-cover transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"></div>
    <div class="absolute inset-0 bg-janus-bg/80 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

    <div class="relative z-10 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <header class="mb-8">
            <h2 class="text-3xl text-gray-100 mb-2">The Sovereign Workflow</h2>
            <p class="text-gray-400 max-w-3xl leading-relaxed">
                We do not build autonomous agents to replace human effort; we build symbiotic pipelines to augment human capability.
                This exhibit visualizes our <strong>"Glass Box"</strong> approach to AI engineering, moving from intent to verified reality.
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Step 1: Amber / Intent -->
            <div class="relative pl-6">
                <div class="absolute left-0 top-1 bottom-1 w-1 bg-janus-amber rounded-full shadow-[0_0_8px_rgba(253,195,73,0.6)]"></div>
                <h3 class="text-xl text-janus-amber mb-2 font-bold tracking-wide">1. Strategic Intent</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                    The human acts as the Strategic Director. We forge the "Golden Chain" of intent using local-first CLI tools to manage granular tasks, providing the indispensable <em>Ground Truth</em> and architectural vision that guides the AI's focus.
                </p>
            </div>

            <!-- Step 2: Teal / Fabrication -->
            <div class="relative pl-6">
                <div class="absolute left-0 top-1 bottom-1 w-1 bg-janus-teal rounded-full shadow-[0_0_8px_rgba(57,197,207,0.6)]"></div>
                <h3 class="text-xl text-janus-teal mb-2 font-bold tracking-wide">2. Glass Box Fabrication</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                    The AI Ensemble executes the intent. Instead of hiding the reasoning process in a black box, all code, logic, and structure are woven transparently. The system is structurally constrained by our immutable protocols.
                </p>
            </div>

            <!-- Step 3: Red / Audit -->
            <div class="relative pl-6">
                <div class="absolute left-0 top-1 bottom-1 w-1 bg-janus-red rounded-full shadow-[0_0_8px_rgba(248,81,73,0.6)]"></div>
                <h3 class="text-xl text-janus-red mb-2 font-bold tracking-wide">3. Adversarial Audit</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                    Artifacts face a "Zero-Trust Roast" before integration. Specialized auditor personas actively try to break the generated code. We embrace this friction; compiler errors and logical flaws are the fuel for our next iteration.
                </p>
            </div>

        </div>
    </div>
</section>
