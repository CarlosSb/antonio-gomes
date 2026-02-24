import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";

type ProjectsPageViewProps = {
  projects: Project[];
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function ProjectsPageView({ projects, content, locale }: ProjectsPageViewProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="projects"
        title={content.projectsPage.title}
        description={content.projectsPage.description}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} content={content} locale={locale} />
          ))}
        </div>
      </Section>
    </main>
  );
}
