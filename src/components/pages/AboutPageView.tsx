"use client";

import Section from "@/components/Section";
import { useLocalizedContent } from "@/lib/language";

export default function AboutPageView() {
  const content = useLocalizedContent();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="about"
        title={content.aboutPage.title}
        description={content.aboutPage.description}
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          {content.aboutPage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </main>
  );
}
