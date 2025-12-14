export default function TargetAudienceSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl">
          {/* Section Header */}
          <div className="mb-12">
            <div className="accent-line mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voor wie is Dealify bedoeld?
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Dealify is ontwikkeld voor:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-lg">✓</span>
                  <span className="text-lg text-foreground">MKB-directeuren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-lg">✓</span>
                  <span className="text-lg text-foreground">Ondernemers met een sales team van 5+</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1 text-lg">✓</span>
                  <span className="text-lg text-foreground">Organisaties die willen groeien met controle</span>
                </li>
              </ul>
            </div>

            {/* What Dealify is NOT */}
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-primary">
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Niet voor bedrijven die:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Meer dashboards zoeken</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Hun CRM vooral gebruiken als rapportage achteraf</span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <p className="text-lg text-foreground font-semibold mb-2">
                Wel voor leiders die rust en richting willen.
              </p>
              <p className="text-muted-foreground">
                Als je klaar bent om je sales pipeline echt onder controle te krijgen, laten we graag zien hoe Dealify dat kan doen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
