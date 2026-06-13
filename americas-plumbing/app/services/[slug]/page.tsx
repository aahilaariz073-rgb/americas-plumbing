import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getService } from '@/app/data/services';
import { areas } from '@/app/data/areas';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

/* ── Related services cross-links ── */
const relatedMap: Record<string, string[]> = {
  'emergency-plumbing':   ['leak-detection', 'drain-cleaning', 'sewer-line', 'water-heater'],
  'leak-detection':       ['emergency-plumbing', 'repiping', 'sewer-line', 'camera-inspection'],
  'repiping':             ['leak-detection', 'water-line-repair', 'water-heater', 'drain-cleaning'],
  'drain-cleaning':       ['hydro-jetting', 'camera-inspection', 'sewer-line', 'emergency-plumbing'],
  'water-heater':         ['gas-line', 'fixture-installation', 'repiping', 'emergency-plumbing'],
  'fixture-installation': ['bathroom-fixtures', 'water-heater', 'garbage-disposal', 'water-line-repair'],
  'gas-line':             ['water-heater', 'fixture-installation', 'emergency-plumbing', 'sewer-line'],
  'sewer-line':           ['drain-cleaning', 'hydro-jetting', 'camera-inspection', 'emergency-plumbing'],
  'garbage-disposal':     ['fixture-installation', 'drain-cleaning', 'bathroom-fixtures', 'water-line-repair'],
  'camera-inspection':    ['sewer-line', 'drain-cleaning', 'hydro-jetting', 'leak-detection'],
  'hydro-jetting':        ['drain-cleaning', 'camera-inspection', 'sewer-line', 'emergency-plumbing'],
  'bathroom-fixtures':    ['fixture-installation', 'garbage-disposal', 'water-line-repair', 'repiping'],
  'water-line-repair':    ['repiping', 'leak-detection', 'emergency-plumbing', 'sewer-line'],
};

