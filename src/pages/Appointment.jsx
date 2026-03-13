import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
    isFirstVisit: false,
    hasInsurance: false,
    insuranceProvider: "",
    preferredDoctor: "",
    consentSMS: true,
    consentWhatsApp: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confirmationMethod, setConfirmationMethod] = useState("all");
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState({});
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showBookingSummary, setShowBookingSummary] = useState(false);

  // Updated images with dental/medical theme
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      title: "Modern Dental Care",
      quote: "Experience the future of dentistry today"
    },
    {
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Expert Specialists",
      quote: "Your smile is in safe hands"
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Pain-Free Treatments",
      quote: "Comfortable care for every patient"
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Beautiful Smiles",
      quote: "Transform your smile today"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Update available time slots based on selected date
  useEffect(() => {
    if (formData.date) {
      // Simulate fetching available slots from API
      const date = new Date(formData.date);
      const day = date.getDay();
      
      // Different slots based on day of week
      if (day === 0) { // Sunday
        setAvailableSlots(["10:00 AM", "11:00 AM", "12:00 PM"]); // Emergency only
      } else if (day === 6) { // Saturday
        setAvailableSlots([
          "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
          "02:00 PM", "03:00 PM", "04:00 PM"
        ]);
      } else { // Weekdays
        setAvailableSlots([
          "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
          "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
          "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"
        ]);
      }
    }
  }, [formData.date]);

  // Advanced time slots with real-time availability
  const timeSlots = availableSlots.map(time => ({
    time,
    available: true,
    peak: ["10:00 AM", "11:00 AM", "04:00 PM", "05:00 PM"].includes(time)
  }));

  // Enhanced services with more details
  const services = [
    { 
      value: "Teeth Cleaning", 
      label: "🦷 Teeth Cleaning", 
      duration: "30 min", 
      price: "₹500",
      description: "Professional cleaning and polishing",
      preparation: "No special preparation needed"
    },
    { 
      value: "Root Canal Treatment", 
      label: "🔬 Root Canal Treatment", 
      duration: "60-90 min", 
      price: "₹2000-₹5000",
      description: "Save your natural tooth",
      preparation: "Avoid eating 2 hours before"
    },
    { 
      value: "Dental Implants", 
      label: "🦷 Dental Implants", 
      duration: "90 min", 
      price: "₹5000-₹15000",
      description: "Permanent tooth replacement",
      preparation: "Consultation required first"
    },
    { 
      value: "Braces & Aligners", 
      label: "😁 Braces & Aligners", 
      duration: "45 min", 
      price: "₹3000-₹8000",
      description: "Straighten your teeth",
      preparation: "Bring previous dental records"
    },
    { 
      value: "Teeth Whitening", 
      label: "✨ Teeth Whitening", 
      duration: "60 min", 
      price: "₹2500-₹4000",
      description: "Get 2-3 shades lighter",
      preparation: "No coffee/tea before procedure"
    },
    { 
      value: "Cosmetic Dentistry", 
      label: "💫 Cosmetic Dentistry", 
      duration: "60 min", 
      price: "₹3500-₹10000",
      description: "Enhance your smile",
      preparation: "Consultation required"
    },
    { 
      value: "Dental Crowns", 
      label: "👑 Dental Crowns", 
      duration: "75 min", 
      price: "₹4000-₹8000",
      description: "Restore damaged teeth",
      preparation: "Previous X-rays helpful"
    },
    { 
      value: "Kids Dentistry", 
      label: "👶 Kids Dentistry", 
      duration: "30 min", 
      price: "₹400-₹1000",
      description: "Gentle care for children",
      preparation: "Bring favorite toy for comfort"
    },
    { 
      value: "Emergency Care", 
      label: "🚑 Emergency Care", 
      duration: "Immediate", 
      price: "₹1000-₹3000",
      description: "24/7 emergency services",
      preparation: "Call ahead for immediate assistance"
    },
    { 
      value: "Gum Treatment", 
      label: "🌿 Gum Treatment", 
      duration: "45 min", 
      price: "₹1500-₹3500",
      description: "Healthy gums, healthy smile",
      preparation: "Avoid mouthwash before visit"
    }
  ];

  // Doctors list
  const doctors = [
    { id: "dr-prity", name: "Dr. Prity Raushan", specialization: "Chief Dental Surgeon", experience: "15+ years", image: "👩‍⚕️" },
    { id: "dr-sharma", name: "Dr. Amit Sharma", specialization: "Orthodontist", experience: "12+ years", image: "👨‍⚕️" },
    { id: "dr-patel", name: "Dr. Neha Patel", specialization: "Periodontist", experience: "10+ years", image: "👩‍⚕️" },
    { id: "dr-khan", name: "Dr. Imran Khan", specialization: "Implantologist", experience: "8+ years", image: "👨‍⚕️" }
  ];

  // Insurance providers
  const insuranceProviders = [
    "MediBuddy", "ICICI Lombard", "Star Health", "Bajaj Allianz", 
    "HDFC Ergo", "Care Health", "ManipalCigna", "Aditya Birla",
    "NIA", "New India Assurance", "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Show booking summary when key fields are filled
    if (['service', 'date', 'time'].includes(name) && value) {
      setShowBookingSummary(true);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    
    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }
    
    if (!formData.time) {
      newErrors.time = "Please select a time slot";
    }

    if (formData.hasInsurance && !formData.insuranceProvider) {
      newErrors.insuranceProvider = "Please select insurance provider";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get service details
  const getServiceDetails = (serviceValue) => {
    return services.find(s => s.value === serviceValue) || {};
  };

  // Get doctor details
  const getDoctorDetails = (doctorId) => {
    return doctors.find(d => d.id === doctorId) || {};
  };

  // Send detailed WhatsApp message
  const sendWhatsAppConfirmation = () => {
    const serviceDetails = getServiceDetails(formData.service);
    const doctorDetails = getDoctorDetails(formData.preferredDoctor);
    
    const message = `🦷 *APPOINTMENT CONFIRMED - Dr. Prity Raushan Dental Clinic* 🦷

Hello *${formData.fullName}*,

Your dental appointment has been successfully booked. Here are your complete details:

━━━━━━━━━━━━━━━━━━━━━
📋 *APPOINTMENT DETAILS*
━━━━━━━━━━━━━━━━━━━━━
🏥 *Service:* ${formData.service}
📝 *Description:* ${serviceDetails.description || "N/A"}
⏱️ *Duration:* ${serviceDetails.duration || "N/A"}
💰 *Estimated Fee:* ${serviceDetails.price || "Contact clinic"}
📅 *Date:* ${formatDate(formData.date)}
⏰ *Time:* ${formData.time}
👨‍⚕️ *Doctor:* ${doctorDetails.name || "Available Specialist"}
━━━━━━━━━━━━━━━━━━━━━

📍 *CLINIC LOCATION*
Dr. Prity Raushan Dental Clinic
123 Dental Street, Medical District
New Delhi - 110001
🔗 https://maps.google.com/?q=Clinic+Location

📞 *CONTACT NUMBERS*
• Appointment: +91 98765 43210
• Emergency (24/7): +91 98765 43211
• WhatsApp: +91 98765 43212

⏰ *CLINIC HOURS*
Monday - Saturday: 9:00 AM - 7:00 PM
Sunday: Emergency Only (10 AM - 2 PM)

📝 *PREPARATION GUIDELINES*
${serviceDetails.preparation || "• Please arrive 10 minutes before your appointment"}

📋 *DOCUMENTS TO BRING*
• Valid ID proof (Aadhar/PAN/Passport)
• Previous dental records/X-rays (if any)
• Insurance card (if applicable)
• List of current medications

✅ *YOUR PREFERENCES*
• First Visit: ${formData.isFirstVisit ? 'Yes' : 'No'}
• Insurance: ${formData.hasInsurance ? 'Yes - ' + (formData.insuranceProvider || 'Not specified') : 'No'}
• SMS Updates: ${formData.consentSMS ? '✓ Enabled' : '✗ Disabled'}
• WhatsApp Updates: ${formData.consentWhatsApp ? '✓ Enabled' : '✗ Disabled'}

${formData.message ? `📌 *YOUR MESSAGE*: "${formData.message}"` : ''}

━━━━━━━━━━━━━━━━━━━━━
*Need to reschedule or cancel?*
📞 Call: +91 98765 43210
💬 WhatsApp: +91 98765 43212
📧 Email: appointments@dentalclinic.com
⏰ Please notify at least 24 hours in advance
━━━━━━━━━━━━━━━━━━━━━

Thank you for choosing us for your dental care!
🦷 *Dr. Prity Raushan and Team*`;

    // Format phone number (remove non-digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Send Email confirmation
  const sendEmailConfirmation = () => {
    const serviceDetails = getServiceDetails(formData.service);
    const doctorDetails = getDoctorDetails(formData.preferredDoctor);
    
    const subject = "Appointment Confirmation - Dr. Prity Raushan Dental Clinic";
    const body = `Dear ${formData.fullName},

Your dental appointment has been successfully booked at Dr. Prity Raushan's Clinic.

══════════════════════════════════════
APPOINTMENT DETAILS
══════════════════════════════════════
Service: ${formData.service}
Description: ${serviceDetails.description || "N/A"}
Duration: ${serviceDetails.duration || "N/A"}
Estimated Fee: ${serviceDetails.price || "Contact clinic"}
Date: ${formatDate(formData.date)}
Time: ${formData.time}
Doctor: ${doctorDetails.name || "Available Specialist"}
══════════════════════════════════════

CLINIC LOCATION:
Dr. Prity Raushan Dental Clinic
123 Dental Street, Medical District
New Delhi - 110001
Google Maps: https://maps.google.com/?q=Clinic+Location

CONTACT INFORMATION:
• Phone: +91 98765 43210
• Emergency: +91 98765 43211
• Email: appointments@dentalclinic.com
• WhatsApp: +91 98765 43212

CLINIC HOURS:
Monday - Saturday: 9:00 AM - 7:00 PM
Sunday: Emergency Only (10 AM - 2 PM)

PREPARATION GUIDELINES:
${serviceDetails.preparation || "• Please arrive 10 minutes before your scheduled appointment"}

DOCUMENTS TO BRING:
• Valid ID proof (Aadhar/PAN/Passport)
• Previous dental records or X-rays
• Insurance card (if applicable)
• List of current medications

YOUR PREFERENCES:
• First Visit: ${formData.isFirstVisit ? 'Yes' : 'No'}
• Insurance: ${formData.hasInsurance ? 'Yes - ' + (formData.insuranceProvider || 'Not specified') : 'No'}
• SMS Updates: ${formData.consentSMS ? 'Enabled' : 'Disabled'}
• WhatsApp Updates: ${formData.consentWhatsApp ? 'Enabled' : 'Disabled'}

${formData.message ? `YOUR MESSAGE TO US: "${formData.message}"` : ''}

══════════════════════════════════════
To reschedule or cancel:
Call: +91 98765 43210
Email: appointments@dentalclinic.com
Please notify at least 24 hours in advance
══════════════════════════════════════

Thank you for choosing Dr. Prity Raushan Dental Clinic!

Best regards,
Dr. Prity Raushan and Team`;

    // Create mailto link
    const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Make phone call
  const makePhoneCall = (type = 'clinic') => {
    const numbers = {
      clinic: '+919876543210',
      emergency: '+919876543211',
      whatsapp: '+919876543212'
    };
    
    const phoneNumber = numbers[type] || numbers.clinic;
    window.location.href = `tel:${phoneNumber}`;
  };

  // Send SMS
  const sendSMS = () => {
    const message = `Appointment with Dr. Prity Raushan on ${formatDate(formData.date)} at ${formData.time}. Reply Y to confirm.`;
    const smsLink = `sms:+919876543210?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  // Handle confirmation based on selected method
  const handleConfirmations = () => {
    switch(confirmationMethod) {
      case 'whatsapp':
        if (formData.consentWhatsApp) sendWhatsAppConfirmation();
        break;
      case 'email':
        sendEmailConfirmation();
        break;
      case 'call':
        makePhoneCall('clinic');
        break;
      case 'all':
      default:
        // Send confirmations based on consent
        if (formData.consentWhatsApp) sendWhatsAppConfirmation();
        sendEmailConfirmation();
        if (formData.consentSMS) setTimeout(() => sendSMS(), 2000);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstError}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setShowSuccess(true);
      
      // Send confirmations based on selected method
      handleConfirmations();
      
      setIsSubmitting(false);
      
      // Hide success message after 8 seconds
      setTimeout(() => setShowSuccess(false), 8000);
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
        isFirstVisit: false,
        hasInsurance: false,
        insuranceProvider: "",
        preferredDoctor: "",
        consentSMS: true,
        consentWhatsApp: true
      });
      setShowBookingSummary(false);
    }, 1500);
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  // Calculate next available date
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextWeekStr = nextWeek.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Hero Section with Slideshow - Navy Blue Headings */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Slides */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/70 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Slide Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30 text-white">
                ✦ {slides[currentSlide].title} ✦
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
                Book Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  Appointment
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 italic">
                                "{slides[currentSlide].quote}"
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 border border-white/30 text-sm md:text-base hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Emergency Call
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md hover:bg-teal-500/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 border border-white/30 text-sm md:text-base hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2 6.58 2 12.04c0 1.86.52 3.6 1.42 5.08L2.3 21.7l4.58-1.12c1.48.9 3.22 1.42 5.08 1.42 5.46 0 10.04-4.58 10.04-10.04C22 6.58 17.46 2 12.04 2zM17 14.46c-.24.72-1.2 1.32-1.98 1.46-.78.14-1.44.14-2.04-.04-.64-.18-1.44-.6-2.58-1.74-1.14-1.14-1.56-1.94-1.74-2.58-.18-.6-.18-1.26-.04-2.04.14-.78.74-1.74 1.46-1.98.22-.08.44-.08.6-.08h.4c.18 0 .36.1.44.24.24.36.62.96.68 1.04.06.08.1.18.06.3-.04.12-.08.2-.14.28-.06.08-.12.16-.18.24-.06.08-.12.16-.1.26.02.1.1.2.2.36.14.22.36.54.64.82.28.28.6.5.82.64.16.1.26.18.36.2.1.02.18-.04.26-.1.08-.06.16-.12.24-.18.08-.06.16-.12.28-.14.12-.04.22 0 .3.06.08.06.68.52 1.04.68.16.08.24.16.28.24.04.08.04.22-.02.36z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 md:w-12 h-2 md:h-3 bg-gradient-to-r from-teal-400 to-cyan-400'
                  : 'w-2 h-2 md:w-3 md:h-3 bg-white/50 hover:bg-white/80'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-20 hover:shadow-lg hover:shadow-teal-500/20"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-20 hover:shadow-lg hover:shadow-teal-500/20"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Quick Contact Bar - Teal Gradient */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 md:py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12 text-sm md:text-base">
            <a href="tel:+919876543210" className="flex items-center gap-1 md:gap-2 hover:text-teal-100 transition-colors group">
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 hover:text-teal-100 transition-colors group">
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2 6.58 2 12.04c0 1.86.52 3.6 1.42 5.08L2.3 21.7l4.58-1.12c1.48.9 3.22 1.42 5.08 1.42 5.46 0 10.04-4.58 10.04-10.04C22 6.58 17.46 2 12.04 2z"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a href="mailto:appointments@dentalclinic.com" className="flex items-center gap-1 md:gap-2 hover:text-teal-100 transition-colors group">
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Email</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href="#booking" className="flex items-center gap-1 md:gap-2 hover:text-teal-100 transition-colors group">
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <section id="booking" className="relative py-12 md:py-16 lg:py-20">
        {/* Background Decorative Elements - Soft Aqua Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-48 md:w-72 h-48 md:h-72 bg-teal-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 md:w-72 h-48 md:h-72 bg-cyan-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header - Navy Blue Headings */}
          <div 
            data-section="header"
            className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${
              isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block text-teal-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 bg-teal-50 px-3 md:px-4 py-1 md:py-2 rounded-full shadow-sm">
              Schedule Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 md:mb-6">
              Ready for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Perfect Smile?
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below with your preferences and choose your confirmation method.
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl md:rounded-2xl shadow-lg animate-fadeIn">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2540] mb-1">Appointment Confirmed!</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Check your {confirmationMethod === 'all' ? 'WhatsApp and Email' : confirmationMethod} for complete details.
                    A confirmation has been sent to {formData.phone} and {formData.email}.
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Form Container - Clean White with Soft Shadow */}
          <div 
            data-section="form"
            className={`bg-white/95 backdrop-blur-sm shadow-xl md:shadow-2xl rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-12 border border-gray-100 transition-all duration-1000 delay-200 transform ${
              isVisible.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              
              {/* Personal Information Grid */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {/* Full Name */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Full Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full border ${
                      errors.fullName ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                    } rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:border-transparent transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs md:text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone Number *
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full border ${
                      errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                    } rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:border-transparent transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md`}
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs md:text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.phone}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2 6.58 2 12.04c0 1.86.52 3.6 1.42 5.08L2.3 21.7l4.58-1.12c1.48.9 3.22 1.42 5.08 1.42 5.46 0 10.04-4.58 10.04-10.04C22 6.58 17.46 2 12.04 2z"/>
                      </svg>
                      WhatsApp confirmation will be sent here
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Address *
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full border ${
                      errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                    } rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:border-transparent transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md`}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs md:text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email confirmation will be sent here
                    </p>
                  )}
                </div>
              </div>

              {/* Advanced Preferences Section */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* First Visit Checkbox */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-all">
                  <input
                    type="checkbox"
                    name="isFirstVisit"
                    id="isFirstVisit"
                    checked={formData.isFirstVisit}
                    onChange={handleChange}
                    className="w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                  />
                  <label htmlFor="isFirstVisit" className="text-sm md:text-base text-gray-700 cursor-pointer">
                    <span className="font-semibold">First Visit?</span>
                    <span className="block text-xs text-gray-500">Get welcome discount and free consultation</span>
                  </label>
                </div>

                {/* Insurance Checkbox with Conditional Dropdown */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="checkbox"
                      name="hasInsurance"
                      id="hasInsurance"
                      checked={formData.hasInsurance}
                      onChange={handleChange}
                      className="w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="hasInsurance" className="text-sm md:text-base text-gray-700 cursor-pointer font-semibold">
                      I have Health Insurance
                    </label>
                  </div>
                  
                  {formData.hasInsurance && (
                    <div className="ml-8 mt-2">
                      <select
                        name="insuranceProvider"
                        value={formData.insuranceProvider}
                        onChange={handleChange}
                        className={`w-full border ${
                          errors.insuranceProvider ? 'border-red-300' : 'border-gray-200'
                        } rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none`}
                      >
                        <option value="">Select Insurance Provider</option>
                        {insuranceProviders.map(provider => (
                          <option key={provider} value={provider}>{provider}</option>
                        ))}
                      </select>
                      {errors.insuranceProvider && (
                        <p className="mt-1 text-xs text-red-600">{errors.insuranceProvider}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Appointment Details Grid */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {/* Service Selection with Details */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Select Service *
                    </span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.service ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                    } rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:border-transparent transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md`}
                  >
                    <option value="">Choose a service</option>
                    {services.map(service => (
                      <option key={service.value} value={service.value} title={service.description}>
                        {service.label} - {service.duration} ({service.price})
                      </option>
                    ))}
                  </select>
                  {formData.service && (
                    <p className="mt-1 text-xs text-teal-600">
                      {getServiceDetails(formData.service).description}
                    </p>
                  )}
                  {errors.service && (
                    <p className="mt-1 text-xs md:text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Date Picker with Availability */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Preferred Date *
                    </span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    max={nextWeekStr}
                    className={`w-full border ${
                      errors.date ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                    } rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:border-transparent transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md`}
                  />
                  {formData.date && (
                    <p className="mt-1 text-xs text-teal-600">
                      {availableSlots.length} slots available on this date
                    </p>
                  )}
                  {errors.date && (
                    <p className="mt-1 text-xs md:text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Slot Selection with Peak Hours Indicator */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <span className="flex items-center gap-1 md:gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Preferred Time *
                    </span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    disabled={!formData.date}
                    className={`w-full border ${
                      errors.time ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                    } rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:border-transparent transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md disabled:bg-gray-100 disabled:cursor-not-allowed`}
                  >
                    <option value="">{formData.date ? "Select a time slot" : "Choose date first"}</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.time} value={slot.time} disabled={!slot.available}>
                        {slot.time} {slot.peak ? '🌤️ (Peak)' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-1 text-xs md:text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Doctor Preference */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Preferred Doctor (Optional)
                  </span>
                </label>
                <select
                  name="preferredDoctor"
                  value={formData.preferredDoctor}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md"
                >
                  <option value="">Any available specialist</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.image} {doctor.name} - {doctor.specialization} ({doctor.experience})
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600 group-focus-within:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Additional Message (Optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us about your dental concerns, allergies, or special requirements..."
                  className="w-full border border-gray-200 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md resize-none"
                ></textarea>
              </div>

              {/* Consent Preferences */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <input
                    type="checkbox"
                    name="consentSMS"
                    id="consentSMS"
                    checked={formData.consentSMS}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                  />
                  <label htmlFor="consentSMS" className="text-xs md:text-sm text-gray-600">
                    Receive SMS updates
                  </label>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <input
                    type="checkbox"
                    name="consentWhatsApp"
                    id="consentWhatsApp"
                    checked={formData.consentWhatsApp}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                  />
                  <label htmlFor="consentWhatsApp" className="text-xs md:text-sm text-gray-600">
                    Receive WhatsApp updates
                  </label>
                </div>
              </div>

              {/* Booking Summary */}
              {showBookingSummary && formData.service && formData.date && formData.time && (
                <div className="p-4 md:p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100 animate-fadeIn">
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2540] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Booking Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Service</p>
                      <p className="font-semibold text-[#0A2540]">{formData.service}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date</p>
                      <p className="font-semibold text-[#0A2540]">{formatDate(formData.date)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Time</p>
                      <p className="font-semibold text-[#0A2540]">{formData.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-semibold text-[#0A2540]">{getServiceDetails(formData.service).duration}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirmation Method Selection - Teal Gradient */}
              <div className="p-4 md:p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100 shadow-sm">
                <h3 className="text-base md:text-lg font-semibold text-[#0A2540] mb-3 md:mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Confirmation Method
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                  {[
                    { id: 'all', label: 'All Methods', icon: '📱💌', color: 'teal' },
                    { id: 'whatsapp', label: 'WhatsApp', icon: '📱', color: 'teal' },
                    { id: 'email', label: 'Email', icon: '📧', color: 'cyan' },
                    { id: 'call', label: 'Phone Call', icon: '📞', color: 'teal' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setConfirmationMethod(method.id)}
                      className={`p-2 md:p-3 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                        confirmationMethod === method.id
                          ? method.color === 'teal' 
                            ? 'border-teal-500 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md scale-105' 
                            : 'border-cyan-500 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-md scale-105'
                          : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md text-gray-700'
                      }`}
                    >
                      <div className="text-xl md:text-2xl mb-1">{method.icon}</div>
                      <div className="text-xs md:text-sm font-medium">
                        {method.label}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 flex items-center gap-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  You'll receive confirmation via your selected method(s)
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <button
                  type="button"
                  onClick={() => makePhoneCall('clinic')}
                  className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 rounded-lg hover:from-teal-100 hover:to-teal-200 transition-all duration-300 text-xs md:text-sm shadow-sm hover:shadow-md border border-teal-200"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Clinic
                </button>
                <button
                  type="button"
                  onClick={() => makePhoneCall('emergency')}
                  className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 rounded-lg hover:from-red-100 hover:to-red-200 transition-all duration-300 text-xs md:text-sm shadow-sm hover:shadow-md border border-red-200"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Emergency
                </button>
                <button
                  type="button"
                  onClick={sendSMS}
                  className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-lg hover:from-cyan-100 hover:to-cyan-200 transition-all duration-300 text-xs md:text-sm shadow-sm hover:shadow-md border border-cyan-200"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Send SMS
                </button>
              </div>

              {/* Submit Button - Teal Gradient with Glow */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex items-center justify-center px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/30 text-sm md:text-base ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2 md:gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Confirm Appointment
                        <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            {/* Contact Info - Teal Icons */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0A2540] mb-1 text-sm md:text-base">Call Us</h3>
                  <p className="text-xs text-gray-500 mb-1 md:mb-2">24/7 Emergency</p>
                  <a href="tel:+919876543210" className="text-teal-600 hover:text-teal-700 font-medium text-xs md:text-sm transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-full mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0A2540] mb-1 text-sm md:text-base">Email Us</h3>
                  <p className="text-xs text-gray-500 mb-1 md:mb-2">Get reply within 24hrs</p>
                  <a href="mailto:appointments@dentalclinic.com" className="text-cyan-600 hover:text-cyan-700 font-medium text-xs md:text-sm transition-colors">
                    appointments@dentalclinic.com
                  </a>
                </div>
                <div className="text-center sm:col-span-2 md:col-span-1 group">
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2 6.58 2 12.04c0 1.86.52 3.6 1.42 5.08L2.3 21.7l4.58-1.12c1.48.9 3.22 1.42 5.08 1.42 5.46 0 10.04-4.58 10.04-10.04C22 6.58 17.46 2 12.04 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0A2540] mb-1 text-sm md:text-base">WhatsApp</h3>
                  <p className="text-xs text-gray-500 mb-1 md:mb-2">Quick response</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 font-medium text-xs md:text-sm transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features - Navy Blue Headings */}
          <div 
            data-section="features"
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-12 md:mt-16 transition-all duration-1000 delay-400 transform ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { icon: "🕐", text: "24/7 Emergency", subtext: "Always available" },
              { icon: "👨‍⚕️", text: "Expert Doctors", subtext: "15+ years experience" },
              { icon: "💳", text: "Insurance Accepted", subtext: "All major providers" },
              { icon: "⭐", text: "5 Star Rating", subtext: "5000+ happy patients" }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-3 md:p-4 lg:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-[#0A2540] text-sm md:text-base">{feature.text}</h3>
                <p className="text-xs text-gray-500">{feature.subtext}</p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div 
            data-section="map"
            className={`mt-12 md:mt-16 bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 delay-600 transform ${
              isVisible.map ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-4 md:p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Us Here
              </h3>
              <p className="text-teal-100 text-sm md:text-base">123 Dental Street, Medical District, New Delhi - 110001</p>
            </div>
            <div className="h-48 md:h-56 lg:h-64 bg-gray-200">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.901456789012!2d77.12345678901234!3d28.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Appointment;