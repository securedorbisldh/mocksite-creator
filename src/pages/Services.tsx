
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Short Form Video Editing",
    description: "Perfect your Reels, TikToks, and YouTube Shorts to boost engagement and maximize shareability.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-04.png",
    benefits: ["Higher engagement rates", "Optimized for algorithm", "Quick turnaround"]
  },
  {
    title: "Long Form Video Editing",
    description: "YouTube videos made more entertaining than ever for longer watch-time and more subs.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-01.png",
    benefits: ["Professional storytelling", "Creative transitions", "Audience retention focus"]
  },
  {
    title: "Thumbnail Design",
    description: "Upto 68% higher click-through rates with inviting graphics that lead to more views.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-02.png",
    benefits: ["Eye-catching visuals", "Brand consistent", "A/B tested concepts"]
  },
  {
    title: "YouTube Channel Management",
    description: "Complete growth support including SEO, channel upkeep, and performance analytics to scale your channel.",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/our%20services-03.png",
    benefits: ["Analytics-driven strategy", "Community engagement", "Content calendar planning"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              We transform your content into engaging experiences that captivate audiences and drive growth.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>
      
      {/* Services Cards */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-xl">
              <div className="aspect-video bg-gray-100 flex items-center justify-center p-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-h-52 object-contain" 
                />
              </div>
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 pb-2">
                <CardTitle className="text-2xl font-bold text-gray-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-red-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Benefits Section */}
        <div className="mt-24 mb-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Our Services?</h2>
              <p className="text-gray-600 mb-8">
                At RightBox Media, we combine creativity with strategic insight to deliver content that stands out and performs. Our team of experts understands what works across different platforms and how to optimize your content for maximum impact.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800">Professional editors with a creative eye</strong>
                    <p className="text-gray-600">Our editors bring fresh perspectives to every project</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800">Quick turnaround times</strong>
                    <p className="text-gray-600">We understand the importance of timely delivery</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800">Platform-specific expertise</strong>
                    <p className="text-gray-600">Content optimized for each platform's unique requirements</p>
                  </div>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-red-600 hover:bg-red-700">
                  Get Started Today
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/footer%20banner%20image-01.png"
                alt="Our Services" 
                className="rounded-xl shadow-lg max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to elevate your content?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Let our team help you create content that resonates with your audience and drives real results.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
