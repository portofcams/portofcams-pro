// Booking.com affiliate ID — replace with your real aid from CJ once approved:
// https://signup.cj.com/member/signup/publisher/?cid=4297311
export const BOOKING_AID = "YOUR_AID_HERE";

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
  priceHint: string;
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
      priceHint: "From ~$80/night",
    },
    {
      label: `Popular Picks in ${city}`,
      tier: "Mid-Range",
      description: `Top-rated 3- and 4-star hotels in ${city} — great amenities, prime locations.`,
      image: HOTEL_IMAGES.mid,
      stars: "class%3D3%3Bclass%3D4",
      priceHint: "From ~$150/night",
    },
    {
      label: `Luxury Stays in ${city}`,
      tier: "Luxury",
      description: `Five-star resorts and boutique luxury properties for the ultimate ${city} experience.`,
      image: HOTEL_IMAGES.luxury,
      stars: "class%3D4%3Bclass%3D5",
      priceHint: "From ~$300/night",
    },
  ];
}

export function bookingLink(location: string, stars: string): string {
  const city = location.split(",")[0].trim();
  const q = encodeURIComponent(city);
  return `https://www.booking.com/searchresults.html?aid=${BOOKING_AID}&ss=${q}&nflt=${stars}`;
}
