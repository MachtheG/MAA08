# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Voters and supporters in Wajir County, Kenya, reading on mid-range Android phones over mobile data, often in bright outdoor light and on slow or intermittent connections. Visitors read in English, Kiswahili and Somali in roughly equal measure. A second, decisive audience is the candidate and his team, who approve the site and must feel it matches his standing.

## Product Purpose

The official campaign site of Mohamed Abdi Affey, candidate for Governor of Wajir County in the general election of Tuesday 10 August 2027. It introduces the candidate, sets out his record and his priorities for the county, and turns support into action. The single most important action is a donation through M-Pesa; volunteering and sharing are secondary.

## Positioning

A son of Wajir who entered Parliament at 27 (1997), served as Kenya's Ambassador to Somalia (2003) and as UNHCR and IGAD Special Envoy for the Horn of Africa, and now brings that experience home. No other candidate can truthfully claim that record. Campaign promise: "Wajir First, Always."

## Operating Context

- Live on Vercel; built with Next.js (App Router), React 19, Tailwind CSS 4.
- Routes: / , /story, /vision, /record, /wards (interactive constituency map), /news, /get-involved (volunteer form and #donate with M-Pesa paybill, STK push and crypto tabs).
- Three-language switcher (EN / SW / SO); every string lives in `src/i18n/dictionaries.ts` and `src/content/candidate*.ts`.
- Election countdown to 10 August 2027, 00:00 EAT (UTC+03:00).

## Capabilities and Constraints

- Colour palette is locked to the existing tokens in `src/app/globals.css` (sand, ink, flag green/red/black, ochre). Tints, shades and alpha variants are allowed; new hues are not.
- Copy is locked: no rewriting, inventing or deleting names, dates, claims or quotes. "Draft — for approval" / "To confirm" markers and the footer disclaimer stay.
- Performance budget: Lighthouse mobile ≥ 90 performance and 100 accessibility; mobile-first; no layout shift.
- Layouts must hold equally in English, Kiswahili and Somali, whose strings run longer.

## Brand Commitments

- Wajir County coat of arms in the header.
- Kenyan flag colours used as rules and marks.
- Campaign promise "Wajir First, Always."
- Client's stated north star: "statesman meets the land" — a diplomat's gravitas grounded in Wajir's light, space and acacia landscape.

## Evidence on Hand

- Candidate photographs `public/images/MohamedA01.jpg`–`MohamedA07.jpeg`: not yet cleared for use; treat as placeholders and design so they can be swapped.
- Landscape images `acacia.jpg`, `highlands.jpg`, `desert-expanse.jpg`, `Wajir Landscape.jpeg`: Unsplash stock, not of Wajir; placeholders until real Wajir photography arrives (see `public/images/CREDITS.md`).
- `WajirCOA.jpeg` (coat of arms) and `WajirGoffice.jpg`.
- Record and timeline content in `src/content/candidate.ts` with verification statuses.
- No endorsements, testimonials or polling data exist; the home pull quote is attributed to "Anonymous". None may be fabricated.

## Product Principles

1. Every page earns a donation: the M-Pesa path is always one tap away and never buried.
2. Record over rhetoric: show verifiable service, and keep draft or unconfirmed material visibly marked.
3. Equal in three languages: no layout privileges English.
4. Light enough for a slow phone in Wajir.

## Accessibility & Inclusion

WCAG 2.2 AA contrast with the locked palette, visible focus states, full keyboard navigation including the menu and map, and complete `prefers-reduced-motion` support. Readable in bright outdoor light on small screens.
