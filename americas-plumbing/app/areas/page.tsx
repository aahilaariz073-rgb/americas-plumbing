import type { Metadata } from 'next';
import { areas } from '@/app/data/areas';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import Schema from '@/app/components/Schema';

export const metadata: Metadata = {
  title: "Plumber Service Areas | San Jacinto, Hemet, Riverside & SoCal | America's Plumbing",
  description: "America's Plumbing serves San Jacinto, Hemet, Menifee, Riverside, Moreno Valley & South Orange County. C-36 Licensed. Same-day & 24/7 emergency plumbing. Call (949) 379-0082.",
  keywords: "plumber san jacinto ca, plumbing service area riverside county, hemet menifee beaumont plumber, south orange county plumbing, emergency plumber inland empire, licensed plumber southern california",
};

const riverCounty = areas.filter(a => a.county === 'Riverside County');
const orangeCounty = areas.filter(a => a.county === 'Orange County');

const accentAt = (i: number) => i % 3 === 0 ? '#C8202A' : i % 3 === 1 ? '#1A52BE' : '#080f1f';

export default function AreasPage() {
  return (
    <>
      <Schema />
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#080f1f', padding: '96px 28px 0', position: 'relative', overflow: 'hidden' }}>
          {/* Geometric accents */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,82,190,0.15) 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '-6%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,32,42,0.12) 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', top: '20%', left: '50%', width: '1px', height: '60%', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)' }} />
          </div>

          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.05em' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', letterSpacing: '0.05em' }}>Service Areas</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'end', paddingBottom: '72px' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                  <div style={{ width: '32px', height: '2px', background: '#C8202A' }} />
                  <span style={{ color: '#C8202A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Service Coverage</span>
                </div>
                <h1 style={{
                  fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
                  fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 700,
                  color: '#fff', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '24px'
                }}>
                  Licensed Plumber<br />
                  <span style={{ color: '#C8202A' }}>San Jacinto</span> &amp; All<br />
                  Southern California
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '540px' }}>
                  America&apos;s Plumbing operates out of San Jacinto, CA — covering the full San Jacinto Valley, Inland Empire, and South Orange County with same-day service and 24/7 emergency response.
                </p>
              </div>

              {/* Stats column */}
              <div className="hide-stats" style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '200px' }}>
                {[
                  { num: '18', label: 'Cities Served' },
                  { num: '24/7', label: 'Emergency Response' },
                  { num: 'C-36', label: 'Licensed & Insured' },
                  { num: '1 hr', label: 'Avg Response Time' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: '18px 24px', borderLeft: '2px solid rgba(255,255,255,0.06)',
                    display: 'flex', flexDirection: 'column', gap: '2px'
                  }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gradient bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #C8202A 0%, #1A52BE 50%, #C8202A 100%)' }} />
        </section>

        {/* ── Keyword-rich intro strip ── */}
        <section style={{ background: '#fff', borderBottom: '1px solid #e8eaf0', padding: '48px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'center' }} className="intro-grid">
              <div>
                <p style={{ color: '#374151', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' }}>
                  Based in <strong>San Jacinto, CA</strong>, America&apos;s Plumbing is a <strong>C-36 licensed and insured plumbing contractor</strong> serving homeowners and businesses across <strong>Riverside County</strong> and <strong>South Orange County</strong>. From <strong>emergency plumbing in Hemet</strong> to <strong>water heater replacement in Laguna Niguel</strong>, we dispatch fast and arrive ready.
                </p>
                <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.8 }}>
                  Our service territory spans over 18 cities — including <strong>Menifee, Beaumont, Moreno Valley, Riverside, Mission Viejo, Laguna Beach, Ladera Ranch</strong>, and more. Every job comes with upfront pricing, no overtime fees, and a plumber who stands behind their work.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Same-day appointments available',
                  'True 24/7 emergency service',
                  'Free on-site estimates',
                  'No overtime or weekend surcharges',
                  'Riverside County & South OC specialist',
                ].map(pt => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8202A', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: '#374151', fontWeight: 500 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Riverside County ── */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px 64px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

            {/* Region header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
              <div style={{ flex: 1, height: '1px', background: '#e0e2ea' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                <div style={{ width: '10px', height: '10px', background: '#C8202A', borderRadius: '2px', transform: 'rotate(45deg)' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#080f1f' }}>Riverside County</span>
              </div>
              <div style={{ flex: 1, height: '1px', background: '#e0e2ea' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {riverCounty.map((area, i) => (
                <a key={area.slug} href={`/areas/${area.slug}`} className="area-card" style={{
                  background: '#fff', borderRadius: '10px',
                  border: '1px solid #e8eaf0',
                  padding: '32px 28px 28px', textDecoration: 'none', display: 'block',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Accent bar */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: accentAt(i) }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <h2 style={{
                      fontSize: '1.15rem', fontWeight: 700, color: '#080f1f',
                      fontFamily: 'var(--font-newsreader), Outfit, sans-serif', lineHeight: 1.2
                    }}>
                      Plumber in<br />{area.city}
                    </h2>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: '#f7f8fc', border: '1px solid #e8eaf0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, color: accentAt(i), fontSize: '1rem', fontWeight: 700
                    }}>→</div>
                  </div>

                  <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {area.intro.slice(0, 105)}…
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {area.zipCodes.slice(0, 4).map(z => (
                      <span key={z} style={{
                        background: '#f0f1f5', color: '#374151',
                        padding: '4px 10px', borderRadius: '4px',
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em'
                      }}>{z}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider CTA ── */}
        <section style={{ background: '#080f1f', padding: '56px 28px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,32,42,0.08) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Available Now</p>
              <h2 style={{ fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                Don&apos;t see your city? We likely cover it.
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="tel:+19493790082" style={{
                background: '#C8202A', color: '#fff', padding: '14px 28px',
                borderRadius: '6px', fontWeight: 700, fontSize: '0.9rem',
                textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap'
              }}>Call (949) 379-0082</a>
              <a href="/#contact" style={{
                background: 'transparent', color: '#fff', padding: '14px 28px',
                borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem',
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap'
              }}>Free Quote →</a>
            </div>
          </div>
        </section>

        {/* ── Orange County ── */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px 64px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
              <div style={{ flex: 1, height: '1px', background: '#e0e2ea' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                <div style={{ width: '10px', height: '10px', background: '#1A52BE', borderRadius: '2px', transform: 'rotate(45deg)' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#080f1f' }}>South Orange County</span>
              </div>
              <div style={{ flex: 1, height: '1px', background: '#e0e2ea' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {orangeCounty.map((area, i) => (
                <a key={area.slug} href={`/areas/${area.slug}`} className="area-card" style={{
                  background: '#fff', borderRadius: '10px',
                  border: '1px solid #e8eaf0',
                  padding: '32px 28px 28px', textDecoration: 'none', display: 'block',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#1A52BE' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <h2 style={{
                      fontSize: '1.15rem', fontWeight: 700, color: '#080f1f',
                      fontFamily: 'var(--font-newsreader), Outfit, sans-serif', lineHeight: 1.2
                    }}>
                      Plumber in<br />{area.city}
                    </h2>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: '#f7f8fc', border: '1px solid #e8eaf0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, color: '#1A52BE', fontSize: '1rem', fontWeight: 700
                    }}>→</div>
                  </div>

                  <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {area.intro.slice(0, 105)}…
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {area.zipCodes.slice(0, 4).map(z => (
                      <span key={z} style={{
                        background: '#eef2ff', color: '#1A52BE',
                        padding: '4px 10px', borderRadius: '4px',
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em'
                      }}>{z}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO text block ── */}
        <section style={{ background: '#fff', padding: '72px 28px', borderTop: '1px solid #e8eaf0' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>About Our Coverage</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.15, marginBottom: '24px' }}>
              Your Local Plumber Across<br />San Jacinto Valley &amp; Beyond
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ color: '#374151', fontSize: '0.975rem', lineHeight: 1.8 }}>
                America&apos;s Plumbing was founded in and operates from <strong>San Jacinto, CA</strong> — putting us at the heart of the San Jacinto Valley and within fast reach of Hemet, Menifee, Beaumont, Romoland, Riverside, and Moreno Valley. For homeowners in the <strong>Inland Empire</strong> and <strong>Riverside County</strong>, we offer the fastest response times of any licensed plumber in the region.
              </p>
              <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.8 }}>
                We also extend full-service plumbing coverage into <strong>South Orange County</strong> — serving cities including <strong>Mission Viejo, Laguna Beach, Laguna Niguel, Laguna Hills, Lake Forest, Aliso Viejo, Ladera Ranch</strong>, and surrounding communities. Whether you need a <strong>24/7 emergency plumber</strong>, a water heater replacement, whole-home repiping, or drain cleaning, we dispatch the same day.
              </p>
              <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.8 }}>
                All work is performed by <strong>C-36 licensed and fully insured plumbers</strong>. We never use subcontractors — the plumber who answers your call is the one who shows up. Free estimates, honest pricing, no weekend surcharges. Call <a href="tel:+19493790082" style={{ color: '#C8202A', fontWeight: 700, textDecoration: 'none' }}>(949) 379-0082</a> — we answer 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />

      <style>{`
        .area-card { transition: box-shadow 0.22s, transform 0.22s; }
        .area-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.10); transform: translateY(-3px); }
        .area-card:hover h2 { color: #C8202A; }
        @media (max-width: 860px) {
          .hide-stats { display: none !important; }
          .intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
