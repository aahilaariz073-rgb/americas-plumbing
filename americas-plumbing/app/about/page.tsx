import type { Metadata } from 'next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import Schema from '@/app/components/Schema';

export const metadata: Metadata = {
  title: "About America's Plumbing | 25+ Years Serving Southern California",
  description:
    "Family-owned, C-36 licensed plumbing company based in San Jacinto, CA. Over 25 years serving Riverside County and South Orange County with honest work and fair pricing.",
  keywords: "about americas plumbing, san jacinto plumber history, licensed plumber riverside county, family owned plumber southern california, c-36 licensed plumber san jacinto",
};

const stats = [
  { val: '25+', label: 'Years in Business' },
  { val: '5.0', label: 'Google Rating' },
  { val: 'C-36', label: 'State Licensed' },
  { val: '24/7', label: 'Emergency Service' },
];

const values = [
  {
    num: '01',
    title: 'Honesty First',
    body: 'We give you a straight answer and a written estimate before any work begins. No upsells, no hidden fees — just an honest assessment of what your home actually needs.',
  },
  {
    num: '02',
    title: 'Local Knowledge',
    body: "We've spent 25+ years working in Riverside County homes. We know the hard water, the aging galvanized pipes, the common slab leak zones — and we fix them right the first time.",
  },
  {
    num: '03',
    title: 'Craftsmanship',
    body: 'Every repair is done to last. We use quality materials, follow California code, and back all our workmanship with a written warranty.',
  },
  {
    num: '04',
    title: 'Respect for Your Home',
    body: "We show up on time, protect your floors and surfaces, and clean up completely when we're done. Your home is not a jobsite — it's where your family lives.",
  },
];

const timeline = [
  { year: '2000', event: 'Founded in San Jacinto, CA — started with one truck and a commitment to honest plumbing.' },
  { year: '2005', event: 'Earned C-36 Plumbing Contractor license, allowing us to take on the full range of residential and commercial plumbing projects.' },
  { year: '2010', event: 'Expanded service area to include all of Riverside County and began serving South Orange County communities.' },
  { year: '2015', event: 'Added hydro jetting and advanced camera inspection technology to deliver more thorough diagnostics without guesswork.' },
  { year: '2020', event: 'Grew to serve 18+ cities across Southern California while remaining independently owned and operated in San Jacinto.' },
  { year: 'Today', event: "America's Plumbing continues under the same ownership, the same values, and the same phone number — serving our neighbors the right way." },
];

export default function AboutPage() {
  return (
    <>
      <Schema page="home" />
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
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>About</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Family-Owned · San Jacinto, CA
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em',
              marginBottom: '24px', maxWidth: '820px'
            }}>
              25+ Years of Honest Plumbing<br />in Southern California
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '620px', marginBottom: '44px' }}>
              America&apos;s Plumbing is a family-owned, C-36 licensed plumbing company based in San Jacinto, CA. Since 2000, we&apos;ve been serving homeowners across Riverside County and South Orange County with straightforward work, fair pricing, and the kind of service you&apos;d want from a neighbor.
            </p>

            {/* Stats strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 28px' }} />}
                  <div>
                    <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '2.2rem', fontWeight: 700, color: i === 3 ? '#C8202A' : '#fff', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* Our Story */}
        <section style={{ background: '#fff', padding: '88px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-two-col">
            <div>
              <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Our Story
              </div>
              <h2 style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 700,
                color: '#080f1f', lineHeight: 1.1, marginBottom: '28px'
              }}>
                Built in San Jacinto.<br />Still Here After 25 Years.
              </h2>
              <p style={{ color: '#5a5e72', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
                America&apos;s Plumbing started the same way most good trades businesses do — one licensed plumber, one truck, and a reputation built job by job. We opened our doors in San Jacinto in 2000, serving neighbors who needed plumbing done right without the runaround.
              </p>
              <p style={{ color: '#5a5e72', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
                Twenty-five years later, we&apos;re still independently owned, still based right here in the San Jacinto Valley, and still answering the phone ourselves. We&apos;ve grown our service area to cover Riverside County and South Orange County — but the business hasn&apos;t changed: show up when you say you will, charge what you quoted, and do the work right.
              </p>
              <p style={{ color: '#5a5e72', fontSize: '1.05rem', lineHeight: 1.8 }}>
                We hold a C-36 Plumbing Contractor license (#1086994) issued by the California Contractors State License Board, and we carry full liability insurance and workers&apos; compensation coverage on every job.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '28px' }}>
                Timeline
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timeline.map((item, i) => (
                  <div key={item.year} style={{ display: 'flex', gap: '20px', paddingBottom: i < timeline.length - 1 ? '28px' : '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: item.year === 'Today' ? '#C8202A' : '#080f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fff' }} />
                      </div>
                      {i < timeline.length - 1 && <div style={{ width: '2px', flex: 1, background: '#e0e2ea', marginTop: '4px' }} />}
                    </div>
                    <div style={{ paddingTop: '8px', paddingBottom: i < timeline.length - 1 ? '4px' : '0' }}>
                      <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.1rem', fontWeight: 700, color: item.year === 'Today' ? '#C8202A' : '#080f1f', marginBottom: '4px' }}>{item.year}</div>
                      <p style={{ color: '#5a5e72', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: '#f7f8fc', padding: '88px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
                <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  What We Stand For
                </span>
                <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              </div>
              <h2 style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700,
                color: '#080f1f', lineHeight: 1.1
              }}>
                Our Values
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', background: '#e0e2ea' }}>
              {values.map((v, i) => (
                <div key={v.num} style={{ background: i === 3 ? '#C8202A' : '#fff', padding: '44px 36px' }}>
                  <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '3rem', fontWeight: 700, color: i === 3 ? 'rgba(255,255,255,0.3)' : '#C8202A', lineHeight: 1, marginBottom: '16px' }}>
                    {v.num}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: i === 3 ? '#fff' : '#080f1f', marginBottom: '10px' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: i === 3 ? 'rgba(255,255,255,0.75)' : '#5a5e72', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* License & trust strip */}
        <section style={{ background: '#fff', padding: '72px 28px', borderTop: '1px solid #e8eaf0' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 700,
                color: '#080f1f', lineHeight: 1.1, marginBottom: '12px'
              }}>
                Licensed, Insured &amp; Accountable
              </h2>
              <p style={{ color: '#5a5e72', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                Every job is backed by our C-36 license, full liability insurance, and workers&apos; comp. You can verify our license anytime on the CSLB website.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', background: '#e0e2ea', maxWidth: '880px', margin: '0 auto' }}>
              {[
                { label: 'C-36 Plumbing License', value: '#1086994', sub: 'California CSLB' },
                { label: 'Fully Insured', value: '$2M+', sub: 'General Liability Coverage' },
                { label: 'In Business Since', value: '2000', sub: '25+ Years Serving SoCal' },
                { label: 'Service Rating', value: '5.0 ★', sub: 'Google Reviews' },
              ].map(item => (
                <div key={item.label} style={{ background: '#fff', padding: '32px 28px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '2rem', fontWeight: 700, color: '#080f1f', lineHeight: 1, marginBottom: '6px' }}>{item.value}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#080f1f', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.75rem', color: '#5a5e72' }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .about-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}
