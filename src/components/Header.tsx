import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Droplets } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* LOGO */}
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:scale-[1.02] transition-transform duration-200"
        >
          <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />

          <div className="leading-tight">
            <p className="font-heading font-bold text-base sm:text-lg whitespace-nowrap">
              SASTHA
            </p>
            <p className="text-[10px] sm:text-xs text-primary whitespace-nowrap">
              Tank Cleaning
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted ${
                location.pathname === link.to
                  ? "text-primary bg-muted"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+916374341251"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            63743 41251
          </a>

          <Button asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-2 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-muted"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-border mt-2 flex flex-col gap-3">
              <a
                href="tel:+916374341251"
                className="flex items-center gap-2 text-sm font-medium text-foreground px-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                63743 41251
              </a>

              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
