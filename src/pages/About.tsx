import { ShieldCheck, Users, Award, Target, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "We use eco-friendly, WHO-recommended cleaning agents that are safe for your family." },
  { icon: Users, title: "Expert Team", desc: "Our trained professionals bring years of experience in water tank hygiene." },
  { icon: Award, title: "Quality Assured", desc: "Every cleaning follows strict quality protocols for maximum hygiene." },
  { icon: Target, title: "Customer Focused", desc: "We work around your schedule with transparent pricing and reliable service." },
];

const serviceAreas = [
  "Coimbatore", "Ponneri", "Kottamangalam", "Udumalaipettai",
  "Chennai", "Madurai", "Salem", "Trichy", "Erode",
  "Tiruppur", "Karur", "Dindigul", "Ooty", "Pollachi",
];

const About = () => (
  <>
    <SEO 
      title="About Us"
      description="About SASTHA Tank Cleaning - Your trusted partner for professional water tank cleaning across Tamil Nadu since day one. Learn about our values and service areas."
      keywords="about SASTHA, water tank cleaning company, professional tank cleaning, water hygiene experts, Tamil Nadu water services, tank cleaning team"
      pathname="/about"
    />
    <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">About SASTHA Tank Cleaning</h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Your trusted partner for professional water tank cleaning across Tamil Nadu since day one.
        </p>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-16">
          <p>
            SASTHA Tank Cleaning was founded with a simple mission: to ensure every family and business in Tamil Nadu has access to clean, safe water. We recognized that dirty water tanks are a hidden health hazard, and set out to provide reliable, affordable cleaning solutions.
          </p>
          <p>
            Based in Coimbatore with operations spanning all of Tamil Nadu, our team of trained professionals uses modern equipment and eco-friendly cleaning agents to remove sludge, bacteria, algae, and contaminants from all types of water tanks.
          </p>
          <p>
            Whether it's a small overhead tank at a residence or a large industrial water storage facility, we bring the same level of dedication, professionalism, and care to every job.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-4">
                <v.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="font-heading text-3xl font-bold text-foreground">Service Areas</h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We serve customers across all major cities and towns in Tamil Nadu</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {serviceAreas.map((area) => (
            <span key={area} className="border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-colors">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
