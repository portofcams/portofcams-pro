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
  source?: 'native' | 'windy';
  embedUrl?: string;
  windyId?: number;
}

export const cameras: Camera[] = [
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
  },
  {
    id: "kalakaua-ave",
    name: "Kalakaua Avenue",
    location: "Waikiki, HI",
    region: "Hawaii",
    description:
      "Panoramic view of Kalakaua Avenue, the main strip running through Waikiki. See the palm trees, shops, and constant flow of visitors along this famous boulevard.",
    hlsUrl: "https://cams.portofcams.com/kalakaua-ave/",
    tags: ["street", "shopping", "urban"],
    coordinates: { lat: 21.2793, lng: -157.8292 },
    isLive: true,
  },
  {
    id: "waikiki-beach",
    name: "Waikiki Beach",
    location: "Waikiki, HI",
    region: "Hawaii",
    description:
      "Iconic Waikiki Beach with Diamond Head in the background. Watch surfers, sunbathers, and stunning Pacific sunsets from this world-famous shoreline.",
    hlsUrl: "https://cams.portofcams.com/waikiki-beach/",
    tags: ["beach", "surf", "ocean"],
    coordinates: { lat: 21.2766, lng: -157.8278 },
    isLive: true,
  },
  {
    id: "times-square",
    name: "Times Square",
    location: "New York, NY",
    region: "International",
    description:
      "The crossroads of the world. Watch the dazzling lights, massive billboards, and endless foot traffic of Manhattan's most famous intersection.",
    hlsUrl: "https://cams.portofcams.com/times-square/",
    tags: ["urban", "nightlife", "landmark"],
    coordinates: { lat: 40.758, lng: -73.9855 },
    isLive: true,
  },
  {
    id: "shibuya-crossing",
    name: "Shibuya Crossing",
    location: "Tokyo, Japan",
    region: "International",
    description:
      "The world's busiest pedestrian crossing. Watch thousands of people navigate this iconic Tokyo intersection during each signal change.",
    hlsUrl: "https://cams.portofcams.com/shibuya-crossing/",
    tags: ["urban", "traffic", "landmark"],
    coordinates: { lat: 35.6595, lng: 139.7004 },
    isLive: true,
  },
  {
    id: "abbey-road",
    name: "Abbey Road Crossing",
    location: "London, UK",
    region: "International",
    description:
      "The legendary Abbey Road zebra crossing made famous by The Beatles. Watch visitors recreate the iconic album cover walk throughout the day.",
    hlsUrl: "https://cams.portofcams.com/abbey-road/",
    tags: ["landmark", "street", "music"],
    coordinates: { lat: 51.5321, lng: -0.1779 },
    isLive: true,
  },
  {
    id: "jackson-hole-town-square",
    name: "Jackson Hole Town Square",
    location: "Jackson, WY",
    region: "US Mainland",
    description:
      "The famous elk-antler arches of Jackson Hole Town Square. Watch the charming mountain town activity with the Teton Range as a backdrop.",
    hlsUrl: "https://cams.portofcams.com/jackson-hole-town-square/",
    tags: ["landmark", "mountain", "town"],
    coordinates: { lat: 43.4799, lng: -110.7624 },
    isLive: true,
  },
  {
    id: "bourbon-street",
    name: "Bourbon Street",
    location: "New Orleans, LA",
    region: "US Mainland",
    description:
      "The heart of the French Quarter. Experience the nonstop energy of New Orleans with live music spilling out of clubs and the famous Bourbon Street nightlife.",
    hlsUrl: "https://cams.portofcams.com/bourbon-street/",
    tags: ["nightlife", "music", "street"],
    coordinates: { lat: 29.9584, lng: -90.0654 },
    isLive: true,
  },
  {
    id: "south-beach-miami",
    name: "South Beach",
    location: "Miami, FL",
    region: "US Mainland",
    description:
      "Sun-soaked South Beach in Miami. Watch the colorful Art Deco backdrop, beachgoers on the white sand, and the turquoise Atlantic waters.",
    hlsUrl: "https://cams.portofcams.com/south-beach-miami/",
    tags: ["beach", "ocean", "urban"],
    coordinates: { lat: 25.7826, lng: -80.1341 },
    isLive: true,
  },
  {
    id: "venice-grand-canal",
    name: "Grand Canal",
    location: "Venice, Italy",
    region: "International",
    description:
      "The main waterway of Venice. Watch gondolas, water taxis, and vaporetti navigate the stunning Grand Canal lined with centuries-old palaces.",
    hlsUrl: "https://cams.portofcams.com/venice-grand-canal/",
    tags: ["landmark", "water", "urban"],
    coordinates: { lat: 45.4371, lng: 12.3327 },
    isLive: true,
  },
  {
    id: "santorini-caldera",
    name: "Santorini Caldera",
    location: "Santorini, Greece",
    region: "International",
    description:
      "Breathtaking view of the Santorini caldera with its iconic white and blue buildings cascading down volcanic cliffs above the deep blue Aegean Sea.",
    hlsUrl: "https://cams.portofcams.com/santorini-caldera/",
    tags: ["ocean", "landmark", "scenic"],
    coordinates: { lat: 36.4166, lng: 25.4321 },
    isLive: true,
  },
  {
    id: "i-h1-east",
    name: "H-1 Freeway East",
    location: "Honolulu, HI",
    region: "Hawaii",
    description:
      "Live traffic view of the H-1 Freeway heading east through Honolulu. Monitor commute conditions and traffic flow on Oahu's main highway.",
    hlsUrl: "https://cams.portofcams.com/i-h1-east/",
    tags: ["traffic", "highway"],
    coordinates: { lat: 21.3156, lng: -157.859 },
    isLive: true,
  },
  {
    id: "i-h1-west",
    name: "H-1 Freeway West",
    location: "Honolulu, HI",
    region: "Hawaii",
    description:
      "Live traffic view of the H-1 Freeway heading west from Honolulu toward Pearl City. Check westbound commute conditions in real time.",
    hlsUrl: "https://cams.portofcams.com/i-h1-west/",
    tags: ["traffic", "highway"],
    coordinates: { lat: 21.3245, lng: -157.876 },
    isLive: true,
  },
  {
    id: "santa-monica-pier",
    name: "Santa Monica Pier",
    location: "Santa Monica, CA",
    region: "US Mainland",
    description:
      "The iconic Santa Monica Pier with its famous Ferris wheel and Pacific Park. Watch the sunset over the Pacific Ocean from this beloved California landmark.",
    hlsUrl: "https://cams.portofcams.com/santa-monica-pier/",
    tags: ["beach", "landmark", "ocean"],
    coordinates: { lat: 34.0086, lng: -118.4981 },
    isLive: true,
  },

  // === WINDY CAMS — Hawaii ===
  {
    id: "ala-moana-beach",
    name: "Ala Moana Beach Park",
    location: "Honolulu, HI",
    region: "Hawaii",
    description:
      "Panoramic view of Ala Moana Beach Park, one of Oahu's most popular local beaches. Watch outrigger canoes, paddleboarders, and the turquoise waters of this urban paradise.",
    hlsUrl: "",
    tags: ["beach", "ocean", "scenic"],
    coordinates: { lat: 21.2889, lng: -157.8477 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1471450467/day",
    windyId: 1471450467,
  },
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
      "Live view of Charley Young Beach in Kihei on Maui's south shore. A local favorite for swimming and sunset watching with views across Ma'alaea Bay.",
    hlsUrl: "",
    tags: ["beach", "surf", "ocean"],
    coordinates: { lat: 20.7362, lng: -156.4508 },
    isLive: true,
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
      "View from the summit of Mauna Kea at 13,796 feet, home to some of the world's most powerful telescopes. Often above the clouds with stunning views of the volcanic landscape.",
    hlsUrl: "",
    tags: ["mountain", "scenic", "landmark"],
    coordinates: { lat: 19.8207, lng: -155.4681 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1299010708/day",
    windyId: 1299010708,
  },

  // === WINDY CAMS — Alaska ===
  {
    id: "anchorage-skyline",
    name: "Anchorage Skyline",
    location: "Anchorage, AK",
    region: "Alaska",
    description:
      "Panoramic view of the Anchorage skyline with the Chugach Mountains in the background. Watch the dramatic Alaska weather, northern lights season, and the city's changing seasons.",
    hlsUrl: "",
    tags: ["urban", "mountain", "scenic"],
    coordinates: { lat: 61.2181, lng: -149.9003 },
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
    name: "Juneau Harbor",
    location: "Juneau, AK",
    region: "Alaska",
    description:
      "View of Juneau's harbor, Alaska's capital city accessible only by air or sea. Watch cruise ships, float planes, and the stunning Gastineau Channel backed by mountains and glaciers.",
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
      "View along Airport Way in Fairbanks, the Golden Heart City. Experience extreme Alaska conditions from -40F winters to midnight sun summers in the interior.",
    hlsUrl: "",
    tags: ["traffic", "urban", "scenic"],
    coordinates: { lat: 64.8378, lng: -147.7164 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1738676898/day",
    windyId: 1738676898,
  },

  // === WINDY CAMS — California ===
  {
    id: "la-i110-wilshire",
    name: "I-110 at Wilshire Blvd",
    location: "Los Angeles, CA",
    region: "California",
    description:
      "Live traffic camera on the I-110 freeway at Wilshire Blvd in downtown Los Angeles. Monitor real-time traffic conditions on one of LA's busiest corridors.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 34.0522, lng: -118.2668 },
    isLive: true,
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
      "Live traffic camera on the I-10 freeway near downtown Los Angeles. Watch the constant flow of traffic through one of America's busiest highway interchanges.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 34.0407, lng: -118.2468 },
    isLive: true,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1709835270/day",
    windyId: 1709835270,
  },
  {
    id: "san-diego-bay",
    name: "San Diego Bay",
    location: "San Diego, CA",
    region: "California",
    description:
      "Live view of San Diego Bay with the city skyline and Coronado Bridge. Watch sailboats, naval vessels, and stunning sunsets over one of California's most beautiful harbors.",
    hlsUrl: "",
    tags: ["ocean", "urban", "scenic"],
    coordinates: { lat: 32.7157, lng: -117.1611 },
    isLive: true,
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
      "Live traffic camera on US-101 at Octavia Street in San Francisco. Monitor traffic flow near the Central Freeway and Hayes Valley neighborhood.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 37.7749, lng: -122.4241 },
    isLive: true,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1596825917/day",
    windyId: 1596825917,
  },

  // === WINDY CAMS — Pacific NW ===
  {
    id: "seattle-columbia-center",
    name: "Columbia Center Skyline",
    location: "Seattle, WA",
    region: "Pacific NW",
    description:
      "View from near the Columbia Center, Seattle's tallest building. Watch the city skyline with views toward Puget Sound, the Olympic Mountains, and Mount Rainier on clear days.",
    hlsUrl: "",
    tags: ["urban", "scenic", "landmark"],
    coordinates: { lat: 47.6047, lng: -122.3310 },
    isLive: false,
    source: "windy",
    embedUrl: "https://webcams.windy.com/webcams/public/embed/player/1345843224/day",
    windyId: 1345843224,
  },
  {
    id: "portland-i405",
    name: "Portland - I-405",
    location: "Portland, OR",
    region: "Pacific NW",
    description:
      "Traffic view along I-405 in Portland, Oregon. Watch the flow of traffic through the Rose City with views of the West Hills and downtown skyline.",
    hlsUrl: "",
    tags: ["traffic", "highway", "urban"],
    coordinates: { lat: 45.5155, lng: -122.6870 },
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
