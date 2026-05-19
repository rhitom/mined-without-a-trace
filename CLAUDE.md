# Mined Without A Trace - CLAUDE.md

## Project Overview
An interactive visual website that traces the conflict mineral supply chain inside your smartphone - from cobalt mines in the DRC to the device in your pocket. Built for MPCS 51238 (Design Build Ship) at UChicago, Week 9 project fair.

## Repository Structure
```
project/
|- projectv1/          # v1 prototype (HTML/CSS static pages - reference only)
|- projectv2/          # v2 legacy (Next.js, reference only)
|- projectv3/          # v3 polished prototype (deployed, reference)
|- project-final/      # ACTIVE — current production build
|- research/           # PDFs: research brief, Blood Batteries, DRC Conflict Minerals, IEA, etc.
|- vercel.json         # Root-level Vercel config — builds from project-final/
`- CLAUDE.md
```

**Active branch:** `project-final`  
**Vercel deployment:** builds from `project-final/` subdirectory via root `vercel.json`

## Tech Stack (project-final)
- **Framework:** Next.js 16 (App Router, `src/app/`)
- **Styling:** Tailwind CSS v4 + custom CSS tokens in `globals.css`
- **Animations:** CSS keyframes (`buzz-svg`, `ink-wipe`, `ink-wipe-landing`, `fade-up`, `pageEnter`)
- **Globe:** react-globe.gl (dynamic import, `ssr: false` — WebGL requirement)
- **Analytics:** `@vercel/analytics` in `layout.tsx`
- **Fonts:** Playfair Display + IBM Plex Mono via `next/font/google`
- **Deployment:** Vercel — `buildCommand: cd project-final && npm install --ignore-scripts && npx next build`

## Design System
| Token | Value | Usage |
|---|---|---|
| Cream | `#FAF5EE` (CSS: `var(--cream)`) | Page backgrounds, globe ocean |
| Cranberry | `#8B2635` (CSS: `var(--cranberry)`) | Accents, active states, hover |
| Ink | `#2E262E` (CSS: `var(--ink)`) | Text, illustration ink |
| Warm gray | `#B0AAA6` (CSS: `var(--warm-gray)`) | Secondary text, disabled states |
| Panel bg | `rgba(232,222,208,0.98)` | Globe info panel + top chrome (darkened cream) |

**Aesthetic:** Hand-drawn, zine-style. Illustrations are PNGs/SVGs digitized from physical drawings. No drop shadows, no gradients — flat ink on cream.

**Typography:** Playfair Display (body/headings) + IBM Plex Mono (labels, nav, mono elements). CSS vars: `--font-playfair`, `--font-mono`.

## Page Routes
| Route | Purpose |
|---|---|
| `/` | Landing — `new_landing.svg` inline, phone auto-buzzes at 5s idle, ink-wipe on click → `/prologue` |
| `/prologue` | 4-panel comic strip — click-through with ink-wipe transitions, tripping panel stagger |
| `/select` | Device selection — `models.svg` draggable carousel, all 3 phones, zoom-exit transition |
| `/diagram/[phone]` | Component diagram — per-phone SVG, pill label buttons → `/globe/[mineral]` |
| `/globe/[mineral]` | 3D globe — HTML icon markers, supply chain arcs, research-grounded info card panel |

## Data Architecture
All content in `src/data/` — no database.

- **`minerals.json`** — 6 minerals (cobalt, tantalum, tungsten, gold, tin, rare-earths). Each entry has: `id`, `name`, `component`, `formula`, `mineLocation {name, country, lat, lng}`, `supplyChain [{label, locationLabel, pinType, lat, lng}]`, `cards []` (legacy fallback)
- **`globe-cards.ts`** — **Primary card content.** Exports `GLOBE_CARDS: Record<string, Card[]>` with 4 research-grounded cards per mineral. Globe page uses this over `minerals.json` cards. Edit this file to update card text.
- **`phones.json`** — phone list with status

### Supply chain `pinType` values
| Value | Icon on globe | Meaning |
|---|---|---|
| `"mine"` | Pickaxe SVG | Artisanal/industrial mine |
| `"refinery"` | Gear/sun SVG | Smelter or separation plant |
| `"factory"` | Gear/sun SVG | Component fab or assembly |
| `"consumer"` | Smartphone SVG | End consumer market |

## SVG / Illustration Notes

### Landing (`/`)
- Illustration: `public/illustrations/new_landing.svg` (viewBox `0 0 2150 1600`)
- Layer structure: `svg-layer-0` cream bg, `svg-layer-1` body (static), `svg-layer-2/3/4` phone (animated)
- Path `d` constants inlined in `src/app/page.tsx`: `BODY`, `PHONE_A`, `PHONE_B`, `PHONE_C`
- Transform-origin for buzz: `1200px 870px` (phone center in SVG space)
- Auto-buzz at 5s idle via `useEffect`; cancelled on click. Click → ink-wipe → `/prologue`

