import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type ExperienceProps = {
  content: LocalizedProfileContent;
  id?: string;
};

export default function Experience({ content, id = "experience" }: ExperienceProps) {
  return (
    <Section id={id} title={content.sections.experience}>
      <div className="space-y-4">
        {content.experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-white">{item.company}</h3>
              <p className="text-sm text-slate-400">{item.period}</p>
            </div>
            <p className="mb-3 text-sm font-medium text-sky-400">{item.role}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
