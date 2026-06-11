export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  body: string[];
  included: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    shortName: 'Emergency',
    metaTitle: 'Emergency Plumber Orange County CA | 24/7 | America\'s Plumbing',
    metaDescription: 'Need an emergency plumber in Orange County? America\'s Plumbing responds 24/7 — burst pipes, sewage backups, no hot water. C-36 Licensed. Call (949) 379-0082.',
    h1: '24/7 Emergency Plumber in Orange County, CA',
    eyebrow: 'Available Around the Clock',
    intro: 'Plumbing emergencies don\'t wait for business hours — and neither do we. America\'s Plumbing provides 24/7 emergency plumbing service across Orange County, CA. Whether it\'s a burst pipe flooding your home at 2 AM, a sewage backup threatening your family\'s health, or a complete loss of hot water, our licensed plumbers are on call and ready to dispatch immediately.',
    body: [
      'When you call us for a plumbing emergency in Orange County, you speak directly to a live technician — not an answering service. We give you a straight, upfront price before any work begins, and we dispatch as fast as physically possible. Our goal is to be at your door within 1–2 hours of your call.',
      'We handle all types of plumbing emergencies including burst or frozen pipes, major water leaks, sewage backups, gas line issues, water heater failures, and complete drain blockages. Our trucks are fully stocked so we can resolve most emergencies in a single visit.',
      'Don\'t let a plumbing emergency become a disaster. Shut off your main water valve and call us immediately at (949) 379-0082. We\'re available every day of the year — including holidays — because plumbing problems don\'t take days off.',
    ],
    included: [
      { title: 'Burst Pipe Repair', desc: 'Fast, permanent repair of burst or cracked pipes before water damage spreads.' },
      { title: 'Sewage Backup Clearing', desc: 'Emergency drain clearing and sewage line restoration to protect your home and health.' },
      { title: 'Water Heater Failure', desc: 'Same-day water heater repair or replacement — hot water restored today.' },
      { title: 'Gas Line Emergencies', desc: 'If you smell gas, we respond immediately. Licensed for all gas line work in California.' },
      { title: 'Major Leak Containment', desc: 'Rapid leak detection and repair to minimize water damage and mold risk.' },
      { title: 'Toilet Overflow & Backup', desc: 'Immediate response for overflowing or backed-up toilets causing flooding.' },
    ],
    faqs: [
      { q: 'How fast can you respond to a plumbing emergency in Orange County?', a: 'We aim to arrive within 1–2 hours for true emergencies throughout Orange County. Call (949) 379-0082 and we dispatch immediately.' },
      { q: 'Do you charge extra for after-hours emergency service?', a: 'We are transparent about all pricing upfront. We\'ll tell you the full cost before starting any work — no hidden overtime surprises.' },
      { q: 'What should I do while waiting for the emergency plumber?', a: 'Shut off the main water supply valve (usually near the water meter or where the main line enters your home). For gas emergencies, evacuate and call 911 first, then us.' },
      { q: 'Are you available on holidays?', a: 'Yes — we are available 365 days a year, including all holidays. Plumbing emergencies don\'t take vacations.' },
    ],
    keywords: ['emergency plumber orange county', '24/7 plumber orange county ca', 'emergency plumbing service irvine', 'burst pipe repair orange county', 'after hours plumber oc'],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection & Repair',
    shortName: 'Leak Detection',
    metaTitle: 'Leak Detection Orange County CA | Slab Leak Repair | America\'s Plumbing',
    metaDescription: 'Professional leak detection in Orange County, CA. Non-invasive slab leak detection, water line leak repair. C-36 Licensed. Free estimates. Call (949) 379-0082.',
    h1: 'Leak Detection & Repair in Orange County, CA',
    eyebrow: 'Non-Invasive Detection Technology',
    intro: 'Water leaks are silent destroyers. A hidden leak inside your walls or under your slab can cause tens of thousands of dollars in structural damage and mold growth before you ever notice it. America\'s Plumbing uses advanced, non-invasive leak detection technology to locate leaks precisely — without tearing apart your home.',
    body: [
      'Slab leaks are one of the most common and destructive plumbing problems in Orange County\'s older housing stock. Signs include warm spots on your floor, the sound of running water when everything is off, unexplained spikes in your water bill, or cracks in your foundation. If you notice any of these, call us immediately.',
      'Our leak detection process uses electronic amplification equipment, thermal imaging, and pressure testing to pinpoint leaks within inches — not feet. This means we open the minimum amount of flooring or drywall necessary, saving you thousands in unnecessary damage.',
      'We repair all types of leaks: slab leaks, water line leaks, sewer leaks, irrigation leaks, and more. Every repair comes with a written warranty so you have peace of mind long after we leave.',
    ],
    included: [
      { title: 'Slab Leak Detection', desc: 'Electronic and acoustic equipment to locate under-foundation leaks without destructive guesswork.' },
      { title: 'Slab Leak Repair', desc: 'Targeted repair with minimal concrete removal — or whole-home repiping if warranted.' },
      { title: 'Water Line Leak Repair', desc: 'Detection and repair of supply line leaks in walls, ceilings, and underground.' },
      { title: 'Pressure Testing', desc: 'Full-system pressure tests to confirm leaks and verify repairs are holding.' },
      { title: 'Thermal Imaging', desc: 'Infrared camera technology to find moisture behind walls without opening them.' },
      { title: 'Pool & Irrigation Leaks', desc: 'Detection of outdoor water system leaks that drive up your water bill.' },
    ],
    faqs: [
      { q: 'How do I know if I have a slab leak?', a: 'Common signs include warm or wet spots on your floor, the sound of water running when nothing is on, a suddenly high water bill, or low water pressure. Call us for a free assessment.' },
      { q: 'How long does leak detection take?', a: 'Most residential leak detection jobs take 1–3 hours. We provide a written estimate before any repair work begins.' },
      { q: 'Will you have to tear up my floor to find the leak?', a: 'No — we use non-invasive electronic and acoustic equipment to locate leaks precisely first. We only open what\'s absolutely necessary to make the repair.' },
      { q: 'Does homeowner\'s insurance cover slab leaks?', a: 'Many policies cover the resulting water damage but not the repair itself. We can provide detailed documentation to help with your claim.' },
    ],
    keywords: ['leak detection orange county ca', 'slab leak detection irvine', 'slab leak repair orange county', 'water leak detection oc', 'leak detection newport beach'],
  },
  {
    slug: 'repiping',
    name: 'Whole-Home Repiping',
    shortName: 'Repiping',
    metaTitle: 'Whole-Home Repiping Orange County CA | PEX Repiping | America\'s Plumbing',
    metaDescription: 'Whole-home repiping in Orange County, CA. Replace old galvanized or copper pipes with PEX. Upfront pricing, 1-year warranty. Call (949) 379-0082 for a free estimate.',
    h1: 'Whole-Home Repiping in Orange County, CA',
    eyebrow: 'PEX Repiping Specialists',
    intro: 'If your home was built before 1985, there\'s a good chance it still has galvanized steel or older copper pipes that are corroded, restricted, and quietly degrading your water quality. America\'s Plumbing specializes in whole-home repiping with modern PEX — the gold standard in residential plumbing that delivers better water pressure, cleaner water, and performance that lasts 50+ years.',
    body: [
      'Galvanized pipes corrode from the inside out. Over decades, rust and mineral buildup narrow the pipe interior, reducing pressure to a trickle and leaching iron into your water. If you\'re seeing discolored water, low pressure throughout the house, or dealing with frequent pipe leaks, the pipes themselves are the problem — not just a fitting here and there.',
      'PEX (cross-linked polyethylene) is flexible, corrosion-resistant, freeze-resistant, and faster to install than copper — which means less labor time and cost for you. We run new lines throughout your home, connecting to all fixtures, appliances, and hose bibs. Most whole-home repipes are completed in 1–2 days with water restored same-day.',
      'Our repiping process is transparent from start to finish. We give you a firm written quote before we touch anything, explain exactly what we\'re doing, and clean up completely when we\'re done. All work is permitted and inspected per Orange County building codes.',
    ],
    included: [
      { title: 'Full System Assessment', desc: 'We inspect your current piping, identify problem areas, and give you an honest recommendation.' },
      { title: 'PEX-A Repiping', desc: 'Industry-leading PEX-A pipe — the most flexible, durable, and freeze-resistant option available.' },
      { title: 'All Fixtures Reconnected', desc: 'Every sink, toilet, shower, tub, appliance, and hose bib is fully reconnected and tested.' },
      { title: 'Permit & Inspection', desc: 'All repiping work is permitted and passes Orange County building inspection.' },
      { title: 'Drywall Patching', desc: 'We patch and texture any drywall openings made during the repipe.' },
      { title: '1-Year Labor Warranty', desc: 'Full warranty on all workmanship plus manufacturer warranties on materials.' },
    ],
    faqs: [
      { q: 'How long does a whole-home repipe take?', a: 'Most homes are repiped in 1–2 days. Water is typically restored the same day we start. Drywall patching may require an additional visit.' },
      { q: 'How much does repiping cost in Orange County?', a: 'Cost depends on home size, number of fixtures, and pipe accessibility. We provide free written estimates — most Orange County homes range from $4,000–$12,000.' },
      { q: 'Should I choose PEX or copper?', a: 'We recommend PEX-A for most homes. It\'s more flexible, less prone to bursting, and costs less to install than copper. It also won\'t corrode or develop pinhole leaks.' },
      { q: 'Will repiping increase my home\'s value?', a: 'Yes — updated plumbing is a significant selling point and may be required by buyers\' lenders if your current pipes are in poor condition.' },
    ],
    keywords: ['whole home repiping orange county', 'pex repiping irvine ca', 'repipe specialist orange county', 'galvanized pipe replacement oc', 'repiping cost orange county'],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning & Hydro Jetting',
    shortName: 'Drain Cleaning',
    metaTitle: 'Drain Cleaning Orange County CA | Hydro Jetting | America\'s Plumbing',
    metaDescription: 'Professional drain cleaning in Orange County, CA. Hydro jetting, snaking, camera inspection. Fast, same-day service. C-36 Licensed. Call (949) 379-0082.',
    h1: 'Drain Cleaning & Hydro Jetting in Orange County, CA',
    eyebrow: 'Clear Drains, Guaranteed',
    intro: 'Slow or clogged drains are more than a nuisance — they\'re a warning sign of a larger problem developing in your plumbing system. America\'s Plumbing provides professional drain cleaning services throughout Orange County using the right tool for each situation: drain snaking for typical clogs, hydro jetting for stubborn buildup, and camera inspection to see exactly what\'s going on inside your pipes.',
    body: [
      'Most drain cleaning companies snake your drain and call it done — without ever finding out why it clogged in the first place. We use in-line drain cameras to inspect the line after clearing it, confirming the clog is gone and identifying any underlying issues like root intrusion, pipe corrosion, or misaligned joints before they become expensive emergencies.',
      'Hydro jetting is the most thorough drain cleaning method available. A high-pressure water stream (up to 4,000 PSI) scours the inside of your pipes clean — removing grease, scale, mineral deposits, and tree roots. It\'s the only method that actually cleans the pipe walls rather than just punching a hole through the clog.',
      'We service all drain types: kitchen sinks, bathroom sinks, tubs, showers, floor drains, laundry lines, main sewer lines, and commercial drains. If your drain is slow or backing up, we can usually clear it same-day.',
    ],
    included: [
      { title: 'Drain Snaking', desc: 'Electric auger snaking for standard clogs in sinks, tubs, showers, and toilets.' },
      { title: 'Hydro Jetting', desc: 'High-pressure water jetting to completely scour and clear main lines and stubborn blockages.' },
      { title: 'Camera Inspection', desc: 'In-line video camera to see inside your pipes and confirm the clog is fully cleared.' },
      { title: 'Main Sewer Line Clearing', desc: 'Full main sewer line service including root cutting and debris flushing.' },
      { title: 'Grease Trap Cleaning', desc: 'Commercial kitchen grease trap pumping and cleaning.' },
      { title: 'Root Intrusion Treatment', desc: 'Mechanical root cutting plus foaming root treatment to slow regrowth.' },
    ],
    faqs: [
      { q: 'How often should I have my drains cleaned?', a: 'For most households, annual main line cleaning prevents buildup before it becomes a clog. Kitchen drains may benefit from cleaning every 6 months if you cook frequently.' },
      { q: 'What\'s the difference between snaking and hydro jetting?', a: 'Snaking punches through a clog. Hydro jetting scours the entire pipe wall clean. Jetting is more thorough and better for grease buildup, scale, and recurring clogs.' },
      { q: 'Can tree roots really get into sewer pipes?', a: 'Yes — roots seek water and will infiltrate any crack or joint in clay or older cast iron sewer pipes. This is very common in Orange County neighborhoods with mature trees.' },
      { q: 'Why does my drain keep clogging after I clear it?', a: 'Recurring clogs usually indicate a larger problem: pipe damage, root intrusion, or scale buildup that snaking alone can\'t fix. A camera inspection will tell us exactly what\'s happening.' },
    ],
    keywords: ['drain cleaning orange county ca', 'hydro jetting orange county', 'clogged drain irvine ca', 'sewer line cleaning oc', 'drain cleaning newport beach'],
  },
  {
    slug: 'water-heater',
    name: 'Water Heater Services',
    shortName: 'Water Heaters',
    metaTitle: 'Water Heater Repair & Installation Orange County CA | America\'s Plumbing',
    metaDescription: 'Water heater repair, replacement & installation in Orange County, CA. Tank & tankless. Same-day service. C-36 Licensed. Free estimates. Call (949) 379-0082.',
    h1: 'Water Heater Repair & Installation in Orange County, CA',
    eyebrow: 'Tank & Tankless Specialists',
    intro: 'No hot water is one of the most disruptive plumbing problems a homeowner can face. America\'s Plumbing provides same-day water heater repair and installation throughout Orange County — whether your tank unit has failed, you\'re upgrading to a tankless system, or you\'re dealing with inconsistent temperatures and strange noises. We service all major brands and install only top-rated units.',
    body: [
      'The average water heater lasts 8–12 years. If yours is approaching that age or showing signs of trouble — rust-colored water, rumbling sounds, water pooling around the base, or inconsistent hot water — it\'s more cost-effective to replace than repair. We\'ll give you an honest assessment and let you decide.',
      'Tankless water heaters are one of the best investments a Southern California homeowner can make. They deliver endless hot water on demand, use 20–30% less energy than tank units, and last 20+ years with proper maintenance. We are certified installers for all major tankless brands including Navien, Noritz, Rinnai, and Rheem.',
      'All water heater work is performed to California code, properly permitted where required, and includes a written warranty on both parts and labor. We stock the most common tank sizes in our vehicles so we can often complete an installation the same day you call.',
    ],
    included: [
      { title: 'Water Heater Repair', desc: 'Same-day repair of pilot lights, thermostats, heating elements, anode rods, and pressure relief valves.' },
      { title: 'Tank Water Heater Replacement', desc: 'Same-day replacement with leading brands in 30, 40, 50, and 75-gallon sizes.' },
      { title: 'Tankless Installation', desc: 'Full tankless conversion including gas line upgrade if needed — Navien, Rinnai, Noritz, Rheem.' },
      { title: 'Water Heater Flushing', desc: 'Annual flush to remove sediment buildup and extend the life of your unit.' },
      { title: 'Expansion Tank Installation', desc: 'Code-required expansion tanks for closed-loop systems in Orange County.' },
      { title: 'Earthquake Strapping', desc: 'CA-code-compliant seismic strapping for all tank water heater installations.' },
    ],
    faqs: [
      { q: 'Should I repair or replace my water heater?', a: 'If it\'s under 8 years old and the issue is a single component (thermostat, element), repair often makes sense. Over 10 years or with multiple issues, replacement is usually the better investment.' },
      { q: 'How long does a water heater installation take?', a: 'Tank replacements typically take 2–3 hours. Tankless installations take 4–6 hours depending on whether gas line upgrades are needed.' },
      { q: 'What size water heater do I need?', a: 'For most OC families: 30–40 gallons for 1–2 people, 40–50 gallons for 3–4, 50–75 gallons for 5+. We\'ll recommend the right size for your usage patterns.' },
      { q: 'Is a tankless water heater worth it in Orange County?', a: 'Absolutely. SoCal\'s high gas and water rates make tankless ROI strong — most homeowners recoup the cost within 5–7 years through energy savings alone.' },
    ],
    keywords: ['water heater repair orange county', 'water heater installation irvine ca', 'tankless water heater orange county', 'water heater replacement oc', 'hot water heater newport beach'],
  },
  {
    slug: 'fixture-installation',
    name: 'Fixture Installation & Repair',
    shortName: 'Fixtures',
    metaTitle: 'Plumbing Fixture Installation Orange County CA | America\'s Plumbing',
    metaDescription: 'Faucet, toilet, sink & fixture installation in Orange County, CA. Licensed plumber, zero-leak guarantee, upfront pricing. Call (949) 379-0082 for a free estimate.',
    h1: 'Plumbing Fixture Installation & Repair in Orange County, CA',
    eyebrow: 'Installed Right. Guaranteed Leak-Free.',
    intro: 'A dripping faucet, running toilet, or leaking sink may seem minor — but left unaddressed, they waste thousands of gallons of water per year and can lead to water damage, mold, and costly repairs. America\'s Plumbing handles all fixture installation and repair work throughout Orange County with a zero-leak guarantee and upfront pricing.',
    body: [
      'Whether you\'ve purchased new fixtures for a bathroom remodel or just need a worn-out faucet replaced, we install and repair all types of plumbing fixtures quickly and correctly. We work with all major brands — Kohler, Moen, Delta, American Standard, Grohe — and can source specific models if you need us to.',
      'Improperly installed fixtures are one of the leading causes of water damage in OC homes. Seemingly small mistakes — a loose connection under the sink, an improper toilet wax ring seal, or a poorly seated cartridge — can leak slowly for months before causing visible damage. Our licensed plumbers do it right the first time.',
      'We offer a zero-leak guarantee on all fixture work. If anything we install leaks within 1 year due to our workmanship, we come back and fix it at no charge.',
    ],
    included: [
      { title: 'Faucet Installation & Repair', desc: 'Kitchen, bathroom, and utility faucets — all brands, all configurations.' },
      { title: 'Toilet Installation & Repair', desc: 'Standard, comfort-height, dual-flush, and bidet toilet seat installation.' },
      { title: 'Sink & Vanity Installation', desc: 'Undermount, drop-in, vessel, and pedestal sinks set and plumbed correctly.' },
      { title: 'Garbage Disposal', desc: 'Disposal installation, repair, and replacement — InSinkErator, Moen, Waste King.' },
      { title: 'Shower & Tub Fixtures', desc: 'Valve replacement, showerhead upgrades, tub spout repair.' },
      { title: 'Hose Bib Replacement', desc: 'Exterior faucet replacement and backflow preventer installation.' },
    ],
    faqs: [
      { q: 'Can I install my own fixtures and just have you connect them?', a: 'Yes — we\'re happy to do the rough-in connections for fixtures you\'ve purchased. We\'ll make sure everything is properly sealed and leak-free.' },
      { q: 'My faucet is dripping — is it worth repairing or should I replace it?', a: 'If the faucet is under 10 years old and a quality brand, a cartridge or O-ring replacement is usually inexpensive and extends its life significantly. Older or cheap faucets are often better replaced.' },
      { q: 'How much does toilet installation cost in Orange County?', a: 'Standard toilet installation typically ranges from $150–$300 for labor. We\'ll give you an exact price before starting.' },
      { q: 'Why is my toilet running constantly?', a: 'Usually a worn flapper, faulty fill valve, or float set too high. These are inexpensive repairs we can typically handle in under an hour.' },
    ],
    keywords: ['faucet installation orange county', 'toilet installation irvine ca', 'plumbing fixture repair oc', 'sink installation orange county', 'garbage disposal installation newport beach'],
  },
  {
    slug: 'gas-line',
    name: 'Gas Line Repair & Installation',
    shortName: 'Gas Lines',
    metaTitle: 'Gas Line Repair & Installation Orange County CA | America\'s Plumbing',
    metaDescription: 'Licensed gas line repair & installation in Orange County, CA. C-36 & gas certified. Emergency gas leak response. Upfront pricing. Call (949) 379-0082.',
    h1: 'Gas Line Repair & Installation in Orange County, CA',
    eyebrow: 'C-36 Licensed for Gas Work',
    intro: 'Gas line work is not a DIY project — it requires a licensed California plumbing contractor and must be inspected to protect your family and property. America\'s Plumbing holds the proper licensing and experience to handle all gas line services in Orange County, from adding a new BBQ line to repairing a dangerous leak.',
    body: [
      'If you smell gas — that rotten egg odor — evacuate your home immediately and call SoCalGas emergency line (1-800-427-2200), then call us. Never use light switches, phones, or any electrical devices inside a home with a suspected gas leak. Once the utility has shut off the gas and cleared the area, we\'ll locate and repair the leak permanently.',
      'We also install new gas lines for appliances, BBQ connections, fire pits, pool heaters, and outdoor kitchens — all common additions in Orange County. Every new gas line installation is pressure-tested and inspected before any appliance is connected.',
      'Common gas line services we perform: leak repair, gas line extensions for new appliances, tankless water heater gas line upgrades (which require larger line sizing), and gas line replacement for corroded or damaged lines.',
    ],
    included: [
      { title: 'Gas Leak Detection & Repair', desc: 'Electronic leak detection and permanent repair — tested and inspected before gas is restored.' },
      { title: 'Gas Line Extensions', desc: 'New branch lines for BBQs, fire pits, outdoor kitchens, pool heaters, and more.' },
      { title: 'Appliance Connections', desc: 'Safe, code-compliant connections for ranges, dryers, water heaters, and fireplaces.' },
      { title: 'Gas Line Sizing & Upgrades', desc: 'Line sizing calculations and upgrades for tankless water heaters and high-BTU appliances.' },
      { title: 'Pressure Testing', desc: 'Full system pressure test after all gas line work — we don\'t restore gas until it passes.' },
      { title: 'Permit & Inspection', desc: 'All gas line work is permitted and inspected per Orange County codes.' },
    ],
    faqs: [
      { q: 'What should I do if I smell gas in my home?', a: 'Leave immediately. Don\'t use any electrical switches or devices. Call SoCalGas at 1-800-427-2200 from outside, then call us at (949) 379-0082.' },
      { q: 'Do I need a permit for a new gas line in Orange County?', a: 'Yes — all new gas line installations require a permit and inspection. We handle the permit process and schedule the inspection on your behalf.' },
      { q: 'Can you add a gas line for my outdoor BBQ or fire pit?', a: 'Absolutely — this is one of our most common requests in OC. We\'ll run a dedicated line to your exact location and provide a flexible connector for easy appliance use.' },
      { q: 'How do I know if my gas line is leaking if I can\'t smell it?', a: 'Signs include dead vegetation in a line over buried pipes, hissing sounds near appliances, or higher-than-normal gas bills. We use electronic detection equipment to find leaks you can\'t smell.' },
    ],
    keywords: ['gas line repair orange county', 'gas line installation irvine ca', 'gas leak repair oc', 'gas line plumber orange county', 'bbq gas line installation newport beach'],
  },
  {
    slug: 'sewer-line',
    name: 'Sewer Line Repair & Replacement',
    shortName: 'Sewer Lines',
    metaTitle: 'Sewer Line Repair Orange County CA | Trenchless Sewer | America\'s Plumbing',
    metaDescription: 'Sewer line repair & replacement in Orange County, CA. Trenchless options available. Camera inspection. C-36 Licensed. Free estimates. Call (949) 379-0082.',
    h1: 'Sewer Line Repair & Replacement in Orange County, CA',
    eyebrow: 'Trenchless Options Available',
    intro: 'A damaged or collapsed sewer line is one of the most serious — and expensive — plumbing problems a homeowner can face. America\'s Plumbing provides comprehensive sewer line services throughout Orange County, from targeted repairs to complete replacements. We offer both traditional and trenchless methods so you can choose the approach that works best for your property.',
    body: [
      'Many Orange County homes still have clay or cast iron sewer lines that are decades old. These materials crack, corrode, and are easily infiltrated by tree roots. Warning signs include multiple slow drains throughout your home, gurgling sounds from toilets, sewage odors in your yard, or soft wet patches in your lawn over the sewer line path.',
      'Before any repair, we run a high-definition camera through your sewer line to see exactly what\'s happening and where. This prevents unnecessary digging and ensures we recommend the right repair method for your specific situation — patch repair, pipe lining, pipe bursting, or full replacement.',
      'Trenchless sewer repair is available for many situations, which means we can repair or replace your sewer line with minimal digging — protecting your landscaping, driveway, and yard. We\'ll show you the camera footage and explain all your options with clear pricing before any work begins.',
    ],
    included: [
      { title: 'Sewer Camera Inspection', desc: 'High-definition in-line camera to diagnose sewer issues with precision.' },
      { title: 'Sewer Line Repair', desc: 'Targeted repair of cracks, joint failures, and root intrusions.' },
      { title: 'Trenchless Pipe Lining', desc: 'CIPP lining to rehabilitate damaged pipes without excavation.' },
      { title: 'Trenchless Pipe Bursting', desc: 'Replace old pipe by pulling new pipe through — minimal digging required.' },
      { title: 'Sewer Line Replacement', desc: 'Full sewer line replacement when lining or repair is not viable.' },
      { title: 'Root Removal & Treatment', desc: 'Mechanical root cutting plus chemical treatment to prevent regrowth.' },
    ],
    faqs: [
      { q: 'How do I know if my sewer line is damaged?', a: 'Multiple slow drains, gurgling sounds, sewage smell in the yard, wet spots in the lawn, or unusually green grass over the sewer line path are all warning signs.' },
      { q: 'What is trenchless sewer repair?', a: 'Trenchless methods (pipe lining or pipe bursting) allow us to repair or replace your sewer line with minimal digging — usually just 1–2 small access points rather than a full trench.' },
      { q: 'How long does sewer line replacement take?', a: 'Trenchless repairs typically take 1 day. Traditional excavation and replacement depends on line length but is usually 2–4 days.' },
      { q: 'Does homeowner\'s insurance cover sewer line damage?', a: 'Standard policies typically don\'t cover sewer line repair, but many insurers offer sewer line endorsements. We provide full documentation to support any claim.' },
    ],
    keywords: ['sewer line repair orange county', 'trenchless sewer repair irvine', 'sewer line replacement oc', 'sewer camera inspection orange county', 'sewer line repair newport beach'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
