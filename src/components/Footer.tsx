import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const landingPages = [
  { label: "AI Strategy & Consulting", url: "https://strategy.airbridgedevs.com" },
  { label: "AI Integration & Deployment", url: "https://integrate.airbridgedevs.com" },
  { label: "Generative AI Solutions", url: "https://genai.airbridgedevs.com" },
  { label: "AI-Powered Automation", url: "https://automate.airbridgedevs.com" },
  { label: "AI Analytics Dashboards", url: "https://data.airbridgedevs.com" },
  { label: "Custom Software Development", url: "https://build.airbridgedevs.com" },
  { label: "AI-Centric Software Development", url: "https://ai.airbridgedevs.com" },
  { label: "LLM Cost Optimization", url: "https://airbridgedevs.co" },
  { label: "Food Tech", url: "https://food-tech.airbridgedevs.com" },
  { label: "Prompt to Product", url: "https://mvp.airbridgedevs.com" },
];

const serviceColumns = [
  { title: "AI Services", links: landingPages.slice(0, 5) },
  { title: "Specialised Services", links: landingPages.slice(5) },
];

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
              <Link
                to="/blog"
                className="block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Service Sections */}
          {serviceColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-bold text-xl mb-8">{column.title}</h3>
              <div className="space-y-4">
                {column.links.map((page) => (
                  <a key={page.url} href={page.url} className="block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium">
                    {page.label}
                  </a>
                ))}
              </div>
            </nav>
          ))}
        </div>

        {/* Contact & Social */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          <a
            href="mailto:info@airbridgedevs.com"
            className="flex items-center gap-3 text-base text-[#222222]/70 hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            info@airbridgedevs.com
          </a>

          <a
            href="tel:+16282625009"
            className="flex items-center gap-3 text-base text-[#222222]/70 hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            Mobile: +1 628 2625 009
          </a>

          <p className="flex items-center gap-3 text-base text-[#222222]/70">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            20A Tanjong Pagar Road, SINGAPORE 088443
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/airbridgedevs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-105"
              title="Follow us on Facebook"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/airbridgedevs?fbclid=IwY2xjawRAha9leHRuA2FlbQIxMABicmlkETFOVnllQTAwNFdia2NQaEVhc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiEYiap4dQ91eWzTF2aSsM9gFg-ZY9sqsjkpKLdGaRohhw-H_uwfUyAWLURp_aem_pUvSDQU0WjhES2vtSQ76Lw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-105"
              title="Follow us on Instagram"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/airbridgedevs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-105"
              title="Connect with us on LinkedIn"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EEEEEE] bg-[#00296b]">
        <div className="container mx-auto px-6 py-6">
          <p className="text-base text-white text-center font-medium">
            Copyright © {new Date().getFullYear()} AirBridge Devs | Powered by AirBridge Devs |{" "}
            <Link to="/terms" className="underline-offset-4 hover:underline">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
