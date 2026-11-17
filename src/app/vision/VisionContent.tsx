"use client";

import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { wajirImages } from "@/content/imagery";
import { useLanguage } from "@/i18n/LanguageProvider";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function VisionContent() {
  const { t } = useLanguage();
  const { visionPillars, visionIntro } = useContent();

  return (
    <>
      <PageHero
        kicker={t.ui.vision.kicker}
        title={t.ui.vision.title}
        intro={t.ui.vision.intro}
        image={wajirImages.malaba.src}
        imageAlt={wajirImages.malaba.alt}
        imagePosition="50% 35%"
      />

      <section className="bg-page py-section">
        <Container>
          <p data-reveal className="max-w-[44rem] font-display text-lead text-ink-800 lg:ml-[25%]">
            {visionIntro}
          </p>

          {/* The priorities as the plan's own numbered clauses, one wide row
              each; the facing column carries the specifics. */}
          <ol className="mt-block">
            {visionPillars.map((p, i) => (
              <li
                key={p.id}
                data-reveal
                style={delay((i % 2) * 70)}
                className={`grid gap-x-10 gap-y-5 border-t-[3px] border-ink-900 py-10 lg:grid-cols-12 lg:py-14`}
              >
                <span aria-hidden="true" className="font-display text-display leading-none text-figure tabular lg:col-span-2">
                  {p.number}
                </span>
                <div className="lg:col-span-5">
                  <h2 className="text-heading">{p.title}</h2>
                  <p className="mt-4 font-display text-lead text-flag-green-dark">{p.promise}</p>
                  <StatusBadge status={p.status} className="mt-5" />
                </div>
                <ul className="space-y-3 lg:col-span-5 lg:pt-3">
                  {p.points.map((pt, j) => {
                    const isDraftMarker = pt.startsWith("[DRAFT") || pt.startsWith("[RASIMU");
                    return (
                      <li key={j} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className={`mt-[0.45em] ${isDraftMarker ? "text-ochre-600" : "text-flag-green"}`}>
                          <path d="M2 7h10" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        <span className={isDraftMarker ? "italic text-ink-600" : "text-ink-800"}>{pt}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section data-surface="cover" className="bg-cover py-section text-sand-50">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-7 lg:col-start-4">
            <h2 data-reveal className="text-heading">{t.ui.vision.helpHeading}</h2>
            <p data-reveal style={delay(80)} className="mt-5 max-w-measure text-lead text-sand-100">{t.ui.vision.helpBody}</p>
            <div data-reveal style={delay(160)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-involved" variant="secondary" onCover size="lg">
                {t.ui.vision.helpCtaPriorities}
              </Button>
              <Button href="/wards" variant="quiet" onCover>
                {t.ui.vision.helpCtaCounty}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
