import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { ProjectLink, Project } from "@/content/projects";
import { getProjectSummary, localizeList, localizeText } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type ProjectDetailsPageViewProps = {
  project: Project;
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function ProjectDetailsPageView({
  project,
  content,
  locale,
}: ProjectDetailsPageViewProps) {
  const overview = localizeText(project.description, locale);
  const challenge = localizeText(project.challenge, locale);
  const solution = localizeText(project.solution, locale);
  const challengeBullets = challenge
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  const solutionBullets = solution
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  const architecture = localizeList(project.architecture, locale);
  const technicalDecisions = localizeList(project.technicalDecisions, locale);
  const engineeringHighlights = localizeList(
    project.highlights ?? project.technicalDecisions,
    locale,
  );
  const impact = localizeList(project.impact, locale);
  const results = localizeList(project.results, locale);
  const gallery = project.gallery ?? [];
  const metrics = project.metrics ?? [];

  const links: ProjectLink[] = project.links?.length
    ? project.links
    : project.liveUrl
      ? [{ label: content.actions.liveDemo, href: project.liveUrl }]
      : [];
  const linksSectionTitle =
    links.length === 1 ? content.projectsPage.liveLinkLabel : content.projectsPage.linksLabel;

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-10 sm:px-6 sm:py-12">
      <Section
        id="project-header"
        title={project.title}
        description={getProjectSummary(project, locale)}
      >
        <div className="flex flex-wrap gap-3">
          {links[0] ? (
            <a
              href={links[0].href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {links[0].label}
            </a>
          ) : null}
          <Link
            href={withLocalePath(locale, "/projects")}
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.backToProjects}
          </Link>
        </div>
      </Section>

      {overview ? (
        <Section id="project-overview" title={content.projectsPage.overviewLabel}>
          <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{overview}</p>
        </Section>
      ) : null}

      {gallery.length > 0 ? (
        <Section id="project-gallery" title={content.projectsPage.galleryLabel}>
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((item) => {
              const alt = localizeText(item.alt, locale);
              const caption = localizeText(item.caption, locale);

              return (
                <figure
                  key={`${item.src}-${alt}`}
                  className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={item.src}
                      alt={alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {caption ? (
                    <figcaption className="border-t border-slate-800 px-3 py-2 text-xs text-slate-400">
                      {caption}
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </Section>
      ) : null}

      {challenge ? (
        <Section id="project-challenge" title={content.projectsPage.challengeLabel}>
          {challengeBullets.length > 1 ? (
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {challengeBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{challenge}</p>
          )}
        </Section>
      ) : null}

      {solution ? (
        <Section id="project-solution" title={content.projectsPage.solutionLabel}>
          {solutionBullets.length > 1 ? (
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
              {solutionBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300">{solution}</p>
          )}
        </Section>
      ) : null}

      {architecture.length > 0 ? (
        <Section id="project-architecture" title={content.projectsPage.architectureLabel}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {technicalDecisions.length > 0 ? (
        <Section id="project-technical-decisions" title={content.projectsPage.technicalDecisionsLabel}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {technicalDecisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {engineeringHighlights.length > 0 ? (
        <Section
          id="project-engineering-highlights"
          title={content.projectsPage.engineeringHighlightsLabel}
        >
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {engineeringHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {impact.length > 0 ? (
        <Section id="project-impact" title={content.projectsPage.impactLabel}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {results.length > 0 ? (
        <Section id="project-results" title={content.projectsPage.resultsLabel}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-500">
            {results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {metrics.length > 0 ? (
        <Section id="project-metrics" title={content.projectsPage.metricsLabel}>
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={localizeText(metric.label, locale)}
                className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-200">
                  {localizeText(metric.label, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {localizeText(metric.value, locale)}
                </p>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {project.stack.length > 0 ? (
        <Section id="project-stack" title={content.projectsPage.stackLabel}>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {links.length > 0 ? (
        <Section id="project-links" title={linksSectionTitle}>
          <div className="flex flex-wrap gap-3">
            {links.map((projectLink) => (
              <a
                key={`${projectLink.label}-${projectLink.href}`}
                href={projectLink.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {projectLink.label}
              </a>
            ))}
          </div>
        </Section>
      ) : null}
    </main>
  );
}
