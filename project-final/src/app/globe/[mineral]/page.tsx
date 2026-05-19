"use client";

import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import minerals from "@/data/minerals.json";
import { GLOBE_CARDS } from "@/data/globe-cards";

const GlobeView = dynamic(() => import("@/components/GlobeView"), { ssr: false });

const MINERAL_COLORS: Record<string, string> = {
  cobalt: "#8B2635",
  tantalum: "#8B2635",
  tungsten: "#8B2635",
  gold: "#8B2635",
  tin: "#8B2635",
  "rare-earths": "#8B2635",
};

type StopType = "mine" | "refinery" | "assembly" | "consumer";

const PAUL_QUOTE =
  "“I’d spend 24 hours down in the tunnels. I arrived in the morning and would leave the following morning.” — Paul, aged 14";

// top chrome height + breathing room
const CHROME_H = 148;

export default function GlobePage() {
  const { mineral: mineralId } = useParams<{ mineral: string }>();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [cardOpen, setCardOpen] = useState(false);

  const mineral = minerals.find((m) => m.id === mineralId);
  const mineralCards = GLOBE_CARDS[mineralId ?? ""];

  if (!mineral || !mineralCards) {
    return (
      <main className="flex h-screen w-full items-center justify-center" style={{ background: "var(--cream)" }}>
        <p style={{ color: "var(--warm-gray)" }}>Mineral not found.</p>
      </main>
    );
  }

  const color = MINERAL_COLORS[mineralId] || "var(--cranberry)";
  const activeStopType = (mineral.supplyChain[activeStep]?.pinType ?? "mine") as StopType;
  const card = mineralCards[activeStopType];
  const isMineCard = activeStopType === "mine" && cardOpen;

  function openStep(i: number) {
    setActiveStep(i);
    setCardOpen(true);
  }

  return (
    <main
      className="page-enter relative h-screen w-full overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Globe — full bleed */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: CHROME_H }}>
        <GlobeView
          mineLocation={mineral.mineLocation}
          supplyChain={mineral.supplyChain}
          mineralColor={color}
          activeStepIndex={activeStep}
        />
      </div>

      {/* ── Top chrome ── */}
      <div
        className="absolute left-0 right-0 top-0 z-10 px-8 pt-6 pb-5"
        style={{
          background: "linear-gradient(to bottom, rgba(221,208,187,0.97) 58%, rgba(221,208,187,0))",
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="text-[0.65rem] uppercase tracking-[0.28em] transition-opacity hover:opacity-50"
            style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
          >
            ← back
          </button>

          <div className="flex flex-col items-center gap-1">
            <div className="flex items-baseline gap-2.5">
              <h1
                className="text-2xl leading-none tracking-tight"
                style={{ color: "var(--ink)", fontFamily: "var(--font-playfair), serif" }}
              >
                {mineral.name}
              </h1>
              <span
                className="text-[0.7rem] uppercase tracking-[0.32em]"
                style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
              >
                {mineral.formula}
              </span>
            </div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.28em]"
              style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
            >
              {mineral.mineLocation.name}
            </p>
            <p
              className="text-[0.58rem] uppercase tracking-[0.2em]"
              style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace", opacity: 0.7 }}
            >
              {mineral.mineLocation.country}
            </p>
          </div>

          <div style={{ width: 48 }} />
        </div>

        {/* Pipeline */}
        <div className="mt-4 flex items-start justify-center">
          <div className="flex items-start">
            {mineral.supplyChain.map((step, i) => {
              const isActive = i === activeStep && cardOpen;
              const isPast = cardOpen && i < activeStep;
              return (
                <div key={i} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => openStep(i)}
                    className="flex flex-col items-center"
                    style={{ minWidth: 72, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    <div
                      className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[0.55rem] font-bold transition-all duration-300"
                      style={{
                        background: isActive ? "var(--cranberry)" : isPast ? "rgba(139,38,53,0.15)" : "rgba(46,38,46,0.07)",
                        color: isActive ? "var(--cream)" : isPast ? "var(--cranberry)" : "rgba(46,38,46,0.5)",
                        border: isActive ? "none" : isPast ? "1px solid rgba(139,38,53,0.3)" : "1px solid rgba(46,38,46,0.15)",
                        fontFamily: "var(--font-mono), monospace",
                        transform: isActive ? "scale(1.18)" : "scale(1)",
                        boxShadow: isActive ? "0 0 0 3px rgba(139,38,53,0.12)" : "none",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="text-center text-[0.52rem] uppercase leading-tight tracking-[0.1em] transition-colors duration-300"
                      style={{
                        color: isActive ? "var(--cranberry)" : isPast ? "rgba(139,38,53,0.6)" : "rgba(46,38,46,0.4)",
                        fontFamily: "var(--font-mono), monospace",
                        maxWidth: 60,
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {step.label}
                    </span>
                  </button>

                  {i < mineral.supplyChain.length - 1 && (
                    <div
                      className="mb-5 flex-shrink-0"
                      style={{
                        width: 20,
                        height: 1,
                        background: isPast
                          ? "repeating-linear-gradient(90deg, rgba(139,38,53,0.45) 0px, rgba(139,38,53,0.45) 3px, transparent 3px, transparent 7px)"
                          : "repeating-linear-gradient(90deg, rgba(46,38,46,0.15) 0px, rgba(46,38,46,0.15) 3px, transparent 3px, transparent 7px)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Modal backdrop — flex-centers the card, pads it within the safe area ── */}
      {cardOpen && card && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{
            background: "rgba(46,38,46,0.22)",
            backdropFilter: "blur(3px)",
            // Top padding clears chrome; bottom padding clears Paul quote strip
            paddingTop: CHROME_H + 8,
            paddingBottom: isMineCard ? 72 : 24,
            paddingLeft: 24,
            paddingRight: 24,
          }}
          onClick={() => setCardOpen(false)}
        >
          {/* Card — constrained to the safe area above */}
          <div
            className="fade-up relative flex w-full flex-col overflow-hidden"
            style={{
              maxWidth: 460,
              maxHeight: "100%",
              background: "rgba(221,208,187,0.99)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(46,38,46,0.10)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable content area */}
            <div className="flex flex-col overflow-y-auto" style={{ padding: "1.6rem 1.8rem 0" }}>

              {/* Location + close */}
              <div className="mb-3 flex items-center justify-between flex-shrink-0">
                <p
                  className="text-[0.58rem] uppercase tracking-[0.3em]"
                  style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
                >
                  {mineral.supplyChain[activeStep]?.locationLabel ?? mineral.supplyChain[activeStep]?.label}
                </p>
                <button
                  onClick={() => setCardOpen(false)}
                  className="ml-4 text-[0.6rem] uppercase tracking-[0.2em] transition-opacity hover:opacity-40"
                  style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
                >
                  ✕
                </button>
              </div>

              {/* Stop dots */}
              <div className="mb-4 flex items-center gap-2 flex-shrink-0">
                {mineral.supplyChain.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => openStep(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeStep ? 16 : 4,
                      height: 4,
                      background: i === activeStep ? "var(--cranberry)" : "rgba(46,38,46,0.18)",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>

              {/* Rule */}
              <div className="mb-4" style={{ width: 24, height: 1.5, background: "var(--cranberry)", borderRadius: 1 }} />

              {/* Title */}
              <h3
                className="mb-3 leading-tight"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                className="text-[0.78rem] leading-[1.8] mb-4"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-playfair), serif",
                  opacity: 0.85,
                  whiteSpace: "pre-line",
                }}
              >
                {card.body}
              </p>

              {/* Citation */}
              <p
                className="text-[0.6rem] leading-relaxed mb-4"
                style={{
                  color: "var(--cranberry)",
                  borderTop: "1px solid rgba(139,38,53,0.12)",
                  paddingTop: 8,
                  fontFamily: "var(--font-mono), monospace",
                  opacity: 0.75,
                  fontStyle: "italic",
                }}
              >
                {card.citation}
              </p>
            </div>

            {/* Figure strip — sits at the bottom of the card, outside scroll area */}
            {card.image && (
              <div
                style={{
                  width: "100%",
                  height: 140,
                  flexShrink: 0,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={card.image}
                  alt="Illustration of a child miner"
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    // Center horizontally on the figure (~37% from left in canvas),
                    // bottom-align so feet touch the card floor
                    objectPosition: "37% 62%",
                    mixBlendMode: "multiply",
                    display: "block",
                  }}
                />
                {/* Subtle top fade so image dissolves up into text */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(221,208,187,1) 0%, transparent 35%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            )}

            {/* BACK — always pinned at the very bottom */}
            <button
              onClick={() => setCardOpen(false)}
              className="w-full flex-shrink-0 py-2.5 text-[0.6rem] uppercase tracking-[0.32em] transition-all hover:bg-[rgba(46,38,46,0.06)]"
              style={{
                border: "none",
                borderTop: "1px solid rgba(46,38,46,0.10)",
                color: "rgba(46,38,46,0.45)",
                background: "transparent",
                fontFamily: "var(--font-mono), monospace",
                cursor: "pointer",
              }}
            >
              back
            </button>
          </div>
        </div>
      )}

      {/* ── Paul quote — bottom strip, only on Mine card ── */}
      <div
        className="absolute left-0 right-0 z-30 flex items-end justify-center px-8 pb-4 pt-8"
        style={{
          bottom: 0,
          background: "linear-gradient(to top, rgba(221,208,187,0.96) 55%, rgba(221,208,187,0))",
          opacity: isMineCard ? 1 : 0,
          transform: isMineCard ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.45s ease, transform 0.45s ease",
          pointerEvents: "none",
        }}
      >
        <p
          className="text-center text-[0.7rem] leading-relaxed"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            opacity: 0.7,
            maxWidth: 500,
          }}
        >
          {PAUL_QUOTE}
        </p>
      </div>
    </main>
  );
}
