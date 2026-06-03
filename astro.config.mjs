// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://portofcams.com',
  // Per-venue /business/{slug} outreach landing pages (direct-link, noindex) and
  // /embed/{slug} bare iframe players (noindex) don't belong in the sitemap.
  // Their parents /business/ and /embed/ stay.
  integrations: [sitemap({ filter: (page) => !/\/(business|embed)\/[^/]+/.test(page) })],
});
