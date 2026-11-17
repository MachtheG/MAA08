"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navRoutes } from "@/lib/nav";
import { LanguageToggle } from "./LanguageToggle";
import { ElectionCountdownBar } from "./ElectionCountdown";

/**
 * Sticky header. Once the page scrolls, the whole header slides up by the
 * countdown strip's height (transform only), condensing to the nav bar.
 * Below the xl breakpoint, navigation lives in a full-screen <dialog>, which
 * gives focus trapping, Escape-to-close and an inert page for free.
 */
export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  const links = navRoutes.map((r) => ({
    href: r.href,
    label: t.nav[r.key],
    active: pathname === r.href,
  }));

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-240 ease-(--ease-out-quart) motion-reduce:transition-none ${
        condensed ? "-translate-y-9" : ""
      }`}
    >
      <ElectionCountdownBar />
      <div className={`border-b-[3px] border-ink-900 bg-page transition-colors ${condensed ? "bg-page/95" : ""}`}>
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-gutter sm:h-[4.5rem]">
          <Link href="/" className="group flex min-w-0 items-center gap-3 xl:shrink-0" aria-label={`${t.hero.name} — ${t.nav.home}`}>
            <Image
              src="/images/WajirCOA.jpeg"
              alt=""
              width={44}
              height={44}
              className="size-10 shrink-0 rounded-control bg-sand-50 object-cover sm:size-11"
            />
            <span className="min-w-0 font-display leading-[1.05] text-ink-900">
              {/* Short wordmark on phones keeps room for the language switch. */}
              <span className="block truncate text-[1.1875rem] sm:hidden">Affey</span>
              <span className="hidden truncate text-[1.3125rem] sm:block">{t.hero.name}</span>
              <span className="hidden truncate text-small text-text-muted sm:block">{t.hero.forOffice}</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden min-w-0 items-center xl:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={l.active ? "page" : undefined}
                className={`relative whitespace-nowrap px-2.5 py-2 text-[0.9375rem] font-bold transition-colors ${
                  l.active ? "text-flag-green-dark" : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-[1.05rem] h-[3px] origin-left bg-flag-green transition-transform duration-(--duration-base) ease-(--ease-out-quart) ${
                    l.active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle />
            <Link
              href="/get-involved#donate"
              className="hidden min-h-11 items-center rounded-control bg-flag-red px-5 font-bold text-sand-50 transition-colors hover:bg-[color-mix(in_oklab,var(--color-flag-red)_84%,var(--color-ink-900))] md:inline-flex"
            >
              {t.nav.donate}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={openMenu}
              aria-haspopup="dialog"
              className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-control border-[1.5px] border-ink-900 px-2.5 font-bold text-ink-900 transition-colors hover:bg-ink-900 hover:text-sand-50 xl:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="sr-only text-small sm:not-sr-only">{t.nav.menu}</span>
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={t.nav.menu}
        data-surface="cover"
        onClick={(e) => {
          // A click on the backdrop area (the dialog itself) closes it.
          if (e.target === e.currentTarget) closeMenu();
        }}
        onClose={() => menuButtonRef.current?.focus()}
        className="menu-sheet m-0 h-dvh max-h-none w-full max-w-none bg-cover p-0 text-sand-50 backdrop:bg-ink-900/60"
      >
        <div className="mx-auto flex min-h-full max-w-page flex-col px-gutter pb-8">
          <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
            <p className="font-display text-[1.25rem]">{t.hero.name}</p>
            <button
              type="button"
              onClick={closeMenu}
              autoFocus
              className="inline-flex h-11 items-center gap-2 rounded-control border-[1.5px] border-sand-50/70 px-3 font-bold hover:bg-sand-50 hover:text-ink-900"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-small">{t.nav.close}</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-6 flex-1">
            <ul className="menu-list">
              {[{ href: "/", label: t.nav.home, active: pathname === "/" }, ...links].map((l, i) => (
                <li key={l.href} style={{ ["--i" as string]: i }}>
                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    aria-current={l.active ? "page" : undefined}
                    className={`flex min-h-14 items-center border-b border-sand-50/15 py-2 font-display text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] leading-tight ${
                      l.active ? "text-ochre-300" : "text-sand-50 hover:text-ochre-300"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <LanguageToggle onCover size="lg" />
            <Link
              href="/get-involved#donate"
              onClick={closeMenu}
              className="inline-flex min-h-14 items-center justify-center rounded-control bg-flag-red px-8 text-[1.0625rem] font-bold text-sand-50"
            >
              {t.nav.donate}
            </Link>
          </div>
        </div>
      </dialog>
    </header>
  );
}
