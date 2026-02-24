import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type HeroProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function Hero({ content, locale }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/50 p-7 sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.18),transparent_42%)]" />
      <div className="relative space-y-6">
        <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-300">
          {content.hero.availability}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
          {content.hero.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {content.profile.summary}
        </p>
        <p className="max-w-2xl text-sm text-slate-400">{content.hero.description}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href={withLocalePath(locale, "/projects")}
            className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.viewProjects}
          </Link>
          <Link
            href={withLocalePath(locale, "/contact")}
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
