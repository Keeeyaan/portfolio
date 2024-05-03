import Navbar from "@/components/Navbar";
import HeroSection from "@/components/section/HeroSection";
import TechSection from "@/components/section/TechSection";
import AboutSection from "@/components/section/AboutSection";
import ProjectSection from "@/components/section/ProjectSection";
import ContactSection from "@/components/section/ContactSection";
import Footer from "@/components/Footer";

import WaveBoundary from "@/components/WaveBoundary";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
        <div className="max-w-7xl px-5 w-full mx-auto">
          <Navbar />
          <HeroSection />
        </div>
        <WaveBoundary />
      </div>
      <div className="bg-[#3B82F6] text-white dark:bg-[#040e27] w-full  ">
        <TechSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
