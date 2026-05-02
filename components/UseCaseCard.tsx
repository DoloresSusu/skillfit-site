import type { UseCase } from "@/lib/types";
import { TrackedLink } from "@/components/TrackedLink";

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <article className="card use-case-card">
      <span className="eyebrow">Use case</span>
      <h3>
        <TrackedLink
          href={`/use-cases/${useCase.slug}`}
          eventName="use_case_clicked"
          eventProperties={{ use_case: useCase.slug }}
        >
          {useCase.shortTitle}
        </TrackedLink>
      </h3>
      <p>{useCase.description}</p>
      <div className="mini-list">
        {useCase.requiredCapabilities.slice(0, 3).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}
