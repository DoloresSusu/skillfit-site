import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SkillCard } from "@/components/SkillCard";
import { TrackedLink } from "@/components/TrackedLink";
import { skills } from "@/data/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  title: "AI Skill Directory: Reviews and Evidence Cards",
  description:
    "Browse AI skill reviews for web-access, ui-ux-pro-max, lark-minutes, research, UI design, writing, safety notes, and 10-minute validation prompts.",
  alternates: {
    canonical: "/skills"
  },
  openGraph: {
    title: "AI Skill Directory: Reviews and Evidence Cards | SkillFit",
    description:
      "Browse AI skill reviews for web-access, ui-ux-pro-max, lark-minutes, research, UI design, writing, safety notes, and 10-minute validation prompts.",
    url: `${baseUrl}/skills`,
    type: "website"
  }
};

const prioritySkillSlugs = [
  "web-access",
  "lark-minutes",
  "ui-ux-pro-max",
  "frontend-design",
  "implement-design"
];

const skillDirectoryFaqs = [
  {
    question: "What is an AI skill directory?",
    answer:
      "An AI skill directory is a structured index of reusable AI agent skills, organized by task fit, evidence quality, safety risk, and validation prompts."
  },
  {
    question: "How should I choose an AI skill from the directory?",
    answer:
      "Start from the task, compare the required capabilities, then open the skill review page and run the 10-minute test prompt before adopting it."
  },
  {
    question: "Why does SkillFit show evidence and safety levels?",
    answer:
      "Evidence and safety levels help users avoid installing skills by name alone. They highlight how well the skill is supported and where human review is still needed."
  }
];

export default function SkillsPage() {
  const prioritySkills = prioritySkillSlugs
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill): skill is (typeof skills)[number] => Boolean(skill));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AI Skill Directory: Reviews and Evidence Cards",
      description: metadata.description,
      url: `${baseUrl}/skills`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: skills.map((skill, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${skill.name} Skill Review`,
          url: `${baseUrl}/skills/${skill.slug}`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: skillDirectoryFaqs.map((faq) => ({
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
          name: "Skills",
          item: `${baseUrl}/skills`
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">Skill index</span>
        <h1>AI Skill Directory: reviews before you install another Skill.</h1>
        <p className="lead">
          Each evidence card translates technical Skill details into the questions
          working users ask before choosing from a fragmented skills marketplace:
          What task does it fit, how do I test it, and where can it fail?
        </p>
      </section>

      <section className="section guide-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Priority comparisons</span>
            <h2>Start with the Skill pages Google is already testing</h2>
          </div>
          <TrackedLink
            className="button button-light"
            href="/best-ai-skills-for-research"
            eventName="guide_clicked"
            eventProperties={{ source: "skills_priority_cta" }}
          >
            Research guide
          </TrackedLink>
        </div>
        <div className="grid grid-3">
          {prioritySkills.map((skill) => (
            <TrackedLink
              className="card guide-card"
              href={`/skills/${skill.slug}`}
              key={skill.slug}
              eventName="skill_card_clicked"
              eventProperties={{
                skill: skill.slug,
                source: "skills_priority"
              }}
            >
              <span className="card-topline">{skill.category}</span>
              <h3>{skill.name} Skill Review</h3>
              <p>{skill.tagline}</p>
              <span className="text-link">Review fit and test prompt</span>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="grid grid-3">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.slug} />
        ))}
      </section>

      <section className="panel faq-panel">
        <span className="eyebrow">Directory answers</span>
        <h2>Common questions about AI skill directories</h2>
        <div className="faq-grid">
          {skillDirectoryFaqs.map((faq) => (
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
