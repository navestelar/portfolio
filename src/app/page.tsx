import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <div className="container mx-auto py-4">
        <Navbar />
        <div className="container mx-auto mt-24">
          <HeroSection />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
