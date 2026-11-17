import { type ReactNode } from "react";

/**
 * Section opening on a passport page. The section's label sits in the page's
 * margin column at reading size (never a small tracked eyebrow), the heading
 * takes the main column. On phones the margin column stacks above.
 */
export function SectionHead({
  label,
  title,
  intro,
  aside,
  onCover = false,
  id,
  className = "",
}: {
  label?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  /** Something that belongs beside the heading: a status mark, an action. */
  aside?: ReactNode;
  onCover?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <header
      data-reveal
      className={`grid gap-x-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-y-3 ${className}`}
    >
      {/* The label lives in the desktop margin column only; on phones it would
          sit directly above the heading as an eyebrow, so it is not shown. */}
      {label ? (
        <p className={`hidden font-display text-lead lg:block lg:pt-3 ${onCover ? "text-figure-on-cover" : "text-figure"}`}>
          {label}
        </p>
      ) : (
        <span aria-hidden="true" className="hidden lg:block" />
      )}
      <div>
        <h2
          id={id}
          className={`max-w-[34ch] text-heading ${onCover ? "text-sand-50" : "text-ink-900"}`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-5 max-w-measure text-lead ${onCover ? "text-sand-100" : "text-text-muted"}`}
          >
            {intro}
          </p>
        )}
        {aside && <div className="mt-5 flex flex-wrap items-center gap-3">{aside}</div>}
      </div>
    </header>
  );
}
