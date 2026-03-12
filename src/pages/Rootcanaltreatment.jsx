import React from "react";
import {
  Award,
  Camera,
  AlertCircle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Droplet,
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
  Activity,
  Bone,
  FlaskConical,
  Syringe,
  Thermometer,
  Scissors,
  Microscope,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Rootcanaltreatment = () => {
  // Professional root canal treatment image
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
            <Link to="/endodontics" className="text-sm hover:text-teal-200 transition-colors">Endodontics</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-teal-200">Root Canal Therapy</span>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-400/30">
              Endodontic Therapy
            </span>
            <span className="bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/30">
              Pain Relief
            </span>
            <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-400/30">
              Tooth Preservation
            </span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
            Root Canal
            <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-300 mt-3 font-light">
              Therapy
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Save Your Natural Tooth with Gentle, Advanced Endodontic Care
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-teal-500 mt-8 rounded-full"></div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm text-teal-200">Successful Procedures</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
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
                root canal
                <span className="font-semibold ml-1 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  therapy
                </span>
                <span className="text-sm font-normal text-gray-400 ml-2">endodontics</span>
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

          {/* Hero Section with Root Canal Visualization */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#0B1E33]">
                save your natural tooth with
                <span className="block bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  gentle root canal therapy
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Advanced endodontic treatment to eliminate infection, relieve pain, 
                and preserve your natural tooth. Modern techniques ensure comfort 
                and long-term success with minimal discomfort.
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
                  pain-free options
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-teal-600" />
                  95% success rate
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-teal-600" />
                  1-2 visits
                </span>
              </div>
            </div>

            {/* Right Side - Root Canal Visualization */}
            <div className="hidden lg:block relative">
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full bg-[#2ac9c9] opacity-5 absolute -top-10 right-0 blur-3xl"></div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] border border-teal-100">
                  <div className="flex flex-col items-center">
                    {/* Tooth with root canal illustration */}
                    <div className="relative w-48 h-48 mb-4">
                      <svg viewBox="0 0 100 120" className="w-full h-full">
                        {/* Tooth outline */}
                        <path
                          d="M30 20C30 15 40 10 50 10C60 10 70 15 70 20V80C70 95 60 110 50 110C40 110 30 95 30 80V20Z"
                          fill="white"
                          stroke="#0B1E33"
                          strokeWidth="2"
                        />
                        {/* Root canals */}
                        <path d="M40 30L35 70" stroke="#2ac9c9" strokeWidth="3" strokeDasharray="4 2" />
                        <path d="M60 30L65 70" stroke="#2ac9c9" strokeWidth="3" strokeDasharray="4 2" />
                        {/* Infection indicator */}
                        <circle cx="50" cy="50" r="8" fill="#ef4444" opacity="0.3" />
                        <circle cx="50" cy="50" r="4" fill="#ef4444" opacity="0.5" />
                        {/* Treated area */}
                        <path d="M35 70L45 75" stroke="#10b981" strokeWidth="2" />
                        <path d="M65 70L55 75" stroke="#10b981" strokeWidth="2" />
                      </svg>
                      <div className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                        gentle procedure
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#0B1E33]">infected pulp</h3>
                    <p className="text-sm text-gray-500">bacteria removed, canals sealed</p>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">nerve removal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#2ac9c9] to-transparent opacity-25 my-10" />

          {/* Understanding Root Canal */}
          <div className="mt-8">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              understanding root canal therapy
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <AlertCircle className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">what is it?</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Removal of infected or damaged pulp from inside the tooth, followed by 
                  cleaning, disinfection, and sealing to prevent reinfection.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Thermometer className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">signs you need it</h3>
                <ul className="text-sm text-gray-500 leading-relaxed space-y-1 list-disc list-inside">
                  <li>Severe toothache pain</li>
                  <li>Prolonged sensitivity</li>
                  <li>Swollen gums</li>
                  <li>Darkening of tooth</li>
                  <li>Abscess or pimple on gum</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Heart className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">common causes</h3>
                <ul className="text-sm text-gray-500 leading-relaxed space-y-1 list-disc list-inside">
                  <li>Deep untreated decay</li>
                  <li>Repeated dental procedures</li>
                  <li>Cracked or chipped tooth</li>
                  <li>Trauma/injury to tooth</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Treatment Steps */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              root canal procedure
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "examination", icon: Microscope, desc: "x-rays & diagnosis" },
                { step: "02", title: "anesthesia", icon: Syringe, desc: "numb the area" },
                { step: "03", title: "cleaning", icon: Scissors, desc: "remove infected pulp" },
                { step: "04", title: "sealing", icon: FlaskConical, desc: "fill & seal canals" },
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

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              benefits of root canal
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Smile, title: "save natural tooth", desc: "avoid extraction" },
                { icon: Activity, title: "pain relief", desc: "eliminate infection" },
                { icon: Bone, title: "preserve jawbone", desc: "maintain structure" },
                { icon: Star, title: "natural appearance", desc: "no visible change" },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-[#0B1E33] capitalize">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Myths vs Facts */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-teal-600" />
                common myths
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm text-gray-600">Root canals are extremely painful</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm text-gray-600">Extraction is better than root canal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm text-gray-600">Root canals cause illness</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 text-lg">✓</span>
                  <span className="text-sm text-gray-600">Modern techniques are pain-free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 text-lg">✓</span>
                  <span className="text-sm text-gray-600">Saving natural tooth is always best</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 text-lg">✓</span>
                  <span className="text-sm text-gray-600">95% success rate long-term</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Technology Section */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              advanced technology
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 border border-teal-100">
                <Microscope className="w-10 h-10 mb-4 text-teal-600" />
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">dental microscope</h3>
                <p className="text-sm text-gray-500">Magnification up to 25x for precision treatment</p>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 border border-teal-100">
                <Camera className="w-10 h-10 mb-4 text-teal-600" />
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">digital imaging</h3>
                <p className="text-sm text-gray-500">3D CBCT scans for accurate diagnosis</p>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 border border-teal-100">
                <Zap className="w-10 h-10 mb-4 text-teal-600" />
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">gentle wave technology</h3>
                <p className="text-sm text-gray-500">Advanced irrigation for better disinfection</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-500 rounded-[1.5rem] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">don't lose your natural tooth</h3>
                <p className="text-teal-100">Save it with gentle, effective root canal therapy.</p>
                <p className="text-sm text-teal-200 mt-2">✓ pain-free options ✓ 95% success rate</p>
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
                  <span className="text-teal-600 font-bold">5000+</span> successful procedures
                </p>
                <p className="text-xs text-gray-400">Trusted by thousands of patients</p>
              </div>
            </div>

            {/* Secondary Button */}
            <button className="group flex items-center gap-2 rounded-full px-8 py-3 font-medium border-2 border-teal-600 bg-white text-[#0B1E33] hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-teal-400/30">
              <span>learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:stroke-white transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 flex justify-between items-center mt-16">
            <span>© 2025 — Dr. Prity Raushan Dental Clinic · Root Canal Therapy</span>
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

export default Rootcanaltreatment;