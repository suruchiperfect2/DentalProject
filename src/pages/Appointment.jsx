import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight,
  Send,
  CheckCircle,
  MessageCircle,
  Bell
} from "lucide-react";

// Professional dental clinic image
const heroImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop";

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
    whatsappConsent: false,
    emailConsent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - Replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show confirmation messages based on user consent
      let confirmations = [];
      if (formData.whatsappConsent) confirmations.push("WhatsApp");
      if (formData.emailConsent) confirmations.push("Email");
      
      console.log(`Confirmation sent via: ${confirmations.join(", ")}`);
      
      // Success response
      setSubmitStatus('success');
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        treatment: "",
        date: "",
        time: "",
        message: "",
        whatsappConsent: false,
        emailConsent: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  // Treatment types
  const treatments = [
    "General Dentistry",
    "Cosmetic Dentistry", 
    "Orthodontics",
    "Pediatric Dentistry",
    "Dental Implants",
    "Root Canal",
    "Teeth Whitening",
    "Emergency Care"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Normal Image */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <img 
          src={heroImage}
          alt="Dental Clinic"
          className="w-full h-full object-cover"
        />
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Centered Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Book Your Appointment
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Appointment</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-slideDown">
            <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-green-700 font-medium">Appointment booked successfully!</p>
              <p className="text-green-600 text-sm mt-1">
                {formData.whatsappConsent && "✓ WhatsApp confirmation sent • "}
                {formData.emailConsent && "✓ Email confirmation sent"}
                {!formData.whatsappConsent && !formData.emailConsent && "We'll contact you shortly."}
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-slideDown">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">!</div>
            <p className="text-red-700 font-medium">Failed to book appointment. Please try again.</p>
          </div>
        )}

        {/* Modern Appointment Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Your Visit
            </h2>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-teal-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-teal-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-teal-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Treatment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Treatment Type <span className="text-teal-600">*</span>
                </label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50"
                  required
                >
                  <option value="">Select treatment</option>
                  {treatments.map((treatment, index) => (
                    <option key={index} value={treatment}>{treatment}</option>
                  ))}
                </select>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date <span className="text-teal-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time <span className="text-teal-600">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-gray-50/50 resize-none"
                  placeholder="Any specific requirements or concerns..."
                ></textarea>
              </div>

              {/* Confirmation Options */}
              <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                <h3 className="font-medium text-teal-800 mb-3 flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Get Confirmation Via
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsappConsent"
                      checked={formData.whatsappConsent}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">WhatsApp Confirmation</span>
                    </div>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full ml-auto">Instant</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="emailConsent"
                      checked={formData.emailConsent}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Email Confirmation</span>
                    </div>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-auto">Instant</span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  You'll receive instant confirmation on your chosen platform
                </p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500" 
                  required 
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a> and 
                  <a href="#" className="text-teal-600 hover:underline ml-1">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </>
                )}
              </button>

              {/* Quick Contact */}
              <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Need help? Call us at{' '}
                <a href="tel:+919876543210" className="text-teal-600 font-semibold hover:text-teal-700">
                  +91 98765 43210
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <p className="font-medium text-gray-800">Instant Confirmation</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">Booking Details</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Free</p>
              <p className="font-medium text-gray-800">Consultation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Appointment;