### Prologue (`/prologue`)
- 4 panels: `prologue-e.png` (tripping), `prologue-d.png` (dropping), `prologue-c.png` (cracked/sewer), `prologue-b.png` (desk/laptop)
- Panel 0 (tripping): 3 clipped `<img>` copies reveal sequentially — left shoe (120ms), right shoe (750ms), exclamation (1450ms) — using `clip-path: inset()`
- Ink-wipe transition: 0.72s `cubic-bezier(0.76,0,0.24,1)`; last panel navigates to `/select`

### Select (`/select`)
- Illustration: `public/illustrations/models.svg` — draggable carousel, all 3 phones active
- Pointer drag + keyboard arrow nav; exit: cream overlay fade + scale(9) zoom on active card

### Component Diagram (`/diagram/[phone]`)
- Per-phone SVGs: `components.svg` (iPhone), `samsung-components.svg` (Galaxy), `pixel-components.svg` (Pixel)
- Pill label buttons at SVG-coordinate-derived positions; hover → cranberry; click → `/globe/[mineral]`
- `LABEL_COLUMN_X = 1000` (SVG units); y-positions per component in `LABEL_Y`

### Globe (`/globe/[mineral]`)
- `react-globe.gl` loaded via `next/dynamic` with `ssr: false`
- Ocean texture: canvas 2×2 data URL filled `#FAF5EE`
- Land polygons: GeoJSON fetched from `raw.githubusercontent.com` (CSP allows this host in `connect-src`)
- **HTML icon markers** via `htmlElementsData`: pickaxe/gear/smartphone SVGs, 28px circles, active = cranberry fill
- Location label beneath each icon (e.g. "Kolwezi, DRC")
- Right panel: slide-in, `rgba(232,222,208,0.98)` background, dot-nav, 4 cards per mineral from `globe-cards.ts`
- Top chrome: interactive supply chain pipeline with clickable step nodes → rotates globe camera

## Key Decisions & Constraints
- **Vercel build:** Root `vercel.json` points at `project-final/`. `--ignore-scripts` in install/build commands skips Husky (not available in Vercel CI).
- **CSP:** `connect-src` must include `https://raw.githubusercontent.com` for GeoJSON fetch — already in `next.config.ts`
- **react-globe.gl:** Must be `next/dynamic` with `ssr: false` — WebGL breaks SSR
- **No auth, no database** — all data is static JSON/TS
- **Globe cards vs minerals.json cards:** `globe-cards.ts` is the source of truth; `mineral.cards` is only a fallback if a mineral key is missing from `GLOBE_CARDS`
- **One phone fully complete (diagram):** iPhone 16 has full label set. Galaxy S25 and Pixel 9 have per-phone label configs but simpler SVGs.

## Current Build Status
- [x] Landing page — ink-wipe on click, idle buzz at 5s, `landing_text.svg` overlay
- [x] Prologue — 4 panels, tripping stagger animation, ink-wipe transitions
- [x] Select page — `models.svg` draggable carousel, all 3 phones, zoom-exit
- [x] Component diagram — per-phone SVGs, 6 pill labels, no overlays
- [x] Globe page — react-globe.gl, parchment land polygons, HTML icon markers, location labels
- [x] Globe cards — research-grounded content in `globe-cards.ts` (6 minerals × 4 cards)
- [x] Global styles — design tokens, all keyframes
- [x] Data — `minerals.json` (6 minerals, pinType + locationLabel on all steps), `phones.json`
- [x] Typography — Playfair Display + IBM Plex Mono
- [x] Security headers — X-Frame-Options, CSP, X-Content-Type-Options
- [x] Vercel deployment — root `vercel.json`, `--ignore-scripts`

## Illustrations in Use
| File | Page | Notes |
|---|---|---|
| `public/illustrations/new_landing.svg` | `/` | 4-layer SVG; layers 2-4 are the phone |
| `public/illustrations/landing_text.svg` | `/` | Text bubble overlay; fades in after buzz |
| `public/illustrations/models.svg` | `/select` | Draggable carousel, all 3 phones |
| `public/illustrations/prologue-e.png` | `/prologue` panel 0 | Tripping (staggered reveal) |
| `public/illustrations/prologue-d.png` | `/prologue` panel 1 | Hand dropping phone |
| `public/illustrations/prologue-c.png` | `/prologue` panel 2 | Cracked phone in sewer grate |
| `public/illustrations/prologue-b.png` | `/prologue` panel 3 | Desk with laptop / InsideScoop |
| `public/illustrations/components.svg` | `/diagram/iphone` | Exploded view, iPhone |
| `public/illustrations/samsung-components.svg` | `/diagram/galaxy` | Exploded view, Galaxy S25 |
| `public/illustrations/pixel-components.svg` | `/diagram/pixel` | Exploded view, Pixel 9 |

## Research Sources (for card content)
All PDFs in `research/` folder:
- **Blood Batteries** — Univ. of Nottingham / Rights Lab, Aug 2025. Key stats: 36.8% forced labour, 9.2% child labour, $3.28/day avg income, $0.34/hr implied wage among 1,431 ASM miners near Kolwezi.
- **DRC Conflict Minerals Special Report** — Genocide Watch, June 2025. M23 Rubaya mine $300k/month, ITSCI suspended 2024, Washington Accord June 27 2025, criminal complaints against Apple filed France/Belgium Dec 2024.
- **research brief** — project brief / narrative context. Arthur (age 13), Paul (age 14), $1-2/day wages.
- **IEA Critical Minerals Report (2024)** — China refines 90% REE, $57B BRI mineral investment, Australia top-5 REE.
- **Apple Full Year 2025 Report** — $416.2B total revenue, $209.6B iPhone.

