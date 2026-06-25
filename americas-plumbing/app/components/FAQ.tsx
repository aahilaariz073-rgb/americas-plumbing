'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { faqs } from '@/app/data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: '#f7f8fc', padding: '100px 28px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <ScrollReveal style={{ marginBottom: '56px' }}>
          <div style={{
            color: '#C8202A', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px'
          }}>
            FAQ
          </div>
          <h2 style={{
            fontFamily: 'var(--font-newsreader), serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700,
            color: '#080f1f', lineHeight: 1.1
          }}>
            Common Questions
          </h2>
        </ScrollReveal>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid #e0e2ea' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    padding: '22px 0', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: '#080f1f', lineHeight: 1.45 }}>
                    {item.q}
                  </span>
                  <span style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: '1px solid #e0e2ea', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem',
                    background: isOpen ? '#C8202A' : 'transparent',
                    color: isOpen ? '#fff' : '#C8202A',
                    transition: 'background 0.2s, color 0.2s'
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease'
                }}>
                  <p style={{ color: '#5a5e72', fontSize: '0.95rem', lineHeight: 1.7, paddingBottom: '22px' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
