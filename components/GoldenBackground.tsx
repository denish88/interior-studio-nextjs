"use client";

/**
 * Site-wide decorative overlay: golden curved lines and soft gradient.
 * Renders on top of page content (z-40, below Navbar) with pointer-events-none so it's visible everywhere.
 */
export function GoldenBackground() {
  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Soft golden radial gradient – left side only (subtle) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(201,162,77,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 50% 100%, rgba(201,162,77,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Golden curved lines – left side (subtle) */}
      <svg
        className="absolute left-0 top-0 h-full w-[min(420px,48vw)] text-[var(--accent)]"
        viewBox="0 0 400 1000"
        fill="none"
        preserveAspectRatio="xMinYMid slice"
        style={{ opacity: 0.1 }}
      >
        <path
          d="M 0 180 Q 140 320 90 520 T 80 820"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M 0 80 Q 100 260 70 480 T 60 720"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d="M 0 320 Q 110 480 75 760"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>

      {/* Top/bottom golden wash (subtle) */}
      <div
        className="absolute inset-x-0 top-0 h-[45%]"
        style={{
          background: "linear-gradient(to bottom, rgba(201,162,77,0.03) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[35%]"
        style={{
          background: "linear-gradient(to top, rgba(201,162,77,0.025) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
