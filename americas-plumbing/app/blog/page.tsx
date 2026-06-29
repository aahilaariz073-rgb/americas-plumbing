import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import PageCTA from '@/app/components/PageCTA';
import { publishedPostsByDate } from '@/app/data/blog';

// Re-check scheduled posts roughly every 6 hours so newly-due posts go live
// without a manual redeploy.
export const revalidate = 21600;

export const metadata: Metadata = {
  alternates: { canonical: '/blog' },
  title: 'Plumbing Tips & Advice | San Jacinto & Riverside County',
  description:
    "Honest plumbing advice from America's Plumbing — water heaters, drains, leaks, and home plumbing tips for San Jacinto & Riverside County homeowners.",
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.americasplumbing.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.americasplumbing.com/blog' },
  ],
};

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main>
        {/* Header */}
        <section style={{ background: '#080f1f', padding: '80px 28px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '130%', background: '#1A52BE', clipPath: 'polygon(18% 0%,100% 0%,100% 100%,0% 100%)', opacity: 0.07 }} />
          </div>
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Blog</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Plumbing Tips & Advice</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              Straight Talk From<br /><span style={{ color: '#C8202A' }}>Your Local Plumber</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px' }}>
              Practical, no-nonsense plumbing advice for San Jacinto & Riverside County homeowners — what the warning signs mean, what you can do yourself, and when it’s time to call.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* Post grid */}
        <section style={{ background: '#f7f8fc', padding: '80px 28px' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {publishedPostsByDate().map(post => (
              <a key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #e8eaf0', borderRadius: '8px', overflow: 'hidden', textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#080f1f' }}>
                  <Image src={post.heroImage} alt={post.heroAlt} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '14px', left: '14px', background: '#C8202A', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px' }}>{post.category}</span>
                </div>
                <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ color: '#9b9eb0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '10px' }}>{formatDate(post.date)} · {post.readMins} min read</div>
                  <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.3rem', fontWeight: 700, color: '#080f1f', lineHeight: 1.25, marginBottom: '12px' }}>{post.title}</h2>
                  <p style={{ color: '#5a5e72', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>{post.excerpt}</p>
                  <span style={{ color: '#C8202A', fontWeight: 700, fontSize: '0.85rem' }}>Read article →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
