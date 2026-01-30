"use client";

import Link from "next/link";
import { site, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl font-medium tracking-wide text-[var(--foreground)]">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">{site.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--accent)]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-[var(--accent)]">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Follow
            </p>
            <ul className="mt-4 flex gap-6">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--foreground-muted)]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
