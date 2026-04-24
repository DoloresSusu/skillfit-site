import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArena, getArenaSkills, arenas } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return arenas.map((arena) => ({ slug: arena.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const arena = getArena(slug);
  if (!arena) return {};

  return {
    title: arena.title,
    description: arena.task
  };
}

export default async function ArenaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const arena = getArena(slug);
  if (!arena) notFound();
  const { skillA, skillB } = getArenaSkills(arena);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Arena duel</span>
        <h1>{arena.title}</h1>
        <p className="lead">{arena.task}</p>
      </section>

      <section className="grid grid-2">
        <article className="duel-output">
          <span className="eyebrow">Blind output A</span>
          <h2>Output A</h2>
          <p>{arena.blindSummaryA}</p>
        </article>
        <article className="duel-output">
          <span className="eyebrow">Blind output B</span>
          <h2>Output B</h2>
          <p>{arena.blindSummaryB}</p>
        </article>
      </section>

      <section className="detail-grid">
        <div className="panel">
          <h2>Current verdict</h2>
          <p>{arena.verdict}</p>
          <p>
            MVP note: public voting is not enabled yet. These duels are curated examples
            until we connect a lightweight submission and voting backend.
          </p>
        </div>
        <aside className="panel">
          <h2>Reveal</h2>
          <div className="versus-row">
            <Link href={`/skills/${skillA?.slug || arena.skillA}`}>
              {skillA?.name || arena.skillA}
            </Link>
            <strong>vs</strong>
            <Link href={`/skills/${skillB?.slug || arena.skillB}`}>
              {skillB?.name || arena.skillB}
            </Link>
          </div>
          <Link href="/submit" className="button button-dark">
            Submit a new duel
          </Link>
        </aside>
      </section>
    </>
  );
}

