// ──────────────────────────────────────────────────────────────
// Single source of truth for business identity (NAP) + JSON-LD.
// Keep these values matched to the visible site content so structured
// data never drifts from what users actually see.
// ──────────────────────────────────────────────────────────────

export const BUSINESS = {
  // @id used to anchor the Plumber entity so other pages can reference it
  id: 'https://www.americasplumbing.com',
  name: "America's Plumbing",
  url: 'https://www.americasplumbing.com',
  telephone: '+19493790082',
  telephoneDisplay: '(949) 379-0082',
  email: 'californiajoe500@gmail.com',
  logo: 'https://www.americasplumbing.com/logo.png',
  image: 'https://www.americasplumbing.com/plumb.jpg',
  priceRange: '$$',
  foundingDate: '2000',
  founderName: 'Joseph Romero',
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
  license: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'License',
    name: 'C-36 Plumbing Contractor License',
    recognizedBy: { '@type': 'Organization', name: 'California Contractors State License Board' },
    identifier: '0784091',
  },
  // 24/7 — every day, all hours
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
} as const;

// ──────────────────────────────────────────────────────────────
// Off-site profiles that belong to this business. These become the
// `sameAs` array in JSON-LD, which is how Google ties this website to the
// Google Business Profile, Facebook page, Yelp listing, etc. and treats
// them as one entity. ONLY add URLs that are verified, live, and owned by
// America's Plumbing — an unverifiable or wrong `sameAs` is worse than an
// empty one. Empty until the real profile URLs are supplied, and the
// `sameAs` property is omitted entirely while it is empty.
// ──────────────────────────────────────────────────────────────
export const SOCIAL_PROFILES: string[] = [
  'https://www.facebook.com/AmericasPlumbingOC/',
  'https://www.instagram.com/americasplumbing',
  'https://www.youtube.com/channel/UCxIUUZiRxWDaAy-NqVGDVIQ',
];

// Google Business Profile "get more reviews" short link. Copy from the GBP
// dashboard → Ask for reviews → share review form. Empty means "not
// configured yet", and the review button is hidden rather than shipping a
// dead link to customers.
export const GOOGLE_REVIEW_URL: string = '';

// Cities served, shown on the site and used for areaServed in schema.
export const AREA_SERVED_CITIES: string[] = [
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
];

// Reusable Plumber identity block (no AggregateRating — we do not have a
// verifiable review count to cite, and fabricating one risks a penalty).
export const plumberIdentity = {
  '@type': ['Plumber', 'LocalBusiness'],
  '@id': BUSINESS.id,
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  logo: BUSINESS.logo,
  image: BUSINESS.image,
  priceRange: BUSINESS.priceRange,
  foundingDate: BUSINESS.foundingDate,
  founder: { '@type': 'Person', name: BUSINESS.founderName },
  address: BUSINESS.address,
  geo: BUSINESS.geo,
  hasCredential: BUSINESS.license,
  openingHoursSpecification: BUSINESS.openingHoursSpecification,
  // Omitted entirely while no verified profile URLs exist — an empty array
  // is a weaker signal than no property at all.
  ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
};
