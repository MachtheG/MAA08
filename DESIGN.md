---
name: Mohamed Abdi Affey for Governor of Wajir County
description: The candidate's record told as an envoy's passport, laid open on the land of Wajir.
colors:
  sand-50: "#f8f4ec"
  sand-100: "#f1ebdf"
  sand-200: "#e6dcc9"
  sand-300: "#d6c7a8"
  sand-400: "#c2ad87"
  ink-900: "#16130f"
  ink-800: "#221d17"
  ink-700: "#362f26"
  ink-600: "#4f463a"
  ink-500: "#6b6153"
  ink-400: "#8c8272"
  ink-300: "#aba08d"
  flag-green: "#0d6a4c"
  flag-green-dark: "#084a34"
  flag-green-deep: "#063c2b"
  flag-red: "#a52a1e"
  flag-black: "#14110d"
  ochre-300: "#e6c583"
  ochre-400: "#d9a94f"
  ochre-500: "#c68a2a"
  ochre-600: "#a56d1c"
  ochre-700: "#7a5218"
  line: "rgb(22 19 15 / 0.14)"
  line-strong: "rgb(22 19 15 / 0.28)"
typography:
  display:
    fontFamily: "Prata, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Prata, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.875rem, 1.4rem + 2.1vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Prata, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.45vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.42
  lead:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Fallback', system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.45vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.42
  body:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Fallback', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Fallback', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
  figure:
    fontFamily: "Prata, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.875rem, 1.4rem + 2.1vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  control: "0.25rem"
  mark: "2px"
  stamp: "0.625rem"
  page: "clamp(0.625rem, 0.4rem + 1vw, 1rem)"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 3rem)"
  block: "clamp(2rem, 1.5rem + 2.2vw, 3.5rem)"
  section: "clamp(4.5rem, 2.9rem + 7vw, 10rem)"
  page: "78rem"
  measure: "40rem"
components:
  button-primary:
    backgroundColor: "{colors.flag-red}"
    textColor: "{colors.sand-50}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "color-mix(in oklab, #a52a1e 84%, #16130f)"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.control}"
    padding: "16px 28px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.sand-50}"
  button-secondary-on-cover:
    backgroundColor: "transparent"
    textColor: "{colors.sand-50}"
    rounded: "{rounded.control}"
  button-quiet:
    textColor: "{colors.flag-green-dark}"
    height: "44px"
  input:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "48px"
  amount-choice-selected:
    backgroundColor: "{colors.flag-green-dark}"
    textColor: "{colors.sand-50}"
    rounded: "{rounded.control}"
    height: "48px"
  language-toggle-active:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.sand-50}"
    rounded: "{rounded.mark}"
    height: "40px"
  stamp-red:
    textColor: "{colors.flag-red}"
    rounded: "{rounded.stamp}"
    padding: "12px 20px 16px"
  stamp-green:
    textColor: "{colors.flag-green}"
    rounded: "{rounded.stamp}"
    padding: "12px 20px 16px"
  status-mark:
    typography: "{typography.label}"
    rounded: "{rounded.mark}"
    padding: "2px 8px"
  passport-page:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.page}"
  cover:
    backgroundColor: "{colors.flag-green-deep}"
    textColor: "{colors.sand-50}"
---

# Design System: Mohamed Abdi Affey for Governor of Wajir County

## Overview

**Creative North Star: "The Envoy's Passport"**

The site is a passport laid open on the land of Wajir. A deep flag-green cover board holds sand-coloured pages; the pages carry a fine engraved guilloché ruling, ink type, and the candidate's record pressed onto them as rubber entry stamps in red and green ink. Every photograph, of the county and of the man, is printed in the cover's two inks, green and ochre, so the land and the candidate belong to the same document.

The world is flat and printed, not lit. Depth comes from the cover and the page, never from shadows: sand pages sit on green, and green bands interrupt sand. The type is a pairing of two voices: Prata, an engraved high-contrast serif, prints the name, headings, dates and figures; Atkinson Hyperlegible Next, built for low-vision readers, carries everything people actually read, at 17px so it holds up outdoors on a small phone. Density is generous and editorial: wide section spacing, a margin column for section labels on desktop, a 40rem reading measure.

Motion is calm and happens once. Stamps press onto the page as they scroll into view, headline lines rise out of masks, land photographs settle. Nothing loops, everything uses transform and opacity, and all of it is gone under reduced motion. The first viewport never waits for JavaScript.

