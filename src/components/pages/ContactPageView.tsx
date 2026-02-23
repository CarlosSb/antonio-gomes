"use client";

import Section from "@/components/Section";
import { useLocalizedContent } from "@/lib/language";

export default function ContactPageView() {
  const content = useLocalizedContent();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="contact"
        title={content.contactPage.title}
        description={content.contactPage.description}
      >
        <article className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-lg font-semibold text-white">{content.contactPage.directTitle}</h2>
          <div className="flex flex-col gap-3 text-sm sm:text-base">
            <a
              href={`mailto:${content.profile.email}`}
              className="w-fit text-sky-400 transition hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.profile.email}
            </a>
            <a
              href={content.profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit text-slate-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.linkedinProfile}
            </a>
            <a
              href={content.profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit text-slate-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.githubProfile}
            </a>
          </div>
        </article>
      </Section>
    </main>
  );
}
