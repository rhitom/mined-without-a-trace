# Mined Without A Trace — CLAUDE.md

## Project Overview
An interactive visual website that traces the conflict mineral supply chain inside your smartphone — from cobalt mines in the DRC to the device in your pocket. Built for MPCS 51238 (Design Build Ship) at UChicago, Week 9 project fair.

## Repository Structure
```
project/
├── projectv1/          # v1 prototype (HTML/CSS static pages — reference only)
├── projectv2/          # v2 active development (Next.js app)
│   ├── landing_phone.png   # hand-drawn landing illustration (PNG)
│   ├── landing_phone.svg   # vectorized version of landing illustration
│   └── ...             # Next.js project files
└── CLAUDE.md
```

## v2 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Globe:** react-globe.gl (dynamic import — requires `'use client'` + `ssr: false` due to WebGL)
- **Deployment target:** Vercel

## Design System
| Token | Value | Usage |
|---|---|---|
| Cream | `#FAF5EE` | Page backgrounds |
| Cranberry | `#8B2635` | Accents, active states, hover |
| Near-black | `#2E262E` | Text, illustration ink (matches SVG) |
| Warm gray | `#B0AAA6` | Secondary text, disabled states |

**Aesthetic:** Hand-drawn, zine-style. Illustrations are PNGs/SVGs digitized from physical drawings. No drop shadows, no gradients — flat ink on cream.

**Typography:** To be decided — leaning editorial serif + mono pairing.

## Page Routes
| Route | Purpose |
|---|---|
| `/` | Landing — phone-in-pocket illustration, buzz on hover, click to enter |
| `/select` | Device selection carousel (iPhone 16, Galaxy S25, Pixel 9) |
| `/diagram/[phone]` | Interactive component diagram with clickable hotspots |
| `/globe/[mineral]` | 3D globe showing mine location + supply chain arcs |
| Info card deck | Slide-in overlay on globe page |

## Data Architecture
All content lives in `src/data/` as JSON — no database for v1. Swap content without touching components.

- `minerals.json` — mineral name, mine coords, supply chain arcs, info cards
- `phones.json` — phone name, components list with mineral mappings
- `components.json` — component name, hotspot position, mineral link

## SVG / Illustration Notes
- `landing_phone.svg` is a multi-path file — phone, hand, and pocket are merged into the same paths
- A transparent `<polygon>` overlay is used to define the clickable phone region independently
- The buzz animation targets this overlay element via CSS keyframes

## Key Decisions & Constraints
- **One phone fully complete for v1:** iPhone 16. Galaxy S25 and Pixel 9 are stubs.
- **react-globe.gl** must be dynamically imported (`next/dynamic`, `ssr: false`) — it uses WebGL and will break on the server
- **No auth, no database** for v1 — all data is static JSON
- **Framer Motion** handles page transitions — wrap layout in `<AnimatePresence>`

## Current Build Status
- [x] Project scaffold (Next.js 16 + Tailwind) — `projectv2/`
- [x] Landing page with phone hotspot + buzz-on-hover + zoom-click transition
- [x] Device selection carousel (`/select`) — three-phone illustration with hotspot overlays
- [x] Component diagram with 7 hotspots (`/diagram/[phone]`) — exploded-view illustration
- [x] Globe page with react-globe.gl (`/globe/[mineral]`) — dynamic import, SSR disabled
- [x] Info card deck overlay — slide-in panel, card nav dots, prev/next
- [x] Placeholder data (`src/data/minerals.json`, `src/data/phones.json`)
- [x] Global styles (cream `#FAF5EE` / cranberry `#8B2635` / ink `#2E262E` theme)

## Illustrations in Use
| File | Page | Notes |
|---|---|---|
| `public/illustrations/landing_phone.png` | `/` | Phone-in-pocket, transparent SVG hotspot overlay |
| `public/illustrations/phone-select.png` | `/select` | Three-phone carousel, position overlays |
| `public/illustrations/components.png` | `/diagram/iphone` | Exploded view, 7 hotspot zones |

## Next Steps (Week 7)
- Calibrate hotspot positions by testing in browser
- Add Framer Motion page transitions between routes
- Refine globe camera position per mineral
- Add more info cards to minerals.json
- Consider SVG trace with isolated phone element for landing animation polish

## Session Log

### Week 6 — Initial Build
Bootstrapped the entire v2 project from scratch. Initialized Next.js 16 (App Router) + Tailwind in `projectv2/`. Discovered three hand-drawn illustrations in the folder (`landing_phone.png`, `phone-select.png`, `components.png`) and moved them into `public/illustrations/`. Built all five pages:

- **Landing (`/`):** Full-bleed SVG embedding the pocket illustration, transparent `<rect>` hotspot over the phone with CSS buzz-on-hover animation, zoom-out-to-cream click transition that routes to `/select`.
- **Device select (`/select`):** Three-phone carousel using `phone-select.png` as the base, three invisible overlay buttons mapped to each phone position, cranberry "Explore →" CTA for iPhone, "coming soon" for Galaxy/Pixel.
- **Component diagram (`/diagram/iphone`):** Exploded-view `components.png` with 7 transparent hotspot overlays (battery, processor, display, logic board, capacitors, taptic engine, connectors), each color-coded to a mineral. Side panel shows component detail + "Trace the supply chain" CTA.
- **Globe (`/globe/[mineral]`):** `react-globe.gl` loaded via `next/dynamic` with `ssr: false`. Flies to mine location on load, renders animated supply chain arcs. Earth night texture downloaded locally to `public/earth-night.jpg` to avoid CORS issues with the CDN.
- **Info cards (globe panel):** Slide-in right panel with dot navigation, prev/next buttons, card body + citation. Cobalt has 4 fully written cards; other minerals have 1–2.

Also wrote `src/data/minerals.json` (6 minerals with full supply chain data and info cards) and `src/data/phones.json` (iPhone complete, Galaxy/Pixel stubs). Global CSS defines the cream/cranberry/ink design tokens and the `buzz` keyframe animation.

Build is clean (`npm run build` passes, `tsc --noEmit` passes). All pages verified visually via Playwright screenshots including the globe rendering with Africa centered on the DRC cobalt mine location.
