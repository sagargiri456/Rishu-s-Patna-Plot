import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img 
                src="/logo.png" 
                alt="Property Lords Patna Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
                    PROPERTY
                  </span>
                  <span className="text-primary-foreground/60 font-light mx-1">•</span>
                  <span className="text-primary-foreground font-bold">
                    LORDS
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80 font-medium">PATNA</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/80 mb-3 sm:mb-4">
              Your trusted partner in finding the perfect residential plot in Patna. We're committed to transparency, quality, and your satisfaction.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/80">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Beldarichak, Patna, Bihar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#home" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#plots" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Plots in Beldarichak
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pricing & Sizes
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+918102207926"
                className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>+91 8102207926</span>
              </a>
              <a
                href="mailto:aryan.kr5802@gmail.com"
                className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>aryan.kr5802@gmail.com</span>
              </a>
              <a
                href="https://wa.me/918102207926"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/70 text-center sm:text-left">
              © {new Date().getFullYear()} property lords. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
