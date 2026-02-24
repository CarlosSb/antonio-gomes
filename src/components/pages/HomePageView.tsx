import About from "@/components/About";
import CaseStudyONG from "@/components/CaseStudyONG";
import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EngineeringMindset from "@/components/EngineeringMindset";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import ResumeCTA from "@/components/ResumeCTA";
import Skills from "@/components/Skills";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";

type HomePageViewProps = {
  projects: Project[];
  mainCaseProject: Project;
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function HomePageView({ projects, mainCaseProject, content, locale }: HomePageViewProps) {
  const projectsForCards = projects.filter((project) => project.slug !== mainCaseProject.slug);

  return (
    <>
      <Hero content={content} locale={locale} />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-20 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
        <ProjectsGrid locale={locale} content={content} projects={projectsForCards} />
        <CaseStudyONG project={mainCaseProject} content={content} locale={locale} />
        <EngineeringMindset content={content} id="mentalidade" />
        <ExperienceTimeline content={content} />
        <Skills content={content} />
        <About content={content} />
        <ResumeCTA content={content} />
        <Contact content={content} />
      </main>
    </>
  );
}
