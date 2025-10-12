import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-plot.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Residential Plots in Patna's Prime Locations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce-3d">
            <MapPin className="h-5 w-5 animate-float" />
            <span className="text-sm font-medium">Beldarichak, Patna</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Residential Plots in Patna's
            <span className="block text-accent mt-2">Prime Locations</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto">
            Registry & Mutation Ready – Start Your Dream Home Today
          </p>

          <div className="bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-xl p-4 sm:p-6 mb-8 max-w-2xl mx-auto animate-glow-pulse hover:scale-105 transition-transform duration-500 cursor-pointer">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-2">
              Book with Just ₹51,000 Only!
            </p>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90">
              Limited Period Discount Offer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("plots")}
              className="w-full sm:w-auto hover:scale-110 transition-transform duration-500 animate-slide-up-3d"
            >
              View Available Plots
              <ArrowRight className="h-5 w-5" />
            </Button>
            <a href="tel:+918102207926" className="w-full sm:w-auto">
              <Button variant="cta" size="xl" className="w-full animate-glow-pulse hover:scale-110 transition-transform duration-500">
                Call: +91 8102207926
              </Button>
            </a>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-primary-foreground/20 hover:scale-110 hover:-rotate-3 transition-all duration-500 transform-gpu cursor-pointer animate-tilt-in">
              <p className="text-2xl sm:text-3xl font-bold mb-1">5+</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Years Experience</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-primary-foreground/20 hover:scale-110 transition-all duration-500 transform-gpu cursor-pointer animate-tilt-in" style={{ animationDelay: "150ms" }}>
              <p className="text-2xl sm:text-3xl font-bold mb-1">100%</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Verified Plots</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-primary-foreground/20 hover:scale-110 hover:rotate-3 transition-all duration-500 transform-gpu cursor-pointer animate-tilt-in" style={{ animationDelay: "300ms" }}>
              <p className="text-2xl sm:text-3xl font-bold mb-1">100+</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
