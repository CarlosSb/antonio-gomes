import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type HeroProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function Hero({ content, locale }: HeroProps) {
  return (
    <section className="space-y-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
      <div className="space-y-4">
        <p className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
          {content.hero.availability}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl">
          {content.hero.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {content.profile.summary}
        </p>
        <p className="text-sm text-slate-400">{content.hero.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={withLocalePath(locale, "/projects")}
          className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.viewProjects}
        </Link>
        <Link
          href={withLocalePath(locale, "/contact")}
          className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.contact}
        </Link>
      </div>
    </section>
  );
}
