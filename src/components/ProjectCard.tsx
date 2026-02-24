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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_20px_45px_-30px_rgba(56,189,248,0.6)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_48%)]" />
      <div className="relative mb-5 space-y-2.5">
        <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {getProjectSummary(project, locale)}
        </p>
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
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-sky-500 px-3.5 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.liveDemo}
          </a>
        ) : null}
        <Link
          href={withLocalePath(locale, `/projects/${project.slug}`)}
          className="rounded-md border border-slate-700 px-3.5 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.viewDetails}
        </Link>
      </div>
    </article>
  );
}
