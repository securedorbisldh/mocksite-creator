
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top hiring banner with curved bottom */}
      <div className="bg-red-700 text-white py-2 text-center relative">
        <div className="container mx-auto">
          <p className="font-medium">We're Hiring! Apply Now</p>
        </div>
        <div className="absolute -bottom-8 w-full overflow-hidden">
          <div className="h-8 bg-white rounded-tl-full rounded-tr-full transform scale-110"></div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-white pt-10">
        <Link to="/" className="flex items-center">
          <img 
            src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/logo%20rbm.png" 
            alt="RightBox Media" 
            className="h-12" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-red-600">Services</Link>
          <Link to="/join-us" className="text-gray-700 hover:text-red-600">Join us</Link>
          <Link to="/contact" className="px-6 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors">
            Get in touch!
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
