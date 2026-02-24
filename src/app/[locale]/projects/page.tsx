import type { Metadata } from "next";
import ProjectsPageView from "@/components/pages/ProjectsPageView";
import { locales, type Locale } from "@/content/profile";
import { getAllProjects, getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const content = getContent(resolvedLocale);

  return createMetadata({
    title: `${content.projectsPage.title} | ${content.seo.siteName}`,
    description: content.projectsPage.description,
    pathname: `/${resolvedLocale}/projects`,
    locale: resolvedLocale,
  });
}

export default async function LocalizedProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";

  return (
    <ProjectsPageView
      projects={getAllProjects()}
      content={getContent(resolvedLocale)}
      locale={resolvedLocale}
    />
  );
}
