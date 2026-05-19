"use client";

import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import minerals from "@/data/minerals.json";
import { GLOBE_CARDS } from "@/data/globe-cards";

const GlobeView = dynamic(() => import("@/components/GlobeView"), { ssr: false });

const MINERAL_COLORS: Record<string, string> = {
  cobalt: "#8B2635",
  tantalum: "#8B2635",
  tungsten: "#8B2635",
  gold: "#8B2635",
  tin: "#8B2635",
  indium: "#8B2635",
  "rare-earths": "#8B2635",
};

type StopType = "mine" | "refinery" | "assembly" | "consumer";
const CHROME_H = 148;

export default function GlobePage() {
  const { mineral: mineralId } = useParams<{ mineral: string }>();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [cardOpen, setCardOpen] = useState(true);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    try {
      const visited: string[] = JSON.parse(localStorage.getItem("mwat-visited-minerals") ?? "[]");
      if (!visited.includes(mineralId)) {
        visited.push(mineralId);
        localStorage.setItem("mwat-visited-minerals", JSON.stringify(visited));
      }
      if (visited.length >= 3) setShowNext(true);
    } catch {}
  }, [mineralId]);

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
          background: "var(--cream)",
          borderBottom: "1px solid rgba(46,38,46,0.10)",
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="text-[0.65rem] uppercase tracking-[0.28em] transition-opacity hover:opacity-50"
            style={{ color: "var(--ink)", fontFamily: "var(--font-mono), monospace" }}
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
                style={{ color: "var(--ink)", fontFamily: "var(--font-mono), monospace", opacity: 0.5 }}
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
              style={{ color: "var(--ink)", fontFamily: "var(--font-mono), monospace", opacity: 0.6 }}
            >
              {mineral.mineLocation.country}
            </p>
          </div>

          <div style={{ width: 48 }} />
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(46,38,46,0.08)", margin: "12px 0 0" }} />

        {/* Pipeline */}
        <div className="mt-3 flex items-start justify-center">
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
                        background: isActive ? "var(--cranberry)" : isPast ? "rgba(139,38,53,0.15)" : "rgba(46,38,46,0.10)",
                        color: isActive ? "var(--cream)" : isPast ? "var(--cranberry)" : "rgba(46,38,46,0.75)",
                        border: isActive ? "none" : isPast ? "1px solid rgba(139,38,53,0.5)" : "1px solid rgba(46,38,46,0.3)",
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
                        color: isActive ? "var(--cranberry)" : isPast ? "rgba(139,38,53,0.8)" : "rgba(46,38,46,0.65)",
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
                          : "repeating-linear-gradient(90deg, rgba(46,38,46,0.35) 0px, rgba(46,38,46,0.35) 3px, transparent 3px, transparent 7px)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Next → button — appears after 3 minerals visited ── */}
      {showNext && (
        <button
          onClick={() => router.push("/ending")}
          className="next-btn absolute bottom-6 right-6 z-30 text-[0.65rem] uppercase tracking-[0.28em]"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-mono), monospace",
            border: "1px solid rgba(46,38,46,0.3)",
            padding: "8px 18px",
            background: "transparent",
            transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--cranberry)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--cream)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cranberry)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(46,38,46,0.3)";
          }}
        >
          next →
        </button>
      )}

      {/* ── Modal — left-anchored, globe visible on the right ── */}
      {cardOpen && card && (
        <>
          {/* Invisible full-screen backdrop for click-to-dismiss */}
          <div
            className="absolute inset-0 z-20"
            onClick={() => setCardOpen(false)}
          />

          {/* Card — left edge, square */}
          <div
            className="fade-up absolute z-30 flex flex-col overflow-hidden"
            style={{
              left: 20,
              top: CHROME_H + 20,
              width: "min(420px, 46vw)",
              height: "min(420px, 46vw)",
              background: "#ffffff",
              backdropFilter: "blur(24px)",
              border: "1.5px solid rgba(221,208,187,0.9)",
              borderTop: "3px solid var(--cranberry)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable text area */}
            <div
              className="flex flex-col overflow-y-auto flex-1"
              style={{ padding: "1.5rem 1.6rem 0" }}
            >
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

              {/* Cranberry rule */}
              <div className="mb-4" style={{ width: 24, height: 1.5, background: "var(--cranberry)", borderRadius: 1 }} />

              {/* Title */}
              <h3
                className="mb-3 leading-tight flex-shrink-0"
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

              {/* Pull-quote blockquote — only if present */}
              {card.quote && (
                <blockquote
                  className="mb-4"
                  style={{
                    borderLeft: "2px solid var(--cranberry)",
                    marginLeft: 0,
                    paddingLeft: "1rem",
                  }}
                >
                  <p
                    className="text-[0.82rem] leading-[1.75]"
                    style={{
                      color: "var(--ink)",
                      fontFamily: "var(--font-playfair), serif",
                      fontStyle: "italic",
                    }}
                  >
                    {card.quote}
                  </p>
                </blockquote>
              )}

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

            {/* BACK — always pinned at card bottom */}
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
        </>
      )}
    </main>
  );
}
