import type { Metadata } from "next";
import ResumePageView from "@/components/pages/ResumePageView";
import { defaultLocale, profileContent } from "@/content/profile";
import { createMetadata } from "@/lib/seo";

const content = profileContent[defaultLocale];

export const metadata: Metadata = createMetadata({
  title: `${content.resumePage.title} | ${content.seo.siteName}`,
  description: content.resumePage.description,
  pathname: "/resume",
});

export default function ResumePage() {
  return <ResumePageView />;
}
