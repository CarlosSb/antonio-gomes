import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type ResumeSectionProps = {
  content: LocalizedProfileContent;
};

export default function ResumeSection({ content }: ResumeSectionProps) {
  return (
    <Section
      id="resume"
      title={content.resumePage.title}
      description={content.resumePage.description}
    >
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-100">{content.resumePage.downloadTitle}</h3>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
          {content.resumePage.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="pt-1 text-sky-400" aria-hidden="true">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/resume-pt.pdf"
            download
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.downloadPt}
          </a>
          <a
            href="/resume-en.pdf"
            download
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.downloadEn}
          </a>
          <a
            href={content.profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.linkedinProfile}
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          {content.resumePage.lastUpdateLabel}: {content.resumePage.lastUpdateValue}
        </p>
      </article>
    </Section>
  );
}
