import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { journalPosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Journal | Orix Design Studio" };
  return {
    title: `${post.title} | Orix Design Studio`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Link
          href="/journal"
          className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)]"
        >
          ← Journal
        </Link>
        <p className="mt-6 text-sm text-[var(--foreground-muted)]">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-[var(--foreground)] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg text-[var(--foreground-muted)]">
          {post.excerpt}
        </p>

        <div className="relative mt-12 aspect-[21/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        <div className="prose prose-invert mt-12 max-w-none">
          <p className="text-[var(--foreground-muted)] leading-relaxed">
            Great interior design starts with understanding how people live and
            work in a space. At Orix, we spend time with our clients—learning
            their habits, preferences, and aspirations—before we put pencil to
            paper. This approach ensures that every project feels both
            intentional and personal.
          </p>
          <p className="mt-6 text-[var(--foreground-muted)] leading-relaxed">
            In this post, we&apos;re sharing some of the principles that guide
            our work: the importance of natural light, the role of materials in
            creating warmth or coolness, and the power of restraint. When you
            strip away the unnecessary, what remains is a space that can evolve
            with its occupants over time.
          </p>
          <p className="mt-6 text-[var(--foreground-muted)] leading-relaxed">
            We hope these insights inspire your own projects—whether you&apos;re
            refreshing a single room or reimagining an entire home. If
            you&apos;d like to discuss a project with us, get in touch through
            our contact page.
          </p>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8">
          <Link
            href="/journal"
            className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
          >
            ← Back to Journal
          </Link>
        </div>
      </article>
    </div>
  );
}
