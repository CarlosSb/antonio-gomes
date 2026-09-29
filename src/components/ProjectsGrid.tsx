import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Link from "next/link";
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
    <Section
      id="projetos"
      title={content.homePage.selectedWorkTitle}
      description={content.homePage.selectedWorkDescription}
      action={(
        <Link
          href={withLocalePath(locale, "/projects")}
          className="text-sm font-medium text-slate-400 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-lime-200 hover:decoration-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
        >
          {content.actions.viewAllProjects} <span aria-hidden="true">↗</span>
        </Link>
      )}
    >
      <div className="space-y-5">
        {projects[0] ? (
          <ProjectCard
            project={projects[0]}
            content={content}
            locale={locale}
            featured
          />
        ) : null}
        {projects.length > 1 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} content={content} locale={locale} />
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
