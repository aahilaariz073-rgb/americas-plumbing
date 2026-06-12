import ScrollReveal from './ScrollReveal';

const cities = [
  'Irvine', 'Newport Beach', 'Laguna Hills', 'Mission Viejo',
  'Lake Forest', 'Aliso Viejo', 'San Clemente', 'Huntington Beach',
  'Anaheim', 'Santa Ana',
];

export default function Areas() {
  return (
    <section id="areas" style={{ background: '#fff', padding: '100px 28px' }}>
      <div
        className="two-col"
        style={{
          maxWidth: '1240px', margin: '0 auto', display: 'grid',
          gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'
        }}
      >
        <ScrollReveal>
          <div style={{
            color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
          }}>
            Where We Work
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), serif',
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 700,
            color: '#080f1f', lineHeight: 1.1, marginBottom: '20px'
          }}>
            Serving Orange County &amp; Beyond
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Based in Orange County, we serve homeowners and businesses across Southern California — fast arrival times throughout the region.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
            {cities.map(city => (
              <span key={city} style={{
                background: '#f7f8fc', border: '1px solid #e0e2ea', color: '#080f1f',
                padding: '8px 16px', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 600
              }}>
                {city}
              </span>
            ))}
            <span style={{
              background: '#C8202A', border: '1px solid #C8202A', color: '#fff',
              padding: '8px 16px', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 700
            }}>
              + More Areas
            </span>
          </div>

          <a href="/#contact" style={{
            display: 'inline-block', background: '#1A52BE', color: '#fff',
            fontSize: '0.82rem', fontWeight: 700, padding: '13px 28px',
            borderRadius: '4px', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            Check Your Area
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{
            background: '#f7f8fc', borderRadius: '6px', aspectRatio: '1',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '10px', border: '1px dashed #c8cad4'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9b9eb0" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span style={{ color: '#9b9eb0', fontSize: '0.8rem', fontWeight: 500, textAlign: 'center' }}>
              Embed Google Maps here
            </span>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
