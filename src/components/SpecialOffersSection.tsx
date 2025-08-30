import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Clock, Gift } from "lucide-react";

const SpecialOffersSection = () => {
  return (
    <section className="py-20 bg-gradient-sky relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Gift className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Special Offers
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
            Don't miss out on these incredible deals! Limited time offers for the wandering souls
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Summer Sale */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-secondary text-white px-4 py-2 text-lg font-bold">
                  <Percent className="w-4 h-4 mr-2" />
                  30% OFF
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Summer Escape</h3>
              <p className="opacity-90 mb-6">
                Book any tropical destination and save big on your summer getaway. Valid for bookings until June 30th.
              </p>
              <div className="flex items-center justify-center text-sm opacity-80 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span>Offer ends in 15 days</span>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Claim Offer
              </Button>
            </div>

            {/* Early Bird */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform scale-105 md:scale-110">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-secondary text-white px-4 py-2 text-lg font-bold">
                  <Percent className="w-4 h-4 mr-2" />
                  50% OFF
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Early Bird Special</h3>
              <p className="opacity-90 mb-6">
                Book 6 months in advance and get massive savings on all premium packages. Planning pays off!
              </p>
              <div className="flex items-center justify-center text-sm opacity-80 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span>Limited time only</span>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Book Early
              </Button>
            </div>

            {/* Group Discount */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-secondary text-white px-4 py-2 text-lg font-bold">
                  <Percent className="w-4 h-4 mr-2" />
                  20% OFF
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Group Adventure</h3>
              <p className="opacity-90 mb-6">
                Traveling with friends or family? Get exclusive group discounts for 4 or more travelers.
              </p>
              <div className="flex items-center justify-center text-sm opacity-80 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span>Year-round offer</span>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Group Booking
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Never Miss a Deal!</h3>
            <p className="opacity-90 mb-6">
              Subscribe to our newsletter and be the first to know about exclusive offers and travel deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;