
const testimonials = [
  {
    name: "Creators Mela",
    quote: "At Creators Mela, we work with some of the top creators in India, and quality content is non-negotiable for us. RightBox Media has been an incredible post-production partner, consistently delivering edits that match our creators' brand, style, and audience expectations.",
    image: "/src/assets/creators-mela.jpg"
  },
  {
    name: "Samrat Bhai",
    quote: "For my videos, every frame and every detail matters — and RightBox Media gets that perfectly. Their post-production work adds sharpness, clarity, and the right pacing to keep my audience hooked.",
    image: "/lovable-uploads/0f36f000-aead-455b-8c66-68a83e27b44d.png"
  },
  {
    name: "Vishnu Saha (Wandering Maniac)",
    quote: "As someone who has travelled to over 65 countries, I need my travel vlogs to capture the beauty, culture, and emotions of every place I visit. RightBox Media brings my journeys to life with stunning edits.",
    image: "/lovable-uploads/105af010-2909-4f32-8d52-41a62cb8c356.png"
  },
  {
    name: "Rohan (Reconic)",
    quote: "I really enjoyed working with you For my short form content I didn't even have to think twice about improvements everything was fine It also reduced my workload to a great extent which made the whole experience even better.",
    image: "/lovable-uploads/5bf5a0ed-0c8b-4713-8bb2-1847ce0a55eb.png"
  },
  {
    name: "Badal Thakur",
    quote: "I've been really impressed with your editing skills! The way you bring life to the footage with smooth transitions, perfect timing, and attention to detail shows how dedicated and talented you are.",
    image: "/src/assets/badal-thakur.jpg"
  },
  {
    name: "Veer Chaudhary",
    quote: "Working with RightBox Media has been an absolute game-changer for my informative videos. Their post-production work is top-notch — from precise edits to clean sound design and smooth transitions.",
    image: "/src/assets/veer-chaudhary.jpg"
  },
  {
    name: "Baer",
    quote: "The creative editing style perfectly matches my content vibe. RightBox Media understands exactly what my audience wants and delivers consistently amazing results.",
    image: "/lovable-uploads/b5613644-fe35-4cdb-a4f0-3c04b89cdd53.png"
  },
  {
    name: "7 Rang Entertainers",
    quote: "As an entertainment channel, we need editors who understand timing, comedy, and audience engagement. RightBox Media delivers exactly that with every project.",
    image: "/lovable-uploads/da7cf541-b92c-4aae-a2d1-df209cc8682b.png"
  },
  {
    name: "Tech Creator",
    quote: "Professional editing that elevates my tech content. The team at RightBox Media knows how to make complex topics engaging through smart visual storytelling.",
    image: "/lovable-uploads/910d098b-f76e-408f-84d0-cbbf9092e8ad.png"
  }
];

const stats = [
  { value: "50+", label: "creators" },
  { value: "5M+", label: "Subs gained" },
  { value: "100M+", label: "Views received" }
];

const TestimonialsSection = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">TESTIMONIALS</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">From the <span className="bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">creators</span></h3>
        <p className="text-gray-600 mb-8 md:mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
          Creators worldwide from all niches — including reaction, comedy, and gaming — trust us. Here's what they say!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-red-100" />
                <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-base italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-red-600">{stat.value}</h4>
              <p className="text-gray-600 text-sm md:text-base uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
