
const testimonials = [
  {
    name: "Atul Rawat",
    quote: "RightBox is blessing for me",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/All%20Rounder%20Boy%20ASR.png"
  },
  {
    name: "Amaan Nagani",
    quote: "You made my work so easier",
    image: "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/Amaan%20Nagani.png"
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
    <div className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">TESTIMONIALS</h2>
        <h3 className="text-6xl font-bold mb-8">From the <span className="bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">creators</span></h3>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Creators worldwide from all niches — including reaction, comedy, and gaming — trust us. Here's what they say!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <h4 className="font-semibold">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-5xl font-bold mb-2">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
