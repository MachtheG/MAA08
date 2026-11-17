"use client";

import { type ReactNode } from "react";
import type { Status } from "@/content/candidate";
import { useLanguage } from "@/i18n/LanguageProvider";

/* Ink per status. Every pairing is ≥5:1 on every sand tone. */
const ink = {
  verified: "text-flag-green-dark",
  draft: "text-ochre-700",
  tbc: "text-flag-red",
} as const;

/* On the deep-green cover the same marks print in sand and ochre. */
const inkOnCover = {
  verified: "text-sand-50",
  draft: "text-ochre-300",
  tbc: "border-flag-red bg-flag-red text-sand-50",
} as const;

/**
 * A small ruled ink mark, like an official's annotation in the margin of a
 * passport page. Replaces the old pill chip; the wording is unchanged.
 */
export function StatusBadge({
  status,
  onCover = false,
  className = "",
}: {
  status: Status;
  onCover?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <span
      className={`inline-flex items-center rounded-[2px] border-[1.5px] border-current px-2 py-0.5 text-[0.8125rem] font-bold leading-tight ${onCover ? inkOnCover[status] : ink[status]} ${className}`}
    >
      {t.ui.status[status]}
    </span>
  );
}

/** Frames unverified or draft content honestly, as an inset on the page. */
export function DraftNote({
  status = "draft",
  title,
  children,
}: {
  status?: Status;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div role="note" className="flex flex-col items-start gap-2 bg-page-deep px-4 py-4 text-small text-ink-700 sm:flex-row sm:gap-3">
      <StatusBadge status={status} className="shrink-0" />
      <div>
        {title && <p className="font-bold text-ink-800">{title}</p>}
        <div className={title ? "mt-0.5" : ""}>{children}</div>
      </div>
    </div>
  );
}
