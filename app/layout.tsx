import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://skillfit.dev"),
  title: {
    default: "SkillFit - Find the right AI Agent Skill for your task",
    template: "%s | SkillFit"
  },
  description:
    "SkillFit helps AI builders choose Agent Skills by task fit, evidence level, safety notes, and test packs.",
  openGraph: {
    title: "SkillFit",
    description: "Find the right AI Agent Skill for your task.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

