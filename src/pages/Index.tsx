
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CreatorsCarousel from "@/components/home/CreatorsCarousel";
import VideoShowcase from "@/components/home/VideoShowcase";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CreatorsCarousel />
      <VideoShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
