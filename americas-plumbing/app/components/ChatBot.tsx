'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

const PHONE = '(949) 379-0082';
const PHONE_HREF = 'tel:+19493790082';

type Msg = {
  role: 'bot' | 'user';
  text: string;
  quickReplies?: string[];
  link?: { label: string; href: string };
};

const GREETING: Msg = {
  role: 'bot',
  text: "Hi! I'm the America's Plumbing assistant. How can I help you today?",
  quickReplies: ['I have an emergency 🚨', 'Get a free estimate', 'What services do you offer?', 'Areas you serve'],
};

const SERVICES_LIST = [
  { name: 'Emergency Plumbing', slug: 'emergency-plumbing' },
  { name: 'Leak Detection', slug: 'leak-detection' },
  { name: 'Drain Cleaning', slug: 'drain-cleaning' },
  { name: 'Water Heater', slug: 'water-heater' },
  { name: 'Sewer Line', slug: 'sewer-line' },
  { name: 'Repiping', slug: 'repiping' },
  { name: 'Camera Inspection', slug: 'camera-inspection' },
  { name: 'Hydro Jetting', slug: 'hydro-jetting' },
  { name: 'Slab Leak Repair', slug: 'slab-leak' },
  { name: 'Water Softener', slug: 'water-softener' },
  { name: 'Garbage Disposal', slug: 'garbage-disposal' },
  { name: 'Toilet Repair', slug: 'toilet-repair' },
  { name: 'Water Line Repair', slug: 'water-line-repair' },
];

const AREAS = ['San Jacinto', 'Hemet', 'Menifee', 'Murrieta', 'Temecula', 'Perris', 'Beaumont', 'Banning', 'Moreno Valley', 'Riverside', 'Lake Elsinore', 'Wildomar', 'San Bernardino', 'Redlands', 'Rancho Cucamonga'];

function getBotReply(input: string): Msg | Msg[] {
  const t = input.toLowerCase();

  if (/emergency|urgent|flood|burst|overfl|no water|gas leak/.test(t)) {
    return {
      role: 'bot',
      text: `We're available 24/7 for emergencies. Call us right now — we'll pick up.`,
      quickReplies: ['Other question'],
      link: { label: `Call ${PHONE}`, href: PHONE_HREF },
    };
  }

  if (/estimate|quote|price|cost|how much|charge|fee/.test(t)) {
    return {
      role: 'bot',
      text: 'We offer free estimates on all jobs. Just tell us what the issue is and we\'ll give you a straight number — no surprise fees.',
      quickReplies: ['Leak / pipe issue', 'Clogged drain', 'Water heater', 'Sewer / main line', 'Call to schedule'],
    };
  }

  if (/service|offer|do you|what can|fix|repair|install/.test(t)) {
    return {
      role: 'bot',
      text: 'We handle all residential and commercial plumbing. Here are our main services:',
      quickReplies: SERVICES_LIST.slice(0, 5).map(s => s.name).concat('See all services →'),
    };
  }

  if (/area|city|locat|where|serve|cover|near me/.test(t)) {
    return {
      role: 'bot',
      text: `We serve 18+ cities across Riverside County and South Orange County, including ${AREAS.slice(0, 6).join(', ')}, and more.`,
      quickReplies: ['See all areas →', 'Other question'],
    };
  }

  if (/leak|pipe|drip|water damage|wet spot|slab|pinhole/.test(t)) {
    return {
      role: 'bot',
      text: "Leaks can cause serious damage fast. We do leak detection, slab leak repair, and full repiping. Want us to come take a look?",
      quickReplies: [`Call ${PHONE}`, 'Get a free estimate', 'More questions'],
    };
  }

  if (/drain|clog|slow|back up|backup|blocked|toilet/.test(t)) {
    return {
      role: 'bot',
      text: "We clear drains fast — from simple clogs to full hydro jetting for stubborn buildup. Same-day service available.",
      quickReplies: [`Call ${PHONE}`, 'Get a free estimate', 'More questions'],
    };
  }

  if (/water heater|hot water|no hot|water tank|tankless/.test(t)) {
    return {
      role: 'bot',
      text: "We repair and replace all water heater brands — tank and tankless. If you have no hot water, we can usually get out same-day.",
      quickReplies: [`Call ${PHONE}`, 'Get a free estimate', 'More questions'],
    };
  }

  if (/sewer|main line|sewage|smell|odor/.test(t)) {
    return {
      role: 'bot',
      text: "Sewer issues are urgent. We use camera inspection to diagnose exactly what's going on, then repair or replace with minimal disruption.",
      quickReplies: [`Call ${PHONE}`, 'Get a free estimate', 'More questions'],
    };
  }

  if (/license|certif|insur|bonded|c-36|0784091/.test(t)) {
    return {
      role: 'bot',
      text: "We're fully licensed (C-36 #0784091), bonded (SC6049105), and carry full liability insurance. You can verify our license on the CSLB website.",
      quickReplies: ['Other question'],
    };
  }

  if (/hours|open|available|weekend|sunday|saturday|night/.test(t)) {
    return {
      role: 'bot',
      text: "We're available 24/7 for emergencies. Regular appointments run 7 days a week — call us and we'll find a time that works for you.",
      quickReplies: [`Call ${PHONE}`, 'Other question'],
    };
  }

  if (/thank|thanks|great|awesome|perfect|helpful/.test(t)) {
    return {
      role: 'bot',
      text: "Happy to help! Don't hesitate to reach out if anything comes up. We're here 24/7.",
      quickReplies: ['Ask another question'],
    };
  }

  return {
    role: 'bot',
    text: "I'm not sure I caught that. You can ask me about our services, service areas, pricing, or just call us directly — we're always happy to chat.",
    quickReplies: ['I have an emergency 🚨', 'Get a free estimate', 'What services do you offer?', `Call ${PHONE}`],
  };
}

