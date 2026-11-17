"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Plate } from "@/components/ui/Plate";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stamp } from "@/components/ui/Stamp";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { wajirImages } from "@/content/imagery";
import { useLanguage } from "@/i18n/LanguageProvider";

export function HomeContent() {
  return (
    <>
      <HomeHero />
      <Milestones />
      <LandBand />
      <VisionTeaser />
      <StoryTeaser />
      <PullQuote />
      <CtaClose />
    </>
  );
}

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* --------------------------------------------------------------- */

/**
 * The visa page: the record stamped in order, on one line that runs from
 * the first stamp to "Today" — so the visitor always sees where now is.
 */
function Milestones() {
  const { t } = useLanguage();
  const items = t.credibility.items;
  const inks = ["red", "green", "red"] as const;
  const tilts = [-5, 3, -2];

  return (
    <section className="ruling bg-page py-section">
      <Container>
        <SectionHead title={t.credibility.heading} />

        {/* One record line through every stamp, ending at home: the last
            entry is today's, in green, and the line runs on to the date. */}
        <ol className="relative mt-block grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:ml-[25%] lg:grid-cols-4">
          <span aria-hidden="true" className="absolute bottom-0 left-[1.4rem] top-0 w-[3px] bg-ink-900/15 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[3.4rem] lg:h-[3px] lg:w-auto" />
          {items.map((item, i) => {
            const year = /^\d{4}$/.test(item.value) ? Number(item.value) : undefined;
            return (
              <li key={item.value} className="relative pl-12 lg:pl-0">
                <Stamp figure={item.value} count={year} ink={inks[i % 3]} tilt={tilts[i % 3]} delay={i * 140} className="bg-page">
                  {item.label}
                </Stamp>
              </li>
            );
          })}
          <li className="relative pl-12 lg:pl-0">
            <Stamp figure={t.timeline.presentLabel} ink="green" tilt={4} delay={items.length * 140} className="bg-page">
              {t.hero.forOffice}
            </Stamp>
          </li>
        </ol>

        <p data-reveal style={delay(620)} className="mt-10 flex items-center justify-end gap-3 text-right font-display text-lead text-flag-green-dark lg:ml-[25%]">
          <span aria-hidden="true" className="h-[3px] w-12 bg-flag-green" />
          <time dateTime="2027-08-10">{t.ui.countdown.dateLine}</time>
        </p>
      </Container>
    </section>
  );
}

/** One full-width rest: the land itself, Malaba Hill in Wajir North. */
function LandBand() {
  return (
    <section data-reveal aria-hidden="true" className="relative h-[46svh] min-h-64 overflow-hidden bg-cover sm:h-[60svh]">
      <Image
        src="/images/wajir/malaba-hill.jpg"
        alt=""
        fill
        quality={60}
        sizes="100vw"
        className="land-photo object-cover object-[50%_40%]"
      />
    </section>
  );
}

/** Priorities as an editorial ordered list, one wide row each. */
function VisionTeaser() {
  const { t } = useLanguage();
  const { visionPillars } = useContent();
  const featured = visionPillars.slice(0, 3);

  return (
    <section className="bg-page py-section">
      <Container>
        <SectionHead
          label={t.ui.home.visionKicker}
          title={t.ui.home.visionHeading}
          aside={
            <>
              <StatusBadge status="draft" />
              <span className="text-small text-text-muted">{t.ui.home.draftNotice}</span>
            </>
          }
        />

        <ol className="mt-block lg:ml-[25%]">
          {featured.map((p, i) => (
            <li key={p.id} data-reveal style={delay(i * 90)} className="border-t-[3px] border-ink-900 first:border-t-[3px]">
              <Link
                href="/vision"
                className="group grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-5 gap-y-2 py-8 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-8"
              >
                <span aria-hidden="true" className="row-span-2 font-display text-heading leading-none text-figure tabular sm:row-span-1">
                  {p.number}
                </span>
                <span>
                  <span className="block font-display text-lead text-ink-900 transition-colors group-hover:text-flag-green-dark">
                    {p.title}
                  </span>
                  <span className="mt-2 block max-w-measure text-text-muted">{p.promise}</span>
                </span>
                <span className="col-start-2 inline-flex items-center gap-2 font-bold text-flag-green-dark sm:col-start-auto">
                  {t.ui.home.readMore}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="transition-transform duration-(--duration-base) ease-(--ease-out-quart) group-hover:translate-x-1">
                    <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="border-t-[3px] border-ink-900 pt-8 lg:ml-[25%]">
          <Button href="/vision" variant="secondary">
            {t.ui.home.seeAllPriorities.replace(/\s*→$/, "")}
          </Button>
        </div>
      </Container>
    </section>
  );
}

/** The facing page: the story told beside the candidate among Wajir's young people. */
function StoryTeaser() {
  const { t } = useLanguage();
  const { storyIntro } = useContent();

  return (
    <section className="bg-page-alt py-section">
      <Container>
        <SectionHead label={t.ui.home.storyKicker} title={t.ui.home.storyHeading} />
        <div className="mt-block grid items-start gap-block lg:grid-cols-12 lg:gap-x-10">
          <Plate
            src="/images/plates/affey-04.jpg"
            alt={t.ui.home.heroPhotoAlt}
            caption={t.ui.home.heroPhotoCaption}
            ratio="16/10"
            sizes="(max-width: 1024px) 92vw, 50vw"
            className="lg:col-span-6 lg:col-start-4"
          />
          <div className="lg:col-span-3">
            <p data-reveal className="max-w-measure text-ink-700">{storyIntro}</p>
            <div data-reveal style={delay(100)} className="mt-8">
              <Button href="/story" variant="secondary">{t.ui.home.readFullStory}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** The inside of the back cover: one statement, set large on green. */
function PullQuote() {
  const { t } = useLanguage();
  return (
    <section data-surface="cover" className="bg-cover py-section text-sand-50">
      <Container>
        <figure data-reveal className="lg:ml-[25%]">
          <blockquote className="max-w-[34ch] font-display text-[clamp(1.375rem,1.05rem+1.1vw,2.125rem)] leading-[1.3]">
            <span aria-hidden="true" className="mb-2 block text-heading leading-none text-ochre-300">“</span>
            {t.ui.home.quote}
          </blockquote>
          <figcaption className="mt-6 text-sand-200">{t.ui.home.quoteAttribution}</figcaption>
        </figure>
      </Container>
    </section>
  );
}

/** The close: whose campaign this is, and the two ways to join it. */
function CtaClose() {
  const { t } = useLanguage();
  return (
    <section className="bg-page py-section">
      <Container className="grid items-end gap-block lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <h2 data-reveal className="max-w-[14ch] text-display">{t.ui.home.ctaHeading}</h2>
          <p data-reveal style={delay(100)} className="mt-6 max-w-measure text-lead text-ink-700">{t.ui.home.ctaBody}</p>
          <div data-reveal style={delay(180)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/get-involved#donate" size="lg">{t.ui.home.ctaSecondary}</Button>
            <Button href="/get-involved" variant="secondary" size="lg">{t.ui.home.ctaPrimary}</Button>
          </div>
        </div>
        <Plate
          src={wajirImages.rooftops.src}
          alt={wajirImages.rooftops.alt}
          ratio="4/5"
          sizes="(max-width: 1024px) 92vw, 34vw"
          className="lg:col-span-4 lg:col-start-9"
        />
      </Container>
    </section>
  );
}
