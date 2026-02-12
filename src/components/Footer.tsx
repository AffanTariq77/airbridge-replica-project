import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white text-[#222222] border-t border-[#EEEEEE]">
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-center">
          <img src="https://airbridgedevs.com/wp-content/uploads/2025/10/cropped-air-bridg-g.png" alt="" className="w-32" />
        </div>
        <div>
          <div className="space-y-5 text-center mx-auto my-7 text-[#222222]/70">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#222222] text-center">Who is AirBridge?</h3>
            <span className="text-sm xs:text-base sm:text-lg">Airbridge is the leader in Mission-Ready Engineering – a disciplined and strategic approach to building technology</span>
          </div>
        </div>

        <Button
          className="btn-gradient text-sm mt-2 mx-auto block"
          onClick={() => window.location.href = "/contact-us"}
        >
          Contact Us
        </Button>



        {/* <div className="grid lg:grid-cols-3 gap-12 mt-7"> */}
        {/* Contact Info */}


        {/* Quick Links */}
        {/* <div>
            <h4 className="text-xl font-bold mb-10 text-[#000000] text-center">Services</h4>
            <div className="grid sm:grid-cols-2 gap-8 lg:pl-10">
              <div>
                <div className="space-y-10">
                  <Link
                    to="/services"
                    className="block text-[#222222]/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    Full-Stack Development
                  </Link>
                  <Link
                    to="/services"
                    className="block text-[#222222]/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    AI-Driven Engineering
                  </Link>
                </div>
              </div>
              <div>
                <div className="space-y-10">
                  <Link
                    to="/services"
                    className="block text-[#222222]/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    Staff Augmentation
                  </Link>
                  <Link
                    to="/services"
                    className="block text-[#222222]/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    Strategic AI Consulting
                  </Link>
                </div>
              </div>


            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[#000000] text-center">Contact Us</h3>
            <div className="space-y-5 pl-20">
            </div>
          </div> */}
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
            </div> 
            </div>
            </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EEEEEE] bg-[#00296b]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          <span className="text-sm text-[#FFFFFF] font-medium">
            Copyright © {new Date().getFullYear()} Airbridge Devs | All rights reserved.
          </span>
          <div className="flex items-center gap-8">
            {/* <a
              href="https://www.linkedin.com/company/airbridgedevs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Airbridge Devs LinkedIn"
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-base font-medium"
            >
              <div className="bg-primary/50 p-3 rounded-full"> 
              <Linkedin className="w-4 h-4 text-[#FFFFFF] hover:text-primary transition-colors" />
               </div> 
            </a>*/}
            <a
              href="mailto:info@airbridgedevs.com"
              className="flex items-center gap-2 text-white/80 text-xs font-medium hover:text-primary transition-colors text-base font-medium"
            >
              {/* <div className="bg-primary/50 p-3 rounded-full"> */}
              <Mail className="w-4 h-4 text-[#FFFFFF] hover:text-primary transition-colors" />
              <span className="inline-block self-center">info@airbridgedevs.com</span>
              {/* </div> */}
            </a>
            <a
              href="tel:+16282625009"
              className="flex items-center gap-2 text-white/80 text-xs font-medium hover:text-primary transition-colors text-base font-medium"
            >
              {/* <div className="bg-primary/50 p-3 rounded-full"> */}
              <Phone className="w-4 h-4 text-[#FFFFFF] hover:text-primary transition-colors" />
              <span className="inline-block self-center">+1 628 262 5009</span>
              {/* </div> */}
            </a>

            <div className="flex items-center gap-2 text-white/80 text-xs font-medium">
              {/* <div className="bg-primary/50 p-3 rounded-full"> */}
              <MapPin className="w-4 h-4 text-[#FFFFFF] hover:text-primary transition-colors" />
              {/* </div> */}
              <span className="inline-block self-center">20A Tanjong Pagar Road, Singapore 088443</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
