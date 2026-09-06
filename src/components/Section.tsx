import { ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";

/**
 * A page section. The design is a single committed paper palette, so sections
 * are separated by hairline rules and whitespace rather than by alternating
 * background colours. `tone` and `texture` are retained for API compatibility
 * with existing pages.
 */
export function Section({
  children,
  className,
  id,
  tone = "light",
  texture,
  "aria-labelledby": ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark";
  texture?: "grid" | "glow" | "dots" | "none";
  "aria-labelledby"?: string;
}) {
  void texture;

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={clsx(
        "relative py-24 sm:py-32",
        tone === "dark" && "bg-ink-900 text-paper",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
