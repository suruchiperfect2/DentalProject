import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [counts, setCounts] = useState({ years: 0, patients: 0, rating: 0 });
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showEmergencyBanner, setShowEmergencyBanner] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [showInsuranceCheck, setShowInsuranceCheck] = useState(false);
  const [insuranceResult, setInsuranceResult] = useState(null);
  const [recentReviews, setRecentReviews] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [showCostCalculator, setShowCostCalculator] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [treatmentCosts, setTreatmentCosts] = useState({
    'Root Canal': { min: 5000, max: 15000 },
    'Teeth Whitening': { min: 8000, max: 25000 },
    'Dental Crowns': { min: 7000, max: 20000 },
    'Dental Implants': { min: 25000, max: 50000 },
    'Smile Design': { min: 30000, max: 80000 },
    'Emergency Care': { min: 2000, max: 10000 },
    'Pediatric Dentistry': { min: 1000, max: 5000 },
    'Digital X-Ray': { min: 500, max: 2000 }
  });
  const sectionRef = useRef(null);

  // Dental health tips
  const dentalTips = [
    "Brush your teeth twice a day for 2 minutes",
    "Replace your toothbrush every 3-4 months",
    "Don't forget to clean your tongue",
    "Limit sugary foods and drinks",
    "Visit your dentist every 6 months",
    "Use fluoride toothpaste for better protection",
    "Floss daily to remove plaque between teeth",
    "Drink water after meals to wash away acids"
  ];

  // Safety features data
  const safetyFeatures = [
    {
      icon: "🧼",
      title: "Sterilized Equipment",
      description: "All instruments undergo hospital-grade sterilization after every use"
    },
    {
      icon: "😷",
      title: "PPE Kits",
      description: "Full protective gear for all staff members during procedures"
    },
    {
      icon: "🌡️",
      title: "Temperature Screening",
      description: "Regular health checks for all patients and staff"
    },
    {
      icon: "🧴",
      title: "Sanitization Stations",
      description: "Hand sanitizers available throughout the clinic"
    },
    {
      icon: "💨",
      title: "HEPA Air Purifiers",
      description: "Advanced air filtration systems in all treatment rooms"
    },
    {
      icon: "🧪",
      title: "Disposable Materials",
      description: "Single-use materials to prevent cross-contamination"
    }
  ];

  // Dentist expertise data
  const dentistExpertise = [
    {
      name: "Dr. Prity Raushan",
      qualification: "BDS, MDS (Prosthodontist)",
      experience: "15+ Years",
      speciality: "Cosmetic & Implant Dentistry",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      achievements: ["1000+ Implants", "5000+ Smiles", "Gold Medalist"]
    },
    {
      name: "Dr. Rajesh Kumar",
      qualification: "BDS, MDS (Orthodontist)",
      experience: "12+ Years",
      speciality: "Braces & Aligners",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      achievements: ["2000+ Braces Cases", "Invisalign Certified", "Smile Design Expert"]
    },
    {
      name: "Dr. Priya Sharma",
      qualification: "BDS, MDS (Pedodontist)",
      experience: "10+ Years",
      speciality: "Child Dentistry",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      achievements: ["Child Specialist", "Pain-Free Techniques", "Behavior Management"]
    }
  ];

  // Why trust us data
  const trustFactors = [
    {
      icon: "🏆",
      title: "10+ Years Experience",
      description: "Decade of excellence in dental care"
    },
    {
      icon: "👥",
      title: "5000+ Happy Patients",
      description: "Trusted by thousands of families"
    },
    {
      icon: "🔬",
      title: "Advanced Technology",
      description: "Latest dental equipment and techniques"
    },
    {
      icon: "⭐",
      title: "5-Star Rating",
      description: "Excellent patient reviews and feedback"
    },
    {
      icon: "🦷",
      title: "Specialized Care",
      description: "Treatment by specialist doctors"
    },
    {
      icon: "💯",
      title: "Painless Treatments",
      description: "Comfortable and gentle procedures"
    }
  ];

  // Patient testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      comment: "Best dental experience ever! Dr. Prity is very professional and caring. The clinic is ultra-modern and hygienic.",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Singh",
      location: "Andheri",
      rating: 5,
      comment: "I was scared of dental treatments, but the team made me feel comfortable. Painless root canal! Highly recommended.",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1494790108777-7667a7e6b4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Amit Patel",
      location: "Bandra",
      rating: 5,
      comment: "Great clinic with friendly staff. Got my dental implants done here. Very reasonable pricing and excellent care.",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sneha Reddy",
      location: "Powai",
      rating: 5,
      comment: "My kids love coming here! The pediatric dentist is amazing with children. Very patient and gentle.",
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Is dental treatment painful?",
      answer: "We use modern pain management techniques including local anesthesia, sedation options, and gentle techniques to ensure your comfort. Most patients report little to no discomfort during procedures."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend a dental check-up and cleaning every 6 months for optimal oral health. However, frequency may vary based on your individual needs and risk factors."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept all major insurance providers including Mediclaim, and we'll help you maximize your benefits. Our team can assist with insurance claims and paperwork."
    },
    {
      question: "What payment options do you offer?",
      answer: "We accept cash, all major credit/debit cards, UPI payments, and offer 0% EMI options for larger treatments. We also have flexible payment plans."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book online through our website, call us directly, or use WhatsApp for quick appointment scheduling. We offer flexible timings including weekends."
    },
    {
      question: "What safety measures do you follow?",
      answer: "We follow strict sterilization protocols, use disposable materials, have HEPA air purifiers, and all staff wear PPE. Your safety is our top priority."
    },
    {
      question: "Do you handle dental emergencies?",
      answer: "Yes, we have 24/7 emergency dental services. Call our emergency number for immediate assistance with tooth pain, broken teeth, or other dental emergencies."
    },
    {
      question: "What is the cost of treatment?",
      answer: "Costs vary based on treatment complexity. We provide transparent pricing and a detailed estimate before starting any procedure. Ask about our EMI options."
    }
  ];

  // Service icons data
  const services = [
    { icon: "🦷", name: "Root Canal" },
    { icon: "✨", name: "Teeth Whitening" },
    { icon: "👑", name: "Dental Crowns" },
    { icon: "🔷", name: "Dental Implants" },
    { icon: "😁", name: "Smile Design" },
    { icon: "🏥", name: "Emergency Care" },
    { icon: "🦷", name: "Pediatric Dentistry" },
    { icon: "📊", name: "Digital X-Ray" }
  ];

  // Trust badges
  const trustBadges = [
    "ISO Certified",
    "ADA Member",
    "0% Finance Available",
    "Emergency 24/7",
    "Insurance Accepted"
  ];

  // Text animation effect
  useEffect(() => {
    setShowText(true);
    
    // Set available slots (mock data)
    setAvailableSlots(['10:30 AM', '11:45 AM', '2:15 PM', '4:30 PM']);
    
    // Set recent reviews
    setRecentReviews(testimonials.slice(0, 3));
    
    // Check if it's emergency hours (after 8 PM)
    const currentHour = new Date().getHours();
    setShowEmergencyBanner(currentHour >= 20 || currentHour <= 6);
    
    // Rotate dental tips every 10 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % dentalTips.length);
    }, 10000);
    
    // Show quiz after 30 seconds
    const quizTimer = setTimeout(() => setShowQuiz(true), 30000);
    
    return () => {
      clearInterval(tipInterval);
      clearTimeout(quizTimer);
    };
  }, []);

  // Count-up animation when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate years
          let years = 0;
          const yearsInterval = setInterval(() => {
            years += 1;
            setCounts(prev => ({ ...prev, years }));
            if (years >= 5) clearInterval(yearsInterval);
          }, 100);

          // Animate patients
          let patients = 0;
          const patientsInterval = setInterval(() => {
            patients += 10;
            setCounts(prev => ({ ...prev, patients }));
            if (patients >= 500) clearInterval(patientsInterval);
          }, 20);

          // Rating stays at 5
          setCounts(prev => ({ ...prev, rating: 5 }));
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handlers
  const handleBookAppointment = () => {
    window.location.href = '/appointment';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi%20Dr.%20Prity%2C%20I%27d%20like%20to%20consult', '_blank');
  };

  const handleVirtualTour = () => {
    window.open('https://youtube.com/watch?v=clinic-tour', '_blank');
  };

  const handleServiceClick = (service) => {
    setSelectedTreatment(service);
    setShowCostCalculator(true);
  };

  const handleTrustBadgeClick = (badge) => {
    if (badge === "Insurance Accepted") {
      setShowInsuranceCheck(true);
    } else {
      window.location.href = `/certifications/${badge.toLowerCase().replace(/\s+/g, '-')}`;
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+911234567890';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:care@drpritydental.com';
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Mumbai+Dental+Clinic', '_blank');
  };

  const handleInsuranceCheck = () => {
    // Mock insurance verification
    const providers = ['medibank', 'bupa', 'hcf', 'nib', 'icici', 'hdfc', 'star health'];
    const isAccepted = providers.includes(insuranceProvider.toLowerCase());
    setInsuranceResult({
      accepted: isAccepted,
      message: isAccepted ? '✓ Your insurance is accepted!' : '✗ Please contact us for verification',
      coverage: isAccepted ? 'Up to 80% coverage' : 'May have partial coverage'
    });
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+911234567890';
  };

  const handleQuizAnswer = (answer) => {
    setShowQuiz(false);
    alert(`Based on your answers, we recommend a dental checkup! Book now for special discount.`);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* EMERGENCY BANNER */}
      {showEmergencyBanner && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 animate-slideDown">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚨</span>
                <p className="text-red-700 font-medium">
                  Emergency? Our 24/7 dental emergency service is available now!
                </p>
              </div>
              <button
                onClick={handleEmergencyCall}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
              >
                <span>📞</span>
                <span>Call Emergency</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DENTAL HEALTH TIPS CAROUSEL */}
      <div className="bg-teal-50 py-2 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <span className="text-teal-600 font-medium">💡 Dental Tip:</span>
            <p className="text-gray-700 animate-fadeIn">{dentalTips[currentTip]}</p>
          </div>
        </div>
      </div>

      {/* MAIN HERO SECTION */}
      <section ref={sectionRef} className="relative bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-transparent to-transparent"></div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN */}
            <div className={`space-y-6 transition-all duration-1000 ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              {/* Badge/Tagline */}
              <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold animate-slideInLeft">
                <span className="mr-1">✨</span> Trusted Dental Care Since 2010
              </div>

              {/* AVAILABLE SLOTS INDICATOR */}
              {availableSlots.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 animate-pulse">
                  <p className="text-green-700 text-sm flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="font-medium">{availableSlots.length} slots available today:</span>
                    <span className="text-green-600">{availableSlots.join(' • ')}</span>
                  </p>
                </div>
              )}

              {/* Main Headline */}
              <h1 className="space-y-2">
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540] leading-tight animate-wordReveal">
                  Advanced Dental Care <span className="block sm:inline">&</span>
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent leading-tight animate-wordReveal animation-delay-200">
                  Beautiful Smile Design
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-400">
                Experience modern dentistry with compassion, precision, and advanced technology for your perfect smile.
              </p>

              {/* Doctor Credentials Strip */}
              <div className="flex flex-wrap gap-2 animate-slideInLeft animation-delay-600">
                {["BDS", "MDS", "Implantology", "Cosmetic Dentistry"].map((cred, index) => (
                  <span key={index} className="px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                    {cred}
                  </span>
                ))}
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center lg:text-left animate-countUp">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                    {counts.years}+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center lg:text-left animate-countUp animation-delay-200">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                    {counts.patients}+
                  </div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center lg:text-left animate-countUp animation-delay-400">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent flex items-center justify-center lg:justify-start gap-1">
                    {counts.rating}★
                  </div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
              </div>

              {/* Service Icons Grid - with cost calculator trigger */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.name)}
                    className="group flex flex-col items-center p-3 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    aria-label={`View ${service.name} services`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-gradient-to-br group-hover:from-[#0D9488] group-hover:to-[#14B8A6] flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <span className="group-hover:text-white transition-colors duration-300">{service.icon}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 mt-2 group-hover:text-teal-600">{service.name}</span>
                    <span className="text-[10px] text-gray-400 mt-1">Click for cost</span>
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 py-4">
                {/* Primary Button - Book Appointment */}
                <button
                  onClick={handleBookAppointment}
                  className="group relative bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-teal-400/50 text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <span className="text-xl">📅</span>
                  <span>Book Appointment</span>
                </button>

                {/* Secondary Button - WhatsApp Consultation with Modal */}
                <button
                  onClick={() => setShowConsultModal(true)}
                  className="group relative border-2 border-[#0D9488] text-[#0D9488] px-8 py-4 rounded-full font-semibold hover:bg-teal-50/50 transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <span className="text-xl">💬</span>
                  <span>Free Consultation</span>
                </button>

                {/* Tertiary Button - Virtual Tour */}
                <button
                  onClick={handleVirtualTour}
                  className="group w-14 h-14 rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label="Take a virtual tour"
                >
                  <span className="text-2xl">▶</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
                {trustBadges.map((badge, index) => (
                  <button
                    key={index}
                    onClick={() => handleTrustBadgeClick(badge)}
                    className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {badge}
                  </button>
                ))}
              </div>

              {/* PAYMENT OPTIONS */}
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-gray-500">Pay with:</span>
                <div className="flex gap-3">
                  <span className="text-xl">💳</span>
                  <span className="text-xl">📱</span>
                  <span className="text-xl">🏦</span>
                  <span className="text-sm text-gray-400 ml-2">+ all major cards & UPI</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={`relative transition-all duration-1000 delay-500 ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Main Visual Container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl shadow-gray-200/50">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Doctor Portrait */}
                  <div className="relative animate-float">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Dr. Prity Raushan - Dental Expert"
                      className="w-full h-auto object-cover rounded-2xl border-4 border-white shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 via-transparent to-transparent rounded-2xl"></div>
                  </div>

                  {/* Floating Elements - Badges */}
                  <button 
                    onClick={() => window.location.href = '/about'}
                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border-l-4 border-[#0D9488] animate-float z-20 hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <div className="font-bold text-[#0A2540]">15+ Years</div>
                        <div className="text-xs text-gray-500">Experience</div>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => window.location.href = '/testimonials'}
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border-l-4 border-[#14B8A6] animate-float animation-delay-500 z-20 hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">😊</span>
                      <div>
                        <div className="font-bold text-[#0A2540]">5000+ Smiles</div>
                        <div className="text-xs text-gray-500">Happy patients</div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Video Tour Thumbnail */}
                <button
                  onClick={handleVirtualTour}
                  className="absolute -bottom-6 left-6 flex items-center gap-3 bg-white rounded-2xl shadow-xl p-3 hover:shadow-2xl transition-all duration-300 group z-30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <span className="text-xl">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[#0A2540]">Watch Clinic Tour</div>
                    <div className="text-xs text-gray-500">2:30 min</div>
                  </div>
                </button>
              </div>

              {/* RECENT REVIEWS WIDGET */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span>⭐</span> Recent Google Reviews
                </h3>
                <div className="space-y-3">
                  {recentReviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{review.name}</span>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        {'★'.repeat(review.rating)}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{review.comment}</p>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => window.open('https://google.com/reviews', '_blank')}
                  className="text-xs text-teal-600 mt-3 hover:underline block"
                >
                  See all reviews →
                </button>
              </div>

              {/* Social Proof Strip */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-3">Trusted by leading health funds</p>
                <div className="flex justify-center items-center gap-6">
                  <button onClick={() => window.open('https://medibank.com.au', '_blank')} className="text-xl font-bold text-gray-500 hover:text-[#0D9488] transition-colors">MEDIBANK</button>
                  <button onClick={() => window.open('https://bupa.com', '_blank')} className="text-xl font-bold text-gray-500 hover:text-[#0D9488] transition-colors">BUPA</button>
                  <button onClick={() => window.open('https://hcf.com.au', '_blank')} className="text-xl font-bold text-gray-500 hover:text-[#0D9488] transition-colors">HCF</button>
                  <button onClick={() => window.open('https://nib.com.au', '_blank')} className="text-xl font-bold text-gray-500 hover:text-[#0D9488] transition-colors">NIB</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY FIRST SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Your Safety is Our Priority
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Highest Standards of <span className="text-teal-600">Sterilization & Safety</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow international safety protocols to ensure your health and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Safety Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">100%</div>
              <div className="text-sm text-gray-600">Sterilized Equipment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">Zero</div>
              <div className="text-sm text-gray-600">Cross-Infection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">ISO</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE OF OUR DENTISTS SECTION */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Meet Our Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Expertise That <span className="text-teal-600">You Can Trust</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of specialized dentists with years of experience and advanced qualifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentistExpertise.map((dentist, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dentist.image} 
                    alt={dentist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold text-xl">{dentist.name}</div>
                    <div className="text-sm opacity-90">{dentist.speciality}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-teal-600 mb-3">
                    <span className="text-sm font-semibold bg-teal-50 px-3 py-1 rounded-full">{dentist.qualification}</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{dentist.experience}</span>
                  </div>
                  <div className="space-y-2">
                    {dentist.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-teal-500">✓</span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleBookAppointment}
                    className="mt-4 w-full bg-teal-50 text-teal-700 py-2 rounded-lg hover:bg-teal-100 transition-colors font-semibold"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Trust Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Reasons to Choose <span className="text-teal-600">Dr. Prity's Dental</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, technology, and compassion to give you the best dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <div key={index} className="relative bg-gradient-to-br from-white to-teal-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-teal-100 group">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{factor.icon}</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge with Image */}
          <div className="mt-12 bg-teal-600 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">10+ Years of Trust</h3>
                <p className="mb-6 opacity-90">Join thousands of happy patients who have experienced the best dental care in Mumbai.</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108777-7667a7e6b4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-sm">5000+ Happy Patients</span>
                </div>
              </div>
              <div className="h-48 md:h-auto bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT TESTIMONIALS SECTION */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Patient Speaks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              What Our <span className="text-teal-600">Patients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real patients who trusted us with their smiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#0A2540]">{testimonial.name}</h3>
                      <span className="text-xs text-gray-400">{testimonial.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 text-sm">"{testimonial.comment}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => window.open('https://google.com/reviews', '_blank')}
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-colors"
            >
              <span>⭐</span>
              Read All Reviews on Google
            </button>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our dental services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#0A2540]">{faq.question}</span>
                  <span className="text-2xl text-teal-600">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <button
              onClick={() => setShowConsultModal(true)}
              className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Ask Us Anything
            </button>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT BAR */}
      <div className="bg-white shadow-md border-t border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            <button onClick={handlePhoneClick} className="flex items-center gap-2 text-gray-600 hover:text-[#0D9488] transition-colors">
              <span className="text-xl">📞</span>
              <span>+91 12345 67890</span>
            </button>
            <button onClick={handleEmailClick} className="flex items-center gap-2 text-gray-600 hover:text-[#0D9488] transition-colors">
              <span className="text-xl">✉️</span>
              <span>care@drpritydental.com</span>
            </button>
            <button onClick={handleLocationClick} className="flex items-center gap-2 text-gray-600 hover:text-[#0D9488] transition-colors">
              <span className="text-xl">📍</span>
              <span>Mumbai, India</span>
            </button>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">🕒</span>
              <span>Mon-Sat: 10am-7pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONSULTATION MODAL */}
      {showConsultModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-slideUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#0A2540]">Free Consultation</h3>
              <button 
                onClick={() => setShowConsultModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">Choose your preferred consultation method:</p>
              
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <span>💬</span> WhatsApp Chat
              </button>
              
              <button
                onClick={() => {
                  setShowConsultModal(false);
                  window.location.href = 'tel:+911234567890';
                }}
                className="w-full bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <span>📞</span> Phone Call
              </button>
              
              <button
                onClick={() => {
                  setShowConsultModal(false);
                  handleBookAppointment();
                }}
                className="w-full bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <span>📹</span> Video Consultation
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                We'll respond within 5 minutes during working hours
              </p>
            </div>
          </div>
        </div>
      )}

      {/* INSURANCE CHECK MODAL */}
      {showInsuranceCheck && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-slideUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#0A2540]">Check Insurance Coverage</h3>
              <button 
                onClick={() => {
                  setShowInsuranceCheck(false);
                  setInsuranceResult(null);
                  setInsuranceProvider('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">Enter your insurance provider name:</p>
              
              <input
                type="text"
                value={insuranceProvider}
                onChange={(e) => setInsuranceProvider(e.target.value)}
                placeholder="e.g., Medibank, BUPA, HCF"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              
              <button
                onClick={handleInsuranceCheck}
                className="w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors font-semibold"
              >
                Check Coverage
              </button>
              
              {insuranceResult && (
                <div className={`p-4 rounded-xl ${insuranceResult.accepted ? 'bg-green-50' : 'bg-yellow-50'}`}>
                  <p className={`font-semibold ${insuranceResult.accepted ? 'text-green-700' : 'text-yellow-700'}`}>
                    {insuranceResult.message}
                  </p>
                  {insuranceResult.accepted && (
                    <p className="text-sm text-green-600 mt-1">{insuranceResult.coverage}</p>
                  )}
                </div>
              )}
              
              <p className="text-xs text-gray-400 text-center">
                We accept all major insurance providers
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TREATMENT COST CALCULATOR MODAL */}
      {showCostCalculator && selectedTreatment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-slideUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#0A2540]">{selectedTreatment} Cost Estimate</h3>
              <button 
                onClick={() => {
                  setShowCostCalculator(false);
                  setSelectedTreatment(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-teal-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600">Estimated Price Range:</p>
                <p className="text-3xl font-bold text-teal-600">
                  ₹{treatmentCosts[selectedTreatment]?.min.toLocaleString()} - ₹{treatmentCosts[selectedTreatment]?.max.toLocaleString()}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Payment Options:</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> 0% EMI available
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Insurance coverage applicable
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Flexible payment plans
                </div>
              </div>
              
              <button
                onClick={handleBookAppointment}
                className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white p-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Book Consultation for Exact Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DENTAL HEALTH QUIZ POPUP */}
      {showQuiz && (
        <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl max-w-sm w-full p-4 animate-slideUp z-40 border-l-4 border-teal-500">
          <button 
            onClick={() => setShowQuiz(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          
          <h4 className="font-bold text-[#0A2540] mb-2">Quick Dental Health Check</h4>
          <p className="text-sm text-gray-600 mb-3">How often do you visit the dentist?</p>
          
          <div className="space-y-2">
            <button
              onClick={() => handleQuizAnswer('regular')}
              className="w-full text-left p-2 hover:bg-teal-50 rounded-lg transition-colors text-sm"
            >
              Every 6 months
            </button>
            <button
              onClick={() => handleQuizAnswer('yearly')}
              className="w-full text-left p-2 hover:bg-teal-50 rounded-lg transition-colors text-sm"
            >
              Once a year
            </button>
            <button
              onClick={() => handleQuizAnswer('rarely')}
              className="w-full text-left p-2 hover:bg-teal-50 rounded-lg transition-colors text-sm"
            >
              Only when in pain
            </button>
          </div>
          
          <p className="text-[10px] text-gray-400 mt-3">
            Take 10 seconds to get personalized dental advice
          </p>
        </div>
      )}

      {/* CUSTOM CSS ANIMATIONS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-wordReveal {
          animation: wordReveal 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-countUp {
          animation: countUp 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Animation delays */
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        /* Hide scrollbar for trust badges */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default Hero;