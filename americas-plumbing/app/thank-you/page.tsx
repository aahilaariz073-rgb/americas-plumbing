import type { Metadata } from 'next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting America's Plumbing. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{
          background: '#080f1f', minHeight: '60vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '80px 28px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: '#C8202A', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 28px',
              fontSize: '2rem',
            }}>
              ✓
            </div>
            <h1 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.1, marginBottom: '20px',
            }}>
              Message Received!
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem',
              lineHeight: 1.7, marginBottom: '36px',
            }}>
              Thank you for reaching out to America&apos;s Plumbing. Joe will personally review your request and get back to you within a few hours. For urgent issues, call us directly.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+19493790082" style={{
                background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700,
                padding: '14px 32px', borderRadius: '4px', textDecoration: 'none',
                letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                Call (949) 379-0082
              </a>
              <a href="/" style={{
                background: 'transparent', color: '#fff', fontSize: '0.95rem', fontWeight: 600,
                padding: '13px 28px', borderRadius: '4px', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>
                Back to Home
              </a>
            </div>
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
            background: 'linear-gradient(to right, #C8202A 0%, #1A52BE 50%, #C8202A 100%)',
          }} />
        </section>
      </main>
      <Footer />
    </>
  );
}
