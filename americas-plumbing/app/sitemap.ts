import { MetadataRoute } from 'next';
import { services } from './data/services';
import { areas } from './data/areas';
import { publishedPostsByDate } from './data/blog';
import { gitLastModified } from './lib/lastModified';

// Re-generate periodically so scheduled blog posts enter the sitemap on time.
export const revalidate = 21600;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.americasplumbing.com';

  const staticPages = [
    { url: base, lastModified: gitLastModified('app/page.tsx') },
    { url: `${base}/about`, lastModified: gitLastModified('app/about/page.tsx') },
    { url: `${base}/services`, lastModified: gitLastModified('app/services/page.tsx') },
    { url: `${base}/areas`, lastModified: gitLastModified('app/areas/page.tsx') },
    { url: `${base}/reviews`, lastModified: gitLastModified('app/reviews/page.tsx') },
    { url: `${base}/faq`, lastModified: gitLastModified('app/faq/page.tsx') },
    { url: `${base}/contact`, lastModified: gitLastModified('app/contact/page.tsx') },
    { url: `${base}/blog`, lastModified: gitLastModified('app/data/blog.ts') },
  ];

  // Individual posts already carry a real, explicit publish date — the most
  // accurate lastmod available, no git lookup needed.
  const blogPages = publishedPostsByDate().map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  // Content for these lives in shared data files, so that file's real git
  // history is the accurate lastmod for every entry within it.
  const servicesLastModified = gitLastModified('app/data/services.ts');
  const areasLastModified = gitLastModified('app/data/areas.ts');

  const servicePages = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: servicesLastModified,
  }));

  const areaPages = areas.map(a => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: areasLastModified,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
