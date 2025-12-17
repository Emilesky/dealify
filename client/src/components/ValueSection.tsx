export default function ValueSection() {
  const benefits = [
    {
      title: "Je stuurt eerder, niet harder",
      description: "Er wordt ingegrepen wanneer het nog effect heeft, niet als het al misgaat."
    },
    {
      title: "Minder micromanagement, meer focus",
      description: "Het team weet dat vaagheid zichtbaar wordt. Dat verandert gedrag."
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Effect voor management
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
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
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
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
