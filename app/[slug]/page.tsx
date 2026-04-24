import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoGuideMetadata, SeoGuidePage } from "@/components/SeoGuidePage";
import { dynamicSeoGuides, getSeoGuide } from "@/data/seoGuides";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dynamicSeoGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSeoGuide(slug);
  if (!guide) return {};

  return getSeoGuideMetadata(guide);
}

export default async function DynamicSeoGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getSeoGuide(slug);
  if (!guide) notFound();

  return <SeoGuidePage guide={guide} />;
}
