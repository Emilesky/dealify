export default function SolutionSection() {
  const benefits = [
    {
      title: "Verbetert datakwaliteit zonder extra invoer",
      description: "Dealify valideert niet alleen of data compleet is, maar of die geloofwaardig is. Vaagheid, uitstel en aannames worden zichtbaar, zonder nieuwe velden, regels of dashboards."
    },
    {
      title: "Stimuleert sales om actief na te denken over hun deals",
      description: "Dealify stuurt sales niet aan en geeft geen adviezen. Door aannames zichtbaar te maken, worden deals vanzelf scherper. Wat niet klopt, valt op. Dat verandert gedrag zonder druk."
    },
    {
      title: "Maakt besluitvorming concreet voor management",
      description: "Omdat verwachtingen expliciet zijn, verschuift het gesprek. Minder uitleg en verdediging, meer strategie en coaching. Geen forecast-discussies achteraf, maar beslissingen op tijd."
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
            Dealify brengt één vast moment van realiteit terug. Geen extra dashboard. Geen continue alerts. Geen ruis.            </p>
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
