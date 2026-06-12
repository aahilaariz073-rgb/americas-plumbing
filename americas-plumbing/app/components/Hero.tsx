'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!data.firstName || !data.phone) {
      setError('Please fill in your name and phone number.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#fff', border: '1px solid #e0e2ea',
    borderRadius: '8px', padding: '14px 16px', color: '#080f1f',
    fontSize: '1rem', outline: 'none', fontFamily: 'inherit',
  };
  const labelStyle: React.CSSProperties = {
    color: '#374151', fontSize: '0.75rem', fontWeight: 700,
    letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '7px',
  };

  return (
    <section
      id="hero"
      style={{ position: 'relative', background: '#080f1f', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src="/plumb.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,15,31,0.96) 45%, rgba(8,15,31,0.65) 100%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto', padding: '100px 28px 80px', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 500px', gap: '64px', alignItems: 'center' }}>

          {/* ── LEFT: Text ── */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div style={{ width: '28px', height: '2px', background: '#C8202A' }} />
              <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Licensed · Insured · San Jacinto, CA
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-newsreader), serif',
              fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.02, letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}>
              Plumber in<br />
              <span style={{ color: '#C8202A' }}>San Jacinto</span><br />
              &amp; Southern CA
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '440px' }}>
              Fast, honest plumbing built on American values. From emergency repairs to whole-home repiping — fixed right the first time.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '56px' }}>
              <a href="tel:+19493790082" style={{
                background: '#C8202A', color: '#fff', fontSize: '0.9rem', fontWeight: 700,
                padding: '15px 36px', borderRadius: '5px', textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                (949) 379-0082
              </a>
              <a href="/areas" style={{
                background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.9rem', fontWeight: 600,
                padding: '15px 28px', borderRadius: '5px', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.18)',
              }}>
                View Service Areas →
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px' }}>
              {[
                { val: '5.0★', label: 'Google Rating' },
                { val: '10+', label: 'Years Serving SoCal' },
                { val: '24/7', label: 'Emergency Service', red: true },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.1)', margin: '0 28px' }} />}
                  <div>
                    <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '2rem', fontWeight: 700, color: s.red ? '#C8202A' : '#fff', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Booking form ── */}
          <div style={{
            background: '#fff', borderRadius: '14px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
            overflow: 'hidden',
          }}>
            {/* Form header */}
            <div style={{ background: '#080f1f', padding: '28px 34px 26px', borderBottom: '3px solid #C8202A' }}>
              <div style={{ color: '#C8202A', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Free — No Obligation</div>
              <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.9rem', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                Request a Free Quote
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginTop: '8px' }}>Joe calls you back within the hour.</p>
            </div>

            {/* Form body */}
            <div style={{ padding: '32px 34px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%', background: '#C8202A',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px', fontSize: '1.3rem', color: '#fff',
                  }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.4rem', color: '#080f1f', marginBottom: '10px' }}>Request Received!</h3>
                  <p style={{ color: '#5a5e72', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    Joe will call you back within the hour.<br />
                    For emergencies: <a href="tel:+19493790082" style={{ color: '#C8202A', fontWeight: 700 }}>(949) 379-0082</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input name="firstName" required style={inputStyle} placeholder="Joe"
                        onFocus={e => (e.target.style.borderColor = '#C8202A')}
                        onBlur={e => (e.target.style.borderColor = '#e0e2ea')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input name="lastName" style={inputStyle} placeholder="Smith"
                        onFocus={e => (e.target.style.borderColor = '#C8202A')}
                        onBlur={e => (e.target.style.borderColor = '#e0e2ea')} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input name="phone" required type="tel" style={inputStyle} placeholder="(949) 555-0100"
                      onFocus={e => (e.target.style.borderColor = '#C8202A')}
                      onBlur={e => (e.target.style.borderColor = '#e0e2ea')} />
                  </div>

                  <div>
                    <label style={labelStyle}>Service Needed</label>
                    <select name="service" style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = '#C8202A')}
                      onBlur={e => (e.target.style.borderColor = '#e0e2ea')}>
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
                    <textarea name="message" rows={3} style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="What's going on? We'll come prepared."
                      onFocus={e => (e.target.style.borderColor = '#C8202A')}
                      onBlur={e => (e.target.style.borderColor = '#e0e2ea')} />
                  </div>

                  {error && <p style={{ color: '#C8202A', fontSize: '0.8rem', textAlign: 'center' }}>{error}</p>}

                  <button type="submit" disabled={loading} style={{
                    background: '#C8202A', color: '#fff', fontSize: '0.95rem', fontWeight: 700,
                    padding: '17px', borderRadius: '8px', border: 'none',
                    cursor: loading ? 'wait' : 'pointer', letterSpacing: '0.08em',
                    textTransform: 'uppercase', opacity: loading ? 0.7 : 1,
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#a81820'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#C8202A'; }}>
                    {loading ? 'Sending…' : 'Send My Request'}
                  </button>

                  <p style={{ textAlign: 'center', color: '#9b9eb0', fontSize: '0.72rem' }}>
                    🔒 Your info is never shared or sold.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* C-36 badge */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '28px', zIndex: 3,
        background: '#C8202A', color: '#fff', padding: '12px 18px',
        borderRadius: '6px', boxShadow: '0 8px 32px rgba(200,32,42,0.45)', textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.6rem', fontWeight: 700, lineHeight: 1 }}>C-36</div>
        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px', opacity: 0.85 }}>Licensed</div>
      </div>

      {/* Bottom rule */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #C8202A 0%, #1A52BE 50%, #C8202A 100%)' }} />

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
