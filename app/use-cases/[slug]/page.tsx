import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkillCard } from "@/components/SkillCard";
import { getRecommendedSkills, getUseCase, useCases } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};

  return {
    title: useCase.title,
    description: useCase.description
  };
}

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const recommendedSkills = getRecommendedSkills(useCase);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Use case</span>
        <h1>{useCase.title}</h1>
        <p className="lead">{useCase.description}</p>
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
        </aside>
      </section>
    </>
  );
}

