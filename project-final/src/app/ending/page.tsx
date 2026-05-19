"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const BLOCKS = [
  "In 2025, after the Democratic Republic of the Congo filed a suit against the tech giant, Apple began a transition to MP Materials. A vertically integrated domestic minerals supplier, MP Materials sources minerals from deposits in California, refining them onsite.",
  "Samsung and Pixel have long since outpaced Apple in sustainability practices. Samsung is beginning to source materials locally, and claims their Cobalt and Coltan is conflict-free, although from what we’ve seen, that might be difficult to imagine. Google uses 36% recycled minerals in their Pixel 10, sourcing from MP Materials as well.",
  "Things are changing for the better. Pressure works. Now that you know what’s in your phone, what will you choose?",
];

const ORGS = [
  {
    name: "Responsible Minerals Initiative",
    desc: "Industry auditing standards for conflict-free mineral sourcing",
    url: "https://www.responsiblemineralsinitiative.org",
  },
  {
    name: "PANZI Foundation",
    desc: "Healing, justice, and futures for Congolese survivors of sexual violence",
    url: "https://panzifoundation.org/#",
  },
  {
    name: "Goma Actif",
    desc: "Community-led support on the ground in Goma, DRC",
    url: "https://www.gomaactif.org",
  },
  {
    name: "Action Kivu",
    desc: "Trauma healing, vocational programs, and education for women and youth in eastern DRC",
    url: "https://www.actionkivu.org/",
  },
  {
    name: "Enough Project",
    desc: "Exposing and disrupting the networks of corruption and violence funding conflict in Africa",
    url: "https://enoughproject.org/",
  },
  {
    name: "iFixit",
    desc: "Right-to-repair as ethical consumption — extend your device’s life",
    url: "https://www.ifixit.com",
  },
];

const CHAR_DELAY = 26;
const ILLUS_FADE_MS = 1500;
const AUTO_START_DELAY = 2200;

export default function EndingPage() {
  const router = useRouter();
  const [illustReady, setIllusReady] = useState(false);
  const [activeBlock, setActiveBlock] = useState(-1);
  const [charCount, setCharCount] = useState(0);
  const [orgsVisible, setOrgsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIllusReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => startBlock(0), AUTO_START_DELAY);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function startBlock(idx: number) {
    setActiveBlock(idx);
    setCharCount(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    let count = 0;
    intervalRef.current = setInterval(() => {
      count++;
      setCharCount(count);
      if (count >= BLOCKS[idx].length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, CHAR_DELAY);
  }

  function handleClick() {
    if (activeBlock < 0) return;
    const finished = charCount >= BLOCKS[activeBlock].length;
    if (!finished) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCharCount(BLOCKS[activeBlock].length);
    } else {
      const next = activeBlock + 1;
      if (next >= BLOCKS.length) {
        setOrgsVisible(true);
      } else {
        startBlock(next);
      }
    }
  }

  const currentFinished = activeBlock >= 0 && charCount >= BLOCKS[activeBlock].length;
  const allDone = activeBlock === BLOCKS.length - 1 && currentFinished;

  // Auto-show orgs 1.2s after last block finishes — no extra click required
  useEffect(() => {
    if (!allDone || orgsVisible) return;
    const t = setTimeout(() => setOrgsVisible(true), 1200);
    return () => clearTimeout(t);
  }, [allDone, orgsVisible]);

  return (
    <main
      className="page-enter relative flex h-screen w-full overflow-hidden"
      style={{ background: "#EDE8DC", cursor: allDone ? "default" : "pointer" }}
      onClick={handleClick}
    >
      {/* Nav */}
      <button
        onClick={(e) => { e.stopPropagation(); router.back(); }}
        className="absolute left-5 top-5 z-20 text-xs uppercase tracking-widest transition-opacity hover:opacity-50"
        style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
      >
        ← back
      </button>

      {/* Left — illustration, cropped to content */}
      <div
        className="relative h-full w-[48%] flex-shrink-0 overflow-hidden"
        style={{
          opacity: illustReady ? 1 : 0,
          transition: `opacity ${ILLUS_FADE_MS}ms ease`,
        }}
      >
        <img
          src="/illustrations/final.png"
          alt="A brand new iPhone in its box"
          className="absolute inset-0 h-full w-full select-none object-cover object-left-top"
          draggable={false}
          style={{ transform: "scale(1.12)", transformOrigin: "left top" }}
        />
      </div>

      {/* Right — text */}
      <div className="flex h-full flex-1 flex-col justify-center overflow-y-auto py-8 pl-8 pr-16">
        <div className="max-w-[480px]">

          {BLOCKS.map((block, i) => {
            if (i > activeBlock) return null;
            const displayed = i < activeBlock ? block : block.slice(0, charCount);
            const isLast = i === BLOCKS.length - 1;
            return (
              <p
                key={i}
                className="mb-6 leading-[1.85]"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: isLast ? "1.08rem" : "0.87rem",
                  fontStyle: isLast ? "italic" : "normal",
                  opacity: i < activeBlock ? 0.65 : 1,
                  whiteSpace: "pre-line",
                  transition: "opacity 0.4s ease",
                }}
              >
                {displayed}
                {i === activeBlock && !currentFinished && (
                  <span
                    style={{
                      opacity: 0.35,
                      animation: "cursor-blink 0.75s step-end infinite",
                      marginLeft: 1,
                    }}
                  >
                    |
                  </span>
                )}
              </p>
            );
          })}

          {/* Continue hint */}
          {activeBlock >= 0 && !allDone && (
            <p
              className="text-[0.58rem] uppercase tracking-[0.28em]"
              style={{
                color: "var(--warm-gray)",
                fontFamily: "var(--font-mono), monospace",
                opacity: currentFinished ? 0.6 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              click to continue
            </p>
          )}

          {/* Orgs */}
          {orgsVisible && (
            <div
              className="mt-10"
              style={{ opacity: 0, animation: "ending-fade 0.9s ease 0.1s forwards" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="mb-5"
                style={{ width: 24, height: 1.5, background: "var(--cranberry)", borderRadius: 1 }}
              />
              <p
                className="mb-5 text-[0.58rem] uppercase tracking-[0.32em]"
                style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
              >
                get involved
              </p>
              <div className="flex flex-col gap-4">
                {ORGS.map((org) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5"
                    style={{ textDecoration: "none" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 group-hover:opacity-70"
                      style={{ color: "var(--cranberry)", fontFamily: "var(--font-mono), monospace" }}
                    >
                      {org.name}
                    </span>
                    <span
                      className="text-[0.72rem] leading-snug"
                      style={{ color: "var(--warm-gray)", fontFamily: "var(--font-playfair), serif" }}
                    >
                      {org.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0; }
        }
        @keyframes ending-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
