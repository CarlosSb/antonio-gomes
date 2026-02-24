import Link from "next/link";
import Section from "@/components/Section";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type AboutPageViewProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function AboutPageView({ content, locale }: AboutPageViewProps) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-10 sm:px-6 sm:py-12">
      <Section id="about" title={content.aboutPage.title} description={content.aboutPage.description}>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="text-lg font-semibold text-slate-100">{content.aboutPage.introTitle}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {content.aboutPage.introPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="career-timeline" title={content.aboutPage.timelineTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.aboutPage.timelineItems.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-slate-100">{item.company}</h3>
                <p className="text-xs text-slate-400">{item.period}</p>
              </div>
              <p className="mb-3 text-sm font-medium text-sky-400">{item.role}</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="how-i-work" title={content.aboutPage.principlesTitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {content.aboutPage.principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
            >
              <h3 className="text-base font-semibold text-slate-100">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="where-i-deliver" title={content.aboutPage.impactTitle}>
        <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {content.aboutPage.impactPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </Section>

      <Section
        id="proof"
        title={content.aboutPage.proofTitle}
        description={content.aboutPage.proofDescription}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {content.aboutPage.proofProjects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-4"
            >
              <h3 className="text-base font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <Link
                href={withLocalePath(locale, `/projects/${project.slug}`)}
                className="mt-3 inline-flex w-fit text-sm font-medium text-sky-400 transition-colors hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {content.aboutPage.proofLinkLabel}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="exploring"
        title={content.aboutPage.exploringTitle}
        description={content.aboutPage.exploringDescription}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {content.studyAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
            >
              <h3 className="text-base font-semibold text-slate-100">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{area.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
