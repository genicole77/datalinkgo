import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataLinkGo - Comparte tus archivos al instante",
  description: "Plataforma rápida, segura y profesional para compartir tus archivos, videos e imágenes en segundos.",
  openGraph: {
    title: "DataLinkGo - Comparte tus archivos al instante",
    description: "Plataforma rápida, segura y profesional para compartir tus archivos, videos e imágenes en segundos.",
    url: "https://datalinkgo.com",
    siteName: "DataLinkGo",
    locale: "es_ES",
    type: "website",
  },
  other: {
    "impact-site-verification": "Impact-Site-Verification: a5f93ebe-8847-4d01-b987-9c5410358b35",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
