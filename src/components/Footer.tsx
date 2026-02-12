import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#222222] border-t border-[#EEEEEE]">
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <img src="https://airbridgedevs.com/wp-content/uploads/2025/10/cropped-air-bridg-g.png" alt="" />

            <div className="space-y-5 mt-7">
              <h3 className="text-[25px] font-bold mb-8 text-[#000000]">Who is AirBridge?</h3>
              <span>Airbridge is the leader in Mission-Ready Engineering – a disciplined and strategic approach to building technology</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-8 lg:pl-10">
            <div>
              <h3 className="text-xl font-bold mb-8 text-[#000000]">Contact Us</h3>
              <div className="space-y-5">
                <a
                  href="mailto:info@airbridgedevs.com"
                  className="flex items-center gap-4 text-[#222222]/80 hover:text-primary transition-colors text-base font-medium"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#2d56d3]" />
                  </div>
                  <span>info@airbridgedevs.com</span>
                </a>
                <a
                  href="tel:+16282625009"
                  className="flex items-center gap-4 text-[#222222]/80 hover:text-primary transition-colors text-base font-medium"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#2d56d3]" />
                  </div>
                  <span>+1 628 2625 009</span>
                </a>
                <div className="flex items-start gap-4 text-[#222222]/80 text-base font-medium">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-[#2d56d3]" />
                  </div>
                  <span className="mt-1 inline-block">20A Tanjong Pagar Road, <br />Singapore 088443</span>
                </div>

                <div className="flex items-start gap-4 text-[#222222]/80 text-base font-medium">
                  <a
                    href="https://www.linkedin.com/company/airbridgedevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Airbridge Devs LinkedIn"
                    className="flex items-center gap-4 text-[#222222]/80 hover:text-primary transition-colors text-base font-medium"
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="w-5 h-5 text-[#2d56d3] hover:text-primary transition-colors" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <div>
              <h4 className="text-xl font-bold mb-6 text-[#000000]">Navigation</h4>
              <div className="space-y-3">
                <Link
                  to="/"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/ai-expertise"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  AI Expertise
                </Link>
                <Link
                  to="/about-us"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div> */}
            <div>
              <h4 className="text-xl font-bold mb-10 text-[#000000]">Services</h4>
              <div className="space-y-10">
                <Link
                  to="/services"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  Full-Stack Development
                </Link>
                <Link
                  to="/services"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  AI-Driven Engineering
                </Link>
                <Link
                  to="/services"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  Staff Augmentation
                </Link>
                <Link
                  to="/services"
                  className="block text-[#222222]/70 hover:text-primary transition-colors text-base font-medium"
                >
                  Strategic AI Consulting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EEEEEE] bg-[#00296b]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[#FFFFFF] font-medium text-center w-full">
              Copyright © {new Date().getFullYear()} Airbridge Devs | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
