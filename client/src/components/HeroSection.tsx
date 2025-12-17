import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="hero-spacing relative overflow-hidden bg-gradient-to-br from-white via-white to-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40 -z-10">
        <img
          src="/images/hero-background.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 slide-up">
            Grip op je sales.
            <br />
            <span className="text-primary">Rust in je hoofd.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up" style={{ animationDelay: "100ms" }}>
            Dealify verhoogt de voorspelbaarheid van je sales door betere datakwaliteit en inhoudelijke feedback op deals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: "200ms" }}>
            <a href="https://cdmq5sde51i.typeform.com/to/fRs6PC5e?typeform-source=dealifai.netlify.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto smooth-transition hover:shadow-xl hover:scale-105">
                Plan een reality check
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="w-full sm:w-auto smooth-transition hover:bg-secondary">
                Bekijk hoe dit werkt
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
