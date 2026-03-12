// src/pages/Dentaltreatment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bone, 
  Sparkles, 
  Stethoscope, 
  Smile, 
  Calendar, 
  Clock, 
  Phone, 
  Mail,
  Award,
  Users,
  Star,
  ChevronRight,
  Shield,
  Zap,
  Heart,
  Activity,
  Camera,
  Mic,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Dentaltreatment = () => {
  // Professional dental treatment image
  const heroImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  // Treatment services
  const treatments = [
    {
      title: "General Dentistry",
      description: "Routine checkups, cleanings, fillings, and preventive care",
      icon: Stethoscope
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers",
      icon: Sparkles
    },
    {
      title: "Restorative Dentistry",
      description: "Crowns, bridges, implants, and dentures",
      icon: Bone
    },
    {
      title: "Orthodontics",
      description: "Braces and clear aligners for straight teeth",
      icon: Activity
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle care for children of all ages",
      icon: Smile
    },
    {
      title: "Emergency Care",
      description: "24/7 urgent dental care when you need it",
      icon: Zap
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Pain-Free Procedures",
      description: "Modern anesthesia and gentle techniques",
      icon: Shield
    },
    {
      title: "Expert Specialists",
      description: "Experienced team with advanced training",
      icon: Award
    },
    {
      title: "Personalized Care",
      description: "Treatment plans tailored to your needs",
      icon: Heart
    },
    {
      title: "Modern Technology",
      description: "Digital X-rays, 3D imaging, and more",
      icon: Camera
    }
  ];

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
            <span className="text-sm text-teal-200">Dental Treatment</span>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-400/30">
              Comprehensive Care
            </span>
            <span className="bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/30">
              Pain-Free Procedures
            </span>
            <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-400/30">
              Expert Team
            </span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
            Dental Treatment
            <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-300 mt-3 font-light">
              Comprehensive Care for Your Smile
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Advanced dental treatments in a comfortable, caring environment
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-teal-500 mt-8 rounded-full"></div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-teal-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-teal-200">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-teal-200">Patient Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-[0_30px_40px_-20px_rgba(11,30,51,0.15)] p-8 md:p-12 border border-teal-200/30">
          
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-navy mb-4">Advanced Dental Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dental treatments are designed to provide you with the highest quality care 
              using the latest technology and techniques.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-teal-50/50 rounded-xl p-6 shadow-soft-medical border border-teal-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Treatments Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Our Treatment Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft-medical border border-teal-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                      <treatment.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-navy mb-2">{treatment.title}</h3>
                      <p className="text-sm text-gray-600">{treatment.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Row */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Detailed Info */}
            <div>
              <h2 className="text-3xl font-bold text-deep-navy mb-6">Why Choose Our Dental Care?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-navy mb-2">Experienced Specialists</h3>
                    <p className="text-gray-600">Our team of dental experts brings years of experience and advanced training to every procedure.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-navy mb-2">Modern Technology</h3>
                    <p className="text-gray-600">We use the latest dental technology for precise diagnoses and comfortable treatments.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-navy mb-2">Personalized Care</h3>
                    <p className="text-gray-600">Every treatment plan is customized to meet your unique needs and goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-navy mb-2">Comfortable Environment</h3>
                    <p className="text-gray-600">Relax in our modern, welcoming facility designed with your comfort in mind.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Appointment Booking */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-soft-medical border border-teal-200">
              <h2 className="text-2xl font-bold text-deep-navy mb-6">Book Your Consultation</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600 p-3 bg-white rounded-xl">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 p-3 bg-white rounded-xl">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span>drprityraushan@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 p-3 bg-white rounded-xl">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 p-3 bg-white rounded-xl">
                  <Users className="w-5 h-5 text-teal-600" />
                  <span>Sun: By Appointment</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                <Calendar className="w-5 h-5" />
                Schedule Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="mt-6 flex justify-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-600">4.9 (500+ reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span className="text-sm text-gray-600">Award Winning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Preview */}
          <div className="mt-16 p-8 bg-gradient-to-br from-teal-600 to-teal-500 rounded-2xl text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
              <p className="text-teal-100">Real stories from real patients</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">"Excellent dental care! The team is professional, friendly, and made me feel comfortable throughout my treatment."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-300 flex items-center justify-center">
                      <span className="text-teal-800 font-bold">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-teal-200">Happy Patient</p>
                    </div>
                  </div>
                </div>
              ))}
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
                <p className="text-deep-navy font-medium">
                  <span className="text-teal-600 font-bold">1000+</span> 5-star reviews
                </p>
                <p className="text-xs text-gray-400">Trusted by our community</p>
              </div>
            </div>

            {/* Secondary Button */}
            <button className="group flex items-center gap-2 rounded-full px-8 py-3 font-medium border-2 border-teal-600 bg-white text-deep-navy hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-teal-400/30">
              <span>view all testimonials</span>
              <ArrowRight className="w-4 h-4 group-hover:stroke-white transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 flex justify-between items-center mt-16">
            <span>© 2025 — Dr. Prity Raushan Dental Clinic · Dental Treatments</span>
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

export default Dentaltreatment;