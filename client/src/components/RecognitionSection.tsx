export default function RecognitionSection() {
  const painPoints = [
    "Close dates schuiven elke week een stukje op",
    "Next steps zijn vaag of blijven te lang hetzelfde",
    "Forecast voelt optimistisch, maar onzeker",
    "Problemen worden pas zichtbaar als het bijna te laat is",
    "In pipeline calls worden steeds dezelfde vragen gesteld"
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Herkenbaar?
            </h2>
          </div>

          {/* Pain Points List */}
          <div className="space-y-4 mb-12">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-lg border border-border">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg text-foreground">{point}</p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg text-foreground">
              <strong>Als dit herkenbaar is, zit het probleem niet in de inzet.</strong>
              <br />
              Het zit in wat zichtbaar is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
