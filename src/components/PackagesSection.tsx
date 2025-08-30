import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Star, Plane, Hotel, Camera } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "European Adventure",
    description: "Explore 5 countries in 14 days with guided tours and luxury accommodations",
    price: "$2,999",
    duration: "14 Days",
    groupSize: "Max 12",
    rating: 4.9,
    includes: ["Flights", "Hotels", "Tours", "Meals"],
    highlights: [
      "Visit Paris, Rome, Barcelona, Amsterdam, and Prague",
      "Professional photography sessions",
      "Local cuisine experiences",
      "Expert tour guides"
    ]
  },
  {
    id: 2,
    title: "Tropical Paradise",
    description: "Island hopping in the Maldives with overwater villas and private beach access",
    price: "$3,599",
    duration: "10 Days",
    groupSize: "Max 8",
    rating: 4.8,
    includes: ["Flights", "Villas", "Activities", "Meals"],
    highlights: [
      "Overwater villa accommodation",
      "Snorkeling and diving experiences",
      "Sunset cruise with dolphins",
      "Spa treatments included"
    ]
  },
  {
    id: 3,
    title: "Safari & Adventure",
    description: "African safari with luxury lodges and wildlife photography opportunities",
    price: "$4,299",
    duration: "12 Days",
    groupSize: "Max 10",
    rating: 4.9,
    includes: ["Flights", "Lodges", "Safari", "Equipment"],
    highlights: [
      "Big Five wildlife encounters",
      "Professional photography guide",
      "Luxury tented camps",
      "Cultural village visits"
    ]
  }
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Holiday{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated travel experiences with everything included for the perfect getaway
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="overflow-hidden border-0 shadow-card hover:shadow-travel transition-all duration-500 transform hover:scale-105 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-secondary fill-current mr-2" />
                    <span className="font-semibold">{pkg.rating}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </div>

                <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {item === "Flights" && <Plane className="w-3 h-3 mr-1" />}
                        {(item === "Hotels" || item === "Villas" || item === "Lodges") && <Hotel className="w-3 h-3 mr-1" />}
                        {(item === "Tours" || item === "Activities" || item === "Safari") && <Camera className="w-3 h-3 mr-1" />}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button variant="hero" className="w-full">
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;