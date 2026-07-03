"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type TrackingEvent } from "@/lib/analytics";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

function hrefToString(href: LinkProps["href"] | AnchorHTMLAttributes<HTMLAnchorElement>["href"]) {
  if (!href) return undefined;
  if (typeof href === "string") return href;
  return href.pathname || undefined;
}

function childText(children: ReactNode): string | undefined {
  if (typeof children === "string" || typeof children === "number") {
    return String(children).trim().slice(0, 120);
  }

  if (Array.isArray(children)) {
    return children
      .map(childText)
      .filter(Boolean)
      .join(" ")
      .trim()
      .slice(0, 120);
  }

  return undefined;
}

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    eventName: TrackingEvent;
    eventProperties?: EventProperties;
  };

export function TrackedLink({
  children,
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent(eventName, {
          link_text: childText(children),
          target_path: hrefToString(props.href),
          ...eventProperties
        });
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: TrackingEvent;
  eventProperties?: EventProperties;
};

export function TrackedAnchor({
  children,
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, {
          link_text: childText(children),
          target_url: hrefToString(props.href),
          is_external: props.href ? !props.href.startsWith("/") : undefined,
          ...eventProperties
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
