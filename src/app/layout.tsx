import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { DEFAULT_LOCALE } from "@/i18n/locale";
import { AuroraBackdrop } from "@/shared/components/AuroraBackdrop";
import { siteUrl } from "@/shared/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const pageTitle = `${profile.fullName} · ${profile.rotatingRoles[0][DEFAULT_LOCALE]}`;
const pageDescription = profile.summary[DEFAULT_LOCALE];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  authors: [{ name: profile.fullName }],
  keywords: [
    profile.fullName,
    "Anderson Benites",
    "desarrollador de software",
    "software developer",
    "full stack",
    "Trujillo",
    "Perú",
    "C#",
    "ASP.NET Core",
    "Python",
    "FastAPI",
    "Angular",
    "React",
    "Spring Boot",
    "SQL Server",
  ],
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: profile.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05050c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={DEFAULT_LOCALE}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/*
          Entry animations are server-rendered with inline `opacity: 0` and only
          revealed by JavaScript. Without it the page would look empty, so the
          hidden state is forced off when scripting is unavailable.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <AuroraBackdrop />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
