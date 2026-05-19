"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BG = "#EDE8DC";

const PANELS = [
  {
    src: "/illustrations/prologue-e.png",
    alt: "Feet tripping on a phone",
    rotate: -5,
    tx: "-14%",
    ty: "-8%",
    scale: 0.60,
  },
  {
    src: "/illustrations/prologue-d.png",
    alt: "Hand dropping the phone",
    rotate: 3,
    tx: "13%",
    ty: "-6%",
    scale: 0.57,
  },
  {
    src: "/illustrations/prologue-c.png",
    alt: "Cracked phone in a sewer grate",
    rotate: -2.5,
    tx: "-8%",
    ty: "9%",
    scale: 0.59,
  },
  // Panel 4 — expands to fill the page
  {
    src: "/illustrations/prologue-b.png",
    alt: "Desk with laptop showing InsideScoop",
    rotate: 4,
    tx: "10%",
    ty: "7%",
    scale: 0.55,
  },
];

const SPLOTS = [
  { cx: "11%", cy: "17%", rx: 28, ry: 18, rotate: -15, },
  { cx: "84%", cy: "76%", rx: 22, ry: 32, rotate: 25, },
  { cx: "73%", cy: "13%", rx: 14, ry: 10, rotate: 8, },
];

const LAST = PANELS.length - 1;

export default function ProloguePage() {
  const router = useRouter();
  const [revealedCount, setRevealedCount] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [lastExpanded, setLastExpanded] = useState(false);

  // Preload all panel images
  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  // First panel drops in automatically after a short pause
  useEffect(() => {
    const t = setTimeout(() => setRevealedCount(1), 350);
    return () => clearTimeout(t);
  }, []);

  // When panel 4 is revealed, expand it after a brief moment
  useEffect(() => {
    if (revealedCount < PANELS.length) return;
    const t = setTimeout(() => setLastExpanded(true), 120);
    return () => clearTimeout(t);
  }, [revealedCount]);

  function wipe(after: () => void) {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      after();
      setTransitioning(false);
    }, 1400);
  }

  function handleClick() {
    // If last panel is expanded, navigate away
    if (lastExpanded) {
      wipe(() => router.push("/select"));
      return;
    }
    // Reveal next panel
    if (revealedCount < PANELS.length) {
      setRevealedCount((c) => c + 1);
    }
  }

  const showHint = revealedCount > 0 && !lastExpanded;

  return (
    <main
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: BG,
        cursor: "pointer",
      }}
    >
      {/* ── SVG filter defs ── */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          <filter id="rough" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="splot" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ── Ink splots ── */}
      {SPLOTS.map((s, si) => (
        <svg
          key={si}
          style={{
            position: "absolute",
            left: s.cx,
            top: s.cy,
            transform: `translate(-50%,-50%) rotate(${s.rotate}deg)`,
            overflow: "visible",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.78,
          }}
          width={s.rx * 2 + 20}
          height={s.ry * 2 + 20}
          viewBox={`0 0 ${s.rx * 2 + 20} ${s.ry * 2 + 20}`}
        >
          <ellipse
            cx={s.rx + 10}
            cy={s.ry + 10}
            rx={s.rx}
            ry={s.ry}
            fill="#1a1218"
            filter="url(#splot)"
          />
        </svg>
      ))}

      {/* ── Photo panels 1–3 ── */}
      {PANELS.slice(0, LAST).map((panel, i) => {
        const isVisible = i < revealedCount;
        return (
          <div
            key={panel.src}
            style={{
              position: "absolute",
              left: `calc(50% + ${panel.tx})`,
              top: `calc(50% + ${panel.ty})`,
              width: `${panel.scale * 100}vmin`,
              height: `${panel.scale * 100}vmin`,
              transform: isVisible
                ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                : `translate(-50%, -140%) rotate(${panel.rotate * 0.5}deg) scale(0.88)`,
              opacity: isVisible ? 1 : 0,
              transition: isVisible
                ? "opacity 0.5s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)"
                : "none",
              zIndex: i + 1,
              pointerEvents: "none",
            }}
          >
            <img
              src={panel.src}
              alt={panel.alt}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
                userSelect: "none",
              }}
            />
            <RoughBorder strokeWidth={2.5} />
            <PanelNumber n={i + 1} />
          </div>
        );
      })}

      {/* ── Panel 4 — scattered then expands to fill page ── */}
      {(() => {
        const panel = PANELS[LAST];
        const isVisible = revealedCount >= PANELS.length;
        return (
          <div
            key={panel.src}
            style={{
              position: "absolute",
              left: lastExpanded ? 0 : `calc(50% + ${panel.tx})`,
              top: lastExpanded ? 0 : `calc(50% + ${panel.ty})`,
              width: lastExpanded ? "100vw" : `${panel.scale * 100}vmin`,
              height: lastExpanded ? "100vh" : `${panel.scale * 100}vmin`,
              transform: lastExpanded
                ? "none"
                : isVisible
                  ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                  : `translate(-50%, -140%) rotate(${panel.rotate * 0.5}deg) scale(0.88)`,
              opacity: isVisible ? 1 : 0,
              transition: isVisible
                ? lastExpanded
                  ? "left 0.85s cubic-bezier(0.76,0,0.24,1), top 0.85s cubic-bezier(0.76,0,0.24,1), width 0.85s cubic-bezier(0.76,0,0.24,1), height 0.85s cubic-bezier(0.76,0,0.24,1), transform 0.85s cubic-bezier(0.76,0,0.24,1)"
                  : "opacity 0.5s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)"
                : "none",
              zIndex: lastExpanded ? 15 : LAST + 1,
              pointerEvents: "none",
            }}
          >
            <img
              src={panel.src}
              alt={panel.alt}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: lastExpanded ? "cover" : "cover",
                objectPosition: "center center",
                display: "block",
                userSelect: "none",
              }}
            />
            {!lastExpanded && <RoughBorder strokeWidth={2.5} />}
            {!lastExpanded && <PanelNumber n={PANELS.length} />}

            {/* "click to continue" hint on expanded last panel */}
            {lastExpanded && (
              <p
                style={{
                  position: "absolute",
                  bottom: 28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#EDE8DC",
                  opacity: 0.7,
                  pointerEvents: "none",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}
              >
                click to continue →
              </p>
            )}
          </div>
        );
      })()}

      {/* ── "click to reveal" hint ── */}
      {showHint && (
        <p
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--ink)",
            opacity: 0.38,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            zIndex: 20,
          }}
        >
          click to continue
        </p>
      )}

      {/* ── Ink-wipe transition overlay ── */}
      {transitioning && (
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 40,
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="0" y="0" width="100" height="100"
            fill={BG}
            style={{
              clipPath: "inset(0 100% 0 0)",
              animation: "ink-wipe 1.4s cubic-bezier(0.76,0,0.24,1) forwards",
            }}
          />
        </svg>
      )}

      <style>{`
        @keyframes ink-wipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
      `}</style>
    </main>
  );
}

function RoughBorder({ strokeWidth }: { strokeWidth: number }) {
  return (
    <svg
      style={{
        position: "absolute",
        inset: -4,
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
        pointerEvents: "none",
        overflow: "visible",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect
        x="2" y="2" width="96" height="96"
        fill="none"
        stroke="#1a1218"
        strokeWidth={strokeWidth}
        filter="url(#rough)"
      />
    </svg>
  );
}

function PanelNumber({ n }: { n: number }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 8,
        left: 10,
        fontFamily: "ui-monospace, monospace",
        fontSize: "0.55rem",
        letterSpacing: "0.18em",
        color: "#1a1218",
        opacity: 0.38,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
