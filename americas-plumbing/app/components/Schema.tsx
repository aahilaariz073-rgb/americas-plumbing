export default function Schema({ page = 'home', city = 'Orange County', service = '' }: {
  page?: 'home' | 'service' | 'area';
  city?: string;
  service?: string;
}) {
  const base = {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'LocalBusiness'],
    '@id': 'https://americasplumbing.com',
    name: "America's Plumbing",
    description: "Licensed C-36 plumbing contractor serving Orange County and Southern California. Same-day service, 24/7 emergency response, upfront pricing.",
    telephone: '+19493790082',
    email: 'californiajoe500@gmail.com',
    url: 'https://americasplumbing.com',
    logo: 'https://americasplumbing.com/logo.png',
    image: 'https://americasplumbing.com/logo.png',
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: [
      'Irvine, CA', 'Newport Beach, CA', 'Laguna Hills, CA', 'Mission Viejo, CA',
      'Lake Forest, CA', 'Aliso Viejo, CA', 'San Clemente, CA', 'Huntington Beach, CA',
      'Anaheim, CA', 'Santa Ana, CA', 'Orange County, CA',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orange County',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Plumbing', url: 'https://americasplumbing.com/services/emergency-plumbing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leak Detection & Repair', url: 'https://americasplumbing.com/services/leak-detection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-Home Repiping', url: 'https://americasplumbing.com/services/repiping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Cleaning', url: 'https://americasplumbing.com/services/drain-cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Heater Services', url: 'https://americasplumbing.com/services/water-heater' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fixture Installation', url: 'https://americasplumbing.com/services/fixture-installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Line Services', url: 'https://americasplumbing.com/services/gas-line' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Line Services', url: 'https://americasplumbing.com/services/sewer-line' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(base) }}
    />
  );
}
