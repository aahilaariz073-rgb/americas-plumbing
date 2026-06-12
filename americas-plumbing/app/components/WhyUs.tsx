import ScrollReveal from './ScrollReveal';

const pillars = [
  {
    num: '01',
    title: 'Same-Day Response',
    body: 'We answer calls 24/7 and dispatch the same day. Plumbing emergencies don\'t wait — and neither do we.',
    dark: false,
    accent: false,
  },
  {
    num: '02',
    title: 'Upfront Pricing',
    body: 'No hidden fees. No surprises. You receive a clear written estimate before any work begins — and we stick to it.',
    dark: false,
    accent: false,
  },
  {
    num: '03',
    title: 'Licensed & Insured',
    body: 'C-36 licensed, fully bonded and insured. You, your home, and your investment are protected on every job.',
    dark: false,
    accent: false,
  },
  {
    num: '04',
    title: 'American-Owned',
    body: 'Family-run, locally owned, and proud of it. We treat your home like our own — because we\'re your neighbors.',
    dark: false,
    accent: true,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#f7f8fc', padding: '100px 28px', position: 'relative', overflow: 'hidden' }}>
      {/* Left edge accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px',
        background: 'linear-gradient(to bottom, #C8202A, #1A52BE)'
      }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
            <span style={{
              color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase'
            }}>
              The America&apos;s Difference
            </span>
            <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#080f1f', lineHeight: 1.1
          }}>
            Why Homeowners Choose Us
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2px', background: '#e0e2ea'
        }}>
          {pillars.map((p) => (
            <ScrollReveal
              key={p.num}
              style={{ background: p.accent ? '#C8202A' : '#fff', padding: '44px 36px' }}
            >
              <div style={{
                fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
                fontSize: '3rem', fontWeight: 700,
                color: p.accent ? 'rgba(255,255,255,0.35)' : '#C8202A',
                lineHeight: 1, marginBottom: '16px'
              }}>
                {p.num}
              </div>
              <h3 style={{
                fontSize: '1.1rem', fontWeight: 700,
                color: p.accent ? '#fff' : '#080f1f', marginBottom: '10px'
              }}>
                {p.title}
              </h3>
              <p style={{
                color: p.accent ? 'rgba(255,255,255,0.75)' : '#5a5e72',
                fontSize: '0.875rem', lineHeight: 1.65
              }}>
                {p.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
