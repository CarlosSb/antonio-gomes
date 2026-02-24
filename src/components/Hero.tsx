import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type HeroProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

function DevIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      className="h-auto w-full max-w-[520px]"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="hero-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <rect x="70" y="300" width="360" height="18" rx="9" fill="#111827" opacity="0.85" />
      <rect x="100" y="135" width="300" height="180" rx="18" fill="#0f172a" stroke="#334155" />
      <rect x="122" y="156" width="256" height="124" rx="10" fill="#020617" />
      <rect x="132" y="168" width="110" height="10" rx="5" fill="url(#hero-accent)" opacity="0.9" />
      <rect x="132" y="186" width="210" height="8" rx="4" fill="#334155" />
      <rect x="132" y="202" width="180" height="8" rx="4" fill="#334155" />
      <rect x="132" y="218" width="220" height="8" rx="4" fill="#334155" />
      <rect x="132" y="236" width="120" height="28" rx="8" fill="#0369a1" opacity="0.9" />

      <ellipse cx="258" cy="103" rx="34" ry="36" fill="#f8fafc" />
      <path d="M223 108c6-34 60-34 70 0v16h-70v-16Z" fill="#0f172a" />
      <rect x="238" y="132" width="40" height="24" rx="10" fill="#f1f5f9" />
      <path d="M194 230c8-46 36-70 64-70s56 24 64 70v28H194v-28Z" fill="#1e293b" />

      <rect x="208" y="254" width="104" height="26" rx="8" fill="#0b1220" />
      <rect x="190" y="280" width="140" height="14" rx="6" fill="#1e293b" />

      <rect x="320" y="198" width="52" height="10" rx="5" fill="url(#hero-accent)" />
      <circle cx="360" cy="118" r="8" fill="#22d3ee" opacity="0.9" />
      <circle cx="140" cy="124" r="6" fill="#38bdf8" opacity="0.8" />
    </svg>
  );
}

export default function Hero({ content, locale }: HeroProps) {
  return (
    <section className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden border-b border-slate-800/80 min-h-[88vh]">
      <div className="absolute inset-0 bg-[#0b0f19]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto grid min-h-[88vh] w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-6">
        <div className="space-y-7 lg:col-span-7">
          <p className="inline-flex rounded-full border border-slate-700/90 bg-slate-900/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-300">
            {content.hero.badge}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-6xl">
            {content.hero.headlineLead}{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
              {content.hero.headlineAccent}
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={withLocalePath(locale, "/projects")}
              className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.viewProjects}
            </Link>
            <Link
              href={withLocalePath(locale, "/resume")}
              className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {content.actions.downloadResume}
            </Link>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {content.hero.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-6 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex items-center justify-center rounded-3xl border border-slate-800/70 bg-slate-900/60 p-4 sm:p-6">
            <DevIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
