# BUILDPLAN_FINAL — Mined Without A Trace: Final Version

## Context

The current v2 build is a functional but emotionally thin guided tour: land → select → diagram → globe → info cards. The goal for the final version is to reframe the experience as a revelation — the aesthetic warmth of hand-drawn zine art against the moral weight of what it's describing. The user should feel implicated, not just informed.

The plan transforms the site into a three-act comic/interactive piece:
- **Act I (Wonder)**: A comic strip prologue showing a phone's mundane life before the reveal
- **Act II (Rupture)**: InsideScoop.com — a fake consumer tech comparison site that devolves into supply chain horror
- **Act III (Reckoning)**: A phone box with a price tag. Click to see what it really costs.

**Base**: `projectv2/` (v3 source was lost; v2 has full source + all assets)
**Working directory for all dev**: `project-final/` (scaffold fresh from v2)

---

## RESEARCH

*Do this before Day 1 dev starts. All written content goes into `src/data/` JSON files.*

### Miner portrait card (globe → cobalt → DRC pin)
- Named character (fictional composite, clearly labeled, grounded in documented facts)
- Age, location (Kolwezi or Kipushi), hours/day, daily wage in USD
- One direct quote or paraphrase from a primary source
- Sources: `research/blood-batteries.pdf`, `research/DRC Conflict Minerals Special Report.pdf`

### Chinese refinery card (globe → cobalt → China processing pin)
- Company: Huayou Cobalt, Tongxiang, Zhejiang — controls ~40% of global cobalt refining
- Annual revenue (2024), % of Apple/Samsung supply chain
- Sources: `research/Critical Minerals Explained.pdf`, public SEC filings

### Brand card (globe → cobalt → assembly/consumer pin)
- Apple: iPhone 16 revenue, stated "conflict-free" supply chain commitment + the gap
- What "conflict-free" certification actually covers vs. artisanal mining reality

### InsideScoop.com "specs" — supply chain facts disguised as product features
These appear as the phone spec lists on the fake comparison site. Each should read like a normal spec at first glance but contain the real sourcing fact:
- Battery: "Cobalt-cell lithium-ion — 70% of world supply from DRC"
- Processor: "Tantalum capacitors — primary source: eastern DRC conflict zone"
- Display: "Rare earth phosphors — refined in Jiangxi, China (60% global share)"
- Circuit board: "Tin solder — smelted in Bangka Island, Indonesia"
- Vibration motor: "Tungsten rotor — majority sourced from Myanmar"

### 5 organizations for the reckoning page
1. **Enough Project** — enoughproject.org — conflict minerals advocacy and policy campaigns
2. **Global Witness** — globalwitness.org — investigative accountability on supply chains
3. **Responsible Minerals Initiative** — responsiblemineralsinitiative.org — industry auditing standards
4. **UNICEF** — unicef.org/supply — child labor in artisanal mining programs
5. **iFixit** — ifixit.com — right-to-repair as ethical consumption, device longevity

---

## DRAWING

*All illustrations hand-drawn by you, digitized, saved to `public/illustrations/`. I build placeholder slots — drop in final art when ready.*

### Priority 1: Prologue panels (draw these first)
Four full-bleed panels, same landscape aspect ratio as the landing SVG (~4:3 or 16:9, your call). Each panel is clicked through in sequence before arriving at InsideScoop.

- **prologue-a.png** — Exclamation point + feet tripping (comedic, energetic — the phone buzzes in the pocket)
- **prologue-b.png** — Hand dropping the phone (close-up, mid-air, slow-motion feeling)
- **prologue-c.png** — Phone face-down in a sewer grate, screen cracked (tone shifts here — grim)
- **prologue-d.png** — Hand tosses phone into a trash can. In the background: a desk with a monitor showing "InsideScoop.com — Compare top smartphones 2026"

### Priority 2: Globe portrait cards (3 small portrait-format illustrations)
- **portrait-mine.png** — Miner: child or young adult, DRC mine setting, hand-drawn zine style. Caption will appear alongside.
- **portrait-refinery.png** — Refinery: abstract industrial machine or Huayou Cobalt logo aesthetic. Ironic corporate cleanliness.
- **portrait-brand.png** — Brand: stylized Apple logo mockup or store aesthetic. Deliberate polish/irony.

### Priority 3: Reckoning page
- **phone-box.png** — A sleek product box (iPhone-style) with a hand-scrawled price tag hanging off a string. The tag shows "$1,199".

