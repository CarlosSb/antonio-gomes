import type { Metadata } from "next";
import AboutPageView from "@/components/pages/AboutPageView";
import { defaultLocale, profileContent } from "@/content/profile";
import { createMetadata } from "@/lib/seo";

const content = profileContent[defaultLocale];

export const metadata: Metadata = createMetadata({
  title: `${content.aboutPage.title} | ${content.seo.siteName}`,
  description: content.aboutPage.description,
  pathname: "/about",
});

export default function AboutPage() {
  return <AboutPageView />;
}
