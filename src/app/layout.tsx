import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale, profileContent } from "@/content/profile";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const baseContent = profileContent[defaultLocale];

export const metadata: Metadata = {
  title: baseContent.seo.defaultTitle,
  description: baseContent.seo.defaultDescription,
  manifest: "/favicon/manifest.json",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/icon1.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon/favicon.ico"],
    other: [{ rel: "mask-icon", url: "/favicon/icon0.svg", color: "#0ea5e9" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
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
          <Analytics />
        </div>
      </body>
    </html>
  );
}
