'use client';

import ScrollReveal from './ScrollReveal';
import { ServiceIcon } from './ServiceIcon';

const svcs = [
  { slug: 'drain-cleaning',      label: 'Drain Services' },
  { slug: 'garbage-disposal',    label: 'Garbage Disposals' },
  { slug: 'water-heater',        label: 'Water Heater' },
  { slug: 'camera-inspection',   label: 'Camera Inspection' },
  { slug: 'hydro-jetting',       label: 'Hydro Jetting' },
  { slug: 'sewer-line',          label: 'Sewer Repair' },
  { slug: 'bathroom-fixtures',   label: 'Bathroom Fixtures' },
  { slug: 'water-line-repair',   label: 'Water Line Repair' },
  { slug: 'leak-detection',      label: 'Leak Detection' },
  { slug: 'gas-line',            label: 'Gas Line Services' },
  { slug: 'emergency-plumbing',  label: 'Emergency Plumbing' },
  { slug: 'fixture-installation',label: 'Fixture Installation' },
  { slug: 'repiping',            label: 'Whole-Home Repiping' },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#f7f8fc', padding: '100px 28px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>
            What We Do
          </div>
          <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700, color: '#080f1f', lineHeight: 1.1 }}>
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
                <ServiceIcon slug={svc.slug} />
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
