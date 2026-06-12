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

        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {areas.map((area, i) => (
                <a key={area.slug} href={`/areas/${area.slug}`} className="area-card" style={{
                  background: '#fff', borderRadius: '8px', border: '1px solid #e8eaf0',
                  borderTop: `3px solid ${i % 2 === 0 ? '#C8202A' : '#1A52BE'}`,
                  padding: '28px 24px', textDecoration: 'none', display: 'block',
                }}>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#080f1f', marginBottom: '8px', fontFamily: 'var(--font-newsreader), Outfit, sans-serif' }}>
                    Plumber in {area.city}
                  </h2>
                  <p style={{ color: '#5a5e72', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '14px' }}>
                    {area.intro.slice(0, 90)}…
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                    {area.zipCodes.slice(0, 3).map(z => (
                      <span key={z} style={{ background: '#f0f4ff', color: '#1A52BE', padding: '2px 8px', borderRadius: '3px', fontSize: '0.72rem', fontWeight: 600 }}>{z}</span>
                    ))}
                  </div>
                  <span style={{ color: '#C8202A', fontSize: '0.8rem', fontWeight: 700 }}>View Page →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
      <style>{`.area-card { transition: box-shadow 0.2s, transform 0.2s; } .area-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.09); transform: translateY(-2px); }`}</style>
    </>
  );
}
