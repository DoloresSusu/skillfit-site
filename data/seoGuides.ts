export type SeoGuide = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  answer: string;
  audience: string[];
  recommendedSkillTypes: Array<{
    name: string;
    fit: string;
  }>;
  decisionChecklist: string[];
  testPrompt: string;
  redFlags: string[];
  relatedLinks: Array<{
    href: string;
    label: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const seoGuides: SeoGuide[] = [
  {
    slug: "best-ai-skills-for-research",
    path: "/best-ai-skills-for-research",
    title: "Best AI Skills for Research",
    shortTitle: "Research Skills",
    description:
      "A practical guide to choosing AI agent skills for web research, competitor analysis, and source-backed reports.",
    answer:
      "The best AI skill for research is the one that can gather current sources, separate evidence from opinion, cite references, and turn uncertainty into a clear recommendation.",
    audience: [
      "Founders checking a market before building",
      "PMs comparing tools, agents, or workflows",
      "Creators turning scattered sources into publishable analysis"
    ],
    recommendedSkillTypes: [
      {
        name: "Web research skill",
        fit: "Best when the task depends on fresh information, competitor discovery, and source attribution."
      },
      {
        name: "Official documentation skill",
        fit: "Best when accuracy depends on primary sources such as API docs, product docs, or standard references."
      },
      {
        name: "Synthesis skill",
        fit: "Best when the output needs a decision memo rather than a link dump."
      }
    ],
    decisionChecklist: [
      "Does it browse or verify current sources when the topic can change?",
      "Does it show links and separate facts from interpretation?",
      "Does it explain what it could not verify?",
      "Does it produce a concise recommendation, not only a summary?"
    ],
    testPrompt:
      "Research whether a new AI skill marketplace idea already exists. Find competitors, summarize their positioning, and explain the unmet gap with links.",
    redFlags: [
      "No source links",
      "Old or unspecific competitor names",
      "Confident claims without uncertainty",
      "A long summary with no recommendation"
    ],
    relatedLinks: [
      { href: "/use-cases/best-skill-for-research-report", label: "Research report use case" },
      { href: "/skills/web-access", label: "web-access skill card" },
      { href: "/submit", label: "Submit a research result" }
    ],
    faqs: [
      {
        question: "What makes an AI research skill good?",
        answer:
          "A good AI research skill verifies current sources, cites where information came from, explains uncertainty, and produces a decision-ready answer."
      },
      {
        question: "Should I use a general chatbot for research?",
        answer:
          "A general chatbot is fine for brainstorming. For decisions, use a research-oriented skill that can browse, cite, and compare evidence."
      },
      {
        question: "How should I test a research skill?",
        answer:
          "Give it a current topic, ask for sources and competitors, then check whether the links are real and the recommendation follows from the evidence."
      }
    ]
  },
  {
    slug: "best-ai-skills-for-writing",
    path: "/best-ai-skills-for-writing",
    title: "Best AI Skills for Writing",
    shortTitle: "Writing Skills",
    description:
      "How to choose AI skills for articles, landing page copy, rewrites, social posts, and narrative editing.",
    answer:
      "The best AI writing skill depends on the output format: use a copywriting skill for conversion pages, an editorial rewrite skill for articles, and a voice-preserving skill for personal content.",
    audience: [
      "Creators turning notes into posts",
      "PMs writing landing pages or product docs",
      "Operators rewriting raw material into publishable content"
    ],
    recommendedSkillTypes: [
      {
        name: "Copywriting skill",
        fit: "Best for landing pages, CTAs, positioning, and conversion-focused copy."
      },
      {
        name: "Editorial rewrite skill",
        fit: "Best for turning source material into a structured article with a clear point of view."
      },
      {
        name: "Marketing psychology skill",
        fit: "Best as a second pass when the message needs sharper motivation, objections, and hooks."
      }
    ],
    decisionChecklist: [
      "Does it preserve the source meaning instead of inventing claims?",
      "Does it understand the target channel and reader?",
      "Does it improve structure, not only polish sentences?",
      "Does it keep a human voice instead of generic AI phrasing?"
    ],
    testPrompt:
      "Rewrite this rough product note into a short public launch post. Keep the founder voice, explain the problem clearly, and avoid exaggerated claims.",
    redFlags: [
      "Overly polished but vague language",
      "Invented numbers or proof points",
      "Same tone for every channel",
      "No clear reader or CTA"
    ],
    relatedLinks: [
      { href: "/use-cases/best-skill-for-wechat-article-rewrite", label: "WeChat article use case" },
      { href: "/skills/copywriting", label: "copywriting skill card" },
      { href: "/submit", label: "Submit a writing result" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for writing articles?",
        answer:
          "Choose an editorial skill that can preserve source meaning, create a clear structure, and adapt tone to the publishing channel."
      },
      {
        question: "What is the best AI skill for landing page copy?",
        answer:
          "Use a copywriting skill that starts from audience, pain, offer, proof, and CTA instead of simply rewriting sentences."
      },
      {
        question: "How do I avoid AI-sounding copy?",
        answer:
          "Ask the skill to keep concrete details, remove vague claims, and explain tradeoffs in a natural voice."
      }
    ]
  },
  {
    slug: "best-ai-skills-for-coding",
    path: "/best-ai-skills-for-coding",
    title: "Best AI Skills for Coding",
    shortTitle: "Coding Skills",
    description:
      "A practical way to choose AI skills for code review, frontend implementation, docs lookup, and agent workflow building.",
    answer:
      "The best AI coding skill is task-specific: use code review skills for risk detection, frontend skills for interface work, docs skills for current API usage, and skill-building skills for reusable agent workflows.",
    audience: [
      "Non-technical founders building with AI coding agents",
      "PMs turning product ideas into MVPs",
      "Developers using skills as focused agent capabilities"
    ],
    recommendedSkillTypes: [
      {
        name: "Code review skill",
        fit: "Best when you need bugs, regressions, missing tests, and risk ordered by severity."
      },
      {
        name: "Frontend implementation skill",
        fit: "Best when the output is a responsive UI, landing page, or polished component."
      },
      {
        name: "Official docs skill",
        fit: "Best when the code depends on current SDKs, APIs, or product behavior."
      }
    ],
    decisionChecklist: [
      "Does the skill inspect the existing codebase before editing?",
      "Does it run or suggest verification steps?",
      "Does it avoid overwriting unrelated user changes?",
      "Does it explain what changed and what remains risky?"
    ],
    testPrompt:
      "Review this small pull request for behavior regressions and missing tests. Prioritize bugs over style comments and include file references.",
    redFlags: [
      "Only says the code looks good",
      "No test or build verification",
      "Suggests broad rewrites without context",
      "Uses outdated API assumptions"
    ],
    relatedLinks: [
      { href: "/use-cases/best-skill-for-code-review", label: "Code review use case" },
      { href: "/skills/frontend-design", label: "frontend-design skill card" },
      { href: "/skills/openai-docs", label: "openai-docs skill card" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for code review?",
        answer:
          "Use a review-oriented skill that prioritizes bugs, regressions, security risks, and missing tests before style feedback."
      },
      {
        question: "What is the best AI skill for frontend coding?",
        answer:
          "Use a frontend design or UI skill when visual hierarchy, responsive behavior, and user-facing polish matter."
      },
      {
        question: "Can AI skills replace a developer?",
        answer:
          "No. They reduce iteration cost, but important changes still need tests, review, and product judgment."
      }
    ]
  },
  {
    slug: "ai-skill-marketplace-list",
    path: "/ai-skill-marketplace-list",
    title: "AI Skill Marketplace List",
    shortTitle: "Marketplace List",
    description:
      "A simple map of where AI agent skills, plugins, GPTs, and workflow packs are likely to be discovered.",
    answer:
      "AI skills are not concentrated in one store. They are distributed across agent platforms, GitHub repositories, model ecosystems, plugin directories, and community posts.",
    audience: [
      "Users trying to find useful AI skills across platforms",
      "Builders deciding where to publish a skill",
      "Researchers mapping the AI agent tooling ecosystem"
    ],
    recommendedSkillTypes: [
      {
        name: "Platform-native directories",
        fit: "Best for installable skills tied to a specific AI agent product."
      },
      {
        name: "GitHub repositories",
        fit: "Best for open-source skills, prompts, agents, and workflow packs with visible implementation."
      },
      {
        name: "Community lists",
        fit: "Best for early discovery before a category becomes formalized."
      }
    ],
    decisionChecklist: [
      "Is the skill installable or only a prompt example?",
      "Which agent or model environment does it require?",
      "Is there a visible source, maintainer, or update history?",
      "Are real use cases and output samples available?"
    ],
    testPrompt:
      "Find three places where users discover AI agent skills today. Compare what each marketplace is good for and what is missing.",
    redFlags: [
      "No source or maintainer",
      "Only screenshots, no install path",
      "No examples of real task output",
      "Marketplace ranking based only on popularity"
    ],
    relatedLinks: [
      { href: "/skills", label: "SkillFit skill index" },
      { href: "/arena", label: "Skill Arena duels" },
      { href: "/submit", label: "Submit a marketplace or skill" }
    ],
    faqs: [
      {
        question: "Is there one official AI skill marketplace?",
        answer:
          "No. AI skills are fragmented across platforms, repositories, communities, and product-specific directories."
      },
      {
        question: "Why does fragmentation matter?",
        answer:
          "Fragmentation makes discovery harder. Users need a task-based decision layer, not just another popularity ranking."
      },
      {
        question: "What should a marketplace list include?",
        answer:
          "It should include source, platform, install path, task fit, evidence level, and examples of real output."
      }
    ]
  },
  {
    slug: "how-to-choose-ai-skills",
    path: "/how-to-choose-ai-skills",
    title: "How to Choose AI Skills",
    shortTitle: "Choose AI Skills",
    description:
      "A first-principles checklist for choosing AI agent skills by task, evidence, safety, and output quality.",
    answer:
      "Choose an AI skill by starting from the task, then checking required capabilities, evidence quality, safety risk, and whether the output improves your real workflow.",
    audience: [
      "People who do not know which AI skill to install",
      "Builders comparing overlapping skills",
      "Teams creating a lightweight skill evaluation process"
    ],
    recommendedSkillTypes: [
      {
        name: "Task-fit skill",
        fit: "Best when you know the job to be done and need the right capability."
      },
      {
        name: "Evidence-backed skill",
        fit: "Best when the output influences publishing, spending, or technical decisions."
      },
      {
        name: "Low-risk helper skill",
        fit: "Best for drafts, formatting, or reversible work where mistakes are easy to catch."
      }
    ],
    decisionChecklist: [
      "Write the task in one sentence before browsing skills.",
      "List the capabilities required for a good answer.",
      "Run a small test prompt and inspect the output.",
      "Check failure modes, safety risk, and maintenance signals.",
      "Keep the skill only if it improves the real workflow."
    ],
    testPrompt:
      "I need to create a publishable market research memo. Recommend the right skill type, explain why, and give me a 10-minute test to validate it.",
    redFlags: [
      "Choosing by name or hype instead of task fit",
      "No clear success criteria",
      "Installing many overlapping skills",
      "Ignoring privacy or source quality"
    ],
    relatedLinks: [
      { href: "/use-cases", label: "Browse use cases" },
      { href: "/skills", label: "Browse skill cards" },
      { href: "/submit", label: "Submit your task" }
    ],
    faqs: [
      {
        question: "What is the fastest way to choose an AI skill?",
        answer:
          "Start from the task, pick the skill that matches the required capabilities, then run a small test before using it on important work."
      },
      {
        question: "Should I install the most popular skill?",
        answer:
          "Not automatically. Popularity is a weak signal. Task fit, evidence, and safety matter more."
      },
      {
        question: "How many AI skills should I use?",
        answer:
          "Use fewer skills with clearer jobs. Too many overlapping skills make evaluation and maintenance harder."
      }
    ]
  }
];

export function getSeoGuide(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}
