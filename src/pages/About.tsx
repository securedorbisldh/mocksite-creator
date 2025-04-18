
import Navbar from "@/components/ui/navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">The imaginative powerhouse behind every <span className="text-red-600">creator's vision</span></h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Creating great content is hard — we handle the edits, design, and strategy so you can stay in your zone.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-xl bg-white shadow-lg">
            <h3 className="text-3xl font-bold mb-2">2000+</h3>
            <p className="text-gray-600">YouTube Videos Edited</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg">
            <h3 className="text-3xl font-bold mb-2">10000+</h3>
            <p className="text-gray-600">Short Videos Edited</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg">
            <h3 className="text-3xl font-bold mb-2">18000+</h3>
            <p className="text-gray-600">Hours of Content Edited</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg">
            <h3 className="text-3xl font-bold mb-2">800+</h3>
            <p className="text-gray-600">Thumbnails Edited</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-12">Meet the <span className="text-red-600">boss</span></h2>
        <div className="flex items-start gap-8 max-w-3xl">
          <img src="/lovable-uploads/ecc0cb35-0f39-4328-8066-bffbcb2d394b.png" alt="Lagan Vyas" className="w-64 rounded-xl" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Lagan Vyas</h3>
            <p className="text-gray-600 mb-6">
              The guiding force behind RightBox, Lagan is more mentor and friend than boss. A video editor who left his job to freelance, he built this agency from the ground up — all by 21
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
