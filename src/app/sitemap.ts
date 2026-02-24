import type { MetadataRoute } from "next";
import { locales } from "@/content/profile";
import { getAllProjects } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStaticRoutes = locales.flatMap((locale) =>
    ["", "/projects", "/about", "/resume", "/contact"].map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const localizedProjectRoutes = locales.flatMap((locale) =>
    getAllProjects().map((project) => ({
      url: `${siteUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...localizedStaticRoutes, ...localizedProjectRoutes];
}
