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

export default function GlobePage() {
  const { mineral: mineralId } = useParams<{ mineral: string }>();
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(0);
  const [cardOpen, setCardOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const mineral = minerals.find((m) => m.id === mineralId);

  if (!mineral) {
    return (
      <main
        className="flex h-screen w-full items-center justify-center"
        style={{ background: "var(--cream)" }}
      >
        <p style={{ color: "var(--warm-gray)" }}>Mineral not found.</p>
      </main>
    );
  }

  const color = MINERAL_COLORS[mineralId] || "var(--cranberry)";
  const cards = GLOBE_CARDS[mineralId] ?? mineral.cards;
  const card = cards[activeCard];

  function openStep(i: number) {
    setActiveStep(i);
    setActiveCard(0);
    setCardOpen(true);
  }

  return (
    <main
      className="page-enter relative h-screen w-full overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Globe — full bleed */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: 148 }}>
        <GlobeView
          mineLocation={mineral.mineLocation}
          supplyChain={mineral.supplyChain}
          mineralColor={color}
          activeStepIndex={activeStep}
        />
      </div>

      {/* ── Top chrome ── */}
      <div
        className="absolute left-0 right-0 top-0 z-10 px-6 pt-5 pb-6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(221,208,187,0.97) 60%, rgba(221,208,187,0))",
        }}
      >
        {/* Row 1: back + mineral identity */}
        <div className="flex items-start justify-between">
          <button
            onClick={() => router.back()}
            className="mt-1 text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
          >
            ← back
          </button>

          <div className="flex flex-col items-center gap-0.5">
            <div className="flex items-baseline gap-2">
              <h1
                className="text-xl leading-none"
                style={{ color: "var(--ink)", fontFamily: "var(--font-playfair), serif" }}
              >
                {mineral.name}
              </h1>
              <span
                className="text-xs uppercase tracking-[0.28em]"
                style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
              >
                {mineral.formula}
              </span>
            </div>
            <p
              className="text-xs uppercase tracking-[0.22em]"
              style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
            >
              {mineral.mineLocation.name}
            </p>
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
            >
              {mineral.mineLocation.country}
            </p>
          </div>

          {/* Right spacer matches back button width */}
          <div className="mt-1 w-10" />
        </div>

        {/* Row 2: interactive supply chain pipeline */}
        <div className="mt-5 flex items-start justify-center overflow-x-auto pb-1">
          <div className="flex items-start gap-0">
            {mineral.supplyChain.map((step, i) => {
              const isActive = i === activeStep && cardOpen;
              const isPast = cardOpen ? i < activeStep : false;
              return (
                <div key={i} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => openStep(i)}
                    className="flex flex-col items-center transition-opacity hover:opacity-80"
                    style={{
                      minWidth: 76,
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <div
                      className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full text-[0.6rem] font-bold transition-all duration-300"
                      style={{
                        background: isActive
                          ? "var(--cranberry)"
                          : isPast
                          ? "rgba(139,38,53,0.18)"
                          : "rgba(46,38,46,0.08)",
                        color: isActive
                          ? "var(--cream)"
                          : isPast
                          ? "var(--cranberry)"
                          : "var(--ink)",
                        border: isActive
                          ? "none"
                          : isPast
                          ? "1px solid rgba(139,38,53,0.35)"
                          : "1px solid rgba(46,38,46,0.18)",
                        fontFamily: "var(--font-mono), monospace",
                        transform: isActive ? "scale(1.22)" : "scale(1)",
                        boxShadow: isActive
                          ? "0 0 0 4px rgba(139,38,53,0.15), 0 0 12px rgba(139,38,53,0.18)"
                          : "none",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="text-center text-[0.58rem] uppercase leading-tight tracking-[0.1em] transition-colors duration-300"
                      style={{
                        color: isActive
                          ? "var(--cranberry)"
                          : isPast
                          ? "rgba(139,38,53,0.7)"
                          : "var(--ink)",
                        fontFamily: "var(--font-mono), monospace",
                        maxWidth: 68,
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {step.label}
                    </span>
                  </button>

                  {i < mineral.supplyChain.length - 1 && (
                    <div
                      className="mb-5 flex-shrink-0 transition-all duration-500"
                      style={{
                        width: 24,
                        height: 1,
                        background: isPast
                          ? "repeating-linear-gradient(90deg, rgba(139,38,53,0.5) 0px, rgba(139,38,53,0.5) 4px, transparent 4px, transparent 8px)"
                          : "repeating-linear-gradient(90deg, rgba(46,38,46,0.22) 0px, rgba(46,38,46,0.22) 4px, transparent 4px, transparent 8px)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Centered modal card ── */}
      {cardOpen && (
        <>
          {/* Backdrop */}
          <div
            className="absolute inset-0 z-20"
            style={{ background: "rgba(46,38,46,0.28)", backdropFilter: "blur(2px)" }}
            onClick={() => setCardOpen(false)}
          />

          {/* Card */}
          <div
            className="fade-up absolute left-1/2 top-1/2 z-30 flex flex-col"
            style={{
              transform: "translate(-50%, -42%)",
              width: "min(480px, 90vw)",
              background: "rgba(221,208,187,0.98)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(46,38,46,0.12)",
              padding: "2rem 2.25rem 1.5rem",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setCardOpen(false)}
              className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-[0.25em] transition-opacity hover:opacity-50"
              style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
            >
              ✕
            </button>

            {/* Step label */}
            <p
              className="mb-4 text-[0.6rem] uppercase tracking-[0.28em]"
              style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
            >
              {mineral.supplyChain[activeStep]?.locationLabel ?? mineral.supplyChain[activeStep]?.label}
            </p>

            {/* Dot nav */}
            <div className="mb-5 flex items-center gap-2.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeCard === i ? 18 : 5,
                    height: 5,
                    background: activeCard === i ? "var(--cranberry)" : "rgba(46,38,46,0.2)",
                  }}
                />
              ))}
              <span
                className="ml-auto text-[0.58rem] uppercase tracking-[0.2em]"
                style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
              >
                {activeCard + 1} / {cards.length}
              </span>
            </div>

            {/* Card body — keyed so fade-up re-fires on card change */}
            <div key={`${activeStep}-${activeCard}`} className="fade-up">
              <div
                className="mb-4"
                style={{ width: 28, height: 2, background: "var(--cranberry)", borderRadius: 1 }}
              />
              <h3
                className="mb-3 leading-snug"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                }}
              >
                {card.title}
              </h3>
              <p
                className="mb-4 text-[0.81rem] leading-[1.75]"
                style={{ color: "var(--ink)", fontFamily: "var(--font-playfair), serif", opacity: 0.88 }}
              >
                {card.body}
              </p>
              <p
                className="text-[0.65rem] leading-relaxed"
                style={{
                  color: "var(--cranberry)",
                  borderTop: "1px solid rgba(139,38,53,0.15)",
                  paddingTop: 8,
                  fontFamily: "var(--font-mono), monospace",
                  opacity: 0.8,
                  fontStyle: "italic",
                }}
              >
                {card.citation}
              </p>
            </div>

            {/* Prev / Next */}
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setActiveCard((v) => Math.max(0, v - 1))}
                disabled={activeCard === 0}
                className="flex-1 py-2.5 text-[0.63rem] uppercase tracking-[0.25em] transition-all hover:bg-[rgba(46,38,46,0.06)] disabled:opacity-20"
                style={{
                  border: "1px solid rgba(46,38,46,0.25)",
                  color: "var(--ink)",
                  background: "transparent",
                  fontFamily: "var(--font-mono), monospace",
                  cursor: activeCard === 0 ? "default" : "pointer",
                }}
              >
                ← prev
              </button>
              <button
                onClick={() => setActiveCard((v) => Math.min(cards.length - 1, v + 1))}
                disabled={activeCard === cards.length - 1}
                className="flex-1 py-2.5 text-[0.63rem] uppercase tracking-[0.25em] transition-all hover:bg-[rgba(46,38,46,0.06)] disabled:opacity-20"
                style={{
                  border: "1px solid rgba(46,38,46,0.25)",
                  color: "var(--ink)",
                  background: "transparent",
                  fontFamily: "var(--font-mono), monospace",
                  cursor: activeCard === cards.length - 1 ? "default" : "pointer",
                }}
              >
                next →
              </button>
            </div>

            {/* Found in footer */}
            <div
              className="mt-5 pt-4"
              style={{ borderTop: "1px solid rgba(46,38,46,0.08)" }}
            >
              <span
                className="text-[0.58rem] uppercase tracking-[0.2em]"
                style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
              >
                found in —{" "}
              </span>
              <span
                className="text-[0.78rem]"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-playfair), serif",
                  fontStyle: "italic",
                }}
              >
                {mineral.component}
              </span>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
