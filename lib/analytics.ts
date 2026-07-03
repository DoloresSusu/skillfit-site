"use client";

import type posthog from "posthog-js";

export type TrackingEvent =
  | "page_view"
  | "page_engagement"
  | "link_clicked"
  | "scroll_depth"
  | "task_search_started"
  | "task_search_no_match"
  | "use_case_clicked"
  | "skill_card_clicked"
  | "guide_clicked"
  | "source_clicked"
  | "install_command_clicked"
  | "arena_clicked"
  | "submit_clicked";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

let posthogPromise: Promise<typeof posthog | null> | null = null;

function sanitizedUrl(value: string) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`;
  } catch {
    return value.split("?")[0];
  }
}

function getDomain(value: string) {
  if (!value) return undefined;

  try {
    return new URL(value).hostname;
  } catch {
    return undefined;
  }
}

function includesDomain(domain: string | undefined, matches: string[]) {
  if (!domain) return false;
  return matches.some((match) => domain === match || domain.endsWith(`.${match}`));
}

function makeSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `sf_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function readSessionValue(key: string, fallback: string | undefined) {
  if (typeof window === "undefined") return fallback;

  try {
    const existing = window.sessionStorage.getItem(key);
    if (existing) return existing;
    if (fallback) window.sessionStorage.setItem(key, fallback);
    return fallback;
  } catch {
    return fallback;
  }
}

function readSessionQueryValue(
  params: URLSearchParams,
  queryKey: string,
  storageKey = `skillfit_first_${queryKey}`
) {
  return readSessionValue(storageKey, params.get(queryKey) || undefined);
}

function getDeviceType(width: number) {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function classifyTraffic({
  referrerDomain,
  utmSource,
  utmMedium,
  hasGclid,
  ownDomain
}: {
  referrerDomain?: string;
  utmSource?: string | null;
  utmMedium?: string | null;
  hasGclid?: boolean;
  ownDomain?: string;
}) {
  const source = (utmSource || "").toLowerCase();
  const medium = (utmMedium || "").toLowerCase();
  const paidMediums = ["cpc", "ppc", "paid", "paidsearch", "display", "ads"];
  const emailMediums = ["email", "newsletter"];
  const socialMediums = ["social", "social-paid", "social-organic"];
  const searchDomains = [
    "google.com",
    "bing.com",
    "duckduckgo.com",
    "yahoo.com",
    "baidu.com",
    "yandex.com",
    "ecosia.org",
    "brave.com",
    "kagi.com"
  ];
  const aiDomains = [
    "chatgpt.com",
    "claude.ai",
    "perplexity.ai",
    "gemini.google.com",
    "copilot.microsoft.com",
    "poe.com",
    "you.com"
  ];
  const socialDomains = [
    "x.com",
    "twitter.com",
    "linkedin.com",
    "reddit.com",
    "facebook.com",
    "instagram.com",
    "tiktok.com",
    "youtube.com"
  ];
  const socialSources = ["x", "twitter", "linkedin", "reddit", "facebook", "instagram", "tiktok", "youtube"];
  const searchSources = ["google", "bing", "duckduckgo", "yahoo", "baidu", "yandex", "ecosia", "brave", "kagi"];
  const aiSources = ["chatgpt", "claude", "perplexity", "gemini", "copilot", "poe", "you"];

  if (hasGclid || paidMediums.includes(medium)) return "paid";
  if (emailMediums.includes(medium)) return "email";
  if (socialMediums.includes(medium) || socialSources.includes(source) || includesDomain(source, socialDomains)) {
    return "social";
  }
  if (medium === "organic" || searchSources.includes(source)) return "organic_search";
  if (aiSources.includes(source) || includesDomain(source, aiDomains)) return "ai_referral";
  if (source) return "campaign";
  if (!referrerDomain) return "direct";
  if (ownDomain && referrerDomain === ownDomain) return "internal";
  if (includesDomain(referrerDomain, searchDomains)) return "organic_search";
  if (includesDomain(referrerDomain, aiDomains)) return "ai_referral";
  if (includesDomain(referrerDomain, socialDomains)) return "social";
  return "referral";
}

function getClientContext(): EventProperties {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const path = `${window.location.pathname}${window.location.search}`;
  const referrer = sanitizedUrl(document.referrer || "");
  const referrerDomain = getDomain(document.referrer || "");
  const landingPath = readSessionValue("skillfit_landing_path", path);
  const landingReferrer = readSessionValue("skillfit_landing_referrer", referrer);
  const landingReferrerDomain = getDomain(landingReferrer || "");
  const sessionId = readSessionValue("skillfit_session_id", makeSessionId());
  const sessionStartedAt = readSessionValue("skillfit_session_started_at", new Date().toISOString());
  const firstUtmSource = readSessionQueryValue(params, "utm_source");
  const firstUtmMedium = readSessionQueryValue(params, "utm_medium");
  const firstUtmCampaign = readSessionQueryValue(params, "utm_campaign");
  const firstUtmTerm = readSessionQueryValue(params, "utm_term");
  const firstUtmContent = readSessionQueryValue(params, "utm_content");
  const firstGclid = readSessionQueryValue(params, "gclid", "skillfit_first_gclid");
  const hasUtm = Array.from(params.keys()).some((key) => key.startsWith("utm_"));
  const hasGclid = params.has("gclid");
  const ownDomain = window.location.hostname;

  return {
    session_id: sessionId,
    session_started_at: sessionStartedAt,
    current_path: path,
    current_pathname: window.location.pathname,
    referrer_url: referrer,
    referrer_domain: referrerDomain,
    landing_path: landingPath,
    landing_referrer_url: landingReferrer,
    landing_referrer_domain: landingReferrerDomain,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    first_utm_source: firstUtmSource,
    first_utm_medium: firstUtmMedium,
    first_utm_campaign: firstUtmCampaign,
    first_utm_term: firstUtmTerm,
    first_utm_content: firstUtmContent,
    first_gclid: Boolean(firstGclid),
    has_utm: hasUtm,
    has_gclid: hasGclid,
    traffic_channel: classifyTraffic({
      referrerDomain,
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      hasGclid,
      ownDomain
    }),
    landing_traffic_channel: classifyTraffic({
      referrerDomain: landingReferrerDomain,
      utmSource: firstUtmSource,
      utmMedium: firstUtmMedium,
      hasGclid: Boolean(firstGclid),
      ownDomain
    }),
    device_type: getDeviceType(window.innerWidth),
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    browser_language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    page_title: document.title
  };
}

function getPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  if (!key || typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (!posthogPromise) {
    posthogPromise = import("posthog-js")
      .then((module) => {
        const client = module.default;
        client.init(key, {
          api_host: host,
          autocapture: false,
          capture_pageview: false,
          person_profiles: "identified_only"
        });
        return client;
      })
      .catch(() => null);
  }

  return posthogPromise;
}

export async function trackEvent(event: TrackingEvent, properties: EventProperties = {}) {
  const client = await getPostHog();

  if (!client) return;

  client.capture(event === "page_view" ? "$pageview" : event, {
    ...getClientContext(),
    ...properties,
    app: "skillfit"
  });
}
