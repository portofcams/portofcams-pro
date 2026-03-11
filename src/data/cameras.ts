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
];

export const regions = [...new Set(cameras.map((c) => c.region))].sort();
export const allTags = [...new Set(cameras.flatMap((c) => c.tags))].sort();

export function getCameraById(id: string): Camera | undefined {
  return cameras.find((c) => c.id === id);
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
