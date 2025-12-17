export default function USPSection() {
  const features = [
    {
      title: "Je data blijft van jou",
      description: "Dealify draait op de eigen infrastructuur. Salesdata verlaat nooit de omgeving."
    },
    {
      title: "Jouw infrastructuur",
      description: "Integratie met de bestaande setup. Draait op eigen servers of cloud, volgens eigen voorkeuren."
    }
  ];

  return (
    <section className="section-spacing bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI op eigen infrastructuur
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen privacy issues. Geen afhankelijkheid van externe AI-providers. Volledige controle over data.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
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
