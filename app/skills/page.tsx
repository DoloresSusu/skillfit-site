import type { Metadata } from "next";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/data/content";

export const metadata: Metadata = {
  title: "Skill evidence cards",
  description:
    "Browse AI Agent Skill evidence cards with task fit, supported workflows, safety notes, and 10-minute validation prompts."
};

export default function SkillsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Skill index</span>
        <h1>Evidence cards before you install another Skill.</h1>
        <p className="lead">
          Each card translates technical Skill details into the questions working users
          actually ask: What task does it fit, how do I test it, and where can it fail?
        </p>
      </section>
      <section className="grid grid-3">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.slug} />
        ))}
      </section>
    </>
  );
}
