"use client";
import dynamic from "next/dynamic";

// Dynamic imports to avoid SSR issues with client-only components
const ParticleCanvas = dynamic(() => import("@/components/ui/ParticleCanvas"), { ssr: false });
const CursorSpotlight = dynamic(() => import("@/components/ui/CursorSpotlight"), { ssr: false });
const SmoothScrollProvider = dynamic(() => import("@/components/ui/SmoothScrollProvider"), { ssr: false });

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import BentoGrid from "@/components/BentoGrid";
import Curriculum from "@/components/Curriculum";
import ToolsGrid from "@/components/ToolsGrid";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div style={{ position: "relative", background: "#070B14", minHeight: "100vh" }}>
        {/* Global canvas particle background */}
        <ParticleCanvas />

        {/* Mouse spotlight */}
        <CursorSpotlight />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <main>
            <HeroSection />
            <MarqueeSection />
            <BentoGrid />
            <Curriculum />
            <ToolsGrid />
            <Instructor />
            <Testimonials />
            <Pricing />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
