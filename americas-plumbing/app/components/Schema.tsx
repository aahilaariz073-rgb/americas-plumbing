import { BUSINESS, AREA_SERVED_CITIES, plumberIdentity } from '@/app/data/business';

const SERVICE_OFFERS = [
  { name: 'Emergency Plumbing', slug: 'emergency-plumbing' },
  { name: 'Leak Detection & Repair', slug: 'leak-detection' },
  { name: 'Whole-Home Repiping', slug: 'repiping' },
  { name: 'Drain Cleaning & Hydro Jetting', slug: 'drain-cleaning' },
  { name: 'Water Heater Services', slug: 'water-heater' },
  { name: 'Fixture Installation & Repair', slug: 'fixture-installation' },
  { name: 'Gas Line Repair & Installation', slug: 'gas-line' },
  { name: 'Sewer Line Repair & Replacement', slug: 'sewer-line' },
  { name: 'Garbage Disposal Services', slug: 'garbage-disposal' },
  { name: 'Camera Inspection & Video Diagnostics', slug: 'camera-inspection' },
  { name: 'Hydro Jetting Services', slug: 'hydro-jetting' },
  { name: 'Water Line Repair & Replacement', slug: 'water-line-repair' },
];

export default function Schema(_props?: { page?: 'home' | 'service' | 'area'; city?: string; service?: string }) {
  const base = {
    '@context': 'https://schema.org',
    ...plumberIdentity,
    description:
      "Licensed C-36 plumbing contractor based in San Jacinto, CA serving Southern California including Riverside County and South Orange County. Same-day service, 24/7 emergency response, upfront pricing.",
    areaServed: AREA_SERVED_CITIES,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: SERVICE_OFFERS.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: `${BUSINESS.url}/services/${s.slug}` },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(base) }}
    />
  );
}
