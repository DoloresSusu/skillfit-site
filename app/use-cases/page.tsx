import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { UseCaseCard } from "@/components/UseCaseCard";
import { useCases } from "@/data/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  title: "AI Skill Use Cases and Task Recommendations",
  description:
    "Browse AI skill use cases with task-first recommendations, required capabilities, test prompts, success criteria, and failure signals.",
  alternates: {
    canonical: "/use-cases"
  },
  openGraph: {
    title: "AI Skill Use Cases and Task Recommendations | SkillFit",
    description:
      "Browse AI skill use cases with task-first recommendations, required capabilities, test prompts, success criteria, and failure signals.",
    url: `${baseUrl}/use-cases`,
    type: "website"
  }
};

const useCaseFaqs = [
  {
    question: "What is an AI skill use case?",
    answer:
      "An AI skill use case starts with a concrete job to be done, then maps that job to recommended skills, capabilities, tests, and failure signals."
  },
  {
    question: "Why choose by use case instead of marketplace rank?",
    answer:
      "Marketplace rank shows popularity, but use-case matching shows whether a skill can solve your task with acceptable evidence and safety risk."
  },
  {
    question: "How do I validate a recommended skill?",
    answer:
      "Open the use case, run the test pack, compare the success criteria, and reject the skill if the output matches the listed failure signals."
  }
];

export default function UseCasesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AI Skill Use Cases and Task Recommendations",
      description: metadata.description,
      url: `${baseUrl}/use-cases`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: useCases.map((useCase, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: useCase.title,
          url: `${baseUrl}/use-cases/${useCase.slug}`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: useCaseFaqs.map((faq) => ({
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
          name: "Use cases",
          item: `${baseUrl}/use-cases`
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">Task library</span>
        <h1>Choose by job-to-be-done, not by marketplace rank.</h1>
        <p className="lead">
          Each use case explains the job to be done, which Skills fit, how to test
          them in 10 minutes, and when to avoid them.
        </p>
      </section>
      <section className="grid grid-2">
        {useCases.map((useCase) => (
          <UseCaseCard useCase={useCase} key={useCase.slug} />
        ))}
      </section>

      <section className="panel faq-panel">
        <span className="eyebrow">Use-case answers</span>
        <h2>Common questions about AI skill use cases</h2>
        <div className="faq-grid">
          {useCaseFaqs.map((faq) => (
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
