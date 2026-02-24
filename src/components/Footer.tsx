import Link from "next/link";
import type { LocalizedProfileContent, Locale } from "@/content/profile";
import { withLocalePath } from "@/lib/i18n";

type FooterProps = {
  content: LocalizedProfileContent;
  locale: Locale;
};

export default function Footer({ content, locale }: FooterProps) {
  const year = new Date().getFullYear();
  const homePath = withLocalePath(locale);

  const rights = content.footer.rights
    .replace("{year}", String(year))
    .replace("{name}", content.profile.name);

  const navigationLinks = [
    { href: `${homePath}#hero`, label: content.navigation.home },
    { href: `${homePath}#projetos`, label: content.navigation.projects },
    { href: `${homePath}#experiencia`, label: content.sections.experience },
    { href: `${homePath}#skills`, label: content.sections.skills },
    { href: `${homePath}#sobre`, label: content.navigation.about },
    { href: `${homePath}#contato`, label: content.navigation.contact },
  ];

  return (
    <footer className="border-t border-slate-800/90 bg-slate-950/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <section className="space-y-3" aria-label={content.profile.name}>
            <h2 className="text-base font-semibold text-slate-100">{content.profile.name}</h2>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">{content.footer.tagline}</p>
            <p className="text-sm text-slate-400">
              {content.footer.locationLabel}: {content.footer.locationValue}
            </p>
          </section>

          <section className="space-y-3" aria-label={content.footer.navigationTitle}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {content.footer.navigationTitle}
            </h2>
            <nav className="flex flex-col gap-2" aria-label={content.footer.navigationTitle}>
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="w-fit text-sm text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>

          <section className="space-y-3" aria-label={content.footer.contactTitle}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {content.footer.contactTitle}
            </h2>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${content.profile.email}`}
                aria-label={content.actions.emailMe}
                className="w-fit text-sm text-sky-400 transition hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {content.profile.email}
              </a>
              <a
                href={content.profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={content.accessibility.linkedin}
                className="w-fit text-sm text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {content.actions.linkedinProfile}
              </a>
              <a
                href={content.profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={content.accessibility.github}
                className="w-fit text-sm text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {content.actions.githubProfile}
              </a>
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{rights}</p>
          <p>{content.footer.buildLine}</p>
          <a
            href="#top"
            aria-label={content.footer.backToTop}
            className="w-fit text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
