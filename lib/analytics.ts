"use client";

import type posthog from "posthog-js";

export type TrackingEvent =
  | "page_view"
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

function getClientContext(): EventProperties {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const path = `${window.location.pathname}${window.location.search}`;
  const referrer = sanitizedUrl(document.referrer || "");
  const landingPath = readSessionValue("skillfit_landing_path", path);
  const landingReferrer = readSessionValue("skillfit_landing_referrer", referrer);

  return {
    current_path: path,
    current_pathname: window.location.pathname,
    referrer_url: referrer,
    referrer_domain: getDomain(document.referrer || ""),
    landing_path: landingPath,
    landing_referrer_url: landingReferrer,
    landing_referrer_domain: getDomain(landingReferrer || ""),
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    has_utm: Array.from(params.keys()).some((key) => key.startsWith("utm_")),
    has_gclid: params.has("gclid")
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
