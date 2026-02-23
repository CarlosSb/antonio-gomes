import type { Metadata } from "next";
import ProjectsPageView from "@/components/pages/ProjectsPageView";
import { defaultLocale, profileContent } from "@/content/profile";
import { getAllProjects } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const content = profileContent[defaultLocale];

export const metadata: Metadata = createMetadata({
  title: `${content.projectsPage.title} | ${content.seo.siteName}`,
  description: content.projectsPage.description,
  pathname: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageView projects={getAllProjects()} />;
}
