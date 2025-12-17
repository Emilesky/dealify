export default function ProblemSection() {
  return (
    <section id="problem" className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl">
          {/* Section Header */}
          <div className="mb-12">
            <div className="accent-line mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Je hebt genoeg data.
              <br />
              Maar kun je erop sturen?
            </h2>
          </div>

          {/* Body Text */}
          <div className="space-y-6 mb-12">
            <p className="text-lg text-foreground">
              Veel organisaties werken met een CRM. In de praktijk zijn pipelines vaak niet actueel, onvolledig en gebaseerd op aannames.
            </p>

            <div className="bg-secondary p-6 rounded-lg border border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Wat dat betekent in het dagelijks werk:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground">Managers jagen achter deals aan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground">Salesgesprekken gaan over uitleg in plaats van keuzes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground">Bijsturen gebeurt laat en ad hoc</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground">
                <strong>Het resultaat:</strong> onrust, inefficiëntie en gemiste kansen. Het team werkt harder, maar niet slimmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
