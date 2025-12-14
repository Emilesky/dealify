import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="font-bold">Dealify</span>
            </div>
            <p className="text-sm text-white/70">
              AI-gestuurde sales pipeline management voor MKB-directeuren.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#solution" className="smooth-transition hover:text-white">
                  Functies
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="smooth-transition hover:text-white">
                  Hoe het werkt
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="smooth-transition hover:text-white">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="smooth-transition hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-white">
                  Voorwaarden
                </a>
              </li>
              <li>
                <a href="#contact" className="smooth-transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>&copy; 2025 Dealify. Alle rechten voorbehouden.</p>
          <p className="mt-4 md:mt-0">
            Geen verkooppraat. Wel helder advies.
          </p>
        </div>
      </div>
    </footer>
  );
}
