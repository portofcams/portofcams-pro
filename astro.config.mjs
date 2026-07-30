// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { cameras } from './src/data/cameras.ts';

const SITE = 'https://pro.portofcams.com';

/**
 * Video sitemap entries, keyed by the camera page's path.
 *
 * Only genuinely-live feeds get an entry: our own HLS stream plus the credited
 * YouTube live streams. The Windy embeds are auto-updating day-loop timelapses
 * (isLive: false in cameras.ts), not live video — they deliberately get no entry,
 * exactly like they get no VideoObject schema on /camera/[id].astro. Keeping the
 * two signals derived from the same `source` check is the point: they can't drift.
 *
 * @astrojs/sitemap's SitemapItem type is a `Pick<>` that omits `video`, but that's
 * a compile-time constraint only — write-sitemap.js does `Readable.from(sourceData)`
 * straight into the underlying `sitemap` package's stream with no field filtering,
 * and that package does support video/image entries (hence the xmlns:video the
 * generated sitemap has always declared but never used).
 */
const videoByPath = new Map();
for (const cam of cameras) {
  if (cam.source !== 'native' && cam.source !== 'youtube') continue;
  const ytId = cam.embedUrl?.match(/embed\/([^?&]+)/)?.[1] ?? null;
  videoByPath.set(`/camera/${cam.id}/`, {
    thumbnail_loc: ytId
      ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
      : `${SITE}/clips/lewers-waikiki.jpg`,
    title: `${cam.name} — Live Camera`,
    description: cam.description,
    player_loc: cam.embedUrl ?? `${SITE}/camera/${cam.id}/`,
    live: 'yes',
    family_friendly: 'yes',
  });
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
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
      serialize: (item) => {
        let path;
        try {
          path = new URL(item.url).pathname;
        } catch {
          return item;
        }
        const video = videoByPath.get(path);
        return video ? { ...item, video: [video] } : item;
      },
    }),
  ],
});
