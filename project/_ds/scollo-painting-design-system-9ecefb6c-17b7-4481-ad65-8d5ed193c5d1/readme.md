# Scollo Painting Inc. — Design System

A brand & UI design system for **Scollo Painting Inc.**, a residential & commercial
painting contractor based in Stuart, FL (serving Palm Beach, Martin & Broward
Counties). This system powers a high-end, conversion-focused marketing website and
any related collateral.

> **Positioning:** Established, trustworthy, premium — *"Over 45 years of experience."*
> Family-run craftsmanship, not a cheap handyman. Upscale home-services brand.

---

## Sources & provenance

This is a **greenfield brand** — no prior codebase, Figma, or design tokens were
provided. The system was authored from a written creative brief (positioning,
palette, type, UX direction). The legacy site being replaced is
`scollopaintingfl.com` (outdated; not used as a visual reference).

**Font substitution flag:** No licensed brand font binaries were supplied. The system
uses the closest premium-editorial pairing available on Google Fonts —
**Newsreader** (display serif) + **Hanken Grotesk** (body sans). Swap in licensed
binaries with local `@font-face` rules when available.

---

## Business facts (NAP — use verbatim everywhere)

| Field | Value |
|---|---|
| Name | **Scollo Painting Inc.** |
| Tagline | Over 45 years of experience. |
| Phone | **561-306-1813** (click-to-call everywhere) |
| Address | 848 S.E. Fleming Way, Stuart, FL 34997 |
| Hours | Mon–Sat 9:00 AM – 5:00 PM · Sun Closed |
| Payments | Mastercard, Visa, Discover, Amex, Check, Debit, Credit, Cash |
| Status | Licensed & fully insured |

**Services:** Interior Painting · Exterior Painting · Commercial Painting ·
Plaster & Drywall Repair.
**Why choose us:** Professionalism · Expertise · Care — plus Industry Experts,
Quick Turnaround, Cost Transparency (fixed up-front pricing), standout Customer
Service. One company, single point of contact.

---

## Content fundamentals (voice & tone)

**Vibe:** Confident, warm, grounded. We sound like a multi-generation family trade
business that has earned its reputation — never salesy, never gimmicky. Premium but
approachable; the craft speaks for itself.

- **Person:** Address the customer as **"you"** / **"your home."** Refer to the
  company as **"we"** / **"our crew."** Never first-person singular ("I").
- **Casing:** Sentence case for body and most headings. Title Case reserved for
  proper nouns, service names, and nav labels. Eyebrows/overlines are UPPERCASE with
  wide tracking (e.g. `OVER 45 YEARS IN BUSINESS`).
