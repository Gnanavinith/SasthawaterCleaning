import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Home, Building2, Factory, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Overhead Tank Cleaning",
    desc: "Complete cleaning and sanitization of overhead water tanks for homes and buildings. We remove algae, sludge, and bacterial buildup to ensure fresh, clean water for your daily use.",
    benefits: ["Remove algae & sludge", "Anti-bacterial treatment", "Leak inspection included", "Same-day service"],
  },
  {
    icon: Home,
    title: "Underground Sump Cleaning",
    desc: "Deep cleaning of underground water sumps using high-pressure equipment. We ensure complete removal of sediments and contaminants from hard-to-reach underground storage.",
    benefits: ["High-pressure cleaning", "Sediment removal", "Water quality testing", "Dewatering included"],
  },
  {
    icon: Building2,
    title: "Apartment Tank Cleaning",
    desc: "Specialized tank cleaning for residential apartment complexes. We handle multiple tanks efficiently with minimal water supply disruption to residents.",
    benefits: ["Minimal disruption", "Multiple tank handling", "Scheduled cleaning plans", "Bulk pricing available"],
  },
  {
    icon: Factory,
    title: "Commercial Tank Cleaning",
    desc: "Professional cleaning services for hotels, restaurants, offices, and commercial establishments. We comply with health and safety standards.",
    benefits: ["Health compliance", "Flexible scheduling", "Certification provided", "Regular maintenance plans"],
  },
  {
    icon: Wrench,
    title: "Industrial Tank Cleaning",
    desc: "Heavy-duty cleaning for factories, warehouses, and industrial water storage facilities. We handle large-capacity tanks with specialized industrial equipment.",
    benefits: ["Large capacity tanks", "Industrial-grade equipment", "Safety compliant", "Custom solutions"],
  },
];

const steps = [
  { step: "1", title: "Inspection", desc: "We inspect your tank condition and water quality" },
  { step: "2", title: "Dewatering", desc: "Existing water is safely pumped out" },
  { step: "3", title: "Scrubbing", desc: "Walls and floor scrubbed to remove sludge & algae" },
  { step: "4", title: "Sanitization", desc: "Anti-bacterial treatment applied for complete hygiene" },
  { step: "5", title: "Rinse & Fill", desc: "Tank rinsed with clean water and ready for use" },
];

const Services = () => (
  <>
    <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Professional water tank cleaning solutions for every need — residential, commercial, and industrial.
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 bg-primary/5 flex items-center justify-center p-6 md:p-0">
                  <s.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {s.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild size="sm">
                      <Link to="/contact">Book This Service <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">Our Cleaning Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl mb-4">
                {s.step}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
