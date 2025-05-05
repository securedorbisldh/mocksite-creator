
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channelLink: "",
    query: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      channelLink: "",
      query: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Book a Free <span className="text-red-600">Consultation</span></h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <p className="text-gray-600 mb-8">
              We'd love to help you out with any queries or service-related information at the earliest. Please drop in a line.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-red-600">Working Hours</h3>
              <p>10 AM to 6 PM IST</p>
              <p>Mon - Sat</p>
            </div>
            
            <a href="mailto:laganvyas66@gmail.com" className="text-red-600 hover:underline block mb-4">
              laganvyas66@gmail.com
            </a>
            <p className="mt-4 text-gray-600 font-medium text-red-600">Trusted by global creators.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input 
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input 
                type="url"
                name="channelLink"
                placeholder="Your Channel Link*"
                value={formData.channelLink}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <textarea 
                name="query"
                placeholder="Your Query*"
                rows={4}
                value={formData.query}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
      
      <Footer showBanner={false} />
    </div>
  );
};

export default Contact;
