import React from "react";
import {
  Bone,
  DollarSign,
  CheckCircle,
  Award,
  Clock,
  Heart,
  Star,
  Shield,
  Calendar,
  Users,
  Sparkles,
  CreditCard,
  BadgeCheck,
  TrendingUp
} from "lucide-react";

const TreatmentCharges = () => {
  const heroImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2069&auto=format&fit=crop";

  const treatments = [
    {
      category: "General Dentistry",
      icon: <Bone className="w-8 h-8" />,
      color: "from-teal-400 to-teal-600",
      services: [
        { name: "Dental Checkup & Cleaning", price: "₹500", original: "₹800", badge: "Popular" },
        { name: "Scaling & Polishing", price: "₹1,500", original: "₹2,000", badge: "Save 25%" },
        { name: "Dental Fillings (per tooth)", price: "₹1,200", original: "₹1,800", badge: "" },
        { name: "Root Canal Treatment", price: "₹3,500", original: "₹5,000", badge: "Premium" },
        { name: "Tooth Extraction", price: "₹800", original: "₹1,200", badge: "" },
      ]
    },
    {
      category: "Cosmetic Dentistry",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-400 to-teal-500",
      services: [
        { name: "Teeth Whitening", price: "₹8,000", original: "₹12,000", badge: "Trending" },
        { name: "Veneers (per tooth)", price: "₹7,500", original: "₹10,000", badge: "" },
        { name: "Dental Crowns", price: "₹5,000", original: "₹7,000", badge: "Popular" },
        { name: "Gum Contouring", price: "₹4,500", original: "₹6,000", badge: "" },
        { name: "Smile Makeover", price: "₹45,000", original: "₹60,000", badge: "Best Value" },
      ]
    },
    {
      category: "Orthodontics",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-400 to-teal-500",
      services: [
        { name: "Metal Braces", price: "₹25,000", original: "₹35,000", badge: "Save 28%" },
        { name: "Ceramic Braces", price: "₹40,000", original: "₹50,000", badge: "" },
        { name: "Invisalign Aligners", price: "₹80,000", original: "₹1,00,000", badge: "Premium" },
        { name: "Retainers", price: "₹3,500", original: "₹5,000", badge: "" },
        { name: "Space Maintainers", price: "₹2,500", original: "₹4,000", badge: "" },
      ]
    },
    {
      category: "Surgical Procedures",
      icon: <Shield className="w-8 h-8" />,
      color: "from-amber-400 to-teal-500",
      services: [
        { name: "Dental Implants", price: "₹25,000", original: "₹35,000", badge: "Popular" },
        { name: "Wisdom Tooth Removal", price: "₹3,500", original: "₹5,500", badge: "" },
        { name: "Bone Grafting", price: "₹12,000", original: "₹18,000", badge: "" },
        { name: "Sinus Lift", price: "₹15,000", original: "₹22,000", badge: "Specialist" },
        { name: "Jaw Surgery", price: "₹65,000", original: "₹85,000", badge: "Consult" },
      ]
    },
    {
      category: "Pediatric Dentistry",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-400 to-teal-500",
      services: [
        { name: "Kids First Visit", price: "₹400", original: "₹600", badge: "Free" },
        { name: "Fluoride Treatment", price: "₹800", original: "₹1,200", badge: "" },
        { name: "Pit & Fissure Sealants", price: "₹1,000", original: "₹1,500", badge: "Save 33%" },
        { name: "Pulpectomy", price: "₹2,000", original: "₹3,000", badge: "" },
        { name: "Habit Breaking Appliances", price: "₹4,500", original: "₹6,000", badge: "" },
      ]
    },
    {
      category: "Preventive Care",
      icon: <BadgeCheck className="w-8 h-8" />,
      color: "from-green-400 to-teal-500",
      services: [
        { name: "Oral Cancer Screening", price: "₹1,000", original: "₹1,800", badge: "Essential" },
        { name: "Digital X-Ray", price: "₹400", original: "₹700", badge: "" },
        { name: "CBCT Scan", price: "₹3,500", original: "₹5,000", badge: "Advanced" },
        { name: "Mouth Guard", price: "₹2,500", original: "₹3,500", badge: "" },
        { name: "Night Guard", price: "₹3,000", original: "₹4,500", badge: "" },
      ]
    }
  ];

  const highlights = [
    { icon: <Award className="w-6 h-6" />, text: "15+ Years Experience", color: "from-teal-400 to-teal-600" },
    { icon: <Users className="w-6 h-6" />, text: "10,000+ Happy Patients", color: "from-purple-400 to-teal-500" },
    { icon: <Star className="w-6 h-6" />, text: "4.9/5 Patient Rating", color: "from-amber-400 to-teal-500" },
    { icon: <Clock className="w-6 h-6" />, text: "Flexible Hours", color: "from-blue-400 to-teal-500" },
  ];

  const paymentOptions = [
    { icon: <CreditCard className="w-6 h-6" />, title: "EMI Options", desc: "0% interest available" },
    { icon: <Shield className="w-6 h-6" />, title: "Insurance Accepted", desc: "All major PPO plans" },
    { icon: <Heart className="w-6 h-6" />, title: "Discount Plans", desc: "Save up to 30%" },
    { icon: <BadgeCheck className="w-6 h-6" />, title: "Quality Guarantee", desc: "Certified materials" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Simple Hero Section with Image and Centered Heading */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Dental Treatment" 
          className="w-full h-full object-cover"
        />
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Centered Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Treatment Charges
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Transparent pricing • Premium care • Flexible payment options
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className={`w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br ${item.color} p-3 text-white`}>
                {item.icon}
              </div>
              <p className="text-[#0B1E33] font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Treatment Categories */}
        <div className="space-y-12">
          {treatments.map((category, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-3 text-white`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0B1E33]">{category.category}</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mt-2"></div>
                </div>
              </div>

              {/* Services List */}
              <div className="grid md:grid-cols-2 gap-4">
                {category.services.map((service, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-teal-50 transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#0B1E33]">{service.name}</p>
                        {service.badge && (
                          <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
                            service.badge === 'Popular' ? 'bg-teal-100 text-teal-700' :
                            service.badge === 'Premium' ? 'bg-purple-100 text-purple-700' :
                            service.badge === 'Best Value' ? 'bg-amber-100 text-amber-700' :
                            service.badge === 'Trending' ? 'bg-pink-100 text-pink-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#0B1E33]">{service.price}</p>
                      {service.original && (
                        <p className="text-sm text-gray-400 line-through">{service.original}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0B1E33] text-center mb-8">
            Flexible <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">Payment</span> Options
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {paymentOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal-50 to-teal-100 p-3 text-teal-600 group-hover:from-teal-500 group-hover:to-teal-600 group-hover:text-white transition-all duration-300">
                  {option.icon}
                </div>
                <h3 className="font-semibold text-[#0B1E33] mb-1">{option.title}</h3>
                <p className="text-sm text-gray-500">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[#0B1E33] to-[#1a2f4c] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Healthier Smile?</h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Book your consultation today and get a personalized treatment plan
          </p>
          <button className="group bg-gradient-to-r from-teal-400 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 mx-auto">
            <Calendar className="w-5 h-5" />
            <span>Book Free Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCharges;