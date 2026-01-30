"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export function ServicesSection() {
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
            What we do
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Services
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href="/services"
                className="group block border border-[var(--border)] bg-[var(--background)] p-8 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_40px_-10px_rgba(201,162,77,0.2)]"
              >
                <span className="text-2xl font-medium text-[var(--accent)]">
                  {service.id}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium text-[var(--foreground)] transition-transform duration-300 group-hover:-translate-y-0.5">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--foreground-muted)]">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:opacity-80"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
