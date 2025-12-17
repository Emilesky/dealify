export default function SolutionSection() {
  const benefits = [
    {
      title: "Verbetert datakwaliteit automatisch",
      description: "AI-gestuurde validatie die vaagheid en uitstel blootlegt"
    },
    {
      title: "Stimuleert sales om actief na te denken over hun deals",
      description: "Aannames worden zichtbaar, niet verborgen"
    },
    {
      title: "Maakt verwachtingen expliciet en bespreekbaar",
      description: "Gesprekken gaan over keuzes, niet over verklaringen"
    }
  ];

  return (
    <section id="solution" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          {/* Section Header */}
          <div className="mb-12">
            <div className="accent-line mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dealify brengt structuur, zonder extra complexiteit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dealify is een slimme AI-laag voor management, bovenop het bestaande CRM. Er wordt niets vervangen. Dealify maakt zichtbaar wat klopt en wat aandacht nodig heeft.
            </p>
            <p className="text-lg text-muted-foreground font-semibold">
              Niet met meer dashboards, maar door realiteit af te dwingen.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
