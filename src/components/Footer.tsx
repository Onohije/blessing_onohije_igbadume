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
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-ink-950 py-14 texture-grid">
      <Container className="relative z-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-500/40 bg-ink-900 font-display text-sm font-bold text-accent-400"
              >
                B
              </span>
              <span className="font-display text-sm font-semibold text-white">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-accent-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-slate-300 transition-colors hover:text-accent-300"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-1.5 block text-slate-300 transition-colors hover:text-accent-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
