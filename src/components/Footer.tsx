import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Apple,
  Smartphone
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-sky rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">WanderLust</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel companion for unforgettable adventures around the world. We create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Destinations", "Holiday Packages", "Special Offers", "Travel Insurance", "Customer Reviews"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Support</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">hello@wanderlust.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Adventure Street<br />
                  Travel City, TC 12345
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-3">24/7 Emergency Support</h4>
              <p className="text-sm text-gray-400">We're here to help you anywhere, anytime during your travels.</p>
            </div>
          </div>

          {/* Newsletter & Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Get the latest travel deals and inspiration delivered to your inbox.
            </p>
            <div className="space-y-3 mb-6">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <h4 className="font-medium mb-4">Download Our App</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-gray-300 border-gray-600 hover:bg-white/10">
                <Apple className="w-5 h-5 mr-3" />
                Download for iOS
              </Button>
              <Button variant="outline" className="w-full justify-start text-gray-300 border-gray-600 hover:bg-white/10">
                <Smartphone className="w-5 h-5 mr-3" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WanderLust. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ATOL Protected</span>
              <span>IATA Member</span>
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;