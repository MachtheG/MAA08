# Notes for the client — content to confirm before launch

The redesign did not rewrite, invent or delete any copy, names, dates, claims
or quotes. These are the content issues found along the way, for the campaign
to decide on. Each is listed with where it lives, so a fix is one edit.

## Must resolve before launch

1. **The home pull quote is attributed to "Anonymous"** — and inconsistently:
   "— Anonymous" (EN), "— Bila jina" (SW), but "Mohamed Abdi Affey" (SO).
   An anonymous quote is the weakest proof on the page. Either attribute it to
   a real, consenting person, confirm it is Affey's own words in all three
   languages, or remove it. `src/i18n/dictionaries.ts` (`ui.home.quote`,
   `quoteAttribution`).
2. **Constituency figures look duplicated.** Wajir North and Wajir South show
   identical population (130,070) and registered voters (27,636). Please check
   against IEBC/KNBS data. `src/content/candidate*.ts` (`constituencies`).
3. **Constituency contacts look like placeholders but are marked "Verified"**
   (e.g. "Fatima Hassan — f.hassan@campaign.ke"; `@campaign.ke` for all six).
   Confirm real names and addresses, or mark them "To confirm".
4. **News items are dated July–August 2024 and marked "Verified"**, while the
   site launches for the 10 August 2027 election. Replace with current items or
   mark them as drafts. News has no photographs yet. `src/content/candidate*.ts`
   (`newsItems`).
5. **A draft instruction prints on the public Story page:**
   "[DRAFT framing — confirm before publishing.]" (EN) and "[RASIMU —
   thibitisha kabla ya kuchapisha.]" (SW). It is real content and stays marked
   until you approve the paragraph. `src/content/candidate.ts`,
   `candidate.sw.ts` (story chapter "Today").
6. **Donation details are placeholders:** Paybill "008008", account "MA-008",
   the crypto wallet "[Campaign wallet address to be configured]", and the
   "Not yet live" notice. Nothing is charged today. Kenyan campaign-finance
   rules and the Safaricom Daraja integration need confirming first.
   `src/components/forms/DonateWidget.tsx`.
7. **Candidate photographs are not yet cleared** (your answer during the
   redesign). All seven (`public/images/MohamedA01–07`) are used, printed as
   duotone "passport plates" in `public/images/plates/`. Replace with cleared
   photos and re-run `python3 scripts/duotone.py plate <in> <out> --max 800`.

## Should review

8. **Somali countdown labels need a native speaker.** "Cilliyada" is used both
   for the countdown label ("Cilliyada illaa codsiga") and for "Days", and
   "Ilkoodka" is used for "Seconds". These may be mistranslations.
   `src/i18n/dictionaries.ts` (`so` → `ui.countdown`).
9. **New text the redesign had to add** (flagged so you can approve or
   translate it):
   - The photo credit line in the footer, required by the CC BY-SA licence of
     the Wajir photographs (English only):
     "Photographs of Wajir County by Suleiman Saney and Ahmed Abdi Muhumed, via
     Wikimedia Commons, licensed CC BY-SA 4.0; cropped and printed in two inks."
   - Alt text for the new photographs (English only; screen readers read it in
     every language): "Giraffes at dusk on the edge of Wajir town.",
     "Malaba Hill at Bute, Wajir North.", "Rooftops of Wajir town.",
     "A tarmac street in Wajir town.", "Mohamed Abdi Affey shaking hands at an
     official meeting." — `src/content/imagery.ts`. The old Story/Vision alt
     texts described the stock photos and no longer match.
10. **Footer disclaimer** says "Imagery is placeholder/atmospheric." The site
    now shows real, credited photographs of Wajir County; only the candidate
    photos remain placeholders. Consider updating the wording (all three
    languages).
11. **The Wajir County coat of arms is used as the site's brand mark.** Using
    official county insignia on a candidate's site may need permission, or may
    be read as official endorsement. A campaign wordmark would be safer.
12. **Workflow labels shown to voters:** "Verified", "Draft — for approval",
    "To confirm" appear on cards across the site; "Send STK push" and
    "Safaricom Daraja API" are technical terms; "Demo form — not connected"
    sits under the volunteer form. The brief kept them; before launch, most
    should be hidden or reworded for voters.
13. **Section labels on phones.** Labels such as "A vision for Wajir", "The
    Story", "Donate" and "Volunteer" show in the margin column on desktop but
    are not shown on phones, where they would sit directly above the heading.
    The copy still exists; say if any must appear on phones too.
14. **"Central promise:"** — the slogan is now stamped onto the hero as its
    signature; the label above it could be dropped if you prefer the slogan to
    stand alone.
15. **Long headlines** wrap to three or four lines on a phone, which weakens
    them. If you are open to shorter versions:
    - "A life of service — from Wajir to the world, and back." (Story title)
    - "A verified record of service — at home and on the world stage." (Record)
    - "From the youngest voice in Parliament to the Horn of Africa's peace
      tables." (home, Story section)
    - "Experience earned at the world's tables, put to work at home." (home)
16. **Em-dashes** are heavy across the copy (9 on home, 15 on Story). Some
    readers find dense dashes harder to follow; consider commas or full stops
    in a few places.
17. **"Wajir County · Gubernatorial Campaign"** reads bureaucratic as the hero's
    first line; it now sits at the foot of the hero page instead.
18. **Unused copy** that may be stale: `hero.tagline`
    ("{{CAMPAIGN SLOGAN — to be confirmed}}") and `hero.placeholderNote` are no
    longer shown anywhere.
19. **Polling information**: a first-time voter's most useful tool ("Am I
    registered? Where do I vote?") is absent. Worth considering as a feature.

## Imagery to replace or approve

| Where | Now | Status |
|---|---|---|
| Home hero ground, News | Giraffes at dusk, Wajir town (Suleiman Saney) | Real Wajir, CC BY-SA, credited |
| Home land band, Vision | Malaba Hill, Bute (Suleiman Saney) | Real Wajir, CC BY-SA, credited |
| Home close, Wards | Wajir town rooftops (Ahmed Abdi Muhumed) | Real Wajir, CC BY-SA, credited |
| Story | Tarmac street, Wajir town (Ahmed Abdi Muhumed) | Real Wajir, CC BY-SA, credited |
| Hero portrait, Story chapters, Record, Get Involved | Candidate photos `MohamedA01–07` | **Not cleared** |
| No longer used | `acacia.jpg`, `highlands.jpg`, `desert-expanse.jpg`, `Wajir Landscape.jpeg` | Unsplash stock, not Wajir |

The "Office of the Governor, Wajir County" photograph on Wikimedia Commons was
deliberately not used: a candidate's site showing the official county building
could be read as an official endorsement.
