import Link from "next/link";
import type { SeoGuide } from "@/data/seoGuides";

export function GuideCard({ guide, cta = "Read the guide" }: { guide: SeoGuide; cta?: string }) {
  return (
    <Link className="card guide-card" href={guide.path}>
      <span className="card-topline">{guide.shortTitle}</span>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <span className="text-link">{cta}</span>
    </Link>
  );
}
