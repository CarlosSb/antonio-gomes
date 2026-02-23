"use client";

import { useLocalizedContent, useLanguage } from "@/lib/language";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const content = useLocalizedContent();

  return (
    <div
      className="inline-flex rounded-md border border-slate-700 bg-slate-900 p-1"
      role="group"
      aria-label={content.accessibility.languageToggle}
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        className={`rounded px-2.5 py-1 text-xs font-medium transition ${
          locale === "pt"
            ? "bg-sky-500 text-slate-950"
            : "text-slate-200 hover:bg-slate-800"
        }`}
        aria-pressed={locale === "pt"}
        aria-label={content.actions.languagePt}
      >
        {content.actions.languagePtShort}
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded px-2.5 py-1 text-xs font-medium transition ${
          locale === "en"
            ? "bg-sky-500 text-slate-950"
            : "text-slate-200 hover:bg-slate-800"
        }`}
        aria-pressed={locale === "en"}
        aria-label={content.actions.languageEn}
      >
        {content.actions.languageEnShort}
      </button>
    </div>
  );
}
