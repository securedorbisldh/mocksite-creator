import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, Users, ExternalLink } from "lucide-react";

const Footer = ({ showBanner = true, bannerImage = "https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/footer%20banner%20image-01.png" }) => {
  return (
    <footer className="bg-white relative z-10">
      {showBanner && (
        <div className="py-16 relative overflow-hidden px-6 md:px-12 lg:px-16">
          <Link to="/contact">
            <img 
              src={bannerImage}
              alt="Footer banner"
              className="w-full object-cover cursor-pointer hover:opacity-95 transition-opacity rounded-lg"
            />
          </Link>
        </div>
      )}
      
      <div className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://pub-9b308ad05d60480db8a88c22b41487d1.r2.dev/logo%20rbm.png" 
                alt="RightBox Media" 
                className="h-16" 
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              RightBox is where creators go for next-level post and design — made in India, seen worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-red-600 transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-600 hover:text-red-600 transition-colors">About</Link>
              <Link to="/services" className="block text-gray-600 hover:text-red-600 transition-colors">Services</Link>
              <Link to="/join-us" className="block text-gray-600 hover:text-red-600 transition-colors">Join us</Link>
            </div>
          </div>

          {/* Creator Community */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Creator Community</h4>
            <div className="space-y-3">
              <a 
                href="https://rightboxmedia.slack.com/archives/C08U4BLCAJE" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <MessageCircle size={16} />
                Join Slack Community
              </a>
              <Link to="/kloudbean-partnership" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                <Users size={16} />
                Partnership Opportunities
              </Link>
              <a 
                href="https://kloudbean.com" 
                target="_blank" 
                rel="dofollow"
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <ExternalLink size={16} />
                KloudBean Hosting
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
            <div className="flex flex-col gap-4 mb-6">
              <a 
                href="https://www.instagram.com/team.rightbox?igsh=MWEyZm12ZzE2cnYxcQ%3D%3D&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors"
              >
                <Instagram size={20} />
                <span>Follow on Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/rightbox-media/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-400">RightBox Media</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              <span>Proudly powered by </span>
              <a 
                href="https://kloudbean.com" 
                target="_blank" 
                rel="dofollow"
                className="font-medium text-red-600 hover:underline transition-colors"
              >
                kloudbean
              </a>
              <span> ❤️</span>
            </p>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2024 RightBox Media. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
