import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import { posts, getPost, isPublished } from '@/app/data/blog';
import { BUSINESS } from '@/app/data/business';

// Re-check scheduled posts roughly every 6 hours. Future-dated posts are not
// pre-rendered; they generate on-demand once their date passes (dynamicParams
// defaults to true) and 404 until then.
export const revalidate = 21600;

export async function generateStaticParams() {
  return posts.filter(p => isPublished(p)).map(p => ({ slug: p.slug }));
}

const base = 'https://www.americasplumbing.com';

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function slugifyHeading(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !isPublished(post)) return {};
  const url = `${base}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${base}${post.heroImage}`, width: 1200, height: 630, alt: post.heroAlt }],
    },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription, images: [`${base}${post.heroImage}`] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  // Unknown slug OR a scheduled post whose publish date hasn't arrived → 404.
  if (!post || !isPublished(post)) notFound();

  const url = `${base}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${base}${post.heroImage}`,
    datePublished: post.date,
    // Only claims a revision date when the post was genuinely revised.
    dateModified: post.updated ?? post.date,
    inLanguage: 'en-US',
    // Author and publisher both resolve to real, on-site entities: the author
    // has a bio page, and the publisher is the same @id as the Plumber node on
    // every other page, so Google consolidates them instead of treating each
    // post's publisher as a separate organization.
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${base}/about`,
      jobTitle: 'Licensed C-36 Plumbing Contractor',
      worksFor: { '@id': BUSINESS.id },
    },
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS.id,
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: { '@type': 'ImageObject', url: BUSINESS.logo },
    },
    isPartOf: { '@type': 'Blog', '@id': `${base}/blog`, name: `${BUSINESS.name} Blog` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema = post.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Nav />
      <main>
        {/* Header */}
        <section style={{ background: '#102a6b', padding: '64px 28px 56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <a href="/blog" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Blog</a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{post.category}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
              <span>By <a href="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>{post.author}</a></span><span>·</span><span>{formatDate(post.date)}</span>{post.updated && (<><span>·</span><span>Updated {formatDate(post.updated)}</span></>)}<span>·</span><span>{post.readMins} min read</span>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* Hero image */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '980px', margin: '0 auto', aspectRatio: '16 / 8', background: '#102a6b' }}>
          <Image src={post.heroImage} alt={post.heroAlt} fill priority sizes="(max-width: 980px) 100vw, 980px" style={{ objectFit: 'cover' }} />
        </div>

        {/* Body */}
        <article style={{ background: '#fff', padding: '56px 28px 72px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {/* Table of contents (long posts only) */}
            {post.showToc && (
              <nav aria-label="Table of contents" style={{ background: '#f7f8fc', border: '1px solid #e8eaf0', borderRadius: '8px', padding: '24px 28px', marginBottom: '40px' }}>
                <div style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '14px' }}>On This Page</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {post.sections.filter(s => s.h2).map((s, i) => (
                    <li key={i}>
                      <a href={`#${slugifyHeading(s.h2!)}`} style={{ color: '#1A52BE', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none' }}>{s.h2}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {post.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                {sec.h2 && <h2 id={slugifyHeading(sec.h2)} style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 700, color: '#102a6b', lineHeight: 1.2, marginBottom: '16px', scrollMarginTop: '100px' }}>{sec.h2}</h2>}
                {sec.h3 && <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#102a6b', marginBottom: '12px' }}>{sec.h3}</h3>}
                {sec.paras?.map((p, j) => (
                  <p key={j} style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '18px' }}>{p}</p>
                ))}
                {sec.list && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {sec.list.map((item, k) => (
                      <li key={k} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#C8202A', fontWeight: 700, flexShrink: 0, marginTop: '3px' }}>▸</span>
                        <span style={{ color: '#374151', fontSize: '1.02rem', lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.table && (
                  <div style={{ overflowX: 'auto', marginBottom: '18px', border: '1px solid #e8eaf0', borderRadius: '8px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                      <thead>
                        <tr style={{ background: '#102a6b' }}>
                          {sec.table.headers.map((h, hi) => (
                            <th key={hi} style={{ color: '#fff', fontWeight: 700, textAlign: 'left', padding: '14px 16px', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, ri) => (
                          <tr key={ri} style={{ borderTop: '1px solid #e8eaf0', background: ri % 2 ? '#f7f8fc' : '#fff' }}>
                            {row.map((cell, ci) => (
                              <td key={ci} style={{ padding: '14px 16px', color: ci === 0 ? '#102a6b' : '#374151', fontWeight: ci === 0 ? 700 : 400 }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {sec.link && (
                  <a href={sec.link.href} style={{ display: 'inline-block', background: '#f7f8fc', border: '1px solid #e0e2ea', borderLeft: '3px solid #1A52BE', padding: '12px 18px', borderRadius: '0 6px 6px 0', textDecoration: 'none', color: '#1A52BE', fontWeight: 700, fontSize: '0.95rem' }}>
                    {sec.link.text} →
                  </a>
                )}
              </div>
            ))}

            {/* Inline CTA */}
            <div style={{ background: '#102a6b', borderRadius: '10px', padding: '36px 32px', margin: '48px 0', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A,#1A52BE,#C8202A)' }} />
              <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>{post.cta.heading}</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>{post.cta.text}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={post.ctaHref ?? '/contact'} style={{ background: '#C8202A', color: '#fff', fontSize: '0.9rem', fontWeight: 700, padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{post.ctaHref ? 'Book Online' : 'Get a Free Estimate'}</a>
                <a href={`tel:${BUSINESS.telephone}`} style={{ background: 'transparent', color: '#fff', fontSize: '0.9rem', fontWeight: 700, padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>{BUSINESS.telephoneDisplay}</a>
              </div>
            </div>

            {/* FAQs */}
            {post.faqs.length > 0 && (
              <div style={{ marginTop: '48px' }}>
                <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 700, color: '#102a6b', marginBottom: '20px' }}>Frequently Asked Questions</h2>
                {post.faqs.map((f, i) => (
                  <div key={i} style={{ borderTop: '1px solid #e8eaf0', padding: '20px 0' }}>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#102a6b', marginBottom: '8px' }}>{f.q}</h3>
                    <p style={{ color: '#5a5e72', fontSize: '0.97rem', lineHeight: 1.7 }}>{f.a}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Related services */}
            <div style={{ marginTop: '48px', borderTop: '1px solid #e8eaf0', paddingTop: '32px' }}>
              <div style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Related Services</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {post.relatedServices.map(s => (
                  <a key={s.slug} href={`/services/${s.slug}`} style={{ background: '#f7f8fc', border: '1px solid #e0e2ea', color: '#102a6b', fontWeight: 600, fontSize: '0.88rem', padding: '10px 18px', borderRadius: '100px', textDecoration: 'none' }}>{s.label} →</a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
