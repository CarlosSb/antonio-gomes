import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type FinalCtaProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function FinalCta({ content, locale }: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_45%)]" />
      <div className="relative space-y-5">
        <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {content.homePage.finalCtaTitle}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {content.homePage.finalCtaDescription}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={withLocalePath(locale, "/contact")}
            className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.contact}
          </Link>
          <Link
            href={withLocalePath(locale, "/projects")}
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.viewProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
