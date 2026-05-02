"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { UseCase } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "@/components/TrackedLink";

const starterTasks = [
  "research competitors",
  "write a PRD",
  "review code",
  "make a landing page"
];

export function TaskFinder({ useCases }: { useCases: UseCase[] }) {
  const [query, setQuery] = useState("");
  const lastTrackedSearch = useRef("");

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

  useEffect(() => {
    const normalized = query.trim().toLowerCase();
    if (normalized.length < 3) return;

    const signature = `${normalized}:${matches.map((match) => match.slug).join(",")}`;
    if (lastTrackedSearch.current === signature) return;

    const timeout = window.setTimeout(() => {
      lastTrackedSearch.current = signature;
      trackEvent("task_search_started", {
        query_length: normalized.length,
        match_count: matches.length,
        top_match: matches[0]?.slug,
        has_match: matches.length > 0
      });

      if (matches.length === 0) {
        trackEvent("task_search_no_match", {
          query_length: normalized.length
        });
      }
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [matches, query]);

  return (
    <div className="task-finder">
      <label htmlFor="task-query">Describe your task</label>
      <div className="task-input-row">
        <input
          id="task-query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. research competitors for a new AI tool"
        />
        <TrackedLink
          href="/submit"
          className="button button-dark"
          eventName="submit_clicked"
          eventProperties={{ location: "task_finder", query_length: query.trim().length }}
        >
          Submit task
        </TrackedLink>
      </div>
      <div className="task-chip-row" aria-label="Example tasks">
        {starterTasks.map((task) => (
          <button
            type="button"
            key={task}
            onClick={() => {
              setQuery(task);
              trackEvent("task_search_started", {
                source: "starter_task",
                starter_task: task
              });
            }}
          >
            {task}
          </button>
        ))}
      </div>
      <div className="match-panel">
        <span>{query ? "Closest matches" : "Popular starting points"}</span>
        {matches.length > 0 ? (
          <div className="match-list">
            {matches.map((useCase) => (
              <TrackedLink
                href={`/use-cases/${useCase.slug}`}
                key={useCase.slug}
                eventName="use_case_clicked"
                eventProperties={{
                  use_case: useCase.slug,
                  source: "task_finder_match",
                  query_length: query.trim().length
                }}
              >
                {useCase.shortTitle}
              </TrackedLink>
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
