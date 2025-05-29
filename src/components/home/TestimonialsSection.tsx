
const testimonials = [
  {
    name: "Atul Rawat",
    quote: "RightBox is blessing for me",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/All%20Rounder%20Boy%20ASR.png"
  },
  {
    name: "Kunaal Naik",
    quote: "Fantastic work with my data science videos",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Kunaal%20Niak.png"
  },
  {
    name: "All Rounder Boy ASR",
    quote: "The quality of editing is just amazing!",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/All%20Rounder%20Boy%20ASR.png"
  }
];

const stats = [
  { value: "20+", label: "creators" },
  { value: "1M+", label: "Subs gained" },
  { value: "20M+", label: "Views received" }
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
