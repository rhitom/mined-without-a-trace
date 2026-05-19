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
    maxH: "58vh",
  },
  {
    src: "/illustrations/prologue-d.png",
    alt: "Hand dropping the phone",
    rotate: 3,
    tx: "13%",
    ty: "-6%",
    maxH: "55vh",
  },
  {
    src: "/illustrations/prologue-c.png",
    alt: "Cracked phone in a sewer grate",
    rotate: -2.5,
    tx: "-8%",
    ty: "9%",
    maxH: "56vh",
  },
  {
    src: "/illustrations/prologue-b.png",
    alt: "Desk with laptop showing InsideScoop",
    rotate: 4,
    tx: "10%",
    ty: "7%",
    maxH: "54vh",
  },
];

const SPLOTS = [
  { cx: "11%", cy: "17%", rx: 28, ry: 18, rotate: -15 },
  { cx: "84%", cy: "76%", rx: 22, ry: 32, rotate: 25 },
  { cx: "73%", cy: "13%", rx: 14, ry: 10, rotate: 8 },
];

const LAST = PANELS.length - 1;
// Slight settle: tiny overshoot that reads as physical weight, not a bounce
const SETTLE = "cubic-bezier(0.34, 1.06, 0.64, 1)";

export default function ProloguePage() {
  const router = useRouter();
  const [revealedCount, setRevealedCount] = useState(0);
  // "expanding" = fullscreen overlay is fading in; "lastExpanded" = it's fully there
  const [expanding, setExpanding] = useState(false);
  const [lastExpanded, setLastExpanded] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  // First panel drops automatically
  useEffect(() => {
    const t = setTimeout(() => setRevealedCount(1), 400);
    return () => clearTimeout(t);
  }, []);

  function handleClick() {
    if (exiting || expanding) return;

    if (lastExpanded) {
      // Fade entire page out, then navigate
      setExiting(true);
      setTimeout(() => router.push("/select"), 850);
      return;
    }

    if (revealedCount === PANELS.length) {
      // All photos down — expand last one to fullscreen via overlay crossfade
      setExpanding(true);
      setTimeout(() => {
        setLastExpanded(true);
        setExpanding(false);
      }, 950);
      return;
    }

    setRevealedCount((c) => c + 1);
  }

  const showHint = revealedCount > 0 && !lastExpanded && !expanding;

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
        // Whole-page fade-out on exit
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.8s ease" : undefined,
      }}
    >
      {/* SVG filter for ink splots */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          <filter id="splot" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Ink splots */}
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
            opacity: 0.72,
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

      {/* All four scattered photos */}
      {PANELS.map((panel, i) => {
        const isVisible = i < revealedCount;
        const isLast = i === LAST;
        // Hide the last scattered photo once the fullscreen overlay is live
        const hiddenByExpansion = isLast && lastExpanded;

        return (
          <div
            key={panel.src}
            style={{
              position: "absolute",
              left: `calc(50% + ${panel.tx})`,
              top: `calc(50% + ${panel.ty})`,
              width: "fit-content",
              transform: isVisible
                ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                : `translate(-50%, -145%) rotate(${panel.rotate * 0.4}deg)`,
              opacity: isVisible && !hiddenByExpansion ? 1 : 0,
              transition: isVisible
                ? `opacity 0.55s ease, transform 0.85s ${SETTLE}`
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
                height: panel.maxH,
                width: "auto",
                display: "block",
                userSelect: "none",
                // Soft shadow lifts photo off cream background
                filter: "drop-shadow(0 6px 20px rgba(46,38,46,0.16)) drop-shadow(0 2px 5px rgba(46,38,46,0.10))",
              }}
            />
            <PanelNumber n={i + 1} />
          </div>
        );
      })}

      {/* Fullscreen overlay — fades in when user clicks to expand last panel */}
      {(expanding || lastExpanded) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            pointerEvents: "none",
            opacity: lastExpanded ? 1 : 0,
            transform: lastExpanded ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <img
            src={PANELS[LAST].src}
            alt={PANELS[LAST].alt}
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
                opacity: 0.65,
                pointerEvents: "none",
                userSelect: "none",
                whiteSpace: "nowrap",
                textShadow: "0 1px 6px rgba(0,0,0,0.4)",
              }}
            >
              click to continue →
            </p>
          )}
        </div>
      )}

      {/* Hint text */}
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
            opacity: 0.32,
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            zIndex: 20,
          }}
        >
          click to continue
        </p>
      )}
    </main>
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
        opacity: 0.32,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
