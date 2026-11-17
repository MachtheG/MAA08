"use client";

import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusBadge } from "@/components/ui/Status";
import { Button } from "@/components/ui/Button";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";
import { wajirImages } from "@/content/imagery";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/**
 * News as a dated register — the way entries are logged in a passport —
 * not a grid of cards with empty picture boxes.
 */
export function NewsContent() {
  const { t } = useLanguage();
  const { newsItems } = useContent();

  return (
    <>
      <PageHero kicker={t.ui.news.kicker} title={t.ui.news.title} intro={t.ui.news.intro} image={wajirImages.giraffes.src} imageAlt={wajirImages.giraffes.alt} imagePosition="40% 45%" />

      <section className="bg-page py-section">
        <Container>
          <ol className="lg:ml-[25%]">
            {newsItems.map((item, i) => (
              <li
                key={item.id}
                data-reveal
                style={delay(Math.min(i, 4) * 60)}
                className="grid gap-x-8 gap-y-3 border-t-[3px] border-ink-900 py-8 sm:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 sm:block">
                  <p className="font-display text-lead text-figure tabular">{item.date}</p>
                  <p className="text-small font-bold text-ink-700 sm:mt-2">
                    {item.kind === "News" ? t.ui.news.kindNews : t.ui.news.kindEvent}
                  </p>
                </div>
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <h2 className="max-w-[30ch] text-lead text-ink-900">{item.title}</h2>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-2 max-w-measure text-text-muted">{item.excerpt}</p>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-page-alt py-section">
        <Container className="lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7 lg:col-start-4">
            <h2 data-reveal className="text-heading">{t.ui.news.updatesHeading}</h2>
            <p data-reveal style={delay(80)} className="mt-5 max-w-measure text-lead text-ink-700">{t.ui.news.updatesBody}</p>
            <div data-reveal style={delay(160)} className="mt-8">
              <Button href="/get-involved" variant="secondary" size="lg">{t.ui.news.updatesCta}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
