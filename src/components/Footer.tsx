import { Link } from "react-router-dom";
import { Droplets, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold">SASTHA Tank Cleaning</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional water tank cleaning services across Coimbatore and all over Tamil Nadu. Safe methods, modern equipment, affordable pricing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Overhead Tank Cleaning</li>
              <li>Underground Sump Cleaning</li>
              <li>Apartment Tank Cleaning</li>
              <li>Commercial Tank Cleaning</li>
              <li>Industrial Tank Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+916374341251" className="hover:text-primary transition-colors">63743 41251</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>info@sasthacleaning.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Ponneri, Kottamangalam, Udumalaipettai, Tamil Nadu 642126</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© {new Date().getFullYear()} SASTHA Tank Cleaning. All rights reserved.</p>
          <p>Serving all of Tamil Nadu 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
