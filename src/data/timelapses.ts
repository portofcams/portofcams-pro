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

const CLIP_BASE = 'https://ai.portofcams.com/static/clips';

export const timelapses: Timelapse[] = [
  {
    id: 'lewers-sunrise-showcase',
    title: 'Sunrise Golden Hour Over Waikiki',
    cameraName: 'East Lewers Street',
    cameraId: 'east-lewers-st',
    duration: '8 min',
    date: '2026-07-16',
    videoUrl: `${CLIP_BASE}/gallery-lewers-sunrise.mp4`,
    thumbnail: `${CLIP_BASE}/gallery-lewers-sunrise-thumb.jpg`,
    description: 'Our premium HD showcase timelapse: eight minutes of sunrise golden hour compressed into eight seconds. First sun catches the clouds over the Koolau ridge while Lewers Street wakes up below, shot at 5:50am Hawaii time in native 2048x1536.',
    tags: ['sunrise', 'waikiki', 'timelapse'],
  },
  {
    id: 'lewers-golden-hour',
    title: 'Golden Hour Into Dusk on Lewers Street',
    cameraName: 'East Lewers Street',
    cameraId: 'east-lewers-st',
    duration: '2 hours',
    date: '2026-07-16',
    videoUrl: `${CLIP_BASE}/gallery-lewers-golden-hour.mp4`,
    thumbnail: `${CLIP_BASE}/gallery-lewers-golden-hour-thumb.jpg`,
    description: 'Two full hours of late-afternoon light in fifteen seconds. Shadows stretch across the street, clouds pour over the mountains, and Waikiki slides from golden hour into dusk between 5pm and 7pm Hawaii time.',
    tags: ['sunset', 'waikiki', 'timelapse'],
  },
  {
    id: 'lewers-dawn-live',
    title: 'First Light on Lewers Street',
    cameraName: 'East Lewers Street',
    cameraId: 'east-lewers-st',
    duration: '30 sec',
    date: '2026-07-16',
    videoUrl: `${CLIP_BASE}/gallery-lewers-dawn.mp4`,
    thumbnail: `${CLIP_BASE}/gallery-lewers-dawn-thumb.jpg`,
    description: 'A real-time slice of 6am Waikiki: pink and gold dawn clouds building over the ridge while the street below is still quiet. Thirty seconds straight off the live stream, no speed-up.',
    tags: ['sunrise', 'waikiki', 'live'],
  },
  {
    id: 'lewers-midday-live',
    title: 'Midday on Lewers Street',
    cameraName: 'East Lewers Street',
    cameraId: 'east-lewers-st',
    duration: '30 sec',
    date: '2026-07-16',
    videoUrl: `${CLIP_BASE}/gallery-lewers-midday.mp4`,
    thumbnail: `${CLIP_BASE}/gallery-lewers-midday-thumb.jpg`,
    description: 'Full Hawaiian sun at 2pm: trade-wind clouds on the mountains, traffic rolling past the canal, palms moving in the breeze. A thirty-second real-time clip from the live feed.',
    tags: ['day', 'waikiki', 'live'],
  },
  {
    id: 'kilauea-night-glow',
    title: 'Kilauea Eruption Glow at Night',
    cameraName: 'Kilauea Summit (USGS East Cam)',
    cameraId: 'kilauea-east',
    duration: '15 min',
    date: '2026-07-16',
    videoUrl: `${CLIP_BASE}/gallery-kilauea-night.mp4`,
    thumbnail: `${CLIP_BASE}/gallery-kilauea-night-thumb.jpg`,
    description: 'Fifteen minutes past 1am at the Kilauea summit, from USGS webcam imagery: near-total darkness with the faint orange glow of the eruption site pulsing on the crater rim. Subtle, real, and live from the volcano.',
    tags: ['volcano', 'night', 'timelapse'],
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
