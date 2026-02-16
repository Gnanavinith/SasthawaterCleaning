import { ShieldCheck, Users, Award, Target, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "We use eco-friendly, WHO-recommended cleaning agents that are safe for your family." },
  { icon: Users, title: "Expert Team", desc: "Our trained professionals bring years of experience in water tank hygiene." },
  { icon: Award, title: "Quality Assured", desc: "Every cleaning follows strict quality protocols for maximum hygiene." },
  { icon: Target, title: "Customer Focused", desc: "We work around your schedule with transparent pricing and reliable service." },
];

const serviceAreas = [
  "Coimbatore","Ponneri","Kottamangalam","Udumalaipettai",
  "Chennai","Madurai","Salem","Trichy","Erode",
  "Tiruppur","Karur","Dindigul","Ooty","Pollachi",
];

const About = () => (
  <>
    <SEO
      title="About Us"
      description="About SASTHA Tank Cleaning - Your trusted partner for professional water tank cleaning across Tamil Nadu."
      pathname="/about"
    />

    {/* HERO */}
    <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">

        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
          className="rounded-xl shadow-lg mb-8 w-full max-h-[320px] object-cover transition-transform duration-300 hover:scale-[1.02]"
          alt="Professional water tank cleaning services"
        />

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
          About SASTHA Tank Cleaning
        </h1>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your trusted partner for professional water tank cleaning across Tamil Nadu since day one.
        </p>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            SASTHA Tank Cleaning was founded with a simple mission: to ensure every family and business in Tamil Nadu has access to clean, safe water.
          </p>
          <p>
            Based in Coimbatore with operations spanning all of Tamil Nadu, our team uses modern equipment and eco-friendly cleaning agents.
          </p>
          <p>
            From residential tanks to industrial facilities, we bring professionalism and care to every job.
          </p>
        </div>

        {/* Before After */}
        <img
          src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&q=80"
          className="rounded-xl shadow-md mt-12 transition-transform duration-300 hover:scale-[1.02]"
          alt="Before and after water tank cleaning"
        />

      </div>
    </section>

    {/* VALUES */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">

        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Our Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((v) => (
            <div
              key={v.title}
              className="text-center bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mx-auto w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-4">
                <v.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Images */}
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mt-12">
          <img
            src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&q=80"
            className="rounded-xl shadow transition-transform duration-300 hover:scale-[1.03]"
            alt="Professional cleaning team"
          />
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
            className="rounded-xl shadow transition-transform duration-300 hover:scale-[1.03]"
            alt="Professional cleaning equipment"
          />
        </div>

      </div>
    </section>

    {/* SERVICE AREAS */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">

        <div className="flex justify-center gap-2 mb-6">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="font-heading text-3xl font-bold">Service Areas</h2>
        </div>

        <p className="text-muted-foreground mb-8">
          We serve customers across all major cities and towns in Tamil Nadu
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="border rounded-full px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:scale-105 transition-all"
            >
              {area}
            </span>
          ))}
        </div>

      </div>
    </section>
  </>
);

export default About;
