const baseUrl = process.env.SITE_URL || "https://get-skill-fit.com";

const pages = [
  {
    path: "/",
    title: "SkillFit: AI Skill Finder and Agent Skill Directory",
    descriptionIncludes: "Find the right AI agent skill by task",
    h1: "Find the right AI Skill for your task.",
    bodyIncludes: [
      "High-intent searches",
      "web-access skill review",
      "AI competitor gap analysis agent",
      "AI writing skills",
      "AI coding skills",
      "implement-design skill"
    ]
  },
  {
    path: "/skills",
    title: "AI Skill Directory: Reviews and Evidence Cards | SkillFit",
    descriptionIncludes: "Browse AI skill reviews",
    h1: "AI Skill Directory: reviews before you install another Skill.",
    bodyIncludes: [
      "Priority comparisons",
      "web-access",
      "ui-ux-pro-max",
      "lark-minutes",
      "Skill Review",
      "What is an AI skill directory?"
    ]
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
    path: "/skills/implement-design",
    title: "implement-design Skill Review: Figma to Code and Design Implementation | SkillFit",
    descriptionIncludes: "Review the implement-design skill",
    h1: "implement-design Skill Review",
    bodyIncludes: [
      "Best fit",
      "Design implementation",
      "What is implement-design best for?"
    ]
  },
  {
    path: "/best-ai-skills-for-research",
    title: "Best AI Researcher Skills for Web Research | SkillFit",
    descriptionIncludes: "Compare AI researcher skills",
    h1: "Best AI Researcher Skills for Web Research",
    bodyIncludes: [
      "Which AI researcher skills should I look for?",
      "Is web-access an AI researcher skill?",
      "web-access skill card",
      "AI skill marketplace list"
    ]
  },
  {
    path: "/best-ai-skills-for-writing",
    title: "Best AI Writing Skills for Articles and Copy | SkillFit",
    descriptionIncludes: "Compare AI writing skills",
    h1: "Best AI Writing Skills for Articles and Copy",
    bodyIncludes: [
      "What are the best AI writing skills?",
      "Which AI writing skill should I use for WeChat articles?",
      "marketing-psychology skill card"
    ]
  },
  {
    path: "/best-ai-skills-for-coding",
    title: "Best AI Coding Skills for Code Review and Frontend | SkillFit",
    descriptionIncludes: "Compare AI coding skills",
    h1: "Best AI Coding Skills for Code Review and Frontend",
    bodyIncludes: [
      "What are the best AI coding skills?",
      "Which AI coding skill should I use for Figma to code?",
      "implement-design skill card"
    ]
  },
  {
    path: "/how-to-choose-ai-skills",
    title: "How to Choose AI Skills by Task Fit | SkillFit",
    descriptionIncludes: "task-fit checklist",
    h1: "How to Choose AI Skills by Task Fit",
    bodyIncludes: [
      "How do I validate an AI skill before using it?",
      "AI skill marketplace list"
    ]
  },
  {
    path: "/ai-skill-marketplace-list",
    title: "AI Skill Marketplace List and Directory | SkillFit",
    descriptionIncludes: "AI skill marketplace options",
    h1: "AI Skill Marketplace List and Directory",
    bodyIncludes: [
      "What is an AI skill marketplace?",
      "Where can I find AI agent skills?",
      "SkillFit skill index"
    ]
  },
  {
    path: "/best-ai-skill-for-competitive-analysis",
    title: "Best AI Competitor Gap Analysis Agent Skill | SkillFit",
    descriptionIncludes: "AI competitor gap analysis agent skill",
    h1: "Best AI Competitor Gap Analysis Agent Skill",
    bodyIncludes: ["What is an AI competitor gap analysis agent?", "web-access skill card"]
  },
  {
    path: "/use-cases/best-skill-for-wechat-article-rewrite",
    title: "Best AI Skill for WeChat Article Insights | SkillFit",
    descriptionIncludes: "WeChat article insights skill",
    h1: "Best Skill for WeChat Article Rewrite and Insights",
    bodyIncludes: ["What is a WeChat article insights skill?", "WeChat rewrite arena"]
  },
  {
    path: "/use-cases/best-skill-for-frontend-landing-page",
    title: "Best AI Skill for Frontend Landing Pages | SkillFit",
    descriptionIncludes: "Compare frontend-design, ui-ux-pro-max, and implement-design",
    h1: "Best Skill for Frontend Landing Page",
    bodyIncludes: [
      "frontend-design vs ui-ux-pro-max",
      "What is the best AI skill for a frontend landing page?"
    ]
  },
  {
    path: "/skills/lark-minutes",
    title: "lark-minutes Skill Review: Lark Meeting Minutes and Action Items | SkillFit",
    descriptionIncludes: "Review the lark-minutes skill",
    h1: "lark-minutes Skill Review",
    bodyIncludes: ["Lark meeting minutes", "What is lark-minutes best for?"]
  },
  {
    path: "/arena/frontend-design-vs-ui-ux-pro-max-landing-page",
    title: "frontend-design vs ui-ux-pro-max: Landing Page Skill Comparison | SkillFit",
    descriptionIncludes: "Compare frontend-design vs ui-ux-pro-max",
    h1: "frontend-design vs ui-ux-pro-max for a landing page",
    bodyIncludes: [
      "Should I use frontend-design or ui-ux-pro-max for a landing page?",
      "AI landing page skill use case"
    ]
  },
  {
    path: "/skills/dreamina-cli",
    title: "dreamina-cli Skill Review: Dreamina CLI Image and Video Generation | SkillFit",
    descriptionIncludes: "Review the dreamina-cli skill",
    h1: "dreamina-cli Skill Review",
    bodyIncludes: ["Dreamina CLI", "What is dreamina-cli best for?"]
  },
  {
    path: "/skills/lark-calendar",
    title: "lark-calendar Skill Review: Lark Calendar Events and Availability | SkillFit",
    descriptionIncludes: "Review the lark-calendar skill",
    h1: "lark-calendar Skill Review",
    bodyIncludes: ["Lark Calendar", "What is lark-calendar best for?"]
  },
  {
    path: "/guides",
    title: "AI Skill Guides | SkillFit",
    descriptionIncludes: "Task-first guides for choosing AI Agent Skills",
    h1: "AI Skill guides by task.",
    bodyIncludes: ["What are AI skill guides?", "Best AI Researcher Skills for Web Research"]
  },
  {
    path: "/use-cases",
    title: "AI Skill Use Cases and Task Recommendations | SkillFit",
    descriptionIncludes: "Browse AI skill use cases",
    h1: "Choose by job-to-be-done, not by marketplace rank.",
    bodyIncludes: ["What is an AI skill use case?", "Best Skill for Frontend Landing Page"]
  },
  {
    path: "/arena",
    title: "AI Skill Arena: Skill Comparisons and Duels | SkillFit",
    descriptionIncludes: "Compare AI skills on concrete tasks",
    h1: "Duels are evidence, not the whole ranking system.",
    bodyIncludes: ["What is Skill Arena?", "frontend-design vs ui-ux-pro-max"]
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

const llmsTxt = await fetchText("/llms.txt");
assertContains({
  label: "llms.txt",
  actual: llmsTxt,
  expected: "web-access Skill Review",
  errors
});
assertContains({
  label: "llms.txt",
  actual: llmsTxt,
  expected: "AI Skill Marketplace List",
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
