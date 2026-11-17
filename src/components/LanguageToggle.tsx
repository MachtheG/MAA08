"use client";

import { ACTIVE_LOCALES, LOCALE_LABELS, LOCALE_SHORT } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * EN / SW / SO as one square-cornered segmented control. The active language
 * is a solid block; each segment is a 44px touch target.
 */
export function LanguageToggle({
  className = "",
  onCover = false,
  size = "sm",
}: {
  className?: string;
  onCover?: boolean;
  size?: "sm" | "lg";
}) {
  const { locale, setLocale, t } = useLanguage();
  const frame = onCover ? "border-sand-50/70" : "border-ink-900";

  return (
    <div
      className={`inline-flex rounded-control border-[1.5px] p-0.5 ${frame} ${className}`}
      role="group"
      aria-label={t.common.langLabel}
    >
      {ACTIVE_LOCALES.map((l) => {
        const active = l === locale;
        const tone = active
          ? onCover
            ? "bg-sand-50 text-ink-900"
            : "bg-ink-900 text-sand-50"
          : onCover
            ? "text-sand-50 hover:bg-sand-50/15"
            : "text-ink-800 hover:bg-ink-900/8";
        return (
          <button
            key={l}
            type="button"
            lang={l}
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`grid place-items-center rounded-[2px] font-bold transition-colors duration-(--duration-quick) ${
              size === "lg" ? "h-12 min-w-14 px-4 text-base" : "h-10 min-w-10 px-2 text-small"
            } ${tone}`}
          >
            <span aria-hidden="true">{LOCALE_SHORT[l]}</span>
            <span className="sr-only">{LOCALE_LABELS[l]}</span>
          </button>
        );
      })}
    </div>
  );
}
