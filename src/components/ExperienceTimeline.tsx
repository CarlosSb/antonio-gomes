import Experience from "@/components/Experience";
import type { LocalizedProfileContent } from "@/content/profile";

type ExperienceTimelineProps = {
  content: LocalizedProfileContent;
};

export default function ExperienceTimeline({ content }: ExperienceTimelineProps) {
  return <Experience content={content} id="experiencia" />;
}
