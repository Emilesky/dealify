import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import USPSection from "@/components/USPSection";
import ValueSection from "@/components/ValueSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <USPSection />
        <ValueSection />
        <HowItWorksSection />
        <TargetAudienceSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
