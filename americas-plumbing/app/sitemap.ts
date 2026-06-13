import { MetadataRoute } from 'next';
import { services } from './data/services';
import { areas } from './data/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://americasplumbing.com';

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/areas`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/reviews`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  const servicePages = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const areaPages = areas.map(a => ({
    url: `${base}/areas/${a.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
