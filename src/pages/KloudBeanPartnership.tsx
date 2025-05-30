import { Link } from "react-router-dom";
import { CheckCircle, Globe, Zap, Shield, TrendingUp, Users, Award, ArrowRight, Sparkles, Clock, Star, Crown } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const KloudBeanPartnership = () => {
  const uniqueOffers = [
    {
      icon: Crown,
      title: "Co-Founder Status",
      description: "Become an official co-founder of KloudBean with equity ownership",
      highlight: "Co-Founder",
      badge: "Exclusive"
    },
    {
      icon: TrendingUp,
      title: "Equity Ownership",
      description: "Own a percentage of KloudBean's growth and future valuation",
      highlight: "Equity %",
      badge: "Ownership"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Performance",
      description: "Optimized infrastructure delivering 3x faster page loads for better audience retention and monetization",
      highlight: "3x Faster"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols protecting your content and audience data",
      highlight: "Bank-Grade"
    },
    {
      icon: TrendingUp,
      title: "Scalability During Viral Moments",
      description: "Auto-scaling infrastructure that handles traffic spikes without downtime",
      highlight: "Auto-Scale"
    },
    {
      icon: Globe,
      title: "Global CDN Network",
      description: "Worldwide content delivery ensuring optimal experience for international audiences",
      highlight: "Global CDN"
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime Guarantee", icon: Shield },
    { value: "< 200ms", label: "Average Load Time", icon: Zap },
    { value: "24/7", label: "Expert Support", icon: Users },
    { value: "Auto", label: "Scaling Technology", icon: TrendingUp }
  ];

  const partnershipSteps = [
    {
      step: "01",
      title: "Application Review",
      description: "Submit your creator profile and growth metrics for partnership evaluation"
    },
    {
      step: "02",
      title: "Technical Assessment",
      description: "Our team evaluates your hosting needs and recommends optimal infrastructure"
    },
    {
      step: "03",
      title: "Partnership Activation",
      description: "Get onboarded with priority support and creator-optimized hosting solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with RightMediaBox branding */}
      <div className="bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Active Partnership Opportunity</span>
              <Clock className="w-4 h-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              KloudBean <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Co-Founder</span> Partnership
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              RightMediaBox's <strong>exclusive equity partnership</strong> with KloudBean. Become a co-founder, own equity, and build generational wealth beyond content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Crown className="w-5 h-5" />
                Apply for Co-Founder Status
              </Link>
              <a href="https://kloudbean.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-all duration-300 font-semibold">
                Visit KloudBean
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
              First of Many Strategic Partnerships • Equity + Co-Founder Opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Status Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Co-Founder Applications: OPEN</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <span className="text-sm opacity-90">Limited equity positions available</span>
          </div>
        </div>
      </div>

      {/* Unique Co-Founder Benefits */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Crown className="w-4 h-4" />
              Exclusive Co-Founder Opportunity
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Traditional Sponsorships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This isn't just hosting - it's true business ownership with equity, decision-making power, and long-term wealth building
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueOffers.map((offer, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  {offer.badge}
                </div>
                <div className="relative mb-4">
                  <offer.icon className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">{offer.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offer.description}</p>
                <div className="mt-4 text-sm font-bold text-red-600">{offer.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Positioning */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Strategic Partnership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                From Creator to <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Business Owner</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This is the first partnership of its kind - where creators don't just get services, they become actual business owners with equity stakes, co-founder status, and decision-making power in a growing tech company.
              </p>
              <div className="space-y-4">
                {["Official co-founder title and equity ownership", "Participate in strategic business decisions", "Revenue sharing from company growth", "Priority access to new features and services"].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-center">Performance Metrics That Matter</h3>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center group hover:bg-red-50 rounded-2xl p-4 transition-all duration-300">
                    <metric.icon className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">{metric.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Benefits */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Creator Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to support your monetization strategies and audience growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <benefit.icon className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {benefit.highlight}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Process */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Co-Founder Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive co-founder program in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < partnershipSteps.length - 1 && (
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

      {/* Future Opportunities Teaser */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">More Equity Partnerships Coming Soon</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            KloudBean is just the beginning. We're continuously curating equity partnerships and co-founder opportunities with industry leaders to provide creators with comprehensive wealth-building solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">Analytics Platforms</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">Content Tools</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">Monetization Services</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">Growth Agencies</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Become a Co-Founder?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join successful creators who own equity in growing tech companies and build wealth beyond content creation.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Apply for Co-Founder Status
                <Crown className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer showBanner={false} />
    </div>
  );
};

export default KloudBeanPartnership;
