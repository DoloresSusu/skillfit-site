import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why SkillFit exists: a task-first decision layer for PMs, creators, founders, teams, and AI builders choosing AI Agent Skills."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About SkillFit</span>
        <h1>Popularity is not task fit.</h1>
        <p className="lead">
          Skill marketplaces are fragmenting. SkillFit helps people who already use AI
          agents choose Skills by concrete task, evidence, safety, and output quality.
        </p>
      </section>
      <section className="detail-grid">
        <div className="panel">
          <h2>Who this is for now</h2>
          <p>
            The MVP is built for PMs, creators, founders, small teams, and independent
            builders who can use AI agents but do not want to read every Skill README,
            GitHub repo, or install note before deciding what to try.
          </p>
          <ul className="check-list">
            <li>You know the task you need done, but not which Skill fits it.</li>
            <li>You care about output quality, not only marketplace popularity.</li>
            <li>You want a quick test prompt before adding a new Skill to your workflow.</li>
          </ul>
        </div>
        <aside className="panel">
          <h2>What this is not yet</h2>
          <p>
            SkillFit is not trying to be a mass-market app store in the first stage.
            The near-term goal is to validate task demand, search intent, and submit
            behavior before building accounts, voting, automation, or paid workflows.
          </p>
        </aside>
      </section>
      <section className="grid grid-3">
        <article className="card">
          <span className="eyebrow">Principle 1</span>
          <h3>Start from the task</h3>
          <p>Users do not buy a Skill name. They want a result for a job-to-be-done.</p>
        </article>
        <article className="card">
          <span className="eyebrow">Principle 2</span>
          <h3>Show evidence</h3>
          <p>Separate official claims, user feedback, tests, and Arena duels.</p>
        </article>
        <article className="card">
          <span className="eyebrow">Principle 3</span>
          <h3>Check before install</h3>
          <p>Skill recommendations should include source, permissions, and safety notes.</p>
        </article>
      </section>
    </>
  );
}
