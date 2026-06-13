import type { Metadata } from 'next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import ScrollReveal from '@/app/components/ScrollReveal';

export const metadata: Metadata = {
  title: "Customer Reviews | America's Plumbing – Orange County Plumber",
  description: "Read 5-star reviews from real customers across Orange County. America's Plumbing — honest work, fair pricing, trusted by homeowners in Irvine, Newport Beach, Mission Viejo & more.",
};

const reviews = [
  { name: 'Maria T.', location: 'Irvine, CA', quote: 'Joe came out the same day I called about a slab leak. Diagnosed it fast, gave me a straight price, and fixed it without tearing up half my floor. Incredibly professional.' },
  { name: 'Robert K.', location: 'Newport Beach, CA', quote: "Burst pipe at midnight — called America's Plumbing and they were at my door within the hour. Honest pricing and no drama. This is our plumber for life." },
  { name: 'David L.', location: 'Mission Viejo, CA', quote: "Three quotes for my repiping job. America's Plumbing was the most transparent and saved me $800. Beautiful work, done in a single day." },
  { name: 'Angela R.', location: 'Laguna Hills, CA', quote: 'Called about a slow drain and they showed up same-day, on time. The tech walked me through exactly what he was doing and left the area spotless. Will definitely call again.' },
  { name: 'James W.', location: 'Lake Forest, CA', quote: "Water heater quit on a Saturday morning. Had a new one installed by 2 PM. Fair price, no up-sell, just got it done. Exactly what you want from a plumber." },
  { name: 'Sandra M.', location: 'Aliso Viejo, CA', quote: "I've used a lot of plumbers over the years. America's Plumbing is the first one I'd actually recommend to a friend. Honest, clean, on time, and priced right." },
  { name: 'Carlos V.', location: 'Huntington Beach, CA', quote: 'Gas line installation for my outdoor BBQ. Permitted, inspected, done right. Joe knew exactly what the city required and handled everything. Zero stress.' },
  { name: 'Patricia H.', location: 'Anaheim, CA', quote: 'Leaking toilet had damaged my subfloor. Joe assessed the damage honestly and only billed for what was actually needed. Saved me from paying for repairs I didn\'t need.' },
  { name: 'Michael T.', location: 'San Clemente, CA', quote: "Whole-home repipe finished ahead of schedule and under budget. The crew was respectful of our home and patched every wall opening. Outstanding job." },
];

const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://americasplumbing.com' }, { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://americasplumbing.com/reviews' }] };

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main>
        {/* Page header */}
        <section style={{ background: '#080f1f', padding: '80px 28px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '130%', background: '#1A52BE', clipPath: 'polygon(18% 0%,100% 0%,100% 100%,0% 100%)', opacity: 0.07 }} />
          </div>
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Reviews</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>5.0 on Google</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              What Our Customers<br />
              <span style={{ color: '#C8202A' }}>Are Saying</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#F5C518', fontSize: '1.4rem', letterSpacing: '3px' }}>★★★★★</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>5.0 · Verified Google Reviews</span>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* Reviews grid */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '16px',
            }}>
              {reviews.map((r, i) => (
                <ScrollReveal key={r.name} style={{ background: '#fff', border: '1px solid #e8eaf0', borderTop: `3px solid ${i % 3 === 1 ? '#1A52BE' : '#C8202A'}`, borderRadius: '4px', padding: '36px 32px' }}>
                  <div style={{
                    fontFamily: 'var(--font-newsreader), serif',
                    fontSize: '4rem', color: i % 3 === 1 ? '#1A52BE' : '#C8202A',
                    lineHeight: 0.7, marginBottom: '20px', fontWeight: 400, opacity: 0.4
                  }}>
                    &ldquo;
                  </div>
                  <p style={{ color: '#5a5e72', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '28px' }}>
                    {r.quote}
                  </p>
                  <div style={{ borderTop: '1px solid #e8eaf0', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: '#080f1f', fontWeight: 700, fontSize: '0.9rem' }}>{r.name}</div>
                      <div style={{ color: '#9b9eb0', fontSize: '0.78rem', marginTop: '3px' }}>{r.location}</div>
                    </div>
                    <span style={{ color: '#F5C518', fontSize: '0.85rem' }}>★★★★★</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Google CTA */}
            <ScrollReveal style={{ textAlign: 'center', paddingTop: '64px' }}>
              <p style={{ color: '#9b9eb0', fontSize: '0.9rem', marginBottom: '20px' }}>
                Happy with our work? Leave us a review on Google.
              </p>
              <a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', background: '#C8202A', color: '#fff',
                  fontSize: '0.875rem', fontWeight: 700, padding: '14px 32px',
                  borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase'
                }}
              >
                Leave a Google Review
              </a>
            </ScrollReveal>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
