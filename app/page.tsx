import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import InstallWarning from "@/components/InstallWarning";
import Walkthrough from "@/components/Walkthrough";
import LoopTimeline from "@/components/LoopTimeline";
import TinyFishBlock from "@/components/TinyFishBlock";
import Traction from "@/components/Traction";
import ChangelogPreview from "@/components/ChangelogPreview";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <InstallWarning />
        <Walkthrough />
        <LoopTimeline />
        <TinyFishBlock />
        <Traction />
        <ChangelogPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
