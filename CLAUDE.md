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

### Task 1 — `/select` Carousel  [ ]
Replace the static image + hotspot layout with a 3-card center-focus carousel.

- Side phones: scaled to ~0.72×, dimmed (opacity 0.5), not navigable
- Center phone: full scale, cranberry pill label, clickable to navigate to `/diagram/[phone]`
- Click a side phone → it slides to center (CSS transform + transition, no library needed)
- Arrow key support (←/→) for accessibility
- Pill labels stay anchored below each phone as carousel moves
- Art source: `models.svg` — render each phone as its own positioned element rather than one flat image

### Task 2 — `/diagram/[phone]` Samsung & Pixel  [ ]
Activate Galaxy S25 and Pixel 9 diagrams.

- Set `status: "active"` for `galaxy` and `pixel` in `phones.json`
- Add `components` arrays to each (same 6 mineral-linked components as iPhone; chips/models differ per phone)
- Diagram page already reads from `phones.json` — no component logic changes needed
- Placeholder SVG: reuse `components.svg` path until `samsung-components.svg` / `pixel-components.svg` land
- Per-phone SVG map in diagram page: `{ iphone: "components.svg", galaxy: "samsung-components.svg", pixel: "pixel-components.svg" }`

### Task 3 — Globe research brief → full info cards  [ ]
Expand `minerals.json` to 4 info cards per mineral (currently only cobalt has 4; others have 1–2).

- Research brief will be dropped as a `.md` or `.txt` file in the repo by the user (~90 min from session start)
- Read brief, write 4 cards per mineral: The Mine / The Metal / The Journey / What Can Change
- No component changes — globe page already renders whatever cards exist in the JSON

---

## Build Order & Timeline
| Time | Task |
|---|---|
| Now | Task 1 — carousel (no external dependencies) |
| +45 min | Task 2 — Samsung/Pixel diagram stubs |
| +90 min | Research brief lands → Task 3 — globe info cards |
| +135 min | Task 2 final pass once real SVG art lands (~45 min after brief) |

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
