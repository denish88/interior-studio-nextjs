"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Parse "12+", "150+", "98%" -> { number: 12, suffix: "+" }
function parseValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: "" };
  return { number: parseInt(match[1], 10), suffix: match[2] ?? "" };
}

const DURATION_MS = 1800;
const EASE_OUT_EXPO = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

type CountUpProps = {
  value: string;
  className?: string;
};

export function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayNum, setDisplayNum] = useState(0);
  const { number: target, suffix } = parseValue(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = EASE_OUT_EXPO(progress);
      setDisplayNum(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {displayNum}
      {suffix}
    </span>
  );
}
