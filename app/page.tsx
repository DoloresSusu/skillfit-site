import Link from "next/link";
import { ArenaCard } from "@/components/ArenaCard";
import { SkillCard } from "@/components/SkillCard";
import { TaskFinder } from "@/components/TaskFinder";
import { UseCaseCard } from "@/components/UseCaseCard";
import { arenas, skills, useCases } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Task-to-Skill Advisor</span>
          <h1>Find the right Skill for your task.</h1>
          <p className="lead">
            SkillFit helps AI builders choose Agent Skills by task fit, evidence level,
            safety notes, and lightweight test packs.
          </p>
          <TaskFinder useCases={useCases} />
        </div>
        <aside className="hero-card">
          <span className="eyebrow">MVP index</span>
          <h2>Not a marketplace. A decision layer.</h2>
          <p>
            We separate popularity from task fit, then show evidence cards and safety
            notes before you install a Skill.
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

      <section className="section">
        <div className="section-heading">
          <h2>Start from the task</h2>
          <Link className="button button-light" href="/use-cases">
            View all use cases
          </Link>
        </div>
        <div className="grid grid-3">
          {useCases.slice(0, 3).map((useCase) => (
            <UseCaseCard useCase={useCase} key={useCase.slug} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Evidence cards</h2>
          <Link className="button button-light" href="/skills">
            Browse skills
          </Link>
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
          <Link className="button button-light" href="/arena">
            See duels
          </Link>
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
          Submit a Skill link, a concrete task, or a real output sample. The first
          version is curated manually so the data stays clean.
        </p>
        <Link className="button button-light" href="/submit">
          Submit to SkillFit
        </Link>
      </section>
    </>
  );
}

