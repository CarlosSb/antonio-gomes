import type { Metadata } from "next";
import { defaultLocale, profileContent, type Locale } from "@/content/profile";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

function joinUrl(pathname: string): string {
  if (!pathname || pathname === "/") {
    return siteUrl;
  }

  return `${siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

type CreateMetadataParams = {
  title: string;
  description: string;
  pathname?: string;
  locale?: Locale;
};

export function createMetadata({
  title,
  description,
  pathname = "/",
  locale = defaultLocale,
}: CreateMetadataParams): Metadata {
  const content = profileContent[locale];
  const url = joinUrl(pathname);

  return {
    title,
    description,
    keywords: content.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url,
      title,
      description,
      siteName: content.seo.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
