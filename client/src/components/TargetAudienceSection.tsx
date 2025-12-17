export default function TargetAudienceSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl">
          {/* Section Header */}
          <div className="mb-12">
            <div className="accent-line mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Voor wie is Dealify bedoeld?
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-foreground font-semibold">
                Voor management dat verantwoordelijkheid draagt voor voorspelbaarheid.
              </p>
              <p className="text-lg text-muted-foreground">
                Dealify is gebouwd voor leiders in managementrollen die sturen op realiteit, niet op aannames.
              </p>
            </div>

            {/* What Dealify is NOT */}
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-primary">
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Niet voor organisaties die:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Vooral meer dashboards zoeken</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">CRM gebruiken om achteraf te verklaren</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
