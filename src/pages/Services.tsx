
import Navbar from "@/components/ui/navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Short Form Video Editing</h2>
            <p className="text-gray-600 mb-6">
              Perfect your Reels, TikToks, and YouTube Shorts to boost engagement and maximize shareability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Long Form Video Editing</h2>
            <p className="text-gray-600 mb-6">
              YouTube videos made more entertaining than ever for longer watch-time and more subs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Thumbnail Design</h2>
            <p className="text-gray-600 mb-6">
              Upto 68% higher click-through rates with inviting graphics that lead to more views.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">YouTube Channel Management</h2>
            <p className="text-gray-600 mb-6">
              Complete growth support including SEO, channel upkeep, and performance analytics to scale your channel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
