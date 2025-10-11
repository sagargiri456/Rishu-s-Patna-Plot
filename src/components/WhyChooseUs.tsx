import { Card } from "@/components/ui/card";
import {
  Award,
  ShieldCheck,
  CreditCard,
  MapPin,
  Ban,
  Users,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "5+ Years of Experience",
    description: "Trusted identity in real estate in Patna and surrounding areas with proven track record.",
  },
  {
    icon: ShieldCheck,
    title: "100% Verified Plots",
    description: "Registry and Mutation ready plots, completely free from legal hassles and complications.",
  },
  {
    icon: CreditCard,
    title: "Finance Facility",
    description: "Book your plot in easy installments with flexible payment options, completely worry-free.",
  },
  {
    icon: MapPin,
    title: "Free Site Visit",
    description: "See your plot for yourself before making a decision. We arrange hassle-free site visits.",
  },
  {
    icon: Ban,
    title: "No Hidden Charges",
    description: "Complete transparency in every transaction. Zero hidden fees, no surprises later.",
  },
  {
    icon: Users,
    title: "100+ Happy Clients",
    description: "Hundreds of families have moved towards their dream home with our honesty and support.",
  },
  {
    icon: PhoneCall,
    title: "On-Call Assistance",
    description: "Support at every step of your journey. We're just a phone call away, anytime you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your dream of owning land a reality with trust, transparency, and exceptional service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-rotate-2 transform-gpu bg-gradient-to-br from-card to-card/50 animate-tilt-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 sm:p-4 bg-secondary/10 rounded-full mb-3 sm:mb-4 animate-float">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Banner */}
        <Card className="p-4 sm:p-6 lg:p-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center animate-flip-in hover:scale-105 transition-transform duration-500">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Your Trust is Our Priority
          </h3>
          <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-90 max-w-3xl mx-auto">
            We understand that buying land is one of the most important decisions of your life. That's why we ensure complete transparency, legal clarity, and unwavering support throughout your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <p className="text-2xl sm:text-3xl font-bold">100%</p>
              <p className="text-xs sm:text-sm opacity-90">Customer Satisfaction</p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <p className="text-2xl sm:text-3xl font-bold">0</p>
              <p className="text-xs sm:text-sm opacity-90">Legal Issues</p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <p className="text-2xl sm:text-3xl font-bold">24/7</p>
              <p className="text-xs sm:text-sm opacity-90">Support Available</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;
