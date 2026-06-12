import type { Metadata } from 'next';
import { areas } from '@/app/data/areas';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import Schema from '@/app/components/Schema';

export const metadata: Metadata = {
  title: "Plumber Orange County Service Areas | America's Plumbing",
  description: "America's Plumbing serves all of Orange County, CA — Irvine, Newport Beach, Laguna Hills, Mission Viejo, Huntington Beach & more. C-36 Licensed. Call (949) 379-0082.",
  keywords: "plumber orange county service area, plumbing irvine newport beach mission viejo, orange county plumbing company",
};

export default function AreasPage() {
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
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Service Areas</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Where We Work</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), Outfit, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              Serving All of<br />
              <span style={{ color: '#C8202A' }}>Orange County, CA</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px' }}>
              America&apos;s Plumbing covers Orange County from coast to inland. Fast response times, same-day availability, and a plumber who knows your neighborhood.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        <section style={{ background: '#fff', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', background: '#e0e2ea' }}>
              {areas.map((area) => (
                <a key={area.slug} href={`/areas/${area.slug}`} style={{ background: '#fff', padding: '40px 36px', textDecoration: 'none', display: 'block' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '32px', height: '2px', background: '#C8202A' }} />
                    <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{area.county}</span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#080f1f', marginBottom: '10px', fontFamily: 'var(--font-newsreader), Outfit, sans-serif' }}>
                    Plumber in {area.city}
                  </h2>
                  <p style={{ color: '#5a5e72', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '16px' }}>
                    {area.intro.slice(0, 110)}…
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {area.zipCodes.slice(0, 3).map(z => (
                      <span key={z} style={{ background: '#f7f8fc', border: '1px solid #e0e2ea', color: '#5a5e72', padding: '3px 10px', borderRadius: '3px', fontSize: '0.78rem' }}>{z}</span>
                    ))}
                  </div>
                  <span style={{ color: '#1A52BE', fontSize: '0.82rem', fontWeight: 700 }}>View services in {area.city} →</span>
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
