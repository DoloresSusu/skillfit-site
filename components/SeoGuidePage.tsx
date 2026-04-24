import type { Metadata } from "next";
import Link from "next/link";
import type { SeoGuide } from "@/data/seoGuides";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export function getSeoGuideMetadata(guide: SeoGuide): Metadata {
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: guide.path
    },
    openGraph: {
      title: `${guide.title} | SkillFit`,
      description: guide.description,
      url: `${baseUrl}${guide.path}`,
      type: "article"
    }
  };
}

export function SeoGuidePage({ guide }: { guide: SeoGuide }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <section className="page-hero guide-hero">
        <span className="eyebrow">SkillFit guide</span>
        <h1>{guide.title}</h1>
        <p className="lead">{guide.description}</p>
        <div className="answer-box">
          <strong>Short answer</strong>
          <p>{guide.answer}</p>
        </div>
      </section>

      <section className="guide-layout">
        <article className="panel guide-main">
          <h2>Who this guide is for</h2>
          <ul className="check-list">
            {guide.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Recommended skill types</h2>
          <div className="guide-stack">
            {guide.recommendedSkillTypes.map((skillType) => (
              <div className="guide-row" key={skillType.name}>
                <strong>{skillType.name}</strong>
                <p>{skillType.fit}</p>
              </div>
            ))}
          </div>

          <h2>Decision checklist</h2>
          <ol className="number-list">
            {guide.decisionChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <h2>10-minute test prompt</h2>
          <div className="prompt-box">{guide.testPrompt}</div>
        </article>

        <aside className="panel guide-sidebar">
          <h2>Red flags</h2>
          <ul className="plain-list">
            {guide.redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Related SkillFit pages</h2>
          <div className="link-stack">
            {guide.relatedLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="panel faq-panel">
        <span className="eyebrow">AEO answers</span>
        <h2>Common questions</h2>
        <div className="faq-grid">
          {guide.faqs.map((faq) => (
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
