
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
  },
  {
    name: "Tech Burner",
    title: "Technology Reviews",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_mNH5O8-RHKegRGZhLO_5FXnZ8aL0LKGbHONP_C=s176-c-k-c0x00ffffff-no-rj",
    youtubeLink: "https://www.youtube.com/@TechBurner"
  },
  {
    name: "CarryMinati",
    title: "Gaming & Entertainment",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_kGRMaHlHrr7sP8q1y5M3TK7dFv7LR5tE6LKo_g=s176-c-k-c0x00ffffff-no-rj",
    youtubeLink: "https://www.youtube.com/@CarryMinati"
  },
  {
    name: "Ashish Chanchlani",
    title: "Comedy Content Creator",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_nbQ5t6tOx-sWl3D1sZz5GiBHQS8K7VtCWpD8GbUQ=s176-c-k-c0x00ffffff-no-rj",
    youtubeLink: "https://www.youtube.com/@AshishChanchlani"
  },
  {
    name: "Technical Guruji",
    title: "Tech Education",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_lFLOYCCFOk3EgKdOiIJNEYOq8vQbdGzr6BG8vv=s176-c-k-c0x00ffffff-no-rj",
    youtubeLink: "https://www.youtube.com/@TechnicalGuruji"
  },
  {
    name: "BeerBiceps",
    title: "Podcast & Lifestyle",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_l8S3YvbTLJ3RoYIf1LfF3XcQ-XbK5vOUC7YR0g=s176-c-k-c0x00ffffff-no-rj",
    youtubeLink: "https://www.youtube.com/@BeerBiceps"
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center">
                  <a href={creator.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-[200px]">
                    <div className="flex flex-col items-center p-3 md:p-4 hover:transform hover:scale-105 transition-all duration-300">
                      <img 
                        src={creator.image} 
                        alt={creator.name} 
                        className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mb-3 md:mb-4 border-4 border-white shadow-lg object-cover"
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
            
            <CarouselPrevious className="absolute -left-2 md:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-red-600 border-0 h-10 w-10 md:h-12 md:w-12 shadow-lg" />
            <CarouselNext className="absolute -right-2 md:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-red-600 border-0 h-10 w-10 md:h-12 md:w-12 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCarousel;
