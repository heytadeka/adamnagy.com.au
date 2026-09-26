import type { Metadata, Viewport } from "next";
import { Anton } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/lib/content";
import { GrainOverlay } from "@/components/GrainOverlay";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollChoreography } from "@/components/ScrollChoreography";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adamnagy.com.au"),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://adamnagy.com.au",
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <BackgroundLayer />
        <GrainOverlay />
        <Nav />
        {children}
        <CustomCursor />
        <ScrollChoreography />
      </body>
    </html>
  );
}
