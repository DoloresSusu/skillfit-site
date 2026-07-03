import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { EngagementTracker } from "@/components/EngagementTracker";
import { JsonLd } from "@/components/JsonLd";
import { PostHogPageView } from "@/components/PostHogPageView";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SkillFit: AI Skill Finder and Agent Skill Directory",
    template: "%s | SkillFit"
  },
  description:
    "Find the right AI agent skill by task. Compare skill fit, evidence, safety notes, test prompts, and marketplace alternatives.",
  icons: {
    icon: "/favicon.svg"
  },
  alternates: {
    types: {
      "text/plain": `${baseUrl}/llms.txt`
    }
  },
  openGraph: {
    title: "SkillFit AI Skill Finder",
    description: "Compare AI agent skills by task fit, evidence, safety notes, and test prompts.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SkillFit",
      alternateName: ["Skill Fit", "AI Skill Finder", "AI Agent Skill Directory"],
      url: baseUrl,
      description:
        "SkillFit helps PMs, creators, founders, teams, and AI builders choose AI agent skills by task fit, evidence, safety notes, and test prompts.",
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
      description: "A task-to-skill advisor and AI agent skill directory.",
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
        <PostHogPageView />
        <EngagementTracker />
        <ScrollDepthTracker />
        <Analytics />
      </body>
    </html>
  );
}
