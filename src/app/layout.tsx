import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "../lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f7f6f3",
};

export const metadata: Metadata = {
  title: {
    default: "Qais Alqaissi · Portfolio",
    template: "%s · Qais Alqaissi",
  },
  description: profile.pitch,
  applicationName: "Qais Alqaissi",
  keywords: [
    "Qais Alqaissi",
    "cybersecurity",
    "R&D",
    "full-stack",
    "open source",
    "Amman",
    "photography",
    "Shanghai",
    "Caeruleum",
    "Vigil",
    "Aurum",
  ],
  authors: [{ name: profile.name, url: "https://github.com/Cipher-Red" }],
  openGraph: {
    title: "Qais Alqaissi · Portfolio",
    description: profile.pitch,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Qais Alqaissi · Portfolio",
    description: profile.pitch,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}