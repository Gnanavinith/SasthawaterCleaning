import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "why-clean-water-tank",
    title: "Why Regular Water Tank Cleaning is Essential",
    excerpt: "Dirty water tanks can harbor harmful bacteria and algae. Learn why regular cleaning is crucial for your family's health.",
    category: "Health",
    date: "2026-01-15",
  },
  {
    id: "signs-dirty-tank",
    title: "5 Signs Your Water Tank Needs Cleaning",
    excerpt: "Discolored water, bad smell, or floating particles? Here are the top signs it's time to clean your water tank.",
    category: "Tips",
    date: "2026-01-08",
  },
  {
    id: "overhead-vs-underground",
    title: "Overhead vs Underground Tank: Cleaning Differences",
    excerpt: "Each tank type requires a different cleaning approach. Understand the key differences and best practices.",
    category: "Maintenance",
    date: "2025-12-20",
  },
  {
    id: "monsoon-preparation",
    title: "Preparing Your Tank for Monsoon Season",
    excerpt: "Monsoon brings contamination risks. Learn how to prepare and protect your water storage during the rainy season.",
    category: "Tips",
    date: "2025-12-10",
  },
];

const Blog = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & Tips</h1>
        <p className="text-lg text-muted-foreground">Expert advice on water tank maintenance and hygiene</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow group">
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/30 rounded-t-lg flex items-center justify-center">
              <span className="font-heading font-bold text-primary/40 text-4xl">SASTHA</span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </div>
              <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline">
                Read More <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
