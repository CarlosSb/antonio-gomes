import Experience from "@/components/Experience";
import FinalCta from "@/components/FinalCta";
import EngineeringMindset from "@/components/EngineeringMindset";
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
    <>
      <Hero content={content} locale={locale} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14">
        <Section
          id="featured-projects"
          title={content.homePage.selectedWorkTitle}
          description={content.homePage.selectedWorkDescription}
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} content={content} locale={locale} />
            ))}
          </div>
        </Section>

        <EngineeringMindset content={content} />
        <Experience content={content} />
        <Skills content={content} />
        <StudyAreas content={content} />
        <FinalCta content={content} locale={locale} />
      </main>
    </>
  );
}
