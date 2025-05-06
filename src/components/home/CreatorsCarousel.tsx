
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
    name: "Amaan Parkar",
    title: "",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Amaan%20Parkar.png",
    youtubeLink: "https://www.youtube.com/@amaaanparkar"
  },
  {
    name: "Amaan Nagani",
    title: "",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Amaan%20Nagani.png",
    youtubeLink: "https://www.youtube.com/@AmaanNagani"
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
    <div className="py-12 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-6">
        <div className="relative">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5">
                  <a href={creator.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col items-center p-4">
                      <img 
                        src={creator.image} 
                        alt={creator.name} 
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 border-2 border-white"
                      />
                      <h3 className="font-medium text-center">{creator.name}</h3>
                      {creator.title && (
                        <p className="text-sm text-center opacity-80">{creator.title}</p>
                      )}
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
            <CarouselNext className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCarousel;
