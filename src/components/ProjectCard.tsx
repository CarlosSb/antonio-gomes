import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { getProjectSummary } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type ProjectCardProps = {
  project: Project;
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function ProjectCard({ project, content, locale }: ProjectCardProps) {
  const liveUrl = project.links?.[0]?.href ?? project.liveUrl;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-700">
      <div className="mb-4 space-y-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {getProjectSummary(project, locale)}
        </p>
      </div>

      <ul className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.liveDemo}
          </a>
        ) : null}
        <Link
          href={withLocalePath(locale, `/projects/${project.slug}`)}
          className="rounded-md border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.viewDetails}
        </Link>
      </div>
    </article>
  );
}
