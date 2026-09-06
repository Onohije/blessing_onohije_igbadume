import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading, Badge, Card } from "@/components/ui";
import { CertificateViewer } from "@/components/CertificateViewer";
import { site, skills, experience, education, certifications } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, ${site.role} based in ${site.location}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading id="about-heading" eyebrow="About" title={`About ${site.name}`} description={site.summary} />
      </Section>

      <Section aria-labelledby="experience-heading" className="border-t border-rule">
        <SectionHeading id="experience-heading" eyebrow="Career" title="Work experience" />
        <div className="space-y-8">
          {experience.map((job) => (
            <Card key={job.role + job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink-900">{job.role}</h3>
                <span className="text-sm text-ink-500">{job.period}</span>
              </div>
              <p className="text-sm font-medium text-accent-700">
                {job.company} · {job.location}
              </p>
              <p className="mt-3 text-sm text-ink-700">{job.companyBlurb}</p>
              <ul className="mt-4 space-y-3">
                {job.highlights.map((h) => (
                  <li key={h.title}>
                    <p className="text-sm font-semibold text-ink-800">{h.title}</p>
                    <p className="text-sm text-ink-700">{h.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-accent-50 p-3 text-sm text-accent-800">
                <strong>Achievement:</strong> {job.achievement}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="skills-full-heading" className="border-t border-rule">
        <SectionHeading id="skills-full-heading" eyebrow="Toolbox" title="Skills" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.category}>
              <h3 className="font-semibold text-ink-900">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="education-heading" className="border-t border-rule">
        <SectionHeading id="education-heading" eyebrow="Background" title="Education & certifications" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-ink-900">Education</h3>
            <ul className="mt-3 space-y-3">
              {education.map((ed) => (
                <li key={ed.degree} className="text-sm text-ink-700">
                  <p className="font-medium text-ink-800">{ed.degree}</p>
                  <p>
                    {ed.school} · {ed.location}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-ink-900">Certifications</h3>
            <ul className="mt-3 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <CertificateViewer certification={c} />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
