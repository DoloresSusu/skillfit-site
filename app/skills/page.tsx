import type { Metadata } from "next";
import { SkillCard } from "@/components/SkillCard";
import { TrackedLink } from "@/components/TrackedLink";
import { skills } from "@/data/content";

export const metadata: Metadata = {
  title: "AI Skill Directory and Evidence Cards",
  description:
    "Browse an AI skill directory with task fit, supported workflows, safety notes, evidence levels, and 10-minute validation prompts."
};

const prioritySkillSlugs = ["web-access", "ui-ux-pro-max", "frontend-design", "implement-design"];

export default function SkillsPage() {
  const prioritySkills = prioritySkillSlugs
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill): skill is (typeof skills)[number] => Boolean(skill));

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Skill index</span>
        <h1>AI Skill directory before you install another Skill.</h1>
        <p className="lead">
          Each evidence card translates technical Skill details into the questions
          working users ask before choosing from a fragmented skills marketplace:
          What task does it fit, how do I test it, and where can it fail?
        </p>
      </section>

      <section className="section guide-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Priority comparisons</span>
            <h2>Start with the Skill pages Google is already testing</h2>
          </div>
          <TrackedLink
            className="button button-light"
            href="/best-ai-skills-for-research"
            eventName="guide_clicked"
            eventProperties={{ source: "skills_priority_cta" }}
          >
            Research guide
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {prioritySkills.map((skill) => (
            <TrackedLink
              className="card guide-card"
              href={`/skills/${skill.slug}`}
              key={skill.slug}
              eventName="skill_card_clicked"
              eventProperties={{
                skill: skill.slug,
                source: "skills_priority"
              }}
            >
              <span className="card-topline">{skill.category}</span>
              <h3>{skill.name} Skill Review</h3>
              <p>{skill.tagline}</p>
              <span className="text-link">Review fit and test prompt</span>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="grid grid-3">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.slug} />
        ))}
      </section>
    </>
  );
}
