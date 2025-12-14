export default function ValueSection() {
  const benefits = [
    {
      title: "Betrouwbare pipeline zonder micromanagement",
      description: "Automatische validatie en monitoring zonder constant ingrijpen nodig"
    },
    {
      title: "Minder ad hoc bijsturen, meer strategisch sturen",
      description: "Stuur op feiten en trends, niet op dagelijkse crises"
    },
    {
      title: "Heldere gesprekken met sales over prioriteiten",
      description: "Objectieve data als basis voor constructieve discussies"
    },
    {
      title: "Meer voorspelbaarheid in omzet en groei",
      description: "Nauwkeurige forecasts die je kunt vertrouwen"
    },
    {
      title: "Tijd en ruimte om vooruit te kijken",
      description: "Minder tijd aan operationele zaken, meer aan strategie"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wat levert het jou op?
          </h2>
          <p className="text-lg text-muted-foreground">
            Als directeur krijg je de controle terug en de rust die je verdient.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-lg border border-border smooth-transition hover:shadow-md hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">→</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
