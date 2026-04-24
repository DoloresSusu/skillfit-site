"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { enRouteMap, zhRouteMap } from "@/data/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isZh = pathname.startsWith("/zh");
  const targetPath = isZh ? enRouteMap[pathname] || "/" : zhRouteMap[pathname] || "/zh";

  return (
    <Link className="language-switch" href={targetPath} aria-label="Switch language">
      {isZh ? "EN" : "中文"}
    </Link>
  );
}
