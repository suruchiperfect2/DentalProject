import React from "react";
import {
  Award,
  Camera,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Mic,
  Phone,
  Shield,
  Smile,
  Star,
  Twitter,
  User,
  Zap,
  Activity,
  Ruler,
  MoveHorizontal,
  Gauge,
  Calendar,
  RefreshCw,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Orthodontics = () => {
  // Professional orthodontic image
  const heroImage = "https://images.unsplash.com/photo-1606811971618-4486d14f3f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 font-['Inter']">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          {/* Breadcrumb */}
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Link to="/" className="text-sm hover:text-teal-200 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="text-sm hover:text-teal-200 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-teal-200">Orthodontics</span>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-400/30">
              All Ages Welcome
            </span>
            <span className="bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/30">
              Discreet Options
            </span>
            <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-400/30">
              Digital Planning
            </span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
            Orthodontics
            <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-300 mt-3 font-light">
              Braces & Clear Aligners
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Straight Teeth, Confident Smile — Advanced Treatment for All Ages
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-teal-500 mt-8 rounded-full"></div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">3000+</div>
              <div className="text-sm text-teal-200">Cases Treated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-teal-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-teal-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-[0_30px_40px_-20px_rgba(11,30,51,0.15)] p-8 md:p-12 border border-teal-200/30">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              {/* Tooth Icon Logo */}
              <div className="w-12 h-12">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2ac9c9" />
                      <stop offset="100%" stopColor="#179b9b" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M7 5C8.5 3 10 2 12 2C14 2 15.5 3 17 5C18 6.5 19 9 19 12C19 15 18 18 16 20C14.5 21.5 13 22 12 22C11 22 9.5 21.5 8 20C6 18 5 15 5 12C5 9 6 6.5 7 5Z"
                    fill="url(#tealGradient)"
                    stroke="#0B1E33"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 8L12 10L15 8"
                    stroke="#0B1E33"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-light tracking-tight text-[#0B1E33]">
                ortho
                <span className="font-semibold ml-1 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  dontics
                </span>
                <span className="text-sm font-normal text-gray-400 ml-2">braces & aligners</span>
              </span>
            </div>

            {/* Header Icons */}
            <div className="flex gap-3 text-[#0B1E33]">
              <a href="tel:+919876543210" className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                <Phone className="w-5 h-5 stroke-[#0B1E33]" />
              </a>
              <a href="#" className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                <MapPin className="w-5 h-5 stroke-[#0B1E33]" />
              </a>
              <Link to="/profile" className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                <User className="w-5 h-5 stroke-[#0B1E33]" />
              </Link>
            </div>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#0B1E33]">
                straight teeth,
                <span className="block bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  confident smile
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Advanced orthodontic treatment for all ages. From traditional braces 
                to clear aligners, we create beautiful, healthy smiles that last.
              </p>

              {/* Primary Button */}
              <button className="group flex items-center gap-2 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] rounded-full px-8 py-4 text-white font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-400/40 hover:scale-[1.02] transition-all duration-300 border border-white/25">
                <CalendarCheck className="w-5 h-5" />
                <span>free consultation</span>
                <ArrowRight className="w-5 h-5 stroke-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8 text-sm font-medium text-[#0B1E33]/80">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  board certified
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-teal-600" />
                  digital scanning
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-teal-600" />
                  flexible payment
                </span>
              </div>
            </div>

            {/* Right Side - Ortho Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full bg-[#2ac9c9] opacity-5 absolute -top-10 right-0 blur-3xl"></div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] border border-teal-100">
                  <div className="flex flex-col items-center">
                    {/* Braces illustration */}
                    <div className="relative w-48 h-48 mb-4 flex items-center justify-center">
                      <div className="flex gap-1">
                        {/* Teeth with braces */}
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="relative">
                            <div className="w-6 h-12 bg-white border-2 border-[#0B1E33] rounded-t-lg"></div>
                            {/* Bracket */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-sm"></div>
                            {/* Wire */}
                            {i < 5 && (
                              <div className="absolute top-5 right-0 w-2 h-1 bg-teal-700"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#0B1E33]">modern orthodontics</h3>
                    <p className="text-sm text-gray-500">braces · aligners · retainers</p>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">digital smile preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#2ac9c9] to-transparent opacity-25 my-10" />

          {/* Common Issues */}
          <div className="mt-8">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              common orthodontic issues
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { issue: "crowding", icon: Gauge, desc: "insufficient space" },
                { issue: "spacing", icon: MoveHorizontal, desc: "gaps between teeth" },
                { issue: "overbite", icon: Ruler, desc: "upper teeth overlap" },
                { issue: "crossbite", icon: Activity, desc: "misaligned bite" },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                  <item.icon className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-medium mb-2 text-[#0B1E33] capitalize">{item.issue}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              treatment options
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Option 1 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">traditional braces</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Metal or ceramic brackets with wires for precise control.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  all cases <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Option 2 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">clear aligners</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Removable, nearly invisible trays for mild-moderate cases.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  discreet option <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Option 3 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">early intervention</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Phase 1 treatment for children to guide jaw growth.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  ages 7-11 <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Treatment Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              your journey
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "consultation", icon: Camera, desc: "digital scan & plan" },
                { step: "02", title: "placement", icon: Zap, desc: "braces or aligners" },
                { step: "03", title: "adjustments", icon: Calendar, desc: "regular visits" },
                { step: "04", title: "retention", icon: Smile, desc: "maintain results" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all">
                    <div className="text-3xl font-light text-[#2ac9c9]/30 mb-2">{item.step}</div>
                    <item.icon className="w-8 h-8 mb-3 text-teal-600" />
                    <h3 className="text-lg font-medium text-[#0B1E33]">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#2ac9c9] z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                Before Treatment
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span className="text-sm text-gray-600">Crooked or crowded teeth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span className="text-sm text-gray-600">Gaps between teeth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span className="text-sm text-gray-600">Difficulty cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span className="text-sm text-gray-600">Lower confidence</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                After Treatment
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Perfectly aligned smile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Improved oral hygiene</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Better bite function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Enhanced confidence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-500 rounded-[1.5rem] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">ready for your smile transformation?</h3>
                <p className="text-teal-100">Free consultation with digital smile preview.</p>
                <p className="text-sm text-teal-200 mt-2">✓ 3D scan included ✓ flexible payment plans</p>
              </div>
              <button className="group flex items-center gap-2 bg-white text-teal-600 rounded-full px-8 py-4 font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap">
                <Calendar className="w-5 h-5" />
                <span>book free consult</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stats & Gallery Section */}
          <div className="flex flex-wrap items-center justify-between mt-12 p-4 bg-teal-50/50 rounded-2xl">
            <div className="flex gap-3 items-center">
              {/* Avatar Group */}
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-teal-200">
                  <Camera className="w-5 h-5 text-teal-600" />
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-teal-200">
                  <Mic className="w-5 h-5 text-teal-600" />
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-teal-200">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
              </div>
              <div>
                <p className="text-[#0B1E33] font-medium">
                  <span className="text-teal-600 font-bold">98%</span> patient satisfaction
                </p>
                <p className="text-xs text-gray-400">3000+ successful cases</p>
              </div>
            </div>

            {/* Secondary Button */}
            <button className="group flex items-center gap-2 rounded-full px-8 py-3 font-medium border-2 border-teal-600 bg-white text-[#0B1E33] hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-teal-400/30">
              <span>see results</span>
              <ArrowRight className="w-4 h-4 group-hover:stroke-white transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 flex justify-between items-center mt-16">
            <span>© 2025 — Dr. Prity Raushan Dental Clinic · Orthodontics</span>
            <span className="flex gap-2">
              <Instagram className="w-4 h-4 text-teal-600 hover:text-teal-500 transition-colors cursor-pointer" />
              <Twitter className="w-4 h-4 text-teal-600 hover:text-teal-500 transition-colors cursor-pointer" />
              <Linkedin className="w-4 h-4 text-teal-600 hover:text-teal-500 transition-colors cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      {/* Add animations CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
};

export default Orthodontics;