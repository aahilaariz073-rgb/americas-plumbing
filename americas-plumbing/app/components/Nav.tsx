'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 200, background: '#fff', boxShadow: '0 1px 0 #e8eaf0' }}>
      <div style={{
        maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '68px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="America's Plumbing"
            width={120}
            height={48}
            style={{ height: '48px', width: 'auto', filter: 'brightness(0)' }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hide-mob" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {[
            { label: 'Services', href: '/services' },
            { label: 'Areas', href: '/areas' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
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
          <a
            href="tel:+19493790082"
            className="pulse-anim"
            style={{
              background: '#C8202A', color: '#fff', fontSize: '0.875rem', fontWeight: 700,
              padding: '10px 22px', borderRadius: '5px', textDecoration: 'none',
              letterSpacing: '0.04em'
            }}
          >
            (949) 379-0082
          </a>
          <button
            onClick={() => setNavOpen(v => !v)}
            className="show-mob"
            aria-label="Toggle menu"
            style={{
              display: 'none', background: 'none',
              border: '2px solid #e0e2ea', color: '#080f1f',
              width: '40px', height: '40px', borderRadius: '5px',
              cursor: 'pointer', fontSize: '1.2rem',
              alignItems: 'center', justifyContent: 'center'
            }}
          >
            {navOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {navOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column', background: '#fff',
          padding: '16px 28px 28px', borderTop: '1px solid #e8eaf0'
        }}>
          {[
            { label: 'Services', href: '/services' },
            { label: 'Areas', href: '/areas' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeNav}
              style={{
                color: '#080f1f', padding: '14px 0',
                fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
                borderBottom: '1px solid #f0f1f5'
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={closeNav}
            style={{
              marginTop: '20px', background: '#C8202A', color: '#fff',
              padding: '14px', textAlign: 'center', fontWeight: 700,
              textDecoration: 'none', borderRadius: '5px', fontSize: '0.95rem'
            }}
          >
            Get a Free Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
