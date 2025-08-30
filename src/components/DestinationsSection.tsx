import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import santoriniImage from "@/assets/destination-santorini.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import icelandImage from "@/assets/destination-iceland.jpg";
import peruImage from "@/assets/destination-peru.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: santoriniImage,
    price: "$299",
    rating: 4.9,
    reviews: 245,
    description: "Stunning sunsets and iconic blue domes",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: tokyoImage,
    price: "$599",
    rating: 4.8,
    reviews: 189,
    description: "Cherry blossoms and modern culture",
  },
  {
    id: 3,
    name: "Iceland",
    image: icelandImage,
    price: "$799",
    rating: 4.9,
    reviews: 156,
    description: "Northern lights and natural wonders",
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: peruImage,
    price: "$449",
    rating: 4.7,
    reviews: 203,
    description: "Ancient ruins and mystical mountains",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Top{" "}
            <span className="bg-gradient-sky bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most breathtaking places, handpicked for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-travel transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
                  {destination.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-primary mr-1" />
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-secondary fill-current mr-1" />
                    <span className="font-medium">{destination.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">
                      ({destination.reviews})
                    </span>
                  </div>
                </div>
                
                <Button variant="travel" className="w-full">
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;