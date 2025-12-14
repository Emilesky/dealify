export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Dealify koppelt aan je bestaande CRM",
      description: "Eenmalige integratie met je huidige systeem"
    },
    {
      number: "2",
      title: "Elke deal wordt automatisch geanalyseerd",
      description: "AI-gestuurde analyse van alle deals in real-time"
    },
    {
      number: "3",
      title: "Datakwaliteit en next steps worden zichtbaar",
      description: "Duidelijk overzicht van wat goed is en wat aandacht nodig heeft"
    },
    {
      number: "4",
      title: "Jij stuurt op feiten, niet op aannames",
      description: "Objectieve data als basis voor je beslissingen"
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zo werkt Dealify
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen nieuwe software om te leren. Wel direct overzicht.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white p-8 rounded-lg border border-border smooth-transition hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                <h3 className="font-semibold text-foreground mb-2 text-lg pt-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2 mt-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-border text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Geen nieuwe software om te leren.</strong> Dealify werkt naadloos met je bestaande tools.
          </p>
        </div>
      </div>
    </section>
  );
}
