import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#222222]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-16">
          {/* About Section */}
          <div>
            <img
              src="/images/airbridge-logo.svg"
              alt="Airbridge Devs"
              loading="lazy"
              decoding="async"
              width={128}
              height={32}
              className="w-40 mb-8"
            />
            <h3 className="font-bold text-xl mb-5">Who is Airbridge?</h3>
            <p className="text-base text-[#222222]/70 leading-relaxed">
              Airbridge is the leader in Mission-Ready Engineering – a disciplined and strategic approach to building technology
            </p>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="font-bold text-xl mb-8">Solutions</h3>
            <div className="space-y-4">
              <Link
                to="/services"
                className="block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium"
              >
                Full-Stack Development
              </Link>
              <Link
                to="/services"
                className="block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium"
              >
                AI-Driven Engineering
              </Link>
              <Link
                to="/services"
                className="block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium"
              >
                Staff Augmentation
              </Link>
              <Link
                to="/services"
                className="block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium"
              >
                Strategic AI Consulting
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base mb-2">Email</h4>
                  <a
                    href="mailto:info@airbridgedevs.com"
                    className="text-base text-[#222222]/70 hover:text-primary transition-colors"
                  >
                    info@airbridgedevs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base mb-2">Phone</h4>
                  <a
                    href="tel:+16282625009"
                    className="text-base text-[#222222]/70 hover:text-primary transition-colors"
                  >
                    Mobile: +1 628 2625 009
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address & LinkedIn */}
          <div>
            <div className="flex flex-col gap-8 h-full">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base mb-2">Address</h4>
                  <p className="text-base text-[#222222]/70 leading-relaxed">
                    20A Tanjong Pagar Road,<br />
                    SINGAPORE 088443
                  </p>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <a
                  href="https://www.linkedin.com/company/airbridgedevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all hover:scale-105"
                  title="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                  
                </a>
                <span className="font-medium text-base">airbridgedevs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EEEEEE] bg-[#00296b]">
        <div className="container mx-auto px-6 py-6">
          <p className="text-base text-white text-center font-medium">
            Copyright © {new Date().getFullYear()} AirBridge Devs | Powered by AirBridge Devs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
