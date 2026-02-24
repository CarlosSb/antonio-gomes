import Header from "@/components/Header";
import type { LocalizedProfileContent, Locale } from "@/content/profile";

type NavbarStickyProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function NavbarSticky({ content, locale }: NavbarStickyProps) {
  return <Header content={content} locale={locale} />;
}
