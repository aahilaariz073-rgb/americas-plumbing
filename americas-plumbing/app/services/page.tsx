import type { Metadata } from 'next';
import { services } from '@/app/data/services';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import Schema from '@/app/components/Schema';

export const metadata: Metadata = {
  title: "Plumbing Services Orange County CA | America's Plumbing",
  description: "Full-service plumbing in Orange County, CA. Emergency repairs, leak detection, repiping, drain cleaning, water heaters & more. C-36 Licensed. Call (949) 379-0082.",
  keywords: "plumbing services orange county, plumber orange county ca, drain cleaning irvine, water heater repair oc, slab leak detection orange county",
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
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Orange County, CA</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), Montserrat, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              Complete Plumbing Services<br />
              <span style={{ color: '#C8202A' }}>in Orange County</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px' }}>
              From routine maintenance to emergency repairs — America&apos;s Plumbing covers every residential and commercial plumbing need across Orange County with a C-36 license, upfront pricing, and same-day availability.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        <section style={{ background: '#fff', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px', background: '#e0e2ea' }}>
              {services.map((svc, i) => (
                <a key={svc.slug} href={`/services/${svc.slug}`} style={{ background: '#fff', padding: '44px 36px', textDecoration: 'none', display: 'block', transition: 'background 0.2s' }}>
                  <div style={{ fontFamily: 'var(--font-newsreader), Montserrat, sans-serif', fontSize: '3.5rem', fontWeight: 700, color: '#f0f1f5', lineHeight: 1, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#080f1f', marginBottom: '12px' }}>{svc.name}</h2>
                  <p style={{ color: '#5a5e72', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '20px' }}>{svc.intro.slice(0, 120)}…</p>
                  <span style={{ color: '#C8202A', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Learn More <span>→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
