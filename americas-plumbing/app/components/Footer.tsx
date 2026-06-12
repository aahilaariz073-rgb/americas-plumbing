'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#1a2538', padding: '60px 28px 28px', borderTop: '3px solid #C8202A' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'inline-block', background: '#fff', borderRadius: '8px', padding: '8px 12px', marginBottom: '20px' }}>
              <Image
                src="/logo.png"
                alt="America's Plumbing"
                width={130}
                height={52}
                style={{ height: '52px', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Southern California&apos;s trusted plumber. Licensed, insured, and proud to serve our community with honest work and fair pricing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Emergency Repair', slug: 'emergency-plumbing' },
                { label: 'Leak Detection', slug: 'leak-detection' },
                { label: 'Repiping', slug: 'repiping' },
                { label: 'Drain Cleaning', slug: 'drain-cleaning' },
                { label: 'Water Heaters', slug: 'water-heater' },
              ].map(({ label, slug }) => (
                <a
                  key={slug} href={`/services/${slug}`}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Areas
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'San Jacinto', slug: 'san-jacinto' },
                { label: 'Hemet', slug: 'hemet' },
                { label: 'Mission Viejo', slug: 'mission-viejo' },
                { label: 'Laguna Hills', slug: 'laguna-hills' },
                { label: 'All Areas', slug: '' },
              ].map(({ label, slug }) => (
                <a
                  key={label} href={slug ? `/areas/${slug}` : '/areas'}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+19493790082" style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }}>
                (949) 379-0082
              </a>
              <a
                href="mailto:californiajoe500@gmail.com"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', textDecoration: 'none', wordBreak: 'break-all' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                californiajoe500@gmail.com
              </a>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>San Jacinto, CA</span>
              <a
                href="/contact"
                style={{
                  display: 'inline-block', marginTop: '6px', background: '#C8202A', color: '#fff',
                  fontSize: '0.78rem', fontWeight: 700, padding: '10px 20px', borderRadius: '4px',
                  textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase'
                }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px',
          display: 'flex', flexWrap: 'wrap', gap: '16px',
          alignItems: 'center', justifyContent: 'space-between'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} America&apos;s Plumbing · Owner: Joe · C-36 Licensed
          </p>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>C-36 License #1086994</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
