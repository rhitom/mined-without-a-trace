# Project Proposal: Mined Without A Trace

## One-Line Description
An interactive visual website that traces the conflict mineral supply chain inside your smartphone — from the cobalt mines of the DRC to the device in your pocket.

## The Problem
Most people never think about what's physically inside their phone — or who suffered to put it there. Over 70% of the world's cobalt comes from the Democratic Republic of Congo, where artisanal miners — including children — extract the minerals that power our lithium-ion batteries. Tantalum, tin, tungsten, and gold (the "3TG" conflict minerals) follow similar paths through conflict zones, exploitative labor, and opaque supply chains before arriving in the sleek devices we carry every day. The information exists in academic papers, NGO reports, and SEC filings, but it's scattered, dense, and inaccessible to the average consumer. This project makes that invisible pipeline visible, personal, and impossible to ignore.

## Target User
Everyday smartphone users — particularly young, educated consumers who care about ethical consumption but haven't connected the dots between their device and its human cost. The kind of person who buys fair-trade coffee but has never thought about the cobalt in their phone battery. The site should be accessible enough for a high schooler and substantive enough for a journalist to reference.

## Core Features (v1)
1. **Landing illustration:** A hand-drawn, zine-style illustration of a phone in someone's pocket. Clicking the phone enters the experience.
2. **Device selection:** Choose from the top 3 most popular smartphones (e.g., iPhone 16, Samsung Galaxy S25, Google Pixel 9) to explore. v1 delivers a complete experience for one phone (iPhone 16), with the other two as follow-on additions.
3. **Interactive component diagram:** A detailed, hand-drawn schematic of the selected phone's internals. 5-7 key components are clickable (battery, processor, display, circuit board, capacitors, vibration motor, connectors), each mapped to a conflict mineral.
4. **Globe transition and exploration:** Clicking a component triggers an animated transition to a 3D interactive globe (react-globe.gl) that flies to the real-world location where that mineral is mined or that component is manufactured. Pins mark locations; arcs trace the supply chain route.
5. **Info card deck:** At each location, a scrollable deck of cards provides accessible, clearly written context — what's mined there, how, by whom, under what conditions — mixing narrative storytelling with factual reporting. Citations link out to journals, reports, and news media as jumping-off points for further research.

## Tech Stack
- **Frontend:** Next.js (React) — course-recommended, strong Claude Code support, and react-globe.gl is a React component
- **Styling:** Tailwind CSS — enables rapid styling without deep CSS expertise; clean utility-class approach fits the editorial aesthetic
- **Database:** None for v1 — content is relatively static (component data, mine coordinates, info card text), stored as structured JSON data files. Database (Supabase) can be added later if dynamic features are needed.
- **Auth:** None — no user accounts needed. This is a public educational tool.
- **APIs:** None required for v1. Data is manually researched and curated. Potential future integration with USGS mineral databases or UN Comtrade trade flow data.
- **Key Libraries:**
  - `react-globe.gl` — 3D globe visualization with arcs, points, and labels (actively maintained, v2.37+)
  - `Framer Motion` — page transitions and scroll animations (pocket → phone selection → diagram → globe)
- **Deployment:** Vercel — native Next.js support, free tier, instant deploys
- **MCP Servers:** Playwright MCP for testing the interactive experience across browsers and verifying animation/transition behavior

## Stretch Goals
- **Three complete phones** with full component breakdowns (iPhone 16, Galaxy S25, Pixel 9) — architecture supports this by design; adding a phone means new SVG diagram + new data entries
- **Laptop expansion:** A second illustrated entry point (desk with laptop) leading to the same explore flow for top laptops
- **Additional components beyond 5-7** per device, covering more of the mineral pipeline
- **Animated supply chain arcs:** Show the full journey of a mineral in motion — mine → smelter → refinery → factory → retail — as an animated path across the globe
- **"What can I do?" action page:** After learning the story, give users concrete next steps — responsible purchasing guides, advocacy organizations (Enough Project, Global Witness), policy initiatives
- **Audio/narration layer:** Optional voiceover or ambient sound design to deepen the emotional experience
- **Share functionality:** Let users share a specific component's story as a standalone link or social media card
- **Timeline view:** How the supply chain has changed over time — historical context on DRC mining from colonial extraction to present day

## Biggest Risk
**Scope vs. depth tradeoff.** The project's persuasive power depends on the quality of three things: the hand-drawn illustrations, the globe interaction, and the research content. Each of these is time-intensive, and two of them (illustration, research) are deliberately being done by hand rather than delegated to AI. This is the right creative choice but it means time management is critical. The mitigation strategy is strict scoping: one phone fully complete for Week 5, additional devices only after the core experience is polished.

A secondary risk is the web development learning curve — this is a first web app built with an unfamiliar stack (Next.js, React, Tailwind). Claude Code will handle much of the framework wiring, but debugging layout issues, animation timing, and globe configuration will require learning on the fly.

## Week 5 Goal
Demo a complete end-to-end experience for **one smartphone (iPhone 16)** with:
- The "phone in pocket" landing illustration (hand-drawn, digitized as SVG)
- A clickable component diagram with 5-7 labeled, interactive components
- A working 3D globe with animated transitions from the diagram
- At least 3 fully researched and written info card decks (e.g., battery/cobalt in DRC, processor/rare earths in China, tantalum/coltan in DRC)
- The cream/beige + cranberry color palette applied consistently
- Clean editorial typography and layout
- Deployed and publicly accessible on Vercel
