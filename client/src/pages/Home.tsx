import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FramingStatement from "@/components/FramingStatement";
import ProblemSection from "@/components/ProblemSection";
import RecognitionSection from "@/components/RecognitionSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ValueSection from "@/components/ValueSection";
import USPSection from "@/components/USPSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        <HeroSection />
        <FramingStatement />
        <ProblemSection />
        <RecognitionSection />
        <SolutionSection />
        <HowItWorksSection />
        <ValueSection />
        <USPSection />
        <TargetAudienceSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
