import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Orix Design Studio",
  description: "Residential interiors, commercial spaces, turnkey solutions, and custom furniture.",
};

const serviceImages = [
  "https://images.unsplash.com/photo-1600607687939-ee8dc71b2b9c?w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-4a5f852ba3b8?w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
          What we do
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Services
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--foreground-muted)]">
          From concept to handover, we offer full-service interior design for
          residential and commercial spaces, plus turnkey solutions and custom
          furniture.
        </p>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <span className="text-3xl font-medium text-[var(--accent)]">
                    {service.id}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-[var(--foreground-muted)] leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-6 text-sm text-[var(--foreground-muted)]">
                    Whether you&apos;re building from scratch or refreshing an
                    existing space, we work closely with you to define the
                    vision, develop the design, and deliver a finished interior
                    that reflects your goals and lifestyle.
                  </p>
                </div>
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <Image
                    src={serviceImages[i] ?? serviceImages[0]}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--background-soft)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)]">
            Tell us about your project and we&apos;ll get back to you within 24–48 hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-[var(--accent)]"
          >
            Contact us
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
