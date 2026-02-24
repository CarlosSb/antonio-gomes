import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import EngineeringMindset from "@/components/EngineeringMindset";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ResumeSection from "@/components/ResumeSection";
import Section from "@/components/Section";
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
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14">
        <Section
          id="projetos"
          title={content.homePage.selectedWorkTitle}
          description={content.homePage.selectedWorkDescription}
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projectsForCards.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                content={content}
                locale={locale}
                showDetails={false}
              />
            ))}
          </div>
        </Section>

        <CaseStudySection project={mainCaseProject} content={content} locale={locale} />
        <EngineeringMindset content={content} id="mentalidade" />
        <Experience content={content} id="experiencia" />
        <Skills content={content} />

        <Section id="sobre" title={content.aboutPage.title} description={content.aboutPage.description}>
          <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {content.aboutPage.introPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </Section>

        <ResumeSection content={content} id="curriculo" />
        <ContactSection content={content} id="contato" />
      </main>
    </>
  );
}
