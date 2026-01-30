import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/lib/data";
import { ProjectGallerySlider } from "@/components/ProjectGallerySlider";
import { ProjectGalleryHoverGrid } from "@/components/ProjectGalleryHoverGrid";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project | Orix Design Studio" };
  return {
    title: `${project.title} | Orix Design Studio`,
    description: `${project.category} project in ${project.location}.`,
  };
}

// Dummy gallery images per project (replace with real project images)
function getGalleryImages(projectImage: string) {
  return [
    projectImage,
    "https://images.unsplash.com/photo-1600585154340-4a5f852ba3b8?w=1200&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ee8dc71b2b9c?w=1200&q=80",
  ];
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const gallery = getGalleryImages(project.image);

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <Link
          href="/projects"
          className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)]"
        >
          ← All projects
        </Link>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              {project.category}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-[var(--foreground-muted)]">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <ProjectGallerySlider images={gallery} title={project.title} />
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-medium text-[var(--foreground)]">
                Overview
              </h2>
              <p className="mt-6 text-[var(--foreground-muted)] leading-relaxed">
                This {project.category.toLowerCase()} project in {project.location} was
                designed to reflect the client&apos;s vision of timeless,
                understated luxury. We focused on material quality, natural
                light, and a neutral palette that allows the space to breathe.
              </p>
              <div className="mt-10 space-y-4">
                <p className="text-sm">
                  <span className="text-[var(--foreground-muted)]">Client:</span>{" "}
                  <span className="text-[var(--foreground)]">Private</span>
                </p>
                <p className="text-sm">
                  <span className="text-[var(--foreground-muted)]">Scope:</span>{" "}
                  <span className="text-[var(--foreground)]">Full interior design</span>
                </p>
                <p className="text-sm">
                  <span className="text-[var(--foreground-muted)]">Year:</span>{" "}
                  <span className="text-[var(--foreground)]">{project.year}</span>
                </p>
                {"address" in project && project.address && (
                  <div className="flex items-start gap-3 pt-1">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[var(--accent)]" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
                        Location
                      </p>
                      <p className="mt-1 text-sm text-[var(--foreground)] leading-snug">
                        {project.address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Our approach combined custom furniture with carefully selected
                finishes and fixtures. Every detail—from the millwork to the
                lighting—was chosen to create a cohesive, elevated experience.
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                The result is a space that feels both intimate and expansive,
                with a clear narrative that runs from the entrance through to the
                private areas. We&apos;re proud of how this project came together
                and of the lasting relationship we built with the client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
            Hover to preview
          </p>
          <ProjectGalleryHoverGrid images={gallery} title={project.title} />
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--background-soft)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)]"
            >
              ← Back to all projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              Start your project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
