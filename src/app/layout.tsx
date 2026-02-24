import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale, profileContent } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const baseContent = profileContent[defaultLocale];

export const metadata: Metadata = {
  title: baseContent.seo.defaultTitle,
  description: baseContent.seo.defaultDescription,
};

const initScript = `
(() => {
  try {
    const pathLocale = location.pathname.split("/").filter(Boolean)[0];
    if (pathLocale === "pt" || pathLocale === "en") {
      document.documentElement.lang = pathLocale;
    }

    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkTheme = theme === "dark" || ((!theme || theme === "system") && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDarkTheme);
    document.documentElement.style.colorScheme = shouldUseDarkTheme ? "dark" : "light";
  } catch (_error) {
    // no-op
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body
        className={`${inter.variable} bg-slate-950 font-sans text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950`}
      >
        <div
          className="relative min-h-screen bg-slate-950"
          style={{ backgroundImage: "var(--app-bg)" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
