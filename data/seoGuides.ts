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

export const manualSeoGuideRouteSlugs = [
  "best-ai-skills-for-research",
  "best-ai-skills-for-writing",
  "best-ai-skills-for-coding",
  "ai-skill-marketplace-list",
  "how-to-choose-ai-skills"
];

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
  },
  {
    slug: "best-ai-skill-for-competitive-analysis",
    path: "/best-ai-skill-for-competitive-analysis",
    title: "Best AI Skill for Competitive Analysis",
    shortTitle: "Competitive analysis",
    description:
      "Choose an AI skill for competitor discovery, positioning maps, source-backed comparisons, and market gap analysis.",
    answer:
      "Use a web research skill plus a synthesis skill when competitive analysis depends on current competitors, positioning evidence, and a decision-ready recommendation.",
    audience: [
      "Founders validating a new product idea",
      "PMs preparing competitor and market memos",
      "Creators comparing AI tools before publishing"
    ],
    recommendedSkillTypes: [
      {
        name: "Web research skill",
        fit: "Finds current competitors, pricing pages, product claims, and public proof."
      },
      {
        name: "Synthesis skill",
        fit: "Turns scattered links into categories, gaps, and product implications."
      },
      {
        name: "Source-checking skill",
        fit: "Separates verified evidence from assumptions before you make a decision."
      }
    ],
    decisionChecklist: [
      "Does the skill find direct competitor pages instead of only blog summaries?",
      "Does it group competitors by job-to-be-done rather than feature lists?",
      "Does it cite sources for every major claim?",
      "Does it end with a clear gap, risk, and next test?"
    ],
    testPrompt:
      "Find direct and indirect competitors for a website that recommends AI skills by task. Group them, cite sources, and identify the most defensible gap.",
    redFlags: [
      "Competitor list contains only famous generic AI tools",
      "No links to source pages",
      "No distinction between direct, indirect, and substitute products",
      "Analysis ends without a product implication"
    ],
    relatedLinks: [
      { href: "/best-ai-skills-for-research", label: "Research skill guide" },
      { href: "/skills/web-access", label: "web-access skill card" },
      { href: "/use-cases/best-skill-for-research-report", label: "Research report use case" },
      { href: "/submit", label: "Submit a competitor case" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for competitive analysis?",
        answer:
          "Use a skill that can browse current sources, compare competitors by user job, and turn evidence into a product recommendation."
      },
      {
        question: "Why not ask a general chatbot?",
        answer:
          "General chatbots often miss current competitors. Competitive analysis needs fresh browsing, citations, and uncertainty handling."
      },
      {
        question: "What should the output include?",
        answer:
          "A useful output includes competitor groups, positioning, proof links, gaps, risks, and a concrete next validation step."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-product-requirements",
    path: "/best-ai-skill-for-product-requirements",
    title: "Best AI Skill for Product Requirements",
    shortTitle: "Product requirements",
    description:
      "Pick an AI skill that turns rough product ideas into clear PRDs, user stories, constraints, and testable acceptance criteria.",
    answer:
      "The best AI skill for product requirements is one that clarifies the user job, narrows scope, identifies edge cases, and produces acceptance criteria engineers can actually use.",
    audience: [
      "PMs writing a first PRD from messy notes",
      "Founders turning an MVP idea into buildable scope",
      "AI builders handing specs to coding agents"
    ],
    recommendedSkillTypes: [
      {
        name: "Product discovery skill",
        fit: "Best for clarifying users, jobs, constraints, and success metrics."
      },
      {
        name: "Spec-writing skill",
        fit: "Best for turning decisions into user stories and acceptance criteria."
      },
      {
        name: "Code agent planning skill",
        fit: "Best when the PRD must map directly into implementation tasks."
      }
    ],
    decisionChecklist: [
      "Does it ask what must be excluded from the MVP?",
      "Does it turn vague ideas into observable user behavior?",
      "Does it include edge cases and non-goals?",
      "Can a coding agent implement from the output without guessing?"
    ],
    testPrompt:
      "Turn this idea into a one-page PRD: users paste two AI skill links and get a recommendation. Include MVP scope, non-goals, user stories, and acceptance criteria.",
    redFlags: [
      "Outputs a feature wishlist instead of a scoped PRD",
      "No non-goals or tradeoffs",
      "Acceptance criteria are vague",
      "No mention of data, moderation, or failure cases"
    ],
    relatedLinks: [
      { href: "/how-to-choose-ai-skills", label: "Skill selection checklist" },
      { href: "/use-cases/best-skill-for-frontend-landing-page", label: "Landing page use case" },
      { href: "/submit", label: "Submit a PRD task" }
    ],
    faqs: [
      {
        question: "Can an AI skill write a PRD?",
        answer:
          "Yes, but the best result comes when it first narrows the task, user, scope, and acceptance criteria instead of generating a generic template."
      },
      {
        question: "What makes a PRD skill useful?",
        answer:
          "It should expose assumptions, define non-goals, describe behavior, and make the output testable."
      },
      {
        question: "Should a PRD skill include technical details?",
        answer:
          "For MVP work, it should include implementation constraints and data needs, but avoid over-specifying architecture too early."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-user-research",
    path: "/best-ai-skill-for-user-research",
    title: "Best AI Skill for User Research",
    shortTitle: "User research",
    description:
      "Choose an AI skill for interview planning, survey synthesis, user quote clustering, and insight extraction.",
    answer:
      "Use a user research skill when you need structured questions, quote-level synthesis, and defensible insights rather than a generic summary.",
    audience: [
      "PMs preparing customer interviews",
      "Founders validating a painful workflow",
      "Researchers turning transcripts into insight themes"
    ],
    recommendedSkillTypes: [
      {
        name: "Interview planning skill",
        fit: "Best for writing unbiased questions and avoiding leading prompts."
      },
      {
        name: "Transcript synthesis skill",
        fit: "Best for clustering quotes, needs, objections, and behavior patterns."
      },
      {
        name: "Insight critique skill",
        fit: "Best for checking whether an insight is evidence-backed or only a hunch."
      }
    ],
    decisionChecklist: [
      "Does it avoid leading questions?",
      "Does it preserve raw quotes and context?",
      "Does it separate observations from interpretations?",
      "Does it produce next research questions?"
    ],
    testPrompt:
      "Create a 30-minute interview guide for users who struggle to choose AI skills. Include neutral questions, follow-ups, and what evidence each question is testing.",
    redFlags: [
      "Interview questions imply the solution",
      "Summaries have no quotes",
      "Insights are too broad to act on",
      "No distinction between one strong quote and repeated behavior"
    ],
    relatedLinks: [
      { href: "/how-to-choose-ai-skills", label: "Choosing AI skills" },
      { href: "/best-ai-skill-for-product-requirements", label: "Product requirements guide" },
      { href: "/submit", label: "Submit user research evidence" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for user interviews?",
        answer:
          "Choose a skill that writes neutral questions, maps questions to hypotheses, and helps synthesize evidence after the interview."
      },
      {
        question: "Can AI replace user research?",
        answer:
          "No. AI can structure and synthesize research, but real user behavior and quotes still need to come from users."
      },
      {
        question: "What should I test first?",
        answer:
          "Test the user job and current workaround before testing your solution or feature idea."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-seo-content",
    path: "/best-ai-skill-for-seo-content",
    title: "Best AI Skill for SEO Content",
    shortTitle: "SEO content",
    description:
      "Select an AI skill for search-intent research, long-tail page briefs, FAQ blocks, and machine-readable answer pages.",
    answer:
      "The best AI skill for SEO content starts from search intent, then creates a useful answer page with direct answers, internal links, FAQs, and evidence.",
    audience: [
      "Tool-site builders creating organic traffic pages",
      "Creators turning expertise into searchable articles",
      "Founders validating demand with long-tail pages"
    ],
    recommendedSkillTypes: [
      {
        name: "Search intent skill",
        fit: "Best for mapping what users are actually trying to solve."
      },
      {
        name: "Answer-page writing skill",
        fit: "Best for direct answers, comparison sections, and FAQ content."
      },
      {
        name: "Technical SEO skill",
        fit: "Best for metadata, sitemap, robots, JSON-LD, and crawlability."
      }
    ],
    decisionChecklist: [
      "Does the skill identify the real question behind the keyword?",
      "Does the page answer quickly before expanding?",
      "Does it add internal links to related tasks and guides?",
      "Does it avoid thin AI-generated filler?"
    ],
    testPrompt:
      "Create an SEO/AEO page brief for 'best AI skill for research report'. Include intent, short answer, headings, FAQ, internal links, and JSON-LD needs.",
    redFlags: [
      "Keyword stuffing",
      "No direct answer",
      "No useful examples or decision criteria",
      "FAQ questions are generic"
    ],
    relatedLinks: [
      { href: "/best-ai-skills-for-writing", label: "Writing skill guide" },
      { href: "/best-ai-skill-for-competitive-analysis", label: "Competitive analysis guide" },
      { href: "/submit", label: "Submit an SEO page idea" }
    ],
    faqs: [
      {
        question: "What makes an AI SEO skill good?",
        answer:
          "It understands search intent, creates a useful answer, adds internal links, and keeps the content specific enough to be cited."
      },
      {
        question: "Is AI-generated SEO content risky?",
        answer:
          "It is risky when it is thin, generic, or inaccurate. It is useful when grounded in real expertise, examples, and clear structure."
      },
      {
        question: "How does AEO differ from SEO content?",
        answer:
          "AEO focuses on making answers extractable by AI answer engines through direct answers, structured sections, and clear entity relationships."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-social-media-posts",
    path: "/best-ai-skill-for-social-media-posts",
    title: "Best AI Skill for Social Media Posts",
    shortTitle: "Social posts",
    description:
      "Choose an AI skill for turning product updates, notes, and launches into LinkedIn, X, Jike, and Xiaohongshu posts.",
    answer:
      "Use a channel-aware writing skill that preserves your point of view, adapts the hook to each platform, and avoids generic launch-post language.",
    audience: [
      "Builders announcing small product launches",
      "Creators repurposing one idea across platforms",
      "PMs building in public"
    ],
    recommendedSkillTypes: [
      {
        name: "Channel adaptation skill",
        fit: "Best for changing structure and hook by platform."
      },
      {
        name: "Voice-preserving rewrite skill",
        fit: "Best for keeping the post personal instead of corporate."
      },
      {
        name: "Launch copy skill",
        fit: "Best for explaining what changed, why it matters, and what to click."
      }
    ],
    decisionChecklist: [
      "Does it understand the platform's native format?",
      "Does it keep concrete details from the original work?",
      "Does it avoid fake virality claims?",
      "Does it include one clear next action?"
    ],
    testPrompt:
      "Turn this product update into four posts: LinkedIn, X, Jike, and Xiaohongshu. Keep the same core idea but adapt hook, length, and tone.",
    redFlags: [
      "Every platform gets the same post",
      "Too many hashtags",
      "Vague inspirational tone",
      "No link or concrete artifact"
    ],
    relatedLinks: [
      { href: "/best-ai-skills-for-writing", label: "Writing skill guide" },
      { href: "/best-ai-skill-for-seo-content", label: "SEO content guide" },
      { href: "/submit", label: "Submit a social post workflow" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for social posts?",
        answer:
          "Use a skill that adapts one idea to each platform while preserving voice, concrete details, and the main call to action."
      },
      {
        question: "Should I publish the same post everywhere?",
        answer:
          "No. The core idea can be reused, but the hook, length, formatting, and proof should match each platform."
      },
      {
        question: "How do I avoid AI-sounding social copy?",
        answer:
          "Keep specific details, remove exaggerated adjectives, and make the post explain a real artifact or lesson."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-slide-decks",
    path: "/best-ai-skill-for-slide-decks",
    title: "Best AI Skill for Slide Decks",
    shortTitle: "Slide decks",
    description:
      "Find an AI skill for turning notes into pitch decks, workshop decks, product decks, and editable presentations.",
    answer:
      "The best AI skill for slide decks creates a storyline first, then turns it into editable slides with clear hierarchy and low text density.",
    audience: [
      "Founders preparing pitch or demo decks",
      "PMs creating product review decks",
      "Speakers turning notes into presentation material"
    ],
    recommendedSkillTypes: [
      {
        name: "Narrative deck skill",
        fit: "Best for turning messy notes into a persuasive structure."
      },
      {
        name: "PowerPoint generation skill",
        fit: "Best when the final output must be editable in PowerPoint."
      },
      {
        name: "Web presentation skill",
        fit: "Best when animation and browser-based delivery matter."
      }
    ],
    decisionChecklist: [
      "Does it define the audience and desired decision?",
      "Does it create a storyline before slides?",
      "Are slides editable, not only images?",
      "Does each slide have one job?"
    ],
    testPrompt:
      "Turn this SkillFit project note into a 7-slide launch deck. Include storyline, slide titles, key bullets, and visual direction.",
    redFlags: [
      "Too many words on each slide",
      "Generic templates",
      "No argument flow",
      "Output cannot be edited"
    ],
    relatedLinks: [
      { href: "/use-cases/best-skill-for-presentation-generation", label: "Presentation use case" },
      { href: "/best-ai-skills-for-writing", label: "Writing guide" },
      { href: "/submit", label: "Submit a deck workflow" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for presentations?",
        answer:
          "Choose a skill that builds the narrative before designing slides, and outputs editable slides when possible."
      },
      {
        question: "Should slides be generated as images?",
        answer:
          "Images are useful for previews, but editable PowerPoint or HTML is better for real work."
      },
      {
        question: "How do I test a slide deck skill?",
        answer:
          "Give it rough notes and check whether it creates a coherent argument, readable slides, and usable export files."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-ui-design",
    path: "/best-ai-skill-for-ui-design",
    title: "Best AI Skill for UI Design",
    shortTitle: "UI design",
    description:
      "Choose an AI skill for landing pages, dashboards, visual systems, responsive layouts, and non-generic frontend design.",
    answer:
      "Use a frontend design skill when the task needs visual direction, responsive layout, interaction polish, and a UI that does not look like a generic template.",
    audience: [
      "Founders building an MVP interface",
      "PMs using AI to prototype product pages",
      "Developers who need stronger visual direction"
    ],
    recommendedSkillTypes: [
      {
        name: "Frontend design skill",
        fit: "Best for building memorable, responsive web pages from a product idea."
      },
      {
        name: "UI/UX critique skill",
        fit: "Best for finding hierarchy, accessibility, and flow problems."
      },
      {
        name: "Figma implementation skill",
        fit: "Best when a design source already exists and visual fidelity matters."
      }
    ],
    decisionChecklist: [
      "Does it ask what the page must make obvious in five seconds?",
      "Does it define typography, color, spacing, and responsive behavior?",
      "Does it avoid interchangeable SaaS templates?",
      "Does it produce code that can be shipped?"
    ],
    testPrompt:
      "Design a responsive landing page for SkillFit. The page should feel like a serious decision tool, not a generic AI SaaS template.",
    redFlags: [
      "Purple gradient boilerplate",
      "No mobile behavior",
      "Cards with no information hierarchy",
      "Pretty layout that does not explain the product"
    ],
    relatedLinks: [
      { href: "/use-cases/best-skill-for-frontend-landing-page", label: "Frontend landing page use case" },
      { href: "/skills/frontend-design", label: "frontend-design skill card" },
      { href: "/skills/ui-ux-pro-max", label: "ui-ux-pro-max skill card" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for UI design?",
        answer:
          "Use a frontend design skill when you need a responsive, polished, product-aware interface rather than isolated components."
      },
      {
        question: "When should I use a Figma implementation skill?",
        answer:
          "Use it when you already have Figma designs and need production code that matches the design."
      },
      {
        question: "How do I judge AI-generated UI?",
        answer:
          "Check whether the page communicates the product quickly, works on mobile, and uses visual hierarchy to guide action."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-documentation",
    path: "/best-ai-skill-for-documentation",
    title: "Best AI Skill for Documentation",
    shortTitle: "Documentation",
    description:
      "Pick an AI skill for writing docs, README files, onboarding guides, API explanations, and workflow manuals.",
    answer:
      "The best AI documentation skill explains what the user can do, shows the shortest working path, and keeps examples accurate to the current product or codebase.",
    audience: [
      "Builders documenting an open-source project",
      "PMs writing internal workflow docs",
      "Developers turning code into onboarding material"
    ],
    recommendedSkillTypes: [
      {
        name: "Codebase documentation skill",
        fit: "Best for README files, architecture notes, and setup guides."
      },
      {
        name: "Official docs lookup skill",
        fit: "Best when examples depend on current APIs or SDKs."
      },
      {
        name: "Workflow manual skill",
        fit: "Best for step-by-step operating procedures."
      }
    ],
    decisionChecklist: [
      "Does it inspect the actual source or workflow?",
      "Does it include prerequisites and verification steps?",
      "Does it avoid undocumented assumptions?",
      "Can a new user follow it without asking you?"
    ],
    testPrompt:
      "Write a README for a small Next.js tool site. Include what it does, setup, scripts, deployment, and how to add a new SEO guide page.",
    redFlags: [
      "Generic README with no project-specific commands",
      "Missing setup assumptions",
      "No verification step",
      "Examples do not match the code"
    ],
    relatedLinks: [
      { href: "/best-ai-skills-for-coding", label: "Coding skill guide" },
      { href: "/skills/openai-docs", label: "openai-docs skill card" },
      { href: "/submit", label: "Submit a documentation task" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for documentation?",
        answer:
          "Use a documentation skill that reads the real project context and writes task-based instructions with examples and verification steps."
      },
      {
        question: "Can AI write API docs?",
        answer:
          "Yes, but it should verify against official docs or source code when APIs may change."
      },
      {
        question: "What makes documentation useful?",
        answer:
          "Useful docs help the reader complete a real task quickly and know how to verify success."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-data-analysis",
    path: "/best-ai-skill-for-data-analysis",
    title: "Best AI Skill for Data Analysis",
    shortTitle: "Data analysis",
    description:
      "Choose an AI skill for CSV analysis, spreadsheet cleanup, charts, metric interpretation, and decision summaries.",
    answer:
      "Use a data analysis skill that can inspect the dataset, clean it carefully, show calculations, and turn results into a decision rather than only a chart.",
    audience: [
      "Operators analyzing growth or content metrics",
      "PMs checking experiment results",
      "Creators making sense of exported platform data"
    ],
    recommendedSkillTypes: [
      {
        name: "Spreadsheet analysis skill",
        fit: "Best for CSV cleanup, formulas, pivots, and Excel deliverables."
      },
      {
        name: "Charting skill",
        fit: "Best for making trends and comparisons visible."
      },
      {
        name: "Decision memo skill",
        fit: "Best for explaining what changed, why it matters, and what to do next."
      }
    ],
    decisionChecklist: [
      "Does it inspect columns and missing values first?",
      "Does it explain assumptions behind calculations?",
      "Does it show both numbers and interpretation?",
      "Does it avoid overclaiming from small samples?"
    ],
    testPrompt:
      "Analyze this exported content metrics CSV. Find top posts, weak spots, possible causes, and three practical next actions.",
    redFlags: [
      "Charts without interpretation",
      "No data cleaning notes",
      "Confuses correlation with causation",
      "Ignores sample size"
    ],
    relatedLinks: [
      { href: "/how-to-choose-ai-skills", label: "Choosing AI skills" },
      { href: "/best-ai-skill-for-seo-content", label: "SEO content guide" },
      { href: "/submit", label: "Submit a data analysis case" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for data analysis?",
        answer:
          "Choose a skill that can clean data, show calculations, visualize patterns, and explain what decision the numbers support."
      },
      {
        question: "Can AI analyze spreadsheets?",
        answer:
          "Yes. It is useful for cleanup, formulas, charts, and summaries, but important decisions still need human review."
      },
      {
        question: "How should I test a data analysis skill?",
        answer:
          "Give it a small messy CSV and check whether it documents cleaning steps, assumptions, and conclusions."
      }
    ]
  },
  {
    slug: "best-ai-skill-for-ai-agent-workflows",
    path: "/best-ai-skill-for-ai-agent-workflows",
    title: "Best AI Skill for AI Agent Workflows",
    shortTitle: "Agent workflows",
    description:
      "Choose an AI skill for building repeatable agent workflows, multi-step automations, and reusable operating procedures.",
    answer:
      "The best AI skill for agent workflows turns a repeated task into a clear procedure with inputs, tools, safety boundaries, checkpoints, and reusable outputs.",
    audience: [
      "AI-native PMs building personal workflows",
      "Operators automating recurring research or publishing tasks",
      "Builders packaging prompts and tools into reusable skills"
    ],
    recommendedSkillTypes: [
      {
        name: "Workflow design skill",
        fit: "Best for decomposing a repeated task into stable steps."
      },
      {
        name: "Skill creation skill",
        fit: "Best for packaging instructions, scripts, and examples into a reusable skill."
      },
      {
        name: "Browser automation skill",
        fit: "Best when the workflow touches logged-in websites or dynamic pages."
      }
    ],
    decisionChecklist: [
      "Does it define inputs, outputs, and stopping criteria?",
      "Does it identify risky actions that need confirmation?",
      "Does it reuse scripts or tools instead of relying on memory?",
      "Can the workflow be repeated by another agent?"
    ],
    testPrompt:
      "Design a repeatable workflow for publishing a small website launch across LinkedIn, Jike, Xiaohongshu, and a personal blog. Include checkpoints and confirmation boundaries.",
    redFlags: [
      "Workflow depends on vague memory",
      "No confirmation boundary for public posting",
      "No verification after publishing",
      "Cannot be reused next week"
    ],
    relatedLinks: [
      { href: "/ai-skill-marketplace-list", label: "AI skill marketplace list" },
      { href: "/skills/skill-creator", label: "skill-creator skill card" },
      { href: "/submit", label: "Submit an agent workflow" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for agent workflows?",
        answer:
          "Use a workflow design or skill creation skill that turns repeated work into a clear procedure with tools, checkpoints, and safety rules."
      },
      {
        question: "When should I make a workflow into a skill?",
        answer:
          "When you repeat the same task often and want future agents to follow a stable process without re-explaining everything."
      },
      {
        question: "What makes an agent workflow safe?",
        answer:
          "A safe workflow marks destructive actions, public posting, payments, uploads, and sensitive data transmission as confirmation points."
      }
    ]
  }
];

export const dynamicSeoGuides = seoGuides.filter(
  (guide) => !manualSeoGuideRouteSlugs.includes(guide.slug)
);

export function getSeoGuide(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}
