"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type EngagementState = {
  startedAt: number;
  activeStartedAt: number | null;
  activeTimeMs: number;
  maxScrollPercent: number;
  clickCount: number;
  internalClickCount: number;
  externalClickCount: number;
  firstClickMs?: number;
  firstClickTarget?: string;
  firstClickText?: string;
  lastClickTarget?: string;
  lastClickText?: string;
};

function createState(): EngagementState {
  return {
    startedAt: performance.now(),
    activeStartedAt: document.visibilityState === "visible" ? performance.now() : null,
    activeTimeMs: 0,
    maxScrollPercent: 0,
    clickCount: 0,
    internalClickCount: 0,
    externalClickCount: 0
  };
}

function textFromAnchor(anchor: HTMLAnchorElement) {
  return (
    anchor.innerText ||
    anchor.getAttribute("aria-label") ||
    anchor.getAttribute("title") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function sectionName(anchor: HTMLAnchorElement) {
  const container = anchor.closest("header, nav, footer, section, aside, article");
  if (!container) return undefined;

  if (container.tagName === "HEADER") return "header";
  if (container.tagName === "NAV") return "nav";
  if (container.tagName === "FOOTER") return "footer";
  if (container.tagName === "ASIDE") return "aside";

  const heading = container.querySelector("h1, h2, h3");
  return heading?.textContent?.replace(/\s+/g, " ").trim().slice(0, 80);
}

function targetFromAnchor(anchor: HTMLAnchorElement) {
  try {
    const targetUrl = new URL(anchor.href, window.location.href);
    const isExternal = targetUrl.origin !== window.location.origin;

    return {
      isExternal,
      targetPath: isExternal ? undefined : `${targetUrl.pathname}${targetUrl.search}`,
      targetUrl: isExternal ? `${targetUrl.origin}${targetUrl.pathname}` : undefined,
      targetDomain: isExternal ? targetUrl.hostname : undefined
    };
  } catch {
    return {
      isExternal: undefined,
      targetPath: anchor.getAttribute("href") || undefined,
      targetUrl: undefined,
      targetDomain: undefined
    };
  }
}

function scrollPercent() {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  if (!scrollHeight) return 0;

  const viewportBottom = window.scrollY + window.innerHeight;
  return Math.min(100, Math.round((viewportBottom / scrollHeight) * 100));
}

function bucketTime(ms: number) {
  if (ms < 5000) return "0-5s";
  if (ms < 15000) return "5-15s";
  if (ms < 45000) return "15-45s";
  if (ms < 120000) return "45-120s";
  return "120s+";
}

function EngagementTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const stateRef = useRef<EngagementState | null>(null);
  const snapshotIndexRef = useRef(0);
  const pageKey = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;

  useEffect(() => {
    stateRef.current = createState();
    snapshotIndexRef.current = 0;

    function closeActiveWindow() {
      const state = stateRef.current;
      if (!state || state.activeStartedAt === null) return;

      state.activeTimeMs += performance.now() - state.activeStartedAt;
      state.activeStartedAt = null;
    }

    function openActiveWindow() {
      const state = stateRef.current;
      if (!state || state.activeStartedAt !== null) return;

      state.activeStartedAt = performance.now();
    }

    function updateScrollDepth() {
      const state = stateRef.current;
      if (!state) return;

      state.maxScrollPercent = Math.max(state.maxScrollPercent, scrollPercent());
    }

    function sendSnapshot(reason: string) {
      const state = stateRef.current;
      if (!state) return;

      updateScrollDepth();
      if (document.visibilityState === "hidden") {
        closeActiveWindow();
      }

      const timeOnPageMs = Math.round(performance.now() - state.startedAt);
      const activeTimeMs = Math.round(
        state.activeTimeMs +
          (state.activeStartedAt === null ? 0 : performance.now() - state.activeStartedAt)
      );

      snapshotIndexRef.current += 1;
      trackEvent("page_engagement", {
        path: pageKey,
        pathname,
        snapshot_reason: reason,
        snapshot_index: snapshotIndexRef.current,
        time_on_page_ms: timeOnPageMs,
        time_on_page_bucket: bucketTime(timeOnPageMs),
        active_time_ms: activeTimeMs,
        active_time_bucket: bucketTime(activeTimeMs),
        max_scroll_percent: state.maxScrollPercent,
        clicked: state.clickCount > 0,
        no_click: state.clickCount === 0,
        click_count: state.clickCount,
        internal_click_count: state.internalClickCount,
        external_click_count: state.externalClickCount,
        first_click_ms: state.firstClickMs,
        first_click_target: state.firstClickTarget,
        first_click_text: state.firstClickText,
        last_click_target: state.lastClickTarget,
        last_click_text: state.lastClickText
      });
    }

    function onVisibilityChange() {
      if (document.visibilityState === "hidden") {
        sendSnapshot("visibility_hidden");
      } else {
        openActiveWindow();
      }
    }

    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const state = stateRef.current;
      if (!state) return;

      const link = targetFromAnchor(anchor);
      const linkText = textFromAnchor(anchor);
      const targetValue = link.targetPath || link.targetUrl || anchor.getAttribute("href") || "";
      const pageAgeMs = Math.round(performance.now() - state.startedAt);

      state.clickCount += 1;
      if (link.isExternal) {
        state.externalClickCount += 1;
      } else {
        state.internalClickCount += 1;
      }

      if (state.firstClickMs === undefined) {
        state.firstClickMs = pageAgeMs;
        state.firstClickTarget = targetValue;
        state.firstClickText = linkText;
      }
      state.lastClickTarget = targetValue;
      state.lastClickText = linkText;

      trackEvent("link_clicked", {
        path: pageKey,
        pathname,
        link_text: linkText,
        link_section: sectionName(anchor),
        target_path: link.targetPath,
        target_url: link.targetUrl,
        target_domain: link.targetDomain,
        is_external: link.isExternal,
        click_index: state.clickCount,
        page_age_ms: pageAgeMs,
        new_tab: anchor.target === "_blank"
      });
    }

    updateScrollDepth();
    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    window.addEventListener("resize", updateScrollDepth);
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("click", onClick, true);

    return () => {
      sendSnapshot("route_change");
      window.removeEventListener("scroll", updateScrollDepth);
      window.removeEventListener("resize", updateScrollDepth);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("click", onClick, true);
      stateRef.current = null;
    };
  }, [pageKey, pathname]);

  return null;
}

export function EngagementTracker() {
  return (
    <Suspense fallback={null}>
      <EngagementTrackerInner />
    </Suspense>
  );
}