### Lower priority (if time allows)
- Hand-drawn annotation circle reference — guides the style for the diagram label system

---

## DEV

*All dev work happens in `project-final/` scaffolded from v2.*

### Setup (before Day 1)
```
cp -r projectv2 project-final
cd project-final
npm install
```
Add Playfair Display + IBM Plex Mono to `layout.tsx` via `next/font/google` (were in v3, missing from v2 layout).

---

### DAY 1 — Act I + Act II Select

#### 1.1 Update landing (`src/app/page.tsx`)
- Change `router.push("/select")` → `router.push("/prologue")`
- No other changes

#### 1.2 New prologue route (`src/app/prologue/page.tsx`)
- `'use client'`
- State: `panelIndex` (0–3)
- Click anywhere → advance panel; at panel 3, navigate to `/select`
- Each panel: full-screen `<img>` pointing to `public/illustrations/prologue-{a,b,c,d}.png`
- Placeholder until art is ready: cream background + centered label ("Panel A", etc.) with ink border
- Transition: cross-fade between panels (opacity 0→1, CSS, 0.4s)
- Panel D (desk scene): add a subtle zoom-in CSS animation on the monitor area before auto-navigating
- Hint text at bottom: "click anywhere to continue" (mono, warm-gray, fades out after first click)

#### 1.3 InsideScoop.com select redesign (`src/app/select/page.tsx`)
Full page redesign. Looks like a real consumer tech comparison website. The rupture lives in the details.

**Header:**
- `InsideScoop` wordmark — IBM Plex Mono, large, ink color
- Fake nav: "Reviews · Compare · Deals · Newsletter" — non-functional links, mono, warm-gray
- Decorative search bar (non-functional, placeholder "Search phones, reviews...")
- Thin bottom border in warm-gray

**Hero:**
- Large Playfair Display headline: *"Compare top smartphones for 2026"*
- Cranberry underline on "top smartphones"
- Subtext in mono: "Unbiased specs. Real performance. Everything you need to know."

**Three-column phone comparison cards:**
Each card has:
- Phone image (reuse existing illustrations or placeholder)
- Phone name + brand in Playfair Display
- "Specs" list — these are the supply chain facts from RESEARCH, styled as normal tech specs (mono, small, line-by-line)
- Star rating (decorative — e.g. ★★★★☆)
- CTA button

iPhone 16 (center, active):
- CTA: "Explore internals →" → navigates to `/diagram/iphone`
- Subtle cranberry border on the card

Galaxy S25 (left, stub):
- CTA: "Coming soon" — grayed out, not clickable

Pixel 10 (right, stub):
- CTA: "Coming soon" — grayed out, not clickable

**Hover corruption effect (the first rupture hint):**
On hover over any phone card, one spec line briefly flickers — its text flashes cranberry red for ~200ms then returns to normal. Use a CSS animation triggered by JS `onMouseEnter`. This is the first moment the facade cracks.

---

### DAY 2 — Act II Diagram + Act II Globe

#### 2.1 Component diagram label overhaul (`src/app/diagram/[phone]/page.tsx`)
Remove the existing pill/squoval `<button>` labels. Replace with an SVG overlay system:

Each component gets:
- An `<ellipse>` or irregular `<circle>` (slightly off-round, hand-drawn feel — adjust rx/ry slightly per label)
- A `<line>` annotation connecting the circle to the component location on the diagram
- A `<text>` element inside the circle — Playfair Display italic, ink, rotated ±1–3deg per label (alternating)

Animation on mount:
- Lines: `stroke-dasharray` set to line length, `stroke-dashoffset` animated to 0 via CSS keyframe (0.6s ease)
- Circles + text: fade in after line completes (0.2s delay offset per label)
- Stagger: 150ms between each label's entrance

Hover: circle fill → cranberry, text → cream (CSS transition 0.15s)
Click: same as before → `/globe/[mineral]`

Component positions stay the same (same x/y from existing `COMPONENTS` array).

#### 2.2 Globe: three icon types (`src/app/globe/[mineral]/page.tsx`)
Replace single point type with three HTML marker types via `react-globe.gl` `htmlElementsData`:

- **Pickaxe icon** (mine): at DRC mine coordinates from minerals.json
- **Gear/factory icon** (refinery): Tongxiang, China (30.76°N, 120.55°E) — add to minerals.json cobalt entry
- **Smartphone icon** (brand/consumer): Cupertino, CA (37.33°N, -122.03°E) — add to minerals.json cobalt entry

