import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 smooth-transition hover:opacity-80">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">Dealify</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground smooth-transition hover:text-foreground">
            Het probleem
          </a>
          <a href="#solution" className="text-sm text-muted-foreground smooth-transition hover:text-foreground">
            De oplossing
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground smooth-transition hover:text-foreground">
            Hoe het werkt
          </a>
          <a href="#contact" className="text-sm text-muted-foreground smooth-transition hover:text-foreground">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a href="https://cdmq5sde51i.typeform.com/to/fRs6PC5e?typeform-source=dealifai.netlify.app" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="smooth-transition hover:shadow-lg">
              Plan een gesprek
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
