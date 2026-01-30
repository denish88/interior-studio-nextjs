import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Orix Design Studio",
  description: "Get in touch to start your interior design project.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Start a Project
          </h1>
          <p className="mt-8 text-[var(--foreground-muted)]">
            Tell us about your space, your vision, and your timeline. We&apos;ll
            get back to you within 24–48 hours.
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <ContactForm />
        </div>

        <div className="mt-24 grid gap-12 border-t border-[var(--border)] pt-24 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-[var(--foreground)] hover:text-[var(--accent)]"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Phone
            </p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-4 block text-[var(--foreground)] hover:text-[var(--accent)]"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Address
            </p>
            <p className="mt-4 whitespace-pre-line text-[var(--foreground)]">
              {site.address}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
