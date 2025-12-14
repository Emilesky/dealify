import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="section-spacing bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/growth-pattern.png"
          alt="Growth pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benieuwd wat dit voor jouw organisatie betekent?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Elke organisatie is anders. Daarom starten we altijd met een gesprek, geen demo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 smooth-transition hover:shadow-xl"
              >
                Plan een vrijblijvend adviesgesprek
              </Button>
            </Link>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 smooth-transition"
              >
                Neem contact op
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
