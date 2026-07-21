// Send the managed / CamSpot per-archetype outreach via Resend.
//
// Usage:
//   node emails/managed/send.mjs --dry-run                  # render only (no deps, no send)
//   node emails/managed/send.mjs --test you@example.com     # one of each archetype to yourself
//   node emails/managed/send.mjs --test you@ --only hotel   # just the hotel email to yourself
//   node emails/managed/send.mjs                            # send to everyone in recipients.json
//   node emails/managed/send.mjs --only marina --limit 10
//
// Env:
//   RESEND_API_KEY   required for real sends
//   MAIL_FROM        e.g. "John — Port of Cams <john@mg.portofcams.com>"  (a Resend-verified domain)
//   REPLY_TO         defaults to portofcams@gmail.com
//
// Recipients file (emails/managed/recipients.json) is an array of:
//   { email, archetype, venueName?, firstName?, refSlug?, viewLine?, heroImage? }

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ARCHETYPE_KEYS, buildArchetypeEmail, buildArchetypeTextEmail } from './archetypes.mjs';

const here = dirname(fileURLToPath(import.meta.url));

// ---- args ----
const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const val = (f, d) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const DRY = has('--dry-run');
const TEXT_MODE = has('--text');
const SELF_SERVE = has('--selfserve');
const TEST = val('--test', null);
const ONLY = val('--only', null);
const LIMIT = parseInt(val('--limit', '0'), 10) || 0;
const FILE = val('--file', join(here, 'recipients.json'));
const FROM = process.env.MAIL_FROM || 'John — Port of Cams <john@portofcams.com>';
const REPLY_TO = process.env.REPLY_TO || 'portofcams@gmail.com';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- build recipient list ----
let recipients = [];
if (TEST) {
  const keys = ONLY ? [ONLY] : ARCHETYPE_KEYS;
  recipients = keys.map((archetype) => ({
    email: TEST, archetype, venueName: 'Test Venue', firstName: 'there', refSlug: `test-${archetype}`,
  }));
} else {
  let raw;
  try { raw = readFileSync(FILE, 'utf8'); }
  catch {
    console.error(`No recipients file at ${FILE}.\nCopy recipients.example.json -> recipients.json, or use --test you@example.com.`);
    process.exit(1);
  }
  recipients = JSON.parse(raw);
  if (ONLY) recipients = recipients.filter((r) => r.archetype === ONLY);
  if (LIMIT) recipients = recipients.slice(0, LIMIT);
}

// ---- validate + render ----
const jobs = [];
for (const r of recipients) {
  if (!r.email || !r.archetype) { console.warn('skip (missing email/archetype):', JSON.stringify(r)); continue; }
  if (!ARCHETYPE_KEYS.includes(r.archetype)) { console.warn(`skip (unknown archetype "${r.archetype}"):`, r.email); continue; }
  if (TEXT_MODE) {
    const { subject, text } = buildArchetypeTextEmail(r.archetype, { ...r, selfServe: SELF_SERVE });
    jobs.push({ email: r.email, archetype: r.archetype, subject, text });
  } else {
    const { subject, html } = buildArchetypeEmail(r.archetype, r);
    jobs.push({ email: r.email, archetype: r.archetype, subject, html });
  }
}

if (!jobs.length) { console.error('No valid emails to send.'); process.exit(1); }
console.log(`${DRY ? '[dry-run] ' : ''}${jobs.length} email(s)  ·  from ${FROM}  ·  reply-to ${REPLY_TO}`);

// ---- dry run: write files, no send, no deps ----
if (DRY) {
  const outDir = join(here, 'preview');
  mkdirSync(outDir, { recursive: true });
  for (const j of jobs) {
    const f = `send-${j.archetype}-${j.email.replace(/[^a-z0-9]/gi, '_')}.${j.text ? 'txt' : 'html'}`;
    writeFileSync(join(outDir, f), j.text || j.html);
    console.log(`  • ${j.email.padEnd(30)} ${j.archetype.padEnd(10)} "${j.subject}"  -> preview/${f}`);
  }
  console.log('\nNo emails sent (--dry-run). Review the files in emails/managed/preview/.');
  process.exit(0);
}

// ---- real send ----
if (!process.env.RESEND_API_KEY) { console.error('RESEND_API_KEY is not set. Refusing to send.'); process.exit(1); }
let Resend;
try { ({ Resend } = await import('resend')); }
catch { console.error('The "resend" package is not installed. Run:  npm i resend'); process.exit(1); }
const resend = new Resend(process.env.RESEND_API_KEY);

let ok = 0, fail = 0;
for (const j of jobs) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: j.email,
      replyTo: REPLY_TO,
      subject: j.subject,
      ...(j.text ? { text: j.text } : { html: j.html }),
    });
    if (error) throw error;
    ok++;
    console.log(`  ✓ ${j.email.padEnd(30)} ${j.archetype.padEnd(10)} ${data?.id || ''}`);
  } catch (e) {
    fail++;
    console.error(`  ✗ ${j.email.padEnd(30)} ${j.archetype.padEnd(10)} ${e?.message || e}`);
  }
  await sleep(600); // stay under Resend's default rate limit
}
console.log(`\nDone: ${ok} sent, ${fail} failed.`);
