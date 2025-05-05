
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = ({ showBanner = true, bannerImage = "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/footer%20banner%20image-01.png" }) => {
  return (
    <footer className="bg-white">
      {showBanner && (
        <div className="bg-red-700 text-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl mb-6 max-w-xl">
                Connect with our experts to accelerate your content growth like never before
              </h2>
            </div>
            <Link to="/contact" className="px-8 py-3 bg-white text-red-700 rounded-full text-lg hover:bg-gray-100 transition-colors flex items-center">
              Get free consultation →
            </Link>
          </div>
          <img 
            src={bannerImage}
            alt="Hand icon"
            className="absolute right-10 bottom-0 h-24 md:h-32 object-contain"
          />
        </div>
      )}
      
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="mb-6 md:mb-0">
            <img 
              src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/logo%20rbm.png" 
              alt="RightBox Media" 
              className="h-16" 
            />
          </Link>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600">Services</Link>
            <Link to="/join-us" className="text-gray-700 hover:text-red-600">Join us</Link>
          </div>
        </div>
        
        <hr className="border-gray-200 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 italic mb-4 md:mb-0">
            RightBox is where creators go for next-level post and design — made in India, seen worldwide.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/team.rightbox?igsh=MWEyZm12ZzE2cnYxcQ%3D%3D&utm_source=qr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/rightbox-media/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
