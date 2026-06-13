'use client';
import { useState, FormEvent } from 'react';

const PHONE_HREF = 'tel:+19493790082';

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #e0e2ea',
  padding: '14px 0',
  fontSize: '0.9rem',
  color: '#080f1f',
  background: 'transparent',
  outline: 'none',
  fontFamily: 'inherit',
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Name and phone are required.');
      return;
    }
    setError('');
    setLoading(true);
    // Wire to GHL: replace setTimeout with fetch() POST to your webhook
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (dismissed) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px',
      fontFamily: 'var(--font-hanken), sans-serif',
    }}>

      {/* Form card */}
      {open && (
        <div style={{
          width: '320px', maxWidth: 'calc(100vw - 48px)',
          background: '#fff', borderRadius: '10px',
          boxShadow: '0 8px 40px rgba(8,15,31,0.18)',
          overflow: 'hidden',
          animation: 'chatUp 0.22s ease',
        }}>
          {/* Header */}
          <div style={{
            background: '#080f1f', padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '8px', height: '8px', background: '#C8202A', borderRadius: '2px', flexShrink: 0 }} />
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>America&apos;s Plumbing</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', lineHeight: 1, color: 'rgba(255,255,255,0.5)' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '24px 20px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%', background: '#C8202A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l5 5 7-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: '#080f1f', marginBottom: '6px' }}>We&apos;ll be in touch!</p>
                <p style={{ color: '#5a5e72', fontSize: '0.83rem', lineHeight: 1.6 }}>
                  Joe will call you back shortly. For emergencies call{' '}
                  <a href={PHONE_HREF} style={{ color: '#C8202A', fontWeight: 700, textDecoration: 'none' }}>(949)&nbsp;379-0082</a>.
                </p>
              </div>
            ) : (
              <>
                <p style={{ color: '#5a5e72', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Enter your question below and a representative will get right back to you.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Name *"
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderBottomColor = '#C8202A')}
                      onBlur={e => (e.target.style.borderBottomColor = '#e0e2ea')}
                    />
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <input
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="Phone *"
                      type="tel"
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderBottomColor = '#C8202A')}
                      onBlur={e => (e.target.style.borderBottomColor = '#e0e2ea')}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="How can we help?"
                      rows={3}
                      style={{ ...inputStyle, resize: 'none', paddingTop: '14px' }}
                      onFocus={e => (e.target.style.borderBottomColor = '#C8202A')}
                      onBlur={e => (e.target.style.borderBottomColor = '#e0e2ea')}
                    />
                  </div>

                  {error && (
                    <p style={{ color: '#C8202A', fontSize: '0.75rem', marginBottom: '10px' }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: '#C8202A', color: '#fff',
                      border: 'none', borderRadius: '6px',
                      padding: '14px', fontSize: '0.88rem', fontWeight: 700,
                      cursor: loading ? 'wait' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      opacity: loading ? 0.75 : 1, transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#a81820'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#C8202A'; }}
                  >
                    {loading ? 'Sending…' : (
                      <>
                        Send
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2l5 5-5 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Pill trigger */}
      <div style={{
        display: 'flex', alignItems: 'center',
        background: '#fff', borderRadius: '999px',
        boxShadow: '0 4px 20px rgba(8,15,31,0.15)',
        overflow: 'hidden',
      }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '12px 18px 12px 16px',
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#080f1f', fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 600,
          }}
        >
          <div style={{
            width: '30px', height: '30px', borderRadius: '50%',
            background: '#080f1f',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" />
            </svg>
          </div>
          Have a question?
        </button>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          style={{
            background: 'none', border: 'none', borderLeft: '1px solid #e8eaf0',
            cursor: 'pointer', padding: '12px 14px',
            color: '#9b9eb0', display: 'flex', alignItems: 'center',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes chatUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
