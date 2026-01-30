"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type AboutImageSliderProps = {
  images: string[];
  alt?: string;
  intervalMs?: number;
};

export function AboutImageSlider({
  images,
  alt = "Studio",
  intervalMs = 4500,
}: AboutImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  if (!images.length) return null;

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden grayscale">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images[index]}
            alt={`${alt} — ${index + 1} of ${images.length}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-1 rounded-full transition-all duration-300 sm:h-1.5 sm:w-1.5 ${
                i === index ? "bg-[var(--accent)] w-4 sm:w-5" : "bg-[var(--foreground-muted)]/50"
              }`}
              aria-hidden
            />
          ))}
        </div>
      )}
    </div>
  );
}
