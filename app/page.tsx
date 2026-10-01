import { Hero } from "@/components/Hero";
import { WhoIAm } from "@/components/WhoIAm";
import { TheWork } from "@/components/TheWork";
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
      <Quote />
      <LetsTalk />
    </main>
  );
}
