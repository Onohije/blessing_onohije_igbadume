import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Section } from "@/components/Section";
import { Badge, CTALink } from "@/components/ui";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });

  return (
    <Section className="pt-16">
      <div className="mx-auto max-w-2xl">
        <CTALink href="/blog" variant="secondary">
          ← All posts
        </CTALink>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900">
          {post.title}
        </h1>
        <p className="mt-2 text-xs text-ink-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="prose-content mt-8">{content}</div>
      </div>
    </Section>
  );
}
