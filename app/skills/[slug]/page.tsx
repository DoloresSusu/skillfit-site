import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EvidenceBadge, SafetyBadge } from "@/components/EvidenceBadge";
import { getSkill, skills, useCases } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return {};

  return {
    title: `${skill.name} review`,
    description: skill.tagline
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  return (
    <>
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
        </div>

        <aside className="panel">
          <h2>Install safety check</h2>
          <ul className="plain-list">
            <li>Source: {skill.platform}</li>
            <li>Command: {skill.installCommand}</li>
            <li>Safety level: {skill.safetyLevel}</li>
            <li>Evidence level: {skill.evidenceLevel}</li>
          </ul>
          <Link href={skill.sourceUrl} className="button button-dark">
            View source / submit source
          </Link>
        </aside>
      </section>
    </>
  );
}

