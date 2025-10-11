import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plotSizes = ["600", "900", "1200", "1600", "1800", "2400", "3600"];

const plans = [
  {
    name: "ECONOMY",
    price: "1750",
    booking: "51,000",
    features: [
      "100% Verified Plots",
      "Registry & Mutation Ready",
      "30ft Road Access",
      "Finance Facility Available",
      "Free Site Visit",
    ],
  },
  {
    name: "PREMIUM",
    price: "1850",
    booking: "51,000",
    features: [
      "100% Verified Plots",
      "Registry & Mutation Ready",
      "30ft Road Access",
      "Prime Location Plots",
      "Finance Facility Available",
      "Free Site Visit",
    ],
    featured: true,
  },
  {
    name: "DUPLEX",
    price: "2000",
    booking: "51,000",
    features: [
      "100% Verified Plots",
      "Registry & Mutation Ready",
      "30ft Road Access",
      "Corner & Prime Plots",
      "Duplex Plot Ready",
      "Finance Facility Available",
      "Free Site Visit",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent Pricing & Available Sizes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plot size for your dream home with our flexible pricing options.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 animate-slide-up-3d">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-2 transform-gpu ${
                plan.featured
                  ? "border-2 border-secondary shadow-xl scale-105 animate-glow-pulse"
                  : "border border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">₹{plan.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/sq. ft.</span>
                </div>
                <div className="bg-accent/10 rounded-lg p-2 sm:p-3 mt-4">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Booking Amount</p>
                  <p className="text-xl sm:text-2xl font-bold text-accent">₹{plan.booking}</p>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="tel:+919142766214">
                <Button
                  variant={plan.featured ? "cta" : "default"}
                  className="w-full"
                  size="lg"
                >
                  Book Now
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Available Plot Sizes */}
        <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-muted to-background animate-flip-in">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-foreground">
            Available Plot Sizes (sq. ft.)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4">
            {plotSizes.map((size, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-2 sm:p-4 text-center hover:shadow-lg hover:scale-110 hover:-rotate-3 transition-all duration-500 transform-gpu cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-lg sm:text-2xl font-bold text-primary">{size}</p>
                <p className="text-xs text-muted-foreground mt-1">sq. ft.</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground">
            All plot sizes available for all three categories
          </p>
        </Card>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-base sm:text-lg font-semibold text-accent animate-pulse">
            * Price Negotiable
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            Contact us for special pricing and offers
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
