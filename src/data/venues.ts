// Business-tier venues — each gets a co-branded, embeddable live player at
// /embed/{id}. This is separate from the public camera directory (cameras.ts):
// a venue's branded embed is its own product, configured here.

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
  accent: string;        // venue brand color (e.g. VBC royal blue)
  reserveLabel: string;  // "Reserve a table"
  reserveUrl: string;    // booking/reservations URL
  menuUrl?: string;      // optional menu link (secondary CTA on the player)
  menuLabel?: string;    // defaults to "Menu"
  hlsUrl?: string;       // camera HLS once installed; empty => pre-install state
  posterUrl: string;     // shown pre-install + as the <video> poster
  live: boolean;         // flip true once the camera is installed
  sponsor?: VenueSponsor; // optional paid sponsor slot (logo overlay, $0 to run)
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
  },
];

export function getVenueById(id: string): Venue | undefined {
  return venues.find((v) => v.id === id);
}
