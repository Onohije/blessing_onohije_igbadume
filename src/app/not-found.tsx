import { Section } from "@/components/Section";
import { CTALink } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="pt-24 text-center">
      <h1 className="text-3xl font-bold text-ink-900">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-6 flex justify-center">
        <CTALink href="/">Back to home</CTALink>
      </div>
    </Section>
  );
}
