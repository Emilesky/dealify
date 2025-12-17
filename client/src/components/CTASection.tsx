import { Button } from "@/components/ui/button";

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hoe betrouwbaar is jouw pipeline echt?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Geen demo. Wel een eerlijk gesprek over wat nu niet zichtbaar is.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a href="https://cdmq5sde51i.typeform.com/to/fRs6PC5e?typeform-source=dealifai.netlify.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 smooth-transition hover:shadow-xl"
              >
                Plan een reality check
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
