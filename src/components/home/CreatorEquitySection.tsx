
import { Link } from "react-router-dom";
import { TrendingUp, Users, Award, ArrowRight, Star, Target } from "lucide-react";

const CreatorEquitySection = () => {
  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Equity Ownership",
      description: "Become a stakeholder in KloudBean's growth, not just a customer"
    },
    {
      icon: Users,
      title: "Strategic Collaboration",
      description: "Work directly with our team to shape product development"
    },
    {
      icon: Award,
      title: "Revenue Diversification",
      description: "Build wealth beyond audience-dependent income streams"
    }
  ];

  const criteria = [
    "Technical expertise in content creation and digital platforms",
    "Engaged audience with alignment to technology and business topics",
    "Demonstrated content quality and professional standards",
    "Interest in long-term strategic business partnerships"
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Exclusive Opportunity
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Creator Equity <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Partnership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Go beyond traditional sponsorships. Select technical content creators can become equity partners in KloudBean, 
            aligning your success with the platform's growth.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              From Content Creator to <span className="text-purple-600">Business Owner</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This isn't just another sponsorship deal. We're offering select creators the opportunity to own a piece of the technology 
              infrastructure that powers modern content creation. Your expertise drives platform adoption, increasing both platform value 
              and your equity stake.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-6 text-center">Partnership Criteria</h4>
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{criterion}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <p className="text-sm text-gray-600 text-center mb-4">
                Ready to explore this opportunity?
              </p>
              <Link 
                to="/contact" 
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all font-semibold"
              >
                Apply for Partnership
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Partnership Process</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Initial Application", "Portfolio Review", "Strategic Discussion", "Partnership Agreement"].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold mb-2">{step}</h4>
                <p className="text-sm text-gray-600">
                  {index === 0 && "Submit your content portfolio and business goals"}
                  {index === 1 && "Our team evaluates your content quality and audience alignment"}
                  {index === 2 && "Discuss mutual goals and partnership structure"}
                  {index === 3 && "Finalize equity terms and collaboration framework"}
                </p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-gray-300 absolute top-6 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorEquitySection;
