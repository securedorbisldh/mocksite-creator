
import { Link } from "react-router-dom";
import { Building2, Users, TrendingUp, Award, Globe, Zap, Shield, Heart, ArrowRight, CheckCircle, Sparkles, Target, Handshake, Star } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const BusinessPartnerships = () => {
  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Technology Partners",
      description: "SaaS platforms, hosting services, and development tools",
      examples: ["Web Hosting", "Analytics Tools", "Design Software", "Cloud Services"],
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Brand Collaborations",
      description: "Consumer brands seeking authentic creator partnerships",
      examples: ["Fashion & Lifestyle", "Food & Beverage", "Electronics", "Travel & Tourism"],
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Investment platforms, fintech, and business solutions",
      examples: ["Investment Apps", "Banking Services", "Crypto Platforms", "Business Tools"],
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Education & Training",
      description: "Course platforms, skill development, and certification",
      examples: ["Online Courses", "Skill Platforms", "Certification Programs", "Workshops"],
      color: "bg-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Access to Quality Creators",
      description: "Connect with vetted, high-performing content creators across niches"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your brand presence through our international creator network"
    },
    {
      icon: Shield,
      title: "Managed Partnerships",
      description: "Professional partnership management and campaign execution"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Detailed analytics and ROI measurement for all partnerships"
    }
  ];

  const currentPartners = [
    {
      name: "KloudBean",
      category: "Cloud Hosting",
      description: "Enterprise-grade hosting solutions for creators",
      status: "Active Partner",
      logo: "🌐"
    }
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Partnership Application",
      description: "Submit your company profile and partnership proposal"
    },
    {
      step: "02",
      title: "Evaluation & Matching",
      description: "Our team evaluates fit and matches you with relevant creators"
    },
    {
      step: "03",
      title: "Partnership Launch",
      description: "Launch campaigns with ongoing support and optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Business Partnership Program</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Partner with <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">RightMediaBox</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Join our strategic partnership ecosystem and connect with top content creators worldwide. We offer diverse collaboration models beyond equity sharing to drive mutual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Star className="w-5 h-5" />
                Apply for Partnership
              </Link>
              <Link to="/kloudbean-partnership" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-all duration-300 font-semibold">
                View Success Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
              Multiple partnership models • Performance-driven results • Global creator network
            </div>
          </div>
        </div>
      </div>

      {/* Current Partners Showcase */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies are already partnering with our creator network
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  {partner.status}
                </div>
                <p className="text-gray-600 mb-2 font-medium">{partner.category}</p>
                <p className="text-gray-500 mb-6">{partner.description}</p>
                <Link to="/kloudbean-partnership" className="text-red-600 hover:text-red-700 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome companies from all industries to join our ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-gray-500 bg-gray-50 rounded-full px-3 py-1 inline-block mr-2 mb-1">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Models */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Flexible <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Partnership Models</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer various collaboration models tailored to your business goals and creator needs, going beyond traditional equity sharing.
              </p>
              <div className="space-y-6">
                {[
                  "Revenue Sharing Partnerships",
                  "Sponsored Content Campaigns",
                  "Product Integration Programs",
                  "Affiliate Marketing Networks",
                  "Technology Integration Partners",
                  "Brand Ambassador Programs",
                  "Co-Marketing Initiatives",
                  "Creator Investment Opportunities"
                ].map((model, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{model}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-center">Why Partner With Us?</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our strategic partnership ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-red-200 to-orange-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="opacity-90">Combined Reach</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="opacity-90">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Scale Your Business with Creators?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join innovative companies that are already leveraging our creator network to drive growth, engagement, and brand awareness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Building2 className="w-5 h-5" />
                  Apply for Partnership
                </Link>
                <Link to="/kloudbean-partnership" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Success Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer showBanner={false} />
    </div>
  );
};

export default BusinessPartnerships;
