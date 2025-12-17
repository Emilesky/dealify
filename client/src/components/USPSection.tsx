export default function USPSection() {
  const features = [
    {
      title: "Jouw data, jouw infrastructuur",
      description:
        "Dealify draait waar jij dat wilt: op eigen servers, private cloud, public cloud of hybride. Met volledige vrijheid in LLM-keuze en zonder dat salesdata naar externe AI-providers wordt verstuurd."
    },
    {
      title: "Transparante analyse, geen black box",
      description:
        "Dealify gebruikt eenvoudige, uitlegbare logica om kwaliteitsrisico’s zichtbaar te maken. Geen verborgen scores, geen voorspellingen die je niet kunt verklaren. Wat je ziet, kun je volgen en bespreken."
    },
    {
      title: "Eenvoudig te implementeren",
      description:
        "Dealify werkt met bestaande CRM-exporten en past zich aan jouw omgeving aan. Geen nieuwe workflows, geen trainingstrajecten en geen lange implementaties. Je begint met kijken, niet met veranderen."
    }
  ];

  return (
    <section className="section-spacing bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI op jouw infrastructuur
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen verplichte cloud. Geen dataverplaatsing. Geen black box.
            <br />
            Volledige controle over waar en hoe analyse plaatsvindt.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-border smooth-transition hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}