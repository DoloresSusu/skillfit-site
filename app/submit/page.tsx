import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Skill or task",
  description: "Submit a Skill link, task, output sample, or Arena idea to SkillFit."
};

const submitUrl = process.env.NEXT_PUBLIC_SUBMIT_URL || "https://tally.so/r/D4X1AZ";

export default function SubmitPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Submit</span>
        <h1>Help build the task-to-Skill evidence layer.</h1>
        <p className="lead">
          First version is manually curated. Send a Skill link, a task, a real output
          sample, or a duel you want to see.
        </p>
      </section>

      <section className="detail-grid">
        <div className="panel">
          <h2>What to submit</h2>
          <ul className="check-list">
            <li>A Skill marketplace URL or GitHub repo</li>
            <li>The task you want to complete</li>
            <li>What good output looks like</li>
            <li>Any failure cases or safety concerns</li>
          </ul>
          <a href={submitUrl} className="button button-dark">
            Open submission form
          </a>
        </div>
        <aside className="panel">
          <h2>Why no account yet?</h2>
          <p>
            The MVP avoids login and database complexity until there is enough real
            submission volume. If this gets traction, submissions move to Supabase.
          </p>
        </aside>
      </section>
    </>
  );
}
