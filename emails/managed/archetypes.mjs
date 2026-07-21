// Seven per-archetype builders for the Managed Marketing Cam ("CamSpot") outreach.
// Content mirrors src/pages/managed/demo/[archetype].astro so the email and the
// landing page it links to tell one continuous story. Each builder returns
// { subject, html }, personalized from ctx at send time (no ESP merge tags).

import { buildManagedEmailHtml } from './layout.mjs';

const SITE = 'https://pro.portofcams.com';
const GOLD = '#c9a84c';
const WHITE = '#f5f0e8';

// Gold emphasis span for the second line of a headline.
const g = (s) => `<span style="color:${GOLD};">${s}</span>`;

// Shared pricing anchor, echoing the managed page's compare line.
const TERMS = `From <strong style="color:${WHITE};">$149/mo</strong> &middot; pro install from $1,490 &middot; month-to-month, cancel anytime`;

export const ARCHETYPES = {
  hotel: {
    label: 'Hotels & resorts',
    eyebrow: 'Prepared for Waikīkī hotels & resorts',
    subject: (c) => `${c.venueName ? c.venueName + ': ' : ''}a live beachfront for your booking page`,
    preview: 'A live view of your sand, on your own site — the booking-page hero that never needs a photographer.',
    headline: 'Your beachfront,<br/>' + g('live on your booking page.'),
    lede: 'People book the ocean they can see. A live view of your stretch of sand — on your own site, under your own brand — is the booking-page hero that never needs a photographer, a reshoot, or a sunny day scheduled in advance.',
    points: [
      { h: 'The view sells the room', b: 'Guests deciding between two properties pick the one whose ocean they just watched. Your view becomes a reason to book direct instead of through an OTA.' },
      { h: 'Fresh social, zero effort', b: 'Every month we cut branded sunset and golden-hour clips from your feed — ready for your Instagram, no content team required.' },
      { h: 'Handled end to end', b: 'We mount it, aim it, host it, watch it, and swap it if the salt wins. Your staff never touches a cable.' },
    ],
  },

  marina: {
    label: 'Marinas & harbors',
    eyebrow: 'Prepared for Oʻahu marinas & harbors',
    subject: () => 'The harbor cam your slip-holders would check daily',
    preview: 'Wind on the water, space at the fuel dock, the fleet — the page your slip-holders open every morning.',
    headline: 'Slip-holders check the harbor<br/>' + g('before they drive down.'),
    lede: 'A live harbor cam is the page your slip-holders open every morning — wind on the water, space at the fuel dock, whether the fleet is in. That daily habit keeps your marina top-of-mind, and puts transient moorage in front of every visiting boater who finds the feed.',
    points: [
      { h: 'The daily-check habit', b: 'Conditions, chop, and traffic at a glance. Your website becomes the first tab of every boat owner’s morning.' },
      { h: 'Transient moorage marketing', b: 'Visiting boaters watch the harbor before they commit. A live view answers the question every one of them has: what does it actually look like in there?' },
      { h: 'A public eye on the docks', b: 'The same feed works as a casual look at the docks after hours — not a security system, but a public view that never blinks.' },
    ],
  },

  'surf-shop': {
    label: 'Surf & dive shops',
    eyebrow: 'Prepared for Oʻahu surf & dive shops',
    subject: () => 'Dawn patrol could check your break on your site',
    preview: 'Own the dawn-patrol break check — and the scroll to your rentals, lessons, and boards.',
    headline: 'Dawn patrol checks your break —<br/>' + g('on your site, not someone else’s.'),
    lede: 'Every surfer on this island checks a cam before they drive. Right now they check someone else’s. A live view of the break out front makes your shop the morning ritual — and the person watching your wave is one scroll from your board rack, your rentals, and your lesson calendar.',
    points: [
      { h: 'Become the morning ritual', b: 'The break check is the highest-frequency visit in surf retail. Own it and you own the first screen of the day.' },
      { h: 'Traffic that converts', b: 'The cam page cross-sells rentals, lessons, and wax — to exactly the person about to paddle out in front of your door.' },
      { h: 'Clips your followers share', b: 'When it’s firing, we cut the timelapse. Your shop’s name rides every share of that swell.' },
    ],
  },

  dive: {
    label: 'Dive & charter operations',
    eyebrow: 'Prepared for Oʻahu dive & charter operations',
    subject: () => 'Let divers see the water before they book the boat',
    preview: 'Let divers and students see the water before a boat day — on your site, next to your calendar.',
    headline: 'Divers check conditions<br/>' + g('before they commit to the drive.'),
    lede: 'Every diver and every student wants the same thing before a boat day: to see the water. A live view of your harbor or your departure dock answers the morning question — and the person watching it is one scroll from your charter calendar, your certification courses, and your rental counter.',
    points: [
      { h: 'The boat-day check', b: 'Chop, wind on the water, what the fleet is doing — your customers see it live on your site instead of texting the shop at 6am.' },
      { h: 'Conditions build trust', b: 'Showing the real water, live, says more than any brochure photo. Confident divers book; nervous students show up already reassured.' },
      { h: 'Clips of every departure', b: 'We cut monthly branded clips from your feed — boats heading out at golden hour is exactly the content your Instagram wants.' },
    ],
  },

  club: {
    label: 'Ocean & yacht clubs',
    eyebrow: 'Prepared for Oʻahu ocean & yacht clubs',
    subject: () => 'Your members, watching the water before they leave',
    preview: 'The page members open with their coffee — your water, live, wherever they are in the world.',
    headline: 'Your members check the water<br/>' + g('before they leave the house.'),
    lede: 'A club lives on its stretch of water. A live view of it — on the club’s own site, behind nothing — is the page members open with their coffee: what the break is doing, how the fairway looks, whether the racing will be good. It keeps the club in every member’s morning, wherever in the world they are.',
    points: [
      { h: 'The morning ritual', b: 'Conditions at a glance before the drive — paddlers, sailors, and swimmers check the water first. Your site becomes the first tab of the day.' },
      { h: 'Race days, witnessed', b: 'Regattas and races stream live — family on the beach lawn, mainland members, and reciprocal-club friends all watching your water.' },
      { h: 'Clips for the newsletter', b: 'Every month we cut branded timelapses from your feed — golden-hour water, canoes going out — ready for the club newsletter and social pages.' },
    ],
  },

  venue: {
    label: 'Wedding, luau & event venues',
    eyebrow: 'Prepared for Hawaiʻi wedding, luau & event venues',
    subject: (c) => `${c.venueName ? c.venueName + ': ' : ''}let couples decide by the real thing`,
    preview: 'Replace the staged photo gallery with the actual grounds, right now, exactly as they look tonight.',
    headline: 'They’re deciding by photo.<br/>' + g('Let them decide by the real thing.'),
    lede: 'Every couple and every planner comparing venues is picturing the same evening: the light, the grounds, the water. A live view of your setting — on your own site — replaces a staged photo gallery with the actual place, right now, exactly as it looks tonight.',
    points: [
      { h: 'Decide by the real thing', b: 'Photos are curated; a live feed isn’t. Couples and planners comparing venues see your grounds as they actually are, at the hour they’re actually considering.' },
      { h: 'Sell tomorrow tonight', b: 'A live sunset feed the evening before is the best advertisement your next event will ever get — the exact experience, streaming, before anyone commits.' },
      { h: 'A portfolio that builds itself', b: 'Every month we cut branded clips from the feed — golden hour on the grounds, guests arriving — ready for your own marketing, no photographer on retainer.' },
    ],
  },

  rental: {
    label: 'Vacation rental & villa portfolios',
    eyebrow: 'Prepared for Hawaiʻi vacation rental & villa portfolios',
    subject: () => 'Every listing has photos — yours could show it live',
    preview: 'A live view of the real lanai or pool — the quiet edge over every listing that only has photos.',
    headline: 'Every listing shows the same photos.<br/>' + g('Yours can show the real thing, live.'),
    lede: 'A guest choosing between listings has only photos to go on — and every listing has good photos. A live view of the actual lanai, pool, or beach access says something a photo never can: this is real, and it looks like this right now. Add it once per property and every listing that carries it gets a quiet edge.',
    points: [
      { h: 'Proof, not just a photo', b: 'Anyone can stage a photo shoot. A live feed can only show what’s actually there, at this hour, in this weather — which is exactly why it’s convincing.' },
      { h: 'It scales with the portfolio', b: 'The deal isn’t one camera — it’s a program. As many of your listings as you want carrying a live view, one relationship, one invoice, one point of contact.' },
      { h: 'Fewer “is this really it” messages', b: 'Guests who watch the feed before check-in arrive already sold — fewer anxious pre-arrival questions for your reservations team.' },
    ],
  },

  fb: {
    label: 'Beachfront restaurants & bars',
    eyebrow: 'Prepared for Hawaiʻi beachfront restaurants & bars',
    subject: (c) => `${c.venueName ? c.venueName + ': ' : ''}your sunset, live on your own site`,
    preview: 'A live view of your oceanfront on your own site — the sunset that turns a hungry browser into a reservation.',
    headline: 'Sunset over your lanai —<br/>' + g('the table books itself.'),
    lede: 'People choose the restaurant with the view they can already see. A live feed of your oceanfront — the lanai at golden hour, the surf off the deck — on your own site turns a hungry browser into a reservation, and turns your sunset into content that keeps filling tables long after it sets.',
    points: [
      { h: 'The view books the table', b: 'Diners deciding where to eat pick the place whose sunset they just watched. A live oceanfront feed on your site answers “where should we go” before they finish scrolling.' },
      { h: 'Golden hour, on repeat', b: 'Every month we cut branded sunset and golden-hour clips from your feed — exactly the content your Instagram wants, ready to post, no photographer on the deck.' },
      { h: 'Handled end to end', b: 'We mount it, aim it at the water, host it, watch it, and swap it if the salt wins. Your staff pours drinks, not cable.' },
    ],
  },
};

