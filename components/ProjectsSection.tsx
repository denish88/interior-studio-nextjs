"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              Portfolio
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </motion.div>
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-12">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                      {project.location} · {project.category}
                    </p>
                  </div>
                  <span className="text-sm text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                    View Case Study →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
