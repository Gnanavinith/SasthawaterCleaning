import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  Phone,
  ShieldCheck,
  Users,
  Wrench,
  BadgeDollarSign,
  Building2,
  Factory,
  Home,
  ArrowRight,
  Star,
  MapPin,
  MessageCircle,
} from "lucide-react";

const services = [
  { icon: Droplets, title: "Overhead Tank", desc: "Complete cleaning & sanitization of overhead water tanks" },
  { icon: Home, title: "Underground Sump", desc: "Deep cleaning of underground water storage sumps" },
  { icon: Building2, title: "Apartment Tanks", desc: "Specialized cleaning for residential apartment complexes" },
  { icon: Factory, title: "Commercial", desc: "Professional cleaning for offices, hotels & restaurants" },
  { icon: Wrench, title: "Industrial", desc: "Heavy-duty cleaning for factories & industrial facilities" },
];

const whyUs = [
  { icon: Users, title: "Trained Team", desc: "Skilled professionals with years of experience" },
  { icon: Wrench, title: "Modern Equipment", desc: "Advanced tools for thorough cleaning" },
  { icon: ShieldCheck, title: "Safe Methods", desc: "Eco-friendly, WHO-recommended process" },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Best rates with no hidden charges" },
];

const testimonials = [
  { name: "Rajesh K.", location: "Coimbatore", text: "Excellent service! My tank looks brand new. Very professional team.", rating: 5 },
  { name: "Priya S.", location: "Ponneri", text: "Affordable and thorough cleaning. Highly recommended for apartments.", rating: 5 },
  { name: "Murali V.", location: "Udumalaipettai", text: "On-time, clean work, and very polite staff. Will use again!", rating: 5 },
];

const areas = ["Coimbatore", "Ponneri", "Kottamangalam", "Udumalaipettai", "Chennai", "Madurai", "Salem", "Trichy", "All Tamil Nadu"];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/30 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Droplets className="h-4 w-4" />
              Professional Water Tank Cleaning
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Clean Water Starts With a <span className="text-primary">Clean Tank</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sastha Tank Cleaning provides safe, professional water tank cleaning services across Coimbatore and all of Tamil Nadu. Protect your family's health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <Link to="/contact">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="tel:+916374341251">
                  <Phone className="mr-2 h-5 w-5" /> Call 63743 41251
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We specialize in all types of water tank cleaning across Tamil Nadu</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose SASTHA?</h2>
            <p className="text-muted-foreground">Trusted by hundreds of families & businesses across Tamil Nadu</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-10 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-heading font-semibold text-foreground mr-2">Service Areas:</span>
            {areas.map((area) => (
              <span key={area} className="bg-background border border-border rounded-full px-3 py-1 text-sm text-muted-foreground">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready for Clean, Safe Water?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Book your tank cleaning today and ensure your family drinks pure, healthy water.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link to="/contact">Book a Cleaning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://wa.me/916374341251" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
