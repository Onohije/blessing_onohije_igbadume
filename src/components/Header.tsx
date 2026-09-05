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
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      {/* Skip link for keyboard/screen-reader users, visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-600/30 bg-ink-900 font-display text-sm font-bold text-accent-400 transition-colors group-hover:border-accent-500/60"
          >
            B
          </span>
          {/* Full name where there's room; shortened on narrow phones so the
              menu button never gets crowded. */}
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink-900 min-[400px]:inline">
            {site.name}
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink-900 min-[400px]:hidden">
            Blessing Igbadume
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-slate-600 transition-colors hover:text-ink-900 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent-600 after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative sm:hidden">
          <summary
            className="cursor-pointer list-none rounded-md p-2 text-ink-800"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 mt-3 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-accent-700/8 hover:text-accent-800"
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
