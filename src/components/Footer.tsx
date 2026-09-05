import { Container } from "./Container";
import { site } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 py-10 dark:border-slate-800">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-teal-600 dark:hover:text-teal-400">
            Email
          </a>
          <a href="/privacy" className="hover:text-teal-600 dark:hover:text-teal-400">
            Privacy
          </a>
        </div>
      </Container>
    </footer>
  );
}
