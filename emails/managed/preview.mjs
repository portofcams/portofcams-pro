// Render all 7 archetype emails to emails/managed/preview/<archetype>.html for eyeballing.
// Zero dependencies. Usage:  node emails/managed/preview.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ARCHETYPE_KEYS, buildArchetypeEmail } from './archetypes.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, 'preview');
mkdirSync(outDir, { recursive: true });

// Sample personalization so the previews show what a real send looks like.
const sampleCtx = {
  venueName: 'The Reef House',
  firstName: 'Sam',
  recipientEmail: 'owner@example.com',
  viewLine: 'the break off your seawall',
};

let index = '<!doctype html><meta charset="utf-8"><title>Managed email previews</title>' +
  '<body style="font-family:system-ui,sans-serif;background:#080808;color:#f5f0e8;padding:28px;line-height:1.7">' +
  '<h1 style="font-family:Georgia,serif">Managed / CamSpot email previews</h1>' +
  '<p style="color:#8f897d">Sample personalization — venue "The Reef House", first name "Sam".</p><ul>';

for (const key of ARCHETYPE_KEYS) {
  const { subject, html } = buildArchetypeEmail(key, { ...sampleCtx, refSlug: `preview-${key}` });
  const file = `${key}.html`;
  writeFileSync(join(outDir, file), html);
  index += `<li><a style="color:#e8c97a" href="./${file}">${key}</a> &mdash; <em style="color:#cfc9bd">${subject}</em></li>`;
  console.log(`✓ ${key.padEnd(10)} -> preview/${file}   subject: ${subject}`);
}

index += '</ul></body>';
writeFileSync(join(outDir, 'index.html'), index);
console.log('\nOpen emails/managed/preview/index.html in a browser to review all seven.');
