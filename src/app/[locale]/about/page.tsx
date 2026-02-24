import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { locales, type Locale } from "@/content/profile";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const content = getContent(resolvedLocale);

  return createMetadata({
    title: `${content.aboutPage.title} | ${content.seo.siteName}`,
    description: content.aboutPage.description,
    pathname: `/${resolvedLocale}`,
    locale: resolvedLocale,
  });
}

export default async function LocalizedAboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const homePath = `/${resolvedLocale}`;
  redirect(`${homePath}#sobre`);
}
