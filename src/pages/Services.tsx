
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const services = [
  {
    title: "Short Form Video Editing",
    description: "Perfect your Reels, TikToks, and YouTube Shorts to boost engagement and maximize shareability.",
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

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6 h-48 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">{service.title}</h2>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Services?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Professional editors with a creative eye</li>
            <li>Quick turnaround times</li>
            <li>Understanding of platform-specific requirements</li>
            <li>Attention to detail and quality</li>
            <li>Strategic approach to maximize engagement</li>
            <li>Consistent communication and revisions</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
