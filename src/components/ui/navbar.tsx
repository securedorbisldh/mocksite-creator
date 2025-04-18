
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white border-b">
      <Link to="/" className="flex items-center">
        <img src="/lovable-uploads/6a05735a-70ad-4e2d-862a-516cc503a245.png" alt="RightBox Media" className="h-12" />
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
  );
};

export default Navbar;
