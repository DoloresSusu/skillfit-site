import Link from "next/link";
import type { Arena } from "@/lib/types";

export function ArenaCard({ arena }: { arena: Arena }) {
  return (
    <article className="card arena-card">
      <span className="eyebrow">Arena duel</span>
      <h3>
        <Link href={`/arena/${arena.slug}`}>{arena.title}</Link>
      </h3>
      <p>{arena.task}</p>
      <div className="versus-row">
        <span>{arena.skillA}</span>
        <strong>vs</strong>
        <span>{arena.skillB}</span>
      </div>
    </article>
  );
}

