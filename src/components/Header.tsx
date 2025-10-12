import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
                PROPERTY
              </span>
              <span className="text-foreground/80 font-light mx-1">•</span>
              <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent font-bold">
                LORDS
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("plots")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Plots in Beldarichak
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Pricing & Sizes
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a href="tel:+918102207926">
              <Button variant="cta" size="lg" className="animate-glow-pulse">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-medium text-left py-1"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("plots")}
                className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-medium text-left py-1"
              >
                Plots in Beldarichak
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-medium text-left py-1"
              >
                Pricing & Sizes
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-medium text-left py-1"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-medium text-left py-1"
              >
                Contact
              </button>
              <a href="tel:+918102207926" className="pt-2 sm:pt-3">
                <Button variant="cta" size="lg" className="w-full text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now: +91 8102207926
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
