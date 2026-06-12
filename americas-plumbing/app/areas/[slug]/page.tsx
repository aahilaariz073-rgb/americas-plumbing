import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { areas, getArea } from '@/app/data/areas';
import { services } from '@/app/data/services';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import Schema from '@/app/components/Schema';

export async function generateStaticParams() {
  return areas.map(a => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.keywords.join(', '),
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const base = 'https://americasplumbing.com';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${base}/areas` },
      { '@type': 'ListItem', position: 3, name: `Plumber in ${area.city}`, item: `${base}/areas/${area.slug}` },
    ],
  };

  const lm0 = area.landmarks[0] ?? area.city;
  const lm1 = area.landmarks[1] ?? area.county;

  return (
    <>
      <Schema page="area" city={area.city} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>

        {/* ── Section 1: Dark Hero ── */}
        <section style={{ background: '#080f1f', padding: '80px 28px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.04em' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>›</span>
              <a href="/areas" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.04em' }}>Service Areas</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', letterSpacing: '0.04em' }}>{area.city}</span>
            </div>

            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                {area.county}, California
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: '24px',
              maxWidth: '820px',
            }}>
              {area.h1}
            </h1>

            {/* Intro */}
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '620px', marginBottom: '36px' }}>
              {area.intro}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="tel:+19493790082" style={{
                background: '#C8202A', color: '#fff', fontSize: '0.9rem', fontWeight: 700,
                padding: '14px 32px', borderRadius: '4px', textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                Call (949) 379-0082
              </a>
              <a href="/#contact" style={{
                background: 'transparent', color: '#fff', fontSize: '0.9rem', fontWeight: 600,
                padding: '13px 28px', borderRadius: '4px', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>
                Get Free Quote
              </a>
            </div>

            {/* Trust badge pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['C-36 Licensed', 'Same-Day Service', '24/7 Emergency', 'Free Estimates'].map(badge => (
                <span key={badge} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom gradient bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #C8202A 0%, #1A52BE 50%, #C8202A 100%)' }} />
        </section>

        {/* ── Section 2: Body + Map ── */}
        <section style={{ background: '#fff', padding: '80px 28px' }}>
          <div
            className="area-two-col"
            style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '65% 35%', gap: '60px', alignItems: 'start' }}
          >
            {/* Left: body text */}
            <div>
              {/* Section label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '2px', height: '22px', background: '#C8202A', borderRadius: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8202A' }}>
                  About {area.city}
                </span>
              </div>

              {area.body.map((para, i) => (
                <p key={i} style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '24px' }}>{para}</p>
              ))}
            </div>

            {/* Right: map */}
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8eaf0', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(area.city + ', CA')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${area.city}, CA`}
                />
              </div>
              <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+19493790082" style={{
                  display: 'block', textAlign: 'center', background: '#C8202A',
                  color: '#fff', padding: '13px', borderRadius: '6px',
                  fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem',
                  letterSpacing: '0.04em',
                }}>
                  Call (949) 379-0082
                </a>
                <a href="/#contact" style={{
                  display: 'block', textAlign: 'center', background: '#fff',
                  color: '#080f1f', padding: '12px', borderRadius: '6px',
                  fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem',
                  border: '1px solid #e0e2ea',
                }}>
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Services Grid ── */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#080f1f',
                lineHeight: 1.1,
                marginBottom: '12px',
              }}>
                Plumbing Services We Offer in {area.city}
              </h2>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7 }}>
                C-36 licensed — same crew, same quality, every visit.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
              {services.map(svc => (
                <a key={svc.slug} href={`/services/${svc.slug}`} className="svc-card" style={{
                  background: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #e8eaf0',
                  padding: '28px',
                  textDecoration: 'none',
                  display: 'block',
                }}>
                  <div style={{ width: '40px', height: '2px', background: '#C8202A', marginBottom: '14px' }} />
                  <h3 style={{
                    fontFamily: 'var(--font-newsreader), serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#080f1f',
                    marginBottom: '10px',
                    lineHeight: 1.25,
                  }}>
                    {svc.name}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '14px' }}>
                    {svc.intro.slice(0, 88)}…
                  </p>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C8202A', letterSpacing: '0.04em' }}>
                    Learn more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Local Expertise + Landmarks ── */}
        <section style={{ background: '#fff', padding: '72px 28px' }}>
          <div
            className="area-local-col"
            style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
          >
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '2px', height: '22px', background: '#C8202A', borderRadius: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8202A' }}>
                  Local Expertise
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                fontWeight: 700,
                color: '#080f1f',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}>
                We Know {area.city} Like a Neighbor
              </h2>
              <p style={{ color: '#374151', fontSize: '1rem', lineHeight: 1.8, marginBottom: '28px' }}>
                {"Every neighborhood in " + area.city + " has its own plumbing history. Whether you're in " + lm0 + " or " + lm1 + ", our team arrives knowing what to expect — and how to fix it right."}
              </p>
              <a href="tel:+19493790082" style={{
                display: 'inline-block', background: '#C8202A', color: '#fff',
                padding: '13px 28px', borderRadius: '4px', fontWeight: 700,
                textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                Call (949) 379-0082
              </a>
            </div>

            {/* Right */}
            <div>
              {area.landmarks.length > 0 && (
                <>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#080f1f', marginBottom: '16px' }}>
                    Areas We Cover in {area.city}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                    {area.landmarks.map(l => (
                      <span key={l} style={{
                        background: '#f0f1f5',
                        color: '#080f1f',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                      }}>
                        {l}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {area.zipCodes.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151', marginBottom: '10px' }}>ZIP Codes:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {area.zipCodes.map(z => (
                      <span key={z} style={{
                        background: '#eef2ff',
                        color: '#1A52BE',
                        padding: '5px 12px',
                        borderRadius: '4px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                      }}>
                        {z}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Section 5: FAQ ── */}
        <section style={{ background: '#f7f8fc', padding: '72px 28px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#080f1f',
              lineHeight: 1.1,
              marginBottom: '40px',
            }}>
              Plumbing Questions from {area.city} Residents
            </h2>
            {area.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e0e2ea', padding: '24px 0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Dark CTA ── */}
        <section style={{ background: '#080f1f', padding: '60px 28px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Ready to Help
            </p>
            <h2 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              Same-Day Plumber in {area.city}, CA
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '32px' }}>
              {"Licensed, insured, and ready. We serve " + area.city + " around the clock — call now or request a free estimate."}
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+19493790082" style={{
                background: '#C8202A', color: '#fff', fontSize: '0.9rem', fontWeight: 700,
                padding: '14px 32px', borderRadius: '4px', textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                Call (949) 379-0082
              </a>
              <a href="/#contact" style={{
                background: 'transparent', color: '#fff', fontSize: '0.9rem', fontWeight: 600,
                padding: '13px 28px', borderRadius: '4px', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>
                Get Free Quote
              </a>
            </div>
          </div>
        </section>

        <PageCTA city={area.city} />
      </main>
      <Footer />

      <style>{`
        .svc-card { transition: box-shadow 0.2s, transform 0.2s; }
        .svc-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09); transform: translateY(-2px); }
        .svc-card:hover h3 { color: #C8202A; }
        @media (max-width: 900px) {
          .area-two-col { grid-template-columns: 1fr !important; }
          .area-local-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
