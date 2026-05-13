# Mined Without A Trace

An interactive visual website tracing the conflict mineral supply chain inside your smartphone — from cobalt mines in the DRC to the device in your pocket.

Built for **MPCS 51238: Design Build Ship** at the University of Chicago.

---

## Overview

*Mined Without A Trace* walks a user through four connected experiences: a hand-drawn landing illustration, a device selection screen, an exploded component diagram, and a 3D globe showing mine locations and supply chain arcs for each mineral. The aesthetic is deliberate — zine-style, ink-on-cream, no gradients, no drop shadows — to contrast the sterile surfaces of consumer tech with the human and environmental cost behind them.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | CSS keyframes (`buzz-svg`, `fadeUp`) |
| 3D Globe | react-globe.gl (dynamic import, WebGL) |
| Typography | Playfair Display + IBM Plex Mono via `next/font/google` |
| Data | Static JSON in `src/data/` |
| Deployment | Vercel |

---

## Features & Components

**Landing (`/`)**
A layered SVG illustration of a figure holding a phone. The phone auto-buzzes three seconds after page load; illustrated text bubbles fade in afterward. Click navigates to device selection.

**Device Selection (`/select`)**
A three-phone illustration with invisible hotspot buttons. iPhone 16 is the fully realized path; Galaxy S25 and Pixel 9 are stubs.

**Component Diagram (`/diagram/[phone]`)**
An exploded-view illustration of smartphone internals with six pill-label buttons (camera, battery, circuit board, processor, display) positioned at SVG annotation line endpoints. Hover highlights in cranberry; click navigates to the mineral globe for that component.

**Globe (`/globe/[mineral]`)**
A 3D political-atlas globe rendered with react-globe.gl, showing mine coordinates and supply chain arcs. A slide-in right panel displays dot-nav info cards per mineral. Cobalt has four full cards.

**Data Layer (`src/data/`)**
All content — mineral metadata, mine coordinates, supply chain arcs, info card copy, phone registry — lives in JSON files. No database, no auth surface.

---

## Design System

| Token | Value | Role |
|---|---|---|
| Cream | `#FDF7EE` | Page backgrounds |
| Cranberry | `#8B2635` | Accents, active states, hover |
| Near-black | `#2E272E` | Text, illustration ink |
| Warm gray | `#B0AAA6` | Secondary text, disabled states |

---

## Development Log

- **Week 6** — Bootstrapped the full v2 Next.js project; built all four page routes, wrote `minerals.json` and `phones.json`, and established the global CSS design token and animation system.
- **Week 7** — Overhauled the landing SVG layer structure to isolate the phone for animation, rewrote the component diagram to use SVG-coordinate-derived pill labels with direct globe navigation, and stripped decorative overlays from the select and diagram pages.
- **Week 8** — Integrated Playfair Display + IBM Plex Mono typography, replaced hover-triggered buzz with a timed auto-buzz + text-bubble fade sequence, and hardened the app with HTTP security headers (CSP, X-Frame-Options, X-Content-Type-Options).

---

## Repository Structure

```
project/
├── projectv1/        # static HTML/CSS prototype (reference only)
├── projectv2/        # active Next.js application
│   ├── src/
│   │   ├── app/      # App Router pages and layout
│   │   └── data/     # minerals.json, phones.json
│   └── public/
│       └── illustrations/  # SVGs and PNGs
└── README.md
```
