import Link from "next/link";
import type { Skill } from "@/lib/types";
import { EvidenceBadge, SafetyBadge } from "@/components/EvidenceBadge";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="card skill-card">
      <div className="card-topline">
        <span>{skill.category}</span>
        <span>{skill.platform}</span>
      </div>
      <h3>
        <Link href={`/skills/${skill.slug}`}>{skill.name}</Link>
      </h3>
      <p>{skill.tagline}</p>
      <div className="badge-row">
        <EvidenceBadge level={skill.evidenceLevel} />
        <SafetyBadge level={skill.safetyLevel} />
      </div>
      <div className="mini-list">
        {skill.bestFor.slice(0, 3).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

