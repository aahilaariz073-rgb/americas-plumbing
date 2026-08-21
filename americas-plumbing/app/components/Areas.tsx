'use client';

import ScrollReveal from './ScrollReveal';
import { areas } from '@/app/data/areas';

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
            color: '#102a6b', lineHeight: 1.1, marginBottom: '20px'
          }}>
            Serving San Jacinto, Riverside County &amp; South OC
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Based in San Jacinto, CA, we serve homeowners and businesses across the San Jacinto Valley, Inland Empire, and South Orange County — with fast arrival times throughout the region.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
            {areas.map(area => (
              <a key={area.slug} href={`/areas/${area.slug}`} style={{
                background: '#f7f8fc', border: '1px solid #e0e2ea', color: '#102a6b',
                padding: '8px 16px', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 600,
                textDecoration: 'none', transition: 'background 0.15s, color 0.15s, border-color 0.15s'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C8202A'; e.currentTarget.style.borderColor = '#C8202A'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f7f8fc'; e.currentTarget.style.borderColor = '#e0e2ea'; e.currentTarget.style.color = '#102a6b'; }}
              >
                {area.city}
              </a>
            ))}
          </div>

          <a href="/areas" style={{
            display: 'inline-block', background: '#1A52BE', color: '#fff',
            fontSize: '0.82rem', fontWeight: 700, padding: '13px 28px',
            borderRadius: '4px', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            View All Service Areas
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e8eaf0', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', height: '100%', minHeight: '420px' }}>
            <iframe
              src="https://maps.google.com/maps?q=San+Jacinto%2C+CA&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="America's Plumbing — San Jacinto, CA"
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
