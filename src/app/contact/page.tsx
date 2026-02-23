import type { Metadata } from "next";
import ContactPageView from "@/components/pages/ContactPageView";
import { defaultLocale, profileContent } from "@/content/profile";
import { createMetadata } from "@/lib/seo";

const content = profileContent[defaultLocale];

export const metadata: Metadata = createMetadata({
  title: `${content.contactPage.title} | ${content.seo.siteName}`,
  description: content.contactPage.description,
  pathname: "/contact",
});

export default function ContactPage() {
  return <ContactPageView />;
}
