import type { Arena, Skill, UseCase } from "@/lib/types";

export const useCases: UseCase[] = [
  {
    slug: "best-skill-for-frontend-landing-page",
    title: "Best Skill for Frontend Landing Page",
    shortTitle: "Frontend landing page",
    description:
      "Find a Skill that can turn a product idea into a polished, responsive landing page with credible copy and visual hierarchy.",
    seoTitle: "Best AI Skill for Frontend Landing Pages",
    seoDescription:
      "Compare frontend-design, ui-ux-pro-max, and implement-design for AI landing page design, frontend UI, responsive layout, and conversion copy.",
    answer:
      "Use frontend-design when you need a polished first version, ui-ux-pro-max when the main risk is UX quality, and implement-design when you already have a Figma source to reproduce.",
    userIntent: "I need a launch-ready landing page, not just generic component code.",
    requiredCapabilities: [
      "Strong visual direction",
      "Responsive layout",
      "Conversion-oriented copy",
      "Clean React or HTML output",
      "Can explain design tradeoffs"
    ],
    recommendedSkills: ["frontend-design", "ui-ux-pro-max", "implement-design"],
    alternatives: ["copywriting", "brand-guidelines", "canvas-design"],
    avoidWhen: [
      "You only need a backend API",
      "You already have strict Figma specs and need pixel-perfect implementation"
    ],
    testPack: {
      input:
        "A new product called SkillFit helps users find the right AI Agent Skill for a specific task.",
      successCriteria: [
        "Hero message is clear in 5 seconds",
        "Page includes a task input CTA",
        "Mobile layout is readable",
        "Design feels like a serious tool, not an AI template"
      ],
      failureSignals: [
        "Purple gradient SaaS boilerplate",
        "No clear use case",
        "Cards look interchangeable",
        "No responsive behavior"
      ]
    },
    keywords: ["frontend skill", "landing page skill", "ai web design skill"],
    relatedLinks: [
      {
        href: "/arena/frontend-design-vs-ui-ux-pro-max-landing-page",
        label: "frontend-design vs ui-ux-pro-max arena"
      },
      { href: "/skills/frontend-design", label: "frontend-design Skill Review" },
      { href: "/skills/ui-ux-pro-max", label: "ui-ux-pro-max Skill Review" },
      { href: "/best-ai-skill-for-ui-design", label: "AI UI design skill guide" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for a frontend landing page?",
        answer:
          "frontend-design is the strongest first choice when you need visual direction, responsive layout, and a shippable landing page concept."
      },
      {
        question: "Should I use frontend-design or ui-ux-pro-max?",
        answer:
          "Use frontend-design for a new page concept. Use ui-ux-pro-max when you already have a page or flow and need structured UX critique."
      },
      {
        question: "When is implement-design the better choice?",
        answer:
          "Use implement-design when a Figma or visual source already exists and the job is fidelity, component structure, and implementation handoff."
      }
    ]
  },
  {
    slug: "best-skill-for-wechat-article-rewrite",
    title: "Best Skill for WeChat Article Rewrite and Insights",
    shortTitle: "WeChat article insights",
    description:
      "Choose a Skill that can transform source material into Chinese WeChat article insights, structure, judgment, and less AI flavor.",
    seoTitle: "Best AI Skill for WeChat Article Insights",
    seoDescription:
      "Choose a WeChat article insights skill for Chinese article rewrite, source fidelity, publishable structure, headlines, and point-of-view editing.",
    answer:
      "Use a copywriting skill for the publishable rewrite, then add marketing-psychology when the WeChat article needs a sharper hook, reader motivation, and stronger editorial angle.",
    userIntent:
      "I want publishable Chinese content and WeChat article insights with point of view, not a literal summary.",
    requiredCapabilities: [
      "Source fidelity",
      "Chinese editorial structure",
      "Headline generation",
      "Personalized commentary",
      "Low hallucination risk"
    ],
    recommendedSkills: ["copywriting", "marketing-psychology", "web-access"],
    alternatives: ["openai-docs", "skill-creator", "brand-guidelines"],
    avoidWhen: ["You need legal/medical accuracy without human review"],
    testPack: {
      input: "A 2,000-word English article about AI agents changing software distribution.",
      successCriteria: [
        "Keeps the original thesis",
        "Adds clear Chinese framing",
        "Avoids invented facts",
        "Produces a coherent WeChat structure"
      ],
      failureSignals: ["Overly salesy headline", "Fact drift", "Generic AI wording"]
    },
    keywords: [
      "wechat article insights",
      "wechat writing skill",
      "chinese rewrite skill",
      "公众号改写 skill"
    ],
    relatedLinks: [
      { href: "/best-ai-skills-for-writing", label: "AI writing skill guide" },
      { href: "/arena/copywriting-vs-marketing-psychology-wechat", label: "WeChat rewrite arena" },
      { href: "/skills/copywriting", label: "copywriting Skill Review" },
      { href: "/skills/marketing-psychology", label: "marketing-psychology Skill Review" }
    ],
    faqs: [
      {
        question: "What is a WeChat article insights skill?",
        answer:
          "It is an AI skill for turning source material into a Chinese WeChat article with useful insights, structure, headlines, and editorial judgment."
      },
      {
        question: "What makes a WeChat rewrite useful?",
        answer:
          "A useful rewrite keeps source meaning, adds a clear Chinese framing, avoids invented facts, and sounds publishable rather than machine-translated."
      },
      {
        question: "Which skills should I compare for WeChat article insights?",
        answer:
          "Compare copywriting for sentence-level and structural polish, marketing-psychology for hook and persuasion angle, and web-access when the article needs current source checks."
      }
    ]
  },
  {
    slug: "best-skill-for-research-report",
    title: "Best Skill for Research Report",
    shortTitle: "Research report",
    description:
      "Find a Skill that can gather sources, separate evidence from opinion, and produce a decision-ready research memo.",
    seoTitle: "Best AI Skill for Research Reports",
    seoDescription:
      "Choose an AI research report skill for web research, source attribution, competitor analysis, evidence synthesis, and decision-ready memos.",
    answer:
      "Use web-access when freshness, citations, and competitor discovery matter; pair it with an official docs skill when the research depends on primary product or API documentation.",
    userIntent: "I need a structured answer with sources, uncertainty, and recommendations.",
    requiredCapabilities: [
      "Web research",
      "Source attribution",
      "Evidence synthesis",
      "Competitive analysis",
      "Clear recommendations"
    ],
    recommendedSkills: ["web-access", "openai-docs", "skill-creator"],
    alternatives: ["marketing-psychology", "copywriting", "lark-doc"],
    avoidWhen: ["You need private paid databases that are not accessible"],
    testPack: {
      input: "Research whether a Skill recommendation website already exists.",
      successCriteria: [
        "Uses current sources",
        "Groups competitors logically",
        "States gaps and risks",
        "Links to references"
      ],
      failureSignals: ["No source links", "Overgeneralized claims", "Outdated facts"]
    },
    keywords: ["research skill", "web research agent skill", "competitive analysis skill"],
    relatedLinks: [
      { href: "/best-ai-skills-for-research", label: "Best AI researcher skills" },
      { href: "/best-ai-skill-for-competitive-analysis", label: "Competitor analysis skill guide" },
      { href: "/skills/web-access", label: "web-access Skill Review" },
      { href: "/arena/web-access-vs-openai-docs-research-report", label: "web-access vs openai-docs arena" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for a research report?",
        answer:
          "web-access is the best first choice when the report needs current sources, competitor discovery, citations, and uncertainty handling."
      },
      {
        question: "How should I test an AI research skill?",
        answer:
          "Give it a current topic, require source links, ask it to separate facts from interpretation, then verify whether the recommendation follows from the cited evidence."
      },
      {
        question: "When should I use an official docs skill instead?",
        answer:
          "Use an official docs skill when the answer depends on primary documentation such as API behavior, model availability, or product instructions."
      }
    ]
  },
  {
    slug: "best-skill-for-code-review",
    title: "Best Skill for Code Review",
    shortTitle: "Code review",
    description:
      "Pick a Skill that can review code changes for bugs, regressions, missing tests, and maintainability risks.",
    userIntent: "I need a practical engineering review, not a style-only critique.",
    requiredCapabilities: [
      "Diff understanding",
      "Bug detection",
      "Test gap identification",
      "Security awareness",
      "Actionable severity ordering"
    ],
    recommendedSkills: ["skill-creator", "openai-docs", "web-access"],
    alternatives: ["ui-ux-pro-max", "frontend-design", "plugin-creator"],
    avoidWhen: ["You expect it to replace CI or security scanning entirely"],
    testPack: {
      input: "A pull request that changes auth state and API error handling.",
      successCriteria: [
        "Finds behavior regressions",
        "Separates critical bugs from style notes",
        "Suggests tests",
        "Uses file/line references"
      ],
      failureSignals: ["Only praises code", "No concrete references", "Misses edge cases"]
    },
    keywords: ["code review skill", "AI code review agent", "Claude Code review skill"]
  },
  {
    slug: "best-skill-for-presentation-generation",
    title: "Best Skill for Presentation Generation",
    shortTitle: "Presentation generation",
    description:
      "Find a Skill that can turn messy notes into a coherent, editable deck or web presentation.",
    seoTitle: "Best AI Skill for Presentation Generation and Slide Decks",
    seoDescription:
      "Compare AI presentation generation skills for slide decks, editable PowerPoint, web presentations, narrative structure, and export workflows.",
    answer:
      "Use PowerPoint when the final deck must be editable PPTX; use frontend-slides when browser-based animation and web delivery matter.",
    userIntent: "I need slides that tell a clear story and can be edited later.",
    requiredCapabilities: [
      "Narrative structure",
      "Editable output",
      "Slide visual hierarchy",
      "Chart and table support",
      "Export workflow"
    ],
    recommendedSkills: ["powerpoint", "frontend-slides", "copywriting"],
    alternatives: ["canvas-design", "brand-guidelines", "speaker-event-poster"],
    avoidWhen: ["You need pixel-perfect brand compliance without guidelines"],
    testPack: {
      input: "A rough 1,000-word product idea note for SkillFit.",
      successCriteria: [
        "Clear storyline",
        "Useful sectioning",
        "Editable deck output",
        "Readable on projector"
      ],
      failureSignals: ["Too many words per slide", "Generic templates", "No narrative arc"]
    },
    keywords: ["presentation skill", "AI deck skill", "PowerPoint agent skill"],
    relatedLinks: [
      { href: "/best-ai-skill-for-slide-decks", label: "AI slide deck skill guide" },
      { href: "/skills/powerpoint", label: "PowerPoint Skill Review" },
      { href: "/skills/frontend-slides", label: "frontend-slides Skill Review" }
    ],
    faqs: [
      {
        question: "What is the best AI skill for presentation generation?",
        answer:
          "Use a slide deck skill that creates the storyline before slides, keeps text density low, and outputs editable PowerPoint or web presentation files."
      },
      {
        question: "Should I use PowerPoint or frontend-slides?",
        answer:
          "Use PowerPoint when stakeholders need editable PPTX files. Use frontend-slides when animation, browser playback, or web-native delivery matters more."
      },
      {
        question: "How do I test an AI slide deck skill?",
        answer:
          "Give it messy notes, require a 7-slide outline, check whether each slide has one job, then verify that the export can be edited."
      }
    ]
  }
];

