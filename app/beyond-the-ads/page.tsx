import type { Metadata } from "next";
import { BeyondTheAds } from "@/components/BeyondTheAds";
import { beyondTheAds, siteConfig } from "@/lib/content";

const title = "Beyond the Ads — Adam Nagy";

// A page-level `openGraph` replaces the layout's wholesale (and takes the
// layout's file-based share image with it), so the image has to be named here.
export const metadata: Metadata = {
  title,
  description: beyondTheAds.description,
  openGraph: {
    title,
    description: beyondTheAds.description,
    url: "/beyond-the-ads",
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: beyondTheAds.description,
    images: ["/opengraph-image"],
  },
};

export default function BeyondTheAdsPage() {
  return <BeyondTheAds />;
}
