"use client";

import Link from "next/link";
import Section from "@/components/Section";
import type { ProjectLink, Project } from "@/content/projects";
import { getProjectSummary, localizeList, localizeText } from "@/lib/content";
import { useLocalizedContent, useLanguage } from "@/lib/language";

type ProjectDetailsPageViewProps = {
  project: Project;
};

export default function ProjectDetailsPageView({ project }: ProjectDetailsPageViewProps) {
  const { locale } = useLanguage();
  const content = useLocalizedContent();

  const overview = localizeText(project.description, locale);
  const architecture = localizeList(project.architecture, locale);
  const technicalDecisions = localizeList(
    project.technicalDecisions ?? project.highlights,
    locale,
  );
  const impact = localizeList(project.impact, locale);

  const links: ProjectLink[] = project.links?.length
    ? project.links
    : project.liveUrl
      ? [{ label: content.actions.liveDemo, href: project.liveUrl }]
      : [];

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="project-header"
        title={project.title}
        description={getProjectSummary(project, locale)}
      >
        <div className="flex flex-wrap gap-3">
          {links[0] ? (
            <a
              href={links[0].href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {links[0].label}
            </a>
          ) : null}
          <Link
            href="/projects"
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.backToProjects}
          </Link>
        </div>
      </Section>

      {overview ? (
        <Section id="project-overview" title={content.projectsPage.overviewLabel}>
          <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{overview}</p>
        </Section>
      ) : null}

      {architecture.length > 0 ? (
        <Section id="project-architecture" title={content.projectsPage.architectureLabel}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {technicalDecisions.length > 0 ? (
        <Section
          id="project-technical-decisions"
          title={content.projectsPage.technicalDecisionsLabel}
        >
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {technicalDecisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {impact.length > 0 ? (
        <Section id="project-impact" title={content.projectsPage.impactLabel}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {project.stack.length > 0 ? (
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
      ) : null}

      {links.length > 0 ? (
        <Section id="project-links" title={content.projectsPage.linksLabel}>
          <div className="flex flex-wrap gap-3">
            {links.map((projectLink) => (
              <a
                key={`${projectLink.label}-${projectLink.href}`}
                href={projectLink.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {projectLink.label}
              </a>
            ))}
          </div>
        </Section>
      ) : null}
    </main>
  );
}
