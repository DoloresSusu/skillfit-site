import Link from "next/link";
import type { SeoGuide } from "@/data/seoGuides";

export function GuideCard({ guide }: { guide: SeoGuide }) {
  return (
    <Link className="card guide-card" href={guide.path}>
      <span className="card-topline">{guide.shortTitle}</span>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <span className="text-link">Read the guide</span>
    </Link>
  );
}
