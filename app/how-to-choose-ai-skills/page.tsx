import { getSeoGuide } from "@/data/seoGuides";
import { getSeoGuideMetadata, SeoGuidePage } from "@/components/SeoGuidePage";

const guide = getSeoGuide("how-to-choose-ai-skills")!;

export const metadata = getSeoGuideMetadata(guide);

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
