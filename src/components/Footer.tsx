import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@airbridgedevs.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@airbridgedevs.com</span>
              </a>
              <a
                href="tel:+16282625009"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 628 2625 009</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>San Francisco, California</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/ai-expertise"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  AI Expertise
                </Link>
                <Link
                  to="/about-us"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link
                  to="/services"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Full-Stack Development
                </Link>
                <Link
                  to="/services"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  AI-Driven Engineering
                </Link>
                <Link
                  to="/services"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Staff Augmentation
                </Link>
                <Link
                  to="/services"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Strategic AI Consulting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                <span className="text-background">AIR</span>
                <span className="text-primary">BRIDGE</span>
              </span>
              <span className="text-xs text-background/60">DEVS</span>
            </div>
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Airbridge Devs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
