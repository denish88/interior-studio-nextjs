"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.08] bg-black/70 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-b border-white/[0.05] bg-black/40 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 lg:py-5">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-[0.2em] text-[var(--foreground)] transition-all hover:text-[var(--accent)] sm:text-xl lg:text-2xl"
          >
            {site.name.toUpperCase()}
          </Link>

          <ul className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative px-4 py-2.5 text-sm font-medium tracking-widest uppercase transition-colors hover:text-[var(--accent)] lg:px-5 lg:py-3 lg:text-[0.8125rem] ${
                      isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]/90"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-md bg-[var(--accent)]/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[var(--accent)] transition-all duration-300 ${
                        isActive ? "w-3/4" : "w-0 group-hover:w-1/2"
                      }`}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`h-0.5 w-5 bg-[var(--foreground)] transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-[var(--foreground)] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-[var(--foreground)] transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-2 py-20">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-8 py-4 font-serif text-2xl tracking-wide transition-colors hover:text-[var(--accent)] sm:text-3xl ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
