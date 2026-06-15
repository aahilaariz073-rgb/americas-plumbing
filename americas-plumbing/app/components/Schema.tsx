export default function Schema({ page = 'home', city = 'San Jacinto', service = '' }: {
  page?: 'home' | 'service' | 'area';
  city?: string;
  service?: string;
}) {
  const base = {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'LocalBusiness'],
    '@id': 'https://www.americasplumbing.com',
    name: "America's Plumbing",
    description: "Licensed C-36 plumbing contractor based in San Jacinto, CA serving Southern California including Riverside County and South Orange County. Same-day service, 24/7 emergency response, upfront pricing.",
    telephone: '+19493790082',
    email: 'californiajoe500@gmail.com',
    url: 'https://www.americasplumbing.com',
    logo: 'https://www.americasplumbing.com/logo.png',
    image: 'https://www.americasplumbing.com/logo.png',
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: [
      'San Jacinto, CA',
      'Hemet, CA',
      'Menifee, CA',
      'Beaumont, CA',
      'Romoland, CA',
      'Riverside, CA',
      'Moreno Valley, CA',
      'Ladera Ranch, CA',
      'Laguna Woods, CA',
      'Coto de Caza, CA',
      'Rancho Mission Viejo, CA',
      'Aliso Viejo, CA',
      'Lake Forest, CA',
      'Laguna Beach, CA',
      'Laguna Hills, CA',
      'Laguna Niguel, CA',
      'Mission Viejo, CA',
      'Rancho Santa Margarita, CA',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Jacinto',
      addressRegion: 'CA',
      postalCode: '92583',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7865,
      longitude: -116.9581,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Plumbing', url: 'https://www.americasplumbing.com/services/emergency-plumbing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leak Detection & Repair', url: 'https://www.americasplumbing.com/services/leak-detection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-Home Repiping', url: 'https://www.americasplumbing.com/services/repiping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Cleaning & Hydro Jetting', url: 'https://www.americasplumbing.com/services/drain-cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Heater Services', url: 'https://www.americasplumbing.com/services/water-heater' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fixture Installation & Repair', url: 'https://www.americasplumbing.com/services/fixture-installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Line Repair & Installation', url: 'https://www.americasplumbing.com/services/gas-line' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Line Repair & Replacement', url: 'https://www.americasplumbing.com/services/sewer-line' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garbage Disposal Services', url: 'https://www.americasplumbing.com/services/garbage-disposal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camera Inspection & Video Diagnostics', url: 'https://www.americasplumbing.com/services/camera-inspection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydro Jetting Services', url: 'https://www.americasplumbing.com/services/hydro-jetting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Fixture Services', url: 'https://www.americasplumbing.com/services/bathroom-fixtures' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Line Repair & Replacement', url: 'https://www.americasplumbing.com/services/water-line-repair' } },
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
