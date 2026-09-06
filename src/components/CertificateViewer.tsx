"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Certification } from "@/content/profile";

/**
 * Renders one certification. When a credential document is attached the row
 * becomes a button that opens the certificate in a modal, so a recruiter can
 * verify the claim without leaving the page.
 *
 * Built on the native <dialog> element, which provides correct modal
 * semantics for free: focus is trapped inside, Esc closes it, and the rest of
 * the page is inert for assistive technology.
 */
export function CertificateViewer({ certification }: { certification: Certification }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const label = certification.abbreviation
    ? `${certification.name} (${certification.abbreviation})`
    : certification.name;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const pages = certification.pages ?? [];
  const hasDocument = pages.length > 0 || Boolean(certification.file);

  // Nothing attached — render as plain text so the list still reads correctly.
  if (!hasDocument) {
    return (
      <div>
        <p className="text-sm text-ink-700">{label}</p>
        {certification.issuer && certification.issuer !== certification.name && (
          <p className="mt-0.5 text-xs text-ink-500">{certification.issuer}</p>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full text-left"
      >
        <span className="flex items-start gap-2">
          <span className="text-sm font-medium text-ink-700 underline decoration-accent-500/40 decoration-1 underline-offset-4 transition-colors group-hover:text-accent-800 group-hover:decoration-accent-700">
            {label}
          </span>
          <span
            aria-hidden="true"
            className="mt-0.5 shrink-0 rounded border border-accent-700/25 bg-accent-700/8 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-800"
          >
            View
          </span>
        </span>
        {certification.issuer && (
          <span className="mt-0.5 block text-xs text-ink-500">{certification.issuer}</span>
        )}
        <span className="sr-only">— open certificate</span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Clicking the backdrop (the dialog itself, outside the panel) closes it.
          if (event.target === dialogRef.current) setOpen(false);
        }}
        aria-label={`${label} certificate`}
        className="m-auto w-[min(52rem,94vw)] rounded-xl border border-rule bg-paper p-0 shadow-2xl backdrop:bg-ink-950/80"
      >
        <div className="flex items-start justify-between gap-4 border-b border-rule px-5 py-4">
          <div>
            <h2 className="font-display text-base font-semibold text-ink-900">{label}</h2>
            {certification.issuer && (
              <p className="mt-0.5 text-xs text-ink-500">{certification.issuer}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="shrink-0 rounded-lg border border-rule px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-rule hover:bg-paper-tint"
          >
            Close
          </button>
        </div>

        {/* tabIndex makes the scrollable region reachable by keyboard, so a
            keyboard-only user can scroll through multi-page certificates
            (axe rule: scrollable-region-focusable / WCAG 2.1.1). */}
        <div
          tabIndex={0}
          role="group"
          aria-label={`${label} certificate pages`}
          className="max-h-[70vh] space-y-4 overflow-y-auto bg-paper-tint p-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-600"
        >
          {pages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={
                pages.length > 1
                  ? `${label} certificate, page ${index + 1} of ${pages.length}`
                  : `${label} certificate`
              }
              width={1400}
              height={1979}
              sizes="(max-width: 900px) 94vw, 52rem"
              className="h-auto w-full rounded-lg border border-rule bg-paper shadow-sm"
              priority={index === 0}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-rule px-5 py-4">
          <div className="font-mono text-xs text-ink-500">
            {certification.credentialId && <p>ID: {certification.credentialId}</p>}
            {certification.awarded && <p className="mt-0.5">Awarded {certification.awarded}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            {certification.verifyUrl && (
              <a
                href={certification.verifyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent-800 underline underline-offset-4 hover:text-accent-700"
              >
                Verify with issuer ↗
              </a>
            )}
            {certification.file && (
              <a
                href={certification.file}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent-800 underline underline-offset-4 hover:text-accent-700"
              >
                Original PDF ↗
              </a>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
