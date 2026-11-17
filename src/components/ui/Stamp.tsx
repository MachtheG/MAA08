import { type CSSProperties, type ReactNode } from "react";

/**
 * An entry stamp: the record's signature mark. A rubber-stamp frame in red or
 * green ink, set at a slight tilt, that presses onto the page once as it
 * scrolls into view (see `[data-stamp]` in globals.css).
 *
 * `figure` is the large mark (a year or a word); pass `count` to have a
 * numeric figure count up once when revealed.
 */
export function Stamp({
  figure,
  count,
  children,
  ink = "red",
  tilt = -4,
  delay = 0,
  className = "",
}: {
  figure: string;
  count?: number;
  children: ReactNode;
  ink?: "red" | "green";
  tilt?: number;
  delay?: number;
  className?: string;
}) {
  const color = ink === "red" ? "text-stamp-red border-stamp-red" : "text-stamp-green border-stamp-green";
  return (
    <div
      data-stamp
      className={`relative inline-flex flex-col px-5 pb-4 pt-3 ${color} ${className}`}
      style={{ "--stamp-tilt": `${tilt}deg`, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {/* The pressed frame and figure carry the ink grain; the small label
          stays solid so it keeps full AA contrast. */}
      <span aria-hidden="true" className="ink pointer-events-none absolute inset-0 rounded-stamp border-[3px] border-current" />
      <span className="ink block border-b-2 border-current pb-1 font-display text-heading leading-none tabular">
        <span data-count={count}>{figure}</span>
      </span>
      <span className="mt-2 block max-w-[17ch] text-[0.9375rem] font-bold leading-snug">
        {children}
      </span>
    </div>
  );
}
