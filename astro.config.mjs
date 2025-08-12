import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // TODO: update on deploy
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap()
  ],
});
