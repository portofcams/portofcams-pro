export interface Camera {
  id: string;
  name: string;
  location: string;
  description: string;
  hlsUrl: string;
  thumbnail?: string;
  tags: string[];
  region: string;
  subregion?: string;
  lat: number;
  lon: number;
  isLive: boolean;
  isFeatured?: boolean;
  streamType: 'hls' | 'youtube' | 'image' | 'embed';
}

export const cameras: Camera[] = [
  // ─── Hawaii ────────────────────────────────────────────
  {
    id: 'east-lewers-st',
    name: 'East Lewers Street',
    location: 'Waikiki, Oahu, HI',
    description: 'Live street view of Lewers Street in the heart of Waikiki. Watch the bustling nightlife, restaurants, and pedestrian activity 24/7.',
    hlsUrl: 'https://cams.portofcams.com/east-lewers-st/index.m3u8',
    tags: ['street', 'nightlife', 'waikiki', 'featured'],
    region: 'Hawaii',
    subregion: 'Oahu',
    lat: 21.2793,
    lon: -157.8283,
    isLive: true,
    isFeatured: true,
    streamType: 'hls',
  },
  {
    id: 'oahu-road-conditions',
    name: 'Oahu Road Conditions',
    location: 'Oahu, HI',
    description: 'Live traffic conditions across Oahu highways. Monitor road conditions before heading out.',
    hlsUrl: 'https://cdn3.wowza.com/5/V2Y2VmhqMEFDTUkx/olelo/G0125_017/playlist.m3u8',
    tags: ['traffic', 'highway', 'featured-traffic'],
    region: 'Hawaii',
    subregion: 'Oahu',
    lat: 21.4389,
    lon: -158.0001,
    isLive: true,
    streamType: 'hls',
  },

  // ─── California — Scenic Traffic Cams ──────────────────
  {
    id: 'pch-laguna-bluebird',
    name: 'PCH at Blue Bird — Laguna Beach',
    location: 'Laguna Beach, CA',
    description: 'Pacific Coast Highway northbound at Blue Bird Canyon in Laguna Beach. One of the most scenic coastal highway cameras in Southern California.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D12/NBPCHBLUEBIRD.stream/playlist.m3u8',
    tags: ['traffic', 'scenic', 'highway', 'coastal', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.530071,
    lon: -117.772769,
    isLive: true,
    isFeatured: true,
    streamType: 'hls',
  },
  {
    id: 'pch-laguna-broadway-sb',
    name: 'PCH at Broadway SB — Laguna Beach',
    location: 'Laguna Beach, CA',
    description: 'Pacific Coast Highway southbound at Broadway in Laguna Beach with ocean views.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D12/SBPCHBROADWAY.stream/playlist.m3u8',
    tags: ['traffic', 'scenic', 'highway', 'coastal', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.5423,
    lon: -117.7876,
    isLive: true,
    streamType: 'hls',
  },
  {
    id: 'pch-laguna-broadway-nb',
    name: 'PCH at Broadway NB — Laguna Beach',
    location: 'Laguna Beach, CA',
    description: 'Pacific Coast Highway northbound at Broadway in Laguna Beach.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D12/NBPCHBROADWAY.stream/playlist.m3u8',
    tags: ['traffic', 'scenic', 'highway', 'coastal', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.5423,
    lon: -117.7876,
    isLive: true,
    streamType: 'hls',
  },
  {
    id: 'sr-74-san-antonio',
    name: 'SR-74 at San Antonio',
    location: 'San Juan Capistrano, CA',
    description: 'State Route 74 Ortega Highway at San Antonio — scenic canyon road through the coastal mountains.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D12/EB74SANANTONIO.stream/playlist.m3u8',
    tags: ['traffic', 'scenic', 'canyon', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.508,
    lon: -117.652,
    isLive: true,
    streamType: 'hls',
  },
  {
    id: 'sr-91-coal-canyon',
    name: 'SR-91 at Coal Canyon',
    location: 'Yorba Linda, CA',
    description: 'Westbound SR-91 at the SR-241 interchange through Coal Canyon — dramatic canyon scenery.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D12/WB91COALCANYON.stream/playlist.m3u8',
    tags: ['traffic', 'scenic', 'canyon', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.9128,
    lon: -117.6348,
    isLive: true,
    streamType: 'hls',
  },
  {
    id: 'i5-sr57-interchange',
    name: 'I-5 / SR-57 / SR-22 Interchange',
    location: 'Orange, CA',
    description: 'Major freeway interchange in Orange County where I-5, SR-57, and SR-22 converge. A massive traffic hub.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D12/NB5SO57&22.stream/playlist.m3u8',
    tags: ['traffic', 'highway', 'interchange', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.7875,
    lon: -117.8714,
    isLive: true,
    streamType: 'hls',
  },
  {
    id: 'i15-del-lago',
    name: 'I-15 at Del Lago',
    location: 'Escondido, CA',
    description: 'Southbound I-15 at Del Lago transit station in North San Diego County.',
    hlsUrl: 'https://wzmedia.dot.ca.gov/D11/C091_SB_15_at_Del_Lago.stream/playlist.m3u8',
    tags: ['traffic', 'highway', 'featured-traffic'],
    region: 'California',
    subregion: 'SoCal',
    lat: 33.1610,
    lon: -117.0989,
    isLive: true,
    streamType: 'hls',
  },

  // ─── Pacific Northwest — Scenic Traffic Cams ──────────
  {
    id: 'snoqualmie-pass',
    name: 'Snoqualmie Pass I-90',
    location: 'Snoqualmie Pass, WA',
    description: 'Mountain pass summit on I-90. Check snow levels, road conditions, and visibility at this major Cascade crossing.',
    hlsUrl: 'https://images.wsdot.wa.gov/sc/090VC05200.jpg',
    tags: ['traffic', 'mountain', 'snow', 'scenic', 'featured-traffic'],
    region: 'Pacific NW',
    subregion: 'Washington',
    lat: 47.428,
    lon: -121.420,
    isLive: true,
    streamType: 'image',
  },
  {
    id: 'i84-north-powder',
    name: 'I-84 at North Powder',
    location: 'North Powder, OR',
    description: 'Interstate 84 in scenic eastern Oregon. Mountain views and wide-open high desert landscapes.',
    hlsUrl: 'https://tripcheck.com/RoadCams/cams/I-84 at N Powder S_pid5234.jpg',
    tags: ['traffic', 'scenic', 'mountain', 'featured-traffic'],
    region: 'Pacific NW',
    subregion: 'Oregon',
    lat: 45.01481,
    lon: -117.9191,
    isLive: true,
    streamType: 'image',
  },
  {
    id: 'santiam-pass',
    name: 'Santiam Pass US-20',
    location: 'Santiam Pass, OR',
    description: 'US Route 20 at Santiam Pass in the Oregon Cascades. Monitor snow conditions at this scenic mountain crossing.',
    hlsUrl: 'https://tripcheck.com/RoadCams/cams/Santiam Pass WB_pid5258.jpg',
    tags: ['traffic', 'mountain', 'snow', 'scenic', 'featured-traffic'],
    region: 'Pacific NW',
    subregion: 'Oregon',
    lat: 44.4224,
    lon: -121.8483,
    isLive: true,
    streamType: 'image',
  },
  {
    id: 'or82-minam',
    name: 'OR-82 at Minam',
    location: 'Minam, OR',
    description: 'Oregon Route 82 at Minam in the Wallowa Mountains. Remote river valley with stunning mountain scenery.',
    hlsUrl: 'https://tripcheck.com/RoadCams/cams/OR82 at Minam WB MP34.9_pid5262.jpg',
    tags: ['traffic', 'scenic', 'mountain', 'river', 'featured-traffic'],
    region: 'Pacific NW',
    subregion: 'Oregon',
    lat: 45.6207,
    lon: -117.7260,
    isLive: true,
    streamType: 'image',
  },
  {
    id: 'portland-ne-columbia',
    name: 'Portland NE Columbia at 47th',
    location: 'Portland, OR',
    description: 'City traffic camera at NE Columbia Blvd and 47th Ave in Portland.',
    hlsUrl: 'https://tripcheck.com/RoadCams/cams/NE Columbia at 47th_pid5231.jpg',
    tags: ['traffic', 'city', 'featured-traffic'],
    region: 'Pacific NW',
    subregion: 'Oregon',
    lat: 45.5601,
    lon: -122.6146,
    isLive: true,
    streamType: 'image',
  },

  // ─── International ─────────────────────────────────────
  {
    id: 'abbey-road-london',
    name: 'Abbey Road Crossing',
    location: 'London, UK',
    description: 'The world-famous Abbey Road zebra crossing made iconic by The Beatles. Watch tourists recreate the album cover 24/7.',
    hlsUrl: 'https://www.youtube.com/embed/XwXKJHgRM50',
    tags: ['street', 'iconic', 'city', 'international'],
    region: 'International',
    subregion: 'Europe',
    lat: 51.532,
    lon: -0.1781,
    isLive: true,
    isFeatured: true,
    streamType: 'youtube',
  },
  {
    id: 'prague-charles-bridge',
    name: 'Prague Charles Bridge',
    location: 'Prague, Czech Republic',
    description: 'Live view of the historic Charles Bridge over the Vltava River. One of the most beautiful medieval bridges in Europe.',
    hlsUrl: 'https://www.youtube.com/embed/0tz1y8zLeQU',
    tags: ['city', 'historic', 'bridge', 'international'],
    region: 'International',
    subregion: 'Europe',
    lat: 50.0755,
    lon: 14.4378,
    isLive: true,
    streamType: 'youtube',
  },
  {
    id: 'churchill-polar-bears',
    name: 'Polar Bear Cam',
    location: 'Churchill, Manitoba, Canada',
    description: 'Watch polar bears in their natural habitat from the Tundra Buggy in Churchill, the polar bear capital of the world.',
    hlsUrl: 'https://files.explore.org/files/Tundra-Buggy-Polar-Bear-Cam-034031907.jpg',
    tags: ['wildlife', 'arctic', 'nature', 'international'],
    region: 'International',
    subregion: 'Americas',
    lat: 58.7684,
    lon: -94.165,
    isLive: true,
    streamType: 'image',
  },
];

// Helper functions
export function getCameraById(id: string): Camera | undefined {
  return cameras.find(c => c.id === id);
}

export function getCamerasByRegion(region: string): Camera[] {
  return cameras.filter(c => c.region === region);
}

export function getCamerasByTag(tag: string): Camera[] {
  return cameras.filter(c => c.tags.includes(tag));
}

export function getFeaturedCameras(): Camera[] {
  return cameras.filter(c => c.isFeatured);
}

export function getAllRegions(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const c of cameras) {
    map.set(c.region, (map.get(c.region) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllTags(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const c of cameras) {
    for (const t of c.tags) {
      map.set(t, (map.get(t) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
