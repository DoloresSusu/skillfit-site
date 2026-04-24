import type { Metadata } from "next";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/data/content";

export const metadata: Metadata = {
  title: "Skill evidence cards",
  description: "Browse SkillFit evidence cards with task fit and safety notes."
};

export default function SkillsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Skill index</span>
        <h1>Evidence cards before installation.</h1>
        <p className="lead">
          This MVP starts with curated data. Submit source links to improve evidence
          quality and remove placeholder sources.
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

