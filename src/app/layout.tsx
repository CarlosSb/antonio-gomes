import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/language";
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

const themeInitScript = `
(() => {
  try {
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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} bg-slate-950 font-sans text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div
              className="relative min-h-screen bg-slate-950"
              style={{ backgroundImage: "var(--app-bg)" }}
            >
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
