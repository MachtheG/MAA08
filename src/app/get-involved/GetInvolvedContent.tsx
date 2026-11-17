"use client";

import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { DonateWidget } from "@/components/forms/DonateWidget";
import { useLanguage } from "@/i18n/LanguageProvider";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function GetInvolvedContent() {
  const { t } = useLanguage();
  const g = t.ui.getInvolved;

  return (
    <>
      <PageHero kicker={g.kicker} title={g.title} intro={g.intro} image="/images/plates/affey-04.jpg" imageAlt={t.ui.home.heroPhotoAlt} imagePosition="50% 30%" narrow />

      {/* Donate comes first: it is the one action the campaign most needs.
          The form sits on a sand page laid on the cover, like the hero. */}
      <section id="donate" data-surface="cover" className="scroll-mt-28 bg-cover pb-section text-sand-50">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5 lg:pt-6">
            <p data-reveal className="hidden font-display text-lead text-figure-on-cover lg:block">{g.donateKicker}</p>
            <h2 data-reveal style={delay(60)} className="text-heading lg:mt-3">{g.donateHeading}</h2>
            <p data-reveal style={delay(120)} className="mt-5 text-sand-100">{g.donateBody}</p>
            <div data-reveal style={delay(180)} className="mt-8 border-t-[3px] border-sand-50/25 pt-6 text-sand-100">
              <p className="font-bold text-sand-50">{g.transparencyTitle}</p>
              <p className="mt-2">{g.transparencyBody}</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <DonateWidget />
          </div>
        </Container>
      </section>

      <section id="volunteer" className="bg-page py-section">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <p data-reveal className="hidden font-display text-lead text-figure lg:block">{g.volunteerKicker}</p>
            <h2 data-reveal style={delay(60)} className="text-heading lg:mt-3">{g.volunteerHeading}</h2>
            <p data-reveal style={delay(120)} className="mt-5 text-ink-700">{g.volunteerBody}</p>
            <ul data-reveal style={delay(180)} className="mt-6 space-y-3 text-ink-800">
              {g.volunteerBullets.map((x) => (
                <li key={x} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="mt-[0.45em] text-flag-green">
                    <path d="M2 7h10" stroke="currentColor" strokeWidth="3" />
                  </svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <VolunteerForm />
          </div>
        </Container>
      </section>
    </>
  );
}
