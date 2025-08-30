import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful tropical destination with crystal clear water and white sand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Your Next
          <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
            Adventure
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 animate-slide-up">
          Explore breathtaking destinations and create memories that last a lifetime
        </p>

        {/* Search Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Where to?"
                className="pl-10 bg-white/90 border-0 h-12"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Check-in"
                type="date"
                className="pl-10 bg-white/90 border-0 h-12"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Check-out"
                type="date"
                className="pl-10 bg-white/90 border-0 h-12"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Guests"
                className="pl-10 bg-white/90 border-0 h-12"
              />
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="w-full md:w-auto mt-6">
            <Search className="w-5 h-5 mr-2" />
            Search Destinations
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold">500+</div>
            <div className="text-sm md:text-base opacity-80">Destinations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">50K+</div>
            <div className="text-sm md:text-base opacity-80">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">4.9</div>
            <div className="text-sm md:text-base opacity-80">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;