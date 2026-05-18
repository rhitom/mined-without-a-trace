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
      <div className="absolute inset-0">
        <GlobeView
          mineLocation={mineral.mineLocation}
          supplyChain={mineral.supplyChain}
          mineralColor={color}
        />
      </div>

      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-5">
        <button
          onClick={() => router.back()}
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--warm-gray)" }}
        >
          ← Back
        </button>

        <div className="text-center">
          <span
            className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em]"
            style={{
              background: "rgba(250,245,238,0.92)",
              color: "var(--ink)",
              border: "1px solid rgba(46,38,46,0.14)",
            }}
          >
            {mineral.name} · {mineral.formula}
          </span>
        </div>

        <button
          onClick={() => setPanelOpen((v) => !v)}
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--warm-gray)" }}
        >
          {panelOpen ? "Hide" : "Show"} cards
        </button>
      </div>

      <div className="absolute bottom-6 left-6 z-10">
        <p
          className="text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--warm-gray)" }}
        >
          Mine location
        </p>
        <p className="text-sm" style={{ color: "var(--ink)" }}>
          {mineral.mineLocation.name}
        </p>
        <p className="text-xs" style={{ color: "var(--warm-gray)" }}>
          {mineral.mineLocation.country}
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {mineral.supplyChain.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="rounded px-2 py-0.5 text-xs"
              style={{
                background: "rgba(250,245,238,0.94)",
                color: "var(--ink)",
                border: "1px solid rgba(46,38,46,0.14)",
              }}
            >
              {step.label}
            </span>
            {i < mineral.supplyChain.length - 1 && (
              <span style={{ color: "rgba(46,38,46,0.35)", fontSize: 10 }}>→</span>
            )}
          </div>
        ))}
      </div>

      <div
        className="card-scroll absolute right-0 top-0 z-10 flex h-full flex-col overflow-y-auto"
        style={{
          width: 340,
          background: "rgba(250,245,238,0.94)",
          backdropFilter: "blur(16px)",
          borderLeft: "1px solid rgba(46,38,46,0.08)",
          transform: panelOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="px-7 pb-6 pt-20">
          <div className="mb-8 flex gap-2">
            {mineral.cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className="h-2 w-2 rounded-full transition-all duration-200"
                style={{
                  background:
                    activeCard === i ? "var(--cranberry)" : "rgba(46,38,46,0.16)",
                  transform: activeCard === i ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>

          <div key={activeCard} className="fade-up">
            <h3 className="mb-4 text-base leading-snug" style={{ color: "var(--ink)" }}>
              {card.title}
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "var(--warm-gray)" }}
            >
              {card.body}
            </p>
            <p
              className="text-xs italic"
              style={{
                color: "var(--warm-gray)",
                borderTop: "1px solid rgba(46,38,46,0.08)",
                paddingTop: 12,
              }}
            >
              {card.citation}
            </p>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setActiveCard((v) => Math.max(0, v - 1))}
              disabled={activeCard === 0}
              className="text-xs uppercase tracking-widest transition-opacity disabled:opacity-20"
              style={{ color: "var(--cranberry)" }}
            >
              ← Prev
            </button>
            <button
              onClick={() =>
                setActiveCard((v) => Math.min(mineral.cards.length - 1, v + 1))
              }
              disabled={activeCard === mineral.cards.length - 1}
              className="text-xs uppercase tracking-widest transition-opacity disabled:opacity-20"
              style={{ color: "var(--cranberry)" }}
            >
              Next →
            </button>
          </div>
        </div>

        <div
          className="mt-auto px-7 py-6"
          style={{ borderTop: "1px solid rgba(46,38,46,0.08)" }}
        >
          <p
            className="mb-3 text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--warm-gray)" }}
          >
            Component
          </p>
          <p className="text-sm" style={{ color: "var(--ink)" }}>
            {mineral.component}
          </p>
        </div>
      </div>
    </main>
  );
}
