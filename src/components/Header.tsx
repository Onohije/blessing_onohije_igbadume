import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/profile";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
      {/* Skip link for keyboard/screen-reader users, visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to main content
      </a>
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group">
          <span className="display-tight block font-display text-base font-semibold text-ink-900">
            {site.name}
          </span>
          <span className="label mt-0.5 block text-ink-500 transition-colors group-hover:text-accent-700">
            {site.role}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900 after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-accent-600 after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none p-2 text-ink-900" aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 mt-3 w-48 border border-rule bg-paper p-2"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-paper-tint hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
