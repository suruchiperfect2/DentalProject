import React from "react";
import {
  Award,
  Camera,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Feather,
  FileText,
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
  MoveHorizontal,
  Grid,
  Layers,
  Maximize2,
  Minimize2,
  Ruler,
  Activity,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Spacing = () => {
  // Professional dental spacing/image
  const heroImage = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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
            <Link to="/cosmetic-dentistry" className="text-sm hover:text-teal-200 transition-colors">Cosmetic</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-teal-200">Diastema Closure</span>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-400/30">
              Diastema Closure
            </span>
            <span className="bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/30">
              Gaps Between Teeth
            </span>
            <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-400/30">
              Cosmetic Correction
            </span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
            Diastema
            <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-300 mt-3 font-light">
              Closure
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Close Gaps & Perfect Your Smile Harmony
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-teal-500 mt-8 rounded-full"></div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">750+</div>
              <div className="text-sm text-teal-200">Gaps Closed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-teal-200">Satisfaction Rate</div>
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
                diastema
                <span className="font-semibold ml-1 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  closure
                </span>
                <span className="text-sm font-normal text-gray-400 ml-2">spacing solutions</span>
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

          {/* Hero Section with Spacing Visualization */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#0B1E33]">
                close gaps & perfect your
                <span className="block bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  smile harmony
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Effective solutions for spacing issues — from minor gaps to significant 
                diastema. Achieve uniform tooth alignment using minimally invasive 
                cosmetic and orthodontic treatments.
              </p>

              {/* Primary Button */}
              <button className="group flex items-center gap-2 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] rounded-full px-8 py-4 text-white font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-400/40 hover:scale-[1.02] transition-all duration-300 border border-white/25">
                <Calendar className="w-5 h-5" />
                <span>schedule consultation</span>
                <ArrowRight className="w-5 h-5 stroke-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8 text-sm font-medium text-[#0B1E33]/80">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  no-drill options
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-teal-600" />
                  enamel preservation
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-teal-600" />
                  same-day results
                </span>
              </div>
            </div>

            {/* Right Side - Spacing Visualization */}
            <div className="hidden lg:block relative">
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full bg-[#2ac9c9] opacity-5 absolute -top-10 right-0 blur-3xl"></div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] border border-teal-100">
                  <div className="flex flex-col items-center">
                    {/* Teeth with spacing illustration */}
                    <div className="relative w-48 h-48 mb-4 flex items-center justify-center">
                      <div className="flex gap-3">
                        {/* Teeth with gap */}
                        <div className="w-10 h-16 bg-white border-2 border-[#0B1E33] rounded-t-lg rounded-b-2xl"></div>
                        <div className="w-10 h-16 bg-white border-2 border-[#0B1E33] rounded-t-lg rounded-b-2xl"></div>
                        <div className="relative">
                          <div className="w-10 h-16 bg-white border-2 border-[#0B1E33] rounded-t-lg rounded-b-2xl"></div>
                          {/* Gap indicator */}
                          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                            <MoveHorizontal className="w-5 h-5 text-teal-500" />
                            <span className="text-xs text-teal-600 font-medium">2mm</span>
                          </div>
                        </div>
                      </div>
                      {/* Diastema highlight */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        midline diastema
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#0B1E33]">tooth spacing</h3>
                    <p className="text-sm text-gray-500">gaps between teeth (diastema)</p>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">common in anteriors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#2ac9c9] to-transparent opacity-25 my-10" />

          {/* Understanding Spacing */}
          <div className="mt-8">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              understanding tooth spacing
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Grid className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">what is diastema?</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A gap or space between two teeth, most commonly seen between the upper 
                  front teeth (midline diastema). Can range from minor to significant.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Heart className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">common causes</h3>
                <ul className="text-sm text-gray-500 leading-relaxed space-y-1 list-disc list-inside">
                  <li>Genetics / hereditary</li>
                  <li>Missing or small teeth</li>
                  <li>Thick labial frenum</li>
                  <li>Thumb sucking habits</li>
                  <li>Periodontal disease</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Ruler className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">types of gaps</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    <span className="text-gray-600">midline diastema (central)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span className="text-gray-600">generalized spacing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                    <span className="text-gray-600">localized gaps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gap Size Classification */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              gap size classification
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { size: "minor", measurement: "< 1mm", icon: Minimize2, color: "bg-teal-50", treatment: "bonding" },
                { size: "small", measurement: "1-2mm", icon: MoveHorizontal, color: "bg-teal-100", treatment: "composite" },
                { size: "moderate", measurement: "2-4mm", icon: Maximize2, color: "bg-teal-200", treatment: "veneers" },
                { size: "large", measurement: "> 4mm", icon: Layers, color: "bg-teal-300", treatment: "ortho + rest" },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-medium mb-1 text-[#0B1E33] capitalize">{item.size}</h3>
                  <p className="text-2xl font-light text-teal-600 mb-2">{item.measurement}</p>
                  <p className="text-xs text-gray-500">recommended: {item.treatment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              closure options
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Option 1 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Feather className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">composite bonding</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Tooth-colored resin to close gaps in a single visit. No drilling required.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  for minor gaps <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Option 2 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">porcelain veneers</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Custom shells that close gaps permanently with natural translucency.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  for small-moderate <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Option 3 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">orthodontics</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Braces or clear aligners to move teeth and close gaps naturally.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  for multiple gaps <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Option 4 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">frenectomy</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Laser removal of thick tissue causing persistent midline gaps.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  with orthodontics <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Closure Process */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              bonding procedure
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "shade selection", icon: Camera, desc: "match natural color" },
                { step: "02", title: "etching", icon: Zap, desc: "prepare surface" },
                { step: "03", title: "bonding", icon: Feather, desc: "apply composite" },
                { step: "04", title: "polishing", icon: Sparkles, desc: "final shaping" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all">
                    <div className="text-3xl font-light text-[#2ac9c9]/30 mb-2">{item.step}</div>
                    <item.icon className="w-8 h-8 mb-3 text-teal-600" />
                    <h3 className="text-lg font-medium text-[#0B1E33] capitalize">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#2ac9c9] z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Before/After Showcase */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4">before closure</h3>
              <div className="flex gap-3 items-center">
                <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-2xl">🦷🦷</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">visible gap between front teeth (midline diastema)</p>
                  <span className="text-xs text-amber-600">2.5mm spacing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4">after bonding</h3>
              <div className="flex gap-3 items-center">
                <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-2xl">✨🦷✨</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">gap closed, natural appearance restored</p>
                  <span className="text-xs text-teal-600">composite bonding</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-500 rounded-[1.5rem] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">close your gaps with confidence</h3>
                <p className="text-teal-100">Achieve a seamless, harmonious smile today.</p>
                <p className="text-sm text-teal-200 mt-2">✓ same-day results ✓ no-drill options available</p>
              </div>
              <button className="group flex items-center gap-2 bg-white text-teal-600 rounded-full px-8 py-4 font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap">
                <Calendar className="w-5 h-5" />
                <span>book your visit</span>
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
                  <span className="text-teal-600 font-bold">750+</span> gaps closed
                </p>
                <p className="text-xs text-gray-400">98% patient satisfaction</p>
              </div>
            </div>

            {/* Secondary Button */}
            <button className="group flex items-center gap-2 rounded-full px-8 py-3 font-medium border-2 border-teal-600 bg-white text-[#0B1E33] hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-teal-400/30">
              <span>view gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:stroke-white transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 flex justify-between items-center mt-16">
            <span>© 2025 — Dr. Prity Raushan Dental Clinic · Diastema Closure</span>
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

export default Spacing;