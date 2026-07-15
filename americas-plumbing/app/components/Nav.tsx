'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const serviceLinks = [
  { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  { label: 'Leak Detection', href: '/services/leak-detection' },
  { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { label: 'Hydro Jetting', href: '/services/hydro-jetting' },
  { label: 'Camera Inspection', href: '/services/camera-inspection' },
  { label: 'Water Heater', href: '/services/water-heater' },
  { label: 'Repiping', href: '/services/repiping' },
  { label: 'Water Line Repair', href: '/services/water-line-repair' },
  { label: 'Sewer Line', href: '/services/sewer-line' },
  { label: 'Gas Line', href: '/services/gas-line' },
  { label: 'Garbage Disposal', href: '/services/garbage-disposal' },
  { label: 'Fixture Installation', href: '/services/fixture-installation' },
  { label: 'View All Services →', href: '/services' },
];

const areaLinks = [
  { label: 'San Jacinto', href: '/areas/san-jacinto' },
  { label: 'Hemet', href: '/areas/hemet' },
  { label: 'Menifee', href: '/areas/menifee' },
  { label: 'Beaumont', href: '/areas/beaumont' },
  { label: 'Riverside', href: '/areas/riverside' },
  { label: 'Moreno Valley', href: '/areas/moreno-valley' },
  { label: 'Mission Viejo', href: '/areas/mission-viejo' },
  { label: 'Laguna Beach', href: '/areas/laguna-beach' },
  { label: 'Laguna Niguel', href: '/areas/laguna-niguel' },
  { label: 'Ladera Ranch', href: '/areas/ladera-ranch' },
  { label: 'View All Cities →', href: '/areas' },
];

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeNav = () => setNavOpen(false);

  const handleMouseEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff', borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    border: '1px solid #e8eaf0',
    padding: '8px 0', minWidth: '210px', zIndex: 300,
  };

  const dropItemStyle: React.CSSProperties = {
    display: 'block', padding: '10px 20px',
    color: '#374151', fontSize: '0.875rem', fontWeight: 500,
    textDecoration: 'none', transition: 'background 0.15s, color 0.15s',
    whiteSpace: 'nowrap',
  };

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 200, background: '#fff', boxShadow: '0 1px 0 #e8eaf0' }}>
      <div style={{
        maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
        height: '88px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="America's Plumbing" width={200} height={80}
            style={{ height: '80px', width: 'auto' }} priority />
        </a>

        {/* Desktop nav */}
        <div className="hide-mob" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>

          {/* Services dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}>
            <a href="/services" style={{
              color: '#5a5e72', fontSize: '0.82rem', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#080f1f')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5a5e72')}
            >
              Services <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>▾</span>
            </a>
            {openDropdown === 'services' && (
              <div style={dropdownStyle}>
                <a href="/services" style={{ ...dropItemStyle, borderBottom: '1px solid #f0f1f5', marginBottom: '4px', fontWeight: 700, color: '#080f1f' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f7f8fc'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                  All Services
                </a>
                {serviceLinks.map(s => (
                  <a key={s.href} href={s.href} style={dropItemStyle}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f7f8fc'; e.currentTarget.style.color = '#C8202A'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}>
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Areas dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('areas')}
            onMouseLeave={handleMouseLeave}>
            <a href="/areas" style={{
              color: '#5a5e72', fontSize: '0.82rem', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#080f1f')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5a5e72')}
            >
              Areas <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>▾</span>
            </a>
            {openDropdown === 'areas' && (
              <div style={dropdownStyle}>
                <a href="/areas" style={{ ...dropItemStyle, borderBottom: '1px solid #f0f1f5', marginBottom: '4px', fontWeight: 700, color: '#080f1f' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f7f8fc'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                  All Areas
                </a>
                {areaLinks.map(a => (
                  <a key={a.href} href={a.href} style={dropItemStyle}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f7f8fc'; e.currentTarget.style.color = '#C8202A'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}>
                    {a.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: '#5a5e72', fontSize: '0.82rem', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#080f1f')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5a5e72')}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/#contact" className="hide-mob" style={{
            background: '#080f1f', color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            padding: '9px 16px', borderRadius: '5px', textDecoration: 'none', letterSpacing: '0.03em',
            border: '1px solid rgba(255,255,255,0.15)', whiteSpace: 'nowrap'
          }}>
            Get a Free Quote
          </a>
          <a href="tel:+19493790082" className="pulse-anim" style={{
            background: '#C8202A', color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            padding: '9px 16px', borderRadius: '5px', textDecoration: 'none', letterSpacing: '0.03em',
            whiteSpace: 'nowrap'
          }}>
            (949) 379-0082
          </a>
          <a href="tel:+19516045073" style={{
            background: '#C8202A', color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            padding: '9px 16px', borderRadius: '5px', textDecoration: 'none', letterSpacing: '0.03em',
            whiteSpace: 'nowrap'
          }}>
            Riverside: (951) 604-5073
          </a>
          <button onClick={() => setNavOpen(v => !v)} className="show-mob" aria-label="Toggle menu"
            style={{
              display: 'none', background: 'none', border: '2px solid #e0e2ea', color: '#080f1f',
              width: '40px', height: '40px', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem',
              alignItems: 'center', justifyContent: 'center'
            }}>
            {navOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {navOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', padding: '8px 28px 28px', borderTop: '1px solid #e8eaf0' }}>
          <div style={{ paddingTop: '4px', borderBottom: '1px solid #f0f1f5', marginBottom: '4px' }}>
            <span style={{ display: 'block', color: '#9b9eb0', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '12px 0 6px' }}>Services</span>
            {serviceLinks.map(s => (
              <a key={s.href} href={s.href} onClick={closeNav} style={{ display: 'block', color: '#374151', padding: '9px 0', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem' }}>
                {s.label}
              </a>
            ))}
          </div>
          <div style={{ borderBottom: '1px solid #f0f1f5', marginBottom: '4px' }}>
            <span style={{ display: 'block', color: '#9b9eb0', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '12px 0 6px' }}>Areas</span>
            {areaLinks.slice(0, -1).map(a => (
              <a key={a.href} href={a.href} onClick={closeNav} style={{ display: 'block', color: '#374151', padding: '9px 0', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem' }}>
                {a.label}
              </a>
            ))}
            <a href="/areas" onClick={closeNav} style={{ display: 'block', color: '#C8202A', padding: '9px 0', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              View All Cities →
            </a>
          </div>
          {[{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Reviews', href: '/reviews' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }].map(({ label, href }) => (
            <a key={label} href={href} onClick={closeNav} style={{ color: '#080f1f', padding: '14px 0', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem', borderBottom: '1px solid #f0f1f5' }}>
              {label}
            </a>
          ))}
          <a href="/contact" onClick={closeNav} style={{ marginTop: '20px', background: '#C8202A', color: '#fff', padding: '14px', textAlign: 'center', fontWeight: 700, textDecoration: 'none', borderRadius: '5px', fontSize: '0.95rem' }}>
            Get a Free Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
