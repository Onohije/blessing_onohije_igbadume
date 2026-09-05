import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading, Badge, Card, CTALink } from "@/components/ui";
import { caseStudies } from "@/content/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies from real DevOps and platform engineering work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        id="projects-heading"
        eyebrow="Work"
        title="Case studies"
        description="These write-ups walk through real problems solved on the job — the context, the approach, and the outcome. More detailed project write-ups (with diagrams and repos) will be added over time."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <Card key={cs.slug}>
            <h3 className="text-lg font-semibold text-ink-900">{cs.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{cs.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-5">
              <CTALink href={`/projects/${cs.slug}`} variant="secondary">
                Read case study
              </CTALink>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
