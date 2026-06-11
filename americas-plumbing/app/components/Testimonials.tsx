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
    <section id="testimonials" style={{ background: '#080f1f', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px', marginBottom: '64px'
        }}>
          <div>
            <div style={{
              color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
            }}>
              Real Reviews
            </div>
            <h2 style={{
              fontFamily: 'var(--font-newsreader), Georgia, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.1
            }}>
              What Customers Say
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <span style={{ color: '#F5C518', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginLeft: '8px' }}>5.0 on Google</span>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px', background: 'rgba(255,255,255,0.08)'
        }}>
          {reviews.map((r) => (
            <ScrollReveal key={r.name} style={{ background: r.bg, padding: '44px 36px' }}>
              <div style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: '5rem', color: r.accentColor,
                lineHeight: 0.7, marginBottom: '24px', fontWeight: 400
              }}>
                &ldquo;
              </div>
              <p style={{
                color: 'rgba(255,255,255,0.7)', fontSize: '0.975rem',
                lineHeight: 1.75, marginBottom: '28px'
              }}>
                {r.quote}
              </p>
              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{r.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginTop: '3px' }}>{r.location}</div>
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
