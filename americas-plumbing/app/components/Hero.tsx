import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: 'relative', background: '#080f1f', overflow: 'hidden', minHeight: '94vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background photo with dark overlay */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          aria-hidden="true"
        />
        {/* Dark overlay — heavy on left for text, lighter on right to show photo */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,31,0.96) 40%, rgba(8,15,31,0.45) 100%)' }} />
      </div>


      <div
        style={{
          position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto',
          padding: '100px 28px 90px', width: '100%'
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
          <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Licensed · Insured · Orange County
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
          fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 700,
          color: '#fff', lineHeight: 1.04, letterSpacing: '-0.01em',
          marginBottom: '24px', maxWidth: '700px'
        }}>
          Southern California&apos;s<br />
          <span style={{ color: '#C8202A' }}>Trusted</span><br />
          Plumbers
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.7, marginBottom: '44px', maxWidth: '500px'
        }}>
          Fast, honest plumbing built on American values. From emergency repairs to whole-home repiping — fixed right the first time.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '60px' }}>
          <a href="/#contact" style={{
            background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700,
            padding: '16px 40px', borderRadius: '4px', textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            Get Free Quote
          </a>
          <a href="tel:+19493790082" style={{
            background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.95rem', fontWeight: 600,
            padding: '16px 32px', borderRadius: '4px', textDecoration: 'none',
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
            { val: '5.0', label: 'Google Rating', red: false },
            { val: '10+', label: 'Years Serving SoCal', red: false },
            { val: '24/7', label: 'Emergency Service', red: true },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 32px' }} />}
              <div>
                <div style={{ fontFamily: 'var(--font-newsreader), Montserrat, sans-serif', fontSize: '2.4rem', fontWeight: 700, color: stat.red ? '#C8202A' : '#fff', lineHeight: 1 }}>{stat.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '5px' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* C-36 badge — bottom right corner */}
      <div style={{
        position: 'absolute', bottom: '32px', right: '40px', zIndex: 3,
        background: '#C8202A', color: '#fff', padding: '16px 22px',
        borderRadius: '6px', boxShadow: '0 12px 40px rgba(200,32,42,0.5)', textAlign: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-newsreader), Montserrat, sans-serif', fontSize: '1.9rem', fontWeight: 700, lineHeight: 1 }}>C-36</div>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px', opacity: 0.85 }}>Licensed</div>
      </div>

      {/* Bottom gradient rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #C8202A 0%, #1A52BE 50%, #C8202A 100%)'
      }} />

    </section>
  );
}
