
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";

const videos = [
  {
    id: "5H9JxvWPypw",
    title: "Video 1"
  },
  {
    id: "BIHib86Scc4",
    title: "Video 2"
  },
  {
    id: "uH6fBzy1kJg",
    title: "Video 3"
  },
  {
    id: "iLBFiL6xFuc",
    title: "Video 4"
  },
  {
    id: "w52jwVrG-3I",
    title: "Video 5"
  },
  {
    id: "B8IJo_2nBWU",
    title: "Video 6"
  },
  {
    id: "x0ljhgXl-58",
    title: "Video 7"
  },
  {
    id: "KAK9pmImZgs",
    title: "Video 8"
  }
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Check out our <span className="text-red-600 underline">work</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <p className="text-center text-2xl mt-12 font-bold">(slide from right to left)</p>
        
        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
            <div className="relative w-full max-w-4xl bg-black">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(null);
                }}
                className="absolute -top-10 right-0 text-white bg-red-600 rounded-full p-2"
              >
                <X size={24} />
              </button>
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${activeVideo}`} 
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
