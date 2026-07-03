import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  title: "About SkillFit: AI Skill Finder and Task-Fit Directory",
  description:
    "Learn why SkillFit is an AI skill finder and task-fit directory for choosing AI agent skills by evidence, safety, use case, and validation prompts.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About SkillFit: AI Skill Finder and Task-Fit Directory | SkillFit",
    description:
      "Learn why SkillFit is an AI skill finder and task-fit directory for choosing AI agent skills by evidence, safety, use case, and validation prompts.",
    url: `${baseUrl}/about`,
    type: "website"
  }
};

const aboutFaqs = [
  {
    question: "What is SkillFit?",
    answer:
      "SkillFit is an AI skill finder and task-fit directory that helps users choose AI agent skills by task, evidence, safety, and validation prompts."
  },
  {
    question: "Is SkillFit an AI skill marketplace?",
    answer:
      "SkillFit is not a generic marketplace. It is a decision layer above fragmented skill sources, directories, repositories, and agent ecosystems."
  },
  {
    question: "Who should use SkillFit?",
    answer:
      "SkillFit is built for PMs, creators, founders, teams, and AI builders who already use agents and want to choose the right skill for a concrete job."
  }
];

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About SkillFit",
      description: metadata.description,
      url: `${baseUrl}/about`,
      mainEntity: {
        "@type": "Organization",
        name: "SkillFit",
        url: baseUrl,
        description:
          "SkillFit is an AI skill finder and task-fit directory for choosing AI agent skills."
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "SkillFit",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${baseUrl}/about`
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">About SkillFit</span>
        <h1>About SkillFit: an AI skill finder for task fit.</h1>
        <p className="lead">
          Skill marketplaces are fragmenting. SkillFit helps people who already
          use AI agents choose skills by concrete task, evidence, safety, and
          output quality instead of popularity alone.
        </p>
        <div className="answer-box">
          <strong>Short answer</strong>
          <p>
            SkillFit is a task-first AI skill directory: start from the job, compare
            evidence cards, run a 10-minute validation prompt, then choose the skill.
          </p>
        </div>
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
          <div className="link-stack">
            <TrackedLink href="/skills" eventName="skill_card_clicked" eventProperties={{ source: "about_primary" }}>
              Browse the AI skill directory
            </TrackedLink>
            <TrackedLink href="/use-cases" eventName="use_case_clicked" eventProperties={{ source: "about_primary" }}>
              Choose by use case
            </TrackedLink>
            <TrackedLink href="/how-to-choose-ai-skills" eventName="guide_clicked" eventProperties={{ source: "about_primary" }}>
              Read the skill selection checklist
            </TrackedLink>
          </div>
        </div>
        <aside className="panel">
          <h2>What this is not yet</h2>
          <p>
            SkillFit is not trying to be a mass-market app store in the first stage.
            The near-term goal is to validate task demand, search intent, and submit
            behavior before building accounts, voting, automation, or paid workflows.
          </p>
          <div className="link-stack">
            <TrackedLink href="/ai-skill-marketplace-list" eventName="guide_clicked" eventProperties={{ source: "about_sidebar" }}>
              Compare skill marketplace options
            </TrackedLink>
            <TrackedLink href="/best-ai-skills-for-research" eventName="guide_clicked" eventProperties={{ source: "about_sidebar" }}>
              See AI researcher skills
            </TrackedLink>
          </div>
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
      <section className="panel faq-panel">
        <span className="eyebrow">About answers</span>
        <h2>Common questions about SkillFit</h2>
        <div className="faq-grid">
          {aboutFaqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
