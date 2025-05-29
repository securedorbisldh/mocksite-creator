
import { Link } from "react-router-dom";
import { CheckCircle, Globe, Zap, Shield, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const KloudBeanPartnership = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Performance",
      description: "Optimized infrastructure delivering 3x faster page loads for better audience retention and monetization"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols protecting your content and audience data"
    },
    {
      icon: TrendingUp,
      title: "Scalability During Viral Moments",
      description: "Auto-scaling infrastructure that handles traffic spikes without downtime"
    },
    {
      icon: Globe,
      title: "Global CDN Network",
      description: "Worldwide content delivery ensuring optimal experience for international audiences"
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime Guarantee" },
    { value: "< 200ms", label: "Average Load Time" },
    { value: "24/7", label: "Expert Support" },
    { value: "Auto", label: "Scaling Technology" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Strategic Technology <span className="text-blue-600">Partnership</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              RightMediaBox has partnered with KloudBean to provide creators with enterprise-grade hosting infrastructure that scales with your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold">
                Explore Partnership
              </Link>
              <a href="https://kloudbean.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-semibold">
                Visit KloudBean
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Positioning */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why We Choose <span className="text-blue-600">KloudBean</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As content creation experts, we understand that your infrastructure directly impacts your ability to monetize and grow. That's why we've partnered with KloudBean - they provide the technical foundation that lets you focus on creating while ensuring your audience gets the best possible experience.
              </p>
              <div className="space-y-4">
                {["Managed cloud hosting optimized for creators", "Application-specific environments (WordPress, Next.js, Node.js)", "Performance monitoring with creator-focused metrics"].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics That Matter</h3>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                    <div className="text-gray-600 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Creator Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to support your monetization strategies and audience growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Creator Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join successful creators who trust KloudBean's infrastructure to power their growth and monetization strategies.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Start Your Partnership Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer showBanner={false} />
    </div>
  );
};

export default KloudBeanPartnership;
