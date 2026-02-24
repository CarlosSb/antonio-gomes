import ResumeSection from "@/components/ResumeSection";
import type { LocalizedProfileContent } from "@/content/profile";

type ResumeCTAProps = {
  content: LocalizedProfileContent;
};

export default function ResumeCTA({ content }: ResumeCTAProps) {
  return <ResumeSection content={content} id="curriculo" />;
}
