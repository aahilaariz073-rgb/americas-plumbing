import ScrollReveal from './ScrollReveal';

const pillars = [
  {
    num: '01',
    title: 'Same-Day Response',
    body: 'We answer calls 24/7 and dispatch the same day. Plumbing emergencies don\'t wait — and neither do we.',
    dark: false,
  },
  {
    num: '02',
    title: 'Upfront Pricing',
    body: 'No hidden fees. No surprises. You receive a clear written estimate before any work begins — and we stick to it.',
    dark: false,
  },
  {
    num: '03',
    title: 'Licensed & Insured',
    body: 'C-36 licensed, fully bonded and insured. You, your home, and your investment are protected on every job.',
    dark: false,
  },
  {
    num: '04',
    title: 'American-Owned',
    body: 'Family-run, locally owned, and proud of it. We treat your home like our own — because we\'re your neighbors.',
    dark: true,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#f0f6ff', padding: '100px 28px', position: 'relative', overflow: 'hidden' }}>
      {/* Left edge accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px',
        background: 'linear-gradient(to bottom, #1558d6, #C8202A)',
      }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#1558d6' }} />
            <span style={{
              color: '#1558d6', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>
              The America&apos;s Difference
            </span>
            <div style={{ width: '28px', height: '2px', background: '#1558d6' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#111827', lineHeight: 1.1,
          }}>
            Why Homeowners Choose Us
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2px', background: '#e5e7eb',
        }}>
          {pillars.map((p) => (
            <ScrollReveal
              key={p.num}
              style={{ background: p.dark ? '#1558d6' : '#fff', padding: '44px 36px' }}
            >
              <div style={{
                fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
                fontSize: '3rem', fontWeight: 700,
                color: p.dark ? 'rgba(255,255,255,0.3)' : '#dbeafe',
                lineHeight: 1, marginBottom: '16px',
              }}>
                {p.num}
              </div>
              <h3 style={{
                fontSize: '1.1rem', fontWeight: 700,
                color: p.dark ? '#fff' : '#111827', marginBottom: '10px',
              }}>
                {p.title}
              </h3>
              <p style={{
                color: p.dark ? 'rgba(255,255,255,0.72)' : '#6b7280',
                fontSize: '0.875rem', lineHeight: 1.65,
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
