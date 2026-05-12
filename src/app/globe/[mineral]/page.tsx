"use client";

import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import minerals from "@/data/minerals.json";

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
  const [panelOpen, setPanelOpen] = useState(true);
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
  const card = mineral.cards[activeCard];

  return (
    <main
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Globe fills entire background */}
      <div className="absolute inset-0">
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
            "linear-gradient(to bottom, rgba(253,247,238,0.98) 65%, rgba(253,247,238,0))",
        }}
      >
        {/* Row 1: nav + mineral identity + panel toggle */}
        <div className="flex items-start justify-between">
          <button
            onClick={() => router.back()}
            className="mt-1 text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{
              color: "var(--warm-gray)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            ← back
          </button>

          {/* Mineral identity — center */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex items-baseline gap-2">
              <h1
                className="text-xl leading-none"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {mineral.name}
              </h1>
              <span
                className="text-xs uppercase tracking-[0.28em]"
                style={{
                  color: "var(--warm-gray)",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                {mineral.formula}
              </span>
            </div>
            <p
              className="text-xs uppercase tracking-[0.22em]"
              style={{
                color: "var(--cranberry)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {mineral.mineLocation.name}
            </p>
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{
                color: "var(--warm-gray)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {mineral.mineLocation.country}
            </p>
          </div>

          <button
            onClick={() => setPanelOpen((v) => !v)}
            className="mt-1 text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{
              color: "var(--warm-gray)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {panelOpen ? "hide" : "show"} cards
          </button>
        </div>

        {/* Row 2: interactive supply chain pipeline */}
        <div className="mt-5 flex items-start justify-center overflow-x-auto pb-1">
          <div className="flex items-start gap-0">
            {mineral.supplyChain.map((step, i) => {
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              return (
                <div key={i} className="flex items-center">
                  {/* Step node — clickable */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className="flex flex-col items-center transition-opacity hover:opacity-80"
                    style={{
                      minWidth: 76,
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {/* Numbered circle */}
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
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Step label */}
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

                  {/* Dashed connector */}
                  {i < mineral.supplyChain.length - 1 && (
                    <div
                      className="mb-5 flex-shrink-0 transition-all duration-500"
                      style={{
                        width: 24,
                        height: 1,
                        background:
                          isPast
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

      {/* ── Right info-card panel ── */}
      <div
        className="card-scroll absolute right-0 top-0 z-10 flex h-full flex-col overflow-y-auto"
        style={{
          width: 340,
          background: "rgba(250,245,238,0.97)",
          backdropFilter: "blur(16px)",
          borderLeft: "1px solid rgba(46,38,46,0.10)",
          transform: panelOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="px-7 pb-6 pt-24">
          {/* Dot nav */}
          <div className="mb-8 flex gap-2">
            {mineral.cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className="h-2 w-2 rounded-full transition-all duration-200"
                style={{
                  background:
                    activeCard === i
                      ? "var(--cranberry)"
                      : "rgba(46,38,46,0.16)",
                  transform: activeCard === i ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Card content */}
          <div key={activeCard} className="fade-up">
            <h3
              className="mb-4 text-xl leading-snug"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              {card.title}
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed"
              style={{
                color: "#1a1218",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              {card.body}
            </p>
            <p
              className="text-xs italic"
              style={{
                color: "var(--cranberry)",
                borderTop: "1px solid rgba(46,38,46,0.08)",
                paddingTop: 12,
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {card.citation}
            </p>
          </div>

          {/* PREV / NEXT */}
          <div className="mt-8 flex justify-between gap-3">
            <button
              onClick={() => setActiveCard((v) => Math.max(0, v - 1))}
              disabled={activeCard === 0}
              className="flex-1 py-2 text-xs uppercase tracking-[0.22em] transition-opacity disabled:opacity-20"
              style={{
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                background: "transparent",
                borderRadius: 0,
                fontFamily: "var(--font-mono), monospace",
                cursor: activeCard === 0 ? "default" : "pointer",
              }}
            >
              ← prev
            </button>
            <button
              onClick={() =>
                setActiveCard((v) => Math.min(mineral.cards.length - 1, v + 1))
              }
              disabled={activeCard === mineral.cards.length - 1}
              className="flex-1 py-2 text-xs uppercase tracking-[0.22em] transition-opacity disabled:opacity-20"
              style={{
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                background: "transparent",
                borderRadius: 0,
                fontFamily: "var(--font-mono), monospace",
                cursor:
                  activeCard === mineral.cards.length - 1
                    ? "default"
                    : "pointer",
              }}
            >
              next →
            </button>
          </div>
        </div>

        {/* Component footer */}
        <div
          className="mt-auto px-7 py-6"
          style={{ borderTop: "1px solid rgba(46,38,46,0.08)" }}
        >
          <p
            className="mb-1 text-xs uppercase tracking-[0.2em]"
            style={{
              color: "var(--warm-gray)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            Component
          </p>
          <p
            className="text-sm"
            style={{
              color: "var(--ink)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            {mineral.component}
          </p>
        </div>
      </div>
    </main>
  );
}
