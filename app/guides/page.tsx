import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { getAlternateLanguages } from "@/data/i18n";
import { seoGuides } from "@/data/seoGuides";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  title: "AI Skill Guides",
  description:
    "Task-first guides for choosing AI Agent Skills for research, writing, coding, SEO, product work, UI design, and agent workflows.",
  alternates: {
    canonical: "/guides",
    languages: getAlternateLanguages("/guides")
  },
  openGraph: {
    title: "AI Skill Guides | SkillFit",
    description:
      "Task-first guides for choosing AI Agent Skills for research, writing, coding, SEO, product work, UI design, and agent workflows.",
    url: `${baseUrl}/guides`,
    type: "website"
  }
};

const guideFaqs = [
  {
    question: "What are AI skill guides?",
    answer:
      "AI skill guides explain which type of agent skill fits a task, what evidence to check, and which prompt can validate the skill quickly."
  },
  {
    question: "Which AI skill guide should I start with?",
    answer:
      "Start with the guide closest to your job: research, writing, coding, UI design, data analysis, documentation, or agent workflows."
  },
  {
    question: "How does SkillFit decide what to recommend?",
    answer:
      "SkillFit starts from task intent, then compares capabilities, evidence, safety risks, failure modes, and a short validation prompt."
  }
];

export default function GuidesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AI Skill Guides",
      description: metadata.description,
      url: `${baseUrl}/guides`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: seoGuides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${baseUrl}${guide.path}`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guideFaqs.map((faq) => ({
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
          name: "Guides",
          item: `${baseUrl}/guides`
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">SkillFit guides</span>
        <h1>AI Skill guides by task.</h1>
        <p className="lead">
          Start from what you need to do, then choose the skill type, test prompt,
          red flags, and evidence level that match the task.
        </p>
      </section>

      <section className="grid grid-3">
        {seoGuides.map((guide) => (
          <GuideCard guide={guide} key={guide.slug} />
        ))}
      </section>

      <section className="panel faq-panel">
        <span className="eyebrow">Guide answers</span>
        <h2>Common questions about AI skill guides</h2>
        <div className="faq-grid">
          {guideFaqs.map((faq) => (
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
