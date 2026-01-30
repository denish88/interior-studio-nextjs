"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background-soft)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            How we work
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {i < processSteps.length - 1 && (
                <div
                  className="absolute left-8 top-12 hidden h-px w-[calc(100%-4rem)] bg-[var(--border)] lg:block"
                  aria-hidden
                />
              )}
              <div className="flex items-start gap-6">
                <span className="font-serif text-2xl font-medium text-[var(--accent)]">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
