import AboutSection from "@/components/AboutSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import EngineeringMindset from "@/components/EngineeringMindset";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
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
        <ProjectsSection locale={locale} content={content} projects={projectsForCards} />
        <CaseStudySection project={mainCaseProject} content={content} locale={locale} />
        <EngineeringMindset content={content} id="mentalidade" />
        <Experience content={content} id="experiencia" />
        <Skills content={content} />
        <AboutSection content={content} />
        <ResumeSection content={content} id="curriculo" />
        <ContactSection content={content} id="contato" />
      </main>
    </>
  );
}
