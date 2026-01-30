"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TypingAnimationProps = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  loop?: boolean;
  loopDelayMs?: number;
  className?: string;
};

export function TypingAnimation({
  text,
  speedMs = 80,
  startDelayMs = 800,
  loop = true,
  loopDelayMs = 3000,
  className = "",
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0;
      const type = () => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
          setTimeout(type, speedMs);
        } else {
          setIsComplete(true);
          if (loop) {
            setTimeout(() => {
              setDisplayed("");
              setIsComplete(false);
              i = 0;
              type();
            }, loopDelayMs);
          }
        }
      };
      type();
    }, startDelayMs);
    return () => clearTimeout(startTimer);
  }, [text, speedMs, startDelayMs, loop, loopDelayMs]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      className={`flex flex-wrap items-baseline justify-center gap-0.5 lg:justify-start ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: startDelayMs / 1000 - 0.2, duration: 0.4 }}
    >
      <span className="min-h-[1.5em] font-sans text-base text-[var(--foreground-muted)] sm:text-lg md:text-xl">
        {displayed}
      </span>
      <span
        className="inline-block h-[1em] w-[2px] shrink-0 align-middle bg-[var(--accent)] transition-opacity duration-75 sm:h-5 sm:w-[3px]"
        style={{ opacity: showCursor ? 1 : 0 }}
        aria-hidden
      />
    </motion.div>
  );
}
