import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Orix Design Studio",
  description: "Featured interior design projects — residential and commercial.",
};

export default function ProjectsPage() {
  const residential = allProjects.filter((p) => p.category === "Residential");
  const commercial = allProjects.filter((p) => p.category === "Commercial");

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
          Portfolio
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Projects
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--foreground-muted)]">
          A selection of our recent work across residential and commercial interiors.
        </p>
        <div className="mt-12 flex gap-6">
          <Link
            href="/projects/residential"
            className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
          >
            Residential →
          </Link>
          <Link
            href="/projects/commercial"
            className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)]"
          >
            Commercial →
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-12 font-serif text-2xl font-medium text-[var(--foreground)]">
            All Projects
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
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
                    {project.location} · {project.category}
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
