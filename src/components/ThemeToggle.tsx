"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useLocalizedContent } from "@/lib/language";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.64 5.64l1.56 1.56M16.8 16.8l1.56 1.56M18.36 5.64 16.8 7.2M7.2 16.8l-1.56 1.56"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M20.3 14.14A8.5 8.5 0 1 1 9.86 3.7a7 7 0 1 0 10.44 10.44Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const content = useLocalizedContent();

  const nextThemeLabel =
    resolvedTheme === "dark"
      ? content.accessibility.switchToLightTheme
      : content.accessibility.switchToDarkTheme;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={nextThemeLabel}
      title={nextThemeLabel}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-slate-600 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    >
      <span className="sr-only">{content.accessibility.themeToggle}</span>
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
