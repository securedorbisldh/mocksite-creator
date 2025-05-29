
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";

const videos = [
  {
    id: "hajb3zCMJm4",
    title: "Video 1"
  },
  {
    id: "dj1TUxhoW1U",
    title: "Video 2"
  },
  {
    id: "Ct76q0Jcte8",
    title: "Video 3"
  },
  {
    id: "zeUrgaZMoS0",
    title: "Video 4"
  },
  {
    id: "Udsd_8urN4I",
    title: "Video 5"
  },
  {
    id: "wDgyDvOKnqM",
    title: "Video 6"
  },
  {
    id: "kIoya_764fk",
    title: "Video 7"
  },
  {
    id: "mA2yoUKqrqY",
    title: "Video 8"
  }
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
          Check out our <span className="text-red-600 underline">work</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative cursor-pointer hover:opacity-90 transition-opacity group"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <div className="relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
        </Carousel>
        
        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
            <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-4xl bg-black rounded-lg overflow-hidden">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(null);
                }}
                className="absolute -top-12 right-0 md:-top-14 md:-right-4 text-white bg-red-600 rounded-full p-2 md:p-3 hover:bg-red-700 transition-colors z-10"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>
              <div className="aspect-[9/16] md:aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoShowcase;
