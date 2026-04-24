import { getSeoGuide } from "@/data/seoGuides";
import { getSeoGuideMetadata, SeoGuidePage } from "@/components/SeoGuidePage";

const guide = getSeoGuide("ai-skill-marketplace-list")!;

export const metadata = getSeoGuideMetadata(guide);

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
