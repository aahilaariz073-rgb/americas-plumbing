import type { Metadata } from 'next';
import { services } from '@/app/data/services';
import { ServiceIcon } from '@/app/components/ServiceIcon';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import Schema from '@/app/components/Schema';

export const metadata: Metadata = {
  title: "Plumbing Services San Jacinto & Southern California | America's Plumbing",
  description: "Full-service plumbing in San Jacinto & Southern California. Emergency repairs, leak detection, repiping, drain cleaning, water heaters & more. C-36 Licensed. Call (949) 379-0082.",
  keywords: "plumbing services san jacinto ca, plumber riverside county, drain cleaning hemet menifee, water heater repair san jacinto, slab leak detection southern california",
};

export default function ServicesPage() {
  return (
    <>
      <Schema />
      <Nav />
      <main>
        <section style={{ background: '#080f1f', padding: '80px 28px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '130%', background: '#1A52BE', clipPath: 'polygon(18% 0%,100% 0%,100% 100%,0% 100%)', opacity: 0.07 }} />
          </div>
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Services</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>San Jacinto, CA &amp; Southern California</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              Complete Plumbing Services<br />
              <span style={{ color: '#C8202A' }}>in San Jacinto & SoCal</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px' }}>
              From routine maintenance to emergency repairs — America&apos;s Plumbing covers every residential and commercial plumbing need across San Jacinto, Riverside County, and South Orange County with a C-36 license, upfront pricing, and same-day availability.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div className="svc-page-grid">
              {services.map(svc => (
                <a key={svc.slug} href={`/services/${svc.slug}`} className="svc-page-card">
                  <div style={{ marginBottom: '20px' }}>
                    <ServiceIcon slug={svc.slug} />
                  </div>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px' }}>{svc.name}</h2>
                  <p style={{ color: '#5a5e72', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '20px', flexGrow: 1 }}>{svc.intro.slice(0, 110)}…</p>
                  <span style={{ color: '#C8202A', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Learn More <span>→</span>
                  </span>
                </a>
              ))}
            </div>
            <style>{`
              .svc-page-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 16px;
              }
              .svc-page-card {
                background: #fff;
                border: 1px solid #e8eaf0;
                border-radius: 16px;
                padding: 32px 24px;
                text-decoration: none;
                display: flex;
                flex-direction: column;
                transition: box-shadow 0.2s, transform 0.2s;
              }
              .svc-page-card:hover {
                box-shadow: 0 8px 32px rgba(0,0,0,0.09);
                transform: translateY(-3px);
              }
              @media (max-width: 1100px) {
                .svc-page-grid { grid-template-columns: repeat(3, 1fr); }
              }
              @media (max-width: 700px) {
                .svc-page-grid { grid-template-columns: repeat(2, 1fr); }
              }
              @media (max-width: 440px) {
                .svc-page-grid { grid-template-columns: 1fr; }
              }
            `}</style>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
