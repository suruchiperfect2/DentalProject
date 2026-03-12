import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  ChevronRight,
  Send,
  Award,
  Shield,
  Star,
  Calendar,
  User,
  Sparkles,
  Heart,
  BadgeCheck,
  ArrowRight,
  Navigation,
  ExternalLink,
  LocateFixed,
  Quote
} from "lucide-react";
import logo from "../assets/logo_no_background.png"; // Your logo import

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Dr. Prity", url: "/about" },
    { name: "Our Services", url: "/services" },
    { name: "Smile Gallery", url: "/gallery" },
    { name: "Patient Reviews", url: "/reviews" },
    { name: "Book Appointment", url: "/appointment" },
    { name: "Case Blogs", url: "/blogs" },
    { name: "Contact Us", url: "/contact" }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Happy Patient",
      content: "Dr. Prity transformed my smile completely! The care and attention to detail is exceptional. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108777-406fdbf5c6a3?w=150"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Regular Patient",
      content: "Best dental clinic in Mumbai. State-of-the-art equipment and very professional staff. My family has been coming here for years.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Smile Makeover Patient",
      content: "The results of my smile makeover exceeded my expectations. Dr. Prity is truly an artist!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
  ];

  const contactInfo = [
    { 
      Icon: Phone, 
      text: "+91 98765 43210", 
      sub: "Emergency 24/7",
      action: "tel:+919876543210"
    },
    { 
      Icon: Mail, 
      text: "appointments@drpritydental.com", 
      sub: "Email us anytime",
      action: "mailto:appointments@drpritydental.com"
    },
    { 
      Icon: Clock, 
      text: "Mon - Sat: 9:00 AM - 8:00 PM", 
      sub: "Sunday by appointment",
      action: "#"
    }
  ];

  const socialLinks = [
    { Icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" }
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            <span className="text-teal-600 font-medium tracking-widest text-sm">EXCELLENCE IN DENTISTRY</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Advanced Dental Care for Your 
            <span className="block font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mt-3">
              Perfect Smile
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience luxury dental care with personalized attention and advanced technology
          </p>
        </div>

        {/* Footer Grid - Updated Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="rounded-1xl">
                  <img
                    src={logo}
                    alt="Dr. Prity Raushan Dental Clinic"
                    className="h-13 w-15 object-contain"
                    
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-2.5 h-2.5 text-white fill-current" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Prity Raushan
                </h3>
                <p className="text-xs text-teal-600 font-medium flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" />
                  Advanced Dental Care
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-2 bg-white rounded-xl shadow-md flex items-center space-x-2">
                <Award className="w-3 h-3 text-teal-600" />
                <span className="text-xs font-medium text-gray-900">10+ Years</span>
              </div>
              <div className="px-3 py-2 bg-white rounded-xl shadow-md flex items-center space-x-2">
                <Shield className="w-3 h-3 text-teal-600" />
                <span className="text-xs font-medium text-gray-900">ISO Certified</span>
              </div>
              <div className="px-3 py-2 bg-white rounded-xl shadow-md flex items-center space-x-2">
                <User className="w-3 h-3 text-teal-600" />
                <span className="text-xs font-medium text-gray-900">5000+ Patients</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              Experience world-class dental care in a calm, luxurious environment. 
              Dr. Prity Raushan combines advanced technology with artistic precision.
            </p>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map(({ Icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-400 hover:to-teal-600 hover:shadow-xl transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Home & About */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-base mb-6 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {/* Home Link - Highlighted */}
              <li>
                <a 
                  href="/" 
                  className="group flex items-center text-gray-900 hover:text-teal-600 transition-all duration-300 text-sm font-medium"
                >
                  <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center mr-2 group-hover:bg-teal-200 transition-colors">
                    <span className="text-teal-600 text-xs">🏠</span>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </a>
              </li>
              {/* About Us Link - Highlighted */}
              <li>
                <a 
                  href="/about" 
                  className="group flex items-center text-gray-900 hover:text-teal-600 transition-all duration-300 text-sm font-medium"
                >
                  <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center mr-2 group-hover:bg-teal-200 transition-colors">
                    <User className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Dr. Prity</span>
                </a>
              </li>
              {/* Other Quick Links */}
              {quickLinks.slice(2).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="group flex items-center text-gray-600 hover:text-teal-600 transition-all duration-300 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials Section */}
          <div className="lg:col-span-4">
            <h3 className="text-gray-900 font-semibold text-base mb-6 relative inline-block">
              Patient Testimonials
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
            </h3>
            
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-teal-50"
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-teal-200"
                      />
                      <Quote className="w-3 h-3 text-teal-600 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-xs text-teal-600">{testimonial.role}</p>
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>
                      <p className="text-xs text-gray-600 italic">"{testimonial.content}"</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View All Reviews Link */}
              <a 
                href="/reviews" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm group mt-2"
              >
                <span>Read All Reviews</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Information Only */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold text-base mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
            </h3>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map(({ Icon, text, sub, action }, index) => (
                <a
                  key={index}
                  href={action}
                  className="group flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-teal-600 font-medium">{sub}</p>
                    <p className="text-gray-900 font-medium text-xs break-words">{text}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Simple Address Display - Non-interactive */}
            <div className="mt-4 p-4 bg-white rounded-xl shadow-md border border-teal-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm mb-1">Visit Us</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Shop No. 4, Sunshine Plaza<br />
                    MG Road, Bandra West<br />
                    Mumbai - 400050
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Banner */}
        <div className="mt-16 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl shadow-md border border-teal-100">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Ready for Your Smile Makeover?</h4>
                <p className="text-sm text-gray-600">Book a consultation today</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-medium rounded-full hover:from-teal-500 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 flex items-center gap-2 group">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs text-center md:text-left">
              <p>© 2026 Dr. Prity Raushan - Advanced Dental Care. All rights reserved.</p>
              <p className="text-gray-500 text-[10px] mt-1 flex items-center justify-center md:justify-start gap-2">
                <span>Crafting beautiful smiles with precision</span>
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                <span>Made with <Heart className="w-2.5 h-2.5 text-teal-400 inline" /> for your smile</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-[10px]">
              <a href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center space-x-1 group">
                <span>Privacy Policy</span>
                <ChevronRight className="w-2 h-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
              <a href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center space-x-1 group">
                <span>Terms of Use</span>
                <ChevronRight className="w-2 h-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center space-x-1 group">
                <span>Cookie Policy</span>
                <ChevronRight className="w-2 h-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center space-x-1 group">
                <span>Sitemap</span>
                <ChevronRight className="w-2 h-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;