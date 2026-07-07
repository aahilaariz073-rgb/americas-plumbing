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
    heroImage: '/blog-repipe-cost.jpg',
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
    heroImage: '/blog-burst-pipe.jpg',
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

  {
    slug: 'why-your-drains-keep-clogging-san-jacinto',
    title: 'Why Your Drains Keep Clogging (and How to Stop It for Good)',
    metaTitle: 'Why Do My Drains Keep Clogging? Causes & Fixes | San Jacinto',
    metaDescription:
      'Same drain clogging over and over? Here are the real reasons drains keep backing up in San Jacinto homes — and how to fix the cause, not just the symptom.',
    excerpt:
      'If you’re plunging the same drain every few weeks, the clog isn’t the problem — it’s a symptom. Here’s what’s really going on, and how to fix it for good.',
    date: '2026-07-10',
    author: 'Joseph Romero',
    category: 'Drains',
    readMins: 6,
    heroImage: '/blog-liquid-drain.jpg',
    heroAlt: 'Recurring drain clog being cleared by a licensed plumber in San Jacinto, CA',
    intent: 'Informational',
    primaryKeyword: 'why do my drains keep clogging',
    keywords: [
      'why do my drains keep clogging san jacinto',
      'drain keeps clogging in same spot',
      'recurring drain clog causes',
      'how to stop drains from clogging',
      'main line clog signs',
    ],
    sections: [
      {
        paras: [
          'A one-time clog is annoying. A drain that clogs again every few weeks is telling you something: whatever caused it was never actually removed. Clearing the surface blockage gets the water moving again, but if the underlying buildup or obstruction is still there, the clog always comes back.',
          'Here are the most common reasons drains keep clogging in San Jacinto homes — and what it takes to actually stop it.',
        ],
      },
      {
        h2: '1. Buildup on the pipe walls (not a single plug)',
        paras: [
          'Most stubborn clogs aren’t a tidy ball of hair you can pull out. They’re layers of grease, soap scum, and mineral scale coating the inside of the pipe, narrowing it over time. Snaking punches a hole through the middle, but the coating stays — so it re-closes quickly. Clearing the pipe walls completely is what breaks the cycle.',
        ],
      },
      {
        h2: '2. Hard-water mineral scale',
        paras: [
          'San Jacinto’s hard water leaves mineral scale inside pipes just like it does on your faucets. That scale gives grease and debris something to cling to, which is why drains in hard-water areas tend to clog faster and more often than the national norm.',
        ],
      },
      {
        h2: '3. Grease down the kitchen sink',
        paras: [
          'Grease goes down as a hot liquid and cools into a solid that coats the pipe. Even with hot water and soap, it builds up over time. It’s the number-one cause of repeat kitchen-drain clogs.',
        ],
      },
      {
        h2: '4. A problem in the main line',
        paras: [
          'If more than one fixture is slow at the same time — or you hear gurgling and smell sewage — the issue likely isn’t that one drain at all. It’s the main line everything empties into, and the usual culprits are deep grease/scale buildup or tree-root intrusion.',
        ],
        link: { text: 'See our drain cleaning service', href: '/services/drain-cleaning' },
      },
      {
        h2: '5. Tree roots',
        paras: [
          'Roots are drawn to the water and nutrients in sewer lines and work their way in through tiny joints and cracks. Once inside, they catch everything flowing past and rebuild into a clog within weeks of being cleared — until the roots themselves are removed.',
        ],
      },
      {
        h2: 'How to actually stop the cycle',
        list: [
          'Get a camera inspection — it shows exactly what and where the real cause is, so it’s fixed once',
          'Hydro jetting scours the pipe walls clean (grease, scale, and roots), not just a hole through the middle',
          'Keep grease out of the kitchen drain and use strainers to catch hair and food',
          'In hard-water homes, a water softener slows the scale that feeds repeat clogs',
        ],
        link: { text: 'Learn about hydro jetting', href: '/services/hydro-jetting' },
      },
    ],
    faqs: [
      {
        q: 'Why does my drain keep clogging in the same spot?',
        a: 'Because the real cause — buildup coating the pipe walls, scale, or a partial obstruction further down — was never fully removed. Snaking clears a path through the middle; the surrounding buildup re-closes it. A camera inspection finds the true cause so it can be cleared for good.',
      },
      {
        q: 'Will hydro jetting stop recurring clogs?',
        a: 'Usually, yes. Unlike snaking, hydro jetting scours the entire inside of the pipe — removing grease, scale, and roots — so there’s nothing left for the next clog to build on.',
      },
      {
        q: 'How do I know if it’s a main-line clog?',
        a: 'If several fixtures are slow or backing up at once, you hear gurgling, or you smell sewage, the problem is likely the main line, not a single drain. That’s worth a professional camera inspection.',
      },
    ],
    relatedServices: [
      { label: 'Drain Cleaning & Clog Removal', slug: 'drain-cleaning' },
      { label: 'Hydro Jetting', slug: 'hydro-jetting' },
      { label: 'Camera Inspection', slug: 'camera-inspection' },
    ],
    cta: {
      heading: 'Tired of clearing the same drain again and again?',
      text: 'We find the real cause with a camera inspection and clear it at the source — so it stays clear. Same-day drain service across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'signs-you-need-sewer-line-camera-inspection',
    title: 'Signs You Need a Sewer Line Camera Inspection',
    metaTitle: 'Signs You Need a Sewer Camera Inspection | San Jacinto',
    metaDescription:
      'Recurring backups, gurgling, or buying an older home? Here are the signs you need a sewer line camera inspection in San Jacinto — and what it finds.',
    excerpt:
      'A sewer camera inspection takes the guesswork out of what’s happening underground. Here’s when it’s worth doing — and what it can save you from.',
    date: '2026-07-13',
    author: 'Joseph Romero',
    category: 'Sewer',
    readMins: 6,
    heroImage: '/after-1.jpg',
    heroAlt: 'Sewer line camera inspection by a licensed plumber in San Jacinto, CA',
    intent: 'Commercial',
    primaryKeyword: 'sewer line camera inspection',
    keywords: [
      'sewer line camera inspection san jacinto',
      'do i need a sewer camera inspection',
      'sewer scope before buying a house',
      'recurring sewer backup causes',
      'sewer inspection riverside county',
    ],
    sections: [
      {
        paras: [
          'Your sewer line is the one pipe you can’t see — and the most expensive one to get wrong. A camera inspection runs a waterproof video camera down the line so we can see exactly what’s happening inside: the blockage, the cause, and the condition of the pipe. No digging, no guessing.',
          'Here are the situations where it’s genuinely worth doing.',
        ],
      },
      {
        h2: '1. The same backup keeps coming back',
        paras: [
          'If your main line backs up repeatedly no matter how many times it’s snaked, something deeper is wrong — roots, a collapsed section, or a belly in the line where waste collects. A camera shows which, so it’s fixed properly instead of patched again and again.',
        ],
      },
      {
        h2: '2. Multiple drains are slow or gurgling at once',
        paras: [
          'When several fixtures back up together, or toilets gurgle when you run a sink, the problem is usually the shared main line. A camera pinpoints the exact spot and cause.',
        ],
        link: { text: 'See our camera inspection service', href: '/services/camera-inspection' },
      },
      {
        h2: '3. You’re buying an older home',
        paras: [
          'This is one of the smartest inspections a buyer can get and one of the most overlooked. Many homes across San Jacinto and Riverside County were built decades ago with clay or cast-iron sewer lines that are now near the end of their life. A sewer scope before you buy can reveal a five-figure problem the standard home inspection won’t — giving you real negotiating power or a reason to walk away.',
        ],
      },
      {
        h2: '4. You have large trees in the yard',
        paras: [
          'Tree roots seek out sewer lines and invade through joints and cracks. If you have mature trees near the line’s path and any history of slow drains, a camera inspection confirms whether roots are the cause before they collapse the pipe.',
        ],
      },
      {
        h2: '5. Persistent sewage smell or soggy spots in the yard',
        paras: [
          'A sewage odor inside or out, or an unexplained wet, extra-green patch in the yard, can point to a cracked or leaking sewer line underground. A camera inspection locates the break precisely.',
        ],
      },
      {
        h2: 'What an inspection saves you',
        paras: [
          'The whole point is precision. Instead of digging exploratory holes or replacing more pipe than necessary, we see the exact location and nature of the problem and fix only what needs fixing. In many cases that means a targeted repair — or a trenchless fix that doesn’t tear up your yard at all.',
        ],
        link: { text: 'Explore trenchless sewer repair', href: '/services/trenchless-sewer' },
      },
    ],
    faqs: [
      {
        q: 'How does a sewer camera inspection work?',
        a: 'We feed a flexible, waterproof video camera into your sewer line and watch a live feed of the inside of the pipe. It shows the exact location and cause of any blockage or damage — roots, grease, cracks, bellies, or collapse — without any digging.',
      },
      {
        q: 'Should I get a sewer scope before buying a house?',
        a: 'For older homes, absolutely. Standard home inspections don’t look inside the sewer line, and a failing clay or cast-iron line can be a very expensive surprise. A sewer scope gives you the facts before you commit.',
      },
      {
        q: 'Does a camera inspection fix the problem?',
        a: 'No — it diagnoses it precisely so the repair is targeted and cost-effective. Depending on what it finds, the fix might be drain cleaning, hydro jetting, a spot repair, or trenchless replacement.',
      },
    ],
    relatedServices: [
      { label: 'Camera Inspection', slug: 'camera-inspection' },
      { label: 'Sewer Line Repair & Replacement', slug: 'sewer-line' },
      { label: 'Trenchless Sewer Repair', slug: 'trenchless-sewer' },
    ],
    cta: {
      heading: 'Not sure what’s happening in your sewer line?',
      text: 'A camera inspection gives you a clear answer — no digging, no guessing. Buying an older home or fighting recurring backups? Book one today across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'is-a-water-softener-worth-it-san-jacinto',
    title: 'Is a Water Softener Worth It in Hard-Water San Jacinto?',
    metaTitle: 'Is a Water Softener Worth It? San Jacinto Hard-Water Guide',
    metaDescription:
      'San Jacinto has hard water — but is a water softener actually worth it? Here’s what it protects, what it costs to run, and how to decide for your home.',
    excerpt:
      'Hard water is a fact of life here — but is a softener worth the investment? Here’s an honest look at what it protects and whether it pays off for your home.',
    date: '2026-07-16',
    author: 'Joseph Romero',
    category: 'Water Quality',
    readMins: 6,
    heroImage: '/plumb.jpg',
    heroAlt: 'Water softener installation by a licensed plumber in San Jacinto, CA',
    intent: 'Commercial',
    primaryKeyword: 'is a water softener worth it',
    keywords: [
      'is a water softener worth it san jacinto',
      'water softener benefits hard water',
      'water softener cost to run',
      'hard water riverside county',
      'water softener installation san jacinto',
    ],
    sections: [
      {
        paras: [
          'If you live in San Jacinto, you already live with hard water — the white scale on faucets and showerheads is the proof. The question isn’t whether your water is hard; it’s whether a water softener is worth installing to deal with it. Here’s an honest breakdown.',
        ],
      },
      {
        h2: 'What hard water is actually doing',
        paras: [
          'Hard water is high in dissolved calcium and magnesium. Those minerals don’t just spot your glassware — they build up as scale inside your pipes, water heater, dishwasher, and washing machine, and they react with soap so you use more of it and rinse less of it away.',
        ],
      },
      {
        h2: 'What a water softener protects',
        list: [
          'Your water heater — far less sediment and scale, which means better efficiency and a longer life',
          'Your pipes and fixtures — less scale buildup that narrows lines and feeds clogs',
          'Appliances — dishwashers and washing machines last longer and run better on softened water',
          'Skin, hair, and laundry — softened water rinses cleaner, so soap and detergent go further',
          'Cleaning time — far less scale and soap scum on glass, tile, and chrome',
        ],
        link: { text: 'See our water softener installation', href: '/services/water-softener' },
      },
      {
        h2: 'The honest costs',
        paras: [
          'A softener is an upfront equipment-and-installation cost, plus modest ongoing costs: salt (for traditional ion-exchange systems) and the water used during regeneration. Most homeowners find those running costs are more than offset by lower energy bills, fewer plumbing repairs, longer-lasting appliances, and less money spent on soap and cleaning products.',
        ],
      },
      {
        h2: 'Salt-based vs. salt-free',
        paras: [
          'Traditional salt-based softeners actually remove the hardness minerals through ion exchange — the most effective option for protecting plumbing and appliances. “Salt-free” conditioners don’t remove minerals; they alter them to reduce scale-sticking, with no salt and no regeneration. Which makes sense depends on your priorities, water hardness, and whether you want truly “soft” water or just less scale. We’ll help you choose rather than push one.',
        ],
        link: { text: 'Pairing it with a new water heater?', href: '/services/water-heater' },
      },
      {
        h2: 'So — is it worth it here?',
        paras: [
          'For most San Jacinto and Riverside County homes, yes. Because our water is genuinely hard, a softener does more here than it would in a soft-water region — it directly extends the life of your most expensive plumbing (your water heater and pipes) and cuts down the maintenance hard water demands. If you’re already replacing a water heater or dealing with recurring scale problems, it’s an especially smart time to add one.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a water softener worth it in San Jacinto?',
        a: 'For most homes here, yes. Our water is genuinely hard, so a softener meaningfully extends the life of your water heater, pipes, and appliances, reduces scale and clogs, and saves on soap and cleaning. The running costs are usually offset by those savings.',
      },
      {
        q: 'What does it cost to run a water softener?',
        a: 'Ongoing costs are modest — salt for traditional systems and the water used during regeneration. Most homeowners more than make that back through lower energy bills, fewer repairs, and longer-lasting appliances.',
      },
      {
        q: 'Salt-based or salt-free — which is better?',
        a: 'Salt-based systems actually remove hardness minerals and protect plumbing best. Salt-free conditioners reduce scale without removing minerals and need no salt. The right choice depends on your water and priorities, which we’ll walk you through.',
      },
    ],
    relatedServices: [
      { label: 'Water Softener & Filtration', slug: 'water-softener' },
      { label: 'Water Heater Installation & Replacement', slug: 'water-heater' },
      { label: 'Whole-Home Repiping', slug: 'repiping' },
    ],
    cta: {
      heading: 'Thinking about a water softener?',
      text: 'We’ll test your situation and recommend the right system — salt-based or salt-free — honestly. Free estimates on water softener installation across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'low-water-pressure-whole-house-san-jacinto',
    title: 'Low Water Pressure Throughout Your House? Here’s What’s Actually Wrong',
    metaTitle: 'Low Water Pressure Throughout the House | San Jacinto Causes & Fixes',
    metaDescription:
      'Water pressure low in every faucet and shower? Here are the real causes — from a failing pressure regulator to hidden leaks — and how to fix it in San Jacinto homes.',
    excerpt:
      'When every faucet in the house runs weak, it’s not your imagination — and it’s rarely something a store-bought showerhead fixes. Here’s what’s actually going on.',
    date: '2026-07-19',
    author: 'Joseph Romero',
    category: 'Water Pressure',
    readMins: 6,
    heroImage: '/blog-water-pressure.jpg',
    heroAlt: 'Modern shower fixture plumbing installation by a licensed plumber in San Jacinto, CA',
    intent: 'Informational',
    primaryKeyword: 'low water pressure whole house',
    keywords: [
      'low water pressure whole house san jacinto',
      'why is my water pressure low',
      'water pressure regulator failing',
      'low water pressure every faucet',
      'water pressure san jacinto ca',
    ],
    sections: [
      {
        paras: [
          'One weak showerhead is usually a clogged nozzle. But when every faucet, every shower, and every hose bib in the house runs low at the same time, the cause is bigger than any one fixture — and no amount of cleaning a showerhead is going to fix it.',
          'Here are the real causes of whole-house low pressure, roughly in order of how often we find them.',
        ],
      },
      {
        h2: 'A partially closed valve',
        paras: [
          'The simplest cause, and worth ruling out first: your main shutoff valve or the valve at the water meter isn’t fully open. This can happen after any plumbing work — including work by someone other than the original installer — if a valve was closed and not fully reopened. Check both before assuming something is broken.',
        ],
      },
      {
        h2: 'A failing pressure regulator',
        paras: [
          'Most homes have a pressure-reducing valve (PRV) where the main line enters the house, keeping city water pressure at a safe level for your plumbing. PRVs typically last 10 to 15 years. When one starts to fail, you’ll often see either consistently low pressure throughout the house, or pressure that swings unpredictably between fixtures and times of day. A failing PRV is a common, fixable cause of a whole-house pressure drop.',
        ],
      },
      {
        h2: 'Corroded or scale-clogged pipes',
        paras: [
          'Older galvanized steel pipes corrode from the inside over time, narrowing the passage water flows through. In San Jacinto’s hard water, mineral scale adds to the problem, gradually restricting pipes that were once wide open. This kind of pressure loss tends to develop slowly, over years, rather than appearing overnight.',
        ],
        link: { text: 'Learn about whole-home repiping', href: '/services/repiping' },
      },
      {
        h2: 'A hidden leak',
        paras: [
          'A leak — especially a slab leak — diverts water before it ever reaches your fixtures, which can show up as a sudden, unexplained drop in pressure throughout the house. If low pressure appeared suddenly rather than gradually, and especially if it’s paired with a higher water bill or damp flooring, a hidden leak is worth ruling out.',
        ],
        link: { text: 'See our leak detection service', href: '/services/leak-detection' },
      },
      {
        h2: 'High demand on the municipal supply',
        paras: [
          'Occasionally the cause isn’t your plumbing at all — heavy simultaneous usage in your neighborhood, or municipal system maintenance, can temporarily reduce supply pressure. This is usually short-lived and affects more than one household at a time.',
        ],
      },
      {
        h2: 'What normal pressure looks like',
        paras: [
          'Residential water pressure below 40 PSI is considered low; most homes run comfortably between 45 and 60 PSI. A plumber can check your actual pressure at the hose bib in a few minutes — a useful first step before diagnosing further, since it tells us whether we’re dealing with a true system-wide problem or something more isolated.',
        ],
      },
      {
        h2: 'How we diagnose it',
        paras: [
          'We start by testing pressure at the source and checking the regulator, then work through the possibilities above in order — valves, regulator, pipe condition, and leak detection if needed. Because a sudden pressure drop can point to something as serious as a hidden leak, it’s worth having a professional diagnosis rather than guessing.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is my water pressure low in every faucet at once?',
        a: 'Whole-house low pressure usually points to a partially closed main valve, a failing pressure regulator, corroded or scale-clogged pipes, or a hidden leak diverting water before it reaches your fixtures. A single weak fixture is usually a local clog; all of them at once is a system-wide cause.',
      },
      {
        q: 'What is a normal water pressure for a house?',
        a: 'Most homes run comfortably between 45 and 60 PSI. Below 40 PSI is generally considered low. A plumber can measure your actual pressure at a hose bib in a few minutes.',
      },
      {
        q: 'Can a hidden leak cause low water pressure?',
        a: 'Yes. A leak — including a slab leak — diverts water before it reaches your fixtures, which can cause a sudden, unexplained drop in pressure throughout the house, often along with a higher water bill.',
      },
    ],
    relatedServices: [
      { label: 'Leak Detection & Repair', slug: 'leak-detection' },
      { label: 'Whole-Home Repiping', slug: 'repiping' },
      { label: 'Water Line Repair & Replacement', slug: 'water-line-repair' },
    ],
    cta: {
      heading: 'Water pressure low throughout your home?',
      text: 'We’ll test your pressure, check the regulator, and rule out hidden leaks so you get a real diagnosis, not a guess. Free estimates across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'garbage-disposal-humming-not-working-san-jacinto',
    title: 'Garbage Disposal Humming But Not Working? Here’s the Fix',
    metaTitle: 'Garbage Disposal Humming But Not Spinning | San Jacinto Fix Guide',
    metaDescription:
      'Disposal humming but the blades won’t spin? Here’s what’s actually wrong — jam, overheating, or a seized motor — and how to safely fix it or know when to replace it.',
    excerpt:
      'A humming disposal isn’t dead — it’s trying to tell you something. Here’s what that sound means, what you can safely try, and when it’s time for a new unit.',
    date: '2026-07-22',
    author: 'Joseph Romero',
    category: 'Kitchen Plumbing',
    readMins: 5,
    heroImage: '/plumb.jpg',
    heroAlt: 'Licensed plumber repairing kitchen and drain plumbing in San Jacinto, CA',
    intent: 'Informational',
    primaryKeyword: 'garbage disposal humming not working',
    keywords: [
      'garbage disposal humming not spinning',
      'garbage disposal humming but not working',
      'garbage disposal reset button',
      'garbage disposal jammed fix',
      'garbage disposal repair san jacinto',
    ],
    sections: [
      {
        paras: [
          'A garbage disposal that hums when you flip the switch but doesn’t spin is one of the most common kitchen calls we get — and the good news is it’s often a quick, safe fix. That hum means the motor is getting power; something is just stopping the blades from turning.',
        ],
      },
      {
        h2: 'What the hum actually means',
        paras: [
          'A humming disposal almost always points to one of two things: the flywheel (the spinning plate the blades are mounted to) is physically stuck, or the motor has overheated and shut itself down as a safety measure. Either way, the motor itself is usually fine — which is why this is often fixable without a replacement.',
        ],
      },
      {
        h2: 'If it’s overheated',
        list: [
          'Turn off the power to the disposal at the switch and at the breaker',
          'Let it cool for 10–15 minutes',
          'Look for the small red reset button on the bottom of the unit',
          'Press it firmly — you should feel or hear a click',
          'Restore power and try it again',
        ],
      },
      {
        h2: 'If it’s jammed',
        paras: [
          'A jam is usually caused by something that shouldn’t have gone down the drain — a utensil, a fruit pit, fibrous food scraps, or a buildup of grease and debris on the shredding plate.',
        ],
        list: [
          'Turn off power at the switch AND the breaker — this step is not optional',
          'Most disposals have a hex-shaped hole at the bottom center for a manual crank wrench (often included with the unit)',
          'Insert the wrench and turn it firmly in both directions to free the flywheel',
          'Once it turns freely, restore power and test it',
        ],
      },
      {
        h2: 'Never do this',
        paras: [
          'Never put your hand into the disposal, even with the power off. If you don’t have the manual crank wrench, or the flywheel won’t budge, stop and call a plumber rather than reaching inside with a tool.',
        ],
      },
      {
        h2: 'When it’s not a jam or overheating',
        paras: [
          'If the reset button and manual crank don’t solve it, the issue may be electrical — a tripped breaker, a loose connection, or a failing switch — or the motor bearing may have seized for good. A seized motor bearing generally means the unit needs to be replaced rather than repaired.',
        ],
        link: { text: 'See our garbage disposal services', href: '/services/garbage-disposal' },
      },
      {
        h2: 'Preventing the next jam',
        list: [
          'Run cold water before, during, and after each use',
          'Avoid fibrous foods like celery, corn husks, and onion skins',
          'Never pour grease down the disposal — it hardens and coats the blades',
          'Grind ice occasionally to help clean the blades',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does my garbage disposal hum but not spin?',
        a: 'A hum with no spinning almost always means the flywheel is jammed or the motor has overheated and tripped its internal safety switch. Both are usually fixable — try the reset button after letting it cool, or free the flywheel with a manual crank wrench.',
      },
      {
        q: 'Where is the reset button on a garbage disposal?',
        a: 'It’s a small red button on the bottom of the unit, underneath the sink. Press it firmly after the disposal has cooled for 10–15 minutes; you should feel or hear a click.',
      },
      {
        q: 'Is it safe to fix a jammed disposal myself?',
        a: 'Yes, as long as you fully cut power at the switch and the breaker first, and use the manual crank wrench rather than your hand. If it won’t free up or you don’t have the wrench, call a plumber rather than reaching inside.',
      },
    ],
    relatedServices: [
      { label: 'Garbage Disposal Services', slug: 'garbage-disposal' },
      { label: 'Kitchen Plumbing Services', slug: 'kitchen-plumbing' },
      { label: 'Drain Cleaning & Clog Removal', slug: 'drain-cleaning' },
    ],
    cta: {
      heading: 'Disposal still humming after trying the reset?',
      text: 'We’ll diagnose it fast — repair it if we can, replace it only if we can’t. Same-day service across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'gas-line-safety-warning-signs-san-jacinto',
    title: 'Gas Line Safety: Warning Signs You Should Never Ignore',
    metaTitle: 'Gas Line Safety Warning Signs | San Jacinto Homeowner Guide',
    metaDescription:
      'Rotten-egg smell, hissing, dead plants near your gas line? Here are the warning signs of a gas leak every San Jacinto homeowner should know — and what to do immediately.',
    excerpt:
      'A gas leak gives you warning signs before it becomes an emergency. Here’s what to watch for, what to do the moment you notice something, and how safe installation prevents it.',
    date: '2026-07-25',
    author: 'Joseph Romero',
    category: 'Gas Lines',
    readMins: 6,
    heroImage: '/blog-gas-line-safety.webp',
    heroAlt: 'Licensed plumber Joseph Romero next to a home gas and water system in San Jacinto, CA',
    intent: 'BOFU',
    primaryKeyword: 'gas line warning signs',
    keywords: [
      'gas line warning signs san jacinto',
      'gas leak smell rotten eggs',
      'signs of a gas leak in house',
      'gas line installation permit california',
      'gas line repair san jacinto',
    ],
    sections: [
      {
        paras: [
          'Natural gas and propane are odorless in their raw form — utilities and suppliers add a distinct rotten-egg smell specifically so a leak is impossible to miss. That smell, along with a few other warning signs, is your early warning system. Knowing them, and acting on them immediately, is the single most important piece of gas line safety.',
        ],
      },
      {
        h2: 'The warning signs',
        list: [
          'A rotten-egg, sulfur, or skunk-like smell, indoors or in the yard',
          'A hissing or whistling sound near a gas line, meter, or appliance',
          'Dead or discolored vegetation in an otherwise healthy area of the yard, with no other explanation',
          'Bubbles in standing water or wet soil near the gas line',
          'A higher-than-usual gas bill with no change in usage',
          'Dust or dirt blowing from a spot in the yard, or a small dirt cloud near a gas line',
        ],
      },
      {
        h2: 'What to do the moment you notice any of these',
        list: [
          'Do not light a match, flip a light switch, use a phone, or create any spark',
          'Do not try to locate the leak yourself',
          'Get everyone out of the house immediately',
          'Once safely outside and away from the building, call your gas utility’s emergency line and 911',
          'Do not go back inside until the utility or a professional confirms it’s safe',
        ],
      },
      {
        h2: 'Why professional installation matters',
        paras: [
          'In California, gas line work requires a permit and inspection from the local building department — this isn’t bureaucracy for its own sake. Inspectors verify the pipe material, fittings, and pressure test before the line is buried or connected, catching problems before they become invisible leaks behind a wall or under a yard.',
          'A properly installed and permitted gas line is pressure-tested before it’s ever put into service, which is the real safeguard against future leaks — not just careful workmanship, but a verified, documented test.',
        ],
        link: { text: 'See our gas line installation & repair service', href: '/services/gas-line' },
      },
      {
        h2: 'A common local example: outdoor BBQ gas lines',
        paras: [
          'Running a gas line for an outdoor kitchen or BBQ island is one of the most common gas line requests we get — and one of the most commonly done without a permit. California fire code regulates how these lines and connections must be installed, and an unpermitted line skips the pressure test and inspection that catch a bad joint before it becomes a leak in your backyard.',
        ],
      },
      {
        h2: 'If you smell gas only occasionally',
        paras: [
          'A faint smell that comes and goes is still worth reporting and having checked — it doesn’t need to be constant or strong to indicate a real problem. Treat any recurring gas odor as a leak until a professional confirms otherwise.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What does a gas leak smell like?',
        a: 'Natural gas and propane are odorless on their own; suppliers add a chemical (mercaptan) that smells like rotten eggs, sulfur, or a skunk specifically so a leak is easy to notice. Any version of that smell should be treated as a possible leak.',
      },
      {
        q: 'What should I do if I smell gas in my house?',
        a: 'Don’t light anything, flip a switch, or use a phone inside. Get everyone out immediately, then call your gas utility’s emergency line and 911 from a safe distance. Don’t go back inside until a professional confirms it’s safe.',
      },
      {
        q: 'Do I need a permit to install a gas line for an outdoor BBQ?',
        a: 'In most California jurisdictions, yes — any gas line work requires a permit and inspection from the local building department. This ensures the line is pressure-tested before use, which is what actually prevents a future leak.',
      },
    ],
    relatedServices: [
      { label: 'Gas Line Repair & Installation', slug: 'gas-line' },
      { label: 'Emergency Plumbing', slug: 'emergency-plumbing' },
      { label: 'Water Heater Installation & Replacement', slug: 'water-heater' },
    ],
    cta: {
      heading: 'Need a gas line installed, repaired, or inspected?',
      text: 'Every gas line we run is permitted, pressure-tested, and inspected — no shortcuts. Free estimates across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'running-toilet-wasting-water-san-jacinto',
    title: 'Running Toilet Wasting Water? Here’s Why (and How to Fix It)',
    metaTitle: 'Running Toilet Causes & Fixes | San Jacinto Plumber Guide',
    metaDescription:
      'A running toilet can waste hundreds of gallons a day. Here’s what actually causes it — flapper, fill valve, or float — and how to fix it or know when to call a plumber.',
    excerpt:
      'That faint hiss from the toilet tank isn’t nothing — it can waste hundreds of gallons a day. Here’s what’s really causing it and how to make it stop.',
    date: '2026-07-28',
    author: 'Joseph Romero',
    category: 'Toilet Repair',
    readMins: 5,
    heroImage: '/blog-running-toilet.jpg',
    heroAlt: 'Licensed plumber installing a toilet in a San Jacinto, CA bathroom',
    intent: 'Informational',
    primaryKeyword: 'running toilet fix',
    keywords: [
      'running toilet fix san jacinto',
      'why does my toilet keep running',
      'toilet flapper vs fill valve',
      'toilet running water bill',
      'toilet repair san jacinto',
    ],
    sections: [
      {
        paras: [
          'A toilet that runs on and off, or hisses quietly after every flush, is one of the most common — and most ignored — plumbing problems in a home. It’s easy to tune out, but a running toilet can waste anywhere from tens to hundreds of gallons of water a day, and it usually comes down to one of three inexpensive parts.',
        ],
      },
      {
        h2: '1. A worn-out flapper',
        paras: [
          'The flapper is the rubber (or rubber-like) valve at the bottom of the tank that lifts when you flush and reseals afterward. Over time it warps, cracks, or stops sealing tightly — most commonly if it was never replaced with the exact right size and shape for your toilet model. A flapper that doesn’t seal lets water continuously trickle from the tank into the bowl, and the fill valve keeps refilling to compensate.',
        ],
      },
      {
        h2: '2. A fill valve that won’t shut off',
        paras: [
          'The fill valve controls how the tank refills after a flush. If it fails, it can keep running continuously or cycle on and off periodically even when no one has flushed. This is a different sound than a flapper leak — usually a more constant running noise rather than an intermittent hiss.',
        ],
      },
      {
        h2: '3. A misadjusted float',
        paras: [
          'The float tells the fill valve when to stop, based on water level. If it’s set too high, water continuously trickles into the overflow tube and down the drain — a slow, easy-to-miss leak that still adds up over weeks and months.',
        ],
      },
      {
        h2: 'The dye test — check which one you have',
        list: [
          'Remove the tank lid and add a few drops of food coloring to the tank water',
          'Don’t flush — wait about 15–20 minutes',
          'Check the bowl: if color has appeared without flushing, water is leaking past the flapper',
          'If the water level in the tank is at or above the overflow tube, the float or fill valve needs adjustment',
        ],
      },
      {
        h2: 'What it’s actually costing you',
        paras: [
          'A toilet that runs continuously can waste hundreds of gallons in a single day — enough to noticeably move your water bill within one billing cycle. Even a slow, intermittent leak adds up meaningfully over a month.',
        ],
      },
      {
        h2: 'When it’s a quick fix vs. a bigger issue',
        paras: [
          'Flappers and fill valves are inexpensive, commonly available parts, and replacing either is usually a straightforward repair. But if the toilet is older, the tank hardware is corroded, or you’ve replaced parts before without the running stopping, it may be time for a full toilet replacement rather than another patch.',
        ],
        link: { text: 'See our toilet repair & installation service', href: '/services/toilet-repair' },
      },
    ],
    faqs: [
      {
        q: 'How much water does a running toilet waste?',
        a: 'A continuously running toilet can waste hundreds of gallons in a single day. Even a slow, intermittent leak adds up to a meaningful amount over a month and often shows up as a noticeable jump in your water bill.',
      },
      {
        q: 'How do I know if it’s the flapper or the fill valve?',
        a: 'Add food coloring to the tank and wait 15–20 minutes without flushing. If color shows up in the bowl, the flapper isn’t sealing. If the tank water sits at or above the overflow tube, the float or fill valve needs adjustment.',
      },
      {
        q: 'Can I fix a running toilet myself?',
        a: 'Often, yes — flappers and fill valves are inexpensive and straightforward to replace. But if you’ve already replaced parts and it’s still running, or the toilet is old and its hardware is corroded, a full replacement may be the better fix.',
      },
    ],
    relatedServices: [
      { label: 'Toilet Repair & Installation', slug: 'toilet-repair' },
      { label: 'Bathroom Fixture Services', slug: 'fixture-installation' },
      { label: 'Bathroom Plumbing Remodel', slug: 'bathroom-remodel' },
    ],
    cta: {
      heading: 'Toilet won’t stop running?',
      text: 'We’ll diagnose the flapper, fill valve, or float and fix it right the first time — or recommend a replacement if that’s the smarter call. Free estimates across San Jacinto and Riverside County.',
    },
  },

  {
    slug: 'kitchen-bathroom-remodel-plumbing-checklist-san-jacinto',
    title: 'Planning a Kitchen or Bathroom Remodel? Talk to a Plumber First',
    metaTitle: 'Kitchen & Bathroom Remodel Plumbing Checklist | San Jacinto',
    metaDescription:
      'Before demo day, here’s what a plumber needs to know for a kitchen or bathroom remodel — layout changes, rough-in, permits, and what drives the cost.',
    excerpt:
      'The plumbing behind the walls decides whether your remodel goes smoothly or turns into a mid-project surprise. Here’s what to sort out before demo day.',
    date: '2026-07-31',
    author: 'Joseph Romero',
    category: 'Remodeling',
    readMins: 7,
    heroImage: '/blog-kitchen-remodel.jpg',
    heroAlt: 'Plumbing rough-in during a bathroom remodel in San Jacinto, CA',
    intent: 'Commercial',
    primaryKeyword: 'kitchen bathroom remodel plumbing',
    keywords: [
      'kitchen remodel plumbing san jacinto',
      'bathroom remodel plumbing checklist',
      'plumbing rough-in remodel',
      'moving plumbing fixtures remodel cost',
      'remodel plumbing permit california',
    ],
    sections: [
      {
        paras: [
          'Kitchen and bathroom remodels are consistently the most popular home improvement projects in Southern California — and in both, the plumbing behind the walls is the part that decides whether the project stays on schedule or stalls halfway through. Cabinets and tile are the part everyone sees; the rough-in is the part that has to be right before any of that goes in.',
          'Here’s what a plumber needs to know before demo day, and where remodel plumbing costs actually come from.',
        ],
      },
      {
        h2: 'Are you keeping the layout, or moving fixtures?',
        paras: [
          'This is the single biggest cost driver in a remodel. Keeping your sink, toilet, and tub in their existing locations means reconnecting to plumbing that’s already there. Moving a fixture — sliding an island sink to a new wall, relocating a toilet, adding a second sink — means running new supply and drain lines, which is a meaningfully bigger job than a like-for-like swap.',
        ],
      },
      {
        h2: 'What a kitchen remodel needs from a plumber',
        list: [
          'Sink and faucet rough-in for the new layout, including supply lines and shutoff valves',
          'Dishwasher supply and drain connection',
          'Garbage disposal wiring and drain tie-in',
          'Gas or water line for a pot filler, if you’re adding one',
          'Ice maker line for a new refrigerator location',
        ],
        link: { text: 'See our kitchen plumbing services', href: '/services/kitchen-plumbing' },
      },
      {
        h2: 'What a bathroom remodel needs from a plumber',
        list: [
          'Supply and drain rough-in for the tub, shower, toilet, and vanity',
          'Shower pan and drain installation before tile goes down',
          'Moving or adding a toilet flange if the layout changes',
          'Rough-in for any new fixtures — a second vanity sink, a freestanding tub, a bidet',
        ],
        link: { text: 'See our bathroom plumbing remodel service', href: '/services/bathroom-remodel' },
      },
      {
        h2: 'Old pipes behind the wall — deal with them now, not later',
        paras: [
          'A remodel is the one time your walls are already open, which makes it the cheapest opportunity you’ll have to address aging galvanized pipe, corroded fittings, or a water heater that’s near the end of its life. Discovering a plumbing problem after the tile is set means paying to open the wall again.',
        ],
        link: { text: 'Check whether your home needs a repipe', href: '/services/repiping' },
      },
      {
        h2: 'Permits — not optional, and not just paperwork',
        paras: [
          'Any plumbing rough-in change requires a permit and inspection from the local building department. This protects you: an inspector verifies the rough-in before it’s sealed behind drywall and tile, catching a bad connection while it’s still cheap and easy to fix. Skipping the permit to save time can turn into a real problem when you go to sell the house.',
        ],
      },
      {
        h2: 'A simple rule for sequencing',
        paras: [
          'Plumbing rough-in happens before drywall, before tile, and before cabinets. Bringing your plumber in during the planning phase — not after demo has already started — avoids the most common and most expensive remodel mistake: finding out a layout change isn’t straightforward after the walls are already open.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does moving a sink or toilet during a remodel cost a lot more?',
        a: 'Yes, generally. Keeping fixtures in their existing locations means reconnecting to plumbing that’s already there. Moving a fixture requires running new supply and drain lines, which is a meaningfully bigger job than a like-for-like replacement.',
      },
      {
        q: 'Should I replace old pipes during a remodel even if they aren’t leaking yet?',
        a: 'It’s worth strongly considering. A remodel is the cheapest opportunity you’ll have to address aging or corroded pipe, since the walls are already open. Waiting until they fail means paying to open the wall again later.',
      },
      {
        q: 'Do I need a permit for remodel plumbing work?',
        a: 'Yes, in most California jurisdictions any plumbing rough-in change requires a permit and inspection. This ensures the work is verified before it’s sealed behind drywall and tile, and matters if you ever sell the home.',
      },
    ],
    relatedServices: [
      { label: 'Bathroom Plumbing Remodel', slug: 'bathroom-remodel' },
      { label: 'Kitchen Plumbing Services', slug: 'kitchen-plumbing' },
      { label: 'Fixture Installation & Repair', slug: 'fixture-installation' },
    ],
    cta: {
      heading: 'Planning a kitchen or bathroom remodel?',
      text: 'Bring us in during planning, not after demo day. We’ll handle the rough-in, permits, and inspections so the rest of your remodel goes smoothly. Free estimates across San Jacinto and Riverside County.',
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
