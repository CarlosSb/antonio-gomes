import { defaultLocale, locales, type Locale } from "@/content/profile";

const localeSet = new Set<Locale>(locales);

export function isLocale(value: string): value is Locale {
  return localeSet.has(value as Locale);
}

export function getLocaleFromParam(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function withLocalePath(locale: Locale, path = ""): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
