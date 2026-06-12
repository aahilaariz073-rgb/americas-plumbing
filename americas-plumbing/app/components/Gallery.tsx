import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const pairs = [
  {
    before: { src: '/before-1.jpg', label: 'Pool Pump — Messy Hose Setup' },
    after:  { src: '/after-1.jpg',  label: 'Pool Pump — Clean PVC Install' },
  },
  {
    before: { src: '/before-2.jpg', label: 'Shower Rough-In — Concrete Stage' },
    after:  { src: '/after-2.jpg',  label: 'Shower — Finished Luxury Install' },
  },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#fff', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px',
          }}>
            Our Work
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#080f1f', lineHeight: 1.1,
          }}>
            Before &amp; After
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '1rem', lineHeight: 1.7, maxWidth: '500px', margin: '16px auto 0' }}>
            Real jobs, real results — see the difference America&apos;s Plumbing makes.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {pairs.map((pair, pi) => (
            <ScrollReveal key={pi}>
              <div className="ba-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {[
                  { ...pair.before, tag: 'Before', tagBg: '#C8202A' },
                  { ...pair.after,  tag: 'After',  tagBg: '#1A52BE' },
                ].map((img) => (
                  <div key={img.tag} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '6px', background: '#eef0f6' }}>
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', top: '14px', left: '14px',
                      background: img.tagBg, color: '#fff',
                      fontSize: '0.68rem', fontWeight: 800,
                      padding: '5px 14px', letterSpacing: '0.14em',
                      textTransform: 'uppercase', borderRadius: '3px',
                    }}>
                      {img.tag}
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '28px 16px 14px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
                    }}>
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{img.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .ba-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
