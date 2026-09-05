import { ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";

export function Section({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={clsx("py-14 sm:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}
