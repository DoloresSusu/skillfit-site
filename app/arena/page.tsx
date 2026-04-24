import type { Metadata } from "next";
import { ArenaCard } from "@/components/ArenaCard";
import { arenas } from "@/data/content";

export const metadata: Metadata = {
  title: "Skill Arena",
  description: "Compare two Skills on a concrete task with blind summaries."
};

export default function ArenaPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Skill Arena</span>
        <h1>Duels are evidence, not the whole ranking system.</h1>
        <p className="lead">
          Arena pages compare two Skills on one concrete task. SkillFit uses them as
          proof points for task fit, not as universal winner-take-all rankings.
        </p>
      </section>
      <section className="grid grid-3">
        {arenas.map((arena) => (
          <ArenaCard arena={arena} key={arena.slug} />
        ))}
      </section>
    </>
  );
}

