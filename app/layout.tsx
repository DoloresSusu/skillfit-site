import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SkillFit - Find the right AI Agent Skill for your task",
    template: "%s | SkillFit"
  },
  description:
    "SkillFit helps AI builders choose Agent Skills by task fit, evidence level, safety notes, and test packs.",
  alternates: {
    types: {
      "text/plain": `${baseUrl}/llms.txt`
    }
  },
  openGraph: {
    title: "SkillFit",
    description: "Find the right AI Agent Skill for your task.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SkillFit",
      url: baseUrl,
      description:
        "SkillFit helps AI builders choose Agent Skills by task fit, evidence level, safety notes, and test packs.",
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/use-cases?query={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SkillFit",
      url: baseUrl,
      description: "A task-to-skill advisor for AI Agent Skills.",
      sameAs: ["https://doloressu.com/projects/skillfit.html"]
    }
  ];

  return (
    <html lang="en">
      <body>
        <JsonLd data={siteSchema} />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
