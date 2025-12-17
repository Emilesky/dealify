export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Dealify leest bestaande CRM-data",
      description: "Geen nieuwe tools. Geen extra administratie. Er wordt gewerkt met wat er al is."
    },
    {
      number: "2",
      title: "Elke deal wordt beoordeeld op realiteit",
      description: "Niet op gevoel, maar op signalen zoals actualiteit, concrete next steps en verschuivende close dates."
    },
    {
      number: "3",
      title: "Management ziet waar ingrijpen nodig is en waar losgelaten kan worden",
      description: "Helder overzicht van risico's, zonder ruis."
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hoe Dealify grip terugbrengt
          </h2>
          <p className="text-lg text-muted-foreground">
            Dealify kijkt niet naar hoeveel deals er zijn,
            <br />
            maar naar hoe betrouwbaar ze zijn.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white p-8 rounded-lg border border-border smooth-transition hover:shadow-lg h-full">
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-border text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Geen nieuwe software om te leren.</strong> Dealify werkt met wat je al hebt.
          </p>
        </div>
      </div>
    </section>
  );
}
