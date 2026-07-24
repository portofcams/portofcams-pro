export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readingTime: number;
}

// Single source of truth for blog post metadata, consumed by each
// src/pages/blog/{slug}.astro (feeds BlogLayout props) and src/pages/rss.xml.js.
// Values are unchanged from what each post file already declared.
export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-venue-needs-a-live-camera",
    title: "Why Every Bar and Venue Needs a Live Camera in 2026",
    description:
      "A live camera is the one marketing channel that never sleeps. See how venues use 24/7 streaming to fill seats, build FOMO, and grow an audience.",
    category: "Strategy",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-streaming-for-bars-restaurants",
    title: "How Bars and Restaurants Use Live Cameras to Fill Tables",
    description:
      "Live cameras solve the slow-night problem — showing real-time crowd energy that no promotion or discount can replicate. Here's how top venues use live streaming to drive weeknight covers.",
    category: "Venues & Bars",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "beach-resort-live-cam-marketing",
    title: "How Beach Resorts Use Live Cameras to Drive Bookings",
    description:
      "Live webcams are one of the most powerful booking conversion tools a beach resort can deploy. Here's how resorts use live streams to reduce OTA dependence and drive direct revenue.",
    category: "Hospitality",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-streaming-for-events-festivals",
    title: "Using Live Streaming to Sell Out Your Next Event or Festival",
    description:
      "How event organizers use live cameras to build FOMO, boost ticket sales, and create a permanent content archive from every event.",
    category: "Events",
    publishDate: "2026-07-16",
    readingTime: 2,
  },
  {
    slug: "tourism-destination-live-cam-guide",
    title: "Live Webcams for Tourism Destinations: A Marketing Guide",
    description:
      "How tourism destinations, CVBs, and landmark operators use live webcams to drive visitor intent, improve search visibility, and create shareable content.",
    category: "Tourism",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-camera-fomo-foot-traffic",
    title: "How a Live Camera Creates FOMO and Drives Foot Traffic",
    description:
      "The psychology behind live venue cameras — how real-time streaming converts passive viewers into customers through social proof and FOMO.",
    category: "Strategy",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "embed-live-cam-your-website",
    title: "How to Embed a Live Camera on Your Website",
    description:
      "Step-by-step guide to embedding a live camera player on your website, plus how live streams improve dwell time, search rankings, and direct booking conversion.",
    category: "Technical",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-streaming-vs-prerecorded-venue-marketing",
    title: "Live Streaming vs. Pre-Recorded Video for Venue Marketing",
    description:
      "A practical comparison of live streaming and pre-recorded video for bars, restaurants, and hospitality venues — when each works and how to combine them.",
    category: "Strategy",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-cam-surf-spots-outdoor-recreation",
    title: "How Surf Spots and Outdoor Recreation Areas Use Live Webcams",
    description:
      "Live cameras at surf breaks, ski areas, parks, and trails give visitors real-time conditions — turning casual visitors into committed trip-planners.",
    category: "Outdoor & Recreation",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-camera-roi-for-venues",
    title: "The ROI of a Live Camera: Turning Viewers into Customers",
    description:
      "A practical breakdown of how venues measure ROI from live streaming — foot traffic attribution, social growth, booking conversion, and total cost.",
    category: "Strategy",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-cameras-for-marinas-harbors",
    title: "Live Cameras for Marinas and Harbors: Bookings & Safety",
    description:
      "How marina operators and harbormaster offices use live cameras to show slip conditions, drive transient bookings, and support safety awareness on the water.",
    category: "Marine",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-streaming-for-ski-resorts",
    title: "How Ski Resorts Use Live Webcams to Sell Season Passes",
    description:
      "Live ski cams are one of the highest-converting marketing tools a mountain can deploy. Here's how ski resorts use real-time camera feeds to drive passes, lodging, and lessons.",
    category: "Outdoor & Recreation",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "timelapse-social-media-strategy",
    title: "How Automated Timelapse Replaces Your Venue's Social Media Team",
    description:
      "PortOfCams generates daily timelapse clips from your live camera and posts them automatically to YouTube, Instagram, and TikTok. Here's how venues build followings without a content team.",
    category: "Marketing",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "live-streaming-for-hotels-resorts",
    title: "Live Streaming for Hotels: How Webcams Influence Bookings",
    description:
      "Hotels that embed live cameras on their booking pages see higher direct booking conversion and lower OTA dependence. Here's how hospitality properties use live streaming effectively.",
    category: "Hospitality",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
  {
    slug: "how-hls-live-streaming-works",
    title: "How HLS Live Streaming Works: A Plain-English Guide",
    description:
      "HLS (HTTP Live Streaming) is the technology behind venue webcams and live streaming platforms. Here's how it works, why it matters, and what it means for your live camera setup.",
    category: "Technical",
    publishDate: "2026-07-16",
    readingTime: 3,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Blog post not found in blog-posts.ts: ${slug}`);
  return post;
}
