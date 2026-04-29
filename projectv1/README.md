# PROJECT V1: Mined Without A Trace

## One-Line Description
A small end-to-end interactive editorial website whose homepage acts as a gallery of roughly 10 visual prototypes exploring different design directions, then leads users into an `iPhone 16` exploration flow where they can move through device selection, click into key internal components, and trace those materials through a simple globe view into short research-backed information cards with citations.

## TODO:
- [ ] `2.5h` Research and copy
- [ ] Review relevant sources and future-facing APIs: `USGS Mineral Commodity Summaries`, `UN Comtrade API`, and `OECD responsible mineral supply chain materials`
- [ ] Select `2-3` iPhone components to research first, with the expectation that v1 may fully implement only `1-2` of them
- [ ] Write concise hard copy for each active component path
- [ ] Collect and format citations for each component story

- [ ] `2.5h` Design iteration
- [ ] Build the homepage as a gallery of different visual prototypes for the website, targeting roughly `10` distinct explorations
- [ ] Preserve those homepage prototypes as part of the design process rather than collapsing too early into one direction
- [ ] Build the top-level product flow from homepage -> device selection -> iPhone 16 exploration
- [ ] Show `Samsung Galaxy S25` and `Google Pixel 9` as visible `coming soon` states
- [ ] Create the component diagram and establish the cream/beige + cranberry editorial style

- [ ] `1.5h` Globe integration
- [ ] Show destination pins for active components on a simple working globe
- [ ] Support switching between the active researched components
- [ ] Connect each clickable hotspot to a readable card stack with sources

- [ ] `1.0h` Cleanup, responsiveness, and bug-fixing
- [ ] Check that the experience works cleanly as a full click path from homepage to device selection to component diagram to globe to info cards
- [ ] Fix obvious interaction, layout, and readability issues
- [ ] Make the v1 visually coherent and ready for critique, even if still rough

## Core Features (v1)
- A homepage that showcases multiple visual prototypes of the project and makes the design process visible
- A device selection screen with `iPhone 16` active and other phones marked `coming soon`
- An interactive iPhone component diagram with `1-2` fully active researched hotspots
- A simple globe view with destination pins tied to selected components
- Short research-backed info cards with citations for each active component

## Project Logs
- Initial scope centered on building a small but complete v1 rather than overcommitting to a polished multi-phone experience
- Early planning identified research and hand-made design as the main time constraints, not just coding
- API and source review began with `USGS`, `UN Comtrade`, and `OECD` to support future expansion beyond static curated content
- The homepage scope evolved into a gallery of visual prototypes so the project can foreground iteration and experimentation from the start
- Current v1 strategy is to prioritize one clean end-to-end loop and leave room for later expansion in components, phones, and supply-chain depth
- Design review on `2026-04-28` narrowed the first prototype round toward `Field Report / Humanitarian Briefing`, `Zine / Activist Poster`, and `Luxury Device / Moral Contrast` rather than quieter editorial or museum directions
- The homepage direction for this round is now a gallery of `5` separate prototype worlds, each treated as its own clickable demo rather than a single shared design system with minor variations
- Tone should remain exploratory across this round: prototype directions can split across `editorial/intellectual`, `activist/emotional`, and `premium-then-critical` rather than converging too early
- Visual risk should stay high in this phase; the goal is stronger experimentation and visible iteration rather than immediate polish or stylistic consistency
- Illustrations should stay light in `v1` so hand-drawn work can be layered in later without overcommitting the first web build
- Implementation constraint for the next build step: use `HTML` and `CSS` only, with the landing page acting as the prototype gallery and entry point into the evolving website directions
- First implementation pass completed as a static `HTML/CSS` prototype set: one gallery homepage plus `5` separate clickable demo pages
- The gallery now works as an archive of iterations over time rather than a single scrolling composition, which better matches the course emphasis on visible experimentation
- Prototype `01` explores the `Field Report / Humanitarian Briefing` direction through evidence-board layout, flagged device states, and route-map globe cues
- Prototype `02` explores the `Zine / Activist Poster` direction through rough sticker language, poster-note selection cards, and loud graphic globe treatment
- Prototype `03` explores the `Luxury Device / Moral Contrast` direction through premium showroom framing, fracture overlays, and polished route presentation
- Prototype `04` extends the round with a harsher `systems-poster` direction to test a more industrial and modular visual language
- Prototype `05` extends the round with a `heat / residue` direction that adds emotional weight without defaulting to a black dark-mode interface
- Current artifact is intentionally static and non-functional: it previews the `model selection`, `component diagram`, and `globe` scenes as design demos before deeper interaction work begins
