
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
    <div className="py-20 px-6 bg-white" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6 h-48 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
