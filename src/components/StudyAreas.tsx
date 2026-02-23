"use client";

import Section from "@/components/Section";
import { useLocalizedContent } from "@/lib/language";

export default function StudyAreas() {
  const content = useLocalizedContent();

  return (
    <Section id="study-areas" title={content.sections.studyAreas}>
      <div className="grid gap-4 md:grid-cols-3">
        {content.studyAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <h3 className="mb-2 text-base font-semibold text-white">{area.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{area.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
