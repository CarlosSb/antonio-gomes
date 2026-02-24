import type { Metadata } from "next";
import HomePageView from "@/components/pages/HomePageView";
import { locales, type Locale } from "@/content/profile";
import { getAllProjects, getContent, getProjectBySlug } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const content = getContent(resolvedLocale);

  return createMetadata({
    title: content.seo.defaultTitle,
    description: content.seo.defaultDescription,
    pathname: `/${resolvedLocale}`,
    locale: resolvedLocale,
  });
}

export default async function LocalizedHomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const projects = getAllProjects();
  const mainCaseProject = getProjectBySlug("ong-tudo-por-amor") ?? projects[0]!;

  return (
    <HomePageView
      projects={projects}
      mainCaseProject={mainCaseProject}
      content={getContent(resolvedLocale)}
      locale={resolvedLocale}
    />
  );
}
