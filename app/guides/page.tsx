import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { getAlternateLanguages } from "@/data/i18n";
import { seoGuides } from "@/data/seoGuides";

export const metadata: Metadata = {
  title: "AI Skill Guides",
  description:
    "Task-first guides for choosing AI Agent Skills for research, writing, coding, SEO, product work, UI design, and agent workflows.",
  alternates: {
    canonical: "/guides",
    languages: getAlternateLanguages("/guides")
  }
};

export default function GuidesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">SkillFit guides</span>
        <h1>AI Skill guides by task.</h1>
        <p className="lead">
          Start from what you need to do, then choose the skill type, test prompt,
          red flags, and evidence level that match the task.
        </p>
      </section>

      <section className="grid grid-3">
        {seoGuides.map((guide) => (
          <GuideCard guide={guide} key={guide.slug} />
        ))}
      </section>
    </>
  );
}
