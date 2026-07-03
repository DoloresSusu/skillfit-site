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
- `$pageview` with anonymous `session_id`, first-touch UTM fields, first-touch referrer, traffic channel, landing traffic channel, device type, browser language, and timezone.
- `link_clicked` for all site links, including header, footer, nav, cards, related links, source links, and outbound destinations.
- Specific internal click events with source path, target path, link text, and section when available.
- `page_engagement` snapshots on route change or tab hide with time on page, active time, max scroll, click count, first click target, last click target, and no-click status.
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

PostHog insight recipes:

- No-click organic landing pages: filter `page_engagement` where `landing_traffic_channel = organic_search` and `no_click = true`, then break down by `pathname`.
- Organic next-click map: filter `link_clicked` where `landing_traffic_channel = organic_search`, then break down by `pathname` and `target_path`.
- Read-but-no-action pages: filter `page_engagement` where `max_scroll_percent >= 90`, `no_click = true`, and `active_time_ms >= 15000`.
- Weak first screen pages: filter `page_engagement` where `max_scroll_percent < 50`, `no_click = true`, and `time_on_page_ms < 15000`.
- AI referral monitoring: filter pageviews and link clicks where `landing_traffic_channel = ai_referral`, then break down by `landing_referrer_domain`.
- Device behavior: compare `page_engagement` and `link_clicked` by `device_type`; if mobile has low max scroll or low click rate, improve first-screen CTA and card density.

Trace limits:

- Google Search Console can trace query, page, country, device, date, impressions, clicks, CTR, and average position, but it does not expose identifiable users or exact user journeys.
- PostHog can trace anonymous sessions, referrer, UTM, landing path, internal next clicks, outbound clicks, scroll depth, and engagement buckets.
- User profile should be inferred as anonymous cohorts from search intent, device, country, browser language, timezone, landing page, and behavior; do not attempt to identify a person from search traffic.

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
5. Run `npm run analyze:gsc -- /path/to/Search-Console-export.zip` after each Search Console export to rank the next CTR rewrite and content-depth candidates.
6. Use PostHog to inspect landing-source paths and internal next clicks.

## Deployment Gate

Production is not updated until all of these are true:

- `git log --oneline -1` shows the growth commit.
- Vercel production deployment is built from that commit or a later commit.
- `npm run verify:live-seo` passes against `https://get-skill-fit.com`.
- The homepage contains `High-intent searches`.
- `/skills` has the title `AI Skill Directory: Reviews and Evidence Cards | SkillFit`.
- `/skills/web-access` has the title `web-access Skill Review: Live Web Research and Dynamic Pages | SkillFit`.
- `/use-cases/best-skill-for-wechat-article-rewrite` has the title `Best AI Skill for WeChat Article Insights | SkillFit`.
- `/use-cases/best-skill-for-frontend-landing-page` has the title `Best AI Skill for Frontend Landing Pages | SkillFit`.
- `/best-ai-skills-for-writing` has the title `Best AI Writing Skills for Articles and Copy | SkillFit`.
- `/best-ai-skills-for-coding` has the title `Best AI Coding Skills for Code Review and Frontend | SkillFit`.
- `/how-to-choose-ai-skills` has the title `How to Choose AI Skills by Task Fit | SkillFit`.
- `/skills/implement-design` has the title `implement-design Skill Review: Figma to Code and Design Implementation | SkillFit`.
- `/skills/lark-minutes` has the title `lark-minutes Skill Review: Lark Meeting Minutes and Action Items | SkillFit`.
- `/arena/frontend-design-vs-ui-ux-pro-max-landing-page` has the title `frontend-design vs ui-ux-pro-max: Landing Page Skill Comparison | SkillFit`.
- `/skills/dreamina-cli` has the title `dreamina-cli Skill Review: Dreamina CLI Image and Video Generation | SkillFit`.
- `/skills/lark-calendar` has the title `lark-calendar Skill Review: Lark Calendar Events and Availability | SkillFit`.
- `/guides` has FAQ content for `What are AI skill guides?` and an ItemList of guide pages.
- `/use-cases` has the title `AI Skill Use Cases and Task Recommendations | SkillFit` plus FAQ and ItemList structured data.
- `/arena` has the title `AI Skill Arena: Skill Comparisons and Duels | SkillFit` plus FAQ and ItemList structured data.
- `/llms.txt` returns a plain-text SkillFit index with priority pages and skill reviews.
- `/sitemap.xml` has a `2026-07-03` or later `lastmod`.

Current blocker found on 2026-07-03:

- The local Vercel CLI token is invalid.
- The Vercel project `skillfit-site` is not connected to a Git repository.
- The production deployment still points at the old commit `d203274`.

Resolution options:

1. Connect Vercel project `skillfit-site` to GitHub repository `DoloresSusu/skillfit-site`, branch `main`, then redeploy.
2. Or run `vercel login` locally, then deploy with `npx vercel --prod`.
3. Or add a GitHub repository secret named `VERCEL_TOKEN`, then run the `Deploy Vercel Production` workflow manually from GitHub Actions.
4. After any path, run `npm run verify:live-seo`.

