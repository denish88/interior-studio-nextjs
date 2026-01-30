"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutContent } from "@/lib/data";
import { CountUp } from "@/components/CountUp";
import { AboutImageSlider } from "@/components/AboutImageSlider";

const aboutImages =
  aboutContent.sliderImages?.length
    ? aboutContent.sliderImages
    : ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"];

export function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, {
    once: true,
    margin: "0px",
    amount: 0.2,
  });

  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              About Orix
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              {aboutContent.headline}
            </h2>
            <p className="mt-6 text-[var(--foreground-muted)] leading-relaxed">
              {aboutContent.paragraph}
            </p>
            <div
              ref={statsRef}
              className="mt-10 flex flex-wrap gap-10 sm:gap-12"
            >
              {aboutContent.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-medium text-[var(--accent)] sm:text-4xl">
                    <CountUp value={stat.value} trigger={statsInView} />
                  </p>
                  <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors hover:opacity-80"
            >
              Learn more about us
              <span aria-hidden>→</span>
            </Link>
          </motion.div>

          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutImageSlider
              images={aboutImages}
              alt="Studio"
              intervalMs={4500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
