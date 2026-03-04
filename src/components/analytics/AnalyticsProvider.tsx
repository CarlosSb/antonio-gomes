"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { isAnalyticsEnabled } from "@/lib/analytics";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

function PostHogPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthogKey || !pathname) {
      return;
    }

    const search = searchParams.toString();
    const currentUrl = `${window.location.origin}${pathname}${search ? `?${search}` : ""}`;

    posthog.capture("$pageview", {
      $current_url: currentUrl,
      locale: pathname.split("/").filter(Boolean)[0] ?? "default",
      pathname,
      search: search || undefined,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current || !posthogKey) {
      return;
    }

    posthog.init(posthogKey, {
      api_host: posthogHost,
      autocapture: true,
      capture_exceptions: true,
      capture_pageleave: true,
      capture_pageview: false,
      disable_session_recording: false,
      persistence: "localStorage+cookie",
    });

    didInit.current = true;
  }, []);

  if (!isAnalyticsEnabled()) {
    return <>{children}</>;
  }

  return (
    <PostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageTracker />
      </Suspense>
      {children}
    </PostHogProvider>
  );
}
