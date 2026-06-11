import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: 'relative', background: '#080f1f', overflow: 'hidden', minHeight: '94vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Diagonal decorative bands */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '55%', height: '130%',
          background: '#1A52BE',
          clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 0.07
        }} />
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '52%', height: '130%',
          background: '#C8202A',
          clipPath: 'polygon(20% 0%, 22% 0%, 4% 100%, 2% 100%)',
          opacity: 0.5
        }} />
        <div style={{
          position: 'absolute', top: '-10%', right: '30%', width: '2px', height: '130%',
          background: 'rgba(255,255,255,0.04)', transform: 'rotate(-8deg)'
        }} />
      </div>

      <div
        className="hero-grid"
        style={{
          position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto',
          padding: '80px 28px', display: 'grid',
          gridTemplateColumns: '1fr 420px', gap: '72px', alignItems: 'center', width: '100%'
        }}
      >
        {/* Text column */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
            <span style={{
              color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase'
            }}>
              Licensed · Insured · Orange County
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-newsreader), Georgia, serif',
            fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 700,
            color: '#fff', lineHeight: 1.04, letterSpacing: '-0.025em', marginBottom: '24px'
          }}>
            Southern California&apos;s<br />
            <span style={{ color: '#C8202A' }}>Trusted</span><br />
            Plumbers
          </h1>

          <p style={{
            fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7, marginBottom: '40px', maxWidth: '460px'
          }}>
            Fast, honest plumbing built on American values. From emergency repairs to whole-home repiping — fixed right the first time.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '52px' }}>
            <a
              href="#contact"
              style={{
                background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700,
                padding: '15px 36px', borderRadius: '4px', textDecoration: 'none',
                letterSpacing: '0.04em', textTransform: 'uppercase'
              }}
            >
              Get Free Quote
            </a>
            <a
              href="tel:+19493790082"
              style={{
                background: 'transparent', color: '#fff', fontSize: '0.95rem', fontWeight: 600,
                padding: '14px 28px', borderRadius: '4px', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)', letterSpacing: '0.04em'
              }}
            >
              (949) 379-0082
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: '36px', flexWrap: 'wrap',
            paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '2.2rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>5.0</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Google Rating</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '2.2rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>10+</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Years Serving SoCal</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '2.2rem', fontWeight: 700, color: '#C8202A', lineHeight: 1 }}>24/7</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Emergency Service</div>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'linear-gradient(160deg,#132040,#0a1628)', borderRadius: '8px',
            aspectRatio: '3/4', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '10px',
            border: '1px solid rgba(255,255,255,0.07)'
          }}>
            <div style={{
              width: '56px', height: '56px', border: '2px solid rgba(255,255,255,0.15)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 500, textAlign: 'center', lineHeight: 1.5 }}>
              Replace with<br />job-site photo
            </span>
          </div>

          {/* C-36 badge */}
          <div style={{
            position: 'absolute', bottom: '-16px', right: '-16px',
            background: '#C8202A', color: '#fff', padding: '18px 22px',
            borderRadius: '6px', boxShadow: '0 12px 40px rgba(200,32,42,0.45)', textAlign: 'center'
          }}>
            <div style={{ fontFamily: 'var(--font-newsreader), Georgia, serif', fontSize: '1.9rem', fontWeight: 700, lineHeight: 1 }}>C-36</div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px', opacity: 0.85 }}>Licensed</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #C8202A 0%, #1A52BE 50%, #C8202A 100%)'
      }} />

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
