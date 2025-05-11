
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top hiring banner with curved bottom */}
      <div className="bg-red-700 text-white py-2 text-center relative">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div></div> {/* Empty div for flex spacing */}
          <p className="font-medium">We're Hiring! Apply Now</p>
          <Link to="/contact" className="text-white hover:text-gray-200 transition-colors text-sm">
            Get in touch →
          </Link>
        </div>
        <div className="absolute -bottom-8 w-full overflow-hidden">
          <div className="h-8 bg-white rounded-tl-full rounded-tr-full transform scale-110"></div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="w-full container mx-auto px-6 py-4 flex items-center justify-between bg-white pt-10">
        <Link to="/" className="flex items-center">
          <img 
            src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/logo%20rbm.png" 
            alt="RightBox Media" 
            className="h-16" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-red-600">Services</Link>
          <Link to="/join-us" className="text-gray-700 hover:text-red-600">Join us</Link>
          <Link to="/contact" className="px-6 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors">
            Get in touch!
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2" asChild>
            <button aria-label="Toggle Menu">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75%] sm:w-[350px] bg-white">
            <div className="flex flex-col h-full">
              <div className="py-6 flex flex-col gap-6">
                <Link 
                  to="/" 
                  className="text-xl font-medium text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-xl font-medium text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className="text-xl font-medium text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/join-us" 
                  className="text-xl font-medium text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join us
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in touch!
                </Link>
              </div>
              <div className="mt-auto pb-8">
                <p className="text-gray-500 mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600">
                    <Instagram size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Navbar;
