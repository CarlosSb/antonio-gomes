import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { getProjectSummary, localizeList } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type ProjectCardProps = {
  project: Project;
  content: LocalizedProfileContent;
  locale: Locale;
  showDetails?: boolean;
};

export default function ProjectCard({ project, content, locale, showDetails = true }: ProjectCardProps) {
  const liveLink =
    project.links?.find((link) => link.label.toLowerCase().includes("live"))?.href ??
    project.links?.[0]?.href ??
    project.liveUrl;
  const repoLink = project.links?.find((link) => link.label.toLowerCase().includes("repo"))?.href;
  const caseLink = withLocalePath(locale, `/projects/${project.slug}`);
  const impactHighlights = localizeList(project.impact, locale).slice(0, 2);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_20px_45px_-30px_rgba(56,189,248,0.6)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_48%)]" />
      {project.mainCase ? (
        <p className="relative mb-3 inline-flex w-fit rounded-full border border-sky-500/50 bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300">
          {content.homePage.projectsMainCaseHighlight.badge}
        </p>
      ) : null}
      <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
        <div className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.28),transparent_55%),linear-gradient(140deg,rgba(15,23,42,0.95),rgba(2,6,23,1))] p-4">
          <p className="text-xs font-medium tracking-wide text-slate-300">Projeto em produção</p>
          <p className="mt-2 line-clamp-2 text-sm font-semibold text-slate-100">{project.title}</p>
        </div>
      </div>

      <div className="relative mb-5 space-y-2.5">
        <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {getProjectSummary(project, locale)}
        </p>
        {impactHighlights.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {impactHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <ul className="relative mb-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-3">
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`${content.actions.liveDemo}: ${project.title}`}
            className="rounded-md bg-sky-500 px-3.5 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.liveDemo}
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="rounded-md border border-slate-800 px-3.5 py-2 text-sm font-semibold text-slate-500"
          >
            {content.actions.liveDemo}
          </span>
        )}
        {repoLink ? (
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`${content.actions.repository}: ${project.title}`}
            className="rounded-md border border-slate-700 px-3.5 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.repository}
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="rounded-md border border-slate-800 px-3.5 py-2 text-sm font-semibold text-slate-500"
          >
            {content.actions.repository}
          </span>
        )}
        {showDetails ? (
          <Link
            href={caseLink}
            aria-label={`${content.actions.caseStudy}: ${project.title}`}
            className="rounded-md border border-slate-700 px-3.5 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.caseStudy}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