**Key Characteristics:**
- Deep-green cover board, sand passport pages with guilloché ruling, ink text.
- Rubber entry stamps (red or green ink, rotated a few degrees, ink-grain mask) as the signature mark.
- Two typefaces only: Prata for display and figures, Atkinson Hyperlegible Next for text.
- Every photograph a green/ochre duotone plate, set square into the page.
- Flat surfaces: no shadows anywhere; depth is cover versus page.
- Square-cornered controls, small book radius on pages, soft radius on stamps.
- Tabular lining figures for every date, count and amount.

## Colors

A locked campaign palette of sand paper, warm ink, Kenyan flag green and red, and ochre; no hue may be added, only tints, shades and alpha variants of these.

### Primary
- **Cover Board Green** (flag-green-deep): the passport cover. The ground of the home hero, every interior page hero, the footer, the mobile menu sheet, the countdown strip and full-width cover bands. Text on it is sand.
- **Flag Green** (flag-green): green stamp ink, focus rings on sand, the active nav underline, the text caret.
- **Deep Flag Green** (flag-green-dark): green text on sand (office line, quiet links, verified status), and the selected donation amount.

### Secondary
- **Stamp Red** (flag-red): Donate, and stamps. The primary button, the header Donate, the M-Pesa send action, and red entry stamps. Its hover is the red mixed 16% toward ink-900, a shade, not a new colour.

### Tertiary
- **Ochre Figures** (ochre-700): the one derived shade (ochre-600 mixed 30% toward ink-900), added because no locked ochre passes AA for small text on sand. Dates, figures and margin-column section labels on sand pages; the draft status mark.
- **Pale Ochre** (ochre-300): figures and labels on the cover (countdown days, office line in the footer, active menu item), the focus ring on the cover, text selection, and the highlight ink of every duotone.
- **Ochre 400 / 500 / 600**: locked supporting steps; ochre-600 marks draft dots on the story timeline.

### Neutral
- **Passport Page** (sand-50): the page. Body background, page cards, inputs.
- **Facing Page** (sand-100): alternate page sections, the hero page foot, the donation method tab well; muted text on the cover.
- **Page Inset** (sand-200): wells and insets (draft notes, plate backgrounds); small print on the cover.
- **Sand 300 / 400**: separators on the cover; reserve steps.
- **Printing Ink** (ink-900): all primary text, secondary-button outlines, input borders, the header rule, the active language segment.
- **Ink 800 / 700**: strong text inside notes; body copy in long-form chapters.
- **Muted Ink** (ink-600): the muted text role, at least 7.7:1 on every sand tone.
- **Ink 500**: placeholders and the disabled crypto field border.
- **Rule / Strong Rule** (line, line-strong): ink at 14% and 28% alpha for hairlines that must read on any sand tone.
- **Flag Black** (flag-black): only in the black-red-green flag strip at the top of the footer.

### Named Rules
**The Colour Lock Rule.** Only the tokens in `src/styles/tokens.css`. Tints, shades and alpha variants of them may be derived; a new hue may not. Component code references tokens, never a raw colour value (the one exception is `themeColor` metadata, which cannot read CSS).

**The Red Ink Rule.** Flag red is for Donate and for stamps. It is never a decorative accent, a heading colour or a generic link colour.

**The Ochre Is For Figures Rule.** Ochre carries dates, counts and margin labels; ochre-700 on sand, ochre-300 on the cover. It is never body text.

## Typography

