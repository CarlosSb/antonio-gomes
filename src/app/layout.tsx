import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-slate-950 font-sans text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950`}
      >
        <LanguageProvider>
          <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_55%,#020617_100%)]">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
