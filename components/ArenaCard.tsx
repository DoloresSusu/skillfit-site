import type { Arena } from "@/lib/types";
import { TrackedLink } from "@/components/TrackedLink";

export function ArenaCard({ arena }: { arena: Arena }) {
  return (
    <article className="card arena-card">
      <span className="eyebrow">Arena duel</span>
      <h3>
        <TrackedLink
          href={`/arena/${arena.slug}`}
          eventName="arena_clicked"
          eventProperties={{
            arena: arena.slug,
            skill_a: arena.skillA,
            skill_b: arena.skillB
          }}
        >
          {arena.title}
        </TrackedLink>
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
