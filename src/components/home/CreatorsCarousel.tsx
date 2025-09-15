import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// NOTE: Rebuilt from scratch using Embla directly to fix glitches.
// - Big images, no outer strokes/borders
// - No autoplay, movement only via navigation buttons (drag disabled)
// - Simple, robust layout

const creators = [
  {
    name: "Kunaal Naik",
    title: "Data Science Masterminds",
    image:
      "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Kunaal%20Niak.png",
    youtubeLink: "https://www.youtube.com/@KunaalNaik",
  },
  {
    name: "All Rounder Boy ASR",
    title: "Tech & Lifestyle Creator",
    image:
      "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/All%20Rounder%20Boy%20ASR.png",
    youtubeLink: "https://www.youtube.com/@allrounderboyasr",
  },
  {
    name: "C4OUR",
    title: "Finance & Investment",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/C4OUR.png",
    youtubeLink: "https://www.youtube.com/@c4ourfin",
  },
  {
    name: "Creators Mela",
    title: "Creator Community",
    image: "/lovable-uploads/decb96d3-5f29-49bc-98f2-f2294442cb00.png",
    youtubeLink: "#",
  },
  {
    name: "Tech Reviewer",
    title: "Technology Reviews",
    image: "/lovable-uploads/2604d8b8-03f1-4fd2-bd4c-9000136888bb.png",
    youtubeLink: "#",
  },
  {
    name: "Arjit Singh",
    title: "Content Creator",
    image: "/lovable-uploads/5bca64f7-05e7-47c9-9682-2b00723a9f9e.png",
    youtubeLink: "#",
  },
  {
    name: "Twin Creators",
    title: "Entertainment Duo",
    image: "/lovable-uploads/b98da153-380a-4ab2-ad56-6246bef2c1d6.png",
    youtubeLink: "#",
  },
  {
    name: "Travel Creator",
    title: "Adventure & Travel",
    image: "/lovable-uploads/620638f4-f3f1-494a-9f8e-cc309a4a10b6.png",
    youtubeLink: "#",
  },
  {
    name: "Aditya Verma",
    title: "Tech Creator",
    image: "/lovable-uploads/7432b36d-37a1-4092-a0a8-2831eb78827d.png",
    youtubeLink: "#",
  },
  {
    name: "Baer",
    title: "Entertainment Creator",
    image: "/lovable-uploads/7780ccbb-2ecf-4ef4-8609-cbf5665f2b14.png",
    youtubeLink: "#",
  },
  {
    name: "Lifestyle Creator",
    title: "Fashion & Lifestyle",
    image: "/lovable-uploads/0d9f85b4-af66-474c-8759-c8cf117c30f2.png",
    youtubeLink: "#",
  },
  {
    name: "Tech Creator",
    title: "Technology & Reviews",
    image: "/lovable-uploads/2cb3f306-35d2-440b-9911-b7eb844c7e3b.png",
    youtubeLink: "#",
  },
  {
    name: "Rohan (Reconic)",
    title: "Gaming & Entertainment",
    image: "/lovable-uploads/230bc4b0-ca50-4844-a567-85c5bf3852b7.png",
    youtubeLink: "#",
  },
  {
    name: "Samrat Bhai",
    title: "Entertainment & Comedy",
    image: "/lovable-uploads/4b36451b-d3af-47fb-bc72-3ba08e0b7dd9.png",
    youtubeLink: "#",
  },
  {
    name: "7 Rang Entertainers",
    title: "Entertainment Group",
    image: "/lovable-uploads/f7a83f53-19e8-4121-8a90-beb8feba71c5.png",
    youtubeLink: "#",
  },
  {
    name: "Vishnu Saha (Wandering Maniac)",
    title: "Travel & Adventure",
    image: "/lovable-uploads/9c8532d2-8769-4e39-85a8-986e486c374c.png",
    youtubeLink: "#",
  },
];

const CreatorsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    watchDrag: false, // disable drag — buttons only
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section aria-labelledby="our-creators-heading" className="py-8 md:py-12 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-6 md:mb-8">
          <h2 id="our-creators-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Our Creators
          </h2>
          <p className="text-red-100 text-sm md:text-base">Trusted by top content creators worldwide</p>
        </header>

        <div className="relative max-w-6xl mx-auto">
          {/* Viewport */}
          <div ref={emblaRef} className="overflow-hidden" aria-roledescription="carousel">
            {/* Container */}
            <div className="flex -ml-4 md:-ml-6">
              {creators.map((creator, idx) => (
                <div
                  key={idx}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 shrink-0"
                  role="group"
                  aria-label={`${creator.name} – ${creator.title}`}
                >
                  <a href={creator.youtubeLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                    {/* Image wrapper: big, borderless, no ring */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={creator.image}
                        alt={`${creator.name} - ${creator.title}`}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="font-semibold text-lg md:text-xl leading-tight">{creator.name}</h3>
                      {creator.title && (
                        <p className="text-sm md:text-base opacity-90 leading-tight">{creator.title}</p>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous creators"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/90 text-red-600 shadow-lg grid place-items-center backdrop-blur-sm"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next creators"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/90 text-red-600 shadow-lg grid place-items-center backdrop-blur-sm"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorsCarousel;
