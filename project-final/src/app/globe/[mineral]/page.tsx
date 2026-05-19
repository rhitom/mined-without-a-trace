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

const STOP_TYPE_ORDER = ["mine", "refinery", "assembly", "consumer"] as const;
type StopType = typeof STOP_TYPE_ORDER[number];

export default function GlobePage() {
  const { mineral: mineralId } = useParams<{ mineral: string }>();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [cardOpen, setCardOpen] = useState(false);

  const mineral = minerals.find((m) => m.id === mineralId);
  const mineralCards = GLOBE_CARDS[mineralId ?? ""];

  if (!mineral || !mineralCards) {
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

  // Each pipeline stop maps directly to a card by pinType
  const activeStopType = (mineral.supplyChain[activeStep]?.pinType ?? "mine") as StopType;
  const card = mineralCards[activeStopType];

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

          <div className="mt-1 w-10" />
        </div>

        {/* Row 2: pipeline */}
        <div className="mt-5 flex items-start justify-center overflow-x-auto pb-1">
          <div className="flex items-start gap-0">
            {mineral.supplyChain.map((step, i) => {
              const isActive = i === activeStep && cardOpen;
              const isPast = cardOpen && i < activeStep;
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
      {cardOpen && card && (
        <>
          {/* Backdrop */}
          <div
            className="absolute inset-0 z-20"
            style={{ background: "rgba(46,38,46,0.28)", backdropFilter: "blur(2px)" }}
            onClick={() => setCardOpen(false)}
          />

          {/* Card */}
          <div
            className="fade-up absolute left-1/2 top-1/2 z-30"
            style={{
              transform: "translate(-50%, -42%)",
              width: card.image ? "min(680px, 92vw)" : "min(480px, 90vw)",
              background: "rgba(221,208,187,0.98)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(46,38,46,0.12)",
            }}
          >
            {card.image ? (
              /* ── Split layout: image left, text right ── */
              <div className="flex" style={{ minHeight: 340 }}>
                {/* Left: image */}
                <div
                  style={{
                    width: "40%",
                    flexShrink: 0,
                    overflow: "hidden",
                    borderRight: "1px solid rgba(46,38,46,0.10)",
                  }}
                >
                  <img
                    src={card.image}
                    alt="Artisanal miner in the DRC"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                    draggable={false}
                  />
                </div>

                {/* Right: text */}
                <div className="flex flex-1 flex-col px-7 pb-6 pt-6">
                  <CardContent
                    card={card}
                    activeStep={activeStep}
                    supplyChain={mineral.supplyChain}
                    onStepClick={openStep}
                    onClose={() => setCardOpen(false)}
                    totalStops={mineral.supplyChain.length}
                  />
                </div>
              </div>
            ) : (
              /* ── Single column layout ── */
              <div className="flex flex-col px-9 pb-6 pt-6">
                <CardContent
                  card={card}
                  activeStep={activeStep}
                  supplyChain={mineral.supplyChain}
                  onStepClick={openStep}
                  onClose={() => setCardOpen(false)}
                  totalStops={mineral.supplyChain.length}
                />
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}

// ── Shared card body component ──
type SupplyStep = { label: string; locationLabel?: string; pinType?: string };
type CardContentProps = {
  card: { title: string; body: string; citation: string; image?: string };
  activeStep: number;
  supplyChain: SupplyStep[];
  onStepClick: (i: number) => void;
  onClose: () => void;
  totalStops: number;
};

function CardContent({ card, activeStep, supplyChain, onStepClick, onClose }: CardContentProps) {
  return (
    <>
      {/* Location label + close */}
      <div className="mb-3 flex items-start justify-between">
        <p
          className="text-[0.6rem] uppercase tracking-[0.28em]"
          style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
        >
          {supplyChain[activeStep]?.locationLabel ?? supplyChain[activeStep]?.label}
        </p>
        <button
          onClick={onClose}
          className="ml-4 text-[0.65rem] uppercase tracking-[0.25em] transition-opacity hover:opacity-50"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
        >
          ✕
        </button>
      </div>

      {/* Stop dots — clicking jumps to that stop's card */}
      <div className="mb-4 flex items-center gap-2">
        {supplyChain.map((_, i) => (
          <button
            key={i}
            onClick={() => onStepClick(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeStep ? 18 : 5,
              height: 5,
              background: i === activeStep ? "var(--cranberry)" : "rgba(46,38,46,0.2)",
            }}
          />
        ))}
      </div>

      {/* Card body */}
      <div
        className="mb-4"
        style={{ width: 28, height: 2, background: "var(--cranberry)", borderRadius: 1 }}
      />
      <h3
        className="mb-3 leading-snug"
        style={{
          color: "var(--ink)",
          fontFamily: "var(--font-playfair), serif",
          fontSize: "1.1rem",
          fontStyle: "italic",
        }}
      >
        {card.title}
      </h3>
      <p
        className="mb-4 text-[0.79rem] leading-[1.78] flex-1 overflow-y-auto"
        style={{
          color: "var(--ink)",
          fontFamily: "var(--font-playfair), serif",
          opacity: 0.88,
          maxHeight: "28vh",
          whiteSpace: "pre-line",
        }}
      >
        {card.body}
      </p>
      <p
        className="mb-5 text-[0.63rem] leading-relaxed"
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

      {/* BACK button */}
      <button
        onClick={onClose}
        className="w-full py-2.5 text-[0.63rem] uppercase tracking-[0.3em] transition-all hover:bg-[rgba(46,38,46,0.08)]"
        style={{
          border: "1px solid rgba(46,38,46,0.28)",
          color: "var(--ink)",
          background: "transparent",
          fontFamily: "var(--font-mono), monospace",
          cursor: "pointer",
        }}
      >
        back
      </button>
    </>
  );
}
