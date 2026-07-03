import type { Metadata } from "next";
import { ArenaCard } from "@/components/ArenaCard";
import { JsonLd } from "@/components/JsonLd";
import { arenas } from "@/data/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  title: "AI Skill Arena: Skill Comparisons and Duels",
  description:
    "Compare AI skills on concrete tasks with blind summaries, verdicts, related skill reviews, and task-specific comparison pages.",
  alternates: {
    canonical: "/arena"
  },
  openGraph: {
    title: "AI Skill Arena: Skill Comparisons and Duels | SkillFit",
    description:
      "Compare AI skills on concrete tasks with blind summaries, verdicts, related skill reviews, and task-specific comparison pages.",
    url: `${baseUrl}/arena`,
    type: "website"
  }
};

const arenaFaqs = [
  {
    question: "What is Skill Arena?",
    answer:
      "Skill Arena compares two AI skills on one concrete task, then shows the output summaries, verdict, and related skill review pages."
  },
  {
    question: "Are Arena pages universal rankings?",
    answer:
      "No. Arena pages are evidence snapshots for one task. Use them as proof points, then check the skill review and use-case page before deciding."
  },
  {
    question: "How should I read an AI skill comparison?",
    answer:
      "Start with the task, read the short verdict, then compare which skill fits your own goal: visual direction, research, writing, implementation, or workflow automation."
  }
];

export default function ArenaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AI Skill Arena",
      description: metadata.description,
      url: `${baseUrl}/arena`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: arenas.map((arena, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: arena.seoTitle || arena.title,
          url: `${baseUrl}/arena/${arena.slug}`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: arenaFaqs.map((faq) => ({
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
          name: "Arena",
          item: `${baseUrl}/arena`
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
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

      <section className="panel faq-panel">
        <span className="eyebrow">Arena answers</span>
        <h2>Common questions about Skill Arena</h2>
        <div className="faq-grid">
          {arenaFaqs.map((faq) => (
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
