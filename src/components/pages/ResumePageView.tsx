import ResumeSection from "@/components/ResumeSection";
import type { LocalizedProfileContent } from "@/content/profile";

type ResumePageViewProps = {
  content: LocalizedProfileContent;
};

export default function ResumePageView({ content }: ResumePageViewProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <ResumeSection content={content} />
    </main>
  );
}
