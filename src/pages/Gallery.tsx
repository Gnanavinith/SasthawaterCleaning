import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const filters = ["All", "Overhead", "Underground", "Apartment", "Commercial", "Industrial"];

const galleryItems = [
  { id: 1, category: "Overhead", before: "Dirty overhead tank with algae buildup", after: "Sparkling clean overhead tank" },
  { id: 2, category: "Underground", before: "Sludge-filled underground sump", after: "Cleaned & sanitized sump" },
  { id: 3, category: "Apartment", before: "Apartment tank with sediment", after: "Fully cleaned apartment tank" },
  { id: 4, category: "Commercial", before: "Hotel tank before cleaning", after: "Hotel tank after cleaning" },
  { id: 5, category: "Overhead", before: "Residential tank with rust", after: "Rust-free clean tank" },
  { id: 6, category: "Industrial", before: "Factory tank with deposits", after: "Industrial tank fully cleaned" },
  { id: 7, category: "Underground", before: "Contaminated underground sump", after: "Fresh & clean sump" },
  { id: 8, category: "Commercial", before: "Restaurant water tank", after: "Sanitized restaurant tank" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work Gallery</h1>
            <p className="text-lg text-muted-foreground">See the before & after difference our cleaning makes</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <Button
                key={f}
                variant={active === f ? "default" : "outline"}
                size="sm"
                onClick={() => setActive(f)}
              >
                {f}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => setLightbox(item.id)}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-4 relative">
                  <div className="text-center">
                    <div className="text-xs font-medium text-primary mb-1 bg-primary/10 rounded-full px-2 py-0.5 inline-block">Before & After</div>
                    <p className="text-sm font-medium text-foreground mt-2">{item.category} Tank</p>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-muted-foreground">{item.before} → {item.after}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="bg-background rounded-xl max-w-2xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
              <X className="h-6 w-6" />
            </button>
            {(() => {
              const item = galleryItems.find((g) => g.id === lightbox);
              if (!item) return null;
              return (
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">{item.category} Tank Cleaning</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gradient-to-br from-red-100 to-red-50 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <span className="text-xs font-semibold text-red-600 bg-red-100 rounded-full px-2 py-1">BEFORE</span>
                        <p className="text-sm text-muted-foreground mt-3">{item.before}</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <span className="text-xs font-semibold text-green-600 bg-green-100 rounded-full px-2 py-1">AFTER</span>
                        <p className="text-sm text-muted-foreground mt-3">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