**Display Font:** Prata (with "Iowan Old Style", Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next (with a size-matched "Atkinson Fallback" built from Arial, then system-ui)

**Character:** Prata is the passport's printed, engraved voice: the name, headings, dates and figures. Atkinson Hyperlegible Next is the reader's voice, chosen for legibility on mid-range phones in bright light. Prata is always weight 400; emphasis in Atkinson comes from bold, not size.

### Hierarchy
- **Display** (Prata 400, clamp 2.5rem to 6rem, line-height 0.98, -0.02em): the candidate's name and page titles. The home hero name tops out at 5.5rem.
- **Headline** (Prata 400, clamp 1.875rem to 3.25rem, 1.06, -0.015em): section headings (h2), stamp figures. Balanced wrap, max 34ch.
- **Title** (Prata 400, lead size, 1.42): margin-column section labels, footer column headings, the office line, subheads inside forms.
- **Lead** (Atkinson 400, clamp 1.1875rem to 1.4375rem, 1.42): section intros and hero intros, max 40rem.
- **Body** (Atkinson 400, 17px, 1.62): all running text, max 40rem (about 68 characters). Pretty wrap.
- **Label** (Atkinson 700, 14px, 1.5): captions, field hints, countdown units, stamp captions. Sentence case, no tracking. The floor is 13px.
- **Figure** (Prata 400, tabular lining figures): countdown days/hours/minutes, stamp years, donation amounts.

### Named Rules
**The Two Faces Rule.** Prata and Atkinson Hyperlegible Next, nothing else. No monospace, not even for numbers or codes; figures are Prata or Atkinson with tabular lining numerals.

**The Tabular Figures Rule.** Every `time` element and anything marked tabular uses `tabular-nums lining-nums`, and changing figures sit in fixed-width slots so nothing shifts.

**The Margin Label Rule.** A section's label lives in the desktop margin column, in Prata at title size, in ochre. On phones it is not shown. Nothing small, uppercase or tracked ever sits above a heading.

## Layout

One page frame: content inside a 78rem container with equal fluid outer margins (the gutter, 1rem to 3rem). Sections are separated by the section space (4.5rem to 10rem); blocks inside a section by the block space (2rem to 3.5rem). Running text never exceeds the 40rem measure.

On desktop (lg, 1024px and up) a section opens on a two-column grid: a one-part margin column for the section label and a three-part main column for the heading, intro and content. Interior page heroes use the same split on the cover. Story chapters use a 12-column grid: date stamp in three columns, text in five, plate facing, alternating sides.

The home hero is a sand passport page resting on a full-bleed duotone photograph of Wajir: on phones the land is a 42svh band and the page overlaps it from below, with a small passport plate beside the name; from lg the land fills the whole ground and the page sits right of centre, its portrait taking the full page height in the left third. The countdown runs along the page foot on the facing-page tone.

Breakpoints are Tailwind's defaults: sm 640px, md 768px (header Donate appears), lg 1024px (margin column, two-column heroes), xl 1280px (inline primary nav; below it, a full-screen menu dialog). Anchor jumps clear the sticky header with 6.5rem scroll padding. Touch targets are at least 44px.

## Elevation & Depth

The system is flat. There are no box shadows anywhere. Depth is conveyed by the material: sand pages on the green cover board, facing-page and inset tones (sand-100, sand-200) for wells, a 3px ink rule under the header, and the guilloché ruling on the page itself. The only overlay effect is the menu dialog's backdrop, ink-900 at 60%.

### Named Rules
**The Printed Matter Rule.** Nothing floats. Pages lie on the cover, plates are set into the page, stamps are pressed onto it. If something needs separation, change the surface tone or draw a rule; never add a shadow.

## Shapes

Three corner radii, each tied to an object. A passport page has a small book radius (page, 10px to 16px), applied to the hero page, the donation widget and page cards, and split onto single edges where a page meets its plate. A rubber stamp has a soft square frame (stamp, 10px). Controls are square-cornered (control, 4px): buttons, inputs, the language toggle, the menu button. Small marks inside controls (status marks, active toggle segment) use 2px. Photographs have no radius except where they share a page's corner. Circles appear only as map and timeline markers.

Borders are ink lines: 1.5px for inputs, toggles and status marks, 2px for secondary buttons, 3px for stamp frames and the header rule. Stamp frames and stamp figures carry an ink-grain mask so they read as impressions, not clean boxes; the small stamp caption stays solid for contrast.

## Components

### Buttons
Square-cornered, bold, block-shaped, with a drawn arrow that steps forward 2px on hover.
- **Shape:** square-cornered (control, 4px), minimum height 48px.
- **Primary:** stamp red with sand-50 text. Reserved for Donate and the action that funds the campaign. Medium is 12px 20px at 16px text; large is 16px 28px at 17px.
- **Secondary:** 2px ink-900 outline, ink text; on hover it fills ink with sand text. On the cover the outline is sand-50 at 80% and hover adds a 10% sand wash.
- **Quiet:** an underlined bold text action in deep flag green (sand with an ochre-300 underline on the cover), 44px tall.
- **Hover / Focus / Press:** hover is a tone step over the quick duration (160ms); press scales to 98% (off under reduced motion). Focus is a 3px flag-green outline at 3px offset, ochre-300 on the cover.

### Inputs / Fields
- **Style:** sand-50 field, 1.5px ink-900 border, 4px corners, 48px minimum height, 14px horizontal padding. Labels sit above in bold ink.
- **Focus:** the global 3px flag-green outline.
- **Error / Disabled:** invalid fields (after interaction) switch the border to flag red; read-only fields go to facing-page sand with an ink-500 border and small text.

### Choice Grid (donation amounts)
- Amounts are 48px square-cornered cells with 1.5px ink borders and tabular figures. The selected amount fills deep flag green with sand text. Method tabs sit in a facing-page well; the active tab fills ink.

### Language Toggle
- EN / SW / SO as one segmented control: 1.5px ink frame, 2px inner padding, each segment a 40px (header) or 48px (menu) target. The active language is a solid ink block with sand text; on the cover it inverts to a sand block with ink text.

### Navigation
- **Header:** sticky; a 36px cover-green countdown strip above a sand bar with a 3px ink rule. On scroll the whole header slides up by the strip's height (transform only), leaving the nav bar.
- **Desktop nav (xl+):** bold 15px links, ink-700, hovering to ink-900; the current page is deep flag green with a 3px flag-green underline that scales in from the left.
- **Mobile:** a full-screen cover-green dialog. Links are Prata at 1.75rem to 2.5rem, sand on green with sand-at-15% rules between; the current page and hover are ochre-300. Donate (red, 56px) and the large language toggle sit at its foot. On phones, Donate also rides in the countdown strip as an ochre underlined link.

### Entry Stamp (signature component)
The record's mark. A rubber-stamp frame in red or green ink (3px border, stamp radius, ink-grain mask), rotated between about -6 and +3 degrees. A large Prata figure (a year or a word) over a 2px ruled line, then a bold 15px caption, max 17ch. Stamps press onto the page once as they scroll into view: from scale 1.08 and transparent to flat, opacity over 240ms and transform over 520ms on the expo ease-out. Numeric figures may count up once from just below their value. Red and green alternate along a record line.

### Plate (photograph)
A duotone print set square into the page, on a sand-200 ground while loading, with an optional muted 14px caption beneath, max 40rem. No shadow, no card frame. Interior page heroes carry a wide plate (4:3 on phones, 21:9 on desktop); candidate photographs stay near native size (max 34rem).

### Status Mark
A small ruled ink annotation, like an official's mark in a passport margin: 1.5px current-colour border, 2px corners, bold 13px. Verified is deep flag green, draft is ochre-700, to-be-confirmed is flag red. On the cover: sand, ochre-300, and a solid red block. A Draft Note pairs the mark with small text in a sand-200 inset.

### Countdown
A printed validity line at the foot of the home passport page: days, hours and minutes in Prata tabular figures (1.75rem on phones, 2.75rem from sm) with bold muted unit labels, and the date beneath. Filled before first paint by an inline script, it ticks once a minute. The header strip shows days only, in ochre-300 Prata.

### Footer (back cover)
Cover green, opened by a 6px black-red-green flag strip. The candidate's name returns at full width in Prata, the office line in ochre-300, then the tagline, index and ways to take part above a 3px sand-at-25% rule, then small print and the photograph credit, which must stay visible.

## Do's and Don'ts

### Do:
- **Do** use only the tokens in `src/styles/tokens.css`; derive tints, shades or alpha from them when needed (ochre-700 is the precedent) and record the derivation beside the token.
- **Do** reserve flag red for Donate and for stamps.
- **Do** set the name, headings, dates and figures in Prata 400, and everything people read in Atkinson Hyperlegible Next at 17px or larger (small print floor 13px).
- **Do** put section labels in the desktop margin column, in Prata at title size, ochre; hide them on phones.
- **Do** print every photograph through `scripts/duotone.py land` (flag-green-deep to ochre-300) and record its provenance and licence in a CREDITS.md beside it.
- **Do** animate only transform and opacity, once, with calm ease-out curves (160ms, 420ms, 640ms), and turn all of it off under `prefers-reduced-motion`.
- **Do** keep first-viewport content visible without JavaScript: entrances there run from CSS, and scroll reveals have a CSS failsafe that shows everything after 3.5s.
- **Do** use tabular lining figures in fixed-width slots for dates, counts and money.
- **Do** keep controls square-cornered (4px) with 44px minimum touch targets.

### Don't:
- **Don't** add a hue, a raw hex value in component code, or a gradient.
- **Don't** use a third typeface or any monospace.
- **Don't** place an eyebrow (a small, uppercase or tracked label) above a heading.
- **Don't** use red for decoration, headings or ordinary links.
- **Don't** show a full-colour or unprocessed photograph, or present the Wajir county photographs as campaign events.
- **Don't** add box shadows, glows or floating cards; depth is cover versus page.
- **Don't** loop, pulse or bounce anything, or animate layout properties.
- **Don't** change locked copy to fit a layout; change the layout.
