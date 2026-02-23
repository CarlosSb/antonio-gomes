"use client";

import Section from "@/components/Section";
import { useLocalizedContent } from "@/lib/language";

export default function ResumePageView() {
  const content = useLocalizedContent();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="resume"
        title={content.resumePage.title}
        description={content.resumePage.description}
      >
        <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="mb-4 text-lg font-semibold text-white">{content.resumePage.downloadTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume-pt.pdf"
              download
              className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.downloadPt}
            </a>
            <a
              href="/resume-en.pdf"
              download
              className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.downloadEn}
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            {content.resumePage.lastUpdateLabel}: {content.resumePage.lastUpdateValue}
          </p>
        </article>
      </Section>
    </main>
  );
}
