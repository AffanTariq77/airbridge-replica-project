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

const linkClass = "block text-base text-[#222222]/70 hover:text-primary transition-colors font-medium";
const contactClass = "flex items-start gap-3 text-base text-[#222222]/70 hover:text-primary transition-colors font-medium";
const socialClass =
  "flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-105";

const Footer = () => {
  return (
    <footer className="bg-white text-[#222222]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 xl:gap-x-10 md:grid-cols-3 xl:grid-cols-[minmax(200px,1fr)_repeat(4,auto)]">
          {/* About Section */}
          <div className="md:col-span-3 xl:col-span-1">
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
            <p className="text-base text-[#222222]/70 leading-relaxed max-w-xs">
              Airbridge is the leader in Mission Ready Engineering a disciplined and strategic approach to building technology
            </p>
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.facebook.com/airbridgedevs"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                title="Follow us on Facebook"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/airbridgedevs?fbclid=IwY2xjawRAha9leHRuA2FlbQIxMABicmlkETFOVnllQTAwNFdia2NQaEVhc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiEYiap4dQ91eWzTF2aSsM9gFg-ZY9sqsjkpKLdGaRohhw-H_uwfUyAWLURp_aem_pUvSDQU0WjhES2vtSQ76Lw"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                title="Follow us on Instagram"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/airbridgedevs"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                title="Connect with us on LinkedIn"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Section */}
          <nav aria-label="Solutions">
            <h3 className="font-bold text-xl mb-8">Solutions</h3>
            <div className="space-y-4">
              <Link to="/services" className={linkClass}>
                Full-Stack Development
              </Link>
              <Link to="/services" className={linkClass}>
                AI-Driven Engineering
              </Link>
              <Link to="/services" className={linkClass}>
                Staff Augmentation
              </Link>
              <Link to="/services" className={linkClass}>
                Strategic AI Consulting
              </Link>
              <Link to="/blog" className={linkClass}>
                Blog
              </Link>
            </div>
          </nav>

          {/* Service Sections */}
          {serviceColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-bold text-xl mb-8">{column.title}</h3>
              <div className="space-y-4">
                {column.links.map((page) => (
                  <a key={page.url} href={page.url} className={linkClass}>
                    {page.label}
                  </a>
                ))}
              </div>
            </nav>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-xl mb-8">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+16282625009" className={contactClass}>
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Mobile: +1 628 2625 009
              </a>
              <a href="mailto:info@airbridgedevs.com" className={contactClass}>
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                info@airbridgedevs.com
              </a>
              <p className="flex items-start gap-3 text-base text-[#222222]/70 font-medium">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  20A Tanjong Pagar Road,<br />
                  SINGAPORE 088443
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EEEEEE]">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-base text-[#222222]/70 font-medium text-center sm:text-left">
            Copyright © {new Date().getFullYear()} AirBridge Devs | Powered by AirBridge Devs
          </p>
          <Link to="/terms" className="text-base text-[#222222]/70 hover:text-primary transition-colors font-medium">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