Manual GitHub Actions fallback:

- Create a Vercel token from Vercel account settings.
- Add it to GitHub repository `DoloresSusu/skillfit-site` as `Settings > Secrets and variables > Actions > New repository secret > VERCEL_TOKEN`.
- Open `Actions > Deploy Vercel Production > Run workflow`.
- The workflow builds the site, deploys the Vercel project IDs copied from the local `.vercel/project.json`, and retries `npm run verify:live-seo` until the live CDN reflects the SEO changes.

## Implementation Status

Shipped in the current local change set:

- Homepage title, description, H1, and category language now target `SkillFit`, `Skill Fit`, `AI Skill Finder`, and `AI Agent Skill Directory`.
- Homepage now includes a high-intent search section linking to pages Google is already testing: `web-access skill review`, `ui ux pro max skill`, `AI researcher skills`, `AI writing skills`, `AI coding skills`, `AI skill marketplace list`, `AI competitor gap analysis agent`, `frontend-design vs ui-ux-pro-max`, and `implement-design skill`.
- `/skills` now has `AI Skill Directory: Reviews and Evidence Cards` metadata plus a priority comparisons block for the pages most likely to move in 30 days.
- Skill detail pages now support per-skill SEO titles and descriptions, and render `Skill Review` in the H1.
- `web-access`, `ui-ux-pro-max`, `frontend-design`, and `implement-design` have stronger query-matched skill metadata.
- Research, marketplace, competitive-analysis, UI-design, and WeChat use-case content now includes language from actual GSC query clusters.
- PostHog events now include referrer, referrer domain, UTM fields, landing path, current path, page type, internal target path, link text, and scroll-depth events.
- Use-case detail pages now include canonical URLs, OpenGraph metadata, Article JSON-LD, recommended-skill ItemList JSON-LD, FAQPage JSON-LD, BreadcrumbList JSON-LD, short-answer boxes, and tracked related links.
- The two GSC quick-win use cases now have exact-intent snippets and FAQ sections: `WeChat article insights` and `AI landing page skill`.
- `lark-minutes` now targets `Lark meeting minutes`, meeting summaries, chapters, action items, and follow-up workflows instead of a generic meeting-intelligence snippet.
- `/llms.txt` now exists and lists priority pages, use cases, skill reviews, guides, and arena comparisons for AI crawlers and answer engines.
- Arena detail pages now include canonical URLs, OpenGraph metadata, Article JSON-LD, FAQPage JSON-LD, BreadcrumbList JSON-LD, short-answer boxes, tracked reveal links, and tracked related links.
- The `frontend-design vs ui-ux-pro-max` arena page now targets the exact comparison queries that already have top-10 average positions in GSC.
- `dreamina-cli` now targets Dreamina CLI image/video generation, batch prompts, saved output references, and quick validation workflows.
- `lark-calendar` now targets Lark Calendar events, freebusy, attendee management, and availability workflows.
- `/skills`, `/guides`, `/use-cases`, and `/arena` now include CollectionPage, ItemList, FAQPage, and BreadcrumbList structured data so Google can read the site as a task-to-skill directory instead of isolated cards.
- The analytics layer now captures anonymous first-touch attribution, traffic channel, device context, global link clicks, and page engagement snapshots so no-click organic sessions can be diagnosed by landing page and next-click path.
- `/skills` now has a more click-oriented directory title and description that includes the high-impression skill names `web-access`, `ui-ux-pro-max`, and `lark-minutes`.
- Research, marketplace, and competitive-analysis guides now include stronger cross-links and FAQ coverage for `AI researcher skill`, `web-access`, `AI agent skills`, and skill marketplace queries.
- Writing, coding, and choose-guide pages now target Search Console query clusters around `AI writing skills`, `AI skills for coding`, and validation-oriented skill selection.
- `implement-design` now targets the exact `implement design`, `design implement`, and `Figma to code` cluster with stronger metadata, FAQ, audience notes, safety notes, and a 10-minute implementation prompt.
- `scripts/analyze-gsc-export.mjs` and `npm run analyze:gsc` now turn weekly Search Console exports into ranked CTR rewrite, content-depth, authority-link, country, and device opportunities.

Still needs deployment and external verification:

- Deploy to production.
- Submit `https://get-skill-fit.com/sitemap.xml` in Search Console.
- Request indexing for `/`, `/skills`, `/skills/web-access`, `/skills/ui-ux-pro-max`, `/skills/lark-minutes`, `/skills/dreamina-cli`, `/skills/lark-calendar`, `/best-ai-skills-for-research`, `/arena/frontend-design-vs-ui-ux-pro-max-landing-page`, `/use-cases/best-skill-for-wechat-article-rewrite`, and `/use-cases/best-skill-for-frontend-landing-page`.
- Check GSC on 2026-07-10, 2026-07-17, 2026-07-24, and 2026-08-03.
