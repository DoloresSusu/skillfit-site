"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type TrackingEvent } from "@/lib/analytics";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

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
        trackEvent(eventName, eventProperties);
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
        trackEvent(eventName, eventProperties);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
