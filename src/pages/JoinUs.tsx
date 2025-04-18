
import Navbar from "@/components/ui/navbar";

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Join our coolest <span className="text-yellow-500">team!!!</span></h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-6">Graphics Team</h2>
            <div className="p-4 bg-white rounded-full shadow-lg mb-4 inline-block">
              <p className="font-semibold">Graphic Designer</p>
              <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-6">Long Term Youtube Video</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <p className="font-semibold">Youtube manager</p>
                <p className="text-sm text-gray-600">Mohali | 0 | Full time</p>
              </div>
              <div className="p-4 bg-white rounded-full shadow-lg">
                <p className="font-semibold">Video editor</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </div>
              <div className="p-4 bg-white rounded-full shadow-lg">
                <p className="font-semibold">Motion graphics artist</p>
                <p className="text-sm text-gray-600">Mohali | Minimum 1 year | Full time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
