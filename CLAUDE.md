# Mined Without A Trace — projectv3 CLAUDE.md

## Project Overview
An interactive visual website that traces the conflict mineral supply chain inside your smartphone — from cobalt mines in the DRC to the device in your pocket. Built for MPCS 51238 (Design Build Ship) at UChicago, Week 9 project fair.

## Repository Structure
```
project/
|- projectv1/          # v1 prototype (HTML/CSS static pages - reference only)
|- projectv2/          # v2 (complete — do not modify)
|- projectv3/          # v3 active development (this directory)
`- CLAUDE.md
```

## v3 Tech Stack
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
| `/select` | Device selection — carousel (3 phones, center-focus), scroll/click to cycle, center phone navigates |
| `/diagram/[phone]` | Component diagram — per-phone SVG with SVG-coordinate-positioned pill labels |
| `/globe/[mineral]` | 3D globe — mine location + supply chain arcs, info card panel |

## Data Architecture
All content lives in `src/data/` as JSON — no database.

- `minerals.json` — mineral name, mine coords, supply chain arcs, info cards (target: 4 cards per mineral)
- `phones.json` — phone name, status (active/stub), components array

## Illustration Files
| File | Page | Notes |
|---|---|---|
| `public/illustrations/new_landing.svg` | `/` | 4-layer SVG; layers 2-4 are the phone (auto-buzzes at 3s) |
| `public/illustrations/landing_text.svg` | `/` | Text bubble overlay; fades in after buzz completes (~3.6s) |
| `public/illustrations/models.svg` | `/select` | Three-phone illustration used by carousel |
| `public/illustrations/components.svg` | `/diagram/iphone` | Exploded iPhone 16 view; annotation line endpoints drive label positions |
| `public/illustrations/samsung-components.svg` | `/diagram/galaxy` | Samsung Galaxy S25 exploded view (placeholder until real art lands) |
| `public/illustrations/pixel-components.svg` | `/diagram/pixel` | Google Pixel 9 exploded view (placeholder until real art lands) |
| `public/illustrations/globe-political-atlas.svg` | `/globe/[mineral]` | Archival political atlas globe texture |

---

## Week 9 Build Plan

### Task 1 — `/select` Carousel  [x] COMPLETE
Replaced the static image + hotspot layout with a 3-card center-focus carousel.

- Side phones: scaled to ~0.70×, dimmed (opacity 0.45), not navigable
- Center phone: full scale, cranberry pill label, clickable to navigate to `/diagram/[phone]`
- Click a side phone → it slides to center (CSS transform + transition, no library)
- Arrow key support (←/→) + Enter to navigate; dot-nav below
- Pill labels anchored below each phone, cranberry when center
- Art source: `models.svg` cropped per phone via `objectPosition`

### Task 2 — `/diagram/[phone]` Samsung & Pixel  [x] COMPLETE
Activated Galaxy S25 and Pixel 9 diagrams.

- `status: "active"` set for `galaxy` and `pixel` in `phones.json`
- Full 7-component arrays added for both phones (battery, processor, display, circuit-board, capacitors, vibration-motor, connectors)
- Per-phone chip/display labels: Snapdragon 8 Elite, Tensor G4, Dynamic AMOLED, Actua OLED, etc.
- Per-phone SVG map: `{ iphone: "components.svg", galaxy: "samsung-components.svg", pixel: "pixel-components.svg" }`
- Samsung and Pixel SVGs are placeholders until real art lands

### Task 3 — Globe research brief → full info cards  [x] COMPLETE
Expanded `minerals.json` to 4 info cards per mineral across all 6 minerals.

- Source: `research/research brief.pdf` + supporting PDFs in `research/`
- Card structure: The Mine / The Metal (or The Component / The Buzz) / The Journey / What Can Change
- All 6 minerals now have 4 cards: cobalt, tantalum, tungsten, gold, tin, rare-earths
- Key facts incorporated: DRC 60% cobalt supply / 50% reserves; 15/19 mining concessions Chinese-owned; coltan exploitation chain through Rwanda/Uganda/Burundi; Washington Accord (June 2025); China refines 90% of REEs; Belt & Road $57B mineral investment
- No component changes needed — globe page renders whatever cards exist in JSON

---

## Build Order & Timeline
| Task | Status |
|---|---|
| Task 1 — carousel | ✅ Done |
| Task 2 — Samsung/Pixel diagrams | ✅ Done |
| Task 3 — globe info cards | ✅ Done |
| Vercel deploy via `git subtree push` | ✅ Done — `projectv3` branch contains only projectv3/ contents at root |

---

## Inherited from v2 — Unchanged

### SVG / Illustration Notes

#### Landing (`/`)
- Illustration: `public/illustrations/new_landing.svg` (viewBox `0 0 2150 1600`)
- Layer structure: `svg-layer-0` cream bg, `svg-layer-1` body (static), `svg-layer-2/3/4` phone (animated)
- Transform-origin for buzz: `1200px 870px`

#### Component Diagram (`/diagram/[phone]`)
- viewBox `0 0 2150 1600`
- 6 labels at `LABEL_COLUMN_X = 1000` (SVG units), y per component
- Pill buttons: hover → cranberry; click → `/globe/[mineral]`

#### Globe (`/globe/[mineral]`)
- `react-globe.gl` loaded via `next/dynamic` with `ssr: false`
- Globe texture: `public/illustrations/globe-political-atlas.svg`
- Slide-in right panel with dot-nav info cards

## Key Decisions & Constraints
- **react-globe.gl** must be dynamically imported — WebGL breaks on the server
- **No auth, no database** — all data is static JSON
- Path data inlined in `page.tsx` instead of loading the SVG file to allow per-layer React event handling

## Security Headers (next.config.ts)
`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Content-Security-Policy`

## Deployment
- **Branch:** `projectv3` on remote — contains only the projectv3/ subdirectory at root (not the full monorepo)
- **Deploy command:** `git push origin $(git subtree split --prefix projectv3):projectv3 --force`
  - Use `git subtree split --prefix projectv3 -b temp-projectv3-deploy` + force push if the one-liner fails
- **Vercel:** root directory should be `/` (the branch root, not a subfolder)

---

## Session Log

### Week 9 — Full Sprint (2026-05-12)
- **Audited build state:** Confirmed Tasks 1 and 2 were already complete from prior work. Task 3 (info cards) was partial — only cobalt had 4 cards; all other minerals had 1–2.
- **Task 3 — Info cards:** Read `research/research brief.pdf`. Wrote 4 cards (The Mine / The Metal or component-specific title / The Journey / What Can Change) for all 6 minerals in `src/data/minerals.json`. Key facts sourced from brief: DRC cobalt figures, 15/19 Chinese-owned concessions, coltan exploitation chain, 3TG conflict mineral framework, Washington Accord (June 2025), China's 90% REE refining share, Belt and Road $57B mineral investment, Australia as diversification signal.
- **Vercel deploy:** Provided `git subtree push` commands to push only `projectv3/` contents to the `projectv3` remote branch, replacing an accidentally-pushed full-repo state.
