import { CaveBackground } from "./_components/landing/CaveBackground";
import { CharacterSection } from "./_components/landing/CharacterSection";
import { CommunitySection } from "./_components/landing/CommunitySection";
import { Footer } from "./_components/landing/Footer";
import { Header } from "./_components/landing/Header";
import { HeroSection } from "./_components/landing/HeroSection";
import { RoadmapSection } from "./_components/landing/RoadmapSection";
import { StorySection } from "./_components/landing/StorySection";
import { TokenDisclaimer } from "./_components/landing/TokenDisclaimer";
import { VaultSection } from "./_components/landing/VaultSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020604] text-[#f3eed8]">
      <CaveBackground />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <StorySection />
        <CharacterSection />
        <VaultSection />
        <RoadmapSection />
        <CommunitySection />
        <TokenDisclaimer />
        <Footer />
      </div>
    </main>
  );
}
