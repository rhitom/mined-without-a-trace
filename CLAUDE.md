# Mined Without A Trace - CLAUDE.md

## Project Overview
An interactive visual website that traces the conflict mineral supply chain inside your smartphone - from cobalt mines in the DRC to the device in your pocket. Built for MPCS 51238 (Design Build Ship) at UChicago, Week 9 project fair.

## Repository Structure
```
project/
|- projectv1/          # v1 prototype (HTML/CSS static pages - reference only)
|- projectv2/          # v2 active development (Next.js app)
`- CLAUDE.md
```

## v2 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** CSS keyframes (`buzz-svg`, `fadeUp`) — Framer Motion installed but not yet wired
- **Globe:** react-globe.gl (dynamic import - requires `'use client'` + `ssr: false` due to WebGL)
- **Deployment target:** Vercel

## Design System
| Token | Value | Usage |
|---|---|---|
| Cream | `#FDF7EE` | Page backgrounds |
| Cranberry | `#8B2635` | Accents, active states, hover |
| Near-black | `#2E272E` | Text, illustration ink (matches SVG) |
| Warm gray | `#B0AAA6` | Secondary text, disabled states |

**Aesthetic:** Hand-drawn, zine-style. Illustrations are PNGs/SVGs digitized from physical drawings. No drop shadows, no gradients — flat ink on cream.

**Typography:** Playfair Display (body/headings) + IBM Plex Mono (labels, nav, tracking elements). Loaded via `next/font/google` with CSS variables `--font-playfair` and `--font-mono`.

## Page Routes
| Route | Purpose |
|---|---|
| `/` | Landing — new_landing.svg inline, phone auto-buzzes at 3s, landing_text.svg fades in after buzz, zoom-click transition to /select |
| `/select` | Device selection — phone-select.png with invisible hotspot buttons |
| `/diagram/[phone]` | Component diagram — components.svg with SVG-coordinate-positioned pill labels |
| `/globe/[mineral]` | 3D globe — mine location + supply chain arcs, info card panel |

## Data Architecture
All content lives in `src/data/` as JSON — no database. Swap content without touching components.

- `minerals.json` — mineral name, mine coords, supply chain arcs, info cards
- `phones.json` — phone name, status (active/stub)

## SVG / Illustration Notes

### Landing (`/`)
- Illustration: `public/illustrations/new_landing.svg` (viewBox `0 0 2150 1600`)
- **Layer structure:**
  - `svg-layer-0`: cream background
  - `svg-layer-1`: full body (body, legs, pocket, arm) — **static**, `pointerEvents: none`
  - `svg-layer-2/3/4`: the phone — **animated group**, auto-buzzes 3s after page load, click navigates
- Path `d` attributes inlined directly in `src/app/page.tsx` as `BODY`, `PHONE_A`, `PHONE_B`, `PHONE_C` constants
- Transform-origin for buzz: `1200px 870px` (approximate phone center in SVG space)

### Select (`/select`)
- Illustration: `public/illustrations/phone-select.png`
- Three invisible `<button>` overlays positioned over each phone
- Only center phone (iPhone 16) navigates to `/diagram/iphone`

### Component Diagram (`/diagram/[phone]`)
- Illustration: `public/illustrations/components.svg` (viewBox `0 0 2150 1600`)
- 6 labels positioned at annotation line endpoints using `(x/2150*100)%` / `(y/1600*100)%`
- Label order top-to-bottom: front camera, rear camera, circuit board, processor, battery, display
- Labels are pill-shaped buttons; hover → cranberry fill; click → navigates to `/globe/[mineral]`
- Label x-positions all share `LABEL_COLUMN_X = 1000` (SVG units); y-positions per component
- **No red overlay / no side panel** — labels are the only UI layer on the diagram

### Globe (`/globe/[mineral]`)
- `react-globe.gl` loaded via `next/dynamic` with `ssr: false`
- Globe texture: `public/illustrations/globe-political-atlas.svg`
- Slide-in right panel with dot-nav info cards; cobalt has 4 full cards

## Key Decisions & Constraints
- **One phone fully complete:** iPhone 16. Galaxy S25 and Pixel 9 are stubs.
- **react-globe.gl** must be dynamically imported — WebGL breaks on the server
- **No auth, no database** — all data is static JSON
- Path data inlined in `page.tsx` instead of loading the SVG file to allow per-layer React event handling

