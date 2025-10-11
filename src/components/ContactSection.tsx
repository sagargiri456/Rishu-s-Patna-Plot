import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your plot? Contact us today and let's make your dream home a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 animate-tilt-in">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Call Us</h3>
                  <a
                    href="tel:+919142766214"
                    className="text-lg text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    +91 9142766214
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available 7 days a week, 9 AM - 8 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 transform-gpu bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">WhatsApp</h3>
                  <a
                    href="https://wa.me/919142766214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="cta" size="lg">
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">
                    Get instant responses to your queries
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu bg-gradient-to-br from-card to-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg animate-bounce-3d">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Beldarichak, Patna, Bihar
                  </p>
                  <Button variant="outline" className="mt-3">
                    Schedule Site Visit
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-4 sm:p-6 bg-primary text-primary-foreground">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#" className="text-xs sm:text-sm hover:underline opacity-90">REGISTRY</a>
                <a href="#" className="text-xs sm:text-sm hover:underline opacity-90">Bookings</a>
                <a href="#" className="text-xs sm:text-sm hover:underline opacity-90">Nearest Developments</a>
                <a href="#" className="text-xs sm:text-sm hover:underline opacity-90">Govt. Plans</a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6 lg:p-8 animate-slide-up-3d hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full min-h-[100px] sm:min-h-[120px]"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Submit Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
