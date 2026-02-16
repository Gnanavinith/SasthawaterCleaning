import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Mail, MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const serviceTypes = [
  "Overhead Tank Cleaning",
  "Underground Sump Cleaning",
  "Apartment Tank Cleaning",
  "Commercial Tank Cleaning",
  "Industrial Tank Cleaning",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    address: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Will integrate with Cloud later
    setSubmitted(true);
    toast.success("Booking request submitted! We'll contact you shortly.");
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Contact SASTHA Tank Cleaning for professional water tank cleaning services in Tamil Nadu. Book your tank cleaning appointment online."
        keywords="contact SASTHA, book tank cleaning, water tank cleaning contact, Tamil Nadu tank cleaning, tank cleaning appointment, overhead tank service, sump cleaning contact"
        pathname="/contact"
      />
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Book a Cleaning</h1>
            <p className="text-lg text-muted-foreground">Fill the form below and we'll get back to you within hours</p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <Card className="text-center py-16">
                <CardContent className="flex flex-col items-center">
                  <CheckCircle className="h-16 w-16 text-secondary mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">Your booking request has been received. Our team will contact you shortly.</p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", address: "", notes: "" }); }}>
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Booking Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email (optional)" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type *</Label>
                        <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your full address" rows={2} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea id="notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any special requirements..." rows={3} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">Submit Booking Request</Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+916374341251" className="text-primary hover:underline">63743 41251</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <span className="text-muted-foreground">info@sasthacleaning.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <span className="text-sm text-muted-foreground">Ponneri, Kottamangalam, Udumalaipettai, Tamil Nadu 642126</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg">
              <a href="https://wa.me/916374341251" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
              </a>
            </Button>

            {/* Google Maps Embed */}
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125392.02148123456!2d79.928805!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5e4e4e4e4e5%3A0x1234567890abcdef!2sTamil+Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SASTHA Water Tank Cleaning Service Areas"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
