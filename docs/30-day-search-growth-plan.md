# SkillFit 30-Day Search Growth Plan

Date: 2026-07-03

## Goal

Increase organic clicks and CTR within 30 days by improving the pages that already have Google impressions, then measuring which search intents turn into useful site behavior.

Baseline from the 2026-07-03 Google Search Console export:

- Total performance: 17 clicks, 1.23K impressions, 1.4% CTR, 33.6 average position.
- Page export total: 18 clicks, 1,288 impressions.
- Device split: desktop has 1,117 impressions and 1.16% CTR; mobile has fewer impressions but better average position.
- Country split: United States has the largest volume, 548 impressions, but only 0.36% CTR.

30-day target:

- CTR: lift from 1.4% to 2.5%-3.5%.
- Clicks: lift from 17 to 35-50 monthly clicks.
- Ranking movement: move at least 3 priority pages or query clusters into stronger striking distance.
- Instrumentation: know landing source, landing page, internal next click, scroll depth, and submit/source-click intent.

This is an early-stage domain, so the fastest visible result should come from CTR and snippet relevance on pages already receiving impressions, not from broad new content volume.

## Why Users Are Not Clicking

1. Some pages rank too low to be realistically clicked.

- `ai researcher skills`: 90 impressions, position 45.71.
- `ai competitor gap analysis agent`: 60 impressions, position 77.22.
- `skills marketplace`: 23 impressions, position 76.87.

These need stronger, fuller pages before CTR work matters.

2. Some pages are already near page-one/page-two but the snippet intent is too weak.

- `web-access skill`: 17 impressions, position 9.59, 0 clicks.
- `web access skill`: 14 impressions, position 13, 0 clicks.
- `/skills`: 42 impressions, position 10.88, 0 clicks.
- `/use-cases/best-skill-for-frontend-landing-page`: 25 impressions, position 14.96, 0 clicks.

These need sharper titles, descriptions, H1s, and answer-first content.

3. Brand demand exists but is under-captured.

- `skillfit`: 106 impressions, position 17.96, 0.94% CTR.
- `skill fit`: 18 impressions, position 8.44, 11.11% CTR.

The site needs to make the brand entity clearer: `SkillFit`, `Skill Fit`, `AI Skill Finder`, and `AI Agent Skill Directory`.

4. User intent is more answer-oriented than index-oriented.

Many pages read like credible index cards. Search users are more likely to click when the result promises a direct answer: what it is, when to use it, how to test it, and what alternatives exist.

## Priority Query Clusters

### Tier 1: fast CTR wins

These are already close enough to see movement quickly.

- `web-access skill`, `web access skill`, `what is web access`
- `frontend design vs ui ux pro max`
- `skillfit`, `skill fit`
- `/skills` as an AI skill directory result

Actions:

- Keep exact-match title and description language.
- Make H1s and first screens answer the query directly.
- Add FAQ schema where pages have clear questions.
- Strengthen internal links from homepage, skill index, guides, and related arena pages.

### Tier 2: ranking lift pages

These have volume but are not close enough yet.

- `ai researcher skills`
- `ai competitor gap analysis agent`
- `skills marketplace`, `skill marketplace`
- `wechat article insights`
- `ui ux pro max skill`

Actions:

- Expand each target page into a decision page, not a thin card.
- Add 3-5 FAQ answers per target page.
- Add examples and test prompts.
- Add internal links with descriptive anchor text from related guides and cards.

### Tier 3: new long-tail tests

Publish or improve pages for exact jobs that can rank with low domain authority.

- best AI skill for competitor research
- best AI skill for web research
- best AI skill for WeChat article rewrite
- AI skill directory for agents
- frontend-design vs ui-ux-pro-max
- web-access skill review

## Page-Level Plan

### Homepage

Purpose: capture brand + category.

Keep optimizing toward:

- `SkillFit`
- `Skill Fit`
- `AI Skill Finder`
- `AI Agent Skill Directory`

Above the fold should say exactly what the site does and who it helps.

### `/skills`

Purpose: rank as an AI skill directory, then route users to skill detail pages.

Add or preserve:

- Directory language in title/H1.
- Cards grouped by job-to-be-done.
- Internal anchors to high-priority skills.
- A short explainer: how to choose between skills.

### `/skills/web-access`

Purpose: capture `web-access skill` and convert it into source clicks or related guide clicks.

Add or preserve:

- Title: web-access skill review language.
- H1: `web-access Skill Review`.
- Short answer section.
- FAQ: what is web-access, when to use it, when to avoid it, how to test it.
- Links to research and competitive analysis guides.

### `/skills/ui-ux-pro-max`

Purpose: capture `ui ux pro max`, `ui ux pro max skill`, and comparison queries.

Add or preserve:

- Title: UI UX Pro Max skill review.
- H1: `ui-ux-pro-max Skill Review`.
- FAQ: when to use it vs `frontend-design` and `implement-design`.
- Internal link to `/best-ai-skill-for-ui-design` and the arena comparison.

### `/best-ai-skills-for-research`

Purpose: move from generic research guide to AI researcher skill answer.

Add or preserve:

- `AI researcher skills` in title, H1, description, and FAQ.
- Examples of source-backed research tasks.
- Internal links to `web-access`.

### `/ai-skill-marketplace-list`

Purpose: rank for marketplace/directory queries.

Add or preserve:

