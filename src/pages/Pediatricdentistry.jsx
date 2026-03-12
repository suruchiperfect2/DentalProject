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
  Baby,
  Sparkles,
  ToyBrick,
  Candy,
  Brush,
  Apple,
  Shield as ShieldIcon,
  Activity,
  Calendar,
  Gift,
  PartyPopper,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pediatricdentistry = () => {
  // Professional pediatric dentistry image
  const heroImage = "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          {/* Breadcrumb */}
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Link to="/" className="text-sm hover:text-teal-200 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="text-sm hover:text-teal-200 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-teal-200">Pediatric Dentistry</span>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-400/30">
              Ages 0-18
            </span>
            <span className="bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/30">
              Gentle Care
            </span>
            <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-400/30">
              Fun Environment
            </span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
            Pediatric Dentistry
            <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-300 mt-3 font-light">
              Happy Visits, Healthy Smiles for Life
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Specialized dental care for children and teens in a warm, friendly environment
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-teal-500 mt-8 rounded-full"></div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm text-teal-200">Happy Kids</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-teal-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-teal-200">Positive Visits</div>
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
                pediatric
                <span className="font-semibold ml-1 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  dentistry
                </span>
                <span className="text-sm font-normal text-gray-400 ml-2">kids & teens</span>
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
                happy visits,
                <span className="block bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] bg-clip-text text-transparent">
                  healthy smiles for life
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Specialized dental care for children and teens in a warm, friendly 
                environment. We make dental visits fun while building lifelong 
                healthy habits.
              </p>

              {/* Primary Button */}
              <button className="group flex items-center gap-2 bg-gradient-to-br from-[#2ac9c9] to-[#179b9b] rounded-full px-8 py-4 text-white font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-400/40 hover:scale-[1.02] transition-all duration-300 border border-white/25">
                <Calendar className="w-5 h-5" />
                <span>schedule visit</span>
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
                  sedation options
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-teal-600" />
                  flexible scheduling
                </span>
              </div>
            </div>

            {/* Right Side - Kids Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full bg-[#2ac9c9] opacity-5 absolute -top-10 right-0 blur-3xl"></div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] border border-teal-100">
                  <div className="flex flex-col items-center">
                    {/* Happy kid with tooth illustration */}
                    <div className="relative w-48 h-48 mb-4 flex items-center justify-center">
                      <div className="relative">
                        {/* Smiling face */}
                        <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center">
                          <div className="text-6xl mb-4">😊</div>
                        </div>
                        {/* Tooth friend */}
                        <div className="absolute -right-4 top-0">
                          <div className="w-16 h-16 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-3xl">🦷</span>
                          </div>
                        </div>
                        {/* Sparkles */}
                        <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-teal-500" />
                        {/* Gift */}
                        <Gift className="absolute -bottom-2 -right-2 w-5 h-5 text-amber-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#0B1E33]">first visit by age 1</h3>
                    <p className="text-sm text-gray-500">gentle, fun, educational</p>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">no fear dentistry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#2ac9c9] to-transparent opacity-25 my-10" />

          {/* Why Pediatric Dentistry */}
          <div className="mt-8">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              why choose pediatric dentistry?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Baby className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">specialized training</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  2-3 years additional training after dental school focused on child development, 
                  psychology, and special needs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Heart className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">child-friendly environment</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Colorful decor, toys, games, and positive reinforcement to make dental visits exciting.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <Activity className="w-10 h-10 mb-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium mb-2 text-[#0B1E33]">preventive focus</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Early detection and prevention of cavities, growth monitoring, and habit counseling.
                </p>
              </div>
            </div>
          </div>

          {/* Services for Kids */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              services for little smiles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brush className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">preventive care</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Cleanings, fluoride treatments, and sealants to protect young teeth.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  learn more <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ToyBrick className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">early orthodontics</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Interceptive treatment for growing jaws and emerging teeth.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  learn more <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Candy className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">fillings</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Tooth-colored restorations for cavities in baby and permanent teeth.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  learn more <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Apple className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">nutrition counseling</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Diet advice for healthy teeth and cavity prevention.
                </p>
                <span className="text-xs text-teal-600 flex items-center gap-1 hover:gap-2 transition-all">
                  learn more <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Age Groups */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              care through every stage
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { age: "infants & toddlers", years: "0-3", focus: "first visit, teething, habits", icon: Baby },
                { age: "early childhood", years: "4-7", focus: "prevention, sealants, growth", icon: Sparkles },
                { age: "tweens & teens", years: "8-18", focus: "orthodontics, wisdom teeth", icon: Smile },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all">
                  <item.icon className="w-10 h-10 mb-4 text-teal-600" />
                  <h3 className="text-xl font-medium mb-1 text-[#0B1E33] capitalize">{item.age}</h3>
                  <p className="text-sm text-teal-600 mb-2">{item.years}</p>
                  <p className="text-sm text-gray-500">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* First Visit Guide */}
          <div className="mt-16">
            <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
              <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
              your child's first visit
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "welcome", desc: "friendly tour & meet team", icon: Smile },
                { step: "02", title: "ride", desc: "fun chair ride", icon: ToyBrick },
                { step: "03", title: "count", desc: "gentle tooth count", icon: Brush },
                { step: "04", title: "reward", desc: "prize & high-five", icon: Gift },
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

          {/* Tips for Parents */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-teal-600" />
                healthy habits at home
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Start brushing as soon as first tooth appears</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Use fluoride toothpaste (rice-sized for under 3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Limit sugary snacks and drinks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Avoid putting baby to bed with bottle</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100">
              <h3 className="text-xl font-medium text-[#0B1E33] mb-4 flex items-center gap-2">
                <ShieldIcon className="w-5 h-5 text-teal-600" />
                preparing for visit
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Talk positively about the dentist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Read children's books about dental visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Bring comfort item if needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Arrive early for relaxed experience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-500 rounded-[1.5rem] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">start early for a lifetime of smiles</h3>
                <p className="text-teal-100">Book your child's first visit today and receive a welcome gift!</p>
                <p className="text-sm text-teal-200 mt-2">✓ gentle first visit ✓ prize for every child</p>
              </div>
              <button className="group flex items-center gap-2 bg-white text-teal-600 rounded-full px-8 py-4 font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap">
                <PartyPopper className="w-5 h-5" />
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
                  <span className="text-teal-600 font-bold">5000+</span> happy kids treated
                </p>
                <p className="text-xs text-gray-400">98% positive visits</p>
              </div>
            </div>

            {/* Secondary Button */}
            <button className="group flex items-center gap-2 rounded-full px-8 py-3 font-medium border-2 border-teal-600 bg-white text-[#0B1E33] hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-teal-400/30">
              <span>see fun photos</span>
              <ArrowRight className="w-4 h-4 group-hover:stroke-white transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 flex justify-between items-center mt-16">
            <span>© 2025 — Dr. Prity Raushan Dental Clinic · Pediatric Dentistry</span>
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

export default Pediatricdentistry;