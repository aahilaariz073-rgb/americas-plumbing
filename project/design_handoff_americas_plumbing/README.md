# Handoff: America's Plumbing Website

## Overview
A full single-page marketing website for **America's Plumbing**, a plumbing contractor based in Orange County, CA (owner: Joe, phone: (949) 379-0082). The site is designed for GoHighLevel deployment or direct Vercel hosting. It is a high-fidelity design reference — see "Fidelity" below.

## About the Design Files
The files in this bundle (`Americas Plumbing.dc.html`) are **design references created in HTML** — high-fidelity prototypes showing the intended look, copy, layout, and interactions. They are not production code to ship directly.

**Your task:** Recreate these designs in a production codebase. If no framework has been chosen yet, **Next.js (App Router) + Tailwind CSS** is the recommended stack for Vercel deployment — it gives you a zero-config Vercel pipeline, built-in image optimization, and easy form routing via API routes or a service like Resend/GHL webhooks.

---

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-accurately using the design tokens listed below.

---

## Site Structure — 10 Sections

### 1. Navigation (Sticky)
- **Height:** 68px
- **Background:** `#080f1f`
- **Border-bottom:** `1px solid rgba(255,255,255,0.08)`
- **Left:** Logo (`assets/logo.png`) — white-inverted, height 48px, links to `#hero`
- **Center (desktop):** 5 nav links — Services, Why Us, Areas, Reviews, FAQ
  - Color: `rgba(255,255,255,0.6)` → hover `#fff`
  - Font: 0.82rem, weight 600, `letter-spacing: 0.1em`, `text-transform: uppercase`
- **Right:** CTA phone button `(949) 379-0082` — `background: #C8202A`, color `#fff`, 0.875rem, weight 700, `border-radius: 5px`, padding `10px 22px`, pulsing box-shadow animation
- **Mobile:** Hamburger button (40×40px, `border: 2px solid rgba(255,255,255,0.2)`) toggles a full-width dropdown menu with all nav links + red CTA button at bottom
- **Sticky behavior:** `position: sticky; top: 0; z-index: 200`

---

### 2. Hero
- **Background:** `#080f1f`, `min-height: 94vh`, flex center
- **Decorative elements:**
  - Diagonal blue band: `clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)`, `background: #1A52BE`, `opacity: 0.07`, positioned top-right
  - Thin red vertical slash: `2px wide`, same clip-path area, `opacity: 0.5`
- **Bottom rule:** `height: 3px`, `background: linear-gradient(to right, #C8202A, #1A52BE, #C8202A)`
- **Layout:** 2-column grid (`1fr 420px`), gap 72px, max-width 1240px, padding 80px 28px. Single column on mobile.

**Left column (text):**
- Eyebrow: `width: 28px red line + "Licensed · Insured · Orange County"` in `#C8202A`, 0.75rem, weight 700, `letter-spacing: 0.22em`, uppercase
- H1: `"Southern California's / Trusted / Plumbers"` — "Trusted" in `#C8202A`
  - Font: Newsreader serif, `clamp(3rem, 5.5vw, 5rem)`, weight 700, `line-height: 1.04`, `letter-spacing: -0.025em`
- Body: `rgba(255,255,255,0.55)`, 1.1rem, `line-height: 1.7`, max-width 460px
- CTAs (flex row, gap 14px):
  - Primary: `"Get Free Quote"` — `background: #C8202A`, `color: #fff`, `border-radius: 4px`, padding `15px 36px`, uppercase, weight 700
  - Secondary: `"(949) 379-0082"` — transparent, `border: 1px solid rgba(255,255,255,0.25)`, `color: #fff`
- Stats row (flex, gap 36px, `border-top: 1px solid rgba(255,255,255,0.08)`, padding-top 20px):
  - `5.0` · Google Rating
  - `10+` · Years Serving SoCal
  - `24/7` (in `#C8202A`) · Emergency Service
  - Numbers: Newsreader serif, 2.2rem, weight 700, `color: #fff`
  - Labels: `rgba(255,255,255,0.4)`, 0.75rem, uppercase, `letter-spacing: 0.1em`
  - Separated by `1px solid rgba(255,255,255,0.08)` vertical dividers