Each icon: small ink-black SVG path (24×24px), renders as `htmlElement` on globe surface. Click → opens portrait card overlay (see 2.3).

#### 2.3 Portrait card overlay
Triggered by clicking an icon on the globe. Slides in from the right or replaces the top of the info panel.

Card layout:
- Illustration slot: 180×240px `<img>` with dashed ink border as placeholder
- Name + location: IBM Plex Mono, small caps
- 2-sentence story: Playfair Display, 1rem
- Stat line: mono, cranberry — e.g. "$1.80/day · 10 hrs · age 14"
- "×" close button in top-right corner

Data source: new `src/data/stories.json`:
```json
{
  "cobalt-mine": {
    "name": "Amani, 14",
    "location": "Kolwezi, DRC",
    "story": "...",
    "stat": "$1.80/day · 10-hour shifts · no protective equipment",
    "image": "/illustrations/portrait-mine.png"
  },
  "cobalt-refinery": { ... },
  "cobalt-brand": { ... }
}
```

#### 2.4 Supply chain arc sequential animation
Modify `GlobeView` component to animate arcs sequentially:
- Arc 1 (mine → refinery): appears at 500ms
- Arc 2 (refinery → assembly): appears at 1200ms
- Arc 3 (assembly → consumer): appears at 2000ms

Use `arcDashInitialGap` and `arcDashAnimateTime` props in react-globe.gl, or manage visibility via state + `setTimeout`.

Each arc gets a floating label (country name) that fades in with the arc — use `htmlElementsData` or a positioned `<div>` for each midpoint.

#### 2.5 Comic strip info panel (replaces card deck)
Redesign the right-side info panel. Instead of dot-nav card deck, use a continuous vertical scroll:

Each "beat" is a comic panel:
```
┌─────────────────────────────┐
│  [illustration zone — 180px │
│   tall, ink border, cream   │
│   bg — placeholder or art]  │
├─────────────────────────────┤
│  Caption text               │
│  Playfair Display, 0.9rem   │
│                             │
│  ❝ Pull quote in large      │
│    Playfair italic ❞        │
│                             │
│  STAT  ←  zine typography   │
│  large number, small label  │
│  slight rotation, cranberry │
└─────────────────────────────┘
```

Remove dot navigation. Natural scroll only. Add "Continue →" button pinned to bottom of panel after the last panel → navigates to `/reckoning`.

Data: reformat existing `minerals.json` cards array to include optional `pullQuote` and `stat` fields.

---

### DAY 3 — Act III + Polish

#### 3.1 Reckoning page (`src/app/reckoning/page.tsx`)
New route. Reached from the "Continue →" button at the bottom of the globe info panel.

**Initial state:**
- Full-bleed cream page
- Centered phone box illustration (`public/illustrations/phone-box.png` — placeholder: a simple CSS rectangle with a price tag)
- Price tag hanging off box: "$1,199" in Playfair Display
- Hint text below: "click the tag" (mono, warm-gray, fades in at 1s)

**On click:**
- Tag "unfurls" — CSS: scale from tag size + slight rotation easing to larger
- Price struck through with cranberry animated line (SVG `stroke-dashoffset` 0→full length, 0.4s)
- "At What Cost?" fades in below in large Playfair Display (3rem, ink)
- 5 organization cards slide up from bottom sequentially (staggered 100ms, translateY 40→0 + opacity 0→1)

**Org cards:**
```
Enough Project
"Investigates and campaigns against conflict minerals funding armed groups."
enoughproject.org →
```
Name: Playfair bold. Description: mono 0.75rem warm-gray. Link: cranberry, underline on hover.

Data: `src/data/organizations.json`

#### 3.2 Framer Motion page transitions (`src/app/layout.tsx`)
Wire `AnimatePresence` around `{children}`. Each page wraps its `<main>` with:
```tsx
<motion.main
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -8 }}
  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
>
```
Apply to: `/prologue`, `/select`, `/diagram`, `/globe`, `/reckoning`

#### 3.3 Typography + polish pass
- Prologue panel captions (if panels have text overlay): Playfair italic, 1.5rem, bottom-aligned, ink
- InsideScoop specs: IBM Plex Mono 0.72rem, line-height 1.8, warm-gray
- Globe portrait caption: Playfair Display 1rem, max-width 280px, line-height 1.6
- Comic strip pull quotes: Playfair Display 1.4rem italic, 3px cranberry left border, pl-4
- Reckoning headline: Playfair Display 3rem, letter-spacing -0.02em

