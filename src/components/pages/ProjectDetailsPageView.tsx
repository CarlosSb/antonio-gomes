"use client";

import Link from "next/link";
import Section from "@/components/Section";
import type { Project } from "@/content/projects";
import { localizeList, localizeText } from "@/lib/content";
import { useLocalizedContent, useLanguage } from "@/lib/language";

type ProjectDetailsPageViewProps = {
  project: Project;
};

export default function ProjectDetailsPageView({ project }: ProjectDetailsPageViewProps) {
  const { locale } = useLanguage();
  const content = useLocalizedContent();

  const highlights = localizeList(project.highlights, locale);

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-10 sm:px-6 sm:py-12">
      <Section id="project-header" title={project.title} description={localizeText(project.description, locale)}>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.liveDemo}
          </a>
          <Link
            href="/projects"
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.backToProjects}
          </Link>
        </div>
      </Section>

      <Section id="project-stack" title={content.projectsPage.stackLabel}>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="project-highlights" title={content.projectsPage.highlightsLabel}>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Section>

      <Section id="project-challenge" title={content.projectsPage.challengeLabel}>
        <p className="text-sm leading-relaxed text-slate-300">
          {localizeText(project.challenge, locale)}
        </p>
      </Section>

      <Section id="project-solution" title={content.projectsPage.solutionLabel}>
        <p className="text-sm leading-relaxed text-slate-300">
          {localizeText(project.solution, locale)}
        </p>
      </Section>

      <Section id="project-results" title={content.projectsPage.resultsLabel}>
        <p className="text-sm leading-relaxed text-slate-300">
          {localizeText(project.results, locale)}
        </p>
      </Section>
    </main>
  );
}
