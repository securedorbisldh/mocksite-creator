
const testimonials = [
  {
    name: "Amaan Parkar",
    quote: "It was my best decision to take your service",
    image: "/lovable-uploads/e98c38f5-6ff0-4f6f-ad79-efe8e68cc919.png"
  },
  {
    name: "Atul Rawat",
    quote: "RightBox is blessing for me",
    image: "/lovable-uploads/774babe5-5cc3-4fe4-9611-f33eb1eee0b5.png"
  },
  {
    name: "Amaan Nagani",
    quote: "You made my work so easier",
    image: "/lovable-uploads/48198573-a31c-401f-8be5-695e85c44c0d.png"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">TESTIMONIALS</h2>
        <h3 className="text-6xl font-bold mb-8">From the <span className="bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">creators</span></h3>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Creators worldwide from all niches — including reaction, comedy, and gaming — trust us. Here's what they say!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <h4 className="font-semibold">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
