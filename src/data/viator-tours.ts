const VIATOR_PID = "P00293409";
const VIATOR_MCID = "42383";

export interface PocViatorTour {
  title: string;
  destination: string;
  slug: string;
  category: string;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
}

export function viatorLink(tour: PocViatorTour): string {
  const q = encodeURIComponent(`${tour.title} ${tour.destination}`);
  return `https://www.viator.com/searchResults/all?text=${q}&pid=${VIATOR_PID}&mcid=${VIATOR_MCID}&medium=link`;
}

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop&q=80&auto=format`;

// All Unsplash IDs verified HTTP 200.
export const toursByRegion: Partial<Record<string, PocViatorTour[]>> = {
  Hawaii: [
    {
      title: "Waikiki Sunset Catamaran Cruise",
      destination: "Honolulu",
      slug: "Waikiki-Sunset-Catamaran-Cruise",
      category: "water",
      priceFrom: 59,
      rating: 4.8,
      reviewCount: 3200,
      description: "Sail along the Waikiki coastline at golden hour on a classic catamaran with drinks, snacks, and unobstructed Diamond Head views.",
      image: u("1507525428034-b723cf961d3e"),
    },
    {
      title: "Maui Whale Watching Cruise",
      destination: "Maui",
      slug: "Maui-Whale-Watching-Cruise",
      category: "water",
      priceFrom: 49,
      rating: 4.9,
      reviewCount: 4100,
      description: "Spot humpback whales breaching off the coast of Maui on a naturalist-guided cruise through the Au Au Channel.",
      image: u("1518877593221-1f28583780b4"),
    },
    {
      title: "Hawaii Doors-Off Helicopter Tour",
      destination: "Honolulu",
      slug: "Hawaii-Doors-Off-Helicopter-Tour",
      category: "adventure",
      priceFrom: 299,
      rating: 4.9,
      reviewCount: 1800,
      description: "Soar over volcanoes, sea cliffs, and emerald valleys on a thrilling doors-off helicopter flight over the Big Island or Kauai.",
      image: u("1437719417032-8595fd9e9dc6"),
    },
    {
      title: "Molokini Snorkel & Whale Watch",
      destination: "Maui",
      slug: "Molokini-Snorkel-Whale-Watch",
      category: "water",
      priceFrom: 129,
      rating: 4.7,
      reviewCount: 2600,
      description: "Snorkel the crystal-clear crater of Molokini Atoll, then cruise for whales and sea turtles on the way back to Maalaea.",
      image: u("1544551763-46a013bb70d5"),
    },
  ],

  Alaska: [
    {
      title: "Kenai Fjords Glacier & Wildlife Cruise",
      destination: "Seward",
      slug: "Kenai-Fjords-Glacier-Wildlife-Cruise",
      category: "water",
      priceFrom: 189,
      rating: 4.9,
      reviewCount: 3400,
      description: "Cruise Kenai Fjords National Park past calving tidewater glaciers, orcas, sea otters, and tens of thousands of seabirds.",
      image: u("1464822759023-fed622ff2c3b"),
    },
    {
      title: "Glacier Flightseeing & Denali Overflight",
      destination: "Anchorage",
      slug: "Glacier-Flightseeing-Denali-Overflight",
      category: "adventure",
      priceFrom: 349,
      rating: 4.9,
      reviewCount: 980,
      description: "Fly low over the Chugach glaciers and circle Denali's south face — North America's highest peak seen from a small plane.",
      image: u("1506905925346-21bda4d32df4"),
    },
    {
      title: "Tracy Arm Fjord Glacier Cruise",
      destination: "Juneau",
      slug: "Tracy-Arm-Fjord-Glacier-Cruise",
      category: "water",
      priceFrom: 189,
      rating: 4.7,
      reviewCount: 2100,
      description: "Cruise through the dramatic ice-filled passage of Tracy Arm Fjord to reach the twin Sawyer Glaciers — a bucket-list Alaska experience.",
      image: u("1519451241324-20b4ea2c4220"),
    },
    {
      title: "Northern Lights Chase from Fairbanks",
      destination: "Fairbanks",
      slug: "Northern-Lights-Tour-Fairbanks",
      category: "outdoor",
      priceFrom: 109,
      rating: 4.6,
      reviewCount: 1700,
      description: "Head into the aurora-rich skies above Fairbanks with a local guide who knows the best dark-sky spots and forecasts.",
      image: u("1483347756197-71ef80e95f73"),
    },
  ],

  California: [
    {
      title: "San Francisco Bay Cruise & Alcatraz",
      destination: "San Francisco",
      slug: "San-Francisco-Bay-Cruise-Alcatraz",
      category: "sightseeing",
      priceFrom: 45,
      rating: 4.7,
      reviewCount: 5200,
      description: "Circle the Bay under the Golden Gate Bridge, past Alcatraz Island, and along the Marin headlands on this classic SF cruise.",
      image: u("1449034446853-66c86144b0ad"),
    },
    {
      title: "San Diego Whale Watching",
      destination: "San Diego",
      slug: "San-Diego-Whale-Watching-Tour",
      category: "water",
      priceFrom: 55,
      rating: 4.6,
      reviewCount: 2900,
      description: "Watch blue whales, gray whales, dolphins, and sea lions off the San Diego coast with an expert naturalist crew.",
      image: u("1518877593221-1f28583780b4"),
    },
    {
      title: "LA Coastal Helicopter Tour",
      destination: "Los Angeles",
      slug: "LA-Coastal-Helicopter-Tour",
      category: "adventure",
      priceFrom: 199,
      rating: 4.8,
      reviewCount: 1200,
      description: "Fly over the Hollywood Hills, Santa Monica Pier, and Malibu coastline on a private helicopter tour above Los Angeles.",
      image: u("1580655653885-65763b2597d0"),
    },
    {
      title: "Napa Valley Wine Country Day Trip from SF",
      destination: "San Francisco",
      slug: "Napa-Valley-Wine-Country-Day-Trip",
      category: "food",
      priceFrom: 149,
      rating: 4.7,
      reviewCount: 3600,
      description: "Tour Napa's iconic vineyards with guided tastings, gourmet lunch, and roundtrip transportation from San Francisco.",
      image: u("1662624335971-57960e9e669f"),
    },
  ],

  "Pacific NW": [
    {
      title: "San Juan Islands Whale Watching",
      destination: "Seattle",
      slug: "San-Juan-Islands-Whale-Watching-Tour",
      category: "water",
      priceFrom: 119,
      rating: 4.8,
      reviewCount: 2300,
      description: "Day cruise from Seattle to the San Juan Islands to spot orca pods, humpbacks, and Dall's porpoise in the Salish Sea.",
      image: u("1501785888041-af3ef285b470"),
    },
    {
      title: "Mount Rainier National Park Day Trip",
      destination: "Seattle",
      slug: "Mount-Rainier-National-Park-Day-Trip",
      category: "outdoor",
      priceFrom: 99,
      rating: 4.7,
      reviewCount: 1800,
      description: "Explore ancient forests, wildflower meadows, and breathtaking glaciated summit views at Mount Rainier — just 90 minutes from Seattle.",
      image: u("1531884422565-1b4a26326a31"),
    },
    {
      title: "Seattle Food & Pike Place Market Tour",
      destination: "Seattle",
      slug: "Seattle-Food-Pike-Place-Market-Tour",
      category: "food",
      priceFrom: 79,
      rating: 4.8,
      reviewCount: 1500,
      description: "Taste smoked salmon, fresh Dungeness crab, artisan cheese, and local coffee with a guide through Pike Place Market.",
      image: u("1559339352-11d035aa65de"),
    },
  ],
};

export function getToursForRegion(region: string): PocViatorTour[] {
  return toursByRegion[region] ?? [];
}
