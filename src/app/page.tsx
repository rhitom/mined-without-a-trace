"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  function handlePhoneClick() {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => router.push("/select"), 700);
  }

  return (
    <main
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Full-bleed illustration with zoom-on-click transition */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
          transform: clicked ? "scale(2.2)" : "scale(1)",
          opacity: clicked ? 0 : 1,
          transformOrigin: "67% 52%",
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 400 297.674"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Cream background */}
          <rect width="400" height="297.674" fill="#FAF5EE" />

          {/* Hand-drawn illustration */}
          <image
            href="/illustrations/landing_phone.png"
            x="0"
            y="0"
            width="400"
            height="297.674"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Invisible phone hotspot.
              The phone is in the right-center of the illustration,
              roughly 55–68% x, 37–75% y of the 400×297 viewBox. */}
          <rect
            x="212"
            y="108"
            width="50"
            height="75"
            rx="10"
            fill={hovering ? "rgba(139,38,53,0.06)" : "transparent"}
            stroke={hovering ? "rgba(139,38,53,0.2)" : "transparent"}
            strokeWidth="1.5"
            style={{
              cursor: "pointer",
              animation: hovering ? "buzz 0.45s ease-in-out" : "none",
              transition: "fill 0.2s ease",
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={handlePhoneClick}
          />
        </svg>
      </div>

      {/* "tap to explore" hint — animates in after delay */}
      <p
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase fade-up select-none"
        style={{
          color: "var(--warm-gray)",
          animationDelay: "2s",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        tap to explore
      </p>
    </main>
  );
}
