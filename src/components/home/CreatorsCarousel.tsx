
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const creators = [
  {
    name: "Kunaal Naik",
    title: "Data Science Masterminds",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Kunaal%20Niak.png",
    youtubeLink: "https://www.youtube.com/@KunaalNaik"
  },
  {
    name: "All Rounder Boy ASR",
    title: "Tech & Lifestyle Creator",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/All%20Rounder%20Boy%20ASR.png",
    youtubeLink: "https://www.youtube.com/@allrounderboyasr"
  },
  {
    name: "C4OUR",
    title: "Finance & Investment",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/C4OUR.png",
    youtubeLink: "https://www.youtube.com/@c4ourfin"
  }
];

const CreatorsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-play functionality
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <div className="py-8 md:py-12 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Our Creators</h2>
          <p className="text-red-100 text-sm md:text-base">Trusted by top content creators worldwide</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center justify-center -ml-2 md:-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3 flex justify-center">
                  <a href={creator.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-[280px]">
                    <div className="flex flex-col items-center p-4 md:p-6 hover:transform hover:scale-105 transition-all duration-300">
                      <img 
                        src={creator.image} 
                        alt={creator.name} 
                        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4 md:mb-6 border-4 border-white shadow-lg object-cover"
                      />
                      <h3 className="font-medium text-center text-lg md:text-xl leading-tight">{creator.name}</h3>
                      {creator.title && (
                        <p className="text-sm md:text-base text-center opacity-80 mt-2 leading-tight">{creator.title}</p>
                      )}
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-4 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-red-600 border-0 h-12 w-12 md:h-14 md:w-14 shadow-lg" />
            <CarouselNext className="absolute -right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-red-600 border-0 h-12 w-12 md:h-14 md:w-14 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCarousel;
