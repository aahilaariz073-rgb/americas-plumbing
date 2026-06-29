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
    heroImage: '/blog-water-heater.jpg',
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
    heroImage: '/blog-liquid-drain.jpg',
    heroAlt: 'Liquid drain cleaner poured into a sink — why plumbers advise against it',
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
    heroImage: '/blog-slab-leak.webp',
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

  {
    slug: 'tankless-vs-tank-water-heater-san-jacinto',
    title: 'Tankless vs. Tank Water Heater: Which Is Right for a San Jacinto Home?',
    metaTitle: 'Tankless vs. Tank Water Heater | San Jacinto Buyer’s Guide',
    metaDescription:
      'Tankless or traditional tank? Compare cost, lifespan, hot-water capacity, and how San Jacinto’s hard water affects each — so you choose the right water heater.',
    excerpt:
      'Replacing your water heater and torn between tankless and a traditional tank? Here’s an honest, local comparison — including how our hard water affects both.',
    date: '2026-07-01',
    author: 'Joseph Romero',
    category: 'Water Heaters',
    readMins: 7,
    heroImage: '/blog-water-heater.jpg',
    heroAlt: 'Tankless and tank water heater comparison for San Jacinto, CA homes',
    intent: 'Commercial',
    primaryKeyword: 'tankless vs tank water heater',
    keywords: [
      'tankless vs tank water heater san jacinto',
      'is a tankless water heater worth it',
      'tankless water heater hard water',
      'water heater replacement san jacinto',
      'tankless water heater pros and cons',
    ],
    sections: [
      {
        paras: [
          'When it’s time to replace a water heater, the first decision is the big one: stick with a traditional tank, or switch to tankless? Both are good choices in the right home — the “best” one depends on your household, your budget, and, here in San Jacinto, your water.',
          'Here’s a straight comparison of how they differ, what each costs you over time, and the local hard-water factor most online guides leave out.',
        ],
      },
      {
        h2: 'How they actually work',
        paras: [
          'A traditional tank heater keeps 40–50+ gallons of water hot around the clock so it’s ready when you need it. A tankless (or “on-demand”) unit heats water only as it flows through, so it never runs out — but it can only heat so many gallons per minute at once.',
        ],
      },
      {
        h2: 'Upfront cost vs. long-term cost',
        paras: [
          'Tank heaters cost less to buy and install, which is why they’re still the most common choice. Tankless units cost more upfront — both the equipment and the installation, which sometimes needs gas-line or venting upgrades — but they’re more energy-efficient month to month and typically last longer.',
          'The rule of thumb: a tank is the lower-upfront-cost option; tankless is the lower-lifetime-cost option if you stay in the home long enough to earn back the difference.',
        ],
        link: { text: 'See water heater installation options', href: '/services/water-heater' },
      },
      {
        h2: 'Lifespan',
        paras: [
          'A well-maintained tank heater generally lasts about 8–12 years. A tankless unit often lasts 20 years or more. That longer lifespan is a big part of the long-term value argument for tankless — provided it’s maintained.',
        ],
      },
      {
        h2: 'Hot-water capacity',
        list: [
          'Tank: delivers a large volume at once (great for back-to-back showers + laundry), but once the tank is drained you wait for it to reheat',
          'Tankless: never “runs out,” but has a flow-rate limit — very high simultaneous demand can outpace a single unit',
          'Big household with heavy overlapping use? Sizing matters more than the tank-vs-tankless label',
        ],
      },
      {
        h2: 'The San Jacinto hard-water factor (important)',
        paras: [
          'This is where local advice beats generic advice. Our inland water is hard, and minerals are tough on both types — but in different ways. Tank heaters collect sediment at the bottom and need regular flushing. Tankless units develop scale on the heat exchanger and need periodic descaling to keep working efficiently and stay under warranty.',
          'Bottom line: whichever you choose, hard water means maintenance isn’t optional here. Many local homeowners pair a new heater with a water softener to protect the investment and cut down on descaling and sediment.',
        ],
        link: { text: 'Learn about water softeners', href: '/services/water-softener' },
      },
      {
        h2: 'So which should you pick?',
        paras: [
          'Choose a tank if you want the lowest upfront cost, have very high simultaneous hot-water demand, or aren’t planning to stay in the home long. Choose tankless if you want endless hot water, long lifespan, lower energy bills, and to reclaim the floor space — and you’re comfortable with the higher install cost.',
          'There’s no universally “right” answer, which is exactly why we walk every customer through it based on their actual home and usage before quoting. We install and service both.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a tankless water heater worth it in San Jacinto?',
        a: 'For many homeowners, yes — endless hot water, a 20+ year lifespan, and lower energy bills. The trade-offs are a higher upfront cost and the need for periodic descaling because of our hard water. We’ll help you weigh it against a tank based on your household.',
      },
      {
        q: 'Does hard water ruin tankless water heaters?',
        a: 'It won’t ruin one that’s maintained. Hard water causes scale on the heat exchanger, so tankless units need periodic descaling. Many local homeowners add a water softener to reduce buildup and protect the unit.',
      },
      {
        q: 'Can you replace a tank water heater with a tankless one?',
        a: 'Yes. It sometimes requires gas-line, electrical, or venting adjustments depending on the unit and your home. We assess that during the free estimate so there are no surprises.',
      },
    ],
    relatedServices: [
      { label: 'Water Heater Installation & Replacement', slug: 'water-heater' },
      { label: 'Water Heater Repair', slug: 'water-heater-repair' },
      { label: 'Water Softener & Filtration', slug: 'water-softener' },
    ],
    cta: {
      heading: 'Not sure which water heater fits your home?',
      text: 'We’ll look at your household’s hot-water demand and your budget, then recommend honestly — tank or tankless. Free estimates, same-day service across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'whole-home-repipe-cost-riverside-county',
    title: 'How Much Does Whole-Home Repiping Cost in Riverside County?',
    metaTitle: 'Whole-Home Repipe Cost in Riverside County | What to Expect',
    metaDescription:
      'What drives the cost of repiping a home in Riverside County — pipe material, home size, access — plus the signs you actually need it. Honest, no-pressure guide.',
    excerpt:
      'Repiping is a big-ticket job, so the first question is always “what will it cost?” Here’s an honest breakdown of what drives the price — and how to know if you even need it.',
    date: '2026-07-04',
    author: 'Joseph Romero',
    category: 'Repiping',
    readMins: 7,
    heroImage: '/before-1.jpg',
    heroAlt: 'Whole-home repiping project by a licensed plumber in Riverside County, CA',
    intent: 'BOFU',
    primaryKeyword: 'whole home repipe cost riverside county',
    keywords: [
      'whole home repipe cost riverside county',
      'how much does repiping cost san jacinto',
      'repipe cost pex vs copper',
      'signs you need to repipe your house',
      'whole house repiping cost',
    ],
    sections: [
      {
        paras: [
          'Whole-home repiping — replacing all the water supply lines in your house — is one of the larger plumbing investments a homeowner makes. So it’s fair to want a sense of the cost before you call anyone.',
          'The honest answer is that it varies widely, because the price depends on your specific home. Below is what actually drives the number, so you can understand any quote you get — and why a real on-site estimate is the only way to get a firm price.',
        ],
      },
      {
        h2: 'What determines the cost',
        list: [
          'Home size & number of bathrooms — more fixtures and longer pipe runs mean more labor and material',
          'Pipe material — PEX is generally more affordable to install; copper costs more but some homeowners prefer it',
          'Slab vs. crawlspace vs. two-story — how accessible your pipes are has a big impact on labor',
          'Wall access & finishes — opening and patching drywall, tile, or stucco adds to the job',
          'Permits & inspection — proper repipes are permitted and inspected, which is a feature, not a corner to cut',
        ],
        link: { text: 'See our whole-home repiping service', href: '/services/repiping' },
      },
      {
        h2: 'Why we don’t quote a flat price online',
        paras: [
          'You’ll see national “average” repipe numbers online, but they’re close to meaningless for your house. A compact single-story home on a slab and a two-story home with multiple bathrooms can differ enormously. Anyone giving you a firm price without seeing the home is guessing — and that guess usually gets “revised” once work starts.',
          'Our approach is a free, in-person assessment and a written, upfront quote. You’ll know the real number before any work begins, and we won’t start until you’ve approved it.',
        ],
      },
      {
        h2: 'PEX vs. copper: how it affects price',
        paras: [
          'PEX is flexible, resists scale and corrosion well (a real advantage in our hard water), and is typically faster and less expensive to install. Copper is rigid, long-proven, and generally costs more in both material and labor. Both are excellent when installed correctly; we’ll walk you through the trade-offs for your home rather than pushing one.',
        ],
      },
      {
        h2: 'Signs you may actually need a repipe',
        list: [
          'Recurring pinhole leaks or slab leaks — fixing them one at a time starts costing more than replacing the system',
          'Galvanized steel pipes — common in older homes and prone to internal corrosion and pressure loss',
          'Discolored or rusty water, especially on first draw in the morning',
          'Chronically low water pressure throughout the house',
          'Water that takes forever to run clear or has a metallic taste',
        ],
        link: { text: 'Have leaks first? Start with leak detection', href: '/services/leak-detection' },
      },
      {
        h2: 'Is it worth it?',
        paras: [
          'If you’re chasing repeated leaks in aging or galvanized plumbing, a repipe usually pays for itself in stopped damage, restored pressure, cleaner water, and peace of mind — and it’s a strong selling point if you ever list the home. If you’ve only had one isolated issue, a targeted repair may be all you need. We’ll tell you honestly which camp you’re in.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does it cost to repipe a house in Riverside County?',
        a: 'It varies widely based on home size, number of bathrooms, pipe material (PEX vs. copper), and how accessible the pipes are. That’s why we give a free on-site assessment and a firm written quote rather than a vague online figure — so the price you’re told is the price you pay.',
      },
      {
        q: 'How long does a whole-home repipe take?',
        a: 'Many homes are completed in a day or two, depending on size and access. We patch the wall openings and keep disruption to a minimum.',
      },
      {
        q: 'PEX or copper — which is better?',
        a: 'Both are excellent when installed properly. PEX is flexible, resists scale well in hard water, and usually costs less to install; copper is rigid and long-proven but costs more. We’ll explain the trade-offs for your specific home.',
      },
    ],
    relatedServices: [
      { label: 'Whole-Home Repiping', slug: 'repiping' },
      { label: 'Leak Detection & Repair', slug: 'leak-detection' },
      { label: 'Water Line Repair & Replacement', slug: 'water-line-repair' },
    ],
    cta: {
      heading: 'Want a real repipe price for your home?',
      text: 'Skip the online guesswork — we’ll assess your home in person and give you a firm, written, no-obligation quote. Free estimates across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'burst-pipe-what-to-do-first-5-minutes',
    title: 'Burst Pipe? Here’s Exactly What to Do in the First 5 Minutes',
    metaTitle: 'Burst Pipe? What to Do First | Emergency Steps | San Jacinto',
    metaDescription:
      'A burst pipe floods fast. Follow these step-by-step actions in the first 5 minutes to stop the water and limit damage — then call for emergency plumbing.',
    excerpt:
      'A burst pipe can dump gallons a minute. What you do in the first five minutes makes the difference between a cleanup and a catastrophe. Save these steps now.',
    date: '2026-07-07',
    author: 'Joseph Romero',
    category: 'Emergencies',
    readMins: 5,
    heroImage: '/after-1.jpg',
    heroAlt: 'Emergency burst pipe repair by a 24/7 plumber in San Jacinto, CA',
    intent: 'BOFU',
    primaryKeyword: 'what to do burst pipe',
    keywords: [
      'what to do burst pipe',
      'how to stop a burst pipe',
      'burst pipe emergency san jacinto',
      'where is my water shut off valve',
      '24/7 emergency plumber san jacinto',
    ],
    sections: [
      {
        paras: [
          'A burst pipe is one of the few plumbing problems where minutes genuinely matter — water can pour out faster than you’d believe and reach floors, walls, and belongings in no time. If it’s happening right now, here’s exactly what to do, in order.',
        ],
      },
      {
        h2: '1. Shut off your main water valve',
        paras: [
          'This is the single most important step. Find your main shut-off valve and turn it clockwise until it stops. It’s usually where the water line enters the house — near the front hose bib, in the garage, or at the meter near the street. Turning it off stops water to the entire house and stops the flood at its source.',
        ],
      },
      {
        h2: '2. Turn off the water heater',
        paras: [
          'Once the main is off, switch off your water heater to keep it from running dry and being damaged. For a gas unit, set it to “pilot”; for electric, switch off its breaker.',
        ],
      },
      {
        h2: '3. Cut the power if water is near electrical',
        paras: [
          'If water is near outlets, appliances, or your electrical panel, shut off electricity to those areas at the breaker — but only if you can reach the panel without standing in water. If you can’t do it safely, stay clear and tell the plumber and, if needed, an electrician.',
        ],
      },
      {
        h2: '4. Open faucets to drain the system',
        paras: [
          'With the main off, open a few cold taps (and flush a toilet) to drain the remaining water out of the pipes. This relieves pressure and reduces how much water keeps escaping from the burst.',
        ],
      },
      {
        h2: '5. Document everything, then call',
        paras: [
          'Quickly photograph the burst and any water damage before you start cleaning up — it helps with insurance. Then call a 24/7 emergency plumber. Move valuables and soak up standing water while you wait.',
        ],
        link: { text: 'Call our 24/7 emergency plumbing', href: '/services/emergency-plumbing' },
      },
      {
        h2: 'Find your shut-off valve BEFORE you need it',
        paras: [
          'The worst time to go hunting for your main shut-off is while water is spraying. Take two minutes today to locate yours and make sure it turns. In our area, older valves can seize up — if yours won’t budge, that’s worth having serviced before an emergency, not during one.',
        ],
        link: { text: 'Aging or failing pipes? See repiping', href: '/services/repiping' },
      },
    ],
    faqs: [
      {
        q: 'What’s the first thing to do when a pipe bursts?',
        a: 'Shut off your main water valve immediately — turn it clockwise until it stops. It’s usually near where the water line enters the house, in the garage, or at the meter by the street. That stops water to the whole house and ends the flood at its source.',
      },
      {
        q: 'Should I turn off electricity during a burst pipe?',
        a: 'If water is near outlets, appliances, or the electrical panel, shut off power to those areas at the breaker — but only if you can reach the panel without standing in water. If you can’t do it safely, stay clear and call a professional.',
      },
      {
        q: 'Do you offer 24/7 emergency plumbing in San Jacinto?',
        a: 'Yes. We respond to burst pipes and other plumbing emergencies around the clock. Call (949) 379-0082 any time and we’ll dispatch as quickly as possible.',
      },
    ],
    relatedServices: [
      { label: 'Emergency Plumbing', slug: 'emergency-plumbing' },
      { label: 'Leak Detection & Repair', slug: 'leak-detection' },
      { label: 'Whole-Home Repiping', slug: 'repiping' },
    ],
    cta: {
      heading: 'Plumbing emergency right now? Don’t wait.',
      text: 'We dispatch 24/7 for burst pipes and flooding across San Jacinto and Riverside County. Shut off your water, then call us — we’ll get there fast.',
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

// ── Scheduled publishing ──
// A post is "live" only on or after its `date`. Future-dated posts stay hidden
// from the index, sitemap, and RSS, and 404 directly — then publish themselves
// automatically once their date passes (pages use ISR `revalidate`, so the date
// is re-checked periodically without a manual redeploy).
export function isPublished(post: BlogPost, now: Date = new Date()): boolean {
  return new Date(post.date + 'T00:00:00') <= now;
}

// Published posts, newest first.
export function publishedPostsByDate(): BlogPost[] {
  return posts.filter(p => isPublished(p)).sort((a, b) => (a.date < b.date ? 1 : -1));
}
