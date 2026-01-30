"use client";

import { motion } from "framer-motion";

// Cleaner house: base, walls, roof, door – x, y, w, h in % of container
const BLOCKS = [
  { x: 10, y: 58, w: 26, h: 20 }, // base left
  { x: 38, y: 58, w: 24, h: 20 }, // base center
  { x: 64, y: 58, w: 26, h: 20 }, // base right
  { x: 18, y: 38, w: 28, h: 22 }, // wall left
  { x: 54, y: 38, w: 28, h: 22 }, // wall right
  { x: 26, y: 18, w: 22, h: 22 }, // roof left
  { x: 52, y: 18, w: 22, h: 22 }, // roof right
  { x: 40, y: 50, w: 20, h: 16 }, // door
];

const DROP_DURATION = 0.7;
const STAGGER = 0.06;
const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroBuildingAnimation() {
  return (
    <motion.div
      className="pointer-events-none relative hidden h-[280px] w-full min-w-0 max-w-[300px] lg:flex lg:items-center lg:justify-center xl:h-[320px] xl:max-w-[340px]"
      aria-hidden
      animate={{
        filter: ["drop-shadow(0 0 12px rgba(201,162,77,0.2))", "drop-shadow(0 0 28px rgba(201,162,77,0.4))", "drop-shadow(0 0 12px rgba(201,162,77,0.2))"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 1.5,
      }}
    >
      <div
        className="relative h-full w-full max-w-[260px] xl:max-w-[300px]"
        style={{ perspective: "600px" }}
      >
        {BLOCKS.map((block, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[3px] border border-[var(--accent)]/40 bg-[var(--accent)] shadow-[0_0_20px_rgba(201,162,77,0.25)]"
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              width: `${block.w}%`,
              height: `${block.h}%`,
            }}
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: DROP_DURATION,
              delay: 0.3 + i * STAGGER,
              ease: EASE,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function HeroBuildingAnimationMobile() {
  return (
    <div
      className="pointer-events-none absolute bottom-[12%] left-1/2 h-[120px] w-[100px] -translate-x-1/2 lg:hidden"
      aria-hidden
    >
      {BLOCKS.map((block, i) => (
        <motion.div
          key={i}
          className="absolute rounded-[3px] border border-[var(--accent)]/35 bg-[var(--accent)]/95 shadow-[0_0_16px_rgba(201,162,77,0.2)]"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.w}%`,
            height: `${block.h}%`,
          }}
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: DROP_DURATION,
            delay: 0.5 + i * STAGGER,
            ease: EASE,
          }}
        />
      ))}
    </div>
  );
}
