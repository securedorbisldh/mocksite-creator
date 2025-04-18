
import Navbar from "@/components/ui/navbar";

const Contact = () => {
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
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p>10 AM to 6 PM IST</p>
              <p>Mon - Sat</p>
            </div>
            
            <a href="mailto:laganvyas66@gmail.com" className="text-red-600 hover:underline">
              laganvyas66@gmail.com
            </a>
            <p className="mt-4 text-gray-600">Trusted by global creators.</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text"
                placeholder="Your Name*"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input 
                type="email"
                placeholder="Your Email*"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input 
                type="url"
                placeholder="Your Channel Link*"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Query*"
                rows={4}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-black text-white rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
