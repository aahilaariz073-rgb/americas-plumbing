'use client';
import { useState, useEffect, FormEvent } from 'react';
import { reportContactConversion } from '@/app/lib/gtag';
import { reportLead } from '@/app/lib/fbpixel';

const PHONE_HREF = 'tel:+19493790082';
const STORAGE_KEY = 'ap_lead_popup_dismissed';

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid #e0e2ea',
  borderRadius: '6px',
  padding: '13px 16px',
  fontSize: '0.92rem',
  color: '#080f1f',
  background: '#fff',
  outline: 'none',
  fontFamily: 'inherit',
};

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      // localStorage unavailable (private browsing, etc.) — just skip the popup
      dismissed = true;
    }
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore — worst case it can show again
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Name and phone are required.');
      return;
    }
    setError('');
    setLoading(true);

    fetch('https://formsubmit.co/ajax/hello@skyliftgroup.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        email: email || 'not provided',
        message: message || 'No message provided',
        _subject: `New Popup Lead: ${name} — America's Plumbing`,
        _template: 'table',
      }),
    })
      .then(r => r.json())
      .then(json => {
        if (!json.success) { setError('Something went wrong. Please call us directly.'); setLoading(false); return; }
        reportContactConversion();
        reportLead('popup');
        setLoading(false);
        setSubmitted(true);
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
      })
      .catch(() => {
        setError('Something went wrong. Please call us directly.');
        setLoading(false);
      });
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={dismiss}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(8,15,31,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'apPopupFade 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '420px', maxWidth: '100%',
          background: '#fff', borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(8,15,31,0.35)',
          fontFamily: 'var(--font-hanken), sans-serif',
          animation: 'apPopupUp 0.25s ease',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right,#C8202A,#1A52BE,#C8202A)' }} />

        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: '#f7f8fc', border: 'none', borderRadius: '50%',
            width: '32px', height: '32px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#5a5e72', zIndex: 1,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div style={{ padding: '40px 32px 32px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%', background: '#C8202A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px',
              }}>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l5 5 7-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#080f1f', marginBottom: '8px' }}>Thanks, we&apos;ll be in touch!</p>
              <p style={{ color: '#5a5e72', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Joe will call you back shortly. For emergencies call{' '}
                <a href={PHONE_HREF} style={{ color: '#C8202A', fontWeight: 700, textDecoration: 'none' }}>(949)&nbsp;379-0082</a>.
              </p>
            </div>
          ) : (
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '2px', background: '#C8202A' }} />
                <span style={{ color: '#C8202A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Free Estimate</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-newsreader), serif', fontSize: '1.6rem', fontWeight: 700, color: '#080f1f', lineHeight: 1.15, marginBottom: '8px' }}>
                Get a Fast, Free Plumbing Quote
              </h2>
              <p style={{ color: '#5a5e72', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Tell us what&apos;s going on and Joe will call you back within the hour.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Full Name *"
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Phone *"
                  type="tel"
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="What do you need help with?"
                  rows={3}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = '#C8202A')}
                  onBlur={e => (e.target.style.borderColor = '#e0e2ea')}
                />

                {error && <p style={{ color: '#C8202A', fontSize: '0.78rem', margin: 0 }}>{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: '#C8202A', color: '#fff',
                    border: 'none', borderRadius: '6px',
                    padding: '15px', fontSize: '0.92rem', fontWeight: 700,
                    letterSpacing: '0.03em', textTransform: 'uppercase',
                    cursor: loading ? 'wait' : 'pointer',
                    opacity: loading ? 0.75 : 1, transition: 'background 0.15s',
                    marginTop: '4px',
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#a81820'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#C8202A'; }}
                >
                  {loading ? 'Sending…' : 'Get My Free Quote'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes apPopupFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes apPopupUp { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
