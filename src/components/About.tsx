import AboutSection from "@/components/AboutSection";
import type { LocalizedProfileContent } from "@/content/profile";

type AboutProps = {
  content: LocalizedProfileContent;
};

export default function About({ content }: AboutProps) {
  return <AboutSection content={content} />;
}
