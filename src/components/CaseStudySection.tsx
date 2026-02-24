import Link from "next/link";
import Section from "@/components/Section";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { getProjectLiveLink, localizeList, localizeText } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type CaseStudySectionProps = {
  project: Project;
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function CaseStudySection({ project, content, locale }: CaseStudySectionProps) {
  const context = localizeText(project.description, locale);
  const challenge = localizeText(project.challenge, locale);
  const solution = localizeText(project.solution, locale);
  const architecture = localizeList(project.architecture, locale);
  const tradeoffs = localizeList(project.technicalDecisions, locale);
  const results = localizeList(project.results, locale);
  const liveLink = getProjectLiveLink(project);

  return (
    <Section id="case" title={content.homePage.caseTitle} description={content.homePage.caseDescription}>
      <article className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-900/45 p-6">
        {context ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {content.homePage.caseContextLabel}
            </h3>
            <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{context}</p>
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {challenge ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {content.projectsPage.challengeLabel}
              </h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{challenge}</p>
            </div>
          ) : null}

          {solution ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {content.projectsPage.solutionLabel}
              </h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{solution}</p>
            </div>
          ) : null}
        </div>

        {architecture.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {content.projectsPage.architectureLabel}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {architecture.join(" -> ")}
            </p>
          </div>
        ) : null}

        {tradeoffs.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {content.projectsPage.technicalDecisionsLabel}
            </h3>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {results.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {content.projectsPage.resultsLabel}
            </h3>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-1">
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.liveDemo}
            </a>
          ) : null}
          <Link
            href={withLocalePath(locale, `/projects/${project.slug}`)}
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.homePage.caseCta}
          </Link>
        </div>
      </article>
    </Section>
  );
}
