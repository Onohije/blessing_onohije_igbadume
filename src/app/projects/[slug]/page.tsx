import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Badge, CTALink } from "@/components/ui";
import { caseStudies } from "@/content/profile";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/projects/${cs.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <Section className="pt-16">
      <div className="mx-auto max-w-2xl">
        <CTALink href="/projects" variant="secondary">
          ← All case studies
        </CTALink>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {cs.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {cs.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="prose-content mt-8">
          <h2>Context</h2>
          <p>{cs.context}</p>

          <h2>Approach</h2>
          <ul>
            {cs.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <h2>Outcome</h2>
          <p>{cs.outcome}</p>
        </div>
      </div>
    </Section>
  );
}
