---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/story/page.tsx","src/app/vision/page.tsx","src/app/record/page.tsx","src/app/wards/page.tsx","src/app/news/page.tsx","src/app/get-involved/page.tsx"]
---

# Surface brief — Affey campaign site (all public routes)

Scope: the whole public site, home first (/, /story, /vision, /record, /wards, /news, /get-involved). Visitor mode: Persuade. Wajir voters on mid-range Android phones over mobile data, reading EN/SW/SO equally; the candidate approves it. Primary action: donate via M-Pesa (/get-involved#donate); secondary: explore the record, volunteer. Constraints: locked palette, locked copy, Lighthouse mobile ≥90 perf / 100 a11y, no layout shift, full reduced-motion support.

Memorable moment: the record stamped onto the passport pages, ending at home in Wajir.

Open decisions: real Wajir photography and cleared candidate photos (placeholders until supplied); whether the "Anonymous" pull quote stays.

## Direction contract

THESIS: The candidate's record told as an envoy's passport — a portrait page opens the site, each milestone is a dated entry stamp on the way back to Wajir. Refuses the campaign default of a full-bleed portrait over a gradient with card grids below.

OWN-WORLD: Deep flag-green cover board (#063c2b) holding sand passport pages (#f8f4ec) with fine green security ruling; ink text; stamps in flag-red and green ink, square-ish rubber-stamp frames rotated a few degrees; ochre for dates and figures on dark; flag-red reserved for Donate and stamps. Prata engraved serif for display and figures, Atkinson Hyperlegible Next for text; dates and counts in tabular figures. (Amended: Martian Mono dropped — the taste-skill house rules the user required ban monospace outside code and cap the page at two typefaces, the craft floor refuses mono as costume, and a third face costs the mobile-data budget.) Pages have a small book radius; controls are square-cornered. Every photograph — landscapes and the candidate alike — is a green/ochre duotone plate; stamps carry an ink-grain mask on frame and figure.

STORY: The visitor meets the man (portrait page), reads the promise, sees his journey stamped page by page (1997 MP at 27, 2003 Ambassador to Somalia, UNHCR & IGAD Special Envoy, home to Wajir), reads what he will do for Wajir, and donates.

FIRST VIEWPORT: (Amended: the cover ground is a real duotone photograph of Wajir — the brief asks for art-directed landscape imagery and "statesman meets the land"; the page rests on the land, the cover green fills around it.) one sand page inset with a small radius. Phone: name in Prata at ~2–2.5rem beside a small passport photo across the page top, office line, promise in green, Donate (red) + Explore the record, portrait plate below; countdown strip (Prata tabular figures) along the page foot. Desktop: portrait plate left third, name in Prata up to the 6rem display cap (5.5rem as built), office, promise, CTAs; the promise "Wajir First, Always." stamped in red at the page foot right (amended from a 1997 stamp: the brief makes the promise the hero's signature moment; 1997 opens the record line below); the portrait takes the page's full height in a left third; countdown strip in Prata tabular figures along the page foot.

FORM: The Envoy's Passport, candidate 5 of the grounded list (re-roll round 1). seed:6456725b2fb4238b
Signature interaction: entry stamps press onto the page as they scroll into view (scale 1.06→1 plus opacity, once); the record line marks "now" between 1997 and 10 August 2027. Motion grammar: calm ease-out, 300–600ms, transform/opacity only, nothing loops, all off under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
