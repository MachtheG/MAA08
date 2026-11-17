"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navRoutes } from "@/lib/nav";
import { Container } from "./ui/Container";

/**
 * The back cover: deep green, the candidate's name returning at full width,
 * then the index, the ways to take part, the disclaimer and the photo credit
 * (required by the CC BY-SA licence of the Wajir photographs).
 */
export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const f = t.ui.footer;

  return (
    <footer data-surface="cover" className="bg-cover text-sand-100">
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-flag-black" />
        <span className="flex-1 bg-flag-red" />
        <span className="flex-1 bg-flag-green" />
      </div>
      <Container className="pb-10 pt-16 sm:pt-24">
        <p className="font-display text-[clamp(2.5rem,1.2rem+6.4vw,6rem)] leading-[0.95] tracking-[-0.02em] text-sand-50">
          Mohamed Abdi Affey
        </p>
        <p className="mt-4 font-display text-lead text-ochre-300">{t.hero.forOffice}</p>

        <div className="mt-14 grid gap-10 border-t-[3px] border-sand-50/25 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <p className="max-w-[34ch] text-sand-100">{f.tagline}</p>

          <nav aria-label="Footer">
            <h2 className="font-display text-lead text-sand-50">{f.explore}</h2>
            <ul className="mt-4 space-y-1">
              {navRoutes.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-flex min-h-11 items-center text-sand-100 underline-offset-4 hover:text-sand-50 hover:underline">
                    {t.nav[r.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lead text-sand-50">{f.takePart}</h2>
            <ul className="mt-4 space-y-1">
              {[
                { href: "/get-involved", label: f.volunteer },
                { href: "/get-involved#donate", label: f.donate },
                { href: "/wards", label: f.findConstituency },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center text-sand-100 underline-offset-4 hover:text-sand-50 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-4 text-small text-sand-200 lg:grid-cols-2 lg:gap-10">
          <p>
            © {year} {f.copyright}
          </p>
          <p>{f.disclaimer}</p>
          <p className="lg:col-span-2">
            Photographs of Wajir County by Suleiman Saney and Ahmed Abdi Muhumed, via{" "}
            <a className="underline hover:text-sand-50" href="https://commons.wikimedia.org/wiki/Category:Wajir" rel="noopener noreferrer">
              Wikimedia Commons
            </a>
            , licensed{" "}
            <a className="underline hover:text-sand-50" href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noopener noreferrer">
              CC BY-SA 4.0
            </a>
            ; cropped and printed in two inks.
          </p>
        </div>
      </Container>
    </footer>
  );
}
