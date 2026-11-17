"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-ink-900 focus:px-5 focus:py-3 focus:font-bold focus:text-sand-50"
    >
      {t.ui.footer.skipToContent}
    </a>
  );
}