export const skills: Skill[] = [
  {
    slug: "frontend-design",
    name: "frontend-design",
    tagline: "frontend-design skill for landing pages, web UI, visual direction, and responsive frontend layouts.",
    seoTitle: "frontend-design Skill Review: AI Frontend Design and Landing Pages",
    seoDescription:
      "Review the frontend-design skill for AI frontend design, landing pages, web UI, visual direction, responsive layout, and task-fit design work.",
    category: "Design & frontend",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["frontend design skill selection", "Landing pages", "Web UI"],
    notFor: ["Backend-only work", "Pixel-perfect Figma execution"],
    audienceNotes: [
      "Founders and builders who need a shippable landing page concept before implementation",
      "PMs comparing frontend-design, ui-ux-pro-max, and implement-design for a web UI task",
      "Teams that need visual hierarchy, responsive layout, and credible first-screen copy"
    ],
    evidenceNotes: [
      "Search Console is already showing impressions for frontend design, frontend design skill, and frontend-design skill queries.",
      "The strongest validation should come from before/after landing pages, responsive screenshots, and measurable first-screen clarity improvements."
    ],
    safetyNotes: [
      "Visual design output still needs accessibility, brand, and production QA before launch.",
      "Use implement-design instead when the job is reproducing an existing Figma or screenshot with high fidelity."
    ],
    usagePrompt:
      "Create a production-grade landing page concept for this AI tool. Prioritize first-screen clarity, responsive layout, credible copy, visual hierarchy, and a concise CTA. Explain when ui-ux-pro-max or implement-design would be a better follow-up.",
    faqs: [
      {
        question: "What is frontend-design best for?",
        answer:
          "frontend-design is best for AI frontend design, landing pages, web UI concepts, responsive layouts, and visual direction when a new page needs to feel shippable."
      },
      {
        question: "Should I use frontend-design or ui-ux-pro-max?",
        answer:
          "Use frontend-design when you need a new visual direction or landing page concept. Use ui-ux-pro-max when the page already exists and needs structured UX critique."
      },
      {
        question: "Should I use frontend-design or implement-design?",
        answer:
          "Use frontend-design for open-ended page creation. Use implement-design when a Figma file, screenshot, or reference UI already exists and fidelity is the main requirement."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-frontend-landing-page",
        label: "Recommended",
        note: "Strongest fit when visual quality and memorable direction matter."
      }
    ]
  },
  {
    slug: "ui-ux-pro-max",
    name: "ui-ux-pro-max",
    tagline:
      "UI UX Pro Max skill for UX critique, dashboards, design systems, and product interface review.",
    seoTitle: "ui-ux-pro-max Skill Review: UI UX Pro Max for UX Design",
    seoDescription:
      "Review the ui-ux-pro-max skill for UI/UX critique, dashboards, design systems, frontend design decisions, and task-fit UX review.",
    category: "Design & UX",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["UI UX Pro Max skill selection", "UX critique", "Dashboards"],
    notFor: ["Deep backend implementation", "Pixel-perfect implementation without a design source"],
    audienceNotes: [
      "Founders and PMs comparing interface concepts before implementation",
      "Builders who need a structured UX critique of a page, dashboard, or flow",
      "Teams deciding between ui-ux-pro-max, frontend-design, and implement-design"
    ],
    evidenceNotes: [
      "Search Console is already showing impressions for ui ux pro max and ui ux pro max skill queries, but the page needs stronger exact-match context.",
      "The strongest evidence should come from before/after UX reviews, dashboard critiques, and design-system recommendations."
    ],
    usagePrompt:
      "Review this dashboard or landing page for hierarchy, clarity, accessibility, interaction friction, and mobile behavior. Rank the top five UX fixes and explain which one should ship first.",
    faqs: [
      {
        question: "What is the ui-ux-pro-max skill best for?",
        answer:
          "ui-ux-pro-max is best for UI/UX critique, dashboards, design systems, interaction review, and deciding what should change before frontend implementation."
      },
      {
        question: "When should I use ui-ux-pro-max instead of frontend-design?",
        answer:
          "Use ui-ux-pro-max when you need structured UX review and flow critique. Use frontend-design when you need a stronger visual direction or a shippable page concept."
      },
      {
        question: "Can ui-ux-pro-max implement the design?",
        answer:
          "Treat it as a design intelligence and critique skill first. Pair it with frontend-design or implement-design when you need production code."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-frontend-landing-page",
        label: "Recommended",
        note: "Good when UX structure matters more than one-off visual flair."
      }
    ]
  },
  {
    slug: "implement-design",
    name: "implement-design",
    tagline: "implement-design skill for Figma to code, visual fidelity, and frontend handoff.",
    seoTitle: "implement-design Skill Review: Figma to Code and Design Implementation",
    seoDescription:
      "Review the implement-design skill for Figma to code, design implementation, visual fidelity, component structure, and frontend handoff tasks.",
    category: "Design implementation",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires Figma context",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Figma to code", "Design implementation", "Component implementation"],
    notFor: ["Open-ended design without references"],
    audienceNotes: [
      "Builders searching for an implement design skill after a visual source already exists",
      "Frontend teams converting Figma, screenshots, or reference UI into production code",
      "PMs who care more about fidelity and handoff quality than a new visual direction"
    ],
    evidenceNotes: [
      "Search Console is already showing impressions for implement design, design implement, and design and implement queries.",
      "The skill should be judged on visual fidelity, responsive behavior, component structure, and whether the implementation matches the design source."
    ],
    safetyNotes: [
      "Implementation still needs human review for accessibility, data wiring, and product-specific edge cases.",
      "Do not use it as a substitute for design discovery when there is no source mockup or clear visual direction."
    ],
    usagePrompt:
      "Implement this Figma or screenshot reference as production-ready frontend code. Preserve visual hierarchy, spacing, responsive behavior, and component structure. Call out any assets, states, or interactions that are missing from the design.",
    faqs: [
      {
        question: "What is implement-design best for?",
        answer:
          "implement-design is best for Figma to code, design implementation, component structure, visual fidelity, and frontend handoff when a design source already exists."
      },
      {
        question: "Should I use implement-design or frontend-design?",
        answer:
          "Use implement-design when you already have a Figma file, screenshot, or reference UI to reproduce. Use frontend-design when you need a new visual direction or landing page concept."
      },
      {
        question: "Can implement-design create a design from scratch?",
        answer:
          "It can help with implementation decisions, but it is strongest when the source design is already defined. For open-ended exploration, start with frontend-design or ui-ux-pro-max."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-frontend-landing-page",
        label: "Consider",
        note: "Best when design source already exists."
      }
    ]
  },
  {
    slug: "copywriting",
    name: "copywriting",
    tagline: "Rewrites and improves marketing copy for pages and campaigns.",
    category: "Writing",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["Landing page copy", "Messaging", "Headlines"],
    notFor: ["Highly regulated factual claims without review"],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-wechat-article-rewrite",
        label: "Recommended",
        note: "Useful for tone, hooks, and sharper positioning."
      },
      {
        useCaseSlug: "best-skill-for-presentation-generation",
        label: "Consider",
        note: "Useful for narrative and slide titles."
      }
    ]
  },
  {
    slug: "marketing-psychology",
    name: "marketing-psychology",
    tagline:
      "marketing-psychology skill for persuasion angles, user motivation, campaign strategy, and stronger hooks.",
    seoTitle: "marketing-psychology Skill Review: Persuasion Angles and Campaign Strategy",
    seoDescription:
      "Review the marketing-psychology skill for persuasion angles, user motivation, campaign strategy, WeChat article hooks, and marketing message critique.",
    category: "Strategy",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "low",
    bestFor: ["marketing psy skill selection", "Persuasion angles", "User motivation"],
    notFor: ["Raw factual research"],
    audienceNotes: [
      "Creators improving hooks, framing, and reader motivation after the factual draft exists",
      "Founders and PMs checking whether a landing page or WeChat article has a clear persuasion path",
      "Teams using copywriting first and marketing-psychology as the second-pass strategy layer"
    ],
    evidenceNotes: [
      "Search Console is already showing impressions for marketing psy skill queries.",
      "The skill should be evaluated on whether it makes the audience, objection, motivation, and call to action more specific."
    ],
    safetyNotes: [
      "Use it for positioning and motivation, not for inventing proof points or manipulating high-stakes decisions.",
      "Pair with web-access or source review when claims, numbers, or current market facts matter."
    ],
    usagePrompt:
      "Review this launch page or WeChat article draft. Identify the target reader, main motivation, likely objection, persuasion gap, and the three highest-leverage copy changes.",
    faqs: [
      {
        question: "What is marketing-psychology best for?",
        answer:
          "marketing-psychology is best for persuasion angles, user motivation, campaign strategy, hooks, objections, and message critique after the factual draft exists."
      },
      {
        question: "Should I use marketing-psychology or copywriting?",
        answer:
          "Use copywriting to produce or rewrite the text. Use marketing-psychology as a second pass when the message needs sharper motivation, objections, hooks, or positioning."
      },
      {
        question: "How do I test a marketing psychology skill?",
        answer:
          "Give it one page or article draft and ask for the target reader, motivation, objection, persuasion gap, and three concrete rewrites."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-wechat-article-rewrite",
        label: "Consider",
        note: "Good as a second-pass strategy layer."
      }
    ]
  },
  {
    slug: "web-access",
    name: "web-access",
    tagline:
      "web-access skill for live web research, dynamic pages, current sources, and competitor discovery.",
    seoTitle: "web-access Skill Review: Live Web Research and Dynamic Pages",
    seoDescription:
      "Review the web-access skill for live web research, dynamic pages, source-backed reports, competitor discovery, and current AI agent research tasks.",
    category: "Research",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Enable a browser-capable agent environment, then run the Skill on a concrete research task.",
    sourceStatus: "Runtime dependent",
    lastVerified: "2026-04-30",
    supportedAgents: ["Codex", "Browser-capable coding agents", "Local AI agent workflows"],
    installMethods: [
      "Agent skill manager",
      "Local skill file",
      "Manual workflow import"
    ],
    evidenceLevel: "B",
    safetyLevel: "medium",
    bestFor: [
      "web-access skill research",
      "Competitor discovery",
      "Source reading",
      "Market and product memos"
    ],
    notFor: [
      "Offline-only workflows",
      "Private account research without explicit permission",
      "Final legal, medical, financial, or compliance decisions"
    ],
    audienceNotes: [
      "PMs and founders validating a market, competitor set, or product angle",
      "Creators turning scattered sources into a sourced article or thread",
      "Independent builders who need current docs, pricing, or ecosystem facts before coding"
    ],
    evidenceNotes: [
      "Google Search Console is already surfacing this page for web-access skill and web access skill queries, making it the strongest early SEO validation target.",
      "The Skill is best validated on tasks where freshness matters: competitor research, pricing checks, product docs, and source-backed summaries.",
      "Evidence level should move from B to A only after SkillFit collects public output samples and repeatable test results."
    ],
    safetyNotes: [
      "Live web pages change, so important claims should include source links and a retrieval date.",
      "Do not enter secrets, private customer data, or paid-account information unless the runtime and permissions are trusted.",
      "For high-stakes topics, use web-access to gather sources, then require human review before acting."
    ],
    usagePrompt:
      "Research whether a task-to-Skill recommendation site already exists. Find current competitors, cite sources, separate direct competitors from substitutes, and end with the most defensible product gap.",
    faqs: [
      {
        question: "What is web-access best for?",
        answer:
          "web-access is best for AI agent tasks that need current web sources, dynamic pages, competitor discovery, or source-backed research."
      },
      {
        question: "Is web-access a web research skill?",
        answer:
          "Yes. Treat web-access as a web research skill for live pages, current documentation, search results, competitor pages, and source-backed summaries."
      },
      {
        question: "When should I avoid web-access?",
        answer:
          "Avoid it when the task is offline, when browsing private accounts would expose sensitive data, or when a high-stakes answer needs expert review."
      },
      {
        question: "How do I test web-access quickly?",
        answer:
          "Give it a current research task, require source links, ask it to state uncertainty, then verify whether the links and recommendation match."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-research-report",
        label: "Recommended",
        note: "Best fit when current sources and citations matter."
      }
    ]
  },
  {
    slug: "openai-docs",
    name: "openai-docs",
    tagline: "openai-docs skill for official OpenAI docs, API references, model behavior, and SDK guidance.",
    seoTitle: "openai-docs Skill Review: Official OpenAI Docs and API Help",
    seoDescription:
      "Review the openai-docs skill for official OpenAI documentation, API references, model behavior, SDK guidance, and current implementation answers.",
    category: "Technical docs",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["OpenAI docs lookup", "OpenAI API questions", "Model selection"],
    notFor: ["Non-OpenAI product research"],
    audienceNotes: [
      "Developers checking current OpenAI API behavior before coding",
      "AI builders comparing model capabilities, SDK examples, or migration details",
      "Reviewers who need official documentation instead of stale blog summaries"
    ],
    evidenceNotes: [
      "Search Console is already showing impressions for openai docs, open ai docs, and open ai documentation queries.",
      "The skill should be evaluated on whether it cites official OpenAI pages and distinguishes current documentation from memory."
    ],
    safetyNotes: [
      "For OpenAI product behavior, rely on official docs and verify against the live API when the answer affects production code.",
      "Do not use it for unrelated product research where broader web-access discovery is required."
    ],
    usagePrompt:
      "Answer this OpenAI API implementation question using official OpenAI documentation only. Link the relevant docs, quote the key constraint in your own words, and state what still needs to be tested in code.",
    faqs: [
      {
        question: "What is openai-docs best for?",
        answer:
          "openai-docs is best for official OpenAI documentation lookup, API behavior, SDK usage, model capability checks, and current implementation answers."
      },
      {
        question: "Should I use openai-docs or web-access?",
        answer:
          "Use openai-docs when the answer should come from official OpenAI docs. Use web-access when the task needs broader current web research, competitor pages, or non-OpenAI sources."
      },
      {
        question: "How should I test openai-docs?",
        answer:
          "Ask a concrete API question, require official docs links, then verify whether the cited page actually supports the implementation recommendation."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-research-report",
        label: "Recommended",
        note: "Strong for official API and model documentation."
      },
      {
        useCaseSlug: "best-skill-for-code-review",
        label: "Consider",
        note: "Useful when review touches OpenAI SDK usage."
      }
    ]
  },
  {
    slug: "skill-creator",
    name: "skill-creator",
    tagline: "Guides creation or improvement of Codex skills.",
    category: "Skill building",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["Writing SKILL.md", "Skill workflows", "Agent capability packaging"],
    notFor: ["General web app UX"],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-code-review",
        label: "Consider",
        note: "Good for reviewing skill structure, not generic code bugs."
      }
    ]
  },
  {
    slug: "powerpoint",
    name: "PowerPoint",
    tagline: "PowerPoint skill for editable PPTX slide decks, presentation generation, rendering, and export workflows.",
    seoTitle: "PowerPoint Skill Review: Editable PPTX and AI Slide Decks",
    seoDescription:
      "Review the PowerPoint skill for AI slide decks, editable PPTX generation, presentation rendering, export workflows, and deck verification.",
    category: "Slides",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires local presentation tooling",
    evidenceLevel: "B",
    safetyLevel: "medium",
    bestFor: ["Editable PPTX", "AI slide decks", "Export workflows"],
    notFor: ["Pure web presentations"],
    audienceNotes: [
      "Teams that need editable PowerPoint files instead of static slide images",
      "Founders and PMs turning product notes into review decks, launch decks, or investor-style narratives",
      "Operators who need rendering, export, and verification around presentation files"
    ],
    evidenceNotes: [
      "Search Console is showing near-page-one impressions for slide deck and presentation generation pages.",
      "The skill should be evaluated on editability, slide hierarchy, export reliability, and whether the deck tells a coherent story."
    ],
    safetyNotes: [
      "Check exported files manually before sending to customers, investors, or executives.",
      "Use brand-guidelines when strict brand compliance matters."
    ],
    usagePrompt:
      "Turn these messy product notes into a 7-slide editable PowerPoint deck. Include a storyline, slide titles, concise bullets, speaker intent, and export verification steps.",
    faqs: [
      {
        question: "What is PowerPoint best for?",
        answer:
          "PowerPoint is best for editable PPTX slide decks, presentation generation, deck rendering, export workflows, and files that stakeholders need to revise."
      },
      {
        question: "Should I use PowerPoint or frontend-slides?",
        answer:
          "Use PowerPoint when editable PPTX is required. Use frontend-slides when the presentation should be web-native, animated, or browser-delivered."
      },
      {
        question: "How do I test a PowerPoint skill?",
        answer:
          "Give it rough notes, require a short deck structure, export the file, then verify editability, readability, and whether each slide has one clear job."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-presentation-generation",
        label: "Recommended",
        note: "Best when editable PPTX is the target output."
      }
    ]
  },
  {
    slug: "frontend-slides",
    name: "frontend-slides",
    tagline: "frontend-slides skill for web presentations, animated HTML decks, browser delivery, and launch talks.",
    seoTitle: "frontend-slides Skill Review: Animated HTML Presentations",
    seoDescription:
      "Review the frontend-slides skill for animated HTML presentations, web decks, browser-based talks, pitch pages, and launch storytelling.",
    category: "Slides",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "low",
    bestFor: ["Web presentations", "Animated HTML decks", "Pitch pages"],
    notFor: ["Corporate PPTX-only workflows"],
    audienceNotes: [
      "Creators and builders presenting a product story in the browser",
      "Teams that want animation-rich web decks instead of static PowerPoint files",
      "Speakers who need a launch talk, demo narrative, or pitch page"
    ],
    evidenceNotes: [
      "frontend-slides should be judged on narrative clarity, responsive slide framing, animation quality, and browser playback reliability.",
      "Pair with PowerPoint when stakeholders also need an editable PPTX deliverable."
    ],
    safetyNotes: [
      "Verify readability on projector and mobile viewports before presenting.",
      "Avoid it when a corporate workflow requires editable PPTX as the final artifact."
    ],
    usagePrompt:
      "Create an animated HTML presentation from these launch notes. Build a clear storyline, readable sections, restrained motion, and browser-ready delivery.",
    faqs: [
      {
        question: "What is frontend-slides best for?",
        answer:
          "frontend-slides is best for animated HTML presentations, web decks, pitch pages, browser-based talks, and launch storytelling."
      },
      {
        question: "Should I use frontend-slides or PowerPoint?",
        answer:
          "Use frontend-slides for web-native delivery and animation. Use PowerPoint when the final artifact must be editable PPTX."
      },
      {
        question: "How do I test frontend-slides?",
        answer:
          "Give it launch notes, require a browser presentation, then verify responsive framing, readability, motion, and whether the story is clear."
      }
    ],
    fitMap: [
      {
        useCaseSlug: "best-skill-for-presentation-generation",
        label: "Recommended",
        note: "Strong fit when a web-native presentation is acceptable."
      }
    ]
  },
  {
    slug: "brand-guidelines",
    name: "brand-guidelines",
    tagline: "Applies official brand colors and typography to artifacts.",
    category: "Brand",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "low",
    bestFor: ["Brand consistency", "Visual formatting", "Design polish"],
    notFor: ["Unbranded exploration"],
    fitMap: []
  },
  {
    slug: "canvas-design",
    name: "canvas-design",
    tagline: "Creates static visual art in PNG and PDF documents.",
    category: "Visual design",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires image/document generation stack",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Posters", "Static designs", "Visual concepts"],
    notFor: ["Interactive websites"],
    fitMap: []
  },
  {
    slug: "speaker-event-poster",
    name: "speaker-event-poster",
    tagline: "Creates poster-family outputs for offline speaker events.",
    category: "Event design",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Event posters", "Founder meetups", "Guest-sharing events"],
    notFor: ["Generic slide decks"],
    fitMap: []
  },
  {
    slug: "remotion-best-practices",
    name: "remotion-best-practices",
    tagline: "Best practices for Remotion video creation in React.",
    category: "Video engineering",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires Remotion project context",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["React video", "Remotion architecture", "Video code review"],
    notFor: ["No-code video editing"],
    fitMap: []
  },
  {
    slug: "key-visual-finder",
    name: "key-visual-finder",
    tagline: "Finds poster-scale key visuals and supporting visual motifs.",
    category: "Creative research",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires web/source access",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Hero images", "Poster anchors", "KV references"],
    notFor: ["Final vector logo systems"],
    fitMap: []
  },
  {
    slug: "video-wrapper",
    name: "video-wrapper",
    tagline: "Adds variety-show style effects to interview videos.",
    category: "Video post-production",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires video assets and rendering environment",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Interview effects", "Subtitles", "Chapter cards"],
    notFor: ["Raw footage capture"],
    fitMap: []
  },
  {
    slug: "excel",
    name: "Excel",
    tagline: "Creates, modifies, analyzes, and visualizes spreadsheet files.",
    category: "Data productivity",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires spreadsheet files",
    evidenceLevel: "B",
    safetyLevel: "medium",
    bestFor: ["XLSX", "CSV", "Charts", "Tables"],
    notFor: ["Large-scale data warehouses"],
    fitMap: []
  },
  {
    slug: "lark-doc",
    name: "lark-doc",
    tagline: "Creates and edits Feishu/Lark cloud documents.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Lark docs", "Document updates", "Cloud document search"],
    notFor: ["Non-Lark workspaces"],
    fitMap: []
  },
  {
    slug: "lark-sheets",
    name: "lark-sheets",
    tagline: "Creates and operates Feishu/Lark spreadsheets.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Lark sheets", "Cell updates", "Bulk table work"],
    notFor: ["Excel-only workflows"],
    fitMap: []
  },
  {
    slug: "lark-base",
    name: "lark-base",
    tagline: "Operates Feishu/Lark Base for tables, fields, records, and views.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Lark Base", "Records", "Views", "Formula fields"],
    notFor: ["Generic databases"],
    fitMap: []
  },
  {
    slug: "lark-calendar",
    name: "lark-calendar",
    tagline: "Manages Feishu/Lark calendar events and availability.",
    seoTitle: "lark-calendar Skill Review: Lark Calendar Events and Availability",
    seoDescription:
      "Review the lark-calendar skill for Feishu/Lark calendar events, meeting scheduling, freebusy checks, attendee updates, and availability workflows.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Lark Calendar", "Meetings", "Freebusy"],
    notFor: ["Google Calendar-only users", "Scheduling without workspace permission"],
    audienceNotes: [
      "Operators who coordinate meetings inside Feishu/Lark",
      "Teams checking freebusy before scheduling cross-functional meetings",
      "Assistants that need to update attendees, time, and calendar metadata"
    ],
    safetyNotes: [
      "Calendar events can expose private participant and meeting details.",
      "Use authenticated workspace access and confirm before changing attendee lists or times."
    ],
    usagePrompt:
      "Find my available Lark calendar slots tomorrow afternoon, compare attendee freebusy, and propose two meeting times with the least conflict.",
    faqs: [
      {
        question: "What is lark-calendar best for?",
        answer:
          "lark-calendar is best for Feishu/Lark calendar event lookup, meeting creation, attendee management, freebusy checks, and availability workflows."
      },
      {
        question: "Can lark-calendar manage Google Calendar?",
        answer:
          "No. Treat lark-calendar as a Feishu/Lark calendar workflow skill, not a Google Calendar integration."
      },
      {
        question: "What should I verify before using lark-calendar?",
        answer:
          "Verify workspace authentication, calendar permission, attendee visibility, and whether the skill will read only or modify an event."
      }
    ],
    fitMap: []
  },
  {
    slug: "lark-im",
    name: "lark-im",
    tagline: "Sends messages and manages Feishu/Lark chats.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Messaging", "Chat history", "Group management"],
    notFor: ["Public social media posting"],
    fitMap: []
  },
  {
    slug: "lark-mail",
    name: "lark-mail",
    tagline: "Drafts, sends, replies, reads, and searches Feishu/Lark emails.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Mail drafting", "Inbox search", "Attachments"],
    notFor: ["Non-Lark mailboxes"],
    fitMap: []
  },
  {
    slug: "lark-task",
    name: "lark-task",
    tagline: "Manages Feishu/Lark tasks and task lists.",
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Tasks", "Project lists", "Assignments"],
    notFor: ["Complex Jira workflows"],
    fitMap: []
  },
  {
    slug: "lark-minutes",
    name: "lark-minutes",
    tagline: "Fetches Feishu/Lark meeting minute summaries and artifacts.",
    seoTitle: "lark-minutes Skill Review: Lark Meeting Minutes and Action Items",
    seoDescription:
      "Review the lark-minutes skill for Feishu/Lark meeting summaries, chapters, action items, minute artifacts, and follow-up workflows.",
    category: "Meeting intelligence",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires Lark minutes access",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Lark meeting minutes", "Meeting summaries", "Action items"],
    notFor: ["Live transcription", "Non-Lark meeting archives", "Private meetings without permission"],
    audienceNotes: [
      "Operators who need follow-up tasks from Lark meeting minutes",
      "Teams turning meeting artifacts into summaries, chapters, and action lists",
      "Founders reviewing decisions after recorded Feishu/Lark meetings"
    ],
    evidenceNotes: [
      "Search Console is already showing this page near the first page, but the old snippet was too generic for Lark minutes intent.",
      "The strongest proof should come from a meeting-to-summary test with chapters, owners, and follow-up actions."
    ],
    safetyNotes: [
      "Meeting minutes can contain private company and customer information.",
      "Only use the skill with an authenticated workspace and explicit permission to access the meeting artifact."
    ],
    usagePrompt:
      "Fetch the latest Lark meeting minute summary, list decisions, owners, unresolved questions, and the next follow-up message I should send.",
    faqs: [
      {
        question: "What is lark-minutes best for?",
        answer:
          "lark-minutes is best for fetching Feishu/Lark meeting minute summaries, chapters, action items, and follow-up artifacts."
      },
      {
        question: "Can lark-minutes transcribe a live meeting?",
        answer:
          "No. Treat it as a meeting artifact retrieval and summary workflow, not a live transcription skill."
      },
      {
        question: "What should I check before using lark-minutes?",
        answer:
          "Check workspace authentication, meeting access permission, privacy sensitivity, and whether the output includes owners and next actions."
      }
    ],
    fitMap: []
  },
  {
    slug: "dreamina-cli",
    name: "dreamina-cli",
    tagline: "Generates Dreamina images or videos through CLI workflows.",
    seoTitle: "dreamina-cli Skill Review: Dreamina CLI Image and Video Generation",
    seoDescription:
      "Review the dreamina-cli skill for Dreamina image generation, video generation, CLI workflows, batch prompts, downloads, and creative asset production.",
    category: "Image/video generation",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires Dreamina CLI account",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Dreamina CLI", "Dreamina images", "Dreamina video"],
    notFor: ["Provider-agnostic image generation", "Final commercial assets without rights review"],
    audienceNotes: [
      "Creators who already use Dreamina and want repeatable CLI generation",
      "Operators producing batches of image or video prompt variations",
      "AI builders testing creative assets inside a local workflow"
    ],
    evidenceNotes: [
      "Search Console already shows impressions and clicks for dreamina-cli, making exact-match metadata worthwhile.",
      "The best evidence should come from repeatable prompt-to-asset examples with output links and generation settings."
    ],
    safetyNotes: [
      "Review image and video rights before publishing generated assets commercially.",
      "Avoid submitting private brand material or sensitive likenesses unless the account and policy path are approved."
    ],
    usagePrompt:
      "Generate three Dreamina image concepts for a SkillFit landing page hero. Save the prompts, asset IDs, output links, and a short note explaining which concept is most usable.",
    faqs: [
      {
        question: "What is dreamina-cli best for?",
        answer:
          "dreamina-cli is best for Dreamina image and video generation from repeatable CLI workflows, especially when you need batch prompts and saved output references."
      },
      {
        question: "Is dreamina-cli provider agnostic?",
        answer:
          "No. It is useful when Dreamina is the target generation provider. Use a broader image generation skill if you need provider comparison."
      },
      {
        question: "How should I test dreamina-cli quickly?",
        answer:
          "Give it a small prompt batch, require saved output links or asset IDs, then compare whether the outputs match the creative brief."
      }
    ],
    fitMap: []
  },
  {
    slug: "imagegen",
    name: "imagegen",
    tagline: "Generates or edits bitmap images from prompts and references.",
    category: "Image generation",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires image generation tool access",
    evidenceLevel: "B",
    safetyLevel: "medium",
    bestFor: ["Illustrations", "Textures", "Mockups", "Image edits"],
    notFor: ["Repo-native SVG systems"],
    fitMap: []
  },
  {
    slug: "sora",
    name: "sora",
    tagline: "Generates, remixes, lists, downloads, and deletes Sora videos.",
    category: "Video generation",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires OpenAI API key and Sora access",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["AI video generation", "Video remix", "Batch video"],
    notFor: ["Manual video editing"],
    fitMap: []
  },
  {
    slug: "plugin-creator",
    name: "plugin-creator",
    tagline: "Creates and scaffolds local Codex plugin directories.",
    category: "Developer tooling",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "low",
    bestFor: ["Codex plugins", "Plugin metadata", "Plugin structure"],
    notFor: ["General package publishing"],
    fitMap: []
  },
  {
    slug: "skill-installer",
    name: "skill-installer",
    tagline: "Installs Codex skills from curated lists or GitHub repositories.",
    category: "Skill operations",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires GitHub/network access",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Installing skills", "Curated skill lists", "GitHub skill imports"],
    notFor: ["Evaluating skill fit by itself"],
    fitMap: []
  },
  {
    slug: "mcp-router",
    name: "mcp-router",
    tagline: "Routes tasks across MCPs for web research and external systems.",
    category: "MCP routing",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires MCP tooling",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["MCP selection", "Web research routing", "External tools"],
    notFor: ["Single-source static answers"],
    fitMap: []
  }
];

