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
  Sparkles,
  Zap,
  Droplet,
  Calendar,
  Activity,
  Sun,
  Moon,
  Coffee,
  AlertCircle,
  Gem,
  Feather,
  Gauge,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

const TeethWhitening = () => {
  // Professional teeth whitening image
  const heroImage = "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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
            <span className="text-sm text-teal-200">Teeth Whitening</span>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-400/30">
              Professional Bleaching
            </span>
            <span className="bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/30">
              Safe & Effective
            </span>
            <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-400/30">
              Instant Results
            </span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
            Teeth
            <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-300 mt-3 font-light">
              Whitening
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Brighten Your Smile with Professional, Safe, and Effective Whitening
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-teal-500 mt-8 rounded-full"></div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">8-10</div>
              <div className="text-sm text-teal-200">Shades Brighter</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1hr</div>
              <div className="text-sm text-teal-200">In-Office Treatment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-teal-200">Satisfaction Rate</div>
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
                teeth
                <span className="font-semibold ml-1 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  whitening
                </span>
                <span className="text-sm font-normal text-gray-400 ml-2">bright smile</span>
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
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">in-office</span>
                <span className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">take-home</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">sensitive formula</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#0B1E33]">
                reveal your
                <span className="block bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  brightest smile
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Professional teeth whitening delivers dramatic results safely and effectively. 
                Whether you choose our in-office power whitening or custom take-home kits, 
                achieve a noticeably brighter smile in as little as one visit.
              </p>

              {/* Primary Button */}
              <button className="group flex items-center gap-2 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] rounded-full px-8 py-4 text-white font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-400/40 hover:scale-[1.02] transition-all duration-300 border border-white/25">
                <Calendar className="w-5 h-5" />
                <span>book consultation</span>
                <ArrowRight className="w-5 h-5 stroke-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8 text-sm font-medium text-[#0B1E33]/80">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  dentist-supervised
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-teal-600" />
                  enamel-safe
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-teal-600" />
                  long-lasting
                </span>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full bg-[#2ac9c9] opacity-5 absolute -top-10 right-0 blur-3xl"></div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] border border-teal-100">
                  <div className="flex flex-col items-center">
                    {/* Whitening illustration */}
                    <div className="relative w-48 h-48 mb-4 flex items-center justify-center">
                      <div className="relative">
                        {/* Before tooth */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center border-2 border-amber-300">
                            <span className="text-3xl">🦷</span>
                          </div>
                          <p className="text-xs text-center mt-1 text-gray-500">before</p>
                        </div>
                        {/* After tooth */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-teal-300 shadow-lg">
                            <span className="text-3xl">✨🦷✨</span>
                          </div>
                          <p className="text-xs text-center mt-1 text-teal-600">after</p>
                        </div>
                        {/* Arrow */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <ArrowRight className="w-8 h-8 text-teal-400" />
                        </div>
                        {/* Sparkles */}
                        <Sparkles className="absolute -top-4 right-4 w-5 h-5 text-yellow-400" />
                        <Sparkles className="absolute -bottom-2 left-8 w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#0B1E33]">up to 10 shades whiter</h3>
                    <p className="text-sm text-gray-500">in just one appointment</p>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">instant results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#2ac9c9] to-transparent opacity-25 my-10" />

          {/* Whitening Options */}
          <div className="mt-8">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              whitening options
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1 - In-Office */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Zap className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">in-office power whitening</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Our most popular option! Professional-grade bleaching with light activation 
                      for dramatic results in about 60 minutes.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">1 hour</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">8-10 shades</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">immediate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 2 - Take-Home */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Feather className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">custom take-home kits</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Professional-grade trays customized to your smile. Whiten at your 
                      convenience with the same materials used in our office.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">7-14 days</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">6-8 shades</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">flexible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              why choose professional whitening?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "safe & supervised", desc: "dentist-monitored for optimal results" },
                { icon: Gauge, title: "faster results", desc: "up to 10 shades in one visit" },
                { icon: Gem, title: "longer lasting", desc: "results last 1-3 years with care" },
                { icon: Droplet, title: "sensitive formula", desc: "options for sensitive teeth" },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure Steps */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              in-office procedure
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "consultation", desc: "evaluate your smile", icon: Camera },
                { step: "02", title: "preparation", desc: "protect gums", icon: Shield },
                { step: "03", title: "application", desc: "apply whitening gel", icon: Droplet },
                { step: "04", title: "activation", desc: "light activation", icon: Zap },
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

          {/* Stain Causes */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              common causes of staining
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Coffee, title: "coffee & tea", desc: "tannins cause yellowing" },
                { icon: Droplet, title: "red wine", desc: "deep pigments" },
                { icon: Activity, title: "tobacco", desc: "nicotine stains" },
                { icon: Sun, title: "aging", desc: "enamel thins with age" },
                { icon: Pill, title: "medications", desc: "tetracycline etc." },
                { icon: AlertCircle, title: "trauma", desc: "injury can darken teeth" },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-4 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all flex items-center gap-3">
                  <item.icon className="w-8 h-8 text-teal-600 shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#0B1E33]">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Before/After Care */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-600" />
                foods to avoid (first 48h)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span className="text-sm text-gray-600">Coffee, tea, red wine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span className="text-sm text-gray-600">Tomato sauce, curry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span className="text-sm text-gray-600">Berries, beets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span className="text-sm text-gray-600">Tobacco products</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-teal-600" />
                maintenance tips
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Use whitening toothpaste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Touch-up with take-home kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Avoid stain-causing foods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Regular dental cleanings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-500 rounded-[1.5rem] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">ready for a brighter smile?</h3>
                <p className="text-teal-100">See the difference professional whitening can make.</p>
                <p className="text-sm text-teal-200 mt-2">✓ free consultation ✓ financing available</p>
              </div>
              <button className="group flex items-center gap-2 bg-white text-teal-600 rounded-full px-8 py-4 font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap">
                <Sparkles className="w-5 h-5" />
                <span>book appointment</span>
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
                  <span className="text-teal-600 font-bold">5,000+</span> whitening treatments
                </p>
                <p className="text-xs text-gray-400">98% patient satisfaction</p>
              </div>
            </div>

            {/* Secondary Button */}
            <button className="group flex items-center gap-2 rounded-full px-8 py-3 font-medium border-2 border-teal-600 bg-white text-[#0B1E33] hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-teal-400/30">
              <span>view before/after</span>
              <ArrowRight className="w-4 h-4 group-hover:stroke-white transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 flex justify-between items-center mt-16">
            <span>© 2025 — Dr. Prity Raushan Dental Clinic · Teeth Whitening</span>
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

export default TeethWhitening;