function handleQuickReply(reply: string): Msg | Msg[] | null {
  if (reply.includes('emergency') || reply.includes('🚨')) return getBotReply('emergency');
  if (reply.includes('estimate') || reply.includes('quote')) return getBotReply('price estimate');
  if (reply.includes('services') || reply.includes('See all services')) {
    return {
      role: 'bot',
      text: 'Here are all our services. Click any to learn more:',
      quickReplies: SERVICES_LIST.map(s => s.name),
    };
  }
  if (reply.includes('Areas') || reply.includes('See all areas')) return getBotReply('areas');
  if (reply.includes('Leak') || reply.includes('leak') || reply.includes('pipe')) return getBotReply('leak pipe');
  if (reply.includes('drain') || reply.includes('Clogged')) return getBotReply('drain clog');
  if (reply.includes('Water heater')) return getBotReply('water heater');
  if (reply.includes('Sewer') || reply.includes('main line')) return getBotReply('sewer main line');
  if (reply.includes('Call to schedule') || reply.startsWith('Call ')) return null; // handled via link
  if (reply.includes('Other question') || reply.includes('More questions') || reply.includes('Ask another')) {
    return {
      role: 'bot',
      text: "Sure! What else can I help with?",
      quickReplies: ['I have an emergency 🚨', 'Get a free estimate', 'What services do you offer?', 'Areas you serve'],
    };
  }
  // Service name clicked — link to service page
  const svc = SERVICES_LIST.find(s => s.name === reply);
  if (svc) {
    return {
      role: 'bot',
      text: `Here's the full details for ${svc.name}. Or call us to get a quote right now.`,
      quickReplies: ['Ask another question'],
      link: { label: `View ${svc.name} →`, href: `/services/${svc.slug}` },
    };
  }
  return getBotReply(reply);
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const pushBot = useCallback((reply: Msg | Msg[] | null) => {
    if (!reply) return;
    const replies = Array.isArray(reply) ? reply : [reply];
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, ...replies]);
    }, 600);
  }, []);

  const send = useCallback((text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Handle phone quick replies as external link — no bot reply needed
    if (text.startsWith('Call ') && text.includes(PHONE)) {
      window.location.href = PHONE_HREF;
      return;
    }

    const reply = handleQuickReply(text) ?? getBotReply(text);
    pushBot(reply);
  }, [pushBot]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '56px', height: '56px', borderRadius: '50%',
          background: '#C8202A', border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(200,32,42,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" />
          </svg>
        )}
        {!open && unread > 0 && (
          <span style={{
            position: 'absolute', top: '2px', right: '2px',
            width: '18px', height: '18px', borderRadius: '50%',
            background: '#080f1f', color: '#fff',
            fontSize: '0.65rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid #fff',
          }}>{unread}</span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '92px', right: '24px', zIndex: 9998,
          width: '340px', maxWidth: 'calc(100vw - 32px)',
          borderRadius: '12px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(8,15,31,0.22)',
          display: 'flex', flexDirection: 'column',
          fontFamily: 'var(--font-hanken), sans-serif',
          animation: 'chatSlideUp 0.22s ease',
        }}>

          {/* Header */}
          <div style={{ background: '#080f1f', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#C8202A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" />
                </svg>
              </div>
              <span style={{ position: 'absolute', bottom: 1, right: 1, width: '9px', height: '9px', borderRadius: '50%', background: '#22c55e', border: '2px solid #080f1f' }} />
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.2 }}>America&apos;s Plumbing</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem' }}>Typically replies instantly · 24/7</div>
            </div>
            <a href={PHONE_HREF} style={{ marginLeft: 'auto', background: '#C8202A', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '5px 10px', borderRadius: '4px', textDecoration: 'none', flexShrink: 0 }}>
              Call Now
            </a>
          </div>

          {/* Messages */}
          <div style={{ background: '#f7f8fc', flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '360px', minHeight: '200px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '6px' }}>
                <div style={{
                  background: msg.role === 'user' ? '#C8202A' : '#fff',
                  color: msg.role === 'user' ? '#fff' : '#080f1f',
                  padding: '9px 13px', borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  fontSize: '0.83rem', lineHeight: 1.55, maxWidth: '82%',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}>
                  {msg.text}
                </div>

                {msg.link && (
                  <a href={msg.link.href} style={{
                    display: 'inline-block', background: '#080f1f', color: '#fff',
                    padding: '7px 14px', borderRadius: '6px', fontSize: '0.78rem',
                    fontWeight: 700, textDecoration: 'none',
                  }}>
                    {msg.link.label}
                  </a>
                )}

                {msg.quickReplies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
                    {msg.quickReplies.map(qr => (
                      <button
                        key={qr}
                        onClick={() => send(qr)}
                        style={{
                          background: '#fff', border: '1px solid #d0d3de',
                          borderRadius: '20px', padding: '5px 11px',
                          fontSize: '0.75rem', fontWeight: 600, color: '#080f1f',
                          cursor: 'pointer', transition: 'background 0.15s, border-color 0.15s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#C8202A'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#C8202A'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#fff'; (e.currentTarget as HTMLButtonElement).style.color = '#080f1f'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#d0d3de'; }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ background: '#fff', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {[0, 1, 2].map(d => (
                    <span key={d} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c0c3ce', display: 'inline-block', animation: `chatDot 1.2s ${d * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} style={{ background: '#fff', borderTop: '1px solid #e8eaf0', padding: '10px 12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message…"
              style={{
                flex: 1, border: '1px solid #e0e2ea', borderRadius: '20px',
                padding: '8px 14px', fontSize: '0.82rem', outline: 'none',
                color: '#080f1f', background: '#f7f8fc',
                fontFamily: 'var(--font-hanken), sans-serif',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: input.trim() ? '#C8202A' : '#e0e2ea',
                border: 'none', cursor: input.trim() ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, transition: 'background 0.15s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <div style={{ background: '#fff', textAlign: 'center', padding: '6px', borderTop: '1px solid #f0f1f5', fontSize: '0.65rem', color: '#b0b3c0' }}>
            Powered by America&apos;s Plumbing · <a href={PHONE_HREF} style={{ color: '#C8202A', textDecoration: 'none', fontWeight: 600 }}>{PHONE}</a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatDot {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40%            { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
