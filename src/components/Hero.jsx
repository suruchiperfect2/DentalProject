import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [counts, setCounts] = useState({ years: 0, patients: 0, rating: 0 });
  const sectionRef = useRef(null);

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

  // Handlers for button clicks - ALL CLICKABLE
  const handleBookAppointment = () => {
    window.location.href = '/appointment'; // Replace with actual link
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi%20Dr.%20Prity%2C%20I%27d%20like%20to%20consult', '_blank');
  };

  const handleVirtualTour = () => {
    window.open('https://youtube.com/watch?v=clinic-tour', '_blank');
  };

  const handleServiceClick = (service) => {
    window.location.href = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const handleTrustBadgeClick = (badge) => {
    window.location.href = `/certifications/${badge.toLowerCase().replace(/\s+/g, '-')}`;
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

  return (
    <div className="w-full">
      {/* MAIN HERO SECTION */}
      <section ref={sectionRef} className="relative bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* SIMPLE CLEAN BACKGROUND */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-transparent to-transparent"></div>

        {/* Content container - max-w-7xl */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN - 60% width */}
            <div className={`space-y-6 transition-all duration-1000 ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              {/* Badge/Tagline */}
              <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold animate-slideInLeft">
                <span className="mr-1">✨</span> Trusted Dental Care Since 2010
              </div>

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

              {/* Service Icons Grid - 2x4 */}
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
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 py-4">
                {/* Primary Button - Book Appointment */}
                <button
                  onClick={handleBookAppointment}
                  className="group relative bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-teal-400/50 text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label="Book an appointment"
                >
                  <span className="text-xl">📅</span>
                  <span>Book Appointment</span>
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                </button>

                {/* Secondary Button - WhatsApp Consultation */}
                <button
                  onClick={handleWhatsApp}
                  className="group relative border-2 border-[#0D9488] text-[#0D9488] px-8 py-4 rounded-full font-semibold hover:bg-teal-50/50 transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label="Start WhatsApp consultation"
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp Consultation</span>
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

              {/* Trust Badges - Horizontal scroll on mobile */}
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
            </div>

            {/* RIGHT COLUMN - 40% width */}
            <div className={`relative transition-all duration-1000 delay-500 ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Main Visual Container - CLEAN WHITE BACKGROUND */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl shadow-gray-200/50">
                
                {/* Inner container */}
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Doctor Portrait */}
                  <div className="relative animate-float">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Dr. Prity Raushan - Dental Expert"
                      className="w-full h-auto object-cover rounded-2xl border-4 border-white shadow-2xl"
                    />
                    
                    {/* Soft overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 via-transparent to-transparent rounded-2xl"></div>
                  </div>

                  {/* Floating Elements - Badges - ALL CLICKABLE */}
                  
                  {/* Top Right - Years Badge */}
                  <button 
                    onClick={() => window.location.href = '/about'}
                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border-l-4 border-[#0D9488] animate-float z-20 hover:shadow-2xl transition-all"
                    aria-label="View doctor experience"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <div className="font-bold text-[#0A2540]">15+ Years</div>
                        <div className="text-xs text-gray-500">Experience</div>
                      </div>
                    </div>
                  </button>

                  {/* Bottom Left - Smiles Badge */}
                  <button 
                    onClick={() => window.location.href = '/testimonials'}
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border-l-4 border-[#14B8A6] animate-float animation-delay-500 z-20 hover:shadow-2xl transition-all"
                    aria-label="View patient testimonials"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">😊</span>
                      <div>
                        <div className="font-bold text-[#0A2540]">5000+ Smiles</div>
                        <div className="text-xs text-gray-500">Happy patients</div>
                      </div>
                    </div>
                  </button>

                  {/* Middle Right - Rating Badge */}
                  <button 
                    onClick={() => window.open('https://google.com/reviews', '_blank')}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3 border-l-4 border-[#0D9488] animate-float animation-delay-1000 z-20 hidden lg:block hover:shadow-2xl transition-all"
                    aria-label="View Google reviews"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">★★★★★</span>
                      <div>
                        <div className="font-bold text-[#0A2540]">5.0 Rating</div>
                        <div className="text-xs text-gray-500">Google Reviews</div>
                      </div>
                    </div>
                  </button>

                  {/* Bottom Right - Painless Badge */}
                  <button 
                    onClick={() => window.location.href = '/treatments'}
                    className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-lg p-2 animate-float animation-delay-1500 z-20 hover:shadow-xl transition-all"
                    aria-label="View painless treatments"
                  >
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium text-[#0A2540]">Painless</span>
                    </div>
                  </button>
                </div>

                {/* Video Tour Thumbnail */}
                <button
                  onClick={handleVirtualTour}
                  className="absolute -bottom-6 left-6 flex items-center gap-3 bg-white rounded-2xl shadow-xl p-3 hover:shadow-2xl transition-all duration-300 group z-30"
                  aria-label="Watch clinic tour video"
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

              {/* Social Proof Strip - CLICKABLE LOGOS */}
              <div className="mt-12 text-center">
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

      {/* QUICK CONTACT BAR - ALL CLICKABLE */}
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

        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-countUp {
          animation: countUp 0.8s ease-out forwards;
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

export default Hero