## Current Build Status
- [x] Landing page — new_landing.svg, phone-only auto-buzz at 3s, landing_text.svg overlay, zoom-click transition
- [x] Select page — phone-select.png with hotspot buttons
- [x] Component diagram — components.svg with 6 pill labels, no overlays
- [x] Globe page — react-globe.gl, political atlas texture, info card panel
- [x] Global styles — cream/cranberry/ink tokens, `buzz-svg` and `fadeUp` keyframes
- [x] Data — minerals.json (6 minerals, full supply chain), phones.json
- [x] Typography — Playfair Display + IBM Plex Mono via next/font/google
- [x] Security headers — X-Frame-Options, CSP, X-Content-Type-Options in next.config.ts

## Illustrations in Use
| File | Page | Notes |
|---|---|---|
| `public/illustrations/new_landing.svg` | `/` | 4-layer SVG; layers 2-4 are the phone (auto-buzzes at 3s) |
| `public/illustrations/landing_text.svg` | `/` | Text bubble overlay; fades in after buzz completes (~3.6s) |
| `public/illustrations/phone-select.png` | `/select` | Three-phone illustration with hotspot overlays |
| `public/illustrations/components.svg` | `/diagram/iphone` | Exploded view; annotation line endpoints drive label positions |
| `public/illustrations/globe-political-atlas.svg` | `/globe/[mineral]` | Archival political atlas globe texture |

## TODOs
- [x] **Typography:** Playfair Display + IBM Plex Mono — implemented via next/font/google
- [ ] **Globe rendering:** Refine camera altitude and starting angle per mineral; explore sketch/crosshatch shader overlay to match the hand-drawn aesthetic
- [ ] **Select page animations:** Entrance animation for the three phones; active-phone scale or tilt effect
- [ ] **Diagram animations:** Label stagger-in on page load; consider drawing the annotation lines with SVG `stroke-dashoffset` animation
- [ ] **Framer Motion page transitions:** Wire `AnimatePresence` in the root layout; slide or fade between routes
- [ ] **More info cards:** Expand minerals.json cards for tantalum, tungsten, gold, tin, rare-earths

## Session Log

### Week 6 — Initial Build
Bootstrapped the entire v2 project. Built all five pages (landing, select, diagram, globe, info cards). Wrote minerals.json and phones.json. Global CSS design tokens and buzz keyframe.

### Week 7 — Animation & Diagram Overhaul
- **Landing:** Replaced compound-path group with new_landing.svg whose layer structure cleanly separates the body (static) from the phone (layers 2–4, animated). `transformOrigin` centred on phone at `1200px 870px`.
- **Diagram:** Rewrote `/diagram/[phone]` entirely. Removed hotspot overlays, floating tooltip, and side-panel component list. Now renders 6 pill-label buttons at SVG-coordinate-derived positions (`LABEL_COLUMN_X = 1000`, y per component). Hover fills the pill cranberry; click navigates directly to `/globe/[mineral]`. All labels lowercase.
- **Select:** Removed cranberry active-state border/background overlay from phone hotspot buttons.
- **Components:** Removed red highlight overlay from diagram hotspot interaction.

### Week 8 — Typography, Landing Animation, and Security
- **Typography:** Selected Playfair Display + IBM Plex Mono. Imported via `next/font/google` in `layout.tsx` with CSS variables `--font-playfair` and `--font-mono`. `globals.css` body font updated to `var(--font-playfair)`. Mono applied inline to all nav buttons, component pill labels, brand captions, and hint text across all four pages.
- **Landing animation overhaul:** Removed hover-triggered buzz. Phone now auto-buzzes 3 seconds after page load via `useEffect` + `setTimeout`. At 3.6s the buzz ends and `landing_text.svg` fades in as a full-canvas `<img>` overlay (`pointer-events: none`, 0.8s opacity transition), revealing the illustrated text bubbles from the original hand-drawn artwork.
- **Security headers:** Added HTTP response headers to `next.config.ts` via `async headers()`: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and a `Content-Security-Policy` scoped to self + Google Fonts + the `unsafe-inline`/`unsafe-eval` required by Next.js and WebGL.
- **Security audit:** Conducted a full 7-layer audit. Findings: no secrets in source or git history, no API routes or auth surfaces, no LLM usage, no CI/pre-commit hooks (medium severity gap), one npm audit moderate (`postcss` bundled in Next.js 16 — no safe fix without downgrading Next), and Playwright MCP `browser_run_code_unsafe` flagged as high severity. Recommended agent deny list for `AGENTS.md`.