**Right column (image):**
- Placeholder: dark gradient box `aspect-ratio: 3/4`, `border-radius: 8px`, `border: 1px solid rgba(255,255,255,0.07)`
- Replace with real job-site or team photo using `<Image>` (Next.js)
- Floating badge (bottom-right, `position: absolute; bottom: -16px; right: -16px`):
  - `background: #C8202A`, `padding: 18px 22px`, `border-radius: 6px`
  - `box-shadow: 0 12px 40px rgba(200,32,42,0.45)`
  - Text: `"C-36"` (Newsreader, 1.9rem, weight 700) + `"Licensed"` (0.68rem, uppercase)

---

### 3. Services
- **Background:** `#fff`, padding `100px 28px`
- **Header row** (flex, space-between, `border-bottom: 1px solid #e8eaf0`, margin-bottom 72px):
  - Eyebrow + H2: `"Full-Service Plumbing, Done Right"` (Newsreader, `clamp(2.2rem, 4vw, 3.2rem)`, weight 700, `color: #080f1f`, italic on "Done Right")
  - "Book a Service" button: `background: #080f1f`, `color: #fff`, `border-radius: 4px`, 0.82rem, uppercase, `letter-spacing: 0.08em`
- **Grid:** 3×2, no gap, divided by `1px solid #e8eaf0` borders (right + bottom borders per cell)
- **Each card:**
  - Large number (01–06): Newsreader, ~5rem, weight 700, `color: #f0f1f5` (decorative ghost)
  - H3: 1.15rem, weight 700, `color: #080f1f`
  - Body: `color: #5a5e72`, 0.9rem, `line-height: 1.65`
  - Padding: `36px` (adjusted for edge cells — first col removes right padding, last col removes left)
- **Services:**
  1. Emergency Repairs
  2. Leak Detection & Repair
  3. Whole-Home Repiping
  4. Drain Cleaning
  5. Water Heater Services
  6. Fixture Installation

---

### 4. Why Choose Us
- **Background:** `#f7f8fc`, padding `100px 28px`
- **Left edge accent:** `position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(to bottom, #C8202A, #1A52BE)`
- **Header:** centered, eyebrow + H2 `"Why Homeowners Choose Us"` (Newsreader, `clamp(2.2rem, 4vw, 3rem)`)
- **Grid:** 4 columns (`repeat(auto-fit, minmax(260px, 1fr))`), gap `2px`, `background: #e0e2ea` (creates gap as lines)
- **Each panel:** `background: #fff`, padding `44px 36px`
  - Number: Newsreader, 3rem, `color: #C8202A`, weight 700
  - H3: 1.1rem, weight 700, `color: #080f1f`
  - Body: `color: #5a5e72`, 0.875rem
- **Panel 4 (American-Owned):** `background: #080f1f`, H3 `color: #fff`, body `color: rgba(255,255,255,0.5)`
- **4 pillars:** Same-Day Response · Upfront Pricing · Licensed & Insured · American-Owned

---

### 5. Service Areas
- **Background:** `#fff`, padding `100px 28px`
- **Layout:** 2-column grid (`1fr 1fr`), gap 80px. Single column mobile.
- **Left:** Eyebrow + H2 + body copy + city chips + CTA button
  - City chips: `background: #f7f8fc`, `border: 1px solid #e0e2ea`, `color: #080f1f`, `border-radius: 3px`, padding `8px 16px`, 0.82rem, weight 600
  - "+ More Areas" chip: `background: #C8202A`, `color: #fff`
  - CTA: `background: #1A52BE`, `color: #fff`, `border-radius: 4px`, uppercase
- **Right:** Google Maps embed placeholder (aspect-ratio 1:1, `border: 1px dashed #c8cad4`)
- **Cities:** Irvine, Newport Beach, Laguna Hills, Mission Viejo, Lake Forest, Aliso Viejo, San Clemente, Huntington Beach, Anaheim, Santa Ana

---

### 6. Testimonials
- **Background:** `#080f1f`, padding `100px 28px`
- **Header row:** H2 `"What Customers Say"` + `★★★★★ 5.0 on Google` right-aligned
- **Grid:** 3 columns (`repeat(auto-fit, minmax(300px, 1fr))`), `gap: 1px`, `background: rgba(255,255,255,0.08)` (hairline dividers)
- **Panel 1 & 3:** `background: #080f1f`; **Panel 2:** `background: #0d1626`
- **Each card** (padding `44px 36px`):
  - Large opening quote `"`: Newsreader, 5rem, `color: #C8202A` or `#1A52BE`, `line-height: 0.7`, weight 400
  - Quote text: `rgba(255,255,255,0.7)`, 0.975rem, `line-height: 1.75`
  - Footer (flex, space-between, `border-top: 1px solid rgba(255,255,255,0.08)`):
    - Name (white, weight 700) + Location (`rgba(255,255,255,0.35)`)
    - `★★★★★` in `#F5C518`
