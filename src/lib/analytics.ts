import posthog from "posthog-js";

type AnalyticsPrimitive = string | number | boolean | null;

export type AnalyticsProperties = Record<string, AnalyticsPrimitive | undefined>;

export function isAnalyticsEnabled() {
  return Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);
}

export function captureAnalyticsEvent(eventName: string, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined" || !isAnalyticsEnabled()) {
    return;
  }

  const sanitizedProperties = Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  );

  posthog.capture(eventName, sanitizedProperties);
}
