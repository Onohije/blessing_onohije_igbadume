import { Container } from "./Container";
import { site } from "@/content/profile";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Résumé" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-rule-strong bg-paper pb-12 pt-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="display-tight font-display text-2xl font-semibold text-ink-900">
              {site.name}
            </p>
            <p className="label mt-1 text-ink-500">{site.role}</p>
            <p className="mt-5 text-sm leading-relaxed text-ink-700">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="label text-ink-500">Pages</p>
            <ul className="mt-4 space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-700 transition-colors hover:text-accent-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-ink-500">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink-700 transition-colors hover:text-accent-700"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ink-700 transition-colors hover:text-accent-700"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-sm text-ink-700">{site.location}</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-rule pt-6 text-xs text-ink-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
