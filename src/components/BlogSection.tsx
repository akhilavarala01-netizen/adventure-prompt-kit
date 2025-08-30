import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt: "Discover breathtaking destinations off the beaten path that will leave you speechless and create memories for a lifetime.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    author: "Travel Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Destinations"
  },
  {
    id: 2,
    title: "Ultimate Packing Guide for Adventure Travel",
    excerpt: "Everything you need to know about packing smart for your next adventure, from essential gear to space-saving tips.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
    author: "Adventure Expert",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Tips & Guides"
  },
  {
    id: 3,
    title: "Best Photography Spots Around the World",
    excerpt: "Capture stunning moments at these incredible locations that offer the perfect backdrop for your travel photography.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=500&fit=crop",
    author: "Photo Pro",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Photography"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Travel{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired by travel stories, tips, and guides from our expert team and fellow adventurers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-travel transition-all duration-500 transform hover:scale-105 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/90 backdrop-blur-sm text-primary font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    By {post.author}
                  </span>
                  
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="travel" size="lg">
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;