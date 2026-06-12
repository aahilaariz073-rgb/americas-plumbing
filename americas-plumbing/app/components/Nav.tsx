'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Areas',    href: '/areas'    },
  { label: 'Reviews',  href: '/reviews'  },
  { label: 'FAQ',      href: '/faq'      },
  { label: 'Contact',  href: '/contact'  },
];

export default function Nav() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 200 }}>

      {/* ── Top utility bar ───────────────────────────────────────── */}
      <div style={{ background: '#1558d6', padding: '7px 0' }}>
        <div style={{
          maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '6px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.775rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ color: '#fde68a', fontWeight: 800 }}>24/7</span> Emergency Service Available
            </span>
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.775rem' }}>C-36 Licensed &amp; Insured · License #1086994</span>
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.775rem' }}>Orange County, CA</span>
          </div>
          <a
            href="tel:+19493790082"
            style={{
              color: '#fff', fontSize: '0.8rem', fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.02em',
            }}
          >
            ☎&nbsp;(949) 379-0082
          </a>
        </div>
      </div>

      {/* ── Main navigation bar ───────────────────────────────────── */}
      <nav
        aria-label="Main navigation"
        style={{
          background: '#fff',
          boxShadow: scrolled
            ? '0 4px 28px rgba(0,0,0,0.10)'
            : '0 1px 0 #e5e7eb',
          transition: 'box-shadow 0.25s ease',
        }}
      >
        <div style={{
          maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '72px',
        }}>

          {/* Logo */}
          <a href="/" aria-label="America's Plumbing — Home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="America's Plumbing logo"
              width={130}
              height={52}
              style={{ height: '46px', width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hide-mob" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: '#374151', fontSize: '0.875rem', fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '0.015em',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1558d6')}
                onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right-hand CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="tel:+19493790082"
              className="hide-mob"
              style={{
                color: '#1558d6', fontSize: '0.875rem', fontWeight: 700,
                textDecoration: 'none', padding: '9px 20px',
                border: '2px solid #1558d6', borderRadius: '7px',
                whiteSpace: 'nowrap',
                transition: 'background 0.18s, color 0.18s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1558d6';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1558d6';
              }}
            >
              (949) 379-0082
            </a>

            <a
              href="/#contact"
              className="hide-mob pulse-anim"
              style={{
                background: '#C8202A', color: '#fff', fontSize: '0.875rem', fontWeight: 700,
                padding: '10px 24px', borderRadius: '7px', textDecoration: 'none',
                letterSpacing: '0.04em', whiteSpace: 'nowrap',
              }}
            >
              Free Quote
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(v => !v)}
              className="show-mob"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              style={{
                display: 'none', background: 'none',
                border: '2px solid #e5e7eb', color: '#374151',
                width: '42px', height: '42px', borderRadius: '7px',
                cursor: 'pointer', fontSize: '1.15rem',
                alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.18s',
              }}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ───────────────────────────────────────── */}
        {open && (
          <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '12px 28px 24px' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', color: '#374151', padding: '13px 0',
                  fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
                  borderBottom: '1px solid #f3f4f6',
                }}
              >
                {label}
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px' }}>
              <a
                href="tel:+19493790082"
                style={{
                  display: 'block', color: '#1558d6', padding: '12px',
                  textAlign: 'center', fontWeight: 700, textDecoration: 'none',
                  border: '2px solid #1558d6', borderRadius: '7px', fontSize: '0.95rem',
                }}
              >
                ☎&nbsp;(949) 379-0082
              </a>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', background: '#C8202A', color: '#fff',
                  padding: '13px', textAlign: 'center', fontWeight: 700,
                  textDecoration: 'none', borderRadius: '7px', fontSize: '0.95rem',
                }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 860px) {
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
