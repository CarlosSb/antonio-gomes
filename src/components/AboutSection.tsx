import Link from "next/link";
import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type AboutSectionProps = {
  content: LocalizedProfileContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  const leadPoint = content.aboutPage.introPoints[0] ?? "";
  const supportPoint = content.aboutPage.introPoints[1] ?? "";

  return (
    <Section id="sobre" title={content.aboutPage.title} description={content.aboutPage.description}>
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <p className="text-sm leading-relaxed text-slate-300">{leadPoint}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{supportPoint}</p>
        <Link
          href={content.profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex text-sm font-medium text-sky-400 transition-colors duration-200 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.linkedinProfile}
        </Link>
      </article>
    </Section>
  );
}
