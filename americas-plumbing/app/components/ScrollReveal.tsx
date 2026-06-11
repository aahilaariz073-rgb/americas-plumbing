'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', style = {} }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const activate = () => el.classList.add('on');

    // Already in viewport?
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight + 60) {
      activate();
      return;
    }

    if (!('IntersectionObserver' in window)) {
      activate();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activate();
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 60px 0px' }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
