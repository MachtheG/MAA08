"use client";

import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { candidatePlates } from "@/content/imagery";
import { useLanguage } from "@/i18n/LanguageProvider";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/** An entry endorsed on the page: a drawn tick in the margin, the entry beside it. */
function Entry({ title, detail, tone, i }: { title: string; detail: string; tone: "green" | "ochre"; i: number }) {
  return (
    <li data-reveal style={delay((i % 2) * 80)} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className={tone === "green" ? "text-flag-green" : "text-ochre-700"}>
        <path d="M5 14.5 11.5 21 23 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      </svg>
      <div>
        <h3 className="text-lead text-ink-900">{title}</h3>
        <p className="mt-1.5 max-w-measure text-text-muted">{detail}</p>
      </div>
    </li>
  );
}

export function RecordContent() {
  const { t } = useLanguage();
  const { recordVerified, countyAchievements, profile } = useContent();

  return (
    <>
      <PageHero kicker={t.ui.record.kicker} title={t.ui.record.title} intro={t.ui.record.intro} image={candidatePlates.diplomacy.src} imageAlt={candidatePlates.diplomacy.alt} imagePosition="50% 30%" narrow />

      <section className="bg-page py-section">
        <Container>
          <SectionHead title={t.ui.record.nationalKicker} aside={<StatusBadge status="verified" />} />
          <ul className="mt-block grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:ml-[25%]">
            {recordVerified.map((r, i) => (
              <Entry key={r.title} title={r.title} detail={r.detail} tone="green" i={i} />
            ))}
          </ul>
        </Container>
      </section>

      {/* Education and languages: one facing page, a tone step from the last. */}
      <section className="bg-page-alt py-section">
        <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          <div data-reveal className="lg:col-span-4 lg:col-start-4">
            <h2 className="font-display text-lead text-figure">{t.ui.record.educationKicker}</h2>
            <ul className="mt-6 space-y-6">
              {profile.education.map((e) => (
                <li key={e.degree}>
                  <p className="font-display text-lead text-ink-900">{e.degree}</p>
                  <p className="mt-1 text-text-muted">{e.institution}</p>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={delay(100)} className="lg:col-span-4">
            <h2 className="font-display text-lead text-figure">{t.ui.record.languagesKicker}</h2>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {profile.languages.map((l) => (
                <li key={l} className="font-display text-heading text-ink-900">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-page py-section">
        <Container>
          <SectionHead title={t.ui.record.countyKicker} aside={<StatusBadge status="verified" />} />
          <ul className="mt-block grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:ml-[25%]">
            {countyAchievements.map((r, i) => (
              <Entry key={r.title} title={r.title} detail={r.detail} tone="ochre" i={i} />
            ))}
          </ul>

          <div className="mt-block flex flex-col gap-3 sm:flex-row lg:ml-[25%]">
            <Button href="/vision" variant="secondary">{t.ui.record.ctaVision}</Button>
            <Button href="/story" variant="quiet">{t.ui.record.ctaStory}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
