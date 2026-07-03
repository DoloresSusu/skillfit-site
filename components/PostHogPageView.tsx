"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

function getPageType(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname === "/skills") return "skill_index";
  if (pathname.startsWith("/skills/")) return "skill_detail";
  if (pathname === "/guides") return "guide_index";
  if (pathname.startsWith("/use-cases/")) return "use_case";
  if (pathname.startsWith("/arena/")) return "arena_detail";
  if (pathname.startsWith("/zh/")) return "localized";
  return "guide_or_static";
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    trackEvent("page_view", {
      path,
      pathname,
      page_type: getPageType(pathname)
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
