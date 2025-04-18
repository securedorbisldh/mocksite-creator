
const services = [
  {
    title: "Short Form Video Editing",
    description: "Perfect your Reels, TikToks, and YouTube Shorts to boost engagement and maximize shareability",
    icon: "📱"
  },
  {
    title: "Long Form Video Editing",
    description: "YouTube videos made more entertaining than ever for longer watch-time and more subs.",
    icon: "🎥"
  },
  {
    title: "Thumbnail Design",
    description: "Upto 68% higher click-through rates with inviting graphics that lead to more views.",
    icon: "🎨"
  },
  {
    title: "YouTube Channel Management",
    description: "Complete growth support including SEO, channel upkeep, and performance analytics to scale your channel.",
    icon: "📈"
  }
];

const ServicesSection = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
