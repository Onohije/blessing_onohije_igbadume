import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading, Badge, Card } from "@/components/ui";
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

      <Section aria-labelledby="experience-heading" className="border-t border-slate-100 dark:border-slate-900">
        <SectionHeading id="experience-heading" eyebrow="Career" title="Work experience" />
        <div className="space-y-8">
          {experience.map((job) => (
            <Card key={job.role + job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{job.period}</span>
              </div>
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
                {job.company} · {job.location}
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{job.companyBlurb}</p>
              <ul className="mt-4 space-y-3">
                {job.highlights.map((h) => (
                  <li key={h.title}>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{h.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{h.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-teal-50 p-3 text-sm text-teal-800 dark:bg-teal-950 dark:text-teal-200">
                <strong>Achievement:</strong> {job.achievement}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="skills-full-heading" className="border-t border-slate-100 dark:border-slate-900">
        <SectionHeading id="skills-full-heading" eyebrow="Toolbox" title="Skills" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.category}>
              <h3 className="font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="education-heading" className="border-t border-slate-100 dark:border-slate-900">
        <SectionHeading id="education-heading" eyebrow="Background" title="Education & certifications" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white">Education</h3>
            <ul className="mt-3 space-y-3">
              {education.map((ed) => (
                <li key={ed.degree} className="text-sm text-slate-600 dark:text-slate-300">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{ed.degree}</p>
                  <p>
                    {ed.school} · {ed.location}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white">Certifications</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-slate-600 dark:text-slate-300">
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
