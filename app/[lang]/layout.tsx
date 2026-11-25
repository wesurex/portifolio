import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist_Mono, Pixelify_Sans } from "next/font/google";
import {
  defaultLocale,
  getDictionary,
  hasLocale,
  locales,
} from "./dictionaries";
import "../globals.css";

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "700",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: lang === defaultLocale ? "/" : `/${lang}`,
      languages: { en: "/", "pt-BR": "/pt-BR", es: "/es" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${mono.variable} ${pixel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
