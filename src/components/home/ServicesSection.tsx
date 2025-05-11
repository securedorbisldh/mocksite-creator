
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Short Form Video Editing",
    description: "Perfect your Reels, TikToks, and YouTube Shorts to boost engagement and maximize shareability",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-04.png"
  },
  {
    title: "Long Form Video Editing",
    description: "YouTube videos made more entertaining than ever for longer watch-time and more subs.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-01.png"
  },
  {
    title: "Thumbnail Design",
    description: "Upto 68% higher click-through rates with inviting graphics that lead to more views.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-02.png"
  },
  {
    title: "YouTube Channel Management",
    description: "Complete growth support including SEO, channel upkeep, and performance analytics to scale your channel.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-03.png"
  }
];

const ServicesSection = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a complete suite of content creation services to help your channel grow and engage your audience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col items-center flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="bg-red-600 hover:bg-red-700">
              View All Services <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
