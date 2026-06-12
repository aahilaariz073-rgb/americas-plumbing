'use client';

import ScrollReveal from './ScrollReveal';

type Svc = { slug: string; label: string; icon: React.ReactNode };

function Ring({ children }: { children: React.ReactNode }) {
  return (
    <svg width="90" height="90" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" stroke="#111827" strokeWidth="5"
        strokeDasharray="48 9" strokeLinecap="round" strokeDashoffset="-14" />
      <circle cx="40" cy="40" r="25" fill="#111827" />
      {children}
    </svg>
  );
}

const svcs: Svc[] = [
  {
    slug: 'drain-cleaning',
    label: 'Drain Services',
    icon: <Ring>
      <path fill="white" d="M40 27c0 0-9 13-9 19a9 9 0 0018 0c0-6-9-19-9-19z" />
    </Ring>,
  },
  {
    slug: 'garbage-disposal',
    label: 'Garbage Disposals',
    icon: <Ring>
      <circle cx="40" cy="40" r="6" fill="white" />
      <rect x="38.5" y="27" width="3" height="7" rx="1.5" fill="white" />
      <rect x="38.5" y="46" width="3" height="7" rx="1.5" fill="white" />
      <rect x="27" y="38.5" width="7" height="3" rx="1.5" fill="white" />
      <rect x="46" y="38.5" width="7" height="3" rx="1.5" fill="white" />
      <rect x="31" y="31" width="3" height="7" rx="1.5" fill="white" transform="rotate(45 32.5 34.5)" />
      <rect x="46" y="31" width="3" height="7" rx="1.5" fill="white" transform="rotate(-45 47.5 34.5)" />
    </Ring>,
  },
  {
    slug: 'water-heater',
    label: 'Water Heater',
    icon: <Ring>
      <rect x="33" y="26" width="14" height="22" rx="3" fill="white" />
      <rect x="37" y="48" width="6" height="5" rx="1" fill="white" />
      <circle cx="40" cy="37" r="5" fill="#111827" />
      <path fill="white" d="M40 33c0 0-3 3.5-3 5.5a3 3 0 006 0c0-2-3-5.5-3-5.5z" />
    </Ring>,
  },
  {
    slug: 'camera-inspection',
    label: 'Camera Inspection',
    icon: <Ring>
      <rect x="27" y="33" width="24" height="16" rx="3" fill="white" />
      <polygon points="35,33 38,27 42,27 45,33" fill="white" />
      <circle cx="40" cy="41" r="5" fill="#111827" />
      <circle cx="40" cy="41" r="2" fill="white" opacity="0.45" />
      <circle cx="50" cy="36.5" r="2" fill="#111827" />
    </Ring>,
  },
  {
    slug: 'hydro-jetting',
    label: 'Hydro Jetting',
    icon: <Ring>
      <rect x="26" y="36" width="15" height="8" rx="3" fill="white" />
      <path d="M43 36L53 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M43 40L55 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M43 44L53 50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </Ring>,
  },
  {
    slug: 'sewer-line',
    label: 'Sewer Repair',
    icon: <Ring>
      <rect x="27" y="30" width="26" height="20" rx="2" fill="none" stroke="white" strokeWidth="2.5" />
      <line x1="27" y1="37" x2="53" y2="37" stroke="white" strokeWidth="2" />
      <line x1="27" y1="43" x2="53" y2="43" stroke="white" strokeWidth="2" />
      <line x1="34" y1="30" x2="34" y2="50" stroke="white" strokeWidth="2" />
      <line x1="40" y1="30" x2="40" y2="50" stroke="white" strokeWidth="2" />
      <line x1="46" y1="30" x2="46" y2="50" stroke="white" strokeWidth="2" />
    </Ring>,
  },
  {
    slug: 'bathroom-fixtures',
    label: 'Bathroom Fixtures',
    icon: <Ring>
      <rect x="34" y="28" width="12" height="8" rx="2" fill="white" />
      <rect x="31" y="35" width="18" height="10" rx="2" fill="white" />
      <ellipse cx="40" cy="47" rx="11" ry="6" fill="white" />
    </Ring>,
  },
  {
    slug: 'water-line-repair',
    label: 'Water Line Repair',
    icon: <Ring>
      <rect x="24" y="37" width="32" height="6" rx="3" fill="white" />
      <path fill="white" d="M46 28c-2.8 0-5 2.2-5 5 0 .8.2 1.5.6 2.2L33 43.5l2 2 8.5-8.5c.7.4 1.5.6 2.2.6 2.8 0 5-2.2 5-5 0-.5-.1-1-.2-1.4l-2.4 2.4-1.4-1.4 2.4-2.4c-.5-.1-1-.2-1.4-.2z" />
    </Ring>,
  },
  {
    slug: 'leak-detection',
    label: 'Leak Detection',
    icon: <Ring>
      <circle cx="37" cy="37" r="9" fill="none" stroke="white" strokeWidth="3" />
      <path d="M43.5 43.5L52 52" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path fill="white" d="M37 33c0 0-2.5 3-2.5 5.5a2.5 2.5 0 005 0c0-2.5-2.5-5.5-2.5-5.5z" />
    </Ring>,
  },
  {
    slug: 'gas-line',
    label: 'Gas Line Services',
    icon: <Ring>
      <path fill="white" d="M40 26c0 0-2 5-2 9-3-2-3-6-3-6-4 4-5 8-5 11a10 10 0 0020 0c0-6-4-9-5-9 0 0 0-3-5-5z" />
    </Ring>,
  },
  {
    slug: 'emergency-plumbing',
    label: 'Emergency Plumbing',
    icon: <Ring>
      <path fill="white" d="M43 26L34 42h7l-5 14 15-18h-8l6-12z" />
    </Ring>,
  },
  {
    slug: 'fixture-installation',
    label: 'Fixture Installation',
    icon: <Ring>
      <path fill="white" d="M47 27c-3.3 0-6 2.7-6 6 0 .9.2 1.8.6 2.6L29 48l3 3 13-13c.8.4 1.7.6 2.6.6 3.3 0 6-2.7 6-6 0-.6-.1-1.1-.3-1.6l-3.2 3.2-1.8-1.8 3.2-3.2c-.5-.2-1-.3-1.6-.3z" />
    </Ring>,
  },
  {
    slug: 'repiping',
    label: 'Whole-Home Repiping',
    icon: <Ring>
      <rect x="24" y="36" width="10" height="8" rx="2" fill="white" />
      <rect x="46" y="36" width="10" height="8" rx="2" fill="white" />
      <path d="M34 40 Q37 33 40 40 Q43 47 46 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
    </Ring>,
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#f7f8fc', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>
            What We Do
          </div>
          <h2 style={{ fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.1 }}>
            Full-Service Plumbing
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', margin: '16px auto 0' }}>
            From emergencies to upgrades — we handle every job with the same care and fair pricing.
          </p>
        </ScrollReveal>

        <div className="svc-icon-grid">
          {svcs.map(svc => (
            <ScrollReveal key={svc.slug}>
              <a href={`/services/${svc.slug}`} className="svc-icon-card">
                {svc.icon}
                <span className="svc-icon-label">{svc.label}</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal style={{ textAlign: 'center', marginTop: '52px' }}>
          <a href="/services" style={{
            display: 'inline-block', background: '#080f1f', color: '#fff',
            fontSize: '0.85rem', fontWeight: 700, padding: '14px 36px',
            borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            View All Services
          </a>
        </ScrollReveal>
      </div>

      <style>{`
        .svc-icon-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        .svc-icon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          background: #fff;
          border: 1px solid #e8eaf0;
          border-radius: 16px;
          padding: 28px 16px 22px;
          text-decoration: none;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .svc-icon-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transform: translateY(-3px);
        }
        .svc-icon-label {
          font-size: 0.875rem;
          font-weight: 700;
          color: #080f1f;
          text-align: center;
          line-height: 1.3;
        }
        @media (max-width: 1100px) {
          .svc-icon-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 800px) {
          .svc-icon-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 520px) {
          .svc-icon-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
