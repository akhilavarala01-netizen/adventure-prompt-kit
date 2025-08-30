import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a5e8e7?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Absolutely incredible experience! The European Adventure package exceeded all my expectations. Every detail was perfectly planned, and our guide was amazing.",
    trip: "European Adventure"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The Maldives trip was pure paradise! The overwater villa was stunning, and the snorkeling experiences were unforgettable. Worth every penny!",
    trip: "Tropical Paradise"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The African safari was a dream come true! Seeing the Big Five in their natural habitat was breathtaking. The accommodations were luxurious too.",
    trip: "Safari & Adventure"
  },
  {
    id: 4,
    name: "David Park",
    location: "Seoul, Korea",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "WanderLust made our honeymoon perfect! The attention to detail and personalized service made us feel so special. We'll definitely book again!",
    trip: "Romantic Getaway"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-sky bg-clip-text text-transparent">
              Travelers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the thousands of happy travelers who've experienced the magic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-6 border-0 shadow-card hover:shadow-travel transition-all duration-500 transform hover:scale-105 animate-fade-in bg-white relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">
                {testimonial.trip}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm">Happy Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;