import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AI Expertise", path: "/ai-expertise" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">

            <img src="https://airbridgedevs.com/wp-content/uploads/2025/10/cropped-air-bridg-g.png" alt="" />
            {/* <span className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">AIR</span>
              <span className="text-primary">BRIDGE</span>
            </span>
            <span className="text-xs font-medium text-muted-foreground tracking-widest border-t border-muted-foreground pt-0.5">
              DEVS
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm ${isActive(link.path) ? "text-primary" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact-us">
              <Button className="btn-gradient text-sm px-6 py-2.5">
                BOOK A BRIEF
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium ${isActive(link.path) ? "text-primary" : "text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <Button className="btn-gradient text-sm w-full mt-2">
                  BOOK A BRIEF
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
