import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";

type ProjectsGridProps = {
  locale: Locale;
  content: LocalizedProfileContent;
  projects: Project[];
};

export default function ProjectsGrid({ locale, content, projects }: ProjectsGridProps) {
  return (
    <Section id="projetos" title={content.homePage.selectedWorkTitle} description={content.homePage.selectedWorkDescription}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} content={content} locale={locale} />
        ))}
      </div>
    </Section>
  );
}
