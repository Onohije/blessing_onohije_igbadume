import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "light" | "dark";

export function Badge({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs font-medium tracking-tight",
        tone === "dark"
          ? "bg-white/5 text-accent-300 ring-1 ring-inset ring-white/15"
          : "bg-accent-700/8 text-accent-800 ring-1 ring-inset ring-accent-700/20"
      )}
    >
      {children}
    </span>
  );
}

/** Small mono label with a leading rule — used above section titles. */
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={clsx(
        "mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em]",
        tone === "dark" ? "text-accent-300" : "text-accent-700"
      )}
    >
      <span
        className={clsx(
          "h-px w-6",
          tone === "dark" ? "bg-accent-400/60" : "bg-accent-700/40"
        )}
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
    <div className={clsx("mb-12 max-w-2xl", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={clsx(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-slate-300" : "text-slate-600"
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
    "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none";

  const styles =
    variant === "primary"
      ? tone === "dark"
        ? "bg-accent-400 text-ink-950 hover:bg-accent-300 shadow-lg shadow-accent-500/20 hover:shadow-accent-400/30 hover:-translate-y-0.5"
        : "bg-accent-700 text-white hover:bg-accent-800 shadow-lg shadow-accent-700/20 hover:-translate-y-0.5"
      : tone === "dark"
        ? "border border-white/20 text-slate-100 hover:border-accent-400/70 hover:text-accent-300 hover:bg-white/5"
        : "border border-slate-300 text-ink-800 hover:border-accent-700 hover:text-accent-800 hover:bg-accent-700/5";

  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
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
        "rounded-xl p-6 transition-all duration-200",
        tone === "dark"
          ? "border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          : "border border-slate-200 bg-white shadow-sm",
        interactive &&
          (tone === "dark"
            ? "hover:border-accent-400/40 hover:bg-white/[0.06]"
            : "hover:-translate-y-1 hover:border-accent-700/30 hover:shadow-lg hover:shadow-slate-200/60"),
        className
      )}
    >
      {children}
    </div>
  );
}
