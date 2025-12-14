import { Shield, Lock, Server } from "lucide-react";

export default function USPSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI op jouw eigen infrastructuur
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen privacy issues. Geen afhankelijkheid van externe AI-providers. Volledige controle over je data.
          </p>
        </div>

        {/* USP Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Data Privacy */}
          <div className="p-8 bg-secondary rounded-lg border border-border smooth-transition hover:shadow-lg hover:border-primary/30">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">
              Je data blijft van jou
            </h3>
            <p className="text-muted-foreground">
              Dealify draait op jouw infrastructuur. Je salesdata verlaat nooit jouw omgeving. Geen uploads naar externe servers.
            </p>
          </div>

          {/* Feature 2: Security */}
          <div className="p-8 bg-secondary rounded-lg border border-border smooth-transition hover:shadow-lg hover:border-primary/30">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">
              Volledige controle
            </h3>
            <p className="text-muted-foreground">
              Jij bepaalt waar de AI draait. Geen afhankelijkheid van derde partijen. Geen verborgen dataverwerking.
            </p>
          </div>

          {/* Feature 3: Infrastructure */}
          <div className="p-8 bg-secondary rounded-lg border border-border smooth-transition hover:shadow-lg hover:border-primary/30">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">
              Jouw infrastructuur
            </h3>
            <p className="text-muted-foreground">
              Dealify integreert met je bestaande setup. Draait op jouw servers, jouw cloud, jouw voorkeuren.
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-center text-foreground">
            <strong>Voor MKB-directeuren die hun data serieus nemen.</strong> Dealify is de AI-oplossing die je vertrouwt omdat je weet waar je data is.
          </p>
        </div>
      </div>
    </section>
  );
}
