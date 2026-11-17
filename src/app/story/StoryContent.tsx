"use client";

import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Plate } from "@/components/ui/Plate";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { wajirImages, plateFor } from "@/content/imagery";
import { useLanguage } from "@/i18n/LanguageProvider";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function StoryContent() {
  const { t } = useLanguage();
  const { storyChapters, storyIntro, timeline } = useContent();

  return (
    <>
      <PageHero
        kicker={t.ui.story.kicker}
        title={t.ui.story.title}
        intro={storyIntro}
        image={wajirImages.street.src}
        imageAlt={wajirImages.street.alt}
        imagePosition="50% 50%"
      />

      {/* The chapters, each a page of the passport: dates in the margin,
          the account in the main column, the photograph facing it. */}
      <section className="bg-page py-section">
        <Container>
          <ol className="space-y-[var(--spacing-section)]">
            {storyChapters.map((ch, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={ch.id} className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
                  {/* Each chapter's date is an entry stamp on its page. */}
                  <div className="lg:col-span-3">
                    <p
                      data-stamp
                      className={`relative block w-fit max-w-full px-4 pb-2 pt-1.5 font-display text-lead [text-wrap:balance] ${flip ? "text-stamp-green" : "text-stamp-red"}`}
                      style={{ "--stamp-tilt": `${flip ? 3 : -4}deg` } as CSSProperties}
                    >
                      <span aria-hidden="true" className="ink pointer-events-none absolute inset-0 rounded-stamp border-[3px] border-current" />
                      {ch.eyebrow}
                    </p>
                  </div>
                  <div className={`lg:col-span-5 ${flip ? "lg:order-3" : ""}`}>
                    <h2 data-reveal style={delay(60)} className="text-heading">
                      {ch.heading}
                    </h2>
                    {ch.status !== "verified" && <StatusBadge status={ch.status} className="mt-4" />}
                    <div data-reveal style={delay(120)} className="mt-6 max-w-measure space-y-4 text-ink-700">
                      {ch.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                  {ch.image && (
                    <Plate
                      src={plateFor(ch.image)}
                      alt={ch.heading}
                      ratio="4/5"
                      sizes="(max-width: 1024px) 92vw, 30vw"
                      className={`self-start lg:col-span-4 ${flip ? "lg:order-2" : ""}`}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* The record line, year by year, ending in the present. */}
      <section className="bg-page-alt py-section">
        <Container>
          <SectionHead label={t.ui.story.timelineKicker} title={t.ui.story.timelineHeading} />

          <ol className="relative mt-block lg:ml-[25%]">
            <span aria-hidden="true" className="absolute bottom-3 left-[0.4rem] top-3 w-[3px] bg-ink-900/15" />
            {timeline.map((item, i) => (
              <li
                key={item.id}
                data-reveal
                style={delay(Math.min(i, 6) * 50)}
                className="relative grid gap-x-8 gap-y-1 pb-9 pl-10 last:pb-0 sm:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-2 size-[1.1rem] rounded-full border-[3px] border-page-alt ${
                    item.status === "verified" ? "bg-flag-green" : item.status === "draft" ? "bg-ochre-600" : "bg-flag-red"
                  }`}
                />
                <p className="font-display text-lead text-figure tabular">{item.year}</p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <h3 className="text-lead text-ink-900">{item.title}</h3>
                    {item.status !== "verified" && <StatusBadge status={item.status} />}
                  </div>
                  <p className="mt-1.5 max-w-measure text-text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-block flex flex-col gap-3 sm:flex-row lg:ml-[25%]">
            <Button href="/vision" variant="secondary">{t.ui.story.ctaVision}</Button>
            <Button href="/record" variant="quiet">{t.ui.story.ctaRecord}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
