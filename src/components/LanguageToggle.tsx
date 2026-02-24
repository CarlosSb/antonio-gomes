"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/content/profile";

type LanguageToggleProps = {
  locale: Locale;
  languageToggleLabel: string;
  ptLabel: string;
  enLabel: string;
  ptShortLabel: string;
  enShortLabel: string;
};

export default function LanguageToggle({
  locale,
  languageToggleLabel,
  ptLabel,
  enLabel,
  ptShortLabel,
  enShortLabel,
}: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (targetLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "pt" || segments[0] === "en") {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }

    const nextPath = `/${segments.join("/")}`;
    document.cookie = `lang=${targetLocale}; path=/; max-age=31536000; samesite=lax`;
    router.push(nextPath);
  };

  return (
    <div
      className="inline-flex rounded-md border border-slate-700 bg-slate-900 p-1"
      role="group"
      aria-label={languageToggleLabel}
    >
      <button
        type="button"
        onClick={() => switchLocale("pt")}
        className={`rounded px-2.5 py-1 text-xs font-medium transition ${
          locale === "pt"
            ? "bg-sky-500 text-slate-950"
            : "text-slate-200 hover:bg-slate-800"
        }`}
        aria-pressed={locale === "pt"}
        aria-label={ptLabel}
      >
        {ptShortLabel}
      </button>
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`rounded px-2.5 py-1 text-xs font-medium transition ${
          locale === "en"
            ? "bg-sky-500 text-slate-950"
            : "text-slate-200 hover:bg-slate-800"
        }`}
        aria-pressed={locale === "en"}
        aria-label={enLabel}
      >
        {enShortLabel}
      </button>
    </div>
  );
}
