import type { Metadata } from "next";
import ProjectDetailsPageView from "@/components/pages/ProjectDetailsPageView";
import ProjectNotFoundView from "@/components/pages/ProjectNotFoundView";
import { defaultLocale, profileContent } from "@/content/profile";
import { getAllProjects, getProjectBySlug, localizeText } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const content = profileContent[defaultLocale];

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: `${content.projectsPage.notFoundTitle} | ${content.seo.siteName}`,
      description: content.projectsPage.notFoundDescription,
      pathname: `/projects/${slug}`,
    });
  }

  return createMetadata({
    title: `${project.title} | ${content.seo.siteName}`,
    description: localizeText(project.summary, defaultLocale),
    pathname: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return <ProjectNotFoundView />;
  }

  return <ProjectDetailsPageView project={project} />;
}
