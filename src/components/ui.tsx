import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

// `tone` is kept for API compatibility with existing pages. The design is now
// a single committed light palette, so both tones resolve to paper-appropriate
// styling; "dark" simply means "sitting on an ink block".
type Tone = "light" | "dark";

export function Badge({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center border px-2.5 py-1 text-xs font-medium",
        tone === "dark"
          ? "border-paper/25 text-paper"
          : "border-rule text-ink-700"
      )}
    >
      {children}
    </span>
  );
}

/** Letterspaced label with a leading rule — sits above section titles. */
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={clsx(
        "label mb-5 inline-flex items-center gap-3",
        tone === "dark" ? "text-accent-300" : "text-accent-700"
      )}
    >
      <span
        className={clsx("h-px w-8", tone === "dark" ? "bg-accent-300/60" : "bg-accent-600")}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={clsx("mb-14 max-w-2xl", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={clsx(
          "display-tight font-display text-4xl font-semibold sm:text-5xl",
          tone === "dark" ? "text-paper" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-paper/75" : "text-ink-700"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CTALink({
  href,
  children,
  variant = "primary",
  external,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  tone?: Tone;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none";

  const styles =
    variant === "primary"
      ? tone === "dark"
        ? "bg-paper text-ink-900 hover:bg-accent-200"
        : "bg-ink-900 text-paper hover:bg-accent-800"
      : tone === "dark"
        ? "border border-paper/30 text-paper hover:border-paper hover:bg-paper/10"
        : "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper";

  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-150 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={clsx(base, styles)}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(base, styles)}>
      {content}
    </Link>
  );
}

export function Card({
  children,
  className,
  tone = "light",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  interactive?: boolean;
}) {
  return (
    <div
      className={clsx(
        "border p-7 transition-colors duration-150",
        tone === "dark" ? "border-paper/20 bg-transparent" : "border-rule bg-paper",
        interactive && "hover:border-ink-900",
        className
      )}
    >
      {children}
    </div>
  );
}
