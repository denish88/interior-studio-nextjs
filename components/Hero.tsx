"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ee8dc71b2b9c?w=1920&q=85";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:text-left lg:px-8">
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
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="block h-12 w-px bg-[var(--foreground-muted)]" />
      </motion.div>
    </section>
  );
}
