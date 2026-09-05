import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/ui";
import { site } from "@/content/profile";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this site handles data submitted through the contact form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeading id="privacy-heading" eyebrow="Legal" title="Privacy Policy" />
        <div className="prose-content">
          <p>
            This is a personal portfolio site for {site.name}. It collects the minimum
            information needed to respond to enquiries.
          </p>
          <h2>What is collected</h2>
          <p>
            When you submit the contact form, the name, email address, and message you provide
            are sent to {site.name} to allow a reply. No third-party analytics or advertising
            trackers are installed on this site.
          </p>
          <h2>How it is used</h2>
          <p>
            Contact form submissions are used solely to respond to your message. They are not
            sold, shared with third parties, or used for marketing.
          </p>
          <h2>Data retention</h2>
          <p>
            Messages are retained only as long as needed to respond to your enquiry, after which
            they are deleted.
          </p>
          <h2>Your rights</h2>
          <p>
            Under UK GDPR and the Nigeria Data Protection Act, you can request access to,
            correction of, or deletion of any personal data you have submitted by emailing{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <h2>Cookies</h2>
          <p>This site does not set tracking or advertising cookies.</p>
          <p className="text-sm text-slate-500">Last updated: September 2026.</p>
        </div>
      </div>
    </Section>
  );
}
