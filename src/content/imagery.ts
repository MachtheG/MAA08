/**
 * The real photographs of Wajir used on the site (see
 * public/images/wajir/CREDITS.md). Alt text is English only for now;
 * Kiswahili and Somali versions are listed in NOTES.md for translation.
 */
export const wajirImages = {
  giraffes: { src: "/images/wajir/giraffes-dusk.jpg", alt: "Giraffes at dusk on the edge of Wajir town." },
  malaba: { src: "/images/wajir/malaba-hill.jpg", alt: "Malaba Hill at Bute, Wajir North." },
  rooftops: { src: "/images/wajir/town-rooftops.jpg", alt: "Rooftops of Wajir town." },
  street: { src: "/images/wajir/town-street.jpg", alt: "A tarmac street in Wajir town." },
} as const;

/** Candidate plates used outside the content files, with their alt text. */
export const candidatePlates = {
  diplomacy: { src: "/images/plates/affey-06.jpg", alt: "Mohamed Abdi Affey shaking hands at an official meeting." },
} as const;

/**
 * Candidate photographs are referenced in content as their originals
 * (/images/MohamedA02.jpeg); the site shows their duotone plates, printed by
 * scripts/duotone.py into /images/plates/affey-02.jpg.
 */
export function plateFor(src: string): string {
  const m = /MohamedA(\d+)\.jpe?g$/i.exec(src);
  return m ? `/images/plates/affey-${m[1]}.jpg` : src;
}
