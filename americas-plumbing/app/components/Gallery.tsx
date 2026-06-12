import ScrollReveal from './ScrollReveal';

const ImagePlaceholder = ({ stroke }: { stroke: string }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const cells = [
  { label: 'Before — Pipe Replacement', bg: '#eef0f6', textColor: '#9b9eb0', stroke: '#9b9eb0', tag: 'Before', tagBg: '#C8202A' },
  { label: 'After — Pipe Replacement',  bg: '#e8f2ea', textColor: '#5a9b6a', stroke: '#5a9b6a', tag: 'After',  tagBg: '#1A52BE' },
  { label: 'Before — Water Heater',     bg: '#eef0f6', textColor: '#9b9eb0', stroke: '#9b9eb0', tag: 'Before', tagBg: '#C8202A' },
  { label: 'After — Water Heater',      bg: '#e8f2ea', textColor: '#5a9b6a', stroke: '#5a9b6a', tag: 'After',  tagBg: '#1A52BE' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#fff', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
          }}>
            Our Work
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), Outfit, sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#080f1f', lineHeight: 1.1
          }}>
            Before &amp; After
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
          {cells.map((cell, i) => (
            <ScrollReveal key={i} style={{ position: 'relative' }}>
              <div style={{
                background: cell.bg, aspectRatio: '4/3',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '10px'
              }}>
                <ImagePlaceholder stroke={cell.stroke} />
                <span style={{ color: cell.textColor, fontSize: '0.78rem' }}>{cell.label}</span>
              </div>
              <div style={{
                position: 'absolute', top: '14px', left: '14px',
                background: cell.tagBg, color: '#fff', fontSize: '0.68rem',
                fontWeight: 800, padding: '5px 12px',
                letterSpacing: '0.12em', textTransform: 'uppercase'
              }}>
                {cell.tag}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
