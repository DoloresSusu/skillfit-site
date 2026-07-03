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
    keywords: ["presentation skill", "AI deck skill", "PowerPoint agent skill"]
  }
];

export const skills: Skill[] = [
  {
    slug: "frontend-design",
    name: "frontend-design",
    tagline: "Creates distinctive, production-grade frontend interfaces.",
    seoTitle: "frontend-design Skill Review for AI Frontend Design",
    seoDescription:
      "Review the frontend-design skill for landing pages, web UI, visual direction, responsive layout, and task-fit frontend design work.",
    category: "Design & frontend",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["Landing pages", "Web UI", "Visual direction"],
    notFor: ["Backend-only work", "Pixel-perfect Figma execution"],
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
    tagline: "Translates Figma designs into production-ready code.",
    seoTitle: "implement-design Skill Review for Figma to Code",
    seoDescription:
      "Review the implement-design skill for Figma to code work, visual fidelity, component implementation, and frontend handoff tasks.",
    category: "Design implementation",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires Figma context",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Figma to code", "Visual fidelity", "Component implementation"],
    notFor: ["Open-ended design without references"],
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
    tagline: "Applies behavioral science and mental models to marketing.",
    category: "Strategy",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "low",
    bestFor: ["Persuasion angles", "User motivation", "Campaign strategy"],
    notFor: ["Raw factual research"],
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
    tagline: "Finds up-to-date official OpenAI product and API documentation.",
    category: "Technical docs",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "B",
    safetyLevel: "low",
    bestFor: ["OpenAI API questions", "Model selection", "Official docs"],
    notFor: ["Non-OpenAI product research"],
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
    tagline: "Creates, edits, renders, verifies, and exports PowerPoint decks.",
    category: "Slides",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires local presentation tooling",
    evidenceLevel: "B",
    safetyLevel: "medium",
    bestFor: ["Editable PPTX", "Slide decks", "Export workflows"],
    notFor: ["Pure web presentations"],
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
    tagline: "Creates animation-rich HTML presentations.",
    category: "Slides",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Submit source link to verify",
    evidenceLevel: "C",
    safetyLevel: "low",
    bestFor: ["Web decks", "Pitch pages", "Animated talks"],
    notFor: ["Corporate PPTX-only workflows"],
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
    category: "Lark workflow",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires lark-cli authentication",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Calendar", "Meetings", "Freebusy"],
    notFor: ["Google Calendar-only users"],
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
    category: "Image/video generation",
    platform: "Codex Skill",
    sourceUrl: "/submit",
    installCommand: "Requires Dreamina CLI account",
    evidenceLevel: "C",
    safetyLevel: "medium",
    bestFor: ["Dreamina images", "Dreamina video", "Batch generation"],
    notFor: ["Provider-agnostic image generation"],
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
    status: "Published"
  },
  {
    slug: "web-access-vs-openai-docs-research-report",
    title: "web-access vs openai-docs for current research",
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
    status: "Published"
  },
  {
    slug: "copywriting-vs-marketing-psychology-wechat",
    title: "copywriting vs marketing-psychology for WeChat rewrite",
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
