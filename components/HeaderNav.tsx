"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const enNavItems = [
  { href: "/use-cases", label: "Use cases" },
  { href: "/skills", label: "Skills" },
  { href: "/guides", label: "Guides" },
  { href: "/arena", label: "Arena" },
  { href: "/submit", label: "Submit" }
];

const zhNavItems = [
  { href: "/zh/guides", label: "指南" },
  { href: "/zh/how-to-choose-ai-skills", label: "如何选择" },
  { href: "/skills", label: "Skill 索引" },
  { href: "/arena", label: "Arena" },
  { href: "/submit", label: "提交" }
];

export function HeaderNav() {
  const pathname = usePathname() || "/";
  const items = pathname.startsWith("/zh") ? zhNavItems : enNavItems;

  return (
    <nav className="nav-links" aria-label="Main navigation">
      {items.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
      <LanguageSwitcher />
    </nav>
  );
}
