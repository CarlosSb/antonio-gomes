"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import StudyAreas from "@/components/StudyAreas";
import type { Project } from "@/content/projects";
import { useLocalizedContent } from "@/lib/language";

type HomePageViewProps = {
  featuredProjects: Project[];
};

export default function HomePageView({ featuredProjects }: HomePageViewProps) {
  const content = useLocalizedContent();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 sm:py-12">
      <Hero />

      <Section
        id="featured-projects"
        title={content.homePage.featuredProjectsTitle}
        description={content.homePage.featuredProjectsDescription}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Experience />
      <Skills />
      <StudyAreas />
    </main>
  );
}
