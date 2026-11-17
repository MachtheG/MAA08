import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";

/**
 * Interior-page opener: the passport opened at a new page. Deep-green cover
 * ground, the section name in the margin column, the page title in engraved
 * type across the main column, and a wide duotone plate beneath it.
 */
export function PageHero({
  kicker,
  title,
  intro,
  image,
  imageAlt = "",
  imagePosition = "50% 50%",
  narrow = false,
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  /** Small source photographs (the candidate's) stay near native size. */
  narrow?: boolean;
  children?: ReactNode;
}) {
  return (
    <section data-surface="cover" className="bg-cover text-sand-50">
      <Container className="grid gap-x-10 gap-y-8 pb-14 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:pb-24 lg:pt-20">
        <p className="hidden font-display text-lead text-figure-on-cover lg:block lg:pt-4">{kicker}</p>
        <div>
          <h1 className="max-w-[20ch] text-[clamp(2.375rem,1.5rem+3.4vw,4.75rem)] leading-[1] tracking-[-0.02em]">
            <span className="mask-line">
              <span>{title}</span>
            </span>
          </h1>
          {intro && (
            <p className="enter mt-6 max-w-measure text-lead text-sand-100" style={{ "--enter-delay": "120ms" } as CSSProperties}>
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div
            style={{ "--enter-delay": "200ms" } as CSSProperties}
            className={`enter relative mt-6 overflow-hidden lg:col-start-2 lg:mt-10 ${
              narrow ? "aspect-[4/3] w-full max-w-[34rem]" : "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[21/9]"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="eager"
              fetchPriority="high"
              quality={narrow ? 72 : 60}
              sizes={narrow ? "(max-width: 640px) 92vw, 544px" : "(max-width: 1024px) 92vw, 70vw"}
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
        )}
      </Container>
    </section>
  );
}
