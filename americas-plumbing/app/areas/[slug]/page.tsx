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

  return (
    <>
      <Schema page="area" city={area.city} />
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: '#080f1f', padding: '80px 28px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '130%', background: '#1A52BE', clipPath: 'polygon(18% 0%,100% 0%,100% 100%,0% 100%)', opacity: 0.07 }} />
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '42%', height: '130%', background: '#C8202A', clipPath: 'polygon(20% 0%,22% 0%,4% 100%,2% 100%)', opacity: 0.5 }} />
          </div>
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>›</span>
              <a href="/areas" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Service Areas</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{area.city}</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                {area.county}, California
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em',
              marginBottom: '24px', maxWidth: '860px'
            }}>
              {area.h1}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              {area.intro}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="tel:+19493790082" style={{ background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Call (949) 379-0082
              </a>
              <a href="/#contact" style={{ background: 'transparent', color: '#fff', fontSize: '0.95rem', fontWeight: 600, padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                Get Free Quote
              </a>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* Body + sidebar */}
        <section style={{ background: '#fff', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '72px', alignItems: 'start' }}>
            <div>
              {area.body.map((para, i) => (
                <p key={i} style={{ color: '#5a5e72', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>{para}</p>
              ))}

              {/* Services in this area */}
              <h2 style={{
                fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700,
                color: '#080f1f', lineHeight: 1.1, marginTop: '48px', marginBottom: '32px'
              }}>
                Plumbing Services We Offer in {area.city}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', background: '#e0e2ea' }}>
                {services.map(svc => (
                  <a key={svc.slug} href={`/services/${svc.slug}`} style={{ background: '#fff', padding: '24px', textDecoration: 'none', display: 'block' }}>
                    <div style={{ width: '28px', height: '2px', background: '#C8202A', marginBottom: '12px' }} />
                    <h3 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#080f1f', marginBottom: '6px' }}>{svc.name}</h3>
                    <p style={{ color: '#5a5e72', fontSize: '0.82rem', lineHeight: 1.6 }}>{svc.intro.slice(0, 80)}…</p>
                    <span style={{ color: '#1A52BE', fontSize: '0.8rem', fontWeight: 600, marginTop: '8px', display: 'block' }}>Learn more ›</span>
                  </a>
                ))}
              </div>

              {/* Neighborhoods */}
              {area.landmarks.length > 0 && (
                <>
                  <h2 style={{ fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.1, marginTop: '48px', marginBottom: '20px' }}>
                    Neighborhoods We Serve in {area.city}
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {area.landmarks.map(l => (
                      <span key={l} style={{ background: '#f7f8fc', border: '1px solid #e0e2ea', color: '#080f1f', padding: '8px 16px', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 600 }}>
                        {l}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '88px' }}>
              <div style={{ background: '#080f1f', padding: '36px', borderRadius: '6px', marginBottom: '24px' }}>
                <div style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Serving {area.city}
                </div>
                <a href="tel:+19493790082" style={{ display: 'block', fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: '1.7rem', fontWeight: 700, color: '#fff', textDecoration: 'none', marginBottom: '12px' }}>(949) 379-0082</a>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '24px' }}>24/7 emergency response. Free estimates. C-36 Licensed.</p>
                <a href="/#contact" style={{ display: 'block', background: '#C8202A', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Get a Free Quote</a>
              </div>
              <div style={{ background: '#f7f8fc', padding: '28px', borderRadius: '6px', border: '1px solid #e0e2ea' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#080f1f', marginBottom: '16px' }}>Other Cities We Serve</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {areas.filter(a => a.slug !== slug).slice(0, 8).map(a => (
                    <a key={a.slug} href={`/areas/${a.slug}`} style={{ color: '#1A52BE', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#C8202A', fontSize: '0.7rem' }}>›</span>
                      Plumber in {a.city}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.1, marginBottom: '40px' }}>
              Plumbing Questions from {area.city} Residents
            </h2>
            {area.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e0e2ea', padding: '24px 0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <PageCTA city={area.city} />
      </main>
      <Footer />
    </>
  );
}
