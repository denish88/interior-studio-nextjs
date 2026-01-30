import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Residential Projects | Orix Design Studio",
  description: "Residential interior design projects by Orix Design Studio.",
};

const projects = allProjects.filter((p) => p.category === "Residential");

export default function ResidentialPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Link
          href="/projects"
          className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)]"
        >
          ← All projects
        </Link>
        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
          Residential
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Residential Interiors
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--foreground-muted)]">
          Homes that reflect who you are—from penthouses to villas, we create
          interiors that feel both timeless and personal.
        </p>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                    {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
