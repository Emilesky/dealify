export default function SolutionSection() {
  return (
    <section id="solution" className="section-spacing bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img
              src="/images/data-quality-visual.png"
              alt="Data quality improvement"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            <div className="accent-line mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dealify brengt structuur, zonder extra complexiteit
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Dealify is een slimme AI-laag bovenop je bestaande CRM. We vervangen niets. We maken zichtbaar wat klopt en wat aandacht nodig heeft.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Verbetert datakwaliteit automatisch</h3>
                  <p className="text-sm text-muted-foreground">AI-gestuurde validatie en suggesties in real-time</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Stimuleert sales om actief na te denken over hun deals</h3>
                  <p className="text-sm text-muted-foreground">Actionable insights die het team helpen beter te presteren</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Maakt verwachtingen expliciet en bespreekbaar</h3>
                  <p className="text-sm text-muted-foreground">Duidelijke communicatie over pipeline status en kansen</p>
                </div>
              </div>
            </div>

            <p className="text-base text-muted-foreground mt-8 italic">
              Zo ontstaat rust en focus in het hele team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
