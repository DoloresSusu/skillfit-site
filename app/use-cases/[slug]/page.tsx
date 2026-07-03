import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SkillCard } from "@/components/SkillCard";
import { TrackedLink } from "@/components/TrackedLink";
import { getRecommendedSkills, getUseCase, useCases } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};

  const title = useCase.seoTitle || useCase.title;
  const description = useCase.seoDescription || useCase.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/use-cases/${useCase.slug}`
    },
    openGraph: {
      title: `${title} | SkillFit`,
      description,
      url: `${baseUrl}/use-cases/${useCase.slug}`,
      type: "article"
    }
  };
}

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const recommendedSkills = getRecommendedSkills(useCase);
  const faqs = useCase.faqs || [];
  const relatedLinks = useCase.relatedLinks || [];
  const answer = useCase.answer || useCase.userIntent;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: useCase.seoTitle || useCase.title,
      description: useCase.seoDescription || useCase.description,
      url: `${baseUrl}/use-cases/${useCase.slug}`,
      datePublished: "2026-04-24",
      dateModified: "2026-07-03",
      author: {
        "@type": "Organization",
        name: "SkillFit",
        url: baseUrl
      },
      publisher: {
        "@type": "Organization",
        name: "SkillFit",
        url: baseUrl
      },
      about: ["AI skills", "AI agents", "task-to-skill matching", ...useCase.keywords],
      mainEntityOfPage: `${baseUrl}/use-cases/${useCase.slug}`
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Recommended AI skills for ${useCase.shortTitle}`,
      itemListElement: recommendedSkills.map((skill, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: skill.name,
        url: `${baseUrl}/skills/${skill.slug}`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
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
        },
        {
          "@type": "ListItem",
          position: 3,
          name: useCase.title,
          item: `${baseUrl}/use-cases/${useCase.slug}`
        }
      ]
    }
  ].filter((item) => item["@type"] !== "FAQPage" || faqs.length > 0);

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">Use case</span>
        <h1>{useCase.title}</h1>
        <p className="lead">{useCase.description}</p>
        <div className="answer-box">
          <strong>Short answer</strong>
          <p>{answer}</p>
        </div>
      </section>

      <section className="detail-grid">
        <div className="panel">
          <h2>What this task needs</h2>
          <p>{useCase.userIntent}</p>
          <ul className="check-list">
            {useCase.requiredCapabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>

          <h2>Recommended Skills</h2>
          <div className="grid grid-2">
            {recommendedSkills.map((skill) => (
              <SkillCard skill={skill} key={skill.slug} />
            ))}
          </div>
        </div>

        <aside className="panel">
          <h2>Test pack</h2>
          <p>{useCase.testPack.input}</p>
          <h3>Success criteria</h3>
          <ul className="plain-list">
            {useCase.testPack.successCriteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Failure signals</h3>
          <ul className="plain-list">
            {useCase.testPack.failureSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Avoid when</h3>
          <ul className="plain-list">
            {useCase.avoidWhen.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {relatedLinks.length > 0 && (
            <>
              <h3>Related pages</h3>
              <div className="link-stack">
                {relatedLinks.map((link) => (
                  <TrackedLink
                    href={link.href}
                    key={link.href}
                    eventName="use_case_clicked"
                    eventProperties={{
                      source: "use_case_related",
                      use_case: useCase.slug,
                      target_path: link.href
                    }}
                  >
                    {link.label}
                  </TrackedLink>
                ))}
              </div>
            </>
          )}
        </aside>
      </section>

      {faqs.length > 0 && (
        <section className="panel faq-panel">
          <span className="eyebrow">AEO answers</span>
          <h2>Common questions about {useCase.shortTitle}</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
