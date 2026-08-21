import type { Metadata } from 'next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import { BUSINESS } from '@/app/data/business';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy Policy',
  description: "Privacy Policy for America's Plumbing — what information we collect through our website, how it's used, and the third-party services involved.",
  robots: { index: true, follow: true },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.americasplumbing.com' },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.americasplumbing.com/privacy' },
  ],
};

const EFFECTIVE_DATE = 'July 16, 2026';

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-newsreader), serif',
  fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 700,
  color: '#102a6b', lineHeight: 1.2, marginTop: '44px', marginBottom: '16px',
};
const pStyle: React.CSSProperties = { color: '#374151', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' };
const liStyle: React.CSSProperties = { color: '#374151', fontSize: '1rem', lineHeight: 1.75, marginBottom: '8px' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main>
        {/* Header */}
        <section style={{ background: '#102a6b', padding: '72px 28px 56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Privacy Policy</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '16px' }}>
              Privacy Policy
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem' }}>Effective {EFFECTIVE_DATE}</p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#C8202A 0%,#1A52BE 50%,#C8202A 100%)' }} />
        </section>

        {/* Body */}
        <article style={{ background: '#fff', padding: '56px 28px 80px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={pStyle}>
              This Privacy Policy explains what information {BUSINESS.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects through americasplumbing.com (the &quot;Site&quot;), how we use it, and the choices you have. We built this Site to be straightforward, and we&apos;ve written this policy the same way — it describes what this Site actually does, not generic boilerplate.
            </p>

            <h2 style={h2Style}>Information We Collect</h2>
            <p style={pStyle}>When you use a form on this Site — the contact form, the chat widget, or the pop-up quote request — we collect the information you enter, which may include:</p>
            <ul style={{ paddingLeft: '22px', margin: '0 0 16px' }}>
              <li style={liStyle}>Your name</li>
              <li style={liStyle}>Your phone number</li>
              <li style={liStyle}>Your email address (where the form asks for it)</li>
              <li style={liStyle}>The service you&apos;re interested in and any message or details you provide</li>
            </ul>
            <p style={pStyle}>We do not ask for or knowingly collect payment information, Social Security numbers, or other sensitive personal information through this Site.</p>

            <h2 style={h2Style}>How We Use Your Information</h2>
            <p style={pStyle}>We use the information you submit to:</p>
            <ul style={{ paddingLeft: '22px', margin: '0 0 16px' }}>
              <li style={liStyle}>Respond to your inquiry and follow up about scheduling service</li>
              <li style={liStyle}>Provide a quote or estimate</li>
              <li style={liStyle}>Communicate with you by phone, text, or email about your request</li>
            </ul>
            <p style={pStyle}>We do not sell your personal information.</p>

            <h2 style={h2Style}>Third-Party Services We Use</h2>
            <p style={pStyle}>This Site relies on a small number of third-party services to operate. Each of them processes some data on our behalf, and each has its own privacy policy governing how they handle it:</p>
            <ul style={{ paddingLeft: '22px', margin: '0 0 16px' }}>
              <li style={liStyle}><strong>FormSubmit</strong> — when you submit a form on this Site, the information you enter is delivered to us by FormSubmit, a third-party form processing service. See <a href="https://formsubmit.co/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#1A52BE' }}>FormSubmit&apos;s privacy policy</a>.</li>
              <li style={liStyle}><strong>Google Ads</strong> — we use Google&apos;s advertising tag to measure the effectiveness of our ads and track when a form submission results from an ad click. This may set cookies in your browser. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#1A52BE' }}>Google&apos;s Privacy Policy</a>.</li>
              <li style={liStyle}><strong>Meta (Facebook) Pixel</strong> — we use the Meta Pixel to measure the effectiveness of our Facebook and Instagram ads and to understand how visitors use this Site after clicking one of our ads. This may set cookies in your browser. See <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: '#1A52BE' }}>Meta&apos;s Privacy Policy</a>.</li>
            </ul>

            <h2 style={h2Style}>Cookies &amp; Tracking Technologies</h2>
            <p style={pStyle}>
              Google Ads and the Meta Pixel, described above, may place cookies or similar technologies in your browser to measure ad performance and site activity. We do not use these technologies to build a profile of you beyond standard advertising measurement, and we do not operate any first-party tracking or analytics beyond what these two services provide.
            </p>
            <p style={pStyle}>
              You can control or delete cookies through your browser settings. You can also opt out of personalized advertising directly through <a href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#1A52BE' }}>Google&apos;s Ad Settings</a> and <a href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noopener noreferrer" style={{ color: '#1A52BE' }}>Meta&apos;s Ad Preferences</a>. Blocking cookies may affect how well some parts of the Site work but will not prevent you from browsing it or contacting us.
            </p>

            <h2 style={h2Style}>How Long We Keep Your Information</h2>
            <p style={pStyle}>
              We keep the information you submit through a form for as long as reasonably needed to respond to your inquiry and maintain our business records. If you&apos;d like us to delete information you&apos;ve previously submitted, contact us using the information below and we will do so, except where we&apos;re required to keep it for legitimate business or legal reasons.
            </p>

            <h2 style={h2Style}>Your Choices</h2>
            <p style={pStyle}>You can:</p>
            <ul style={{ paddingLeft: '22px', margin: '0 0 16px' }}>
              <li style={liStyle}>Ask us what information we have about you</li>
              <li style={liStyle}>Ask us to correct or delete that information</li>
              <li style={liStyle}>Ask us to stop contacting you</li>
            </ul>
            <p style={pStyle}>To make any of these requests, contact us using the information at the bottom of this page.</p>

            <h2 style={h2Style}>California Privacy Rights</h2>
            <p style={pStyle}>
              As a California-based business, we honor requests from California residents to know what personal information we&apos;ve collected and to request its deletion, consistent with the rights described above. We do not sell personal information, so there is nothing to opt out of in that respect.
            </p>

            <h2 style={h2Style}>Children&apos;s Privacy</h2>
            <p style={pStyle}>
              This Site is intended for homeowners and business owners seeking plumbing services and is not directed at children. We do not knowingly collect information from anyone under 13 years old.
            </p>

            <h2 style={h2Style}>Data Security</h2>
            <p style={pStyle}>
              We take reasonable steps to protect the information submitted through this Site, including relying on established third-party providers (FormSubmit, Google, Meta) for form delivery and advertising measurement rather than storing submitted data ourselves on this website. No method of transmission over the internet is completely secure, so we can&apos;t guarantee absolute security.
            </p>

            <h2 style={h2Style}>Changes to This Policy</h2>
            <p style={pStyle}>
              We may update this Privacy Policy from time to time to reflect changes to this Site or the services it uses. The effective date at the top of this page will reflect the most recent update.
            </p>

            <h2 style={h2Style}>Contact Us</h2>
            <p style={pStyle}>
              If you have questions about this Privacy Policy or want to make a request about your information, contact us:
            </p>
            <p style={{ ...pStyle, marginBottom: '4px' }}>{BUSINESS.name}</p>
            <p style={{ ...pStyle, marginBottom: '4px' }}>{BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}</p>
            <p style={{ ...pStyle, marginBottom: '4px' }}>Phone: <a href={`tel:${BUSINESS.telephone}`} style={{ color: '#1A52BE' }}>{BUSINESS.telephoneDisplay}</a></p>
            <p style={pStyle}>Email: <a href={`mailto:${BUSINESS.email}`} style={{ color: '#1A52BE' }}>{BUSINESS.email}</a></p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
