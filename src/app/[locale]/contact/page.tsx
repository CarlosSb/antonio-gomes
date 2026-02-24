import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { locales, type Locale } from "@/content/profile";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const content = getContent(resolvedLocale);

  return createMetadata({
    title: `${content.contactPage.title} | ${content.seo.siteName}`,
    description: content.contactPage.description,
    pathname: `/${resolvedLocale}`,
    locale: resolvedLocale,
  });
}

export default async function LocalizedContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "pt";
  const homePath = `/${resolvedLocale}`;
  redirect(`${homePath}#contato`);
}
