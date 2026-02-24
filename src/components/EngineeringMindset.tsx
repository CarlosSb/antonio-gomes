import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type EngineeringMindsetProps = {
  content: LocalizedProfileContent;
};

export default function EngineeringMindset({ content }: EngineeringMindsetProps) {
  return (
    <Section
      id="engineering-mindset"
      title={content.homePage.engineeringMindsetTitle}
      description={content.homePage.engineeringMindsetDescription}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {content.homePage.engineeringMindsetItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-slate-700"
          >
            <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
