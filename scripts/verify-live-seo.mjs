const baseUrl = process.env.SITE_URL || "https://get-skill-fit.com";

const pages = [
  {
    path: "/",
    title: "SkillFit: AI Skill Finder and Agent Skill Directory",
    descriptionIncludes: "Find the right AI agent skill by task",
    h1: "Find the right AI Skill for your task.",
    bodyIncludes: ["High-intent searches", "web-access skill review", "AI competitor gap analysis agent"]
  },
  {
    path: "/skills",
    title: "AI Skill Directory and Evidence Cards | SkillFit",
    descriptionIncludes: "Browse an AI skill directory",
    h1: "AI Skill directory before you install another Skill.",
    bodyIncludes: ["Priority comparisons", "web-access", "ui-ux-pro-max", "Skill Review"]
  },
  {
    path: "/skills/web-access",
    title: "web-access Skill Review: Live Web Research and Dynamic Pages | SkillFit",
    descriptionIncludes: "Review the web-access skill",
    h1: "web-access Skill Review",
    bodyIncludes: ["Best fit", "web-access skill research", "Is web-access a web research skill?"]
  },
  {
    path: "/skills/ui-ux-pro-max",
    title: "ui-ux-pro-max Skill Review: UI UX Pro Max for UX Design | SkillFit",
    descriptionIncludes: "Review the ui-ux-pro-max skill",
    h1: "ui-ux-pro-max Skill Review",
    bodyIncludes: ["Best fit", "UI UX Pro Max skill selection", "When should I use ui-ux-pro-max"]
  },
  {
    path: "/best-ai-skills-for-research",
    title: "Best AI Researcher Skills for Web Research | SkillFit",
    descriptionIncludes: "Compare AI researcher skills",
    h1: "Best AI Researcher Skills for Web Research",
    bodyIncludes: ["Which AI researcher skills should I look for?", "web-access skill card"]
  },
  {
    path: "/ai-skill-marketplace-list",
    title: "AI Skill Marketplace List and Directory | SkillFit",
    descriptionIncludes: "AI skill marketplace options",
    h1: "AI Skill Marketplace List and Directory",
    bodyIncludes: ["What is an AI skill marketplace?", "SkillFit skill index"]
  },
  {
    path: "/best-ai-skill-for-competitive-analysis",
    title: "Best AI Competitor Gap Analysis Agent Skill | SkillFit",
    descriptionIncludes: "AI competitor gap analysis agent skill",
    h1: "Best AI Competitor Gap Analysis Agent Skill",
    bodyIncludes: ["What is an AI competitor gap analysis agent?", "web-access skill card"]
  }
];

function stripTags(value) {
  return value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function readMatch(html, pattern) {
  const match = html.match(pattern);
  return match ? stripTags(match[1]) : "";
}

async function fetchText(path) {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    headers: {
      "user-agent": "SkillFit live SEO verifier"
    }
  });

  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`);
  }

  return response.text();
}

function assertContains({ label, actual, expected, errors }) {
  if (!actual.includes(expected)) {
    errors.push(`${label}: expected to include "${expected}", got "${actual.slice(0, 180)}"`);
  }
}

function assertEquals({ label, actual, expected, errors }) {
  if (actual !== expected) {
    errors.push(`${label}: expected "${expected}", got "${actual}"`);
  }
}

const errors = [];

for (const page of pages) {
  const html = await fetchText(page.path);
  const title = readMatch(html, /<title>(.*?)<\/title>/i);
  const description = readMatch(
    html,
    /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i
  );
  const h1 = readMatch(html, /<h1[^>]*>(.*?)<\/h1>/i);

  assertEquals({ label: `${page.path} title`, actual: title, expected: page.title, errors });
  assertContains({
    label: `${page.path} description`,
    actual: description,
    expected: page.descriptionIncludes,
    errors
  });
  assertEquals({ label: `${page.path} h1`, actual: h1, expected: page.h1, errors });

  for (const term of page.bodyIncludes) {
    assertContains({ label: `${page.path} body`, actual: html, expected: term, errors });
  }
}

const sitemap = await fetchText("/sitemap.xml");
assertContains({
  label: "sitemap",
  actual: sitemap,
  expected: "https://get-skill-fit.com/skills/web-access",
  errors
});
assertContains({
  label: "sitemap",
  actual: sitemap,
  expected: "2026-07-03",
  errors
});

if (errors.length > 0) {
  console.error("Live SEO verification failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Live SEO verification passed for ${baseUrl}`);
