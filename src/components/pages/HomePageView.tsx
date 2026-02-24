import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import StudyAreas from "@/components/StudyAreas";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";

type HomePageViewProps = {
  featuredProjects: Project[];
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function HomePageView({ featuredProjects, content, locale }: HomePageViewProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 sm:py-12">
      <Hero content={content} locale={locale} />

      <Section
        id="featured-projects"
        title={content.homePage.featuredProjectsTitle}
        description={content.homePage.featuredProjectsDescription}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} content={content} locale={locale} />
          ))}
        </div>
      </Section>

      <Experience content={content} />
      <Skills content={content} />
      <StudyAreas content={content} />
    </main>
  );
}
