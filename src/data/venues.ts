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
];

export function getVenueById(id: string): Venue | undefined {
  return venues.find((v) => v.id === id);
}
