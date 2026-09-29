import Image from "next/image";
import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import { localizeText } from "@/lib/content";
import { withLocalePath } from "@/lib/i18n";

type HeroProps = {
  content: LocalizedProfileContent;
  locale: Locale;
  projects: Project[];
};

export default function Hero({ content, locale, projects }: HeroProps) {
  const projectPreview = projects.slice(0, 3);

  return (
    <section id="hero" className="relative isolate w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 55% at 8% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 72%)",
            "radial-gradient(ellipse 62% 48% at 92% 28%, color-mix(in srgb, var(--accent-hover) 7%, transparent), transparent 74%)",
            "linear-gradient(180deg, var(--hero-base) 0%, color-mix(in srgb, var(--hero-base) 86%, var(--bg)) 62%, var(--bg) 100%)",
          ].join(","),
        }}
      />

      <div className="relative mx-auto grid min-h-[min(700px,84svh)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="space-y-6 lg:col-span-6">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-700/40 bg-slate-800 shadow-sm">
            <Image
              src="/hero/og-hero.webp"
              alt={content.profile.name}
              fill
              sizes="64px"
              className="object-cover object-top"
              priority
            />
          </div>
          <h1 className="max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-100">
            {content.hero.headlineLead}{" "}
            <span className="font-[Georgia] font-normal italic text-lime-300">
              {content.hero.headlineAccent}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg sm:leading-8">
            {content.hero.description}
          </p>

          <Link
            href={withLocalePath(locale, "/about")}
            className="inline-flex w-fit text-sm font-medium text-slate-300 underline decoration-slate-600 underline-offset-8 transition-colors duration-200 hover:text-lime-200 hover:decoration-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.hero.aboutLinkLabel}
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`${withLocalePath(locale)}#projetos`}
              className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.viewProjects}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[300px] lg:col-span-6 lg:min-h-[390px]">
          {projectPreview[0] ? (() => {
            const project = projectPreview[0];
            const media = project.cardImage ?? project.gallery?.[0];
            const imageSource = media?.type === "video" ? media.poster : media?.src;

            return (
              <Link
                href={withLocalePath(locale, `/projects/${project.slug}`)}
                className="absolute left-0 top-14 block w-[82%] overflow-hidden rounded-2xl border border-slate-700/45 bg-slate-900 p-2 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:left-6 sm:w-[76%]"
                aria-label={`${content.actions.caseStudy}: ${project.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-800">
                  {imageSource ? (
                    <Image
                      src={imageSource}
                      alt={media ? localizeText(media.alt, locale) : project.title}
                      fill
                      sizes="(max-width: 640px) 80vw, 440px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  ) : null}
                </div>
                <p className="truncate px-2 py-2 text-left text-sm font-medium text-slate-200">
                  {project.title}
                </p>
              </Link>
            );
          })() : null}
          <div className="absolute bottom-0 right-0 flex w-[56%] gap-3 sm:right-5 sm:w-[48%]">
            {projectPreview.slice(1, 3).map((project) => {
              const media = project.cardImage ?? project.gallery?.[0];
              const imageSource = media?.type === "video" ? media.poster : media?.src;

              return (
                <Link
                  key={project.slug}
                  href={withLocalePath(locale, `/projects/${project.slug}`)}
                  className="group block min-w-0 flex-1 rounded-xl border border-slate-700/45 bg-slate-900 p-1.5 transition duration-300 hover:-translate-y-1 hover:border-lime-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                  aria-label={`${content.actions.caseStudy}: ${project.title}`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-800">
                    {imageSource ? (
                      <Image
                        src={imageSource}
                        alt={media ? localizeText(media.alt, locale) : project.title}
                        fill
                        sizes="(max-width: 640px) 25vw, 150px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
