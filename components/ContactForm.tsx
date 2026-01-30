"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "Residential",
  "Commercial",
  "Turnkey",
  "Custom Furniture",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submit – replace with your API or form service
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded border border-[var(--accent)] bg-[var(--background-soft)] p-12 text-center"
      >
        <p className="font-serif text-2xl font-medium text-[var(--foreground)]">
          Thank you for reaching out.
        </p>
        <p className="mt-4 text-[var(--foreground-muted)]">
          We&apos;ll get back to you within 24–48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-[var(--foreground-muted)]">
            Name *
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-[var(--foreground-muted)]">
            Email *
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-[var(--foreground-muted)]">
          Project type
        </span>
        <select
          name="projectType"
          className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-[var(--foreground-muted)]">
          Message *
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-none border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Tell us about your project..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-[var(--accent)] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </motion.form>
  );
}
