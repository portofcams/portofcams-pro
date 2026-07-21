# Managed / CamSpot outreach emails

Seven per-archetype HTML emails for the **Managed Marketing Cam** pitch — one per venue
type, each mirroring the angle of its landing page at `/managed/demo/<archetype>` and
linking there with a `?ref=` attribution slug. Dark + gold brand, bulletproof inline-styled
tables (Gmail / Apple Mail / Outlook safe), sent via **Resend**.

Pattern mirrors `zonahaps/src/lib/emails/outreach/` — a shared layout plus per-audience
builders that return `{ subject, html }`, personalized in code (no ESP merge tags).

## Files
- `layout.mjs` — shared dark+gold chrome (`buildManagedEmailHtml`) + brand/contact constants
- `archetypes.mjs` — the 7 archetypes + `buildArchetypeEmail(archetype, ctx)`
- `preview.mjs` — render all 7 to `preview/*.html` for eyeballing (no deps)
- `send.mjs` — Resend sender with `--dry-run` / `--test` / `--only` / `--limit`
- `recipients.example.json` — copy to `recipients.json` and fill in

Archetypes: `hotel`, `marina`, `surf-shop`, `dive`, `club`, `venue`, `rental`.

## 1. Preview (no dependencies)
```bash
node emails/managed/preview.mjs
open emails/managed/preview/index.html
```

## 2. Send yourself a test
```bash
export RESEND_API_KEY=...                                   # your Resend key
export MAIL_FROM="John — Port of Cams <john@mg.portofcams.com>"   # a Resend-verified domain
npm i resend                                                # one-time; not a site dependency
node emails/managed/send.mjs --test you@example.com         # one of each archetype
node emails/managed/send.mjs --test you@example.com --only hotel
```

## 3. Send for real
```bash
cp emails/managed/recipients.example.json emails/managed/recipients.json
# edit recipients.json with real venues, then dry-run first:
node emails/managed/send.mjs --dry-run
node emails/managed/send.mjs                # sends to everyone
node emails/managed/send.mjs --only surf-shop --limit 20
```

## Personalization (per recipient in recipients.json)
| field | required | effect |
|-------|----------|--------|
| `email` | ✓ | recipient |
| `archetype` | ✓ | which of the 7 templates |
| `venueName` | – | woven into subject (hotel/venue) + signoff |
| `firstName` | – | "Hi \<name\> —" greeting |
| `refSlug` | – | `?ref=` attribution (defaults to `demo-<archetype>`) |
| `viewLine` | – | personal signoff, e.g. "the break off your seawall" |
| `heroImage` | – | override the hero (e.g. a hosted still of *their* view) |

## Before any cold send — read this
- **Verify a sending domain in Resend** (SPF/DKIM). Don't send bulk cold mail from the
  shared `onboarding@resend.dev` fallback — deliverability will be poor and it's not yours.
  Use a subdomain like `mg.portofcams.com` so replies/reputation stay off the main domain.
- **CAN-SPAM**: set a **real physical mailing address** in `layout.mjs` (`CONTACT.mailingAddress`
  is a placeholder) and honor the "reply *remove*" opt-out on every reply. Both are legally required.
- **Resend + cold email**: Resend is built for transactional/opt-in mail. For hand-picked,
  low-volume venue outreach this is fine; if you scale to high-volume cold, use a dedicated
  cold-email tool (Instantly/Smartlead) with inbox rotation + warmup instead, to protect the
  domain's reputation.
- The `replyTo` field name assumes Resend Node SDK v3+. If you're on an older version and it
  errors, change `replyTo` → `reply_to` in `send.mjs`.
