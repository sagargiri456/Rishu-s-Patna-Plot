import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, CheckCircle, Star } from "lucide-react";

// Import existing working images for client engagement
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import client4 from "@/assets/client4.jpg";
import client5 from "@/assets/client5.jpg";
import client6 from "@/assets/client6.jpg";
import client7 from "@/assets/client7.jpg";
import client8 from "@/assets/client8.jpg";
import client9 from "@/assets/client9.jpg";
import client10 from "@/assets/client10.jpg";

const clientImages = [
  { src: client1, alt: "Successful Property Registration - Client with Registration Office Patna" },
  { src: client2, alt: "Happy Client Receiving Property Documents" },
  { src: client3, alt: "Official Property Transaction at District Registrar Office" },
  { src: client4, alt: "Client Engagement at Registration Office Patna" },
  { src: client5, alt: "Property Registration Success - Client Celebration" },
  { src: client6, alt: "Official Document Handover at Registration Office" },
  { src: client7, alt: "Client Satisfaction - Property Registration Complete" },
  { src: client8, alt: "Successful Property Transaction Documentation" },
  { src: client9, alt: "Client Receiving Property Papers at Office" },
  { src: client10, alt: "Property Registration Success - Client Engagement" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Beldarichak, Patna",
    rating: 5,
    text: "Excellent service! Got my plot registered without any hassle. The team was very professional and guided us through every step.",
  },
  {
    name: "Priya Sharma",
    location: "Beldarichak, Patna", 
    rating: 5,
    text: "100% satisfied with the property purchase. All documents were verified and registration was smooth. Highly recommended!",
  },
  {
    name: "Amit Singh",
    location: "Beldarichak, Patna",
    rating: 5,
    text: "Best investment decision! The plot location is perfect and all legal formalities were handled professionally.",
  },
];

const ClientEngagementSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => 
        prevIndex === clientImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
            <span className="text-xs sm:text-sm font-medium text-secondary">Client Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Happy Clients
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            See real photos of our successful property registrations and client interactions at the Registration Office Patna. 
            Every client's success is our achievement.
          </p>
        </div>

        {/* Client Photos Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Main Image */}
          <div 
            className="animate-tilt-in"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-rotate-1">
              <div className="relative">
                <img
                  src={clientImages[selectedImage].src}
                  alt={clientImages[selectedImage].alt}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Auto-play indicator */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1">
                  <div className="flex items-center gap-1 sm:gap-2 text-white text-xs">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isPaused ? 'bg-red-400' : 'bg-green-400 animate-pulse'}`} />
                    <span className="hidden sm:inline">{isPaused ? 'Paused' : 'Auto-play'}</span>
                    <span className="sm:hidden">{isPaused ? '⏸️' : '▶️'}</span>
                  </div>
                </div>
                
                {/* Image counter */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1">
                  <span className="text-white text-xs">
                    {selectedImage + 1} / {clientImages.length}
                  </span>
                </div>
              </div>
            </Card>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 mt-3 sm:mt-4">
              {clientImages.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-1 sm:ring-2 md:ring-4 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-12 sm:h-16 md:h-20 object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Second Row of Thumbnails */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 mt-1 sm:mt-2">
              {clientImages.slice(5, 10).map((image, index) => (
                <button
                  key={index + 5}
                  onClick={() => setSelectedImage(index + 5)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index + 5
                      ? "ring-1 sm:ring-2 md:ring-4 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-12 sm:h-16 md:h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Success Stats & Testimonials */}
          <div className="animate-slide-up-3d space-y-4 sm:space-y-6">
            {/* Success Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Card className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">100+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Successful Registrations</p>
              </Card>
              
              <Card className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-secondary mb-1">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</p>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">What Our Clients Say</h3>
              
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-3 sm:p-4 hover:shadow-lg transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/50">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{testimonial.rating}/5</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-2">"{testimonial.text}"</p>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="tel:+918102207926">
                <Button variant="cta" size="lg" className="w-full">
                  Join Our Success Stories
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 sm:px-6 sm:py-3 rounded-full">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              All photos are real client interactions at Registration Office Patna
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientEngagementSection;
