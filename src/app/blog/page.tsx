import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeading, Badge, Card } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on DevOps, CI/CD, and infrastructure engineering.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Section className="pt-16">
      <SectionHeading id="blog-heading" eyebrow="Writing" title="Blog" description="Field notes from production." />
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-lg font-semibold text-ink-900 group-hover:text-accent-700">
                {post.title}
              </h2>
            </Link>
            <p className="mt-1 text-xs text-ink-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <p className="mt-3 text-sm text-ink-700">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-ink-500">
            No posts yet — check back soon.
          </p>
        )}
      </div>
    </Section>
  );
}
