import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { profile, site } from "../lib/content";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f7f6f3",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
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
    "IEEE",
    "photography",
    "Shanghai",
    "The Zero Day",
    "Caeruleum",
    "Vigil",
    "Aurum",
    "FAST",
    "One Piece Burger",
  ],
  authors: [{ name: profile.name, url: "https://github.com/Cipher-Red" }],
  openGraph: {
    title: "Qais Alqaissi · Portfolio",
    description: profile.pitch,
    url: site.url,
    siteName: "Qais Alqaissi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Qais M. Alqaissi — cybersecurity, R&D, full-stack, photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qais Alqaissi · Portfolio",
    description: profile.pitch,
    images: ["/og.png"],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
