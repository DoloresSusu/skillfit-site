import type { SeoGuide } from "@/data/seoGuides";
import { TrackedLink } from "@/components/TrackedLink";

export function GuideCard({ guide, cta = "Read the guide" }: { guide: SeoGuide; cta?: string }) {
  return (
    <TrackedLink
      className="card guide-card"
      href={guide.path}
      eventName="guide_clicked"
      eventProperties={{ guide: guide.slug }}
    >
      <span className="card-topline">{guide.shortTitle}</span>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <span className="text-link">{cta}</span>
    </TrackedLink>
  );
}
