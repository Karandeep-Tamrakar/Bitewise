import { useState } from "react";
import { Button } from "@/components/ui/button";
import TrialModal from "@/components/modals/TrialModal";

const Header = () => {
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-2xl font-bold text-foreground">BiteWise</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Features
            </a>
            <a
              href="#setup"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Setup
            </a>
            <a
              href="#reviews"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button> */}
            <Button variant="default" onClick={() => setIsTrialOpen(true)}>
              Request a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Trial Modal */}
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </header>
  );
};

export default Header;
