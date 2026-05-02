import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EvidenceBadge, SafetyBadge } from "@/components/EvidenceBadge";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { getSkill, skills, useCases } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return {};

  return {
    title: `${skill.name} skill review: fit, evidence, and safety`,
    description: `${skill.tagline} See task fit, evidence notes, safety checks, and a 10-minute SkillFit test prompt.`,
    alternates: {
      canonical: `/skills/${skill.slug}`
    },
    openGraph: {
      title: `${skill.name} skill review | SkillFit`,
      description: skill.tagline,
      url: `${baseUrl}/skills/${skill.slug}`,
      type: "article"
    }
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: skill.name,
      applicationCategory: "AI Agent Skill",
      description: skill.tagline,
      url: `${baseUrl}/skills/${skill.slug}`,
      operatingSystem: "Agent runtime dependent",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (skill.faqs || []).map((faq) => ({
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
        },
        {
          "@type": "ListItem",
          position: 3,
          name: skill.name,
          item: `${baseUrl}/skills/${skill.slug}`
        }
      ]
    }
  ].filter((item) => item["@type"] !== "FAQPage" || (skill.faqs || []).length > 0);

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">{skill.category}</span>
        <h1>{skill.name}</h1>
        <p className="lead">{skill.tagline}</p>
        <div className="badge-row">
          <EvidenceBadge level={skill.evidenceLevel} />
          <SafetyBadge level={skill.safetyLevel} />
        </div>
      </section>

      <section className="detail-grid">
        <div className="panel">
          <h2>Fit map</h2>
          {skill.fitMap.length > 0 ? (
            <div className="fit-table">
              {skill.fitMap.map((fit) => {
                const useCase = useCases.find((item) => item.slug === fit.useCaseSlug);
                return (
                  <div className="fit-row" key={`${fit.useCaseSlug}-${fit.label}`}>
                    <Link href={`/use-cases/${fit.useCaseSlug}`}>
                      {useCase?.shortTitle || fit.useCaseSlug}
                    </Link>
                    <strong>{fit.label}</strong>
                    <span>{fit.note}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Fit map is not verified yet. Submit a real task to improve this card.</p>
          )}

          {skill.audienceNotes && (
            <>
              <h2>Who should try it first</h2>
              <ul className="check-list">
                {skill.audienceNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <h2>Best for</h2>
          <div className="mini-list">
            {skill.bestFor.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <h2>Not for</h2>
          <ul className="plain-list">
            {skill.notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {skill.evidenceNotes && (
            <>
              <h2>Evidence notes</h2>
              <ul className="plain-list">
                {skill.evidenceNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {skill.safetyNotes && (
            <>
              <h2>Safety notes</h2>
              <ul className="plain-list">
                {skill.safetyNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {skill.usagePrompt && (
            <>
              <h2>10-minute test prompt</h2>
              <div className="prompt-box">{skill.usagePrompt}</div>
            </>
          )}
        </div>

        <aside className="panel">
          <h2>Source and setup check</h2>
          <ul className="plain-list">
            <li>Source: {skill.platform}</li>
            {skill.sourceStatus && <li>Source status: {skill.sourceStatus}</li>}
            {skill.lastVerified && <li>Last verified: {skill.lastVerified}</li>}
            <li>Command: {skill.installCommand}</li>
            <li>Safety level: {skill.safetyLevel}</li>
            <li>Evidence level: {skill.evidenceLevel}</li>
          </ul>
          {skill.supportedAgents && (
            <>
              <h3>Supported agent contexts</h3>
              <div className="mini-list">
                {skill.supportedAgents.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </>
          )}
          {skill.installMethods && (
            <>
              <h3>Install paths to check</h3>
              <ul className="plain-list">
                {skill.installMethods.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <TrackedLink
            href={skill.sourceUrl}
            className="button button-dark"
            eventName="source_clicked"
            eventProperties={{ skill: skill.slug, source_url: skill.sourceUrl }}
          >
            View source / submit source
          </TrackedLink>
        </aside>
      </section>

      {skill.faqs && (
        <section className="panel faq-panel">
          <span className="eyebrow">AEO answers</span>
          <h2>Common questions about {skill.name}</h2>
          <div className="faq-grid">
            {skill.faqs.map((faq) => (
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
