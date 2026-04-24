import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Why SkillFit exists and how it evaluates AI Agent Skills."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About SkillFit</span>
        <h1>Popularity is not task fit.</h1>
        <p className="lead">
          Skill marketplaces are fragmenting. SkillFit is a lightweight decision layer
          that helps users choose Skills by concrete task, evidence, and safety.
        </p>
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

