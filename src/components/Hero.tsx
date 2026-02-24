import Image from "next/image";
import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type HeroProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function Hero({ content, locale }: HeroProps) {
  return (
    <section id="hero" className="relative isolate w-full overflow-hidden border-b border-slate-800/80 min-h-[88svh]">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-base)" }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, var(--hero-glow), transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hero-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--hero-grid) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto grid min-h-[88svh] w-full max-w-[1200px] grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        <div className="space-y-5 lg:col-span-7">
          <p className="text-xs font-medium tracking-wide text-slate-400">{content.hero.availability}</p>
          <p className="inline-flex max-w-full rounded-full border border-slate-700/90 bg-slate-900/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-300">
            {content.hero.badge}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-100 md:text-5xl">
            {content.hero.headlineLead}{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
              {content.hero.headlineAccent}
            </span>
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            {content.hero.description}
          </p>

          <Link
            href={withLocalePath(locale, "/about")}
            className="inline-flex w-fit text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.hero.aboutLinkLabel}
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`${withLocalePath(locale)}#projetos`}
              className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.viewProjects}
            </Link>
            <Link
              href={`${withLocalePath(locale)}#case`}
              className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.homePage.caseCta}
            </Link>
          </div>

          <ul className="flex flex-wrap gap-2">
            {content.hero.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-6 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-2xl border border-slate-700/70">
              <Image
                src="/og-image.png"
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover object-top"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
