"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const MODEL_LABELS = [
  { id: "pixel", label: "pixel 10", x: "17%", clickable: false },
  { id: "iphone", label: "iphone 16", x: "50%", clickable: true, href: "/diagram/iphone" },
  { id: "samsung", label: "samsung s25", x: "83%", clickable: false },
];

function LabelPill({
  label,
  clickable,
  onClick,
}: {
  label: string;
  clickable: boolean;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[18px] px-4 py-2 text-[0.72rem] tracking-[0.18em] transition-all duration-200";

  if (clickable) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} border border-[rgba(139,38,53,0.7)] bg-[var(--cranberry)] text-[var(--cream)] hover:-translate-y-0.5 hover:bg-[#7a2230]`}
      >
        {label}
      </button>
    );
  }

  return (
    <div
      className={`${base} border border-[rgba(46,38,46,0.18)] bg-[rgba(250,245,238,0.88)] text-[var(--ink)]`}
      style={{ opacity: 0.7 }}
    >
      {label}
    </div>
  );
}

export default function SelectPage() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden" style={{ background: "var(--cream)" }}>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="absolute left-6 top-6 z-10 text-xs uppercase tracking-[0.32em] transition-colors hover:text-[var(--ink)]"
        style={{ color: "var(--warm-gray)" }}
      >
        {"\u2190"} Back
      </button>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.32em]" style={{ color: "var(--warm-gray)" }}>
            Choose a device
          </p>
        </div>

        <div className="relative w-full max-w-6xl" style={{ aspectRatio: "2150 / 1600" }}>
          <Image
            src="/illustrations/models.svg"
            alt="Three phone models"
            fill
            priority
            className="select-none object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-[16%]">
            <div className="relative h-0 w-full">
              {MODEL_LABELS.map((model) => (
                <div
                  key={model.id}
                  className="absolute"
                  style={{
                    left: model.x,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="pointer-events-auto">
                    <LabelPill
                      label={model.label}
                      clickable={model.clickable}
                      onClick={model.href ? () => router.push(model.href) : undefined}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
