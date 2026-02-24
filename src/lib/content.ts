import { profileContent, defaultLocale, type Locale } from "@/content/profile";
import { projects, type Project, type ProjectLink } from "@/content/projects";

export function getContent(locale: Locale = defaultLocale) {
  return profileContent[locale];
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 3): Project[] {
  const featuredProjects = projects.filter((project) => project.featured);
  if (featuredProjects.length > 0) {
    return featuredProjects.slice(0, limit);
  }

  return projects.slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function localizeText(
  value: string | Record<Locale, string> | undefined,
  locale: Locale,
): string {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value.trim();
  }

  return (value[locale] ?? value[defaultLocale] ?? "").trim();
}

export function localizeList(
  value: string[] | Record<Locale, string[]> | undefined,
  locale: Locale,
): string[] {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return value[locale] ?? value[defaultLocale] ?? [];
}

export function getProjectSummary(project: Project, locale: Locale): string {
  return localizeText(
    project.shortDescription ?? project.summary ?? project.description,
    locale,
  );
}

function isRepositoryLinkLabel(label: string): boolean {
  const normalizedLabel = label.trim().toLowerCase();

  return normalizedLabel.includes("repo") || normalizedLabel.includes("reposit");
}

export function getPublicProjectLinks(project: Project): ProjectLink[] {
  return (project.links ?? []).filter((link) => !isRepositoryLinkLabel(link.label));
}

export function getProjectLiveLink(project: Project): string | undefined {
  const links = getPublicProjectLinks(project);

  return links.find((link) => link.label.toLowerCase().includes("live"))?.href ?? links[0]?.href ?? project.liveUrl;
}
