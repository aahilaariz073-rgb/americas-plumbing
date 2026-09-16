# Backlinks & Local Citations — America's Plumbing

Backlinks cannot be created from this repository. Every item below is an
off-site action a person has to perform with the business's own credentials.
This file is the working checklist, plus the exact NAP data every listing must
use, so nothing drifts.

Google's own position (Search Essentials, "Link spam"): buying links, link
exchanges, and mass directory submissions are spam and can trigger a manual
action. Everything listed here is either a verified business listing (a
*citation*, which Google uses to corroborate the business exists) or a link
earned from a real relationship. Nothing here is bought.

## The canonical NAP — copy/paste exactly, every time

Local ranking depends on the name/address/phone being **byte-identical**
across every listing. One "Ste." vs "Suite" mismatch splits the entity.

```
Name:     America's Plumbing
Phone:    (949) 379-0082
City:     San Jacinto, CA 92583
Website:  https://www.americasplumbing.com
License:  CA C-36 Plumbing Contractor #0784091
Hours:    Open 24 hours, 7 days
Owner:    Joseph Romero
```

Always link the **www** version with `https://` — the site canonicalizes to
`https://www.americasplumbing.com`, and a link to any other variant spends its
value on a redirect.

## Tier 1 — do these first (highest impact, all free)

These are the listings Google actually cross-references for local businesses.

1. **Google Business Profile** — the single highest-impact item on this list,
   more so than any link. Claim it, verify it, pick primary category
   `Plumber`, set the service area to the cities on `/areas`, add real job
   photos, and post weekly. Then paste the profile URL and the "ask for
   reviews" short link into `app/data/business.ts`
   (`SOCIAL_PROFILES` and `GOOGLE_REVIEW_URL`) — the review button on
   `/reviews` is hidden until that second value exists.
2. **Bing Places** — import directly from the Google profile.
3. **Apple Business Connect** — feeds Apple Maps/Siri.
4. **Yelp for Business** — claim, don't buy ads.
5. **Nextdoor Business** — disproportionately strong for residential trades in
   Riverside County and South Orange County.
6. **Facebook Business Page** — add the URL to `SOCIAL_PROFILES`.
7. **Better Business Bureau** — a real, verified profile.
8. **Angi / Thumbtack / Porch / HomeAdvisor** — free profiles only.
9. **CSLB license lookup (#0784091)** — verify the public record shows the
   same business name, phone, and website as above.

## Tier 2 — trade and local authority

10. **PHCC** (Plumbing-Heating-Cooling Contractors Association) member
    directory — a genuine trade-body link.
11. **San Jacinto Valley Chamber of Commerce**, and the Hemet/San Jacinto
    Valley Chamber — paid membership, but the directory link is a real local
    signal and comes with referrals.
12. **Supplier / manufacturer "find a pro" pages** — Rheem, Bradford White,
    Navien, Moen, InSinkErator. If the business installs the brand, it often
    qualifies for a contractor locator listing. Ask the supply house rep.
13. **Local news & community sites** — The Valley Chronicle, Record Gazette.
    Offer a seasonal plumbing-prep piece; do not pay for placement.
14. **Local sponsorships** — youth sports, school fundraisers, a fire-department
    drive. These earn a link from a genuinely local `.org` and are the kind of
    thing competitors cannot replicate.

## Tier 3 — content that earns links on its own

The blog is the asset here. Pages that attract links are the ones with data or
tools nobody else has locally:

- **Hard water in the San Jacinto Valley** — pull real hardness figures from
  Eastern Municipal Water District's annual water quality report and cite them.
  Utility-sourced local data is the most linkable thing a plumber can publish.
- **Riverside County repipe / water heater cost guides** with real local price
  ranges — these get cited by aggregators and by AI answer engines.
- **Emergency shutoff guide per city** — practical, linkable by HOAs and
  property managers.

Then do simple outreach: property managers, HOA boards, and realtors in the
service area all maintain "trusted vendor" pages. A real relationship gets a
real link.

## What NOT to do

- Do not buy links, "guest post packages", or PBN placements.
- Do not run automated directory-submission services — they generate hundreds
  of inconsistent NAPs and actively damage local ranking.
- Do not exchange links reciprocally at scale with other contractors.
- Do not fabricate reviews or add `aggregateRating` to schema without real,
  verifiable reviews. The schema in `app/data/business.ts` deliberately omits
  it for this reason.

## Measuring

Set up **Google Search Console** for `https://www.americasplumbing.com` and
submit `https://www.americasplumbing.com/sitemap.xml`. Links → "Top linking
sites" is the ground truth for what actually landed; check it monthly against
this checklist.