export const ARCHETYPE_KEYS = Object.keys(ARCHETYPES);

/**
 * Build a personalized managed-pitch email for one archetype.
 * @param {string} archetype  one of ARCHETYPE_KEYS
 * @param {object} ctx
 * @param {string} [ctx.venueName]
 * @param {string} [ctx.firstName]
 * @param {string} [ctx.recipientEmail]
 * @param {string} [ctx.refSlug]     attribution slug for ?ref= (defaults to demo-<archetype>)
 * @param {string} [ctx.viewLine]    what the camera could see, e.g. "the break off your seawall"
 * @param {string} [ctx.heroImage]   override hero (e.g. a hosted still of their own view)
 * @returns {{ subject: string, html: string }}
 */
export function buildArchetypeEmail(archetype, ctx = {}) {
  const a = ARCHETYPES[archetype];
  if (!a) throw new Error(`Unknown archetype "${archetype}". Valid: ${ARCHETYPE_KEYS.join(', ')}`);

  const ref = ctx.refSlug || `demo-${archetype}`;
  const ctaUrl = `${SITE}/managed/demo/${archetype}?ref=${encodeURIComponent(ref)}`;
  const greeting = ctx.firstName ? `Hi ${ctx.firstName} — ` : '';
  const ledeHtml = greeting + a.lede;
  const signoff = ctx.viewLine
    ? `Picture it at ${ctx.venueName || 'your place'}: ${ctx.viewLine}, streaming. Reply and I’ll send a couple of angles we could point the camera.`
    : 'Reply and I’ll send a couple of angles we could point the camera — no obligation.';

  const html = buildManagedEmailHtml({
    previewText: a.preview,
    heroImage: ctx.heroImage,
    eyebrow: a.eyebrow,
    headlineHtml: a.headline,
    ledeHtml,
    points: a.points,
    termsLine: TERMS,
    ctaLabel: 'Watch the live demo',
    ctaUrl,
    secondaryUrl: `${SITE}/managed`,
    signoff,
    recipientEmail: ctx.recipientEmail,
  });

  return { subject: a.subject(ctx), html };
}
