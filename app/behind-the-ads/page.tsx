import type { Metadata } from "next";
import { BehindTheAds } from "@/components/BehindTheAds";
import { behindTheAds } from "@/lib/content";

export const metadata: Metadata = {
  title: "Behind the Ads — Adam Nagy",
  description: behindTheAds.intro,
  openGraph: {
    title: "Behind the Ads — Adam Nagy",
    description: behindTheAds.intro,
  },
};

export default function BehindTheAdsPage() {
  return <BehindTheAds />;
}
