export interface Area {
  slug: string;
  city: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: string[];
  landmarks: string[];
  zipCodes: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export const areas: Area[] = [
  {
    slug: 'irvine',
    city: 'Irvine',
    county: 'Orange County',
    metaTitle: 'Plumber in Irvine, CA | Same-Day Service | America\'s Plumbing',
    metaDescription: 'Licensed plumber in Irvine, CA. America\'s Plumbing offers same-day service, 24/7 emergency response, and upfront pricing. C-36 Licensed. Call (949) 379-0082.',
    h1: 'Plumber in Irvine, CA — Same-Day & 24/7 Emergency Service',
    intro: 'America\'s Plumbing is your trusted local plumber in Irvine, CA. We\'ve served Irvine homeowners and businesses for over 10 years, delivering honest, licensed plumbing work with upfront pricing and same-day availability. Whether you\'re in Woodbridge, Turtle Rock, Northwood, or anywhere across Irvine, we can be at your door fast.',
    body: [
      'Irvine is one of the most carefully planned cities in the United States, and its homes range from 1970s ranch-style properties in older villages to modern new construction in Great Park Neighborhoods. That means our Irvine customers face a wide range of plumbing needs — from aging galvanized pipes in established neighborhoods to high-end fixture installations in new builds.',
      'Common plumbing issues we handle in Irvine include slab leaks (very common in older Irvine homes built on concrete slab foundations), water heater replacement, drain cleaning, and whole-home repiping of galvanized pipes. We also handle emergency calls throughout Irvine 24/7 — including for Irvine\'s large apartment and condo communities.',
      'When you call America\'s Plumbing in Irvine, you get a licensed, background-checked plumber — not a franchise technician — with upfront written pricing before any work begins. We serve all of Irvine including 92602, 92603, 92604, 92606, 92612, 92614, 92617, 92618, 92620, and 92697.',
    ],
    landmarks: ['Woodbridge', 'Turtle Rock', 'Northwood', 'University Park', 'Great Park Neighborhoods', 'Portola Springs', 'Stonegate', 'Shady Canyon'],
    zipCodes: ['92602', '92603', '92604', '92606', '92612', '92614', '92617', '92618', '92620'],
    faqs: [
      { q: 'Do you offer same-day plumbing service in Irvine?', a: 'Yes — we offer same-day scheduling for most plumbing services in Irvine. For emergencies, we aim to arrive within 1–2 hours.' },
      { q: 'Are you licensed to work in Irvine, CA?', a: 'Yes. We hold a California C-36 Plumbing Contractor license and are fully bonded and insured for all work in Irvine and Orange County.' },
      { q: 'Do you serve apartments and condos in Irvine?', a: 'Yes — we work with individual owners, HOAs, and property managers throughout Irvine\'s many apartment and condo communities.' },
    ],
    keywords: ['plumber irvine ca', 'plumbing irvine california', 'emergency plumber irvine', 'drain cleaning irvine', 'water heater repair irvine ca', 'slab leak irvine'],
  },
  {
    slug: 'newport-beach',
    city: 'Newport Beach',
    county: 'Orange County',
    metaTitle: 'Plumber in Newport Beach, CA | 24/7 Service | America\'s Plumbing',
    metaDescription: 'Trusted plumber in Newport Beach, CA. Same-day & emergency plumbing service. Slab leak detection, repiping, water heaters. Call (949) 379-0082 for a free estimate.',
    h1: 'Plumber in Newport Beach, CA — Trusted, Licensed & Available 24/7',
    intro: 'Newport Beach homeowners trust America\'s Plumbing for reliable, high-quality plumbing service delivered with the professionalism this community deserves. From the Peninsula to Newport Coast, Balboa Island to Harbor View Homes, we serve all Newport Beach neighborhoods with licensed technicians, upfront pricing, and the quality workmanship your home requires.',
    body: [
      'Newport Beach\'s coastal environment creates unique plumbing challenges. The combination of salt air, older housing stock near the water, and high water pressure in hillside areas means our Newport Beach customers frequently deal with accelerated pipe corrosion, pinhole leaks in copper lines, and water heater failures. We understand these local conditions and come prepared.',
      'Many Newport Beach homes — especially in established neighborhoods near the Bay and Peninsula — have original copper or galvanized plumbing that is decades old. If you\'re seeing low pressure at your fixtures, discolored water, or dealing with recurring leaks, a whole-home repipe with PEX is likely the most cost-effective long-term solution.',
      'We also perform high-end fixture installations for Newport Beach\'s many remodeling projects — Kohler, Grohe, Brizo, and Waterworks fixtures installed correctly with zero-leak guarantees. Whether it\'s a master bath renovation or a complete kitchen plumbing rough-in, we deliver the quality Newport Beach homeowners expect.',
    ],
    landmarks: ['Balboa Peninsula', 'Newport Coast', 'Balboa Island', 'Harbor View Homes', 'Lido Isle', 'Corona del Mar', 'Crystal Cove', 'Big Canyon'],
    zipCodes: ['92657', '92658', '92659', '92660', '92661', '92662', '92663'],
    faqs: [
      { q: 'Why do pipes corrode faster near the Newport Beach coast?', a: 'Salt air accelerates corrosion in copper and galvanized pipes. If your home is within a few miles of the coast and has older pipes, periodic inspection is recommended.' },
      { q: 'Do you install high-end plumbing fixtures in Newport Beach?', a: 'Yes — we install all major luxury brands including Kohler, Grohe, Brizo, Waterworks, and Hansgrohe. We can source specific models on your behalf.' },
      { q: 'Can you work alongside my general contractor during a remodel?', a: 'Absolutely. We regularly partner with GCs on kitchen and bathroom remodels throughout Newport Beach and can coordinate our schedule with your project timeline.' },
    ],
    keywords: ['plumber newport beach ca', 'plumbing newport beach california', 'emergency plumber newport beach', 'slab leak newport beach', 'water heater newport beach', 'repipe newport beach'],
  },
  {
    slug: 'laguna-hills',
    city: 'Laguna Hills',
    county: 'Orange County',
    metaTitle: 'Plumber in Laguna Hills, CA | Same-Day Service | America\'s Plumbing',
    metaDescription: 'Licensed plumber in Laguna Hills, CA. Same-day & emergency plumbing. Drain cleaning, water heaters, leak detection. Free estimates. Call (949) 379-0082.',
    h1: 'Plumber in Laguna Hills, CA — Licensed, Local & Same-Day',
    intro: 'America\'s Plumbing provides fast, reliable plumbing service throughout Laguna Hills, CA. From Nellie Gail Ranch to Laguna Hill\'s newer developments, our licensed plumbers are familiar with the plumbing systems found in this community and deliver upfront pricing with same-day availability.',
    body: [
      'Laguna Hills homes are predominantly built between the 1970s and 1990s, which means many properties are approaching the age where original plumbing systems need attention. Galvanized pipes begin failing around 30–40 years of service, and water heaters have a typical lifespan of 8–12 years. If your Laguna Hills home was built before 1990, a plumbing inspection is a smart proactive step.',
      'We service all Laguna Hills zip codes including 92653 and 92656. Common calls from Laguna Hills include drain cleaning, water heater replacement, leak detection in slab foundations, and fixture upgrades as part of bathroom and kitchen renovations.',
      'Our Laguna Hills customers appreciate our straightforward approach: we diagnose the problem, give you a written price, and get to work — no pressure, no upselling, no surprises on the invoice.',
    ],
    landmarks: ['Nellie Gail Ranch', 'Aliso Creek', 'Laguna Hills Mall area', 'Moulton Ranch'],
    zipCodes: ['92653', '92656'],
    faqs: [
      { q: 'How quickly can you come to Laguna Hills?', a: 'We offer same-day service throughout Laguna Hills. For plumbing emergencies, we aim to arrive within 1–2 hours of your call.' },
      { q: 'My Laguna Hills home was built in the 1980s — should I be worried about my pipes?', a: 'Homes built in the 1980s may have copper pipes approaching pinhole leak age, or galvanized pipes that are significantly restricted. A free inspection can give you peace of mind.' },
    ],
    keywords: ['plumber laguna hills ca', 'plumbing laguna hills california', 'emergency plumber laguna hills', 'drain cleaning laguna hills', 'water heater laguna hills ca'],
  },
  {
    slug: 'mission-viejo',
    city: 'Mission Viejo',
    county: 'Orange County',
    metaTitle: 'Plumber in Mission Viejo, CA | 24/7 Emergency | America\'s Plumbing',
    metaDescription: 'Reliable plumber in Mission Viejo, CA. 24/7 emergency service, drain cleaning, water heaters, slab leaks. C-36 Licensed. Free estimates. Call (949) 379-0082.',
    h1: 'Plumber in Mission Viejo, CA — Reliable, Licensed & Available 24/7',
    intro: 'America\'s Plumbing is Mission Viejo\'s trusted plumbing contractor for both emergency and scheduled plumbing services. Serving neighborhoods around Lake Mission Viejo, Olympiad, and throughout this master-planned community, our licensed plumbers deliver quality workmanship, honest pricing, and the kind of dependability Mission Viejo homeowners have come to expect.',
    body: [
      'Mission Viejo is a mature, established community where many homes are now 30–50 years old. This is the age range where plumbing systems begin showing their age: water heaters reach the end of their service life, galvanized pipes become severely restricted or start leaking, and slab leaks become more common as pipe connections shift over decades of temperature cycling.',
      'We\'ve helped hundreds of Mission Viejo homeowners navigate these aging system challenges — from simple water heater replacements to complete whole-home repipes with PEX. We always give you an honest assessment and multiple options so you can make the decision that\'s right for your home and budget.',
      'Mission Viejo emergency calls are answered 24/7. Whether it\'s a burst pipe on a Sunday night or a sewage backup during the holidays, we have a licensed plumber ready to dispatch to Mission Viejo at any hour.',
    ],
    landmarks: ['Lake Mission Viejo', 'Olympiad area', 'Casta del Sol', 'Canyon Crest', 'Deane Homes neighborhoods'],
    zipCodes: ['92691', '92692'],
    faqs: [
      { q: 'Do you offer senior discounts for Mission Viejo residents?', a: 'We offer fair, upfront pricing for all customers. Contact us directly to discuss your project and we\'ll make sure you receive competitive rates.' },
      { q: 'Can you service my home near Lake Mission Viejo?', a: 'Yes — we serve all Mission Viejo neighborhoods including those around the lake, Casta del Sol, and Olympiad.' },
    ],
    keywords: ['plumber mission viejo ca', 'plumbing mission viejo california', 'emergency plumber mission viejo', 'slab leak mission viejo', 'water heater mission viejo ca'],
  },
  {
    slug: 'lake-forest',
    city: 'Lake Forest',
    county: 'Orange County',
    metaTitle: 'Plumber in Lake Forest, CA | Same-Day Service | America\'s Plumbing',
    metaDescription: 'Professional plumber in Lake Forest, CA. Same-day service, 24/7 emergency plumbing, drain cleaning, water heaters. C-36 Licensed. Call (949) 379-0082.',
    h1: 'Plumber in Lake Forest, CA — Same-Day Service, Honest Pricing',
    intro: 'America\'s Plumbing serves Lake Forest homeowners and businesses with fast, professional plumbing services. From El Toro and Foothill Ranch to Baker Ranch and Portola Hills, our licensed plumbers cover all Lake Forest neighborhoods with upfront pricing and same-day availability for most jobs.',
    body: [
      'Lake Forest (formerly El Toro) is a diverse community with housing stock ranging from 1970s ranch homes in established neighborhoods to newer construction in Baker Ranch and Portola Hills. Older homes may have original galvanized or copper plumbing nearing the end of its service life, while newer homes sometimes encounter installation issues or fixture failures under manufacturer warranty.',
      'Drain cleaning is one of our most common Lake Forest calls — the area\'s mature trees, particularly in older neighborhoods, create significant root intrusion issues in sewer lines. Our hydro jetting service and camera inspection can identify and clear root infiltration before it leads to a full sewer backup.',
      'We offer 24/7 emergency plumbing service throughout Lake Forest. Call (949) 379-0082 any time and we\'ll dispatch a technician promptly.',
    ],
    landmarks: ['El Toro area', 'Foothill Ranch', 'Baker Ranch', 'Portola Hills', 'Aliso Viejo-adjacent neighborhoods'],
    zipCodes: ['92630', '92610'],
    faqs: [
      { q: 'Do you serve both Lake Forest and Foothill Ranch?', a: 'Yes — we service all of Lake Forest including El Toro, Foothill Ranch, Baker Ranch, and Portola Hills.' },
      { q: 'Why does my sewer drain keep backing up in Lake Forest?', a: 'Lake Forest\'s mature trees frequently cause root intrusion in older sewer lines. A camera inspection will tell us exactly what\'s happening and whether hydro jetting or pipe repair is needed.' },
    ],
    keywords: ['plumber lake forest ca', 'plumbing lake forest california', 'emergency plumber el toro', 'drain cleaning lake forest', 'water heater lake forest ca'],
  },
  {
    slug: 'aliso-viejo',
    city: 'Aliso Viejo',
    county: 'Orange County',
    metaTitle: 'Plumber in Aliso Viejo, CA | Licensed & Local | America\'s Plumbing',
    metaDescription: 'Local plumber in Aliso Viejo, CA. Same-day plumbing, 24/7 emergency service. Slab leak, water heater, drain cleaning. Free estimate. Call (949) 379-0082.',
    h1: 'Plumber in Aliso Viejo, CA — Licensed, Local & Ready Today',
    intro: 'America\'s Plumbing provides trusted plumbing services throughout Aliso Viejo, CA. As one of Orange County\'s newer master-planned communities, Aliso Viejo homes benefit from modern plumbing systems — but age, hard water, and high usage still lead to the full range of plumbing needs. We\'re here for all of it.',
    body: [
      'Aliso Viejo was incorporated in 2001, but much of its housing was built in the late 1980s and 1990s — which means many homes are now 25–35 years old. Water heaters installed during construction are well beyond their expected lifespan, and copper supply lines installed in that era can develop pinhole leaks from Orange County\'s moderately hard water.',
      'We handle everything from water heater replacement and drain cleaning to full fixture upgrades and leak detection in Aliso Viejo. Our technicians are familiar with the construction styles common in this community, which means faster diagnosis and more accurate quotes.',
    ],
    landmarks: ['Aliso Viejo Town Center', 'Pacific Park', 'Wood Canyon', 'Glenwood area'],
    zipCodes: ['92656'],
    faqs: [
      { q: 'My Aliso Viejo home was built in 1992 — what plumbing maintenance should I consider?', a: 'A 30+ year old home should have its water heater inspected or replaced, sewer line camera inspected, and supply lines checked for signs of corrosion or pinhole leaks. We can do a full inspection and report.' },
      { q: 'Do you offer free estimates in Aliso Viejo?', a: 'Yes — we provide free written estimates for all plumbing projects in Aliso Viejo.' },
    ],
    keywords: ['plumber aliso viejo ca', 'plumbing aliso viejo california', 'emergency plumber aliso viejo', 'water heater aliso viejo', 'drain cleaning aliso viejo ca'],
  },
  {
    slug: 'san-clemente',
    city: 'San Clemente',
    county: 'Orange County',
    metaTitle: 'Plumber in San Clemente, CA | Coastal Plumbing Experts | America\'s Plumbing',
    metaDescription: 'Licensed plumber in San Clemente, CA. Coastal plumbing specialists — corrosion repair, repiping, 24/7 emergency service. Free estimates. Call (949) 379-0082.',
    h1: 'Plumber in San Clemente, CA — Coastal Plumbing Specialists',
    intro: 'America\'s Plumbing serves San Clemente homeowners with expertise in the unique plumbing challenges of coastal Southern California living. From the Spanish Village by the Sea to Talega and San Clemente\'s hillside neighborhoods, we deliver licensed, professional plumbing with upfront pricing and same-day availability.',
    body: [
      'San Clemente\'s coastal environment — salt air, ocean proximity, and the temperature swings between hillside and beachfront — creates accelerated corrosion in older plumbing systems. Copper pipes in older San Clemente homes are particularly vulnerable to pinhole leaks caused by a combination of the area\'s moderately aggressive water chemistry and salt-air exposure.',
      'Whole-home repiping with PEX is one of the most common services we perform in San Clemente. PEX is far more resistant to the corrosion issues that copper experiences in coastal environments, and modern PEX-A provides the flexibility to handle the expansion and contraction common in coastal temperature variations.',
      'We service all San Clemente zip codes: 92672 and 92673. For emergency plumbing in San Clemente, call (949) 379-0082 — we dispatch around the clock.',
    ],
    landmarks: ['Talega', 'San Clemente Pier area', 'Marblehead', 'Cotton Point Estates', 'Forster Ranch'],
    zipCodes: ['92672', '92673'],
    faqs: [
      { q: 'Why do pipes fail faster in San Clemente than inland areas?', a: 'Salt air and ocean proximity accelerate copper pipe corrosion. Homes within a mile of the coast typically develop pinhole leaks in copper lines 10–15 years earlier than inland homes.' },
      { q: 'Is there a plumber who serves San Clemente 24/7?', a: 'Yes — America\'s Plumbing provides 24/7 emergency plumbing service throughout San Clemente. Call (949) 379-0082 any time.' },
    ],
    keywords: ['plumber san clemente ca', 'plumbing san clemente california', 'emergency plumber san clemente', 'repipe san clemente', 'water heater san clemente ca'],
  },
  {
    slug: 'huntington-beach',
    city: 'Huntington Beach',
    county: 'Orange County',
    metaTitle: 'Plumber in Huntington Beach, CA | 24/7 Service | America\'s Plumbing',
    metaDescription: 'Professional plumber in Huntington Beach, CA. Emergency plumbing, drain cleaning, water heaters, leak detection. C-36 Licensed. Call (949) 379-0082.',
    h1: 'Plumber in Huntington Beach, CA — Surf City\'s Trusted Plumbing Company',
    intro: 'America\'s Plumbing serves Huntington Beach homeowners and businesses with professional plumbing service across all of Surf City — from beachside neighborhoods near the Pier to inland communities in Huntington Beach\'s newer developments. We offer same-day service, 24/7 emergency response, and transparent pricing on every job.',
    body: [
      'Huntington Beach is one of Orange County\'s largest cities, with housing stock that spans from 1950s beach cottages to brand-new developments inland. This range means our HB customers have diverse plumbing needs — from replacing original cast iron drain lines in older homes to installing modern tankless water heaters in updated properties.',
      'Sewer line issues are particularly common in Huntington Beach\'s older neighborhoods near Pacific Coast Highway, where aging clay and cast iron sewer lines are susceptible to root intrusion and deterioration. We offer sewer camera inspection and both trenchless and traditional repair options.',
      'For Huntington Beach businesses — restaurants, retail, and commercial properties along Beach Boulevard and Main Street — we provide commercial drain services, grease trap cleaning, and commercial water heater maintenance.',
    ],
    landmarks: ['Huntington Beach Pier area', 'Bolsa Chica', 'Seacliff', 'Huntington Harbour', 'Pacific City area', 'Sunset Beach'],
    zipCodes: ['92605', '92615', '92646', '92647', '92648', '92649'],
    faqs: [
      { q: 'Do you service commercial properties in Huntington Beach?', a: 'Yes — we handle commercial plumbing for restaurants, retail, and businesses throughout Huntington Beach including grease trap service and commercial drain cleaning.' },
      { q: 'How do I find the main water shutoff in my Huntington Beach home?', a: 'In most HB homes, the main shutoff is near the water meter at the street or where the main line enters the house. If you can\'t find it during an emergency, call us — we\'ll guide you through it.' },
    ],
    keywords: ['plumber huntington beach ca', 'plumbing huntington beach california', 'emergency plumber huntington beach', 'drain cleaning huntington beach', 'water heater huntington beach ca'],
  },
  {
    slug: 'anaheim',
    city: 'Anaheim',
    county: 'Orange County',
    metaTitle: 'Plumber in Anaheim, CA | Same-Day Service | America\'s Plumbing',
    metaDescription: 'Licensed plumber in Anaheim, CA. Same-day & 24/7 emergency plumbing. Drain cleaning, water heaters, leak detection, repiping. Call (949) 379-0082 for a free estimate.',
    h1: 'Plumber in Anaheim, CA — Same-Day Service & 24/7 Emergency Response',
    intro: 'America\'s Plumbing provides reliable plumbing services throughout Anaheim, CA — from Anaheim Hills to the Disneyland Resort area, from Platinum Triangle to west Anaheim. Our licensed plumbers serve residential and commercial customers with upfront pricing, same-day availability, and 24/7 emergency response.',
    body: [
      'Anaheim is one of Orange County\'s most diverse cities in terms of housing stock and commercial properties. Residential customers in Anaheim Hills and newer developments may need water heater replacement or fixture upgrades, while older Anaheim neighborhoods closer to downtown and the resort area frequently have aging galvanized pipes and outdated drain systems that benefit from repiping and cleaning.',
      'Commercial plumbing is a significant part of our Anaheim service. With the Disneyland Resort, Angel Stadium, Honda Center, and hundreds of restaurants and hotels in the area, we provide commercial-grade drain service, grease trap cleaning, and commercial water heater maintenance for Anaheim businesses.',
      'We service all Anaheim zip codes. For a plumbing emergency in Anaheim, call (949) 379-0082 — we answer 24 hours a day, 7 days a week.',
    ],
    landmarks: ['Anaheim Hills', 'Platinum Triangle', 'Disneyland Resort area', 'Angel Stadium area', 'Colony Historic District'],
    zipCodes: ['92801', '92802', '92803', '92804', '92805', '92806', '92807', '92808'],
    faqs: [
      { q: 'Do you serve both Anaheim and Anaheim Hills?', a: 'Yes — we serve all of Anaheim including Anaheim Hills, west Anaheim, and central Anaheim neighborhoods.' },
      { q: 'Can you handle commercial plumbing near the Anaheim Resort area?', a: 'Absolutely. We service hotels, restaurants, and commercial facilities throughout the Anaheim Resort and Platinum Triangle areas.' },
    ],
    keywords: ['plumber anaheim ca', 'plumbing anaheim california', 'emergency plumber anaheim', 'drain cleaning anaheim', 'water heater anaheim ca', 'plumber anaheim hills'],
  },
  {
    slug: 'santa-ana',
    city: 'Santa Ana',
    county: 'Orange County',
    metaTitle: 'Plumber in Santa Ana, CA | Licensed & Local | America\'s Plumbing',
    metaDescription: 'Trusted plumber in Santa Ana, CA. Same-day service, 24/7 emergency plumbing, drain cleaning, repiping. C-36 Licensed. Free estimates. Call (949) 379-0082.',
    h1: 'Plumber in Santa Ana, CA — Licensed, Local & Available Today',
    intro: 'America\'s Plumbing serves Santa Ana residents and businesses with professional plumbing services at fair, upfront prices. As Orange County\'s county seat and one of its oldest cities, Santa Ana has a large stock of older homes that frequently require the type of thorough plumbing work our licensed technicians specialize in.',
    body: [
      'Santa Ana\'s housing stock includes many homes built in the 1940s through 1970s — properties that often still have original galvanized steel pipes, cast iron drain lines, and outdated fixtures. Galvanized pipes in this age range are typically corroded, significantly restricted, and overdue for replacement. If your Santa Ana home was built before 1980, a plumbing inspection is strongly recommended.',
      'We also serve Santa Ana\'s commercial sector — the city\'s downtown core, First Street corridor, and industrial areas all have commercial plumbing needs we can meet. Our commercial services include drain cleaning, grease trap service, backflow testing, and commercial water heater maintenance.',
      'For all plumbing needs in Santa Ana, call (949) 379-0082. We offer same-day scheduling and 24/7 emergency response throughout the city.',
    ],
    landmarks: ['Downtown Santa Ana', 'Floral Park', 'Santa Ana Zoo area', 'Metro East', 'South Coast Metro area'],
    zipCodes: ['92701', '92702', '92703', '92704', '92705', '92706', '92707'],
    faqs: [
      { q: 'My Santa Ana home was built in the 1960s — is it time to repipe?', a: 'Likely yes. Galvanized pipes from the 1960s are typically well past their service life and may be restricting your water flow significantly. We offer free assessments.' },
      { q: 'Do you offer commercial plumbing services in Santa Ana?', a: 'Yes — we service commercial and industrial properties throughout Santa Ana including restaurants, retail, and office buildings.' },
    ],
    keywords: ['plumber santa ana ca', 'plumbing santa ana california', 'emergency plumber santa ana', 'repipe santa ana', 'drain cleaning santa ana ca', 'water heater santa ana'],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find(a => a.slug === slug);
}
