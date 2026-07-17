export interface Camera {
  id: string;
  name: string;
  location: string;
  region: string;
  description: string;
  hlsUrl: string;
  tags: string[];
  coordinates: { lat: number; lng: number };
  isLive: boolean;
  source?: 'native' | 'windy' | 'youtube';
  embedUrl?: string;
  windyId?: number;
}

// Every entry verified against its actual source (HLS 200, YouTube oembed,
// or Windy embed player title) on 2026-07-17. Windy embeds use the /day
// player, which shows an auto-updating day timelapse loop, not live video —
// hence isLive: false on all of them.
export const cameras: Camera[] = [
  // === NATIVE HLS — our own streams ===
  {
    id: "east-lewers-st",
    name: "East Lewers Street",
    location: "Waikiki, HI",
    region: "Hawaii",
    description:
      "Live street view of East Lewers Street in the heart of Waikiki. Watch the bustling nightlife, foot traffic, and vibrant energy of one of Hawaii's most iconic streets.",
    hlsUrl: "https://cams.portofcams.com/east-lewers-st/",
    tags: ["street", "nightlife", "urban"],
    coordinates: { lat: 21.2769, lng: -157.8268 },
    isLive: true,
    source: "native",
  },

  // === YOUTUBE LIVE — public 24/7 streams, credited to their operators ===
  {
    id: "banzai-pipeline",
    name: "Banzai Pipeline",
    location: "North Shore, HI",
    region: "Hawaii",
    description:
      "Live surf cam at the Banzai Pipeline on Oahu's North Shore, one of the most famous waves on the planet. Watch swells roll in over the shallow reef. Stream courtesy of EXPLORE.org on YouTube.",
    hlsUrl: "https://www.youtube.com/embed/VI8Wj5EwoRM",
    tags: ["surf", "beach", "ocean"],
    coordinates: { lat: 21.6654, lng: -158.0521 },
    isLive: true,
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/VI8Wj5EwoRM",
  },
  {
    id: "jackson-hole-town-square",
    name: "Jackson Hole Town Square",
    location: "Jackson, WY",
    region: "US Mainland",
    description:
      "The famous elk-antler arches of Jackson Hole Town Square. Watch the charming mountain town activity around the square in all seasons. Stream courtesy of SeeJH.com on YouTube.",
    hlsUrl: "https://www.youtube.com/embed/1EiC9bvVGnk",
    tags: ["landmark", "mountain", "town"],
    coordinates: { lat: 43.4799, lng: -110.7624 },
    isLive: true,
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/1EiC9bvVGnk",
  },
  {
    id: "grand-teton-dornans",
    name: "Grand Teton from Dornan's",
    location: "Moose, WY",
    region: "US Mainland",
    description:
      "The Teton Range from Dornan's in Moose, Wyoming, inside Grand Teton National Park. Watch light and weather sweep across one of America's most dramatic mountain fronts. Stream courtesy of SeeJH.com on YouTube.",
    hlsUrl: "https://www.youtube.com/embed/o4fKtgPVpoU",
    tags: ["mountain", "scenic", "landmark"],
    coordinates: { lat: 43.6558, lng: -110.7139 },
    isLive: true,
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/o4fKtgPVpoU",
  },
  {
    id: "venice-beach-boardwalk",
    name: "Venice Beach Boardwalk",
    location: "Los Angeles, CA",
    region: "California",
    description:
      "The north Venice Beach boardwalk, live around the clock: skaters, street performers, beach cruisers, and Pacific sunsets. Stream courtesy of the Ready When You're Ready channel on YouTube.",
    hlsUrl: "https://www.youtube.com/embed/98jOtUeM3m8",
    tags: ["beach", "street", "urban"],
    coordinates: { lat: 33.985, lng: -118.4695 },
    isLive: true,
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/98jOtUeM3m8",
  },
  {
    id: "monterey-sea-otters",
    name: "Monterey Bay Sea Otters",
    location: "Monterey, CA",
    region: "California",
    description:
      "Live sea otter cam over Monterey Bay. Watch wild otters raft in the kelp beds along one of California's richest stretches of coastline. Stream courtesy of the Monterey Bay Aquarium on YouTube.",
    hlsUrl: "https://www.youtube.com/embed/abbR-Ttd-cA",
    tags: ["wildlife", "ocean", "scenic"],
    coordinates: { lat: 36.6182, lng: -121.9018 },
    isLive: true,
    source: "youtube",
    embedUrl: "https://www.youtube.com/embed/abbR-Ttd-cA",
  },

  // === WINDY DAY-LOOP EMBEDS — Hawaii ===
  {
    id: "kahala-resort",
    name: "Kahala Resort",
    location: "Honolulu, HI",
    region: "Hawaii",
    description:
      "View from the luxurious Kahala Hotel & Resort on Oahu's upscale east side. Watch the calm waters and exclusive beach away from the Waikiki crowds.",
    hlsUrl: "",
    tags: ["beach", "resort", "ocean"],
    coordinates: { lat: 21.2668, lng: -157.7733 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1793899298/day",
    windyId: 1793899298,
  },
  {
    id: "charley-young-beach",
    name: "Charley Young Beach",
    location: "Kihei, Maui",
    region: "Hawaii",
    description:
      "View of Charley Young Beach in Kihei on Maui's south shore. A local favorite for swimming and sunset watching with views across Ma'alaea Bay.",
    hlsUrl: "",
    tags: ["beach", "surf", "ocean"],
    coordinates: { lat: 20.7362, lng: -156.4508 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1793876400/day",
    windyId: 1793876400,
  },
  {
    id: "royal-lahaina-resort",
    name: "Royal Lahaina Resort",
    location: "Lahaina, Maui",
    region: "Hawaii",
    description:
      "Beachfront view from the Royal Lahaina Resort in Ka'anapali. Watch the famous Ka'anapali Beach, one of the best beaches in America, with views toward Lanai and Molokai.",
    hlsUrl: "",
    tags: ["beach", "resort", "ocean"],
    coordinates: { lat: 20.9328, lng: -156.6917 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1743969593/day",
    windyId: 1743969593,
  },
  {
    id: "wailea-beach",
    name: "Wailea Beach",
    location: "Wailea, Maui",
    region: "Hawaii",
    description:
      "View of Wailea Beach on Maui's sunny south shore. A crescent of golden sand backed by luxury resorts with calm, clear waters perfect for swimming and snorkeling.",
    hlsUrl: "",
    tags: ["beach", "resort", "ocean"],
    coordinates: { lat: 20.6864, lng: -156.4423 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1401526080/day",
    windyId: 1401526080,
  },
  {
    id: "kilauea-volcano",
    name: "Kilauea Volcano - Halema'uma'u",
    location: "Big Island, HI",
    region: "Hawaii",
    description:
      "View of the Halema'uma'u crater at Kilauea, one of the world's most active volcanoes. Watch volcanic activity, steam vents, and the dramatic landscape of Hawaii Volcanoes National Park.",
    hlsUrl: "",
    tags: ["volcano", "scenic", "landmark"],
    coordinates: { lat: 19.4069, lng: -155.2834 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1359483331/day",
    windyId: 1359483331,
  },
  {
    id: "mauna-kea-observatory",
    name: "Mauna Kea Observatory",
    location: "Big Island, HI",
    region: "Hawaii",
    description:
      "Northeast view from the summit of Mauna Kea at 13,796 feet, home to some of the world's most powerful telescopes. Often above the clouds with stunning views of the volcanic landscape.",
    hlsUrl: "",
    tags: ["mountain", "scenic", "landmark"],
    coordinates: { lat: 19.8207, lng: -155.4681 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1299010708/day",
    windyId: 1299010708,
  },

  // === WINDY DAY-LOOP EMBEDS — Alaska ===
  {
    id: "ship-creek-boat-launch",
    name: "Ship Creek Boat Launch",
    location: "Anchorage, AK",
    region: "Alaska",
    description:
      "View over the Ship Creek small boat launch on the north edge of downtown Anchorage, where the creek meets the tidal flats of Knik Arm. Watch boats, tides, and dramatic Alaska weather.",
    hlsUrl: "",
    tags: ["water", "scenic", "urban"],
    coordinates: { lat: 61.2286, lng: -149.8783 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1675825714/day",
    windyId: 1675825714,
  },
  {
    id: "anchorage-town-square",
    name: "Anchorage Town Square",
    location: "Anchorage, AK",
    region: "Alaska",
    description:
      "View of downtown Anchorage's Town Square, the city's central gathering place. See events, markets, and daily life in Alaska's largest city.",
    hlsUrl: "",
    tags: ["urban", "landmark", "town"],
    coordinates: { lat: 61.2176, lng: -149.8914 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1793899826/day",
    windyId: 1793899826,
  },
  {
    id: "ship-creek-anchorage",
    name: "Ship Creek",
    location: "Anchorage, AK",
    region: "Alaska",
    description:
      "View of Ship Creek in downtown Anchorage, famous for urban salmon fishing. Watch anglers catch king and silver salmon right in the heart of the city during summer runs.",
    hlsUrl: "",
    tags: ["water", "wildlife", "scenic"],
    coordinates: { lat: 61.2261, lng: -149.8822 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1793899824/day",
    windyId: 1793899824,
  },
  {
    id: "juneau-harbor",
    name: "Juneau",
    location: "Juneau, AK",
    region: "Alaska",
    description:
      "Webcam view over Juneau, Alaska's capital city, wedged between steep mountains and the Gastineau Channel and reachable only by air or sea.",
    hlsUrl: "",
    tags: ["water", "urban", "scenic"],
    coordinates: { lat: 58.3005, lng: -134.4197 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1680336661/day",
    windyId: 1680336661,
  },
  {
    id: "fairbanks-airport-way",
    name: "Fairbanks - Airport Way",
    location: "Fairbanks, AK",
    region: "Alaska",
    description:
      "View along Airport Way in South Fairbanks, the Golden Heart City. Experience extreme Alaska conditions from -40F winters to midnight sun summers in the interior.",
    hlsUrl: "",
    tags: ["traffic", "urban", "scenic"],
    coordinates: { lat: 64.8378, lng: -147.7164 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1738676898/day",
    windyId: 1738676898,
  },

  // === WINDY DAY-LOOP EMBEDS — California ===
  {
    id: "la-i110-wilshire",
    name: "I-110 at Wilshire Blvd",
    location: "Los Angeles, CA",
    region: "California",
    description:
      "Traffic camera on the I-110 freeway at Wilshire Blvd near Bunker Hill in downtown Los Angeles. Monitor conditions on one of LA's busiest corridors.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 34.0522, lng: -118.2668 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1709835159/day",
    windyId: 1709835159,
  },
  {
    id: "la-i10-downtown",
    name: "I-10 at Downtown LA",
    location: "Los Angeles, CA",
    region: "California",
    description:
      "Traffic camera on the I-10 freeway near Griffith Ave and San Pedro St on the west side of downtown Los Angeles. Watch the constant flow through one of America's busiest corridors.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 34.0407, lng: -118.2468 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1709835270/day",
    windyId: 1709835270,
  },
  {
    id: "san-diego-bay",
    name: "San Diego Bayfront",
    location: "San Diego, CA",
    region: "California",
    description:
      "View over San Diego's downtown bayfront near the Convention Center, the Rady Shell at Jacobs Park, and the Embarcadero. Watch boats on the bay and sunsets over the skyline.",
    hlsUrl: "",
    tags: ["ocean", "urban", "scenic"],
    coordinates: { lat: 32.7157, lng: -117.1611 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1649778683/day",
    windyId: 1649778683,
  },
  {
    id: "sf-us101",
    name: "US-101 at Octavia St",
    location: "San Francisco, CA",
    region: "California",
    description:
      "Traffic camera on US-101 at Octavia Street in San Francisco. Monitor traffic flow near the Central Freeway and Hayes Valley neighborhood.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 37.7749, lng: -122.4241 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1596825917/day",
    windyId: 1596825917,
  },

  // === WINDY DAY-LOOP EMBEDS — Pacific NW ===
  {
    id: "seattle-columbia-center",
    name: "Columbia Center Skyline",
    location: "Seattle, WA",
    region: "Pacific NW",
    description:
      "View from near the Columbia Center, Seattle's tallest building. Watch the city skyline with views toward Puget Sound, the Olympic Mountains, and Mount Rainier on clear days.",
    hlsUrl: "",
    tags: ["urban", "scenic", "landmark"],
    coordinates: { lat: 47.6047, lng: -122.331 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1345843224/day",
    windyId: 1345843224,
  },
  {
    id: "portland-i405",
    name: "Portland - SW 6th at I-405",
    location: "Portland, OR",
    region: "Pacific NW",
    description:
      "Traffic view at SW 6th Avenue and I-405 in Portland, Oregon. Watch the flow of traffic through the Rose City with views of the West Hills and downtown.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 45.5155, lng: -122.687 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1513199656/day",
    windyId: 1513199656,
  },
];

export const regions = [...new Set(cameras.map((c) => c.region))].sort();
export const allTags = [...new Set(cameras.flatMap((c) => c.tags))].sort();

export function getCameraById(id: string): Camera | undefined {
  return cameras.find((c) => c.id === id);
}

export function getAllRegions(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const c of cameras) {
    map.set(c.region, (map.get(c.region) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCamerasByRegion(region: string): Camera[] {
  return cameras.filter((c) => c.region === region);
}

export function getCamerasByTag(tag: string): Camera[] {
  return cameras.filter((c) => c.tags.includes(tag));
}

export function getRelatedCameras(id: string, limit = 4): Camera[] {
  const camera = getCameraById(id);
  if (!camera) return [];

  return cameras
    .filter((c) => c.id !== id)
    .map((c) => ({
      camera: c,
      score:
        (c.region === camera.region ? 2 : 0) +
        c.tags.filter((t) => camera.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.camera);
}
