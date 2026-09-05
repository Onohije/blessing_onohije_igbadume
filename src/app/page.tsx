import { Badge, CTALink, Card, SectionHeading } from "@/components/ui";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { site, skills, experience, caseStudies } from "@/content/profile";

export default function HomePage() {
  const currentRole = experience[0];

  return (
    <>
      {/* Hero */}
      <Section className="pt-16 sm:pt-24">
        <div className="grid items-center gap-10 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
              {site.role} · {site.location}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Hi, I&apos;m {site.name.split(" ")[0]}.
              <br />I build reliable, automated infrastructure.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTALink href="/contact">Get in touch</CTALink>
              <CTALink href="/resume" variant="secondary">
                View résumé
              </CTALink>
            </div>
          </div>
          <Card>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Currently
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">{currentRole.role}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {currentRole.company} · {currentRole.period}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>4 years experience</Badge>
              <Badge>CI/CD &amp; Cloud</Badge>
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills snapshot */}
      <Section aria-labelledby="skills-heading" className="border-t border-slate-100 dark:border-slate-900">
        <SectionHeading
          id="skills-heading"
          eyebrow="Toolbox"
          title="Core skills"
          description="A snapshot of the platforms and practices used day to day."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 6).map((group) => (
            <Card key={group.category}>
              <h3 className="font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {group.items.join(", ")}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <CTALink href="/about" variant="secondary">
            See full skill set
          </CTALink>
        </div>
      </Section>

      {/* Featured case studies */}
      <Section aria-labelledby="work-heading" className="border-t border-slate-100 dark:border-slate-900">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Recent case studies"
          description="How manual, high-risk release processes became automated and observable."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <Card key={cs.slug}>
              <h3 className="font-semibold text-slate-900 dark:text-white">{cs.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{cs.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tags.slice(0, 3).map((t) => (
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

      <Section className="border-t border-slate-100 text-center dark:border-slate-900">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Looking for a DevOps engineer who ships reliable pipelines?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            I&apos;m open to new opportunities and collaborations.
          </p>
          <div className="mt-6 flex justify-center">
            <CTALink href="/contact">Start a conversation</CTALink>
          </div>
        </Container>
      </Section>
    </>
  );
}