## TODOs (next session)
- [ ] **Globe icon click → portrait card overlay** (BUILDPLAN_FINAL 2.3): clicking a pin opens a portrait-style card replacing or overlaying the info panel
- [ ] **Diagram label draw-in animation** (BUILDPLAN_FINAL 2.1): SVG `stroke-dashoffset` animation on annotation lines; staggered circle label entrance
- [ ] **Sequential arc animation on globe**: arcs draw in one at a time as user advances pipeline steps
- [ ] **Framer Motion page transitions**: wire `AnimatePresence` in root layout
- [ ] **Select page entrance animation**: stagger phones in on load

## Session Log

### Week 6 — Initial Build
Bootstrapped the entire v2 project. Built all five pages (landing, select, diagram, globe, info cards). Wrote minerals.json and phones.json. Global CSS design tokens and buzz keyframe.

### Week 7 — Animation & Diagram Overhaul
- **Landing:** Replaced compound-path group with `new_landing.svg` with clean layer separation. `transformOrigin` at `1200px 870px`.
- **Diagram:** Rewrote `/diagram/[phone]`. Removed hotspot overlays, floating tooltip, side panel. Now renders 6 pill-label buttons at SVG-coordinate-derived positions. Hover → cranberry; click → `/globe/[mineral]`.
- **Select:** Removed cranberry active-state overlay from phone hotspot buttons.

### Week 8 — Typography, Landing Animation, Security
- **Typography:** Playfair Display + IBM Plex Mono via `next/font/google`. CSS vars `--font-playfair`, `--font-mono`.
- **Landing animation:** Phone auto-buzzes 3s after load. `landing_text.svg` fades in at 3.6s.
- **Security headers:** CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy in `next.config.ts`.

### Week 9 — project-final branch, Prologue, Globe overhaul
- **Deployment fixed:** Root `vercel.json` pointing Vercel at `project-final/` subdirectory. `--ignore-scripts` skips Husky in CI. `.gitignore` fixed to track PNGs in `project-final/public/`.
- **Migrated from projectv3:** Pulled all polished v3 code (select carousel, diagram per-phone SVGs, globe pipeline header) into `project-final` branch.
- **Globe CSP fix:** Added `https://raw.githubusercontent.com` to `connect-src` — was silently blocking GeoJSON country polygon fetch, causing blank gray globe.
- **Prologue added:** 4-panel comic strip page at `/prologue`. Tripping panel (panel 0) uses 3 clip-path regions to stagger left shoe → right shoe → exclamation reveal.
- **Ink-wipe transition:** 0.72s `cubic-bezier(0.76,0,0.24,1)` on all panel advances and route exits. Replaced zoom transition on landing.
- **Idle buzz:** Landing auto-buzzes at 5s idle (was click-triggered). Buzz cancelled on any click.
- **Globe icon markers:** `htmlElementsData` in `GlobeView.tsx` — pickaxe SVG (mine), gear SVG (refinery/factory), smartphone SVG (consumer). Active step highlighted cranberry. Location label below each icon.
- **Globe cards:** `src/data/globe-cards.ts` created with 4 research-grounded cards per mineral (6 minerals). Globe page uses `GLOBE_CARDS` over `mineral.cards` fallback.
- **Panel background darkened:** Globe info panel + top chrome changed from `rgba(253,247,238,0.98)` → `rgba(232,222,208,0.98)`.
- **`minerals.json` enriched:** Added `pinType` and `locationLabel` to every supply chain step across all 6 minerals.
- **Globe panel redesign:** Modal moved from full-screen centered to left-anchored (`left:20`, `width: min(380px,44vw)`), globe visible on right. Paul quote surfaced as `<blockquote>` with cranberry left border. `congo_kid.png` figure strip at card bottom (`height:180`, `object-fit:contain`). Card background `rgba(221,208,187,0.99)`.
- **Globe cards restructured:** `MineralCards` type — exactly 4 stops (`mine`, `refinery`, `assembly`, `consumer`). All 6 minerals fully populated with research-grounded content. `supply chain` trimmed from 5→4 stops (factory step removed).
- **Prologue redesigned (scattered photos):** `BG = "#EDE8DC"`. First photo auto-drops at 400ms; each click reveals the next (spring settle: `cubic-bezier(0.34, 1.06, 0.64, 1)` 0.85s). Photos keep natural aspect ratio (`height: Xvh; width: auto`), lifted by `filter: drop-shadow`. Three ink splotches (SVG feTurbulence) on cream bg. Clicking after all 4 land crossfades a fullscreen overlay of panel 4 (opacity+scale, 0.9s ease). Clicking the fullscreen image fades the entire page to 0 opacity (0.8s) then navigates to `/select`.
