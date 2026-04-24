import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { getAlternateLanguages } from "@/data/i18n";
import { zhSeoGuides } from "@/data/zhSeoGuides";

export const metadata: Metadata = {
  title: "AI Skill 中文指南",
  description: "从任务出发选择 AI Skill：任务适配、证据质量、安全风险和 10 分钟测试方法。",
  alternates: {
    canonical: "/zh/guides",
    languages: getAlternateLanguages("/zh/guides")
  }
};

export default function ZhGuidesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">SkillFit 中文指南</span>
        <h1>按任务选择 AI Skill。</h1>
        <p className="lead">
          不从热度榜开始，而从你现在要完成的任务开始：需要什么能力、怎么验证输出、哪些风险要提前避开。
        </p>
      </section>

      <section className="grid grid-3">
        {zhSeoGuides.map((guide) => (
          <GuideCard guide={guide} cta="阅读指南" key={guide.slug} />
        ))}
      </section>
    </>
  );
}
