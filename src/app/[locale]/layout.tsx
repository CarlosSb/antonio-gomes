import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { locales, type Locale } from "@/content/profile";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

export const dynamicParams = false;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale as Locale);

  return (
    <>
      <Header content={content} locale={locale} />
      {children}
      <Footer content={content} locale={locale} />
    </>
  );
}
