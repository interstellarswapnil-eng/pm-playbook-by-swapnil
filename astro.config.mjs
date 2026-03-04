// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://interstellarswapnil-eng.github.io',
	base: '/pm-playbook-by-swapnil/',
	integrations: [
		starlight({
			title: 'PM Playbook by Swapnil',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/interstellarswapnil-eng/pm-playbook-by-swapnil' }],
			sidebar: [
				{ label: 'About', slug: 'about' },
				{ label: 'Guides', autogenerate: { directory: 'guides' } },
				{ label: 'Templates', autogenerate: { directory: 'templates' } },
				{ label: 'Toolbox', autogenerate: { directory: 'toolbox' } },
				{ label: 'Resources', autogenerate: { directory: 'resources' } },
			],
		}),
	],
});
