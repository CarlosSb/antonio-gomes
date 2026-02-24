import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type SkillsProps = {
  content: LocalizedProfileContent;
};

export default function Skills({ content }: SkillsProps) {
  return (
    <Section id="skills" title={content.sections.skills}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.skills.map((skillGroup) => (
          <article
            key={skillGroup.category}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-slate-100">
              {skillGroup.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
