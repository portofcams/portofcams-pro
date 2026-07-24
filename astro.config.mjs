// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pro.portofcams.com',
  // Per-venue /business/{slug} outreach landing pages (direct-link, noindex),
  // /embed/{slug} bare iframe players (noindex), and /managed/demo/{archetype}
  // walk-in/warm-email leave-behinds (noindex) don't belong in the sitemap.
  // Their parent /embed/ stays; bare /business, /checkout, and /livestream-pass
  // are noindexed pages too (single-prospect page, transactional page, dev demo).
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(business|embed)\/[^/]+\/?$/.test(page) &&
        !/\/managed\/demo\/[^/]+\/?$/.test(page) &&
        !/\/business\/?$/.test(page) &&
        !/\/checkout\/?$/.test(page) &&
        !/\/livestream-pass\/?$/.test(page),
    }),
  ],
});
