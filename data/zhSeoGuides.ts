import type { SeoGuide } from "@/data/seoGuides";

export const zhSeoGuides: SeoGuide[] = [
  {
    slug: "how-to-choose-ai-skills",
    path: "/zh/how-to-choose-ai-skills",
    title: "如何选择 AI Skill",
    shortTitle: "选择 AI Skill",
    description:
      "一套从第一性原理出发的 AI Skill 选择清单：先看任务，再看能力、证据、安全风险和真实输出质量。",
    answer:
      "选择 AI Skill 不应该从“哪个最火”开始，而应该从当前任务开始：明确要完成什么，再判断需要哪些能力、输出是否可信、风险是否可控。",
    audience: [
      "不知道该安装哪个 AI Skill 的用户",
      "正在比较多个相似 Skill 的 AI builder",
      "想建立轻量 Skill 评估流程的团队"
    ],
    recommendedSkillTypes: [
      {
        name: "任务匹配型 Skill",
        fit: "适合你已经知道要完成什么，但不知道该用哪个能力的时候。"
      },
      {
        name: "证据型 Skill",
        fit: "适合研究、发布、花钱或技术决策这类需要来源和验证的任务。"
      },
      {
        name: "低风险辅助型 Skill",
        fit: "适合草稿、格式整理、初步改写等容易人工检查的任务。"
      }
    ],
    decisionChecklist: [
      "先用一句话写清楚当前任务。",
      "列出完成任务需要哪些能力。",
      "用一个 10 分钟测试 prompt 检查输出质量。",
      "看失败信号、安全风险和维护信号。",
      "只有当它改善真实工作流时，才保留这个 Skill。"
    ],
    testPrompt:
      "我需要写一份可发布的市场研究 memo。请推荐合适的 Skill 类型，说明原因，并给我一个 10 分钟测试方法。",
    redFlags: [
      "只看名字或热度，不看任务适配度",
      "没有清晰成功标准",
      "安装很多功能重叠的 Skill",
      "忽视隐私、来源质量和失败风险"
    ],
    relatedLinks: [
      { href: "/zh/guides", label: "中文指南合集" },
      { href: "/use-cases", label: "英文 Use cases" },
      { href: "/submit", label: "提交你的任务" }
    ],
    faqs: [
      {
        question: "最快的 AI Skill 选择方法是什么？",
        answer:
          "先从任务出发，选择匹配所需能力的 Skill，再用一个小测试验证输出质量。"
      },
      {
        question: "应该直接安装最热门的 Skill 吗？",
        answer:
          "不一定。热度只是弱信号，任务适配度、证据质量和安全风险更重要。"
      },
      {
        question: "我应该同时使用多少个 AI Skill？",
        answer:
          "少而清晰更好。太多重叠 Skill 会让评估、维护和调用都变复杂。"
      }
    ]
  },
  {
    slug: "ai-skill-marketplace-list",
    path: "/zh/ai-skill-marketplace-list",
    title: "AI Skill Marketplace 列表",
    shortTitle: "Marketplace 列表",
    description:
      "AI Skill 不会只存在一个商店里。它们分散在 Agent 平台、GitHub、模型生态、插件目录和社区帖子里。",
    answer:
      "AI Skill 生态的核心问题不是没有商店，而是供给太分散。用户需要一个跨平台、按任务组织的判断层，而不是又一个单纯排行榜。",
    audience: [
      "想跨平台寻找 AI Skill 的用户",
      "正在决定 Skill 发布渠道的 builder",
      "研究 AI Agent 工具生态的人"
    ],
    recommendedSkillTypes: [
      {
        name: "平台原生目录",
        fit: "适合查找绑定具体 Agent 产品的可安装 Skill。"
      },
      {
        name: "GitHub 仓库",
        fit: "适合寻找开源 Skill、prompt、agent workflow 和可审查实现。"
      },
      {
        name: "社区列表",
        fit: "适合发现还没被平台正式收录的早期工具。"
      }
    ],
    decisionChecklist: [
      "这是可安装 Skill，还是只是一个 prompt 示例？",
      "它依赖哪个 Agent 或模型环境？",
      "是否有可见来源、维护者和更新时间？",
      "是否有真实使用案例和输出样例？"
    ],
    testPrompt:
      "找到三个用户今天会发现 AI Agent Skill 的地方，比较它们各自适合什么，以及还缺什么。",
    redFlags: [
      "没有来源或维护者",
      "只有截图，没有安装路径",
      "没有真实任务输出",
      "榜单只按热度排序"
    ],
    relatedLinks: [
      { href: "/skills", label: "SkillFit Skill 索引" },
      { href: "/arena", label: "Skill Arena 对战" },
      { href: "/submit", label: "提交 Marketplace 或 Skill" }
    ],
    faqs: [
      {
        question: "现在有一个官方 AI Skill Marketplace 吗？",
        answer:
          "没有统一入口。AI Skill 分散在平台、仓库、社区和产品自己的目录里。"
      },
      {
        question: "为什么分散是机会？",
        answer:
          "因为分散会增加发现成本，用户需要按任务匹配的决策层。"
      },
      {
        question: "一个好的 Skill 列表应该包含什么？",
        answer:
          "至少应该包含来源、平台、安装路径、任务适配度、证据等级和真实输出样例。"
      }
    ]
  },
  {
    slug: "best-ai-skill-for-user-research",
    path: "/zh/best-ai-skill-for-user-research",
    title: "用户研究最适合用什么 AI Skill",
    shortTitle: "用户研究",
    description:
      "如何选择用于访谈提纲、问卷综合、用户原话聚类和洞察提炼的 AI Skill。",
    answer:
      "用户研究类任务适合使用能保留原话、区分观察和解释、并把洞察追溯到证据的 AI Skill，而不是只做泛泛总结的 Skill。",
    audience: [
      "准备用户访谈的 PM",
      "想验证真实痛点的创始人",
      "需要从访谈记录里提炼洞察的研究者"
    ],
    recommendedSkillTypes: [
      {
        name: "访谈提纲 Skill",
        fit: "适合设计中立问题，避免引导用户。"
      },
      {
        name: "转录综合 Skill",
        fit: "适合把原话聚类成需求、反对意见和行为模式。"
      },
      {
        name: "洞察审查 Skill",
        fit: "适合判断一个 insight 是有证据支持，还是只是主观猜测。"
      }
    ],
    decisionChecklist: [
      "它是否避免诱导式问题？",
      "它是否保留用户原话和上下文？",
      "它是否区分观察和解释？",
      "它是否输出下一步要验证的问题？"
    ],
    testPrompt:
      "为“用户不知道该用哪个 AI Skill”这个问题设计一份 30 分钟访谈提纲，包括中立问题、追问和每个问题在验证什么。",
    redFlags: [
      "问题已经暗示了解决方案",
      "总结没有任何原话",
      "洞察宽泛到无法行动",
      "没有区分单个强 quote 和重复行为"
    ],
    relatedLinks: [
      { href: "/zh/how-to-choose-ai-skills", label: "如何选择 AI Skill" },
      { href: "/best-ai-skill-for-product-requirements", label: "Product requirements guide" },
      { href: "/submit", label: "提交用户研究证据" }
    ],
    faqs: [
      {
        question: "用户访谈最适合用什么 AI Skill？",
        answer:
          "选择能设计中立问题、把问题映射到假设，并在访谈后保留证据链的 Skill。"
      },
      {
        question: "AI 能替代用户研究吗？",
        answer:
          "不能。AI 可以辅助结构化和综合，但真实行为、原话和痛点仍然来自用户。"
      },
      {
        question: "我应该先测试什么？",
        answer:
          "先测试用户任务和现有 workaround，再测试你的解决方案。"
      }
    ]
  },
  {
    slug: "best-ai-skill-for-ai-agent-workflows",
    path: "/zh/best-ai-skill-for-ai-agent-workflows",
    title: "AI Agent 工作流最适合用什么 Skill",
    shortTitle: "Agent 工作流",
    description:
      "如何选择用于构建可复用 Agent 工作流、多步骤自动化和标准操作流程的 AI Skill。",
    answer:
      "Agent 工作流类任务最适合使用能把重复任务拆成输入、工具、检查点、安全边界和可复用输出的 Skill。",
    audience: [
      "正在搭建个人 AI 工作流的 PM",
      "想自动化研究或发布流程的运营者",
      "想把 prompt 和工具打包成 Skill 的 builder"
    ],
    recommendedSkillTypes: [
      {
        name: "工作流设计 Skill",
        fit: "适合把重复任务拆成稳定步骤。"
      },
      {
        name: "Skill 创建 Skill",
        fit: "适合把说明、脚本和示例打包成可复用 Skill。"
      },
      {
        name: "浏览器自动化 Skill",
        fit: "适合需要登录网站、动态页面或上传发布的任务。"
      }
    ],
    decisionChecklist: [
      "是否定义了输入、输出和停止条件？",
      "是否标记了需要用户确认的高风险动作？",
      "是否复用脚本和工具，而不是只靠记忆？",
      "另一个 Agent 是否能照着这个流程重复执行？"
    ],
    testPrompt:
      "设计一个把小网站上线消息发布到 LinkedIn、即刻、小红书和个人站的可复用工作流，包括检查点和确认边界。",
    redFlags: [
      "流程依赖模糊记忆",
      "公开发布前没有确认边界",
      "发布后没有验证步骤",
      "下周无法复用"
    ],
    relatedLinks: [
      { href: "/zh/ai-skill-marketplace-list", label: "AI Skill Marketplace 列表" },
      { href: "/skills/skill-creator", label: "skill-creator skill card" },
      { href: "/submit", label: "提交 Agent 工作流" }
    ],
    faqs: [
      {
        question: "Agent 工作流最适合用什么 AI Skill？",
        answer:
          "用工作流设计或 Skill 创建类 Skill，把重复任务沉淀成有工具、检查点和安全规则的流程。"
      },
      {
        question: "什么时候应该把工作流做成 Skill？",
        answer:
          "当你反复做同一类任务，并希望未来 Agent 不用重新解释就能稳定执行时。"
      },
      {
        question: "安全的 Agent 工作流应该有什么？",
        answer:
          "它应该明确标记删除、公开发布、付款、上传和敏感数据传输等需要确认的动作。"
      }
    ]
  }
];

export function getZhSeoGuide(slug: string) {
  return zhSeoGuides.find((guide) => guide.slug === slug);
}
