import About from "@/components/About";
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
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function HomePageView({ projects, content, locale }: HomePageViewProps) {
  return (
    <>
      <Hero content={content} locale={locale} projects={projects} />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:gap-32 lg:px-8">
        <ProjectsGrid locale={locale} content={content} projects={projects} />
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
