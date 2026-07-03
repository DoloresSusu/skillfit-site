import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { getArena, getArenaSkills, arenas } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export function generateStaticParams() {
  return arenas.map((arena) => ({ slug: arena.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const arena = getArena(slug);
  if (!arena) return {};

  const title = arena.seoTitle || arena.title;
  const description = arena.seoDescription || arena.task;

  return {
    title,
    description,
    alternates: {
      canonical: `/arena/${arena.slug}`
    },
    openGraph: {
      title: `${title} | SkillFit`,
      description,
      url: `${baseUrl}/arena/${arena.slug}`,
      type: "article"
    }
  };
}

export default async function ArenaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const arena = getArena(slug);
  if (!arena) notFound();
  const { skillA, skillB } = getArenaSkills(arena);
  const relatedLinks = arena.relatedLinks || [];
  const faqs = arena.faqs || [];
  const answer = arena.answer || arena.verdict;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: arena.seoTitle || arena.title,
      description: arena.seoDescription || arena.task,
      url: `${baseUrl}/arena/${arena.slug}`,
      datePublished: "2026-04-24",
      dateModified: "2026-07-03",
      author: {
        "@type": "Organization",
        name: "SkillFit",
        url: baseUrl
      },
      publisher: {
        "@type": "Organization",
        name: "SkillFit",
        url: baseUrl
      },
      about: ["AI skills", "skill comparison", arena.skillA, arena.skillB],
      mainEntityOfPage: `${baseUrl}/arena/${arena.slug}`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "SkillFit",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Arena",
          item: `${baseUrl}/arena`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: arena.title,
          item: `${baseUrl}/arena/${arena.slug}`
        }
      ]
    }
  ].filter((item) => item["@type"] !== "FAQPage" || faqs.length > 0);

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <span className="eyebrow">Arena duel</span>
        <h1>{arena.title}</h1>
        <p className="lead">{arena.task}</p>
        <div className="answer-box">
          <strong>Short answer</strong>
          <p>{answer}</p>
        </div>
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
            <TrackedLink
              href={`/skills/${skillA?.slug || arena.skillA}`}
              eventName="skill_card_clicked"
              eventProperties={{ source: "arena_reveal", arena: arena.slug, skill: arena.skillA }}
            >
              {skillA?.name || arena.skillA}
            </TrackedLink>
            <strong>vs</strong>
            <TrackedLink
              href={`/skills/${skillB?.slug || arena.skillB}`}
              eventName="skill_card_clicked"
              eventProperties={{ source: "arena_reveal", arena: arena.slug, skill: arena.skillB }}
            >
              {skillB?.name || arena.skillB}
            </TrackedLink>
          </div>
          {relatedLinks.length > 0 && (
            <>
              <h3>Related pages</h3>
              <div className="link-stack">
                {relatedLinks.map((link) => (
                  <TrackedLink
                    href={link.href}
                    key={link.href}
                    eventName="arena_clicked"
                    eventProperties={{
                      source: "arena_related",
                      arena: arena.slug,
                      target_path: link.href
                    }}
                  >
                    {link.label}
                  </TrackedLink>
                ))}
              </div>
            </>
          )}
          <TrackedLink
            href="/submit"
            className="button button-dark"
            eventName="submit_clicked"
            eventProperties={{ location: "arena_detail", arena: arena.slug }}
          >
            Submit a new duel
          </TrackedLink>
        </aside>
      </section>

      {faqs.length > 0 && (
        <section className="panel faq-panel">
          <span className="eyebrow">AEO answers</span>
          <h2>Common questions about this comparison</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
