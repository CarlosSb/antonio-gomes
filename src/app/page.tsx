import type { Metadata } from "next";
import HomePageView from "@/components/pages/HomePageView";
import { defaultLocale, profileContent } from "@/content/profile";
import { getFeaturedProjects } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const content = profileContent[defaultLocale];

export const metadata: Metadata = createMetadata({
  title: content.seo.defaultTitle,
  description: content.seo.defaultDescription,
  pathname: "/",
});

export default function HomePage() {
  return <HomePageView featuredProjects={getFeaturedProjects()} />;
}
