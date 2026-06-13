function Ring({ children }: { children: React.ReactNode }) {
  return (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" stroke="#111827" strokeWidth="5"
        strokeDasharray="48 9" strokeLinecap="round" strokeDashoffset="-14" />
      <circle cx="40" cy="40" r="25" fill="#111827" />
      {children}
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  'drain-cleaning': <Ring>
    <path fill="white" d="M40 27c0 0-9 13-9 19a9 9 0 0018 0c0-6-9-19-9-19z" />
  </Ring>,

  'garbage-disposal': <Ring>
    <circle cx="40" cy="40" r="6" fill="white" />
    <rect x="38.5" y="27" width="3" height="7" rx="1.5" fill="white" />
    <rect x="38.5" y="46" width="3" height="7" rx="1.5" fill="white" />
    <rect x="27" y="38.5" width="7" height="3" rx="1.5" fill="white" />
    <rect x="46" y="38.5" width="7" height="3" rx="1.5" fill="white" />
    <rect x="31" y="31" width="3" height="7" rx="1.5" fill="white" transform="rotate(45 32.5 34.5)" />
    <rect x="46" y="31" width="3" height="7" rx="1.5" fill="white" transform="rotate(-45 47.5 34.5)" />
  </Ring>,

  'water-heater': <Ring>
    <rect x="33" y="26" width="14" height="22" rx="3" fill="white" />
    <rect x="37" y="48" width="6" height="5" rx="1" fill="white" />
    <circle cx="40" cy="37" r="5" fill="#111827" />
    <path fill="white" d="M40 33c0 0-3 3.5-3 5.5a3 3 0 006 0c0-2-3-5.5-3-5.5z" />
  </Ring>,

  'camera-inspection': <Ring>
    <rect x="27" y="33" width="24" height="16" rx="3" fill="white" />
    <polygon points="35,33 38,27 42,27 45,33" fill="white" />
    <circle cx="40" cy="41" r="5" fill="#111827" />
    <circle cx="40" cy="41" r="2" fill="white" opacity="0.45" />
    <circle cx="50" cy="36.5" r="2" fill="#111827" />
  </Ring>,

  'hydro-jetting': <Ring>
    <rect x="26" y="36" width="15" height="8" rx="3" fill="white" />
    <path d="M43 36L53 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M43 40L55 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M43 44L53 50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </Ring>,

  'sewer-line': <Ring>
    <rect x="27" y="30" width="26" height="20" rx="2" fill="none" stroke="white" strokeWidth="2.5" />
    <line x1="27" y1="37" x2="53" y2="37" stroke="white" strokeWidth="2" />
    <line x1="27" y1="43" x2="53" y2="43" stroke="white" strokeWidth="2" />
    <line x1="34" y1="30" x2="34" y2="50" stroke="white" strokeWidth="2" />
    <line x1="40" y1="30" x2="40" y2="50" stroke="white" strokeWidth="2" />
    <line x1="46" y1="30" x2="46" y2="50" stroke="white" strokeWidth="2" />
  </Ring>,

  'bathroom-fixtures': <Ring>
    <rect x="34" y="28" width="12" height="8" rx="2" fill="white" />
    <rect x="31" y="35" width="18" height="10" rx="2" fill="white" />
    <ellipse cx="40" cy="47" rx="11" ry="6" fill="white" />
  </Ring>,

  'water-line-repair': <Ring>
    <rect x="24" y="37" width="32" height="6" rx="3" fill="white" />
    <path fill="white" d="M46 28c-2.8 0-5 2.2-5 5 0 .8.2 1.5.6 2.2L33 43.5l2 2 8.5-8.5c.7.4 1.5.6 2.2.6 2.8 0 5-2.2 5-5 0-.5-.1-1-.2-1.4l-2.4 2.4-1.4-1.4 2.4-2.4c-.5-.1-1-.2-1.4-.2z" />
  </Ring>,

  'leak-detection': <Ring>
    <circle cx="37" cy="37" r="9" fill="none" stroke="white" strokeWidth="3" />
    <path d="M43.5 43.5L52 52" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path fill="white" d="M37 33c0 0-2.5 3-2.5 5.5a2.5 2.5 0 005 0c0-2.5-2.5-5.5-2.5-5.5z" />
  </Ring>,

  'gas-line': <Ring>
    <path fill="white" d="M40 26c0 0-2 5-2 9-3-2-3-6-3-6-4 4-5 8-5 11a10 10 0 0020 0c0-6-4-9-5-9 0 0 0-3-5-5z" />
  </Ring>,

  'emergency-plumbing': <Ring>
    <path fill="white" d="M43 26L34 42h7l-5 14 15-18h-8l6-12z" />
  </Ring>,

  'fixture-installation': <Ring>
    <path fill="white" d="M47 27c-3.3 0-6 2.7-6 6 0 .9.2 1.8.6 2.6L29 48l3 3 13-13c.8.4 1.7.6 2.6.6 3.3 0 6-2.7 6-6 0-.6-.1-1.1-.3-1.6l-3.2 3.2-1.8-1.8 3.2-3.2c-.5-.2-1-.3-1.6-.3z" />
  </Ring>,

  'repiping': <Ring>
    <rect x="24" y="36" width="10" height="8" rx="2" fill="white" />
    <rect x="46" y="36" width="10" height="8" rx="2" fill="white" />
    <path d="M34 40 Q37 33 40 40 Q43 47 46 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
  </Ring>,

  'water-heater-repair': <Ring>
    <rect x="34" y="26" width="12" height="20" rx="2" fill="white" />
    <rect x="37" y="46" width="6" height="4" rx="1" fill="white" />
    <path d="M44 30l5-3M44 36h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="40" cy="36" r="3.5" fill="#111827" />
    <path d="M38.5 34.5c0 0-1 1.5-1 2.5a1.5 1.5 0 003 0c0-1-1-2.5-1-2.5z" fill="white" />
  </Ring>,

  'toilet-repair': <Ring>
    <ellipse cx="40" cy="47" rx="12" ry="7" fill="white" />
    <rect x="33" y="31" width="14" height="18" rx="3" fill="white" />
    <rect x="35" y="28" width="10" height="6" rx="2" fill="white" />
    <circle cx="40" cy="34" r="1.5" fill="#111827" />
  </Ring>,

  'water-softener': <Ring>
    <path fill="white" d="M40 27c0 0-7 9-7 14a7 7 0 0014 0c0-5-7-14-7-14z" />
    <rect x="30" y="46" width="20" height="4" rx="1" fill="white" opacity="0.5" />
    <path d="M35 41h10M36 44h8" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
  </Ring>,

  'trenchless-sewer': <Ring>
    <rect x="25" y="37" width="30" height="6" rx="3" fill="white" />
    <path d="M33 34v-5M40 33v-4M47 34v-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="33" cy="28" r="2" fill="white" />
    <circle cx="40" cy="28" r="2" fill="white" />
    <circle cx="47" cy="28" r="2" fill="white" />
    <path d="M33 43v5M40 44v4M47 43v5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </Ring>,

  'bathroom-remodel': <Ring>
    <rect x="26" y="38" width="28" height="14" rx="3" fill="white" />
    <path d="M26 38 Q26 30 34 30 L34 38" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
    <rect x="34" y="27" width="5" height="4" rx="1" fill="white" />
    <line x1="30" y1="52" x2="30" y2="56" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="52" x2="50" y2="56" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </Ring>,

  'kitchen-plumbing': <Ring>
    <rect x="27" y="34" width="26" height="18" rx="2" fill="white" />
    <rect x="30" y="37" width="10" height="12" rx="1" fill="#111827" />
    <rect x="43" y="37" width="7" height="12" rx="1" fill="#111827" />
    <rect x="38" y="27" width="4" height="10" rx="2" fill="white" />
    <path d="M34 27 Q40 24 46 27" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
  </Ring>,
};

export function ServiceIcon({ slug, size = 72 }: { slug: string; size?: number }) {
  const icon = icons[slug];
  if (!icon) return null;
  return <>{icon}</>;
}