#### 3.4 Easter egg — blood drip (time permitting)
On InsideScoop.com, hovering over any phone card for 2+ seconds triggers:
- An SVG path appears at the bottom edge of the card
- `stroke-dashoffset` animates from full length → 0, drawing a slow drip downward
- Color: `#8B2635` (cranberry), 3px stroke, organic irregular drip shape
- Resets on mouse-leave

Implementation: `useRef` timer on `onMouseEnter`, clear on `onMouseLeave`, toggle a CSS class that plays the dashoffset animation.

#### 3.5 Deploy + QA
```bash
npm run build   # must pass with zero errors
```
- Deploy to Vercel
- Full flow test: `/` → click phone → prologue (4 clicks) → InsideScoop → "Explore internals →" → diagram (labels draw in) → click battery → globe → click pickaxe → portrait card → scroll comic strip → "Continue →" → reckoning → click price tag → org cards appear
- Check illustration placeholders display correctly before art is dropped in
- Test at 1280px and 375px viewport widths

---

## File Map

| File | Status | What changes |
|---|---|---|
| `src/app/page.tsx` | Modify | Change nav target: `/select` → `/prologue` |
| `src/app/layout.tsx` | Modify | Add Playfair Display + IBM Plex Mono fonts; add AnimatePresence |
| `src/app/prologue/page.tsx` | **New** | 4-panel comic sequence |
| `src/app/select/page.tsx` | Rewrite | InsideScoop.com fake tech site |
| `src/app/diagram/[phone]/page.tsx` | Modify | SVG circle labels + stroke-dashoffset annotation lines |
| `src/app/globe/[mineral]/page.tsx` | Modify | 3 icon types, portrait card overlay, sequential arcs, comic strip panel |
| `src/app/reckoning/page.tsx` | **New** | Phone box → "At What Cost?" → org cards |
| `src/components/GlobeView.tsx` | Modify | Sequential arc animation, HTML icon markers |
| `src/data/minerals.json` | Modify | Add refinery + brand pin coords to cobalt entry |
| `src/data/stories.json` | **New** | Portrait card content (mine, refinery, brand) |
| `src/data/organizations.json` | **New** | 5 orgs for reckoning page |
| `public/illustrations/prologue-a.png` | Placeholder slot | Hand-drawn panel A |
| `public/illustrations/prologue-b.png` | Placeholder slot | Hand-drawn panel B |
| `public/illustrations/prologue-c.png` | Placeholder slot | Hand-drawn panel C |
| `public/illustrations/prologue-d.png` | Placeholder slot | Hand-drawn panel D |
| `public/illustrations/portrait-mine.png` | Placeholder slot | Globe portrait — miner |
| `public/illustrations/portrait-refinery.png` | Placeholder slot | Globe portrait — refinery |
| `public/illustrations/portrait-brand.png` | Placeholder slot | Globe portrait — brand |
| `public/illustrations/phone-box.png` | Placeholder slot | Reckoning page box |

---

## Illustration Drop-in Protocol

When an illustration is ready:
1. Export as PNG (or SVG), same filename as the placeholder slot above
2. Drop into `public/illustrations/`
3. The component will automatically use it — no code changes needed
4. For prologue panels: recommended minimum width 1600px, landscape orientation

---

## Verification Checklist

- [ ] `npm run build` passes with zero TypeScript/lint errors
- [ ] Landing → prologue (4 panels, click-to-advance) → InsideScoop flows correctly
- [ ] InsideScoop spec flicker happens on hover
- [ ] iPhone 16 card navigates to diagram; others show "Coming soon"
- [ ] Diagram labels draw in sequentially on page load
- [ ] Globe shows 3 icon types (pickaxe, gear, phone)
- [ ] Each icon click opens portrait card overlay
- [ ] Supply chain arcs animate sequentially
- [ ] Comic strip scrolls naturally; "Continue →" navigates to reckoning
- [ ] Reckoning: price tag click triggers full reveal sequence
- [ ] Org cards slide up after reveal
- [ ] Page transitions (fade + drift) work between all routes
- [ ] Illustration placeholders visible before art is dropped in
- [ ] No layout breaks at 1280px or 375px
- [ ] Vercel deploy successful
