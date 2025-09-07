
const HeroSection = () => {
  return (
    <div className="min-h-[70vh] md:min-h-[80vh] flex items-center py-8 md:py-12 bg-gradient-to-br from-white to-red-50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Secret weapon for <span className="text-red-600">greatest creators</span> in the world
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
            We edit videos that go viral — plus smart growth strategies for YouTube success.
            — we make sure your videos not only look great, but perform great too.
          </p>
          <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-red-700 text-white rounded-full text-base md:text-lg hover:bg-red-800 transition-colors font-medium">
            Enquire now!
          </button>
        </div>
        <div className="relative order-1 md:order-2">
          <img 
            src="/lovable-uploads/ae5eff90-0eef-4ed5-9a7c-5fbc08ba64d4.png" 
            alt="RightMediaBox Creative Team" 
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
