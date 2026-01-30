"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ProjectGallerySliderProps = {
  images: string[];
  title: string;
};

const slideEase = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: slideEase },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.4, ease: slideEase },
  }),
};

const AUTOPLAY_MS = 5500;

export function ProjectGallerySlider({ images, title }: ProjectGallerySliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const next = useCallback(() => {
    goTo((index + 1) % images.length);
  }, [index, images.length, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + images.length) % images.length);
  }, [index, images.length, goTo]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, isPaused, images.length, next]);

  if (!images.length) return null;

  const currentSrc = images[index];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Project gallery"
    >
      <div className="relative aspect-[21/9] w-full min-h-[280px] sm:min-h-[360px]">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={currentSrc}
              alt={`${title} — image ${index + 1} of ${images.length}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay for controls readability */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          aria-hidden
        />

        {/* Previous / Next */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-black/40 backdrop-blur-sm text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:bg-black/60 hover:text-[var(--accent)]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-black/40 backdrop-blur-sm text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:bg-black/60 hover:text-[var(--accent)]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}

        {/* Dots + counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 sm:bottom-8">
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className="group flex flex-col items-center gap-1"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-[var(--accent)]"
                        : "w-1.5 bg-[var(--foreground-muted)] opacity-60 group-hover:opacity-100 group-hover:bg-[var(--foreground)]"
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="rounded-full border border-[var(--border)] bg-black/40 backdrop-blur-sm px-3 py-1.5 text-xs tabular-nums text-[var(--foreground-muted)]">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail strip (optional, below main image on desktop) */}
      {images.length > 1 && (
        <div className="border-t border-[var(--border)] bg-[var(--background-soft)]">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  style={{
                    borderColor: i === index ? "var(--accent)" : "var(--border)",
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
