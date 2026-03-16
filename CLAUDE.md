# PortOfCams Pro

## Overview
Live streaming platform for venues, events, and destinations. Astro static site on Cloudflare Pages.

## Stack
- **Astro 5** static site
- **Fonts**: Cormorant Garamond (display), DM Sans (body), DM Mono (mono)
- **Theme**: Dark + gold (#c9a84c), grain overlay
- **Hosting**: Cloudflare Pages (`portofcams-pro` project)
- **Domain**: `pro.portofcams.com`

## Deploy
```bash
./deploy.sh
```
This builds, pushes to GitHub, and deploys to Cloudflare Pages.

**Important**: Cloudflare Pages is NOT connected to GitHub for auto-deploy. You must use `./deploy.sh` or `npx wrangler pages deploy dist --project-name portofcams-pro --branch pro --commit-dirty=true` after building.

## Key Files
- `src/pages/index.astro` — Homepage (centered Apple-style hero, use cases, featured live feeds)
- `src/layouts/Layout.astro` — Global layout (nav, footer, CSS vars, grain overlay)
- `src/data/cameras.ts` — Camera data (HLS URLs + Windy embed URLs)
- `src/components/HLSPlayer.astro` — Full HLS player with controls
- `src/pages/browse.astro` — Camera directory with region/tag filters
- `src/pages/camera/[id].astro` — Individual camera page

## Camera Sources
- **HLS** (our server): `cams.portofcams.com/{slug}/index.m3u8` — only `east-lewers-st` is always-on, others are on-demand
- **Windy embeds**: iframe from `webcams.windy.com` — most cameras use this

## Conventions
- Homepage featured cameras are hand-picked in `index.astro` frontmatter (mix of HLS + Windy)
- HLS streams lazy-load via IntersectionObserver
- All CSS scoped per page, global vars in Layout.astro
