import type { Metadata } from 'next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
  // No canonical — a 404 shouldn't point Google at any URL, let alone the homepage
  alternates: {},
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section style={{
          background: '#102a6b', minHeight: '60vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '80px 28px', textAlign: 'center', position: 'relative',
        }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 700,
              color: '#C8202A', lineHeight: 1, marginBottom: '20px',
            }}>
              404
            </div>
            <h1 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.15, marginBottom: '20px',
            }}>
              Page Not Found
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem',
              lineHeight: 1.7, marginBottom: '36px',
            }}>
              The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/" style={{
                background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700,
                padding: '14px 32px', borderRadius: '4px', textDecoration: 'none',
                letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                Back to Home
              </a>
              <a href="/contact" style={{
                background: 'transparent', color: '#fff', fontSize: '0.95rem', fontWeight: 600,
                padding: '13px 28px', borderRadius: '4px', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>
                Contact Us
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
