import ContactSection from "@/components/ContactSection";
import type { LocalizedProfileContent } from "@/content/profile";

type ContactPageViewProps = {
  content: LocalizedProfileContent;
};

export default function ContactPageView({ content }: ContactPageViewProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <ContactSection content={content} />
    </main>
  );
}
