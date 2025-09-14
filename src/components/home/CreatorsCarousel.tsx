
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
    name: "Creators Mela",
    title: "Creator Community",
    image: "/lovable-uploads/decb96d3-5f29-49bc-98f2-f2294442cb00.png",
    youtubeLink: "#"
  },
  {
    name: "Tech Reviewer",
    title: "Technology Reviews",
    image: "/lovable-uploads/2604d8b8-03f1-4fd2-bd4c-9000136888bb.png",
    youtubeLink: "#"
  },
  {
    name: "Arjit Singh",
    title: "Content Creator",
    image: "/lovable-uploads/5bca64f7-05e7-47c9-9682-2b00723a9f9e.png",
    youtubeLink: "#"
  },
  {
    name: "Twin Creators",
    title: "Entertainment Duo",
    image: "/lovable-uploads/b98da153-380a-4ab2-ad56-6246bef2c1d6.png",
    youtubeLink: "#"
  },
  {
    name: "Travel Creator",
    title: "Adventure & Travel",
    image: "/lovable-uploads/620638f4-f3f1-494a-9f8e-cc309a4a10b6.png",
    youtubeLink: "#"
  },
  {
    name: "Aditya Verma",
    title: "Tech Creator",
    image: "/lovable-uploads/7432b36d-37a1-4092-a0a8-2831eb78827d.png",
    youtubeLink: "#"
  },
  {
    name: "Baer",
    title: "Entertainment Creator",
    image: "/lovable-uploads/7780ccbb-2ecf-4ef4-8609-cbf5665f2b14.png",
    youtubeLink: "#"
  },
  {
    name: "Lifestyle Creator",
    title: "Fashion & Lifestyle",
    image: "/lovable-uploads/0d9f85b4-af66-474c-8759-c8cf117c30f2.png",
    youtubeLink: "#"
  },
  {
    name: "Tech Creator",
    title: "Technology & Reviews",
    image: "/lovable-uploads/2cb3f306-35d2-440b-9911-b7eb844c7e3b.png",
    youtubeLink: "#"
  },
  {
    name: "Rohan (Reconic)",
    title: "Gaming & Entertainment",
    image: "/lovable-uploads/230bc4b0-ca50-4844-a567-85c5bf3852b7.png",
    youtubeLink: "#"
  },
  {
    name: "Samrat Bhai",
    title: "Entertainment & Comedy",
    image: "/lovable-uploads/4b36451b-d3af-47fb-bc72-3ba08e0b7dd9.png",
    youtubeLink: "#"
  },
  {
    name: "7 Rang Entertainers",
    title: "Entertainment Group",
    image: "/lovable-uploads/f7a83f53-19e8-4121-8a90-beb8feba71c5.png",
    youtubeLink: "#"
  },
  {
    name: "Vishnu Saha (Wandering Maniac)",
    title: "Travel & Adventure",
    image: "/lovable-uploads/9c8532d2-8769-4e39-85a8-986e486c374c.png",
    youtubeLink: "#"
  }
];

const CreatorsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 7000);

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        clearInterval(autoplay);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(autoplay);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [api, isHovered]);

  return (
    <div className="py-8 md:py-12 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Our Creators</h2>
          <p className="text-red-100 text-sm md:text-base">Trusted by top content creators worldwide</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center justify-center -ml-2 md:-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3 flex justify-center">
                  <a href={creator.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-[280px]">
                    <div className="flex flex-col items-center p-4 md:p-6 hover:transform hover:scale-105 transition-all duration-300">
                      <div className="relative">
                        <img 
                          src={creator.image} 
                          alt={creator.name} 
                          className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full mb-4 md:mb-6 border-2 border-white/90 shadow-lg object-cover object-center"
                        />
                      </div>
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
