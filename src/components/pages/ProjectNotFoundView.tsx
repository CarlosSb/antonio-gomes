"use client";

import Link from "next/link";
import Section from "@/components/Section";
import { useLocalizedContent } from "@/lib/language";

export default function ProjectNotFoundView() {
  const content = useLocalizedContent();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="project-not-found"
        title={content.projectsPage.notFoundTitle}
        description={content.projectsPage.notFoundDescription}
      >
        <Link
          href="/projects"
          className="inline-flex rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.backToProjects}
        </Link>
      </Section>
    </main>
  );
}
