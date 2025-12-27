export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Je ziet meteen wat je kunt vertrouwen",
      bullets: [
        "Werkt met bestaande exports uit bijvoorbeeld Salesforce of HubSpot",
        "Geen nieuwe tools, geen extra invoer en geen proceswijziging",
        "Leest wat er vastligt: dealinfo, fase, close date en geschreven vervolgstappen"
      ]
    },
    {
      number: "2",
      title: "Twijfel verdwijnt uit je forecast",
      bullets: [
        "Gebaseerd op jarenlang sales management oordeel",
        "Ontworpen om schijnzekerheid te doorbreken",
        "Eerlijk over wat klopt en wat niet"
      ]
    },
    {
      number: "3",
      title: "Je weet waar je moet ingrijpen en waar niet",
      bullets: [
        "Geen dashboards om te interpreteren, wel een helder overzicht",
        "Laat zien waar twijfel en risico zich opstapelen",
        "Ondersteunt keuzes op basis van wat er daadwerkelijk staat"
      ]
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
              <div className="bg-white p-8 rounded-lg border border-border smooth-transition hover:shadow-lg h-full">
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  {step.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-border text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Geen nieuwe software om te leren.</strong>{" "}
            Dealify werkt met wat je al hebt.
          </p>
        </div>
      </div>
    </section>
  );
}