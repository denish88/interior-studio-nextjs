"use client";

import { useState, useEffect, useRef } from "react";

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
  /** When true, start the count-up. Parent can pass this from useInView on the stats container for reliable mobile behavior. */
  trigger?: boolean;
};

export function CountUp({ value, className = "", trigger }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayNum, setDisplayNum] = useState(0);
  const [inView, setInView] = useState(false);
  const { number: target, suffix } = parseValue(value);
  const started = useRef(false);

  // When parent passes trigger, use that (all stats animate together when stats block is in view)
  const shouldStart = trigger === true;

  // When no trigger prop: use native IntersectionObserver with full viewport, any amount visible
  useEffect(() => {
    if (trigger !== undefined) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [trigger]);

  const start = trigger !== undefined ? shouldStart : inView;

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = EASE_OUT_EXPO(progress);
      setDisplayNum(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target]);

  return (
    <span ref={ref} className={className}>
      {displayNum}
      {suffix}
    </span>
  );
}
