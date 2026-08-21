import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const pairs = [
  {
    before: { src: '/before-1.jpg', label: 'Pool Pump — Before' },
    after:  { src: '/after-1.jpg',  label: 'Pool Pump — After' },
  },
  {
    before: { src: '/before-2.jpg', label: 'Shower Rough-In — Before' },
    after:  { src: '/after-2.jpg',  label: 'Luxury Shower — After' },
  },
];

function BaCard({ src, label, tag, tagBg }: { src: string; label: string; tag: string; tagBg: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden', borderRadius: '8px', background: '#eef0f6' }}>
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{
        position: 'absolute', top: '14px', left: '14px',
        background: tagBg, color: '#fff',
        fontSize: '0.68rem', fontWeight: 800,
        padding: '5px 14px', letterSpacing: '0.14em',
        textTransform: 'uppercase', borderRadius: '3px',
      }}>
        {tag}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '32px 16px 14px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
      }}>
        <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{label}</span>
      </div>
    </div>
  );
}

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
            fontFamily: 'var(--font-newsreader), serif',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#102a6b', lineHeight: 1.1,
          }}>
            Before &amp; After
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '1rem', lineHeight: 1.7, maxWidth: '500px', margin: '16px auto 0' }}>
            Real jobs, real results — see the difference America&apos;s Plumbing makes.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }} className="ba-grid">
          {pairs.flatMap(pair => [
            <BaCard key={pair.before.src} src={pair.before.src} label={pair.before.label} tag="Before" tagBg="#C8202A" />,
            <BaCard key={pair.after.src}  src={pair.after.src}  label={pair.after.label}  tag="After"  tagBg="#1A52BE" />,
          ])}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .ba-grid { grid-template-columns: 1fr !important; }
          .ba-grid > div { height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
