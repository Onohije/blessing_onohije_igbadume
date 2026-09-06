import Link from "next/link";
import { Badge, CTALink, Card, SectionHeading, Eyebrow } from "@/components/ui";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { site, skills, experience, caseStudies } from "@/content/profile";

const CREDENTIALS = [
  { value: "4", label: "Years experience" },
  { value: "2", label: "Production environments" },
  { value: "12", label: "Skill areas" },
  { value: "2", label: "Certifications" },
];

export default function HomePage() {
  const currentRole = experience[0];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-rule pb-20 pt-20 sm:pb-28 sm:pt-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>{site.location}</Eyebrow>

              <h1 className="display-tight font-display text-[3.25rem] font-semibold leading-[0.98] text-ink-900 sm:text-7xl">
                I build infrastructure that doesn&apos;t break.
              </h1>

              <p className="mt-9 max-w-xl text-xl leading-relaxed text-ink-700">
                {site.tagline}
              </p>

              <div className="mt-11 flex flex-wrap gap-4">
                <CTALink href="/contact">Get in touch</CTALink>
                <CTALink href="/resume" variant="secondary">
                  View résumé
                </CTALink>
              </div>
            </div>

            {/* Typographic index card — the record of the current post */}
            <div className="border-t-2 border-rule-strong pt-6 lg:mt-3">
              <p className="label text-ink-500">Currently</p>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="sr-only">Role</dt>
                  <dd className="display-tight font-display text-xl font-semibold leading-snug text-ink-900">
                    {currentRole.role}
                  </dd>
                </div>

                <div className="border-t border-rule pt-4">
                  <dt className="label text-ink-500">Organisation</dt>
                  <dd className="mt-1.5 text-ink-800">{currentRole.company}</dd>
                </div>

                <div className="border-t border-rule pt-4">
                  <dt className="label text-ink-500">Since</dt>
                  <dd className="tabular mt-1.5 text-ink-800">{currentRole.period}</dd>
                </div>

                <div className="border-t border-rule pt-4">
                  <dt className="label text-ink-500">Availability</dt>
                  <dd className="mt-1.5 text-accent-700">Open to new opportunities</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Figures ---------- */}
      <div className="border-b border-rule bg-paper-tint">
        <Container>
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {CREDENTIALS.map((item, i) => (
              <div
                key={item.label}
                className={`py-10 sm:px-8 ${i > 0 ? "sm:border-l sm:border-rule" : ""}`}
              >
                <dt className="tabular display-tight font-display text-5xl font-semibold text-ink-900">
                  {item.value}
                </dt>
                <dd className="label mt-2 text-ink-600">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* ---------- Skills ---------- */}
      <Section aria-labelledby="skills-heading" className="border-b border-rule">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Toolbox</Eyebrow>
            <h2
              id="skills-heading"
              className="display-tight font-display text-4xl font-semibold text-ink-900 sm:text-5xl"
            >
              The stack behind the uptime
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Platforms and practices used day to day across cloud, delivery, and operations.
            </p>
            <div className="mt-9">
              <CTALink href="/about" variant="secondary">
                Full background
              </CTALink>
            </div>
          </div>

          <div className="border-t-2 border-rule-strong">
            {skills.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 border-b border-rule py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
              >
                <h3 className="label text-ink-500 sm:pt-2">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- Case studies ---------- */}
      <Section aria-labelledby="work-heading" className="border-b border-rule">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Case studies"
          description="How manual, high-risk release processes became automated, observable, and repeatable."
        />

        <div className="border-t-2 border-rule-strong">
          {caseStudies.map((cs, index) => (
            <Link
              key={cs.slug}
              href={`/projects/${cs.slug}`}
              className="group grid gap-6 border-b border-rule py-12 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:gap-10"
            >
              <span
                className="tabular font-display text-2xl font-medium text-ink-500 transition-colors group-hover:text-accent-700"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="display-tight font-display text-3xl font-semibold text-ink-900 transition-colors group-hover:text-accent-800">
                  {cs.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700">{cs.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <span className="text-sm font-semibold text-accent-700 transition-transform group-hover:translate-x-1 sm:pt-3">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---------- Experience ---------- */}
      <Section aria-labelledby="experience-preview-heading" className="border-b border-rule">
        <SectionHeading
          id="experience-preview-heading"
          eyebrow="Track record"
          title="Where the work happened"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {experience.map((job) => (
            <Card key={job.role + job.company} interactive>
              <p className="label tabular text-ink-500">{job.period}</p>
              <h3 className="display-tight mt-4 font-display text-2xl font-semibold text-ink-900">
                {job.role}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-accent-700">{job.company}</p>
              <p className="mt-6 border-l-2 border-accent-600 pl-5 font-serif text-lg italic leading-relaxed text-ink-700">
                {job.achievement}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------- Closing ---------- */}
      <section className="bg-ink-900 py-24 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2 className="display-tight font-display text-4xl font-semibold text-paper sm:text-5xl">
              Looking for a DevOps engineer who ships reliable pipelines?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-paper/70">
              I&apos;m open to new opportunities and collaborations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTALink href="/contact" tone="dark">
                Start a conversation
              </CTALink>
              <CTALink href="/resume" variant="secondary" tone="dark">
                Download résumé
              </CTALink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
