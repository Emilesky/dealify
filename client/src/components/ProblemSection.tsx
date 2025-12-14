export default function ProblemSection() {
  return (
    <section id="problem" className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div className="mb-12">
            <div className="accent-line mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Je hebt genoeg data. Maar kun je erop sturen?
            </h2>
          </div>

          {/* Problem Description */}
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Veel MKB-bedrijven werken met een CRM. Maar in de praktijk zijn pipelines vaak onvolledig, niet actueel en gebaseerd op gevoel in plaats van feiten.
            </p>

            {/* Problem Points */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base">Dit zorgt voor:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Verrassingen in de forecast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Managers die achter deals aan jagen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Salesgesprekken over uitleg in plaats van keuzes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Het resultaat:</strong> Onrust, inefficiëntie en gemiste kansen. Je team werkt harder, maar niet slimmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
