import { Card } from "@/components/ui/card";
import { MapPin, Play } from "lucide-react";

const VideoMapSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Play className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Location & Video Tour</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Our Location & Video Tour
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our property video and explore the exact location of our residential plots in Beldarichak, Patna.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* YouTube Video */}
          <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-tilt-in">
            <div className="relative">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/HTJFtRAUQaM?si=H8J5IELVr5KsoEna&autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&showinfo=0"
                  title="Property Tour Video - Beldarichak, Patna"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <Play className="h-4 w-4" />
                Property Tour
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                Property Tour Video
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Watch our exclusive property tour video showcasing the residential plots, infrastructure, and prime location in Beldarichak, Patna.
              </p>
            </div>
          </Card>

          {/* Google Maps */}
          <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-slide-up-3d">
            <div className="relative">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.123456789!2d85.123456789!3d25.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a1234567890%3A0x1234567890abcdef!2sBeldarichak%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  title="Beldarichak, Patna Location Map"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Our Location
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                Beldarichak, Patna Location
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3">
                Our residential plots are strategically located in Beldarichak, Patna with excellent connectivity and infrastructure.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>30ft Main Road Access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Near Patna Airport</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Close to Major Highways</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <Card className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 animate-flip-in">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
              Ready to Visit in Person?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Schedule a free site visit to see the plots for yourself. Our team will guide you through the location and answer all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="tel:+918102207926" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Call for Site Visit
                </button>
              </a>
              <a href="https://wa.me/918102207926" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoMapSection;
