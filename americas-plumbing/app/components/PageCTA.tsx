export default function PageCTA({ city = 'Orange County' }: { city?: string }) {
  return (
    <section style={{ background: '#1e2d4a', padding: '80px 28px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #C8202A, #1A52BE, #C8202A)'
      }} />
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
        }}>
          Ready to Get Started?
        </div>
        <h2 style={{
          fontFamily: 'var(--font-newsreader), serif',
          fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 700,
          color: '#fff', lineHeight: 1.1, marginBottom: '20px'
        }}>
          Get a Free Quote in {city}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '36px' }}>
          Call us now or fill out the form. Joe will personally call you back within the hour.
          For plumbing emergencies, we dispatch immediately — 24/7, 365 days a year.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+19493790082" style={{
            background: '#C8202A', color: '#fff', fontSize: '1rem', fontWeight: 700,
            padding: '15px 36px', borderRadius: '4px', textDecoration: 'none',
            letterSpacing: '0.04em', textTransform: 'uppercase'
          }}>
            (949) 379-0082
          </a>
          <a href="/#contact" style={{
            background: 'transparent', color: '#fff', fontSize: '1rem', fontWeight: 600,
            padding: '14px 28px', borderRadius: '4px', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.25)'
          }}>
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
