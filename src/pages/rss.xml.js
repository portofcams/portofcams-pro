import rss from '@astrojs/rss';
import { blogPosts } from '../data/blog-posts';

export async function GET(context) {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return rss({
    title: 'PortOfCams Pro Blog',
    description:
      'Guides, case studies, and how-tos for venues, resorts, and destinations using live streaming and webcams to grow their audience.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.publishDate,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