- **Reviews:**
  - Maria T. (Irvine) — slab leak same-day
  - Robert K. (Newport Beach) — burst pipe midnight
  - David L. (Mission Viejo) — repiping job

---

### 7. Before & After Gallery
- **Background:** `#fff`, padding `100px 28px`
- **Grid:** 2×2, `gap: 4px`
- **Each cell:** colored background placeholder, `aspect-ratio: 4/3`
  - Before cells: `background: #eef0f6`, SVG image icon, gray label
  - After cells: `background: #e8f2ea`, SVG image icon, green label
  - Badge: `position: absolute; top: 14px; left: 14px`
    - BEFORE: `background: #C8202A`, white text, uppercase
    - AFTER: `background: #1A52BE`, white text, uppercase
- **Replace** placeholder divs with `<Image>` components pointing to real before/after photos

---

### 8. FAQ Accordion
- **Background:** `#f7f8fc`, padding `100px 28px`, max-width 760px centered
- **Each item:** `border-bottom: 1px solid #e0e2ea`
- **Button:** full width, flex space-between, padding `22px 0`
  - Question: 1rem, weight 600, `color: #080f1f`
  - Chevron circle: `28×28px`, `border: 1px solid #e0e2ea`, `border-radius: 50%`, shows `+` / `−`
    - Open state: `background: #C8202A`, `color: #fff`
- **Panel:** `max-height: 0` → expanded via JS; answer text `color: #5a5e72`, 0.95rem
- **One open at a time**
- **7 questions:**
  1. Do you offer 24/7 emergency plumbing?
  2. How soon can you come out?
  3. Are you licensed and insured?
  4. Do you give free estimates?
  5. What areas do you serve?
  6. Do you warranty your work?
  7. How much does a typical repair cost?

---

### 9. Contact Form
- **Background:** `#080f1f`, padding `100px 28px`
- **Top rule:** `3px`, `linear-gradient(to right, #C8202A, #1A52BE, #C8202A)`
- **Layout:** 2-column grid (`1fr 1fr`), gap 80px
- **Left info column:**
  - Eyebrow + H2 `"Request a Free Quote"` (Newsreader)
  - 3 info rows (Phone · Email · Service Area), each with `2px colored vertical bar` + label + value
    - Phone bar: `#C8202A`; Email/Area bars: `#1A52BE`
    - Hover: `padding-left: 8px` slide-in effect
- **Right — Form fields:**
  - First Name + Last Name (2-col grid)
  - Phone (required)
  - Email
  - Service dropdown (7 options)
  - Message textarea (4 rows)
  - Submit: `background: #C8202A` → hover `#a81820`, uppercase, weight 700
  - Input styles: `background: rgba(255,255,255,0.06)`, `border: 1px solid rgba(255,255,255,0.12)`, `color: #fff`, focus border → `#C8202A`
  - **On submit:** validate required fields → show loading → replace form with success message
  - **Wire to GHL webhook:** replace the `setTimeout` mock with a `fetch()` POST to `https://your-ghl-webhook-url`

---

### 10. Footer
- **Background:** `#040a14`, `border-top: 3px solid #C8202A`, padding `60px 28px 28px`
- **Grid:** 4 columns (`2fr 1fr 1fr 1fr`), gap 40px → 2 columns on mobile
- **Col 1:** Logo (white-inverted, 52px) + tagline + social links (Facebook, Instagram, Google)
- **Cols 2–3:** Services links, Areas links — `color: #3a4a60` → hover `#fff`
- **Col 4:** Phone `(949) 379-0082` (white, weight 700) + email + location + "Get a Quote" CTA
- **Bottom bar:** `border-top: 1px solid rgba(255,255,255,0.06)`, copyright left, Privacy/Terms right

---

## Interactions & Behavior

