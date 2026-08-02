import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { HomeClosing } from "@/components/sections/HomeClosing";
import { PlayerIntro } from "@/components/sections/PlayerIntro";
import { StatsSection } from "@/components/sections/StatsSection";
import { createPageMetadata, siteConfig } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PlayerIntro />
      <HighlightsSection />
      <HomeClosing />
    </>
  );
}
