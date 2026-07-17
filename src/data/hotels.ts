// Booking.com affiliate ID — set your real aid from CJ once approved:
// https://signup.cj.com/member/signup/publisher/?cid=4297311
// While empty, links are plain (non-affiliate) Booking.com searches and the
// cards show a neutral disclosure instead of an affiliate one.
export const BOOKING_AID = "";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop&q=80&auto=format`;

// Three hotel tier images — verified HTTP 200, visually confirmed.
export const HOTEL_IMAGES = {
  value:  u("1611892440504-42a792e24d32"), // boutique room, tropical garden view
  mid:    u("1535827841776-24afc1e255ac"), // hotel courtyard pool, palms
  luxury: u("1571003123894-1f0594d2b5d9"), // infinity pool at sunset, ocean
};

export interface HotelCard {
  label: string;
  tier: string;
  description: string;
  image: string;
  stars: string; // Booking.com nflt star filter
}

export function getHotelCards(location: string): HotelCard[] {
  const city = location.split(",")[0].trim();
  return [
    {
      label: `Best Value in ${city}`,
      tier: "Budget – Mid",
      description: `Comfortable, well-reviewed hotels near the heart of ${city} without the resort price tag.`,
      image: HOTEL_IMAGES.value,
      stars: "class%3D2%3Bclass%3D3",
    },
    {
      label: `Popular Picks in ${city}`,
      tier: "Mid-Range",
      description: `Top-rated 3- and 4-star hotels in ${city} — great amenities, prime locations.`,
      image: HOTEL_IMAGES.mid,
      stars: "class%3D3%3Bclass%3D4",
    },
    {
      label: `Luxury Stays in ${city}`,
      tier: "Luxury",
      description: `Five-star resorts and boutique luxury properties for the ultimate ${city} experience.`,
      image: HOTEL_IMAGES.luxury,
      stars: "class%3D4%3Bclass%3D5",
    },
  ];
}

export function bookingLink(location: string, stars: string): string {
  const city = location.split(",")[0].trim();
  const q = encodeURIComponent(city);
  const aid = BOOKING_AID ? `aid=${BOOKING_AID}&` : "";
  return `https://www.booking.com/searchresults.html?${aid}ss=${q}&nflt=${stars}`;
}