/* ── All service areas for schema + strip ── */
const allCities = areas.map(a => ({ '@type': 'City', name: `${a.city}, CA` }));

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const base = 'https://americasplumbing.com';
  const url = `${base}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: 'website',
      locale: 'en_US',
      siteName: "America's Plumbing",
      images: [
        {
          url: `${base}/plumb.jpg`,
          width: 1200,
          height: 630,
          alt: `America's Plumbing — ${service.name} in San Jacinto & Southern California`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${base}/plumb.jpg`],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const base = 'https://americasplumbing.com';

  const relatedSlugs = relatedMap[service.slug] ?? [];
  const relatedServices = relatedSlugs
    .map(s => services.find(sv => sv.slug === s))
    .filter(Boolean) as typeof services;

  /* ── JSON-LD Schemas ── */

  // 1. LocalBusiness (full, high-quality)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'LocalBusiness'],
    '@id': base,
    name: "America's Plumbing",
    description: `Licensed C-36 plumbing contractor based in San Jacinto, CA. ${service.name} and full-service plumbing throughout Southern California.`,
    telephone: '+19493790082',
    email: 'californiajoe500@gmail.com',
    url: base,
    logo: `${base}/logo.png`,
    image: `${base}/plumb.jpg`,
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    founder: { '@type': 'Person', name: 'Joseph Romero' },
    foundingDate: '2000',
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
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'License',
      name: 'C-36 Plumbing Contractor License',
      recognizedBy: { '@type': 'Organization', name: 'California Contractors State License Board' },
      identifier: '0784091',
    },
    areaServed: allCities,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // 2. Service schema (rich — includes included items as offer catalog)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    alternateName: service.shortName,
    description: service.intro,
    serviceType: service.shortName,
    url: `${base}/services/${service.slug}`,
    provider: {
      '@type': ['Plumber', 'LocalBusiness'],
      name: "America's Plumbing",
      telephone: '+19493790082',
      url: base,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Jacinto',
        addressRegion: 'CA',
        postalCode: '92583',
        addressCountry: 'US',
      },
    },
    areaServed: allCities,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} — What's Included`,
      itemListElement: service.included.map(item => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.desc,
        },
      })),
    },
  };

  // 3. FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  // 4. Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${base}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#080f1f', padding: '80px 28px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '130%', background: '#1A52BE', clipPath: 'polygon(18% 0%,100% 0%,100% 100%,0% 100%)', opacity: 0.07 }} />
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '42%', height: '130%', background: '#C8202A', clipPath: 'polygon(20% 0%,22% 0%,4% 100%,2% 100%)', opacity: 0.5 }} />
          </div>
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>›</span>
              <a href="/services" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none' }}>Services</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{service.name}</span>
            </div>

            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                {service.eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em',
              marginBottom: '24px', maxWidth: '860px'
            }}>
              {service.h1}
            </h1>

            {/* Intro */}
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              {service.intro}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href="tel:+19493790082" style={{ background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Call (949) 379-0082
              </a>
              <a href="/#contact" style={{ background: 'transparent', color: '#fff', fontSize: '0.95rem', fontWeight: 600, padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                Get Free Quote
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['C-36 Licensed · #0784091', '25+ Years in Business', 'Same-Day Service', '24/7 Emergency', 'Free Estimates'].map(badge => (
                <span key={badge} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                  padding: '7px 16px', borderRadius: '100px',
                  fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* ── Body + Sidebar ── */}
        <section style={{ background: '#fff', padding: '80px 28px' }}>
          <div className="svc-two-col" style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '72px', alignItems: 'start' }}>

            {/* Main content */}
            <div>
              {service.body.map((para, i) => (
                <p key={i} style={{ color: '#5a5e72', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>{para}</p>
              ))}

              {/* What's Included */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '48px', marginBottom: '28px' }}>
                <div style={{ width: '2px', height: '22px', background: '#C8202A', borderRadius: '2px', flexShrink: 0 }} />
                <h2 style={{
                  fontFamily: 'var(--font-newsreader), serif',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700,
                  color: '#080f1f', lineHeight: 1.1,
                }}>
                  What&apos;s Included with {service.shortName}
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', background: '#e0e2ea' }}>
                {service.included.map(item => (
                  <div key={item.title} style={{ background: '#fff', padding: '28px 24px' }}>
                    <div style={{ width: '32px', height: '2px', background: '#C8202A', marginBottom: '14px' }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#080f1f', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ color: '#5a5e72', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '104px' }}>
              <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e8eaf0', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
                <iframe
                  src="https://maps.google.com/maps?q=San+Jacinto%2C+CA&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`America's Plumbing — ${service.name} service area, Southern California`}
                />
                <div style={{ padding: '20px 22px', background: '#fff', borderTop: '1px solid #e8eaf0' }}>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '6px', fontWeight: 600 }}>
                    📍 Based in San Jacinto, CA
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#9ca3af', marginBottom: '16px', lineHeight: 1.5 }}>
                    Serving Riverside County &amp; South Orange County
                  </p>
                  <a href="tel:+19493790082" style={{
                    display: 'block', textAlign: 'center', background: '#C8202A',
                    color: '#fff', padding: '13px', borderRadius: '6px',
                    fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem',
                    letterSpacing: '0.04em', marginBottom: '10px'
                  }}>
                    Call (949) 379-0082
                  </a>
                  <a href="/#contact" style={{
                    display: 'block', textAlign: 'center', background: '#f7f8fc',
                    color: '#080f1f', padding: '12px', borderRadius: '6px',
                    fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem',
                    border: '1px solid #e0e2ea'
                  }}>
                    Get a Free Quote
                  </a>

                  {/* Trust in sidebar */}
                  <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid #f0f1f5', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['✓  C-36 Licensed #0784091', '✓  25+ Years in Business', '✓  Same-Day Available', '✓  Written Warranty'].map(t => (
                      <span key={t} style={{ fontSize: '0.78rem', color: '#374151', fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.1, marginBottom: '40px' }}>
              Common Questions About {service.name}
            </h2>
            {service.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e0e2ea', padding: '24px 0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Services ── */}
        {relatedServices.length > 0 && (
          <section style={{ background: '#fff', padding: '64px 28px', borderTop: '1px solid #e8eaf0' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
                <div style={{ width: '24px', height: '2px', background: '#C8202A' }} />
                <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  Related Services
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {relatedServices.map(svc => (
                  <a key={svc.slug} href={`/services/${svc.slug}`} className="rel-card" style={{
                    background: '#f7f8fc', border: '1px solid #e8eaf0',
                    borderRadius: '8px', padding: '24px',
                    textDecoration: 'none', display: 'block',
                  }}>
                    <div style={{ width: '32px', height: '2px', background: '#C8202A', marginBottom: '12px' }} />
                    <h3 style={{
                      fontFamily: 'var(--font-newsreader), serif',
                      fontSize: '1rem', fontWeight: 700, color: '#080f1f',
                      marginBottom: '8px', lineHeight: 1.25,
                    }}>
                      {svc.name}
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '12px' }}>
                      {svc.intro.slice(0, 75)}…
                    </p>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#C8202A' }}>Learn more →</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Service Areas Strip (all 18 cities) ── */}
        <section style={{ background: '#f7f8fc', padding: '44px 28px', borderTop: '1px solid #e8eaf0' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ color: '#080f1f', fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {service.shortName} near:
              </span>
              {areas.map(a => (
                <a key={a.slug} href={`/areas/${a.slug}`} style={{
                  background: '#fff', border: '1px solid #e0e2ea',
                  color: '#374151', padding: '5px 13px', borderRadius: '3px',
                  fontSize: '0.80rem', fontWeight: 600, textDecoration: 'none',
                }}>
                  {a.city}
                </a>
              ))}
              <a href="/areas" style={{ fontSize: '0.80rem', fontWeight: 700, color: '#C8202A', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                View all areas →
              </a>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />

      <style>{`
        .rel-card { transition: box-shadow 0.2s, transform 0.2s; }
        .rel-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .rel-card:hover h3 { color: #C8202A; }
        @media (max-width: 900px) {
          .svc-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
