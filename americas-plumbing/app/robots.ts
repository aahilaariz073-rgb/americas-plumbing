import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /thank-you is intentionally crawlable (not disallowed) so Googlebot
        // can actually see its on-page `noindex` meta tag — blocking it here
        // would hide that tag and risk Google indexing it anyway if linked
        // from elsewhere, showing up with no snippet.
      },
    ],
    sitemap: 'https://www.americasplumbing.com/sitemap.xml',
    host: 'https://www.americasplumbing.com',
  };
}
