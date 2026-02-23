"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLocalizedContent } from "@/lib/language";

const iconClassName = "h-5 w-5";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.07a9.3 9.3 0 0 1 5 0c1.91-1.35 2.75-1.07 2.75-1.07.55 1.42.2 2.47.1 2.73.64.73 1.03 1.66 1.03 2.79 0 3.96-2.34 4.84-4.58 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.5A10.28 10.28 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.24-3.56a1.97 1.97 0 0 0-2-1.94 1.97 1.97 0 0 0-2.01 1.94c0 1.07.9 1.94 2 1.94h.02a1.96 1.96 0 0 0 2-1.94ZM20.44 13.35c0-3.23-1.74-4.73-4.06-4.73-1.87 0-2.7 1.02-3.16 1.74V8.5H9.84c.04 1.23 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.9 1.05 1.9 2.6V20h3.38v-6.65Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const content = useLocalizedContent();

  const navigation = [
    { href: "/", label: content.navigation.home },
    { href: "/projects", label: content.navigation.projects },
    { href: "/about", label: content.navigation.about },
    { href: "/resume", label: content.navigation.resume },
    { href: "/contact", label: content.navigation.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
          {content.profile.name}
        </Link>

        <nav
          aria-label={content.accessibility.mainNavigation}
          className="hidden items-center gap-5 md:flex"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                  isActive ? "text-sky-400" : "text-slate-300 hover:text-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={content.profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={content.accessibility.github}
            className="text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <GitHubIcon />
          </a>
          <a
            href={content.profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={content.accessibility.linkedin}
            className="text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      <nav
        aria-label={content.accessibility.mobileNavigation}
        className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-4 pb-4 md:hidden sm:px-6"
      >
        {navigation.map((item) => {
          const isActive =
            item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                isActive ? "text-sky-400" : "text-slate-300 hover:text-slate-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
