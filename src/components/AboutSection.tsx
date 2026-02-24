import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type AboutSectionProps = {
  content: LocalizedProfileContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  const { homeAbout } = content.aboutPage;

  return (
    <Section id="sobre" title={content.aboutPage.title} description={content.aboutPage.description}>
      <article className="space-y-5 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <div className="space-y-2">
          {homeAbout.layerOneLines.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-slate-300">
              {line}
            </p>
          ))}
        </div>

        <details className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
            {homeAbout.expandLabel}
          </summary>

          <div className="mt-4 space-y-4">
            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-100">{homeAbout.workTitle}</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
                {homeAbout.workBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-100">{homeAbout.deliveredTitle}</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
                {homeAbout.deliveredBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-100">{homeAbout.studyingTitle}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{homeAbout.studyingLine}</p>
            </section>
          </div>
        </details>
      </article>
    </Section>
  );
}
