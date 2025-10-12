import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, MapPin, Navigation, Zap } from "lucide-react";
import roadView from "@/assets/plot2.jpg";
import plotView from "@/assets/plot3.jpg";
import infrastructure from "@/assets/plot1.jpg";

const images = [
  { src: roadView, alt: "30ft Main Road Access - Wide paved road with excellent connectivity" },
  { src: plotView, alt: "Freshly Excavated Plot - Ready for construction with proper soil preparation" },
  { src: infrastructure, alt: "Plot with Construction Materials - Infrastructure development in progress" },
];

const PlotsSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change images every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="plots" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Prime Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Plots in Beldarichak, Patna
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience modern living in Patna's most sought-after location with complete infrastructure and verified documentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div 
            className="animate-tilt-in"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-rotate-1">
              <div className="relative">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-opacity duration-500"
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
                    {selectedImage + 1} / {images.length}
                  </span>
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all ${
                    selectedImage === index
                      ? "ring-2 sm:ring-4 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-16 sm:h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="animate-slide-up-3d space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    Registry & Mutation Ready
                  </h3>
                  <p className="text-muted-foreground">
                    100% Verified Plots with complete legal documentation. No hidden surprises, complete transparency in every transaction.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 transform-gpu bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg animate-bounce-3d">
                  <Navigation className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    30ft Main Road Access
                  </h3>
                  <p className="text-muted-foreground">
                    Wide, paved roads with proper drainage and street lighting for excellent connectivity and accessibility.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg animate-glow-pulse">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    Limited Period Discount Offer
                  </h3>
                  <p className="text-muted-foreground">
                    Book now and take advantage of special pricing. This offer won't last long!
                  </p>
                </div>
              </div>
            </Card>

            <div className="pt-4">
              <a href="tel:+918102207926">
                <Button variant="cta" size="lg" className="w-full">
                  Book Your Plot Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotsSection;
