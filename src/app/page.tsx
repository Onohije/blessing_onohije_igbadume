import Link from "next/link";
import { Badge, CTALink, Card, SectionHeading, Eyebrow } from "@/components/ui";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { site, skills, experience, caseStudies } from "@/content/profile";

const CREDENTIALS = [
  { value: "4 yrs", label: "Engineering experience" },
  { value: "Core banking", label: "Production systems" },
  { value: "CI/CD", label: "Built from scratch" },
  { value: "CPN", label: "Certified professional" },
];

export default function HomePage() {
  const currentRole = experience[0];

  return (
    <>
      {/* ---------- Hero: dark, full-bleed, textured ---------- */}
      <section className="texture-grid texture-glow relative isolate overflow-hidden bg-ink-950 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/25 bg-accent-400/10 px-3.5 py-1.5 font-mono text-xs text-accent-300">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
                </span>
                Open to new opportunities
              </span>

              <h1 className="mt-7 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                I build infrastructure
                <br />
                that{" "}
                <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  doesn&apos;t break
                </span>
                .
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                {site.tagline}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <CTALink href="/contact" tone="dark">
                  Get in touch
                </CTALink>
                <CTALink href="/resume" variant="secondary" tone="dark">
                  View résumé
                </CTALink>
              </div>
            </div>

            {/* Terminal-style "currently" card */}
            <div className="rounded-xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-slate-500">current-role</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-slate-500">
                  <span className="text-accent-400">$</span> whoami
                </p>
                <p className="mt-1.5 text-slate-200">{site.name}</p>

                <p className="mt-5 text-slate-500">
                  <span className="text-accent-400">$</span> current --role
                </p>
                <p className="mt-1.5 leading-relaxed text-slate-200">{currentRole.role}</p>
                <p className="mt-1 text-slate-400">
                  {currentRole.company} · {currentRole.period}
                </p>

                <p className="mt-5 text-slate-500">
                  <span className="text-accent-400">$</span> location
                </p>
                <p className="mt-1.5 text-slate-200">{site.location}</p>

                <p className="mt-5 flex items-center text-accent-400">
                  <span>$</span>
                  <span className="ml-2 inline-block h-4 w-2 animate-pulse bg-accent-400" />
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Thin credential strip ---------- */}
      <div className="border-y border-slate-200 bg-slate-50">
        <Container>
          <dl className="grid grid-cols-2 divide-slate-200 sm:grid-cols-4 sm:divide-x">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="px-2 py-7 sm:px-6 sm:text-center">
                <dt className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                  {item.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-500">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* ---------- Skills: two-column, sticky heading, dense rows ---------- */}
      <Section aria-labelledby="skills-heading" texture="dots">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Toolbox</Eyebrow>
            <h2
              id="skills-heading"
              className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
            >
              The stack behind the uptime
            </h2>
            <p className="mt-4 text-slate-600">
              Platforms and practices used day to day across cloud, delivery, and operations.
            </p>
            <div className="mt-8">
              <CTALink href="/about" variant="secondary">
                Full background
              </CTALink>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {skills.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500 sm:pt-1.5">
                  {group.category}
                </h3>
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

      {/* ---------- Case studies: dark, numbered rows ---------- */}
      <Section aria-labelledby="work-heading" tone="dark" texture="grid">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Case studies"
          description="How manual, high-risk release processes became automated, observable, and repeatable."
          tone="dark"
        />

        <div className="divide-y divide-white/10 border-t border-white/10">
          {caseStudies.map((cs, index) => (
            <Link
              key={cs.slug}
              href={`/projects/${cs.slug}`}
              className="group grid gap-6 py-10 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8"
            >
              <span
                className="font-mono text-3xl font-medium text-white/15 transition-colors group-hover:text-accent-400/60"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-display text-2xl font-semibold text-white transition-colors group-hover:text-accent-300">
                  {cs.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">{cs.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <Badge key={t} tone="dark">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <span className="font-mono text-sm text-accent-400 transition-transform group-hover:translate-x-1 sm:pt-2">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---------- Experience preview ---------- */}
      <Section aria-labelledby="experience-preview-heading">
        <SectionHeading
          id="experience-preview-heading"
          eyebrow="Track record"
          title="Where the work happened"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {experience.map((job) => (
            <Card key={job.role + job.company} interactive>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                {job.period}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{job.role}</h3>
              <p className="mt-1 text-sm font-medium text-accent-800">{job.company}</p>
              <p className="mt-4 border-l-2 border-accent-500 pl-4 text-sm leading-relaxed text-slate-600">
                {job.achievement}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------- Closing CTA band ---------- */}
      <section className="texture-grid relative isolate overflow-hidden bg-gradient-to-br from-accent-800 via-accent-700 to-ink-900 py-20 sm:py-24">
        <Container className="relative z-10 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for a DevOps engineer who ships reliable pipelines?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-accent-200">
            I&apos;m open to new opportunities and collaborations.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CTALink href="/contact" tone="dark">
              Start a conversation
            </CTALink>
            <CTALink href="/resume" variant="secondary" tone="dark">
              Download résumé
            </CTALink>
          </div>
        </Container>
      </section>
    </>
  );
}
