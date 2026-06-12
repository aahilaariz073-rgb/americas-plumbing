import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: 'relative', background: '#0a1428', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          aria-hidden="true"
        />
        {/* Gradient overlay — deep on the left for legibility, lighter on right */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(10,20,40,0.97) 38%, rgba(10,20,40,0.50) 100%)' }} />
      </div>

      {/* Decorative diagonal accents */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Blue panel — subtle */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '54%', height: '130%',
          background: '#1558d6',
          clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 0.06,
        }} />
        {/* Red slash accent */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '52%', height: '130%',
          background: '#C8202A',
          clipPath: 'polygon(20% 0%, 22% 0%, 4% 100%, 2% 100%)',
          opacity: 0.55,
        }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto',
        padding: '100px 28px 90px', width: '100%',
      }}>

        {/* Eyebrow tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '28px', height: '2px', background: '#1558d6' }} />
          <span style={{
            color: '#60a5fa', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>
            Licensed · Insured · Orange County
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
          fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 700,
          color: '#fff', lineHeight: 1.04, letterSpacing: '-0.01em',
          marginBottom: '24px', maxWidth: '700px',
        }}>
          Southern California&apos;s<br />
          <span style={{ color: '#60a5fa' }}>Trusted</span><br />
          Plumbers
        </h1>

        {/* Sub-heading */}
        <p style={{
          fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.7, marginBottom: '44px', maxWidth: '500px',
        }}>
          Fast, honest plumbing built on American values. From emergency repairs to whole-home repiping — fixed right the first time.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '60px' }}>
          <a href="/#contact" style={{
            background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700,
            padding: '16px 40px', borderRadius: '7px', textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            Get Free Quote
          </a>
          <a href="tel:+19493790082" style={{
            background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.95rem', fontWeight: 600,
            padding: '16px 32px', borderRadius: '7px', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)', letterSpacing: '0.04em',
            backdropFilter: 'blur(4px)',
          }}>
            (949) 379-0082
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'inline-flex', gap: '0', flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px',
        }}>
          {[
            { val: '5.0',  label: 'Google Rating',       blue: false },
            { val: '10+',  label: 'Years Serving SoCal',  blue: false },
            { val: '24/7', label: 'Emergency Service',     blue: true  },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 32px' }} />}
              <div>
                <div style={{
                  fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
                  fontSize: '2.4rem', fontWeight: 700,
                  color: stat.blue ? '#60a5fa' : '#fff',
                  lineHeight: 1,
                }}>
                  {stat.val}
                </div>
                <div style={{
                  color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '5px',
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* C-36 badge */}
      <div style={{
        position: 'absolute', bottom: '32px', right: '40px', zIndex: 3,
        background: '#1558d6', color: '#fff', padding: '16px 22px',
        borderRadius: '8px', boxShadow: '0 12px 40px rgba(21,88,214,0.45)', textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-newsreader), Montserrat, sans-serif', fontSize: '1.9rem', fontWeight: 700, lineHeight: 1 }}>C-36</div>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px', opacity: 0.85 }}>Licensed</div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #1558d6 0%, #60a5fa 50%, #C8202A 100%)',
      }} />
    </section>
  );
}
