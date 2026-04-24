"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { UseCase } from "@/lib/types";

export function TaskFinder({ useCases }: { useCases: UseCase[] }) {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return useCases.slice(0, 3);

    return useCases
      .map((useCase) => {
        const haystack = [
          useCase.title,
          useCase.description,
          useCase.userIntent,
          ...useCase.requiredCapabilities,
          ...useCase.keywords
        ]
          .join(" ")
          .toLowerCase();
        const score = normalized
          .split(/\s+/)
          .filter((token) => haystack.includes(token)).length;
        return { useCase, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.useCase)
      .slice(0, 3);
  }, [query, useCases]);

  return (
    <div className="task-finder">
      <label htmlFor="task-query">Describe your task</label>
      <div className="task-input-row">
        <input
          id="task-query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. rewrite an AI article into a WeChat post"
        />
        <Link href="/submit" className="button button-dark">
          Submit task
        </Link>
      </div>
      <div className="match-panel">
        <span>{query ? "Closest matches" : "Popular starting points"}</span>
        {matches.length > 0 ? (
          <div className="match-list">
            {matches.map((useCase) => (
              <Link href={`/use-cases/${useCase.slug}`} key={useCase.slug}>
                {useCase.shortTitle}
              </Link>
            ))}
          </div>
        ) : (
          <p>
            No exact match yet. Submit your task and we will add a SkillFit page for it.
          </p>
        )}
      </div>
    </div>
  );
}

