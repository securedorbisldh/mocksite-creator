
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CreatorsCarousel from "@/components/home/CreatorsCarousel";
import VideoShowcase from "@/components/home/VideoShowcase";
import CreatorEquitySection from "@/components/home/CreatorEquitySection";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6">
        <HeroSection />
        <ServicesSection />
      </div>
      <CreatorsCarousel />
      <div className="container mx-auto px-6">
        <VideoShowcase />
        <TestimonialsSection />
      </div>
      <CreatorEquitySection />
      <Footer />
    </div>
  );
};

export default Index;
