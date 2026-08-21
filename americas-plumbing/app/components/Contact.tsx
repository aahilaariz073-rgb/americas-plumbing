'use client';

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import ScrollReveal from './ScrollReveal';
import { reportContactConversion } from '@/app/lib/gtag';
import { reportLead } from '@/app/lib/fbpixel';

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#fff',
  border: '1px solid #e0e2ea', borderRadius: '4px',
  padding: '13px 16px', color: '#102a6b', fontSize: '0.95rem',
  outline: 'none', fontFamily: 'inherit'
};

const labelStyle: React.CSSProperties = {
  color: '#5a5e72', fontSize: '0.75rem', fontWeight: 700,
  letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px'
};

export default function Contact() {
  const searchParams = useSearchParams();
  // Service pages link here as /contact?src=<service-slug> since the lead
  // form itself only lives on / and /contact, never on the service pages.
  const src = searchParams.get('src');
  const contentName = src === 'water-heater' ? 'water_heater' : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedPhone, setSubmittedPhone] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.firstName || !data.lastName || !data.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setLoading(true);

    fetch('https://formsubmit.co/ajax/hello@skyliftgroup.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`.trim(),
        phone: data.phone,
        email: data.email || 'not provided',
        service: data.service || 'not specified',
        message: data.message || '',
        _subject: `New Lead: ${data.firstName} — America's Plumbing`,
        _template: 'table',
      }),
    })
      .then(r => r.json())
      .then(json => {
        if (!json.success) { setError('Something went wrong. Please call us directly.'); setLoading(false); return; }
        reportContactConversion();
        reportLead('contact_page', contentName);
        setSubmittedName(data.firstName);
        setSubmittedPhone(data.phone);
        setLoading(false);
        setSubmitted(true);
      })
      .catch(() => {
        setError('Something went wrong. Please call us directly.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" style={{ background: '#f7f8fc', padding: '100px 28px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #C8202A, #1A52BE, #C8202A)'
      }} />

      <div
        className="two-col"
        style={{
          maxWidth: '1240px', margin: '0 auto', display: 'grid',
          gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start'
        }}
      >
        {/* Info column */}
        <ScrollReveal>
          <div style={{
            color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
          }}>
            Get in Touch
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), serif',
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 700,
            color: '#102a6b', lineHeight: 1.1, marginBottom: '20px'
          }}>
            Request a Free Quote
          </h2>
          <p style={{ color: '#5a5e72', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '48px' }}>
            Fill out the form and Joe will call you back within the hour. For emergencies, call directly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { label: 'Phone', value: '(949) 379-0082', bar: '#C8202A', href: 'tel:+19493790082' },
              { label: 'Phone (Riverside County)', value: '(951) 604-5073', bar: '#C8202A', href: 'tel:+19516045073' },
              { label: 'Email', value: 'californiajoe500@gmail.com', bar: '#1A52BE', href: 'mailto:californiajoe500@gmail.com' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '24px 0', borderBottom: '1px solid #e8eaf0',
                  textDecoration: 'none', transition: 'padding-left 0.2s'
                }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = '8px')}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0')}
              >
                <div style={{ width: '2px', height: '40px', background: item.bar, flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#9b9eb0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ color: '#102a6b', fontSize: item.label.startsWith('Phone') ? '1.1rem' : '1rem', fontWeight: item.label.startsWith('Phone') ? 700 : 600 }}>{item.value}</div>
                </div>
              </a>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px 0' }}>
              <div style={{ width: '2px', height: '40px', background: '#1A52BE', flexShrink: 0 }} />
              <div>
                <div style={{ color: '#9b9eb0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '4px' }}>Service Area</div>
                <div style={{ color: '#102a6b', fontSize: '1rem', fontWeight: 600 }}>San Jacinto &amp; Southern California</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Form column */}
        <ScrollReveal>
          {submitted ? (
            <div style={{
              border: '1px solid #e0e2ea', borderRadius: '6px', background: '#fff',
              padding: '52px 36px', textAlign: 'center'
            }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%', background: '#C8202A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', fontSize: '1.4rem', color: '#fff'
              }}>
                ✓
              </div>
              <h3 style={{
                fontFamily: 'var(--font-newsreader), serif',
                fontSize: '1.7rem', color: '#102a6b', marginBottom: '12px'
              }}>
                Request Received
              </h3>
              <p style={{ color: '#5a5e72', fontSize: '0.975rem', lineHeight: 1.65 }}>
                Thanks, {submittedName}. Joe will call <strong style={{ color: '#102a6b' }}>{submittedPhone}</strong> within the hour.<br />
                For emergencies:{' '}
                <a href="tel:+19493790082" style={{ color: '#C8202A', fontWeight: 700 }}>(949) 379-0082</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input
                    name="firstName" required style={inputStyle} placeholder="Joe"
                    onFocus={e => (e.target.style.borderColor = '#C8202A')}
                    onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input
                    name="lastName" required style={inputStyle} placeholder="Smith"
                    onFocus={e => (e.target.style.borderColor = '#C8202A')}
                    onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Phone *</label>
                <input
                  name="phone" required type="tel" style={inputStyle} placeholder="(949) 555-0100"
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  name="email" type="email" style={inputStyle} placeholder="you@example.com"
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />
              </div>

              <div>
                <label style={labelStyle}>Service Needed</label>
                <select
                  name="service"
                  style={{ ...inputStyle, background: '#fff', cursor: 'pointer' }}
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                >
                  <option value="">Select a service…</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="leak">Leak Detection &amp; Repair</option>
                  <option value="repiping">Whole-Home Repiping</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="water-heater">Water Heater</option>
                  <option value="fixture">Fixture Installation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Describe the Issue</label>
                <textarea
                  name="message" rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Tell us what's going on…"
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />
              </div>

              {error && (
                <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#C8202A' }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: '#C8202A', color: '#fff', fontSize: '0.875rem', fontWeight: 700,
                  padding: '16px', borderRadius: '4px', border: 'none', cursor: loading ? 'wait' : 'pointer',
                  letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#a81820'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8202A'; }}
              >
                {loading ? 'Sending…' : 'Send My Request'}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
