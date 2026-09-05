import { ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";

/**
 * A full-bleed page section. `tone="dark"` paints an ink background and
 * layers the engineering-grid texture behind the content — used to break
 * up the page rhythm so it doesn't read as one long list of white cards.
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
  const showGrid = texture === "grid" || texture === "glow";
  const showGlow = texture === "glow";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={clsx(
        "relative isolate overflow-hidden py-20 sm:py-28",
        tone === "dark" && "bg-ink-900 text-slate-200",
        texture === "dots" && "texture-dots",
        showGrid && "texture-grid",
        showGlow && "texture-glow",
        className
      )}
    >
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
