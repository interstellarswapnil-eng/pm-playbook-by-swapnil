// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://interstellarswapnil-eng.github.io',
	base: '/pm-playbook-by-swapnil',
	integrations: [
		sitemap(),
		starlight({
			title: 'PM Playbook by Swapnil',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/interstellarswapnil-eng/pm-playbook-by-swapnil' }],
			components: {
				Head: './src/components/SEOHead.astro',
			},
			head: [
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'PM Playbook by Swapnil' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
				{ tag: 'meta', attrs: { name: 'twitter:creator', content: '@swapnilkhalekar' } },
			],
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
