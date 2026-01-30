"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background-soft)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              Get in touch
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Start Your Project
            </h2>
            <p className="mt-6 text-[var(--foreground-muted)]">
              Whether you have a clear vision or just an idea, we&apos;d love to
              hear from you. Tell us about your space and your goals.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--foreground)] hover:text-[var(--accent)]"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-[var(--foreground)] hover:text-[var(--accent)]"
              >
                {site.phone}
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center border border-[var(--accent)] bg-[var(--accent)] px-10 py-4 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
