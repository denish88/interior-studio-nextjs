import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutContent, processSteps, site } from "@/lib/data";
import { CountUp } from "@/components/CountUp";

export const metadata: Metadata = {
  title: "About | Orix Design Studio",
  description: "We believe in spaces that tell a story. Learn about our philosophy and team.",
};

const aboutImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";
const studioImage =
  "https://images.unsplash.com/photo-1600585154340-4a5f852ba3b8?w=1200&q=80";

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
          About Orix
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          {aboutContent.headline}
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="max-w-xl text-lg leading-relaxed text-[var(--foreground-muted)]">
            {aboutContent.paragraph}
          </p>
          <div className="flex flex-wrap gap-10 sm:gap-12">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl font-medium text-[var(--accent)] sm:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="relative aspect-[4/5] overflow-hidden grayscale">
              <Image
                src={aboutImage}
                alt="Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
                Studio Philosophy
              </h2>
              <p className="mt-6 leading-relaxed text-[var(--foreground-muted)]">
                We approach every project with the same commitment: to create
                interiors that feel both timeless and distinctly yours. Our
                process is collaborative, transparent, and focused on quality—from
                the first concept sketch to the final handover.
              </p>
              <p className="mt-6 leading-relaxed text-[var(--foreground-muted)]">
                Whether it&apos;s a penthouse, a headquarters, or a boutique
                hotel, we bring the same level of craft and attention to detail.
                No project is too small; no vision is too ambitious.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src={studioImage}
              alt="Our studio"
              fill
              className="object-cover grayscale"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <p className="font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  {site.name.toUpperCase()}
                </p>
                <p className="mt-4 text-[var(--foreground-muted)]">
                  {site.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--background-soft)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            How we work
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            Our Process
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l-2 border-[var(--accent)] pl-8">
                <span className="font-serif text-2xl font-medium text-[var(--accent)]">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
