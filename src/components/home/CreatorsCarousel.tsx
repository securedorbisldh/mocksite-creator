
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const creators = [
  {
    name: "Kunaal Naik",
    title: "Data Science Masterminds",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Kunaal%20Niak.png",
    youtubeLink: "https://www.youtube.com/@KunaalNaik"
  },
  {
    name: "All Rounder Boy ASR",
    title: "",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/All%20Rounder%20Boy%20ASR.png",
    youtubeLink: "https://www.youtube.com/@allrounderboyasr"
  },
  {
    name: "C4OUR",
    title: "",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/C4OUR.png",
    youtubeLink: "https://www.youtube.com/@c4ourfin"
  }
];

const CreatorsCarousel = () => {
  return (
    <div className="py-8 md:py-12 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Our Creators</h2>
          <p className="text-red-100 text-sm md:text-base">Trusted by top content creators worldwide</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center justify-center -ml-2 md:-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center">
                  <a href={creator.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-[200px]">
                    <div className="flex flex-col items-center p-3 md:p-4 hover:transform hover:scale-105 transition-all duration-300">
                      <img 
                        src={creator.image} 
                        alt={creator.name} 
                        className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mb-3 md:mb-4 border-2 border-white shadow-lg object-cover"
                      />
                      <h3 className="font-medium text-center text-sm md:text-base leading-tight">{creator.name}</h3>
                      {creator.title && (
                        <p className="text-xs md:text-sm text-center opacity-80 mt-1 leading-tight">{creator.title}</p>
                      )}
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-2 md:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 border-0 h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="absolute -right-2 md:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 border-0 h-8 w-8 md:h-10 md:w-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCarousel;
