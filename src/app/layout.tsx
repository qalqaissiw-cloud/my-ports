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
    "Caeruleum",
    "Vigil",
    "Aurum",
    "FAST",
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
        url: "/photos/lujiazui.jpg",
        width: 1800,
        height: 1200,
        alt: "Shanghai skyline — photography by Qais Alqaissi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qais Alqaissi · Portfolio",
    description: profile.pitch,
    images: ["/photos/lujiazui.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
