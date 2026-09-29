import Image from "next/image";
import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { getProjectSummary, localizeText } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type ProjectCardProps = {
  project: Project;
  content: LocalizedProfileContent;
  locale: Locale;
  showDetails?: boolean;
  featured?: boolean;
};

export default function ProjectCard({ project, content, locale, showDetails = true, featured = false }: ProjectCardProps) {
  const caseLink = withLocalePath(locale, `/projects/${project.slug}`);
  const projectHeroMedia = project.cardImage ?? project.gallery?.[0];
  const summary = getProjectSummary(project, locale);

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-slate-900/55 p-4 transition duration-300 hover:-translate-y-1 hover:border-lime-300/35 hover:shadow-[0_24px_55px_-30px_rgba(163,230,53,0.35)] sm:p-5 ${featured ? "border-lime-300/35 lg:grid lg:grid-cols-[1.25fr_1fr] lg:gap-8" : "border-slate-800/80"}`}>
      <div className={`relative mb-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 ${featured ? "lg:mb-0" : ""}`}>
        <div className={`relative w-full p-4 ${featured ? "h-56" : "h-48"}`}>
          {projectHeroMedia ? (
            <>
              {projectHeroMedia.type === "video" ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={projectHeroMedia.poster}
                  aria-label={localizeText(projectHeroMedia.alt, locale)}
                >
                  <source src={projectHeroMedia.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={projectHeroMedia.src}
                  alt={localizeText(projectHeroMedia.alt, locale)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-950/10" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.28),transparent_55%),linear-gradient(140deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="relative mb-5 space-y-2.5">
          {featured ? (
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-lime-300">
              {content.homePage.projectsMainCaseHighlight.badge}
            </p>
          ) : null}
          <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-lime-200">
            {showDetails ? (
              <Link
                href={caseLink}
                className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
              >
                {project.title}
              </Link>
            ) : project.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">{summary}</p>
        </div>

        <ul className="relative mb-5 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-400">
          {project.stack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="after:pl-2 after:text-slate-600 after:content-['·'] last:after:hidden"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="relative z-20 mt-auto flex flex-wrap gap-2.5">
        {showDetails ? (
          <Link
            href={caseLink}
            aria-label={`${content.actions.caseStudy}: ${project.title}`}
            className="text-sm font-medium text-slate-300 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-lime-200 hover:decoration-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          >
            {content.actions.readStory} <span aria-hidden="true">→</span>
          </Link>
        ) : null}
        </div>
      </div>
    </article>
  );
}
