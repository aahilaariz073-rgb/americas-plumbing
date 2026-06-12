'use client';

import ScrollReveal from './ScrollReveal';

const links = [
  {
    label: 'Customer Reviews',
    desc: '5-star Google reviews from real Orange County customers.',
    href: '/reviews',
    accent: '#C8202A',
  },
  {
    label: 'Common Questions',
    desc: 'Pricing, licensing, response times, and warranties — answered.',
    href: '/faq',
    accent: '#1A52BE',
  },
  {
    label: 'Get a Free Quote',
    desc: 'Fill out the form and Joe calls you back within the hour.',
    href: '/contact',
    accent: '#C8202A',
  },
];

export default function HomepageCTAStrip() {
  return (
    <section style={{ background: '#f7f8fc', padding: '80px 28px', borderTop: '1px solid #e0e2ea' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>
            More from America&apos;s Plumbing
          </div>
          <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.1 }}>
            Everything You Need to Know
          </h2>
        </ScrollReveal>

        <div className="cta-strip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {links.map(({ label, desc, href, accent }) => (
            <ScrollReveal key={href}>
              <a href={href} style={{
                display: 'block', background: '#fff', border: '1px solid #e0e2ea',
                borderTop: `3px solid ${accent}`, borderRadius: '4px',
                padding: '36px 28px', textDecoration: 'none', transition: 'box-shadow 0.2s, transform 0.2s'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.09)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px' }}>{label}</h3>
                <p style={{ color: '#5a5e72', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '20px' }}>{desc}</p>
                <span style={{ color: accent, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  View Page →
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cta-strip-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
