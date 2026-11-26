import type { Metadata } from "next";
import { CaseStudies } from "@/components/CaseStudies";
import { caseStudies, siteConfig } from "@/lib/content";

const title = "Case Studies — Adam Nagy";

// A page-level `openGraph` replaces the layout's, image included, so name it here.
export const metadata: Metadata = {
  title,
  description: caseStudies.description,
  openGraph: {
    title,
    description: caseStudies.description,
    url: "/case-studies",
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: caseStudies.description,
    images: ["/opengraph-image"],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
