"use client";

import type posthog from "posthog-js";

export type TrackingEvent =
  | "page_view"
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
    ...properties,
    app: "skillfit"
  });
}
