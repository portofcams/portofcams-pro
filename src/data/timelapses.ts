export interface Timelapse {
  id: string;
  title: string;
  cameraName: string;
  cameraId: string;
  duration: string;
  date: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  tags: string[];
}

export const timelapses: Timelapse[] = [
  {
    id: 'waikiki-sunrise-march',
    title: 'Golden Sunrise Over Waikiki',
    cameraName: 'East Lewers Street',
    cameraId: 'east-lewers-st',
    duration: '4 hours',
    date: '2026-03-01',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80',
    description: 'A stunning 4-hour sunrise timelapse captured from Lewers Street in Waikiki. Watch as the sky transitions from deep purple to brilliant gold over the Pacific.',
    tags: ['sunrise', 'beach', 'hawaii'],
  },
  {
    id: 'laguna-sunset-pch',
    title: 'Pacific Coast Highway Sunset',
    cameraName: 'PCH at Blue Bird — Laguna Beach',
    cameraId: 'pch-laguna-bluebird',
    duration: '3 hours',
    date: '2026-02-14',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=640&q=80',
    description: 'Golden hour along the Pacific Coast Highway. Headlights stream through Laguna Beach as the sun dips below the ocean horizon.',
    tags: ['sunset', 'traffic', 'coastal'],
  },
  {
    id: 'snoqualmie-snowstorm',
    title: 'Blizzard at Snoqualmie Pass',
    cameraName: 'Snoqualmie Pass I-90',
    cameraId: 'snoqualmie-pass',
    duration: '24 hours',
    date: '2026-01-18',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=640&q=80',
    description: 'A full 24-hour timelapse of a major winter storm moving through Snoqualmie Pass. Watch the roads disappear under heavy snowfall and the plows fight to keep I-90 open.',
    tags: ['storm', 'snow', 'mountain'],
  },
  {
    id: 'abbey-road-day',
    title: 'A Day at Abbey Road',
    cameraName: 'Abbey Road Crossing',
    cameraId: 'abbey-road-london',
    duration: '12 hours',
    date: '2026-02-22',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1543799382-9a0208331ef7?w=640&q=80',
    description: 'Twelve hours of foot traffic at the world\'s most famous crosswalk. Hundreds of tourists recreate the iconic Beatles album cover from dawn to dusk.',
    tags: ['traffic', 'city', 'iconic'],
  },
  {
    id: 'oahu-rush-hour',
    title: 'Oahu Morning Rush Hour',
    cameraName: 'Oahu Road Conditions',
    cameraId: 'oahu-road-conditions',
    duration: '6 hours',
    date: '2026-02-10',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=640&q=80',
    description: 'Watch Oahu\'s highways come alive during the morning commute. Traffic builds from empty pre-dawn roads to bumper-to-bumper gridlock.',
    tags: ['traffic', 'sunrise', 'hawaii'],
  },
  {
    id: 'prague-golden-hour',
    title: 'Golden Hour Over Charles Bridge',
    cameraName: 'Prague Charles Bridge',
    cameraId: 'prague-charles-bridge',
    duration: '2 hours',
    date: '2026-03-05',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=640&q=80',
    description: 'The warm glow of sunset bathes Prague\'s medieval Charles Bridge in gold. Silhouettes of statues and pedestrians against the Vltava River.',
    tags: ['sunset', 'city', 'waves'],
  },
  {
    id: 'ortega-highway-fog',
    title: 'Fog Rolling Through Ortega Canyon',
    cameraName: 'SR-74 at San Antonio',
    cameraId: 'sr-74-san-antonio',
    duration: '8 hours',
    date: '2026-01-30',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=640&q=80',
    description: 'Marine layer fog creeps through the Ortega Highway canyon overnight, creating an ethereal ocean of clouds flowing between the coastal mountains.',
    tags: ['storm', 'mountain', 'waves'],
  },
  {
    id: 'minam-river-sunrise',
    title: 'Wallowa Mountain Sunrise',
    cameraName: 'OR-82 at Minam',
    cameraId: 'or82-minam',
    duration: '5 hours',
    date: '2026-02-28',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&q=80',
    description: 'First light breaks over the Wallowa Mountains and creeps down the Minam River valley. A remote and pristine wilderness sunrise.',
    tags: ['sunrise', 'mountain', 'waves'],
  },
];

// Helper functions
export function getTimelapseById(id: string): Timelapse | undefined {
  return timelapses.find(t => t.id === id);
}

export function getTimelapsesByTag(tag: string): Timelapse[] {
  return timelapses.filter(t => t.tags.includes(tag));
}

export function getAllTimelapseTags(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const t of timelapses) {
    for (const tag of t.tags) {
      map.set(tag, (map.get(tag) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
