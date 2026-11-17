"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useContent } from "@/content/useContent";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Plate } from "@/components/ui/Plate";
import { ElectionCountdown } from "@/components/ElectionCountdown";

/**
 * Home hero: the statesman's passport laid open on the land.
 *
 * The ground is a real photograph of Wajir — giraffes at dusk on the edge of
 * town (Suleiman Saney, CC BY-SA 4.0) — printed in the cover's two inks. On it
 * rests the portrait page: passport photo, the name in engraved type, the
 * promise stamped in red, the two actions, and the countdown printed along
 * the page foot like a validity line.
 */
export function HomeHero() {
  const { t } = useLanguage();
  const { profile } = useContent();
  const [first, ...rest] = t.hero.name.split(" ");

  return (
    <section data-surface="cover" className="relative isolate overflow-hidden bg-cover">
      {/* The land. A band on phones, the whole ground from lg up. */}
      <div className="relative h-[42svh] min-h-64 lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src="/images/wajir/giraffes-dusk.jpg"
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          quality={60}
          sizes="100vw"
          className="object-cover object-[46%_40%] lg:object-[100%_45%]"
        />
      </div>

      <Container className="relative -mt-20 pb-10 sm:-mt-28 lg:mt-0 lg:grid lg:min-h-[min(calc(100svh-7.5rem),58rem)] lg:grid-cols-12 lg:items-center lg:py-10">
        <article className="ruling relative rounded-page bg-page text-ink-900 lg:col-span-10 lg:col-start-3 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] xl:col-span-8 xl:col-start-5">
          {/* Desktop: the passport photograph takes the page's full height,
              a third of its width — the man before the text about him. */}
          <div className="relative hidden overflow-hidden rounded-l-page bg-page-deep lg:block">
            <Image
              src="/images/plates/affey-01.jpg"
              alt={t.ui.home.portraitAlt}
              fill
              loading="eager"
              quality={72}
              sizes="(min-width: 1024px) 30vw, 1px"
              className="settle object-cover object-[50%_30%]"
            />
          </div>
          <div className="flex flex-col">
          <div className="flex-1 px-5 pb-8 pt-6 sm:px-9 sm:pt-9 lg:px-11 lg:pb-9 lg:pt-11">
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-start gap-x-5 gap-y-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-1">
              <Plate
                src="/images/plates/affey-01.jpg"
                alt={t.ui.home.portraitAlt}
                ratio="4/5"
                eager
                sizes="(max-width: 640px) 96px, 168px"
                className="row-span-2 self-start lg:hidden"
                imageClassName="settle"
              />
              <h1 className="text-[clamp(1.875rem,0.9rem+5vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-ink-900">
                <span className="mask-line" style={{ "--line-delay": "80ms" } as CSSProperties}>
                  <span>{first}</span>
                </span>
                <span className="mask-line" style={{ "--line-delay": "170ms" } as CSSProperties}>
                  <span>{rest.join(" ")}</span>
                </span>
                <span className="mask-line mt-3 font-display text-lead tracking-normal text-flag-green-dark" style={{ "--line-delay": "280ms" } as CSSProperties}>
                  <span>{t.hero.forOffice}</span>
                </span>
              </h1>
              <p
                className="enter col-span-2 max-w-[38rem] text-[1.0625rem] text-ink-700 sm:col-span-1 sm:text-[1.1875rem]"
                style={{ "--enter-delay": "320ms" } as CSSProperties}
              >
                {t.hero.lead}
              </p>
            </div>

            {/* The promise, stamped onto the page — the hero's signature moment. */}
            <div className="mt-7 flex flex-wrap items-end justify-between gap-x-8 gap-y-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/get-involved#donate" size="lg">
                  {t.nav.donate}
                </Button>
                <Button href="/record" variant="secondary" size="lg">
                  {t.hero.ctaPrimary}
                </Button>
              </div>
              <div
                className="enter-stamp relative ml-auto mr-1 inline-flex max-w-[15rem] flex-col px-5 pb-4 pt-3 text-stamp-red"
                style={{ "--stamp-tilt": "-6deg", "--enter-delay": "650ms" } as CSSProperties}
              >
                <span aria-hidden="true" className="ink pointer-events-none absolute inset-0 rounded-stamp border-[3px] border-current" />
                <span className="text-small font-bold">{t.ui.home.centralPromise}</span>
                <span className="ink mt-1 border-t-2 border-current pt-2 font-display text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.05]">
                  {profile.slogan.value}
                </span>
              </div>
            </div>
          </div>

          {/* Page foot: the validity line, with the campaign named as the issuer. */}
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 rounded-b-page bg-page-alt px-5 py-5 sm:px-9 lg:rounded-bl-none lg:px-11">
            <ElectionCountdown />
            <p className="text-small font-bold text-text-muted">{t.hero.kicker}</p>
          </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
