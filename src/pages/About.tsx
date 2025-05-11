
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Instagram, Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Lagan Vyas",
      role: "Founder",
      bio: "The guiding force behind RightBox, Lagan is more mentor and friend than boss. A video editor who left his job to freelance, he built this agency from the ground up — all by 21.",
      image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Right%20Media%20Box%20Founder.jpeg",
      social: {
        instagram: "https://www.instagram.com/the_real_lagan/",
        linkedin: "https://www.linkedin.com/in/lagan-vyas-58500a254/"
      }
    }
  ];

  const stats = [
    { number: "2000+", label: "YouTube Videos Edited" },
    { number: "10000+", label: "Short Videos Edited" },
    { number: "18000+", label: "Hours of Content Edited" },
    { number: "800+", label: "Thumbnails Edited" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto text-center">
            The imaginative powerhouse behind every <span className="text-red-600">creator's vision</span>
          </h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center text-lg">
            Creating great content is hard — we handle the edits, design, and strategy so you can stay in your zone.
          </p>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 md:p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-red-600">{stat.number}</h3>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
            Meet the <span className="text-red-600">team</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-8 rounded-xl bg-white shadow-md mb-8"
              >
                <div className="w-full md:w-1/3">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-auto aspect-square object-cover rounded-xl"
                  />
                  <h3 className="text-2xl font-bold mt-4 text-center md:text-left">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4 text-center md:text-left">{member.role}</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="italic text-gray-700">
                      "Our mission is to empower creators by taking the technical burden off their shoulders, 
                      allowing them to focus on what they do best - creating amazing content."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Vision Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're building a creative ecosystem where creators can thrive without 
              worrying about the technical aspects of content production. Our goal is to be the 
              backbone that supports the next generation of digital storytellers.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="px-8 py-3 bg-red-600 text-white rounded-full font-medium text-lg hover:bg-red-700 transition-colors">
                Work with us
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
