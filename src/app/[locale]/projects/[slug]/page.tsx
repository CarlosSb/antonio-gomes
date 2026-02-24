import type { Metadata } from "next";
import ProjectDetailsPageView from "@/components/pages/ProjectDetailsPageView";
import ProjectNotFoundView from "@/components/pages/ProjectNotFoundView";
import { locales, type Locale } from "@/content/profile";
import { getAllProjects, getContent, getProjectBySlug, getProjectSummary } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllProjects().map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const content = getContent(resolvedLocale);
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: `${content.projectsPage.notFoundTitle} | ${content.seo.siteName}`,
      description: content.projectsPage.notFoundDescription,
      pathname: `/${resolvedLocale}/projects/${slug}`,
      locale: resolvedLocale,
    });
  }

  return createMetadata({
    title: project.seoTitle ?? `${project.title} | ${content.seo.siteName}`,
    description: getProjectSummary(project, resolvedLocale),
    pathname: `/${resolvedLocale}/projects/${project.slug}`,
    locale: resolvedLocale,
  });
}

export default async function LocalizedProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const content = getContent(resolvedLocale);
  const project = getProjectBySlug(slug);

  if (!project) {
    return <ProjectNotFoundView content={content} locale={resolvedLocale} />;
  }

  return (
    <ProjectDetailsPageView
      project={project}
      content={content}
      locale={resolvedLocale}
    />
  );
}
