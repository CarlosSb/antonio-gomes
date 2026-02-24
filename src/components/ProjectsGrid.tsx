import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { withLocalePath } from "@/lib/i18n";

type ProjectsGridProps = {
  locale: Locale;
  content: LocalizedProfileContent;
  projects: Project[];
};

export default function ProjectsGrid({ locale, content, projects }: ProjectsGridProps) {
  return (
    <Section id="projetos" title={content.homePage.selectedWorkTitle} description={content.homePage.selectedWorkDescription}>
      <article className="mb-5 rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5">
        <p className="inline-flex rounded-full border border-sky-500/50 bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300">
          {content.homePage.projectsMainCaseHighlight.badge}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200">
          {content.homePage.projectsMainCaseHighlight.lineOne}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
          {content.homePage.projectsMainCaseHighlight.lineTwo}
        </p>
        <Link
          href={withLocalePath(locale, "/projects/ong-tudo-por-amor")}
          aria-label={content.homePage.heroMainCaseCtaAriaLabel}
          className="mt-3 inline-flex text-sm font-semibold text-sky-400 transition-colors duration-200 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.homePage.projectsMainCaseHighlight.ctaLabel}
        </Link>
      </article>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} content={content} locale={locale} />
        ))}
      </div>
    </Section>
  );
}
