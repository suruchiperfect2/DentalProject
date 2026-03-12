// components/ServicePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Calendar, 
  ChevronRight, 
  Star, 
  CheckCircle, 
  Award,
  Users,
  Activity,
  Shield,
  Phone,
  Mail,
  MapPin,
  FileText,
  Heart,
  Sparkles,
  ArrowRight,
  Quote
} from "lucide-react";

const ServicePage = ({ 
  title, 
  description, 
  longDescription, 
  benefits, 
  procedure, 
  recovery,
  faqs,
  beforeAfter,
  relatedServices,
  heroImage,
  procedureImages,
  doctorNote,
  successRate,
  procedureTime,
  recoveryTime,
  longevity
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section with Teal Gradient */}
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-300 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-teal-100 mb-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Dental Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                {description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Activity className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{successRate || "98%"}</div>
                  <div className="text-xs text-teal-100">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-xs text-teal-100">Happy Patients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-teal-100">Years Exp.</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="group px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-soft-medical hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#learn-more"
                  className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage || "/api/placeholder/600/500"} 
                  alt={title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-400 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400 rounded-full filter blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Deep Navy Headings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="learn-more">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6 relative inline-block">
                Overview
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-4 bg-white rounded-2xl p-8 shadow-soft-medical">
                {longDescription}
              </div>
            </section>

            {/* Key Benefits with Icons */}
            <section className="bg-white rounded-3xl shadow-soft-medical p-8 md:p-10">
              <h2 className="text-3xl font-bold text-deep-navy mb-8 relative inline-block">
                Key Benefits
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft-medical">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Procedure with Images */}
            <section>
              <h2 className="text-3xl font-bold text-deep-navy mb-8 relative inline-block">
                Treatment Procedure
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
              </h2>
              <div className="space-y-6">
                {procedure.map((step, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-soft-medical overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      {/* Step Image */}
                      <div className="md:w-48 h-48 bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <span className="text-6xl font-bold text-white/30">{index + 1}</span>
                        </div>
                        {procedureImages && procedureImages[index] && (
                          <img 
                            src={procedureImages[index]} 
                            alt={`Step ${index + 1}`}
                            className="w-full h-full object-cover opacity-75"
                          />
                        )}
                      </div>
                      {/* Step Content */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-deep-navy">{step.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recovery & Aftercare with Soft Aqua Background */}
            {recovery && (
              <section className="bg-gradient-to-br from-teal-50 to-sky-50 rounded-3xl p-8 md:p-10 border border-teal-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-deep-navy">Recovery & Aftercare</h2>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">{recovery}</p>
                
                {/* Recovery Tips */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { icon: Clock, text: "Rest 24-48 hrs" },
                    { icon: Heart, text: "Soft diet" },
                    { icon: Activity, text: "Gentle care" },
                    { icon: Calendar, text: "Follow-up in 2 weeks" }
                  ].map((tip, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-soft-medical">
                      <tip.icon className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <span className="text-sm text-deep-navy font-medium">{tip.text}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Doctor's Note */}
            {doctorNote && (
              <section className="bg-white rounded-3xl shadow-soft-medical p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full filter blur-3xl opacity-50"></div>
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-lg italic mb-4">{doctorNote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-full overflow-hidden">
                        <img src="/api/placeholder/48/48" alt="Dr. Prity" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-deep-navy">Dr. Prity Raushan</p>
                        <p className="text-sm text-teal-600">Advanced Dental Care & Smile Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-deep-navy mb-8 relative inline-block">
                  Frequently Asked Questions
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></span>
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-soft-medical p-6 hover:shadow-xl transition-shadow">
                      <h3 className="text-lg font-semibold text-deep-navy mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-sm">
                          Q
                        </span>
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 pl-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar (1/3 width) */}
          <div className="space-y-8">
            
            {/* Quick Info Cards - Teal Gradient */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Treatment Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-teal-100">Procedure Time</p>
                    <p className="font-medium">{procedureTime || "60-90 minutes"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Activity className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-teal-100">Recovery Time</p>
                    <p className="font-medium">{recoveryTime || "2-3 days"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-teal-100">Longevity</p>
                    <p className="font-medium">{longevity || "10-15 years"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Gallery */}
            {beforeAfter && (
              <div className="bg-white rounded-3xl shadow-soft-medical p-6">
                <h3 className="text-lg font-semibold text-deep-navy mb-4">Before & After</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative group">
                    <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                      <img src="/api/placeholder/200/200" alt="Before" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="absolute top-2 left-2 bg-deep-navy/80 text-white text-xs px-2 py-1 rounded-full">Before</span>
                  </div>
                  <div className="relative group">
                    <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                      <img src="/api/placeholder/200/200" alt="After" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full">After</span>
                  </div>
                </div>
                <Link to="/gallery" className="block text-center text-teal-600 text-sm font-medium mt-4 hover:text-teal-700">
                  View More Results →
                </Link>
              </div>
            )}

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
              <div className="bg-white rounded-3xl shadow-soft-medical p-6">
                <h3 className="text-lg font-semibold text-deep-navy mb-4">Related Services</h3>
                <div className="space-y-2">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center justify-between p-3 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 group"
                    >
                      <span>{service.name}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-soft-medical p-6">
              <h3 className="text-lg font-semibold text-deep-navy mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 p-3 hover:bg-teal-50 rounded-xl transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Call us</p>
                    <p className="font-medium text-deep-navy">+91 98765 43210</p>
                  </div>
                </a>
                <a href="mailto:appointments@drpritydental.com" className="flex items-center gap-3 p-3 hover:bg-teal-50 rounded-xl transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email us</p>
                    <p className="font-medium text-deep-navy text-sm">appointments@drpritydental.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Visit us</p>
                    <p className="font-medium text-deep-navy text-sm">Healthcare City, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-6 text-white">
              <Sparkles className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Smile?</h3>
              <p className="text-teal-50 text-sm mb-6">Book a consultation with Dr. Prity Raushan today</p>
              <Link
                to="/appointment"
                className="block w-full px-6 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300 text-center shadow-soft-medical hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-deep-navy to-teal-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Premium Dental Care
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Let Dr. Prity Raushan give you the smile you deserve with advanced technology and personalized care
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/appointment"
                className="group px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300 shadow-soft-medical hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;