import { profileContent, defaultLocale, locales, type Locale } from "@/content/profile";
import { projects, type Project } from "@/content/projects";

const validLocales = new Set<Locale>(locales);

export function isLocale(value: string): value is Locale {
  return validLocales.has(value as Locale);
}

export function getContent(locale: Locale = defaultLocale) {
  return profileContent[locale];
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function localizeText(
  value: Record<Locale, string>,
  locale: Locale,
): string {
  return value[locale] ?? value[defaultLocale];
}

export function localizeList(
  value: Record<Locale, string[]>,
  locale: Locale,
): string[] {
  return value[locale] ?? value[defaultLocale];
}
