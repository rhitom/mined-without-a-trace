"use client";

import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import minerals from "@/data/minerals.json";

// Dynamic import — react-globe.gl requires a browser + WebGL context
const GlobeView = dynamic(() => import("@/components/GlobeView"), { ssr: false });

const MINERAL_COLORS: Record<string, string> = {
  cobalt: "#5C7CFA",
  tantalum: "#CC5DE8",
  tungsten: "#868E96",
  gold: "#FFA94D",
  tin: "#74C0FC",
  "rare-earths": "#51CF66",
};

export default function GlobePage() {
  const { mineral: mineralId } = useParams<{ mineral: string }>();
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(0);
  const [panelOpen, setPanelOpen] = useState(true);

  const mineral = minerals.find((m) => m.id === mineralId);

  if (!mineral) {
    return (
      <main className="w-full h-screen flex items-center justify-center" style={{ background: "#0a0a14" }}>
        <p style={{ color: "#666" }}>Mineral not found.</p>
      </main>
    );
  }

  const color = MINERAL_COLORS[mineralId] || "#5C7CFA";
  const card = mineral.cards[activeCard];

  return (
    <main className="relative w-full h-screen overflow-hidden" style={{ background: "#0a0a14" }}>
      {/* Globe — fills full screen */}
      <div className="absolute inset-0">
        <GlobeView
          mineLocation={mineral.mineLocation}
          supplyChain={mineral.supplyChain}
          mineralColor={color}
        />
      </div>

      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10">
        <button
          onClick={() => router.back()}
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          ← Back
        </button>

        <div className="text-center">
          <span
            className="text-xs tracking-[0.3em] uppercase px-3 py-1 rounded-full"
            style={{ background: `${color}22`, color: color, border: `1px solid ${color}44` }}
          >
            {mineral.name} · {mineral.formula}
          </span>
        </div>

        <button
          onClick={() => setPanelOpen((v) => !v)}
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {panelOpen ? "Hide" : "Show"} cards
        </button>
      </div>

      {/* Mine label */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
          Mine location
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
          {mineral.mineLocation.name}
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          {mineral.mineLocation.country}
        </p>
      </div>

      {/* Supply chain step labels */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {mineral.supplyChain.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: `${color}18`,
                color: `${color}CC`,
                border: `1px solid ${color}33`,
              }}
            >
              {step.label}
            </span>
            {i < mineral.supplyChain.length - 1 && (
              <span style={{ color: `${color}44`, fontSize: 10 }}>→</span>
            )}
          </div>
        ))}
      </div>

      {/* Info card panel — slides in from right */}
      <div
        className="absolute top-0 right-0 h-full flex flex-col z-10 card-scroll overflow-y-auto"
        style={{
          width: 340,
          background: "rgba(10,10,20,0.92)",
          backdropFilter: "blur(16px)",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          transform: panelOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="px-7 pt-20 pb-6">
          {/* Card nav dots */}
          <div className="flex gap-2 mb-8">
            {mineral.cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  background: activeCard === i ? color : "rgba(255,255,255,0.2)",
                  transform: activeCard === i ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Card content */}
          <div key={activeCard} className="fade-up">
            <h3
              className="text-base mb-4 leading-snug"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {card.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {card.body}
            </p>
            <p
              className="text-xs italic"
              style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 12 }}
            >
              {card.citation}
            </p>
          </div>

          {/* Prev / Next */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActiveCard((v) => Math.max(0, v - 1))}
              disabled={activeCard === 0}
              className="text-xs tracking-widest uppercase disabled:opacity-20 transition-opacity"
              style={{ color: color }}
            >
              ← Prev
            </button>
            <button
              onClick={() => setActiveCard((v) => Math.min(mineral.cards.length - 1, v + 1))}
              disabled={activeCard === mineral.cards.length - 1}
              className="text-xs tracking-widest uppercase disabled:opacity-20 transition-opacity"
              style={{ color: color }}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Mineral legend */}
        <div
          className="mt-auto px-7 py-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
            Component
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            {mineral.component}
          </p>
        </div>
      </div>
    </main>
  );
}
