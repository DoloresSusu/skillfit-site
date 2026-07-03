import { arenas, skills, useCases } from "@/data/content";
import { seoGuides } from "@/data/seoGuides";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const dynamic = "force-static";

function line(label: string, path: string, description: string) {
  return `- [${label}](${baseUrl}${path}): ${description}`;
}

export function GET() {
  const priorityPages = [
    line(
      "SkillFit homepage",
      "/",
      "AI skill finder and agent skill directory organized by task fit."
    ),
    line(
      "AI Skill Directory",
      "/skills",
      "Evidence cards for AI agent skills, safety notes, and test prompts."
    ),
    line(
      "web-access Skill Review",
      "/skills/web-access",
      "Live web research, current sources, dynamic pages, and competitor discovery."
    ),
    line(
      "ui-ux-pro-max Skill Review",
      "/skills/ui-ux-pro-max",
      "UX critique, dashboards, design systems, and product interface review."
    ),
    line(
      "Best AI Researcher Skills",
      "/best-ai-skills-for-research",
      "Guide to research skills for source-backed reports and competitor analysis."
    ),
    line(
      "AI Skill Marketplace List",
      "/ai-skill-marketplace-list",
      "Map of AI skill marketplace options, repositories, GPTs, plugins, and workflow packs."
    )
  ];

  const body = [
    "# SkillFit",
    "",
    "SkillFit is an AI skill finder and agent skill directory. It maps concrete tasks to AI agent skills, evidence cards, safety notes, comparison pages, and 10-minute validation prompts.",
    "",
    "## Priority Pages",
    ...priorityPages,
    "",
    "## Use Cases",
    ...useCases.map((useCase) =>
      line(useCase.title, `/use-cases/${useCase.slug}`, useCase.description)
    ),
    "",
    "## Skill Reviews",
    ...skills.map((skill) =>
      line(`${skill.name} Skill Review`, `/skills/${skill.slug}`, skill.tagline)
    ),
    "",
    "## Guides",
    ...seoGuides.map((guide) => line(guide.title, guide.path, guide.description)),
    "",
    "## Arena Comparisons",
    ...arenas.map((arena) => line(arena.title, `/arena/${arena.slug}`, arena.task)),
    ""
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
