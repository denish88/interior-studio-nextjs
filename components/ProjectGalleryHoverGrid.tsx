"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ProjectGalleryHoverGridProps = {
  images: string[];
  title: string;
};

const HOVER_DELAY_MS = 100;
const LEAVE_DELAY_MS = 180;

export function ProjectGalleryHoverGrid({ images, title }: ProjectGalleryHoverGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (index: number) => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    enterTimeoutRef.current = setTimeout(() => setHoveredIndex(index), HOVER_DELAY_MS);
  };

  const handleMouseLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = setTimeout(() => setHoveredIndex(null), LEAVE_DELAY_MS);
  };

  const gridImages = images.slice(1, 4);

  return (
    <>
      <div
        className="grid gap-6 sm:grid-cols-2"
        onMouseLeave={handleMouseLeave}
      >
        {gridImages.map((src, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--background-soft)]"
            onMouseEnter={() => handleMouseEnter(i)}
          >
            <Image
              src={src}
              alt={`${title} gallery ${i + 2}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-[var(--foreground)]/0 transition-colors duration-300 group-hover:bg-[var(--foreground)]/5"
              aria-hidden
            />
          </div>
        ))}
      </div>

      {/* Large preview on hover — stays open when moving between thumbnails */}
      <AnimatePresence mode="wait">
        {hoveredIndex !== null && gridImages[hoveredIndex] && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={false}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
              aria-hidden
            />
            <motion.div
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-sm shadow-2xl"
              style={{
                boxShadow: "0 0 0 1px var(--border), 0 25px 80px -12px rgba(0,0,0,0.7)",
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <div className="relative aspect-[4/3] w-full">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={gridImages[hoveredIndex]}
                      alt={`${title} — view ${hoveredIndex + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                      priority={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
