import type { Metadata } from "next";
import { UseCaseCard } from "@/components/UseCaseCard";
import { useCases } from "@/data/content";

export const metadata: Metadata = {
  title: "Use cases",
  description: "Browse task-first Skill recommendations and test packs."
};

export default function UseCasesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Task library</span>
        <h1>Choose by job-to-be-done, not by marketplace rank.</h1>
        <p className="lead">
          Each use case explains what the task needs, which Skills fit, how to test
          them, and when to avoid them.
        </p>
      </section>
      <section className="grid grid-2">
        {useCases.map((useCase) => (
          <UseCaseCard useCase={useCase} key={useCase.slug} />
        ))}
      </section>
    </>
  );
}

