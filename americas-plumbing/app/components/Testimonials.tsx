import ScrollReveal from './ScrollReveal';

const reviews = [
  {
    quote: 'Joe came out the same day I called about a slab leak. Diagnosed it fast, gave me a straight price, and fixed it without tearing up half my floor. Incredibly professional.',
    name: 'Maria T.',
    location: 'Irvine, CA',
    accentColor: '#C8202A',
    bg: '#080f1f',
  },
  {
    quote: 'Burst pipe at midnight — called America\'s Plumbing and they were at my door within the hour. Honest pricing and no drama. This is our plumber for life.',
    name: 'Robert K.',
    location: 'Newport Beach, CA',
    accentColor: '#1A52BE',
    bg: '#0d1626',
  },
  {
    quote: 'Three quotes for my repiping job. America\'s Plumbing was the most transparent and saved me $800. Beautiful work, done in a single day.',
    name: 'David L.',
    location: 'Mission Viejo, CA',
    accentColor: '#C8202A',
    bg: '#080f1f',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#f7f8fc', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px', marginBottom: '48px'
        }}>
          <div>
            <div style={{
              color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
            }}>
              Real Reviews
            </div>
            <h2 style={{
              fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
              color: '#080f1f', lineHeight: 1.1
            }}>
              What Customers Say
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <span style={{ color: '#F5C518', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
            <span style={{ color: '#9b9eb0', fontSize: '0.8rem', marginLeft: '8px' }}>5.0 on Google</span>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {reviews.map((r) => (
            <ScrollReveal key={r.name} style={{ background: '#fff', border: '1px solid #e8eaf0', borderTop: `3px solid ${r.accentColor}`, borderRadius: '4px', padding: '36px 32px' }}>
              <div style={{
                fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
                fontSize: '4rem', color: r.accentColor,
                lineHeight: 0.7, marginBottom: '20px', fontWeight: 400, opacity: 0.4
              }}>
                &ldquo;
              </div>
              <p style={{
                color: '#5a5e72', fontSize: '0.975rem',
                lineHeight: 1.75, marginBottom: '28px'
              }}>
                {r.quote}
              </p>
              <div style={{
                borderTop: '1px solid #e8eaf0', paddingTop: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ color: '#080f1f', fontWeight: 700, fontSize: '0.9rem' }}>{r.name}</div>
                  <div style={{ color: '#9b9eb0', fontSize: '0.78rem', marginTop: '3px' }}>{r.location}</div>
                </div>
                <span style={{ color: '#F5C518', fontSize: '0.85rem' }}>★★★★★</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
