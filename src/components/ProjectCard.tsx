import Image from "next/image";
import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { getProjectLiveLink, getProjectSummary, localizeList } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type ProjectCardProps = {
  project: Project;
  content: LocalizedProfileContent;
  locale: Locale;
  showDetails?: boolean;
};

const projectHeroImages: Record<string, { src: string; alt: string }> = {
  "ong-tudo-por-amor": {
    src: "/cases/ong/tela-home-ong.png",
    alt: "Tela inicial do projeto ONG Tudo por Amor",
  },
  "digital-net-telecom": {
    src: "/cases/digital-net-telecom/home-digital-net.png",
    alt: "Tela inicial do projeto Digital.Net Telecom",
  },
  "provedor-connect": {
    src: "/cases/provedor-connect/home-connect.png",
    alt: "Tela inicial do projeto Provedor Connect",
  },
  "gordo-construcoes": {
    src: "/cases/gordo-construcoes/home.png",
    alt: "Tela inicial do projeto Gordo Construções",
  },
};

export default function ProjectCard({ project, content, locale, showDetails = true }: ProjectCardProps) {
  const liveLink = getProjectLiveLink(project);
  const caseLink = withLocalePath(locale, `/projects/${project.slug}`);
  const impactHighlights = localizeList(project.impact, locale).slice(0, 2);
  const projectHeroImage = projectHeroImages[project.slug];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_20px_45px_-30px_rgba(56,189,248,0.6)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_48%)]" />
      <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
        <div className="relative aspect-[16/9] w-full p-4">
          {projectHeroImage ? (
            <>
              <Image
                src={projectHeroImage.src}
                alt={projectHeroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-950/10" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.28),transparent_55%),linear-gradient(140deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
          )}
          <p className="relative text-xs font-medium tracking-wide text-slate-300">Projeto em produção</p>
          <p className="relative mt-2 line-clamp-2 text-sm font-semibold text-slate-100">{project.title}</p>
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
