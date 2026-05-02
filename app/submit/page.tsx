import type { Metadata } from "next";
import { TrackedAnchor } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Submit a Skill or task",
  description:
    "Submit a Skill link, real task, output sample, or failure case to help SkillFit validate task-to-Skill recommendations."
};

const submitUrl = process.env.NEXT_PUBLIC_SUBMIT_URL || "https://tally.so/r/D4X1AZ";

export default function SubmitPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Submit</span>
        <h1>Send the task evidence SkillFit needs.</h1>
        <p className="lead">
          The first version is manually curated. Send a concrete task, a Skill source,
          a real output sample, or a failure case so we can turn demand into better
          Skill pages.
        </p>
      </section>

      <section className="detail-grid">
        <div className="panel">
          <h2>What to submit</h2>
          <ul className="check-list">
            <li>The task you are trying to complete</li>
            <li>The AI agent you use, such as Codex, Claude Code, Cursor, or ChatGPT</li>
            <li>A Skill marketplace URL, GitHub repo, or install/source note</li>
            <li>What good output looks like, plus what failed if you already tried it</li>
          </ul>
          <TrackedAnchor
            href={submitUrl}
            className="button button-dark"
            eventName="submit_clicked"
            eventProperties={{ location: "submit_page", destination: "tally" }}
          >
            Open submission form
          </TrackedAnchor>
        </div>
        <aside className="panel">
          <h2>Why Tally for now?</h2>
          <p>
            At this stage, a form is enough to validate whether visitors have real
            tasks, real Skill sources, and real output samples. A database and account
            system should wait until submission volume justifies the extra product cost.
          </p>
        </aside>
      </section>
    </>
  );
}
