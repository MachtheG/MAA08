import Link from "next/link";
import { type ReactNode } from "react";

/**
 * Buttons are square-cornered blocks, decided once for the whole site.
 * - primary: flag red. Reserved for Donate and the one action that funds the campaign.
 * - secondary: ink outline on a page, sand outline on the cover.
 * - quiet: an underlined text action.
 * Press feedback is a 2% scale (transform only); hover is a tone step.
 */
type Variant = "primary" | "secondary" | "quiet";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-control font-sans font-bold leading-tight transition-[background-color,color,border-color,transform] duration-(--duration-quick) ease-(--ease-out-quart) active:scale-[0.98] motion-reduce:active:scale-100";

const variants = (onCover: boolean): Record<Variant, string> => ({
  primary:
    "bg-flag-red text-sand-50 hover:bg-[color-mix(in_oklab,var(--color-flag-red)_84%,var(--color-ink-900))]",
  secondary: onCover
    ? "border-2 border-sand-50/80 text-sand-50 hover:border-sand-50 hover:bg-sand-50/10"
    : "border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-sand-50",
  quiet: onCover
    ? "min-h-11 px-0 text-sand-50 underline decoration-ochre-300 decoration-2 underline-offset-[0.3em] hover:decoration-sand-50"
    : "min-h-11 px-0 text-flag-green-dark underline decoration-2 underline-offset-[0.3em] hover:text-ink-900",
});

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-[1.0625rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  onCover = false,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Set on the deep-green cover so outlines and focus switch to sand. */
  onCover?: boolean;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants(onCover)[variant]} ${variant === "quiet" ? "" : sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {variant !== "quiet" && <Arrow />}
    </Link>
  );
}

/** Drawn arrow that steps forward on hover (transform only). */
function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-(--duration-base) ease-(--ease-out-quart) group-hover/btn:translate-x-0.5 motion-reduce:transition-none"
    >
      <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}
