import { type ElementType, type ReactNode } from "react";

const widths = {
  default: "max-w-page",
  wide: "max-w-page",
  prose: "max-w-measure",
} as const;

/** The page frame: one pair of equal outer margins at every width. */
export function Container({
  children,
  as: As = "div",
  width = "default",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  width?: keyof typeof widths;
  className?: string;
}) {
  return (
    <As className={`mx-auto w-full px-gutter ${widths[width]} ${className}`}>
      {children}
    </As>
  );
}
