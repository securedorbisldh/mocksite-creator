
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Navbar from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      
      <div className="bg-red-700 text-white p-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6">
            Connect with our experts to accelerate your content growth like never before
          </h2>
          <button className="px-8 py-3 bg-white text-red-700 rounded-full text-lg hover:bg-gray-100 transition-colors">
            Get free consultation →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
