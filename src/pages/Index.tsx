import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <TestimonialsSection />
      <BlogSection />
      <SpecialOffersSection />
      <Footer />
    </div>
  );
};

export default Index;
