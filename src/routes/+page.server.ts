import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

const CRATES = [
    'symbios', 'symbios-genetics', 'symbios-tensor', 'symbios-wfc', 'symbios-bsp',
    'bevy_symbios', 'bevy_symbios_texture', 'bevy_symbios_ground', 'bevy_symbios_shape'
];

const GITHUB_REPOS = [
    'TheJanusStream/the-janus-foundry',
    'TheJanusStream/symbios',
    'TheJanusStream/artificial-life-explorer'
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Type the load function here
export const load: PageServerLoad = async ({ fetch }) => {
    const cratesData: Record<string, any> = {};
    const githubData: Record<string, any> = {};

    console.log("=== Hydrating Sovereign Exhibit ===");

    // 1. Fetch GitHub Data
    const ghHeaders = env.GITHUB_TOKEN ? { Authorization: `Bearer ${env.GITHUB_TOKEN}` } : {};
    for (const repo of GITHUB_REPOS) {
        try {
            const res = await fetch(`https://api.github.com/repos/${repo}`, { headers: ghHeaders });
            if (res.ok) {
                const data = await res.json();
                githubData[repo] = {
                    stars: data.stargazers_count,
                    description: data.description,
                    url: data.html_url
                };
            }
        } catch (e) {
            console.error(`Failed to fetch GitHub repo ${repo}:`, e);
        }
    }

    // 2. Fetch Crates.io Data (Throttled!)
    for (const crate of CRATES) {
        try {
            const res = await fetch(`https://crates.io/api/v1/crates/${crate}`, {
                headers: { 'User-Agent': 'TheJanusStream-Portfolio-Builder (github.com/TheJanusStream)' }
            });
            if (res.ok) {
                const data = await res.json();
                cratesData[crate] = {
                    version: data.crate.max_version,
                    downloads: data.crate.downloads,
                    description: data.crate.description
                };
            }
            await delay(1100);
        } catch (e) {
            console.error(`Failed to fetch crate ${crate}:`, e);
        }
    }

    console.log("=== Hydration Complete ===");

    return {
        crates: cratesData,
        github: githubData
    };
};