- `AI skill marketplace`, `skill directory`, `platforms`, `GitHub`, `plugins`.
- A comparison table of discovery surfaces.
- FAQ: is there one official marketplace, what should a marketplace include.

### `/best-ai-skill-for-competitive-analysis`

Purpose: capture `AI competitor gap analysis agent`.

Add or preserve:

- Exact phrase in title/H1/description.
- Example output shape: competitors, positioning, proof, gap, risk, next validation step.
- Link back to research and web-access pages.

## Measurement Plan

### Google Search Console

Check weekly, using exact dates:

- 2026-07-10: early indexing and snippet visibility.
- 2026-07-17: first comparison of CTR and positions.
- 2026-07-24: decide which pages need stronger rewrites.
- 2026-08-03: 30-day review.

Track:

- Query CTR for Tier 1 queries.
- Page CTR for `/`, `/skills`, `/skills/web-access`, `/skills/ui-ux-pro-max`.
- Impressions and average position for Tier 2 pages.
- Country CTR, especially United States.
- Desktop CTR, because most impressions are desktop.

### PostHog / product analytics

Track these without storing sensitive text:

- `$pageview` with path, pathname, referrer, UTM fields, landing path, and page type.
- Internal click with source path, target path, link text, and section when available.
- Scroll depth at 50% and 90%.
- Submit clicks by location.
- Source/install clicks by skill slug.
- Task finder searches by query length, match count, and top match, not raw query text.

This allows analysis of:

- Which landing pages come from Google.
- Which pages users visit next.
- Which pages fail to get an internal click.
- Which pages are read but not acted on.
- Which search intents create submit/source-click behavior.

## 30-Day Execution Calendar

### Week 1: CTR and tracking foundation

- Ship title/meta/H1 updates for Tier 1 pages.
- Add referrer, UTM, landing path, internal click, and scroll-depth tracking.
- Deploy and resubmit sitemap.
- Use URL Inspection for `/`, `/skills`, `/skills/web-access`, `/skills/ui-ux-pro-max`, `/best-ai-skills-for-research`.

### Week 2: content depth

- Expand `/skills/web-access` with a stronger short-answer block and FAQ.
- Expand `/skills/ui-ux-pro-max` with comparison language.
- Add internal links from homepage and guide pages using exact descriptive anchors.
- Check GSC for indexing and early CTR changes.

### Week 3: ranking lift pages

- Improve `/ai-skill-marketplace-list` with a comparison section.
- Improve `/best-ai-skill-for-competitive-analysis` with the gap-analysis output format.
- Improve `/use-cases/best-skill-for-wechat-article-rewrite` around WeChat article insights.
- Add or improve related links among these pages.

### Week 4: prune, rewrite, and double down

- Rewrite titles/descriptions for pages with impressions but still 0 clicks.
- Add richer examples to pages with high engagement.
- Move winning pages higher on homepage and `/skills`.
- Create 2-3 new pages only if GSC shows repeated query demand.

## Decision Rules

- If a query is position 1-15 and 0 clicks after 100+ impressions, rewrite title and description first.
- If a query is position 20-60 with meaningful impressions, add content depth and internal links.
- If a page gets Google landings but no internal clicks, improve above-the-fold CTA and related links.
- If a page gets scroll 90% but no action, add a clearer next step near the end.
- If a page gets no scroll and no click, the first screen is not answering the intent.

## Expected One-Month Outcome

The most likely visible gains in one month:

- Higher CTR for brand and exact skill queries.
- More clicks on `/skills/web-access`, `/skills`, and homepage.
- Early ranking improvement for research and marketplace pages.
- Clearer evidence about which page types deserve more content.

The less likely one-month outcome:

- High-volume generic terms jumping to top 3 positions. The domain is still early, so generic terms need time, depth, and links.

## Next Actions After This Plan

1. Deploy the current SEO changes.
2. Submit sitemap in Search Console after deployment.
3. Request indexing for the 5 priority pages.
4. Review GSC on 2026-07-10 and compare against this baseline.
5. Use PostHog to inspect landing-source paths and internal next clicks.

## Implementation Status

Shipped in the current local change set:

- Homepage title, description, H1, and category language now target `SkillFit`, `Skill Fit`, `AI Skill Finder`, and `AI Agent Skill Directory`.
- Homepage now includes a high-intent search section linking to pages Google is already testing: `web-access skill review`, `ui ux pro max skill`, `AI researcher skills`, `AI skill marketplace list`, `AI competitor gap analysis agent`, and `frontend-design vs ui-ux-pro-max`.
- `/skills` now has `AI Skill Directory and Evidence Cards` metadata plus a priority comparisons block for the pages most likely to move in 30 days.
- Skill detail pages now support per-skill SEO titles and descriptions, and render `Skill Review` in the H1.
- `web-access`, `ui-ux-pro-max`, `frontend-design`, and `implement-design` have stronger query-matched skill metadata.
- Research, marketplace, competitive-analysis, UI-design, and WeChat use-case content now includes language from actual GSC query clusters.
- PostHog events now include referrer, referrer domain, UTM fields, landing path, current path, page type, internal target path, link text, and scroll-depth events.

Still needs deployment and external verification:

- Deploy to production.
- Submit `https://get-skill-fit.com/sitemap.xml` in Search Console.
- Request indexing for `/`, `/skills`, `/skills/web-access`, `/skills/ui-ux-pro-max`, and `/best-ai-skills-for-research`.
- Check GSC on 2026-07-10, 2026-07-17, 2026-07-24, and 2026-08-03.
