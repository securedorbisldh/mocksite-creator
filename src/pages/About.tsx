
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Instagram, Linkedin } from "lucide-react";

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
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-3xl mb-8">
          <img 
            src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Right%20Media%20Box%20Founder.jpeg" 
            alt="Lagan Vyas" 
            className="w-full md:w-64 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">Lagan Vyas</h3>
            <p className="text-gray-600 mb-6">
              The guiding force behind RightBox, Lagan is more mentor and friend than boss. A video editor who left his job to freelance, he built this agency from the ground up — all by 21
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/the_real_lagan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lagan-vyas-58500a254/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