export const arenas: Arena[] = [
  {
    slug: "frontend-design-vs-ui-ux-pro-max-landing-page",
    title: "frontend-design vs ui-ux-pro-max for a landing page",
    seoTitle: "frontend-design vs ui-ux-pro-max: Landing Page Skill Comparison",
    seoDescription:
      "Compare frontend-design vs ui-ux-pro-max for AI landing pages, visual direction, UX critique, responsive layout, and shippable frontend work.",
    task:
      "Turn the SkillFit idea into a credible first-screen landing page for AI builders.",
    skillA: "frontend-design",
    skillB: "ui-ux-pro-max",
    blindSummaryA:
      "Output A prioritized a distinctive visual direction and strong hero composition.",
    blindSummaryB:
      "Output B prioritized UX clarity, section hierarchy, and broad design heuristics.",
    verdict:
      "Use frontend-design when visual identity matters most; use ui-ux-pro-max when you need a broader UX review.",
    answer:
      "Choose frontend-design when you need a new landing page direction and shippable visual concept. Choose ui-ux-pro-max when you need UX critique, hierarchy review, and interaction-level feedback.",
    relatedLinks: [
      { href: "/use-cases/best-skill-for-frontend-landing-page", label: "AI landing page skill use case" },
      { href: "/skills/frontend-design", label: "frontend-design Skill Review" },
      { href: "/skills/ui-ux-pro-max", label: "ui-ux-pro-max Skill Review" },
      { href: "/best-ai-skill-for-ui-design", label: "AI UI design skill guide" }
    ],
    faqs: [
      {
        question: "Should I use frontend-design or ui-ux-pro-max for a landing page?",
        answer:
          "Use frontend-design when you need a polished first-screen concept or production-ready page direction. Use ui-ux-pro-max when the page already exists and needs structured UX critique."
      },
      {
        question: "Which skill is better for visual direction?",
        answer:
          "frontend-design is usually better for visual direction because it focuses on distinctive, production-grade frontend interfaces."
      },
      {
        question: "Which skill is better for UX review?",
        answer:
          "ui-ux-pro-max is usually better for UX review, dashboard critique, flow clarity, and interaction friction."
      }
    ],
    status: "Published"
  },
  {
    slug: "web-access-vs-openai-docs-research-report",
    title: "web-access vs openai-docs for current research",
    seoTitle: "web-access vs openai-docs: Current Research Skill Comparison",
    seoDescription:
      "Compare web-access vs openai-docs for current research, official documentation, source-backed reports, and AI agent research workflows.",
    task:
      "Research the best AI coding agents and cite current official sources.",
    skillA: "web-access",
    skillB: "openai-docs",
    blindSummaryA:
      "Output A worked across multiple public sources and competitor pages.",
    blindSummaryB:
      "Output B stayed precise for official OpenAI product and API information.",
    verdict:
      "Use web-access for broad competitor research; use openai-docs for official OpenAI implementation details.",
    answer:
      "Use web-access when the research needs broad current sources. Use openai-docs when the answer depends on official OpenAI product or API documentation.",
    relatedLinks: [
      { href: "/best-ai-skills-for-research", label: "AI researcher skills guide" },
      { href: "/skills/web-access", label: "web-access Skill Review" },
      { href: "/skills/openai-docs", label: "openai-docs Skill Review" }
    ],
    faqs: [
      {
        question: "Should I use web-access or openai-docs for research?",
        answer:
          "Use web-access for broad web research and competitor discovery. Use openai-docs when the answer must come from official OpenAI documentation."
      },
      {
        question: "Which skill is better for current competitor research?",
        answer:
          "web-access is better for current competitor research because it can work across multiple public sources and product pages."
      },
      {
        question: "Which skill is better for API implementation questions?",
        answer:
          "openai-docs is better when implementation depends on official OpenAI API, model, or product documentation."
      }
    ],
    status: "Published"
  },
  {
    slug: "copywriting-vs-marketing-psychology-wechat",
    title: "copywriting vs marketing-psychology for WeChat rewrite",
    seoTitle: "copywriting vs marketing-psychology: WeChat Rewrite Skill Comparison",
    seoDescription:
      "Compare copywriting vs marketing-psychology for WeChat article rewrites, Chinese article insights, hooks, persuasion angles, and publishable structure.",
    task:
      "Rewrite an analysis article into a sharper WeChat post with a stronger hook.",
    skillA: "copywriting",
    skillB: "marketing-psychology",
    blindSummaryA:
      "Output A improved the headline, CTA, and sentence-level clarity.",
    blindSummaryB:
      "Output B added persuasion frames and decision-making angles.",
    verdict:
      "Use copywriting for publishable text; use marketing-psychology as a strategic second pass.",
    answer:
      "Use copywriting for the publishable WeChat rewrite. Use marketing-psychology when the main gap is hook, reader motivation, objections, or persuasion angle.",
    relatedLinks: [
      { href: "/use-cases/best-skill-for-wechat-article-rewrite", label: "WeChat article insights use case" },
      { href: "/best-ai-skills-for-writing", label: "AI writing skill guide" },
      { href: "/skills/copywriting", label: "copywriting Skill Review" },
      { href: "/skills/marketing-psychology", label: "marketing-psychology Skill Review" }
    ],
    faqs: [
      {
        question: "Should I use copywriting or marketing-psychology for WeChat rewrite?",
        answer:
          "Use copywriting first when you need readable, publishable text. Use marketing-psychology as a second pass when the article needs a stronger hook and reader motivation."
      },
      {
        question: "Which skill is better for Chinese article structure?",
        answer:
          "copywriting is usually better for turning source material into a clearer article structure and smoother sentences."
      },
      {
        question: "Which skill is better for persuasion angles?",
        answer:
          "marketing-psychology is stronger when you need objections, motivation frames, and strategic messaging angles."
      }
    ],
    status: "Published"
  }
];

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}

export function getUseCase(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}

export function getArena(slug: string) {
  return arenas.find((arena) => arena.slug === slug);
}

export function getRecommendedSkills(useCase: UseCase) {
  return useCase.recommendedSkills
    .map((slug) => getSkill(slug))
    .filter((skill): skill is Skill => Boolean(skill));
}

export function getArenaSkills(arena: Arena) {
  return {
    skillA: getSkill(arena.skillA),
    skillB: getSkill(arena.skillB)
  };
}
