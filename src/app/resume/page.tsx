import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading, CTALink, Card } from "@/components/ui";
import { experience, education, certifications, skills, site } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download or review ${site.name}'s résumé.`,
  alternates: { canonical: "/resume" },
};

const RESUME_PDF_PATH = "/resume/Blessing-Onohije-Igbadume-Resume.pdf";

export default function ResumePage() {
  return (
    <Section className="pt-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading id="resume-heading" eyebrow="CV" title="Résumé" />
        <CTALink href={RESUME_PDF_PATH} external>
          Download PDF
        </CTALink>
      </div>

      <Card className="mb-10">
        <h2 className="font-semibold text-ink-900">Profile</h2>
        <p className="mt-2 text-sm text-slate-600">{site.summary}</p>
      </Card>

      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.role + job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold text-ink-900">{job.role}</h3>
              <span className="text-sm text-slate-500">{job.period}</span>
            </div>
            <p className="text-sm font-medium text-accent-700">{job.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {job.highlights.map((h) => (
                <li key={h.title}>
                  <strong>{h.title}:</strong> {h.detail}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-ink-900">Education</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {education.map((ed) => (
              <li key={ed.degree}>
                {ed.degree} — {ed.school}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="font-semibold text-ink-900">Certifications</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <h3 className="font-semibold text-ink-900">Skills</h3>
        <p className="mt-2 text-sm text-slate-600">
          {skills.map((g) => g.items.join(", ")).join(" · ")}
        </p>
      </Card>
    </Section>
  );
}
