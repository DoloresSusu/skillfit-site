import type { Metadata } from "next";
import { ArenaCard } from "@/components/ArenaCard";
import { GuideCard } from "@/components/GuideCard";
import { SkillCard } from "@/components/SkillCard";
import { TaskFinder } from "@/components/TaskFinder";
import { TrackedLink } from "@/components/TrackedLink";
import { UseCaseCard } from "@/components/UseCaseCard";
import { arenas, skills, useCases } from "@/data/content";
import { getAlternateLanguages } from "@/data/i18n";
import { seoGuides } from "@/data/seoGuides";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: getAlternateLanguages("/")
  }
};

const highIntentPaths = [
  {
    href: "/skills/web-access",
    label: "web-access skill review",
    description: "Live web research, dynamic pages, current sources, and competitor discovery."
  },
  {
    href: "/skills/ui-ux-pro-max",
    label: "ui ux pro max skill",
    description: "UX critique, dashboards, design systems, and product interface review."
  },
  {
    href: "/best-ai-skills-for-research",
    label: "AI researcher skills",
    description: "Research skills for source-backed reports, competitor analysis, and memos."
  },
  {
    href: "/best-ai-skills-for-writing",
    label: "AI writing skills",
    description: "Choose skills for articles, landing page copy, rewrites, and WeChat insights."
  },
  {
    href: "/best-ai-skills-for-coding",
    label: "AI coding skills",
    description: "Compare code review, frontend implementation, Figma to code, and docs lookup."
  },
  {
    href: "/ai-skill-marketplace-list",
    label: "AI skill marketplace list",
    description: "Where to discover AI agent skills, plugins, GPTs, repositories, and packs."
  },
  {
    href: "/best-ai-skill-for-competitive-analysis",
    label: "AI competitor gap analysis agent",
    description: "Pick a skill for competitor discovery, positioning evidence, and market gaps."
  },
  {
    href: "/arena/frontend-design-vs-ui-ux-pro-max-landing-page",
    label: "frontend-design vs ui-ux-pro-max",
    description: "Compare visual direction against broader UX critique for landing pages."
  },
  {
    href: "/use-cases/best-skill-for-wechat-article-rewrite",
    label: "WeChat article insights",
    description: "Pick a skill for Chinese article rewrites, insights, headlines, and source fidelity."
  },
  {
    href: "/use-cases/best-skill-for-frontend-landing-page",
    label: "AI landing page skill",
    description: "Compare frontend-design, ui-ux-pro-max, and implement-design for page launches."
  },
  {
    href: "/skills/implement-design",
    label: "implement-design skill",
    description: "Review Figma to code, design implementation, visual fidelity, and frontend handoff."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Task-to-Skill Advisor</span>
          <h1>Find the right AI Skill for your task.</h1>
          <p className="lead">
            SkillFit is an AI skill finder and agent skill directory that translates
            technical Skills into task-first recommendations for PMs, creators, founders,
            teams, and AI builders.
          </p>
          <TaskFinder useCases={useCases} />
        </div>
        <aside className="hero-card">
          <span className="eyebrow">MVP index</span>
          <h2>A decision layer above fragmented Skill markets.</h2>
          <p>
            Start with the job to be done. Then compare task fit, evidence, safety
            notes, marketplace alternatives, and a 10-minute test before installing
            another Skill.
          </p>
          <div className="hero-metrics">
            <div className="metric">
              <strong>{skills.length}</strong>
              <span>Skills indexed</span>
            </div>
            <div className="metric">
              <strong>{useCases.length}</strong>
              <span>Use cases</span>
            </div>
            <div className="metric">
              <strong>{arenas.length}</strong>
              <span>Arena duels</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section guide-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">High-intent searches</span>
            <h2>Fast paths for queries already showing in Google</h2>
          </div>
          <TrackedLink
            className="button button-light"
            href="/skills"
            eventName="skill_card_clicked"
            eventProperties={{ source: "home_high_intent_cta" }}
          >
            Browse directory
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {highIntentPaths.map((path) => (
            <TrackedLink
              className="card guide-card"
              href={path.href}
              key={path.href}
              eventName="guide_clicked"
              eventProperties={{
                source: "home_high_intent",
                target_path: path.href
              }}
            >
              <span className="card-topline">Search opportunity</span>
              <h3>{path.label}</h3>
              <p>{path.description}</p>
              <span className="text-link">Open answer</span>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Start from the task</h2>
          <TrackedLink
            className="button button-light"
            href="/use-cases"
            eventName="use_case_clicked"
            eventProperties={{ source: "home_section_cta" }}
          >
            View all use cases
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {useCases.slice(0, 3).map((useCase) => (
            <UseCaseCard useCase={useCase} key={useCase.slug} />
          ))}
        </div>
      </section>

      <section className="section guide-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SEO / AEO guides</span>
            <h2>Answers people search for before choosing a Skill</h2>
          </div>
          <TrackedLink
            className="button button-light"
            href="/guides"
            eventName="guide_clicked"
            eventProperties={{ source: "home_section_cta" }}
          >
            View all guides
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {seoGuides.slice(0, 6).map((guide) => (
            <GuideCard guide={guide} key={guide.slug} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Evidence cards</h2>
          <TrackedLink
            className="button button-light"
            href="/skills"
            eventName="skill_card_clicked"
            eventProperties={{ source: "home_section_cta" }}
          >
            Browse skills
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {skills.slice(0, 6).map((skill) => (
            <SkillCard skill={skill} key={skill.slug} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Skill Arena</h2>
          <TrackedLink
            className="button button-light"
            href="/arena"
            eventName="arena_clicked"
            eventProperties={{ source: "home_section_cta" }}
          >
            See duels
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {arenas.map((arena) => (
            <ArenaCard arena={arena} key={arena.slug} />
          ))}
        </div>
      </section>

      <section className="submit-box">
        <span className="eyebrow">Community input</span>
        <h2>Have a Skill or task we should evaluate?</h2>
        <p>
          Submit a Skill link, a concrete task, or a real output sample. This keeps
          the MVP focused on real workflow demand instead of empty marketplace volume.
        </p>
        <TrackedLink
          className="button button-light"
          href="/submit"
          eventName="submit_clicked"
          eventProperties={{ location: "home_submit_box" }}
        >
          Submit to SkillFit
        </TrackedLink>
      </section>
    </>
  );
}
