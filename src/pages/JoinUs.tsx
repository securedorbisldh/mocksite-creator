
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const JoinUs = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfq8kc6YZbMB329jwU5bpF5s6O25N-FQFUu791AmjBi9mk1cA/viewform?usp=header";
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Join our coolest <span className="text-yellow-500">team!!!</span></h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-6">Graphics Team</h2>
            <a 
              href={googleFormUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-full shadow-lg mb-4 inline-block hover:shadow-xl transition-shadow"
            >
              <div>
                <p className="font-semibold text-lg">Graphic Designer</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </div>
            </a>
            
            <div className="mt-20">
              <img 
                src="/lovable-uploads/c8e4af8c-78f5-4fac-b445-da7e1ca47762.png" 
                alt="Team illustration" 
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-6">Long Term Youtube Video</h2>
            <div className="space-y-4">
              <a 
                href={googleFormUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold text-lg">Youtube manager</p>
                <p className="text-sm text-gray-600">Mohali | 0 | Full time</p>
              </a>
              <a 
                href={googleFormUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold text-lg">Video editor</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </a>
              <a 
                href={googleFormUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold text-lg">Motion graphics artist</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </a>
            </div>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/5f59a522-25bd-4811-b934-0a8c93db728a.png" 
                alt="Team collaboration" 
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default JoinUs;
