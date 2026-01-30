"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              className="relative border border-[var(--border)] bg-[var(--background-soft)] p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span
                className="font-serif text-6xl text-[var(--accent)] opacity-30"
                aria-hidden
              >
                "
              </span>
              <p className="mt-4 text-[var(--foreground)] leading-relaxed">
                {t.quote}
              </p>
              <footer className="mt-8">
                <p className="font-medium text-[var(--foreground)]">{t.author}</p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {t.project}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
