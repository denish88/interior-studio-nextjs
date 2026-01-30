import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal | Orix Design Studio",
  description: "Design stories, inspiration, and insights from Orix Design Studio.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
          Journal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Design Stories
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--foreground-muted)]">
          Thoughts on interior design, materials, and the spaces we create.
        </p>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {journalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-6 text-sm text-[var(--foreground-muted)]">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 font-serif text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
