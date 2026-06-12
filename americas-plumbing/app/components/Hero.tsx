import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: 'relative', background: '#080f1f', overflow: 'hidden', minHeight: '94vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/plumb.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          aria-hidden="true"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,31,0.90) 40%, rgba(8,15,31,0.30) 100%)' }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto',
        padding: '100px 28px 90px', width: '100%'
      }}>

        {/* Pill badges — reference style */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
          {[
            { icon: null,  text: 'C-36 Licensed · Fully Insured' },
            { icon: '📍', text: 'San Jacinto, CA' },
          ].map(badge => (
            <div key={badge.text} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(6px)',
              borderRadius: '999px', padding: '7px 16px',
              color: 'rgba(255,255,255,0.82)', fontSize: '0.72rem',
              fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              {badge.icon && <span style={{ fontSize: '0.85rem' }}>{badge.icon}</span>}
              {badge.text}
            </div>
          ))}
        </div>

        {/* Headline — Cormorant Garamond large */}
        <h1 style={{
          fontFamily: 'var(--font-newsreader), serif',
          fontSize: 'clamp(3.4rem, 7vw, 6.2rem)', fontWeight: 700,
          color: '#fff', lineHeight: 1.0, letterSpacing: '-0.01em',
          marginBottom: '28px', maxWidth: '720px'
        }}>
          Plumbing done<br />
          <em style={{
            fontStyle: 'italic', fontWeight: 600,
            color: '#c9a24a',
          }}>right the first time.</em>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '1.1rem', color: 'rgba(255,255,255,0.58)',
          lineHeight: 1.75, marginBottom: '44px', maxWidth: '480px',
          fontFamily: 'var(--font-hanken), sans-serif',
        }}>
          San Jacinto&apos;s trusted C-36 licensed plumber — same-day emergency service, honest pricing, and work that lasts. Serving Riverside County &amp; South OC.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '64px' }}>
          <a href="/#contact" style={{
            background: '#C8202A', color: '#fff', fontSize: '0.88rem', fontWeight: 700,
            padding: '15px 38px', borderRadius: '4px', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Get Free Quote
          </a>
          <a href="tel:+19493790082" style={{
            background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.88rem', fontWeight: 600,
            padding: '15px 30px', borderRadius: '4px', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)', letterSpacing: '0.04em',
            backdropFilter: 'blur(4px)'
          }}>
            (949) 379-0082
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'inline-flex', gap: '0', flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px'
        }}>
          {[
            { val: '5.0★', label: 'Google Rating', gold: true },
            { val: '10+', label: 'Years Serving SoCal', gold: false },
            { val: '24/7', label: 'Emergency Service', gold: false },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 32px' }} />}
              <div>
                <div style={{
                  fontFamily: 'var(--font-newsreader), serif',
                  fontSize: '2.2rem', fontWeight: 700, lineHeight: 1,
                  color: stat.gold ? '#c9a24a' : '#fff',
                }}>{stat.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '5px' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* C-36 badge */}
      <div style={{
        position: 'absolute', bottom: '32px', right: '40px', zIndex: 3,
        background: '#C8202A', color: '#fff', padding: '16px 22px',
        borderRadius: '6px', boxShadow: '0 12px 40px rgba(200,32,42,0.5)', textAlign: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.9rem', fontWeight: 700, lineHeight: 1 }}>C-36</div>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px', opacity: 0.85 }}>Licensed</div>
      </div>

      {/* Bottom rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #C8202A 0%, #1A52BE 50%, #C8202A 100%)'
      }} />
    </section>
  );
}
