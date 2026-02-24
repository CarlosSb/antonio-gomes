import ContactSection from "@/components/ContactSection";
import type { LocalizedProfileContent } from "@/content/profile";

type ContactProps = {
  content: LocalizedProfileContent;
};

export default function Contact({ content }: ContactProps) {
  return <ContactSection content={content} id="contato" />;
}
