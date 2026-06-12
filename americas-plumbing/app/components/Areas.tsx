import ScrollReveal from './ScrollReveal';

const cities = [
  'San Jacinto', 'Hemet', 'Menifee', 'Beaumont',
  'Riverside', 'Moreno Valley', 'Mission Viejo', 'Laguna Beach',
  'Laguna Niguel', 'Ladera Ranch',
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
            Serving San Jacinto, Riverside County &amp; South OC
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Based in San Jacinto, CA, we serve homeowners and businesses across the San Jacinto Valley, Inland Empire, and South Orange County — with fast arrival times throughout the region.
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
          <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e8eaf0', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', height: '100%', minHeight: '420px' }}>
            <iframe
              src="https://maps.google.com/maps?q=Riverside+County%2C+CA&t=&z=9&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="America's Plumbing service area — Riverside County, CA"
            />
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
