"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { captureAnalyticsEvent, type AnalyticsProperties } from "@/lib/analytics";

type AnalyticsLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  children: ReactNode;
  eventName?: string;
  eventProperties?: AnalyticsProperties;
};

export default function AnalyticsLink({
  children,
  eventName,
  eventProperties,
  href,
  ...props
}: AnalyticsLinkProps) {
  const handleClick = () => {
    if (!eventName) {
      return;
    }

    captureAnalyticsEvent(eventName, {
      href: typeof href === "string" ? href : undefined,
      ...eventProperties,
    });
  };

  return (
    <a
      {...props}
      href={href}
      data-analytics-event={eventName}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