- **Sentence length:** Short, declarative, benefit-first. Lead with the outcome
  ("Transform your curb appeal"), then the method ("Florida-climate-appropriate prep
  and durable finishes").
- **No emoji. No exclamation spam.** At most one exclamation mark per page, if any.
  Trust comes from specifics, not hype.
- **Numbers as proof:** "45+ years," "20 cities served," "fixed pricing quoted up
  front." Use real, verifiable specifics — never invented stats or filler.
- **CTA language:** Primary is always **"Get a Free Quote"** (appointment/quote
  framing). Secondary is click-to-call **"Call 561-306-1813."** Avoid aggressive
  phone-only pressure.

**Example copy:**
> *Eyebrow:* PROFESSIONAL PAINTERS · STUART, FL
> *H1:* A finish your home deserves.
> *Lead:* For over 45 years, families and businesses across the Treasure Coast have
> trusted our crew for clean lines, durable finishes, and pricing quoted up front —
> with no surprises.

---

## Visual foundations

**Color.** A deep, sophisticated **navy** base (`--navy-900 #0f2034`) anchors the
brand and signals trust + permanence. A single **warm amber/gold** accent
(`--amber-500 #c18a3d`) carries CTAs, rules, and highlights — it reads premium and
hand-crafted (think aged brass / linseed oil), never neon. Neutrals are **warm-tinted**
(paper `#faf8f4`, warm stone grays) rather than cold gray, keeping the editorial,
residential warmth. Crisp white for cards.

**Type.** Editorial high-contrast serif (**Newsreader**) for display & headings —
confident, magazine-like, with an *italic serif accent* used for a single emphasized
word inside a headline. Clean grotesque (**Hanken Grotesk**) for body and UI: highly
legible, modern, trustworthy. Strong hierarchy, generous size jumps (72→56→36→28→22).
Tight letter-spacing on large display; wide uppercase tracking on eyebrows.

**Spacing & layout.** Generous whitespace is the signature. 4px base scale; section
padding is large (96–128px vertical on desktop). Max content width 1200px with a
fluid gutter; a 760px narrow measure for prose. Asymmetric, editorial grids over
rigid symmetry. One H1 per page.

**Backgrounds.** Mostly warm white (`--paper`) and crisp white cards, punctuated by
full-bleed **navy** bands (closing CTA, footer, section breaks) and full-bleed
**photography** (hero, gallery). No gradients-as-decoration; the only gradients are
subtle **image-protection scrims** (navy→transparent) behind text over photos. No
busy textures or patterns.

**Imagery.** Large, high-quality before/after and crew-at-work photography is central.
Warm, natural daylight tone — true-to-life color, not heavily filtered, not B&W. All
imagery placeholders are clearly labeled blocks (with intended alt text) for the
client to swap in real photos.

**Corners & cards.** Restrained radii — `--radius-md 8px` for cards/inputs,
`--radius-lg 14px` for feature panels, `--radius-pill` only for tags/badges and the
occasional button. Cards are white with a hairline warm border (`--border-subtle`)
and a soft, warm-tinted shadow (`--shadow-sm`/`--shadow-md`); they lift to
`--shadow-md` on hover. Avoid heavy drop shadows and the "rounded card + colored
left-border" cliché.

**Borders & shadows.** Hairline 1px warm-stone borders define structure. Shadows are
soft and low-opacity, tinted toward navy (`rgba(15,32,52,…)`) so they feel like real
ambient shade, not gray haze. The gold rule (`.rule-accent`, 48×3px) is a recurring
section marker.

**Motion.** Calm and premium. Fades + short upward translate (12–16px) on scroll
reveal; `--ease-out` for entrances, `--dur-base 240ms` default. Before/after slider
drags smoothly. No bounces, no infinite loops, no parallax gimmicks. Respect
`prefers-reduced-motion`.

**Hover/press.** Buttons: primary darkens (`--amber-600`) and lifts slightly with a
warm shadow on hover; on press, settle back down (translateY 0) — no shrink-scale.
Links shift to `--amber-600`. Cards lift + border darkens. Transitions ~140–240ms.

**Transparency & blur.** Sparing. The sticky header gains a translucent white
backdrop with light blur once scrolled. Image scrims use solid-color alpha gradients.
No glassmorphism elsewhere.

---

## Iconography

See the **ICONOGRAPHY** section below — the system uses **Lucide** (CDN) as a
substitute icon set (clean 1.5–2px stroke, rounded joins) since no brand icon assets
were provided.

### ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) via CDN — `lucide` web font / SVG sprite.
  Chosen for its clean, even **1.75px stroke**, rounded line caps/joins, and humanist
  geometry that complements the editorial type without feeling techy. **This is a
  substitution** (no brand icons were provided) — flag for replacement if the client
  has a custom set.
- **Style rules:** Line (stroke) icons only — never filled/duotone. Default size
  20–24px in UI, up to 40px in feature blocks. Icon color follows text color; the
  amber accent is used only for emphasis (e.g. a checkmark in a trust list).
- **Common icons:** `phone`, `map-pin`, `clock`, `paint-roller`/`brush`,
  `check`, `chevron-right`, `arrow-right`, `star`, `shield-check`, `menu`, `x`.
- **Emoji:** Never used. **Unicode glyphs:** avoided as icons; use Lucide.
- **Payment marks:** card-brand logos (Visa, Mastercard, Discover, Amex) render as
  small monochrome/labeled placeholder marks in the footer.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import list only). Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry point.

**Tokens** (`tokens/`)
- `fonts.css` — webfont loading (Google Fonts; substitution flagged)
- `colors.css` — navy/amber/neutral palette + semantic aliases
- `typography.css` — families, scale, weights, line-height, tracking
- `spacing.css` — spacing, radii, borders, shadows, layout, motion
- `base.css` — element defaults + text/layout utilities

**Foundation cards** (`guidelines/`) — specimen cards for the Design System tab.

**Components** (`components/core/`) — Button, PhoneLink, Input, Textarea, Select,
Card, Badge, ServiceCard, TrustItem, BeforeAfter, SectionHeading. (See cards.)
Each has a `.jsx` (implementation), `.d.ts` (props), `.prompt.md` (usage), and the
group shares `*.card.html` specimens. Starting points: Button, SectionHeading,
BeforeAfter.

**UI kit** (`ui_kits/website/`) — interactive recreation of the marketing site:
`index.html` (orchestrator + routing + LocalBusiness JSON-LD), `site.jsx`
(sticky Header, CtaBand, Footer w/ NAP + payments + map placeholder), `home.jsx`
(Hero, ServicesGrid, WhyUs, Before/After Gallery, Areas), `quote.jsx` (lead-form
QuoteScreen, ServicesScreen, SimpleScreen), `icons.jsx` (Lucide helper).

---

*Authored as a complete brand system. See CAVEATS in the delivery note for items
needing client input (real photography, licensed fonts, custom icons).*
