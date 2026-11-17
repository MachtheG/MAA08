"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ELECTION_ISO } from "@/lib/election";

/**
 * Kenya's next general election. The Constitution (Art. 101) sets polling for
 * the second Tuesday in August of the fifth year — 10 August 2027 (EAT).
 *
 * Rendering without a flash or a hydration mismatch:
 * 1. The server can't know "now", so each figure renders into a fixed-width
 *    tabular slot, empty, marked `data-cd`.
 * 2. `fillCountdown` (src/lib/election.ts) runs inline right after the header
 *    and after the page content, filling every slot before first paint.
 * 3. React hydrates with the server snapshot and leaves those text nodes
 *    alone (suppressHydrationWarning), then re-renders from the live clock,
 *    which ticks once a minute — no per-second churn on low-end phones.
 */

const TARGET = Date.parse(ELECTION_ISO);
const MINUTE = 60_000;

function subscribe(onChange: () => void) {
  let interval: ReturnType<typeof setInterval> | undefined;
  // Align ticks to the minute boundary so all counters change together.
  const timeout = setTimeout(() => {
    onChange();
    interval = setInterval(onChange, MINUTE);
  }, MINUTE - (Date.now() % MINUTE));
  return () => {
    clearTimeout(timeout);
    if (interval) clearInterval(interval);
  };
}
const getSnapshot = () => Math.floor(Date.now() / MINUTE);
const getServerSnapshot = () => null;

type Parts = { days: number; hours: number; minutes: number; passed: boolean };

function useRemaining(): Parts | null {
  const bucket = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (bucket === null) return null;
  const s = Math.max(0, Math.floor((TARGET - bucket * MINUTE) / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor(s / 3600) % 24,
    minutes: Math.floor(s / 60) % 60,
    passed: s === 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** One figure in a reserved slot, so nothing shifts as it changes. */
function Figure({ part, value, className = "" }: { part: "d" | "h" | "m"; value?: number; className?: string }) {
  return (
    <span
      data-cd={part}
      suppressHydrationWarning
      className={`inline-block text-right tabular ${part === "d" ? "min-w-[3ch]" : "min-w-[2ch]"} ${className}`}
    >
      {value === undefined ? "" : part === "d" ? value : pad(value)}
    </span>
  );
}

/**
 * The slim strip in the sticky header, on every page: days only, plus the
 * date. Minutes ticking in the corner of every page would only distract.
 */
export function ElectionCountdownBar() {
  const { t } = useLanguage();
  const r = useRemaining();
  const c = t.ui.countdown;

  return (
    <div data-surface="cover" className="bg-cover text-sand-50">
      <div className="mx-auto flex h-9 max-w-page items-center justify-between gap-4 px-gutter text-small">
        {r?.passed ? (
          <p className="font-bold">{c.passed}</p>
        ) : (
          <>
            <p className="hidden truncate text-sand-100 sm:block">{c.label}</p>
            <p className="flex min-w-0 items-baseline gap-2 whitespace-nowrap">
              <span className="font-display text-lead leading-none text-figure-on-cover">
                <Figure part="d" value={r?.days} />
              </span>
              <span className="font-bold">{c.days}</span>
              <span aria-hidden="true" className="hidden text-sand-300 md:inline">·</span>
              <span className="hidden truncate text-sand-100 md:inline">{c.dateLine}</span>
            </p>
            {/* On phones the header has no room for Donate, so it rides here:
                one tap away on every page. */}
            <Link href="/get-involved#donate" className="inline-flex min-h-9 items-center gap-1.5 font-bold text-ochre-300 underline decoration-2 underline-offset-4 md:hidden">
              {t.nav.donate}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * The full count at the foot of the home passport page: days, hours and
 * minutes in the passport's engraved figures, like a printed validity line.
 */
export function ElectionCountdown({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const r = useRemaining();
  const c = t.ui.countdown;

  if (r?.passed) {
    return <p className={`font-display text-heading ${className}`}>{c.passed}</p>;
  }

  const units: { part: "d" | "h" | "m"; value?: number; label: string }[] = [
    { part: "d", value: r?.days, label: c.days },
    { part: "h", value: r?.hours, label: c.hours },
    { part: "m", value: r?.minutes, label: c.minutes },
  ];

  return (
    <div className={className}>
      <p className="sr-only">
        {c.label}. {c.dateLine}.
      </p>
      <dl className="flex flex-wrap items-end gap-x-4 gap-y-3 sm:gap-x-6">
        {units.map((u) => (
          <div key={u.part} className="flex items-baseline gap-1.5 sm:gap-2.5">
            <dt className="order-2 text-small font-bold text-text-muted">{u.label}</dt>
            <dd className="order-1 font-display text-[1.75rem] leading-none text-ink-900 sm:text-[2.75rem]">
              <Figure part={u.part} value={u.value} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-small text-text-muted">{c.dateLine}</p>
    </div>
  );
}
