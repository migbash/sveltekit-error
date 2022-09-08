import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

const config: UserConfig = {
	plugins: [chunkSplitPlugin(), sveltekit()]
};

export default config;
