
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const JoinUs = () => {
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
            <div className="p-6 bg-white rounded-full shadow-lg mb-4 inline-block">
              <div>
                <p className="font-semibold text-lg">Graphic Designer</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </div>
            </div>
            
            <div className="mt-20">
              <img 
                src="/lovable-uploads/f2eea550-e899-4f05-8796-3431c0cbe79f.png" 
                alt="Team illustration" 
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-6">Long Term Youtube Video</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-full shadow-lg">
                <p className="font-semibold text-lg">Youtube manager</p>
                <p className="text-sm text-gray-600">Mohali | 0 | Full time</p>
              </div>
              <div className="p-6 bg-white rounded-full shadow-lg">
                <p className="font-semibold text-lg">Video editor</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </div>
              <div className="p-6 bg-white rounded-full shadow-lg">
                <p className="font-semibold text-lg">Motion graphics artist</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </div>
            </div>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/6ca3d48f-1e50-4538-8be4-39b3686f050d.png" 
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
