import ScrollReveal from './ScrollReveal';

const services = [
  {
    num: '01',
    title: 'Emergency Repairs',
    body: 'Burst pipes, sewage backups, no hot water — fast dispatch 24/7 with straight pricing, no overtime surprises.',
  },
  {
    num: '02',
    title: 'Leak Detection & Repair',
    body: 'Non-invasive slab leak detection with precision repair — protecting your foundation and wallet.',
  },
  {
    num: '03',
    title: 'Whole-Home Repiping',
    body: 'Old galvanized or copper causing issues? We repipe with PEX — better pressure, lasting performance.',
  },
  {
    num: '04',
    title: 'Drain Cleaning',
    body: 'Hydro-jetting, snaking, and camera inspection to clear slow drains and prevent recurring backups.',
  },
  {
    num: '05',
    title: 'Water Heater Services',
    body: 'Tank and tankless installation, repair, and replacement. Get reliable hot water back today.',
  },
  {
    num: '06',
    title: 'Fixture Installation',
    body: 'Toilets, faucets, sinks, disposals, and more — installed properly with a zero-leak guarantee.',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#fff', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px', marginBottom: '72px',
          paddingBottom: '32px', borderBottom: '1px solid #e8eaf0'
        }}>
          <div>
            <div style={{
              color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
            }}>
              What We Do
            </div>
            <h2 style={{
              fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700,
              color: '#080f1f', lineHeight: 1.1, letterSpacing: '-0.02em'
            }}>
              Full-Service Plumbing,<br /><em>Done Right</em>
            </h2>
          </div>
          <a href="/#contact" style={{
            background: '#080f1f', color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            padding: '13px 28px', borderRadius: '4px', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap'
          }}>
            Book a Service
          </a>
        </ScrollReveal>

        <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {services.map((svc, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const isLastRow = row === 1;
            const isFirstCol = col === 0;
            const isLastCol = col === 2;

            return (
              <ScrollReveal
                key={svc.num}
                style={{
                  padding: isFirstCol ? '36px 36px 36px 0'
                    : isLastCol ? '36px 0 36px 36px'
                    : '36px',
                  borderRight: isLastCol ? undefined : '1px solid #e8eaf0',
                  borderBottom: isLastRow ? undefined : '1px solid #e8eaf0',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-newsreader), Montserrat, sans-serif',
                  fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700,
                  color: '#f0f1f5', lineHeight: 1, marginBottom: '8px', letterSpacing: '-0.02em'
                }}>
                  {svc.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px' }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#5a5e72', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {svc.body}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-grid > div { padding: 28px 0 !important; border-right: none !important; border-bottom: 1px solid #e8eaf0 !important; }
        }
      `}</style>
    </section>
  );
}
