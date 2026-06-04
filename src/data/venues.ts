// Business-tier venues — each gets a co-branded, embeddable live player at
// /embed/{id} AND a personalized sales page at /business/{id}. This is separate
// from the public camera directory (cameras.ts): a venue's branded embed + offer
// is its own product, configured here. Add a venue here and both pages generate.

// Shared $50/mo co-branded Stripe Payment Link (used unless a venue overrides it
// with its own link carrying ?client_reference_id={app_id}).
export const BUSINESS_PAY_LINK = "https://buy.stripe.com/dRm9AU2qNgM4d6Q0PMejK00";

export interface VenueSponsor {
  name: string;
  url: string;
  logoUrl?: string;   // optional sponsor logo (overlaid if present)
  logoText?: string;  // fallback wordmark
}

export interface Venue {
  id: string;            // url slug, e.g. "venice-beach-club"
  name: string;          // "Venice Beach Club"
  logoText: string;      // wordmark shown until a real logo PNG is supplied
  logoUrl?: string;      // optional real logo (white PNG) overlaid instead of text
  accent: string;        // venue brand color (used on the embed player)
  reserveLabel: string;  // "Reserve a table"
  reserveUrl: string;    // booking/reservations URL
  menuUrl?: string;      // optional menu link (secondary CTA on the player)
  menuLabel?: string;    // defaults to "Menu"
  hlsUrl?: string;       // camera HLS once installed; empty => pre-install state
  posterUrl: string;     // shown pre-install + as the <video> poster
  live: boolean;         // flip true once the camera is installed
  sponsor?: VenueSponsor; // optional paid sponsor slot (logo overlay, $0 to run)

  // ---- Sales-page (/business/{id}) personalization ----
  region?: string;       // "LA" | "Hawaii" — for the CRM/list, optional
  siteUrl?: string;      // their website root, e.g. https://www.venicebeachclubla.com
  siteLabel?: string;    // display form, e.g. "venicebeachclubla.com" (defaults to "your site")
  eventSpace?: string;   // e.g. "the Rose Room" (defaults to "private events")
  viewNoun?: string;     // e.g. "the boardwalk" / "the beach" (defaults to "your view")
  payLink?: string;      // per-venue Stripe link (defaults to BUSINESS_PAY_LINK)

  // ---- Sales-page copy overrides (all optional; default to the restaurant framing
  //      so existing venues render unchanged. Set these for non-restaurant hosts —
  //      museums, harbors, visitor centers — so the page doesn't say "fills tables"). ----
  pageTitle?: string;        // Layout <title>
  pageDesc?: string;         // Layout meta description
  heroHeadline?: string;     // hero <h1> inner HTML (may include <br/> and <em>)
  heroSub?: string;          // hero subhead (HTML)
  ctaCardTitle?: string;     // "What you get" CTA card title (HTML)
  ctaCardBody?: string;      // its body text
  priceCtaItem?: string;     // the CTA line in the pricing list
  liveStepBody?: string;     // "How it works" step 03 body
  closingStepTitle?: string; // step 04 title
  closingStepBody?: string;  // step 04 body
}

export const venues: Venue[] = [
  {
    id: "venice-beach-club",
    name: "Venice Beach Club",
    logoText: "Venice Beach Club",
    accent: "#1f57c4",
    reserveLabel: "Reserve a table",
    reserveUrl: "https://www.venicebeachclubla.com/reservations",
    menuUrl: "https://www.venicebeachclubla.com/menu",
    hlsUrl: "", // her camera's HLS once installed (cams.portofcams.com/{slug}/)
    posterUrl: "/img/vbc-preview.jpg",
    live: false,
    region: "LA",
    siteUrl: "https://www.venicebeachclubla.com",
    siteLabel: "venicebeachclubla.com",
    eventSpace: "the Rose Room",
    viewNoun: "the boardwalk",
  },
  {
    id: "alutiiq-museum",
    name: "Alutiiq Museum",
    logoText: "Alutiiq Museum",
    accent: "#2f6f9f",
    reserveLabel: "Plan your visit",
    reserveUrl: "https://alutiiqmuseum.org",
    // no menuUrl — a single clean CTA reads better for a museum than Menu+Reserve
    hlsUrl: "", // camera HLS once installed (cams.portofcams.com/{slug}/)
    posterUrl: "/img/alutiiq-museum-preview.jpg", // April's submitted view photo
    live: false,
    region: "AK",
    siteUrl: "https://alutiiqmuseum.org",
    siteLabel: "alutiiqmuseum.org",
    viewNoun: "the harbor",
    // ---- museum-tailored sales copy (overrides the restaurant defaults) ----
    pageTitle: "A live view that brings them in — Alutiiq Museum × Port of Cams",
    pageDesc:
      'A co-branded live view of the Kodiak harbor, embeddable on alutiiqmuseum.org with a "Plan your visit" button. We provide and install the camera. $50/mo — you and Port of Cams both own the content.',
    heroHeadline:
      'A live view that<br/><em class="display-italic" style="color: var(--gold)">brings them in.</em>',
    heroSub:
      'We give you a <b>video player to embed on your own website</b> — your live view of the harbor, your logo and ours, with a <b>Plan your visit</b> button right on it. People watching the boats, the bay, and the historic church catch the pull of Kodiak, then tap straight through to plan a visit. We provide and install the camera, host it, and keep it running 24/7 — you just paste one line of code.',
    ctaCardTitle: "<b>Plan your visit</b> button on the feed",
    ctaCardBody:
      "Viewers watch the harbor come to life, then tap straight through to plan a visit, check hours, or explore the collection.",
    priceCtaItem: '"Plan your visit" button on the feed',
    liveStepBody:
      'Your co-branded feed streams and embeds on alutiiqmuseum.org with your "Plan your visit" button.',
    closingStepTitle: "They come in",
    closingStepBody:
      "The view does the inviting. Cancel anytime and the embed simply comes down.",
  },
];

export function getVenueById(id: string): Venue | undefined {
  return venues.find((v) => v.id === id);
}