| Interaction | Behavior |
|---|---|
| Nav scroll | Sticky top; no style change on scroll (already dark) |
| Mobile nav | Hamburger toggles flex column dropdown below nav bar |
| CTA phone button | `animation: pulse` — repeating red box-shadow glow |
| Smooth scroll | `html { scroll-behavior: smooth }` |
| Service card hover | `transform: translateY(-4px)` + shadow (optional, was removed in redesign — add back if desired) |
| FAQ accordion | Click toggles panel; one open at a time; `max-height` transition |
| Form validation | Required: firstName, lastName, phone. Shows inline error in red |
| Form success | Replaces form with centered checkmark + confirmation copy |
| Scroll reveal | `.reveal` elements fade+slide up as they enter viewport (`opacity 0→1`, `translateY 20px→0`) |

---

## Design Tokens

### Colors
```
--crimson:        #C8202A   (primary CTA, accents, FAQ open state)
--royal-blue:     #1A52BE   (secondary accent, "Check Your Area" CTA)
--charcoal:       #080f1f   (hero bg, testimonials bg, contact bg, nav bg)
--deep-dark:      #040a14   (footer bg)
--dark-mid:       #0d1626   (testimonial middle panel)
--off-white:      #f7f8fc   (Why Us bg, FAQ bg)
--white:          #ffffff   (Services bg, Areas bg, Gallery bg)
--body-text:      #5a5e72   (body copy on light)
--heading:        #080f1f   (headings on light)
--border:         #e0e2ea   (hairline dividers)
--gold-star:      #F5C518   (review stars)
```

### Typography
```
--font-display:   "Newsreader", Georgia, serif     (all headings + stats)
--font-body:      "Hanken Grotesk", system-ui, sans-serif

Google Fonts import:
  Newsreader: ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400
  Hanken Grotesk: wght@400;500;600;700;800

Scale:
  Hero H1:     clamp(3rem, 5.5vw, 5rem),  weight 700, ls -0.025em, lh 1.04
  Section H2:  clamp(2.2rem, 4vw, 3rem),  weight 700, ls -0.02em,  lh 1.1
  H3 cards:    1.1–1.15rem,               weight 700
  Eyebrow:     0.75rem, weight 700, ls 0.22em, uppercase
  Body:        0.875–1.1rem, lh 1.65–1.75
  Nav links:   0.82rem, weight 600, ls 0.1em, uppercase
```

### Spacing
- Section padding: `100px 28px` (desktop), reduce to `64px 20px` mobile
- Max content width: `1240px`
- Grid gaps: `72px` (hero), `80px` (2-col), `40px` (footer)

### Border Radius
- Buttons: `4px` (sharp, intentional)
- Image placeholders: `6–8px`
- Form inputs: `4px`
- FAQ chevron: `50%`

### Animations
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(200,32,42,0.5); }
  60%      { box-shadow: 0 0 0 12px rgba(200,32,42,0); }
}
```
- Scroll reveal: `.reveal` → `.reveal.on` via IntersectionObserver + 350ms safety-net fallback

---

## Assets

| Asset | File | Notes |
|---|---|---|
| Logo | `assets/logo.png` | Royal blue eagle + house + wordmark. Use white-inverted (`filter: brightness(0) invert(1)`) on dark backgrounds |

---

## Deployment Notes (Vercel)

1. **Recommended stack:** Next.js 14 (App Router) + Tailwind CSS
2. **Vercel config:** Zero-config for Next.js — just `vercel deploy` or connect GitHub repo
3. **Contact form:** Replace the mock `setTimeout` with a `fetch()` POST to your GHL webhook, or use a Next.js API route (`/api/contact`) that forwards to GHL / sends email via Resend
4. **Images:** Use `next/image` for all photos (logo, hero, gallery) — automatic WebP + lazy load
5. **Fonts:** Use `next/font/google` to load Newsreader + Hanken Grotesk (eliminates FOUT, self-hosted)
6. **Smooth scroll:** Add `scroll-behavior: smooth` to `html` in `globals.css`
7. **Domain:** Point your custom domain in Vercel dashboard → Settings → Domains

---

## Files in This Package

| File | Description |
|---|---|
| `Americas Plumbing.dc.html` | Full high-fidelity HTML prototype — all 10 sections, interactive FAQ + form |
| `assets/logo.png` | America's Plumbing logo (1080×1080, transparent PNG) |
| `README.md` | This document |
