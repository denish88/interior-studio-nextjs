"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/data";
import { TypingAnimation } from "@/components/TypingAnimation";

const heroImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85";
  

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={heroImage}
            alt="Luxury interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-black/75"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 text-center lg:px-8 lg:text-left">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-4xl font-medium tracking-wide text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
            {site.name.toUpperCase()}
          </h1>
          <p className="mt-6 font-sans text-lg text-[var(--foreground-muted)] sm:text-xl md:text-2xl">
            {site.tagline}
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-[var(--foreground-muted)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Start a Project
            </Link>
          </div>
          {site.heroTypingPhrase && (
            <div className="mt-10 min-h-[2.5rem] sm:mt-12 sm:min-h-[2.75rem] md:min-h-[2rem]">
              <TypingAnimation
                text={site.heroTypingPhrase}
                speedMs={70}
                startDelayMs={1400}
                loop
                loopDelayMs={2800}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
