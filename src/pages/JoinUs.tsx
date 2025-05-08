
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";

const JoinUs = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfq8kc6YZbMB329jwU5bpF5s6O25N-FQFUu791AmjBi9mk1cA/viewform?usp=header";
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-r from-red-50 to-yellow-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join our coolest <span className="text-yellow-500">team!!!</span></h1>
            <p className="text-xl text-gray-700 mb-8">Be part of a creative team that's reshaping digital content across India and beyond.</p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white text-lg rounded-full px-8 py-6"
                onClick={() => window.open(googleFormUrl, "_blank")}
              >
                Apply Now <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Join Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join RightBox Media?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Freedom</h3>
              <p className="text-gray-600">Express your creativity in an environment that values innovation and fresh perspectives.</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">Develop your skills with training, mentorship, and opportunities to work on diverse projects.</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Work Culture</h3>
              <p className="text-gray-600">Join a collaborative and supportive team that celebrates achievements and encourages new ideas.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Open Positions Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Graphics Team */}
            <div className="relative">
              <div className="absolute -top-8 left-0 bg-red-600 text-white py-2 px-6 rounded-full">
                <h3 className="text-xl font-bold">Graphics Team</h3>
              </div>
              
              <Card className="mt-8 border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Graphic Designer</h4>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin size={18} className="mr-2" />
                          <span>Mohali</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">Full-time</span>
                          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Minimum 1 year</span>
                        </div>
                      </div>
                      <ArrowRight className="text-red-500" />
                    </div>
                  </CardContent>
                </a>
              </Card>
              
              <div className="mt-12">
                <img 
                  src="/lovable-uploads/c8e4af8c-78f5-4fac-b445-da7e1ca47762.png" 
                  alt="Team illustration" 
                  className="w-full max-w-xs mx-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Youtube Team */}
            <div className="relative">
              <div className="absolute -top-8 left-0 bg-red-600 text-white py-2 px-6 rounded-full">
                <h3 className="text-xl font-bold">Long Term Youtube Video</h3>
              </div>
              
              <Card className="mt-8 border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl mb-4">
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Youtube Manager</h4>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin size={18} className="mr-2" />
                          <span>Mohali</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">Full-time</span>
                        </div>
                      </div>
                      <ArrowRight className="text-red-500" />
                    </div>
                  </CardContent>
                </a>
              </Card>
              
              <Card className="border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl mb-4">
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Video Editor</h4>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin size={18} className="mr-2" />
                          <span>Mohali</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">Full-time</span>
                          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Minimum 1 year</span>
                        </div>
                      </div>
                      <ArrowRight className="text-red-500" />
                    </div>
                  </CardContent>
                </a>
              </Card>
              
              <Card className="border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Motion Graphics Artist</h4>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin size={18} className="mr-2" />
                          <span>Mohali</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">Full-time</span>
                          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Minimum 1 year</span>
                        </div>
                      </div>
                      <ArrowRight className="text-red-500" />
                    </div>
                  </CardContent>
                </a>
              </Card>
              
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/5f59a522-25bd-4811-b934-0a8c93db728a.png" 
                  alt="Team collaboration" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Apply CTA Section */}
      <div className="py-16 bg-gradient-to-r from-red-100 to-yellow-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about creating amazing content. Apply now and be part of our journey!
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg rounded-full px-8 py-6"
            onClick={() => window.open(googleFormUrl, "_blank")}
          >
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default JoinUs;
