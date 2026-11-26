import { Hero } from "@/components/Hero";
import { WhoIAm } from "@/components/WhoIAm";
import { TheWork } from "@/components/TheWork";
import { BuildBand } from "@/components/BuildBand";
import { TheVideo } from "@/components/TheVideo";
import { Quote } from "@/components/Quote";
import { LetsTalk } from "@/components/LetsTalk";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheVideo />
      <WhoIAm />
      <TheWork />
      <BuildBand />
      <Quote />
      <LetsTalk />
    </main>
  );
}
