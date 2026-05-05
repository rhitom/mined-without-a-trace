"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import phones from "@/data/phones.json";

const PHONE_LABELS = [
  { id: "galaxy",  brand: "Samsung", name: "Galaxy S25" },
  { id: "iphone",  brand: "Apple",   name: "iPhone 16" },
  { id: "pixel",   brand: "Google",  name: "Pixel 9" },
];

export default function SelectPage() {
  const router = useRouter();
  // center phone (index 1 = iPhone) is active by default
  const [active, setActive] = useState(1);

  const phone = PHONE_LABELS[active];
  const isClickable = phones.find((p) => p.id === phone.id)?.status === "active";

  function handleSelect() {
    if (!isClickable) return;
    router.push(`/diagram/${phone.id}`);
  }

  return (
    <main
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Back link */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 text-xs tracking-widest uppercase"
        style={{ color: "var(--warm-gray)" }}
      >
        ← Back
      </button>

      {/* Section label */}
      <p
        className="text-xs tracking-[0.3em] uppercase mb-12 select-none"
        style={{ color: "var(--warm-gray)" }}
      >
        Choose a device
      </p>

      {/* Phone carousel — uses the hand-drawn illustration as base,
          with three interactive zones mapped to each phone position */}
      <div className="relative w-full max-w-2xl" style={{ aspectRatio: "1080/620" }}>
        <img
          src="/illustrations/phone-select.png"
          alt="Three phones"
          className="w-full h-full object-contain select-none"
          draggable={false}
        />

        {/* Clickable hotspot overlays — left, center, right */}
        {PHONE_LABELS.map((p, i) => {
          const isActive = active === i;
          // Position each hotspot over the three illustrated phones
          const positions = [
            { left: "13%", top: "20%", width: "22%", height: "68%" }, // left phone
            { left: "37%", top: "12%", width: "26%", height: "80%" }, // center phone
            { left: "65%", top: "22%", width: "22%", height: "64%" }, // right phone
          ];
          const pos = positions[i];

          return (
            <button
              key={p.id}
              onClick={() => {
                setActive(i);
                if (isActive && phones.find((ph) => ph.id === p.id)?.status === "active") {
                  router.push(`/diagram/${p.id}`);
                }
              }}
              className="absolute rounded-lg transition-all duration-300"
              style={{
                left: pos.left,
                top: pos.top,
                width: pos.width,
                height: pos.height,
                background: isActive ? "rgba(139,38,53,0.06)" : "transparent",
                border: isActive ? "2px solid rgba(139,38,53,0.25)" : "2px solid transparent",
                cursor: "pointer",
              }}
              aria-label={`Select ${p.name}`}
            />
          );
        })}
      </div>

      {/* Phone label and CTA */}
      <div className="flex flex-col items-center mt-8 gap-3" style={{ minHeight: 80 }}>
        <div className="text-center fade-up" key={active}>
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--warm-gray)" }}>
            {phone.brand}
          </p>
          <h2 className="text-2xl mt-1" style={{ color: "var(--ink)" }}>
            {phone.name}
          </h2>
        </div>

        {isClickable ? (
          <button
            onClick={handleSelect}
            className="mt-2 px-6 py-2 text-xs tracking-widest uppercase transition-all duration-200"
            style={{
              background: "var(--cranberry)",
              color: "var(--cream)",
              borderRadius: 2,
              letterSpacing: "0.2em",
            }}
          >
            Explore →
          </button>
        ) : (
          <p className="mt-2 text-xs tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>
            Coming soon
          </p>
        )}
      </div>
    </main>
  );
}
