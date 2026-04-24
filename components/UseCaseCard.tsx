import Link from "next/link";
import type { UseCase } from "@/lib/types";

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <article className="card use-case-card">
      <span className="eyebrow">Use case</span>
      <h3>
        <Link href={`/use-cases/${useCase.slug}`}>{useCase.shortTitle}</Link>
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

