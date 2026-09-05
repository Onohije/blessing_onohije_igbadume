import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading, Card } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        id="contact-heading"
        eyebrow="Say hello"
        title="Contact"
        description="Reach out about roles, freelance work, or just to talk infrastructure."
      />
      <div className="grid gap-8 sm:grid-cols-[1fr_1.2fr]">
        <Card>
          <h2 className="font-semibold text-ink-900">Direct contact</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="font-medium text-accent-700">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Phone</dt>
              <dd className="font-medium text-slate-800">{site.phone}</dd>
            </div>
            <div>
              <dt className="text-slate-500">LinkedIn</dt>
              <dd>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-accent-700"
                >
                  linkedin.com/in/onohijeigbadume
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Location</dt>
              <dd className="font-medium text-slate-800">{site.location}</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
