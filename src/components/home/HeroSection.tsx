
const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex items-center py-12 bg-gradient-to-br from-white to-red-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Secret weapon for <span className="text-red-600">greatest creators</span> in the world
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            We edit videos that go viral — plus smart growth strategies for YouTube success.
            — we make sure your videos not only look great, but perform great too.
          </p>
          <button className="px-8 py-3 bg-red-700 text-white rounded-full text-lg hover:bg-red-800 transition-colors">
            Enquire now!
          </button>
        </div>
        <div className="relative">
          <img 
            src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/creators.png" 
            alt="Team" 
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
