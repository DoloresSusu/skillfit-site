import { getSeoGuide } from "@/data/seoGuides";
import { getSeoGuideMetadata, SeoGuidePage } from "@/components/SeoGuidePage";

const guide = getSeoGuide("best-ai-skills-for-writing")!;

export const metadata = getSeoGuideMetadata(guide);

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
