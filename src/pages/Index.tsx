import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  ShieldCheck,
  Users,
  Wrench,
  BadgeDollarSign,
  Building2,
  Factory,
  Home,
  ArrowRight,
  MapPin,
  MessageCircle,
} from "lucide-react";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

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

const areas = ["Coimbatore", "Ponneri", "Kottamangalam", "Udumalaipettai", "Chennai", "Madurai", "Salem", "Trichy", "All Tamil Nadu"];

const Index = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="SASTHA Tank Cleaning provides safe, professional water tank cleaning services across Coimbatore, Chennai, Madurai, Salem, Trichy, Ponneri, Udumalaipettai, Kottamangalam and all of Tamil Nadu."
        keywords="water tank cleaning, tank cleaning services, overhead tank cleaning, underground sump cleaning, water storage cleaning, professional tank cleaning, Coimbatore tank cleaning, Chennai tank cleaning, Tamil Nadu water cleaning"
        pathname="/"
      />
      <Hero />

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

      <Testimonials />

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
            <Button size="lg" variant="secondary" asChild className="text-base">
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
