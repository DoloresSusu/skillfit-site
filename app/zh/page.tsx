import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { getAlternateLanguages } from "@/data/i18n";
import { zhSeoGuides } from "@/data/zhSeoGuides";

export const metadata: Metadata = {
  title: "SkillFit 中文版 - 按任务选择 AI Skill",
  description:
    "SkillFit 帮助用户从具体任务出发选择 AI Agent Skill，而不是只看热度榜和应用商店排名。",
  alternates: {
    canonical: "/zh",
    languages: getAlternateLanguages("/zh")
  }
};

export default function ZhHomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Task-to-Skill Advisor</span>
          <h1>为当前任务找到合适的 Skill。</h1>
          <p className="lead">
            SkillFit 不是另一个 Skill 商店，而是一个任务到 Skill 的决策层：看任务适配度、证据质量、安全风险和测试方法。
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/zh/guides">
              查看中文指南
            </Link>
            <Link className="button button-light" href="/skills">
              浏览 Skill 索引
            </Link>
          </div>
        </div>
        <aside className="hero-card">
          <span className="eyebrow">MVP index</span>
          <h2>先问任务，再选 Skill。</h2>
          <p>
            用户真正想知道的不是哪个 Skill 最火，而是：我现在这个任务，到底该用哪个 Skill，应该怎么测试它是否有效。
          </p>
          <div className="hero-metrics">
            <div className="metric">
              <strong>4</strong>
              <span>中文指南</span>
            </div>
            <div className="metric">
              <strong>30+</strong>
              <span>Skill cards</span>
            </div>
            <div className="metric">
              <strong>3</strong>
              <span>Arena duels</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section guide-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">中文 AEO 页面</span>
            <h2>先覆盖最值得被搜索的问题。</h2>
          </div>
          <Link className="button button-light" href="/zh/guides">
            全部中文指南
          </Link>
        </div>
        <div className="grid grid-3">
          {zhSeoGuides.map((guide) => (
            <GuideCard guide={guide} cta="阅读指南" key={guide.slug} />
          ))}
        </div>
      </section>

      <section className="submit-box">
        <span className="eyebrow">Community input</span>
        <h2>有 Skill 或真实任务案例吗？</h2>
        <p>提交 Skill 链接、任务描述或输出样例。早期版本会人工整理，保证数据足够干净。</p>
        <Link className="button button-light" href="/submit">
          提交给 SkillFit
        </Link>
      </section>
    </>
  );
}
