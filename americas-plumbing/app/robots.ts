import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you'],
      },
    ],
    sitemap: 'https://www.americasplumbing.com/sitemap.xml',
    host: 'https://www.americasplumbing.com',
  };
}
