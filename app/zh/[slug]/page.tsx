import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoGuideMetadata, SeoGuidePage } from "@/components/SeoGuidePage";
import { getZhSeoGuide, zhSeoGuides } from "@/data/zhSeoGuides";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return zhSeoGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getZhSeoGuide(slug);
  if (!guide) return {};

  return getSeoGuideMetadata(guide);
}

export default async function ZhSeoGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getZhSeoGuide(slug);
  if (!guide) notFound();

  return <SeoGuidePage guide={guide} locale="zh" />;
}
