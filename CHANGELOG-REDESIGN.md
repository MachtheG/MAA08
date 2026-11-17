# Redesign v2 — "The Envoy's Passport"

Branch `redesign/v2`. Not pushed or deployed.

The campaign site of Mohamed Abdi Affey, candidate for Governor of Wajir
County, rebuilt as one visual world: the candidate's record told as an
envoy's passport. A portrait page opens the site. Each milestone is a dated
entry stamp on the way back to Wajir. Every photograph is printed in the
cover's two inks. The copy, routes, features and palette are unchanged; only
the design and the photographs changed.

## Why this direction

Three rounds were run. Phase 0 critiqued and audited the old site, the user
dealt directions on the impeccable decision page, re-rolled once, and chose
**The Envoy's Passport**. It tells the brief's story ("statesman meets the
land": a diplomat from the Horn of Africa's peace tables, coming home)
through its structure, rather than through a background image and some
adjectives:

- **The hero is a passport's portrait page resting on the land.** A real
  photograph of Wajir (giraffes at dusk on the edge of town) is the ground.
  On it sit the passport photo, the name in engraved type and the promise
  *Wajir First, Always.* stamped in red. The countdown is printed along the
  page foot like a validity line.
- **The record is stamped.** 1997, 2003, the Horn and *Today* are rubber
  stamps on one record line that ends at the election date. On /story every
  chapter carries its date as a stamp.
- **One ink system.** A deep-green cover holds sand pages. Flag red is for
  Donate and stamps only. Ochre is for figures. There are no gradients, glass,
  pills, card grids or eyebrow labels.

## Locked colour table (the only colours used)

All tokens live in `src/styles/tokens.css`, the single source of truth.
Components reference tokens, never raw values.

| Token | Hex | Role |
|---|---|---|
| sand-50 | #f8f4ec | passport page (main ground) |
| sand-100 | #f1ebdf | facing page, countdown strip |
| sand-200 | #e6dcc9 | wells, tabs, guilloché ruling |
| sand-300 / 400 | #d6c7a8 / #c2ad87 | quiet separators on cover |
| ink-900 | #16130f | text, rules, selected controls |
| ink-800 / 700 / 600 | #221d17 / #362f26 / #4f463a | text tones (≥7.7:1 on every sand) |
| ink-500 | #6b6153 | placeholders only (5.5:1 on sand-50) |
| ink-400 / 300 | #8c8272 / #aba08d | not used for text (fail AA) |
| flag-green-deep | #063c2b | the cover: hero, page openers, quote, footer |
| flag-green-dark | #084a34 | links, promise line, selected amount |
| flag-green | #0d6a4c | green stamps, focus ring, ticks |
| flag-red | #a52a1e | Donate and red stamps only |
| flag-black | #14110d | flag rule in the footer |
| ochre-300 / 400 | #e6c583 / #d9a94f | figures and labels on the cover |
| ochre-500 / 600 | #c68a2a / #a56d1c | draft marks; never small text on sand |
| **ochre-700** (derived) | #7a5218 | dates and figures on sand (6.3:1). The only new value: ochre-600 mixed 30% toward ink-900, because no locked ochre passes AA for small text on sand |
| line / line-strong | ink-900 at 14% / 28% | rules on sand |

Off-palette colours removed: `#3b2f24`, `#1d5c3a` and `#f7f1e6` (hard-coded in
the ward map), `border-white`, and the undefined class `text-ochre-200`.

## Fonts

- **Prata** (display and figures): an engraved, high-contrast serif, the
  passport's printed voice.
- **Atkinson Hyperlegible Next** (text): made by the Braille Institute for
  low-vision readers, and the clearest face on a cheap phone in bright sun.
  Next.js has no fallback metrics for it, so a size-matched Arial fallback was
  measured in Chrome and declared by hand (99% width, 99% ascent, 32.3%
  descent). The font swap causes no layout shift.

Both are self-hosted through `next/font`, Latin subset only. English,
Kiswahili and Somali need nothing more. Fraunces, Inter and IBM Plex were
retired.

## What changed, and why

### Fixed: content hidden until JavaScript ran
The old scroll reveal shipped every section at `opacity: 0` and showed it only
after hydration. On a slow phone, /record and /story were blank. Now:
- content is visible by default;
- entrance motion is opt-in, through a `data-motion` flag set by an inline
  script only when JavaScript runs and reduced motion is off;
- a failsafe reveals everything if hydration never arrives;
- first-viewport entrances are pure CSS and never wait for scripts.

Verified: with JavaScript disabled, no element is hidden on any page.

### Photographs
- Four real photographs of Wajir County from Wikimedia Commons (CC BY-SA 4.0,
  by Suleiman Saney and Ahmed Abdi Muhumed) replace the Unsplash stock, which
  was not of Wajir. Their watermarks were cropped out, and they are credited
  in the footer and in `public/images/wajir/CREDITS.md`.
- Every photograph, the candidate's included, is a green/ochre duotone printed
  by `scripts/duotone.py`. Replacement photos must go through the same script.
- Images use `fetchPriority="high"` on the hero only, accurate `sizes`, and
  quality 60 (landscapes) or 72 (portraits). Portrait photos are pre-cropped to
  the shape they are shown at.

### Design system (`src/components/ui`)
- `Button`: square-cornered. Primary is red, for Donate only. Secondary is an
  outline, and there is a quiet text action. The press is a 2% scale; hover is
  a tone step.
- `SectionHead`: the section name sits in a margin column on desktop. On
  phones it is not shown, because there it would sit directly above the
  heading as an eyebrow. The copy is kept, not deleted.
- `PageHero`: the green cover opener for interior pages, with a wide duotone
  plate.
- `Stamp`: a rubber-stamp entry with an ink-grain mask on the frame and figure.
  It presses once on scroll and can count its year up once.
- `Plate`: a square duotone photograph with a caption.
- `StatusBadge`: a ruled annotation mark in place of the old pill. Same wording.

### Pages
- **Home:** passport hero; the stamped record line ending at *Today* and the
  election date; a full-width land band (Malaba Hill); priorities as an
  editorial ordered list, not cards; the story beside the young-people
  photograph; the quote on the cover; the close; the footer as a back cover
  with the name at full width.
- **Story:** chapters with stamped dates and duotone plates; a year-by-year
  record line.
- **Vision:** six priorities as wide numbered rows (their own 01–06 numbering
  kept as content); the help band on the cover.
- **Record:** entries endorsed with drawn ticks; education and languages on a
  facing page.
- **Wards:** the map on a ruled page; constituency detail on the cover; square
  selector buttons. All map colours are now tokens.
- **News:** a dated register instead of cards with empty image boxes.
- **Get Involved:** Donate now comes first (your stated primary goal) as a sand
  page on the green cover; the volunteer form follows.

### Header, countdown and navigation
- The sticky header slides up by the countdown strip's height on scroll
  (transform only).
- The mobile menu is a full-screen native `<dialog>`:
  - focus is trapped inside it;
  - Escape closes it and focus returns to the Menu button;
  - page scroll is locked while it is open;
  - its links stagger in.
- The EN/SW/SO switch is a square segmented control, visible at every width.
- On phones the header has no room for Donate, so Donate sits in the
  countdown strip on every page.
- The countdown is server-safe: an inline script fills the digits before
  first paint (no "––" flash, no hydration mismatch). It ticks once a minute,
  not every second, to save battery. The header strip shows days on every
  page; the home hero shows days, hours and minutes.
- **Countdown, proposed (not just deleted):** the old standalone countdown
  card on the home page is gone. It repeated the header strip, and the full
  count now sits on the hero page. To restore it, render `<ElectionCountdown />`
  in a section of `src/app/HomeContent.tsx`.
- "Explore the record" in the hero now links to /record. It linked to /vision
  before, which was a bug.

### Motion
Calm and once only: transform and opacity, ease-out, 160–640ms, nothing loops.
- The hero name rises line by line out of masks.
- The portrait settles in scale.
- Stamps press onto the page.
- Sections rise 20px with a short stagger.
- Milestone years count up once.
- Link underlines redraw on hover (fine pointers only).
- Route changes cross-fade the page body through the native View Transitions
  API.

All of it is off under `prefers-reduced-motion`.

## Measured results

### Lighthouse, mobile

| Page | Performance before | Performance after (2 runs) | LCP before | LCP after (2 runs) |
|---|---|---|---|---|
| Home | 88 | 86–94 | 3.9s | 2.3–3.6s |
| Story | 93 | 89–96 | 3.3s | 0.8–3.6s |
| Vision | 93 | 96–98 | 3.3s | 0.8s |
| Record | 100* | 97–98 | 0.8s* | 0.8s |
| Wards | 100 | 84–96 | 0.8s | 0.8–3.5s |
| News | 100* | 95–96 | 0.8s* | 0.8s |
| Get Involved | 100 | 96–98 | 0.8s | 0.8s |

\* Before the redesign, /record and /news scored high partly because their
content never painted (it was held invisible until hydration).

- After-scores are the range over two runs on this machine, whose scores
  swing by ±10 between runs.
- Best practices and SEO are 100 on every page.
- CLS is 0 everywhere.
- Accessibility is now 100 on all seven routes; it was 96 on Record and 97 on
  Get Involved.
- No route stays below 90 on both runs. The single runs below 90 (Home 86,
  Story 89, Wards 84) are runs where Lighthouse's simulation picked the hero
  photograph as the largest paint under a CPU-load spike on this machine
  (total blocking time 220–310ms against 30ms in quieter runs). This is a
  real margin risk to watch on Vercel, not a guaranteed pass.

### Other checks
- **Layout:** no horizontal overflow on any page at 360, 390, 768, 1024 or
  1440px, in English, Kiswahili or Somali.
- **Interactions:** no console errors on any route. The menu dialog's focus
  trap, Escape and focus return were driven and passed. The language switch
  persists across pages.
- **Design detector** (`impeccable detect`): the source scan is clean. The
  in-page warnings left are the locked sand ground ("cream palette") and
  em-dash density in the locked copy.
- **Code:** type-check, lint and production build are clean with no warnings.

## Finish review

impeccable's finish review was run by a fresh agent against the direction
contract and full-page captures.

- **Round one: fix.** It listed eight material fixes:
  - stamps that read as clean outline boxes rather than ink;
  - a hero portrait too small and a name below the contract's scale;
  - a record line that did not end at home;
  - section labels acting as eyebrows on phones;
  - candidate photos not in the duotone;
  - plain chapter dates on /story;
  - the phone countdown wrapping;
  - Martian Mono dropped without being recorded.
- **Round two (verdict): five resolved, three partial, no regressions.** The
  three partials were the contract's first-viewport text, the ink grain's
  strength and the phone labels.
- **After round two:** all three were fixed (a stronger ink-grain mask, labels
  desktop-only, contract text made consistent) and checked by screenshot.
  They were not re-scored by the reviewer; two rounds is the method's budget.

## Files

- **Added:**
  - `src/styles/tokens.css`
  - `src/lib/election.ts`
  - `src/content/imagery.ts`
  - `src/components/motion/RevealObserver.tsx`
  - `src/components/ui/{Plate,Stamp,SectionHead}.tsx`
  - `src/types/react-canary.d.ts`
  - `scripts/duotone.py`
  - `public/images/wajir/*`
  - `public/images/plates/*`
  - `public/textures/{guilloche.svg,ink-grain.png}`
  - `PRODUCT.md`, `NOTES.md`, this file
- **Removed:** `src/components/ui/{Kicker,PhotoSlot,Reveal}.tsx`
- **Rewritten:** every page content component, the header, footer, countdown,
  forms, ward map, `globals.css`, `layout.tsx`, `next.config.ts`
