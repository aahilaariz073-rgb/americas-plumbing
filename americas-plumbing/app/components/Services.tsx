'use client';

import ScrollReveal from './ScrollReveal';

const services = [
  { num: '01', title: 'Emergency Repairs', body: 'Burst pipes, sewage backups, no hot water — fast dispatch 24/7 with straight pricing, no overtime surprises.', href: '/services/emergency-plumbing', accent: '#C8202A' },
  { num: '02', title: 'Leak Detection', body: 'Non-invasive slab leak detection with precision repair — protecting your foundation and wallet.', href: '/services/leak-detection', accent: '#1A52BE' },
  { num: '03', title: 'Whole-Home Repiping', body: 'Old galvanized or copper causing issues? We repipe with PEX — better pressure, lasting performance.', href: '/services/repiping', accent: '#C8202A' },
  { num: '04', title: 'Drain Cleaning', body: 'Hydro-jetting, snaking, and camera inspection to clear slow drains and prevent recurring backups.', href: '/services/drain-cleaning', accent: '#1A52BE' },
  { num: '05', title: 'Water Heater Services', body: 'Tank and tankless installation, repair, and replacement. Get reliable hot water back today.', href: '/services/water-heater', accent: '#C8202A' },
  { num: '06', title: 'Fixture Installation', body: 'Toilets, faucets, sinks, disposals, and more — installed properly with a zero-leak guarantee.', href: '/services/fixture-installation', accent: '#1A52BE' },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#f7f8fc', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>
            What We Do
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#080f1f', lineHeight: 1.1
          }}>
            Full-Service Plumbing
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', margin: '16px auto 0' }}>
            From emergencies to upgrades — we handle every job with the same care and fair pricing.
          </p>
        </ScrollReveal>

        <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {services.map((svc) => (
            <ScrollReveal key={svc.num}>
              <a
                href={svc.href}
                style={{
                  display: 'block', background: '#fff', borderRadius: '8px',
                  border: '1px solid #e8eaf0', borderTop: `3px solid ${svc.accent}`,
                  padding: '32px 28px', textDecoration: 'none',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  height: '100%',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.09)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: svc.accent, letterSpacing: '0.12em', marginBottom: '14px' }}>
                  {svc.num}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px', lineHeight: 1.3 }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#5a5e72', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  {svc.body}
                </p>
                <span style={{ color: svc.accent, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Learn More →
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/services" style={{
            display: 'inline-block', background: '#080f1f', color: '#fff',
            fontSize: '0.85rem', fontWeight: 700, padding: '14px 36px',
            borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            View All Services
          </a>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 861px) and (max-width: 1100px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
