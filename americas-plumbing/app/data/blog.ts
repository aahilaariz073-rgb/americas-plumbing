// ──────────────────────────────────────────────────────────────
// Blog content. Every post is fact-checked, aligned to a real service
// we offer, and geo-targeted to San Jacinto / Riverside County.
// Hero images reference REAL files in /public — never invent visuals.
// ──────────────────────────────────────────────────────────────

export interface BlogSection {
  h2?: string;
  h3?: string;
  paras?: string[];
  list?: string[];
  // Optional in-content link to a service page (internal linking for SEO)
  link?: { text: string; href: string };
}

export interface BlogPost {
  slug: string;
  title: string;          // H1 / display title
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;           // ISO publish date
  author: string;
  category: string;
  readMins: number;
  heroImage: string;      // must exist in /public
  heroAlt: string;
  intent: 'Informational' | 'Commercial' | 'BOFU';
  primaryKeyword: string;
  keywords: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; slug: string }[];
  cta: { heading: string; text: string };
}

export const posts: BlogPost[] = [
  {
    slug: 'water-heater-making-noise-hard-water-san-jacinto',
    title: 'Why Your Water Heater Is Making Noise — and What Hard Water Has to Do With It',
    metaTitle: 'Why Is My Water Heater Making Noise? San Jacinto Hard Water Guide',
    metaDescription:
      'Popping or rumbling water heater? In San Jacinto’s hard water, it’s usually sediment. Learn what the sounds mean, what to do, and when to repair vs. replace.',
    excerpt:
      'That popping or rumbling sound isn’t your imagination. In hard-water areas like San Jacinto and Riverside County, it’s almost always sediment — and here’s what it’s telling you.',
    date: '2026-06-16',
    author: 'Joseph Romero',
    category: 'Water Heaters',
    readMins: 6,
    heroImage: '/plumb.jpg',
    heroAlt: 'Water heater maintenance by a licensed plumber in San Jacinto, CA',
    intent: 'Informational',
    primaryKeyword: 'water heater making noise',
    keywords: [
      'water heater making noise san jacinto',
      'water heater popping sound hard water',
      'water heater sediment riverside county',
      'how to flush a water heater',
      'water heater rumbling noise',
    ],
    sections: [
      {
        paras: [
          'If your water heater has started popping, rumbling, or crackling, you’re not hearing it break — you’re hearing it work harder than it should. In San Jacinto and across Riverside County, where the municipal water is notably hard, the cause is almost always the same: sediment built up at the bottom of the tank.',
          'Here’s what those sounds actually mean, what you can safely do about it, and how to tell when a noisy heater is a maintenance issue versus a sign it’s time to replace the unit.',
        ],
      },
      {
        h2: 'What the noise actually is',
        paras: [
          'Hard water carries dissolved calcium and magnesium. Every time your heater warms a tank of water, a little of that mineral content settles out and collects on the bottom of the tank as sediment. Over months and years, that layer thickens.',
          'When the burner (or element) heats the tank, water gets trapped underneath that sediment layer and boils. The popping and rumbling you hear is steam bubbles forcing their way up through the hardened mineral crust. The sediment also insulates the water from the heat source, so the unit runs longer and hotter to do the same job.',
        ],
      },
      {
        h2: 'Why San Jacinto and Riverside County homes are especially prone to it',
        paras: [
          'Inland Riverside County water is hard — higher in calcium and magnesium than coastal supplies. That means sediment accumulates faster here than it would in many other parts of Southern California. If you’ve ever seen white scale on a faucet or showerhead, that’s the same mineral content building up inside your water heater where you can’t see it.',
          'The practical result: water heaters in our area often start showing sediment symptoms earlier in their lifespan, which makes regular maintenance more important locally than the manufacturer’s generic schedule suggests.',
        ],
      },
      {
        h2: 'What a noisy water heater is costing you',
        list: [
          'Higher energy bills — the unit works harder and longer to heat through the sediment layer',
          'Less hot water — sediment takes up space that used to hold heated water',
          'Shorter lifespan — the extra heat stress wears out the tank and heating components faster',
          'Risk of leaks — long-term overheating can weaken the tank from the bottom up',
        ],
      },
      {
        h2: 'Can you fix it yourself? Flushing the tank',
        paras: [
          'For a unit that’s still in good shape, flushing the tank to clear loose sediment is the standard fix. In general terms it means shutting off power or gas to the heater, connecting a hose to the drain valve, and draining the tank to flush out the sediment before refilling.',
          'A word of caution: on older units, the drain valve and tank can be fragile, and a flush can occasionally reveal a leak that the sediment was effectively plugging. If your heater is more than a few years old or you’re not comfortable with the shut-off steps, it’s worth having it done professionally so a small job doesn’t turn into a flooded garage.',
        ],
        link: { text: 'See our water heater repair service', href: '/services/water-heater-repair' },
      },
      {
        h2: 'Repair or replace? A simple rule of thumb',
        paras: [
          'Noise alone usually means maintenance, not replacement. But age matters. Most tank water heaters last roughly 8–12 years, and hard water can push that toward the lower end. If your unit is well into that range and you’re also seeing rusty water, a tank that won’t hold temperature, or moisture around the base, repair stops making financial sense.',
          'Our honest approach is repair-first: if a flush, a new element, or a thermostat will get you several more good years, that’s what we’ll recommend. When a unit is genuinely at the end of its life, we’ll tell you that too — and walk you through tank vs. tankless options.',
        ],
        link: { text: 'Compare installation & replacement options', href: '/services/water-heater' },
      },
    ],
    faqs: [
      {
        q: 'Is a noisy water heater dangerous?',
        a: 'A popping or rumbling sound from sediment is usually not an immediate danger, but it does mean the unit is running inefficiently and aging faster. If you also notice leaking, a burning smell, or no hot water, shut it off and call a plumber.',
      },
      {
        q: 'How often should I flush my water heater in San Jacinto?',
        a: 'Because our water is hard, flushing once a year is a reasonable target — more often than the manufacturer’s generic recommendation. Regular flushing clears sediment and noticeably extends the life of the unit.',
      },
      {
        q: 'Will a water softener help my water heater?',
        a: 'Yes. Reducing the calcium and magnesium in your water slows sediment buildup, which protects the water heater along with your pipes and fixtures. It’s a common upgrade for hard-water homes in our area.',
      },
    ],
    relatedServices: [
      { label: 'Water Heater Installation & Replacement', slug: 'water-heater' },
      { label: 'Water Heater Repair', slug: 'water-heater-repair' },
      { label: 'Water Softener & Filtration', slug: 'water-softener' },
    ],
    cta: {
      heading: 'Noisy water heater? Get it checked before it fails.',
      text: 'We’ll diagnose the sediment, flush or repair what we can, and only recommend replacement when it truly makes sense. Free estimates, same-day service across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'why-plumbers-say-never-use-liquid-drain-cleaner',
    title: 'Why Plumbers Tell You to Never Use Liquid Drain Cleaner',
    metaTitle: 'Why Plumbers Say Never Use Liquid Drain Cleaner | San Jacinto',
    metaDescription:
      'Store-bought drain cleaner can damage your pipes and rarely fixes the real problem. Here’s why San Jacinto plumbers warn against it — and what to do instead.',
    excerpt:
      'It’s the first thing most people reach for under the sink — and the one thing plumbers wish you wouldn’t. Here’s the honest reason chemical drain cleaner does more harm than good.',
    date: '2026-06-18',
    author: 'Joseph Romero',
    category: 'Drains',
    readMins: 5,
    heroImage: '/before-1.jpg',
    heroAlt: 'Clogged drain pipe before professional drain cleaning in San Jacinto, CA',
    intent: 'Informational',
    primaryKeyword: 'should you use liquid drain cleaner',
    keywords: [
      'why not use liquid drain cleaner',
      'is drain cleaner bad for pipes',
      'drain cleaner alternatives san jacinto',
      'professional drain cleaning san jacinto',
      'chemical drain cleaner damage',
    ],
    sections: [
      {
        paras: [
          'When a sink or shower starts draining slowly, the first move for most homeowners is a bottle of liquid drain cleaner. It’s cheap, it’s at every grocery store, and it promises to dissolve the clog overnight. So why does almost every licensed plumber tell you not to use it?',
          'The short answer: it can damage your plumbing, it’s hard on you, and it usually doesn’t fix the actual cause of the clog. Here’s the full picture.',
        ],
      },
      {
        h2: '1. It’s hard on your pipes',
        paras: [
          'Chemical drain cleaners work by generating heat through an aggressive chemical reaction to eat through the blockage. That heat and corrosiveness doesn’t stop at the clog — it also attacks the pipe itself. Over time, repeated use can soften and weaken older metal pipes and degrade the seals and joints in plumbing of any age.',
          'If the clog doesn’t clear, you’re often left with a pipe full of caustic chemicals sitting against your plumbing until someone has to deal with it.',
        ],
      },
      {
        h2: '2. It rarely fixes the real problem',
        paras: [
          'Most stubborn clogs aren’t a simple plug of hair or grease you can dissolve. They’re buildup along the pipe walls, a partial obstruction deeper in the line, or in worst cases tree-root intrusion in the main line. Chemical cleaner might punch a small hole through the blockage so water drains again — but the underlying buildup is still there, and the clog comes right back.',
          'That’s the pattern we see constantly: the same drain clogging again every few weeks because the cause was never actually removed.',
        ],
      },
      {
        h2: '3. It makes the eventual repair messier',
        paras: [
          'When a chemically-treated drain finally needs a plumber, that caustic water has to be cleared safely before any real work can begin. It’s an avoidable complication on what might otherwise be a quick job.',
        ],
      },
      {
        h2: 'What to do instead',
        list: [
          'For minor grease buildup, very hot water and a little dish soap is gentler and often enough',
          'A drain snake or hand auger physically removes the clog instead of just burning a hole through it',
          'For recurring or main-line clogs, professional drain snaking clears the blockage at the source',
          'For heavy grease, scale, or tree roots, hydro jetting scours the pipe walls completely clean',
        ],
        link: { text: 'See our drain cleaning service', href: '/services/drain-cleaning' },
      },
      {
        h2: 'When it’s time to call a plumber',
        paras: [
          'If a drain clogs repeatedly, if multiple fixtures are slow at the same time, or if you hear gurgling and smell sewage, the problem is deeper than a bottle can reach — those are signs of a main-line issue. A camera inspection shows exactly what’s going on so it gets fixed once, not patched over and over.',
        ],
        link: { text: 'Learn about hydro jetting for tough clogs', href: '/services/hydro-jetting' },
      },
    ],
    faqs: [
      {
        q: 'Does liquid drain cleaner really damage pipes?',
        a: 'It can. The heat and corrosiveness that breaks down a clog also stresses the pipe, seals, and joints — especially with repeated use or on older plumbing. Mechanical clearing (snaking or hydro jetting) removes the clog without that risk.',
      },
      {
        q: 'What’s the safest way to clear a slow drain at home?',
        a: 'For mild buildup, hot water with dish soap or a hand-operated drain snake is safer and more effective than chemicals. If the clog keeps returning, it’s a sign the real cause is deeper and needs professional attention.',
      },
      {
        q: 'Why does my drain keep clogging in the same spot?',
        a: 'Repeat clogs usually mean buildup on the pipe walls or a partial obstruction further down the line that was never fully removed. A camera inspection pinpoints the cause so it can be cleared properly.',
      },
    ],
    relatedServices: [
      { label: 'Drain Cleaning & Clog Removal', slug: 'drain-cleaning' },
      { label: 'Hydro Jetting', slug: 'hydro-jetting' },
      { label: 'Camera Inspection', slug: 'camera-inspection' },
    ],
    cta: {
      heading: 'Drain clogging again and again? Let’s clear it for good.',
      text: 'We clear the clog at the source — not with chemicals — and use camera inspection to find out why it happened. Same-day drain service across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'slab-leak-warning-signs-san-jacinto-homeowners',
    title: '7 Warning Signs of a Slab Leak Every San Jacinto Homeowner Should Know',
    metaTitle: '7 Slab Leak Warning Signs | San Jacinto & Riverside County',
    metaDescription:
      'A slab leak hides under your foundation — but it leaves clues. Learn the 7 warning signs San Jacinto homeowners should never ignore, and what to do next.',
    excerpt:
      'Slab leaks happen out of sight, under your foundation — but they almost always leave warning signs first. Catch these early and you can save thousands in damage.',
    date: '2026-06-20',
    author: 'Joseph Romero',
    category: 'Leaks',
    readMins: 7,
    heroImage: '/after-1.jpg',
    heroAlt: 'Slab leak detection and pipe repair by a licensed plumber in San Jacinto, CA',
    intent: 'BOFU',
    primaryKeyword: 'slab leak warning signs',
    keywords: [
      'slab leak signs san jacinto',
      'how to tell if you have a slab leak',
      'slab leak detection riverside county',
      'signs of a foundation water leak',
      'slab leak repair san jacinto',
    ],
    sections: [
      {
        paras: [
          'A slab leak is a water leak in the pipes running underneath your home’s concrete foundation. Because it’s hidden, it can run for weeks or months — quietly driving up your water bill and damaging your foundation — before anyone notices.',
          'Older neighborhoods across San Jacinto and Riverside County are especially prone to them: decades of shifting soil, ground movement, and water-pressure changes are hard on the aging copper lines common in homes built from the 1960s through the 1990s. The good news is that slab leaks almost always announce themselves. Here are the seven signs to watch for.',
        ],
      },
      {
        h2: '1. An unexplained spike in your water bill',
        paras: [
          'A leak under the slab runs constantly. If your usage habits haven’t changed but your bill jumps noticeably, that water is going somewhere — and a hidden leak is one of the most common explanations.',
        ],
      },
      {
        h2: '2. The sound of running water when everything is off',
        paras: [
          'Turn off every faucet and appliance. If you still hear water running or trickling, especially near the floor, it can be water moving through a pipe break beneath the slab.',
        ],
      },
      {
        h2: '3. Warm or hot spots on the floor',
        paras: [
          'A leak in a hot-water line under the slab can warm the floor above it. If one area of your tile or flooring is unexpectedly warm underfoot, note exactly where — it helps pinpoint the leak.',
        ],
      },
      {
        h2: '4. Cracks in flooring or walls',
        paras: [
          'As water erodes the soil under the foundation, the slab can shift. That movement shows up as new cracks in floor tile, drywall, or around door frames that don’t close the way they used to.',
        ],
      },
      {
        h2: '5. Low water pressure',
        paras: [
          'If water is escaping through a break in the line, less of it reaches your fixtures. A sudden, unexplained drop in pressure throughout the house can point to a leak under the slab.',
        ],
      },
      {
        h2: '6. Damp, warped, or discolored flooring',
        paras: [
          'Water wicking up through the slab can warp wood floors, loosen tile, or leave damp patches and discoloration on carpet — often with no spill to explain it.',
        ],
      },
      {
        h2: '7. A musty smell or mold',
        paras: [
          'Constant moisture under the foundation creates the perfect conditions for mold and mildew. A persistent musty odor — especially near the floor or in lower levels — is a red flag worth investigating.',
        ],
        link: { text: 'See our leak detection service', href: '/services/leak-detection' },
      },
      {
        h2: 'What to do if you suspect a slab leak',
        paras: [
          'Don’t wait. The longer a slab leak runs, the more it costs — both on your water bill and in foundation and flooring damage. Professional leak detection uses non-invasive electronic and acoustic equipment to locate the leak precisely, so the repair is targeted instead of tearing up your whole floor.',
          'Depending on the location and the condition of the pipe, the fix might be a spot repair, a re-route of that line, or — if the plumbing is old and failing in multiple places — whole-home repiping. We’ll find it first, then walk you through the options honestly.',
        ],
        link: { text: 'Learn about whole-home repiping', href: '/services/repiping' },
      },
    ],
    faqs: [
      {
        q: 'How serious is a slab leak?',
        a: 'Serious enough to act on quickly. Left alone, it wastes water continuously and can undermine your foundation and ruin flooring. Caught early, it’s usually a targeted repair — which is why recognizing the warning signs matters.',
      },
      {
        q: 'Can you find a slab leak without breaking the floor?',
        a: 'Yes. We use non-invasive electronic leak detection and acoustic listening equipment to pinpoint the leak’s location first, so any repair is precise rather than exploratory.',
      },
      {
        q: 'Why are slab leaks common in San Jacinto and Riverside County?',
        a: 'Shifting soil, ground movement, and decades of pressure changes stress the aging copper lines in homes built from the 1960s through the 1990s — which describes a large share of housing across the area.',
      },
    ],
    relatedServices: [
      { label: 'Leak Detection & Repair', slug: 'leak-detection' },
      { label: 'Whole-Home Repiping', slug: 'repiping' },
      { label: 'Emergency Plumbing', slug: 'emergency-plumbing' },
    ],
    cta: {
      heading: 'Think you might have a slab leak? Find out for sure.',
      text: 'Our non-invasive leak detection pinpoints the problem fast — no guesswork, no tearing up your floor. Free estimates and same-day service across San Jacinto and Riverside County.',
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

// Newest first
export const postsByDate = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
