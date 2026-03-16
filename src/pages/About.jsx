import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  // Animation on scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Team members data with profile paths - Using smaller images
  const teamMembers = [
    {
      id: "dr-prity-raushan",
      name: "Dr. Prity Raushan",
      role: "Lead Dental Surgeon",
      specialty: "Cosmetic & Restorative Dentistry",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Cosmetic Dentistry)",
      icon: "🦷",
      profilePath: "/team/dr-prity-raushan"
    },
    {
      id: "dr-rajesh-kumar",
      name: "Dr. Rajesh Kumar",
      role: "Senior Dental Surgeon",
      specialty: "Orthodontics & Implantology",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Orthodontics)",
      icon: "😁",
      profilePath: "/team/dr-rajesh-kumar"
    },
    {
      id: "dr-sneha-patel",
      name: "Dr. Sneha Patel",
      role: "Periodontist",
      specialty: "Gum Care & Laser Dentistry",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Periodontology)",
      icon: "🦷",
      profilePath: "/team/dr-sneha-patel"
    },
    {
      id: "dr-amit-sharma",
      name: "Dr. Amit Sharma",
      role: "Endodontist",
      specialty: "Root Canal & Pain Management",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Endodontics)",
      icon: "🦷",
      profilePath: "/team/dr-amit-sharma"
    },
    {
      id: "dr-priya-singh",
      name: "Dr. Priya Singh",
      role: "Pediatric Dentist",
      specialty: "Children's Dentistry & Care",
      experience: "7+ Years",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Pedodontics)",
      icon: "👶",
      profilePath: "/team/dr-priya-singh"
    },
    {
      id: "dr-vikram-mehta",
      name: "Dr. Vikram Mehta",
      role: "Oral & Maxillofacial Surgeon",
      specialty: "Dental Implants & Jaw Surgery",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Oral Surgery)",
      icon: "🔬",
      profilePath: "/team/dr-vikram-mehta"
    },
    {
      id: "dr-anjali-desai",
      name: "Dr. Anjali Desai",
      role: "Prosthodontist",
      specialty: "Crowns, Bridges & Dentures",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MDS (Prosthodontics)",
      icon: "🦷",
      profilePath: "/team/dr-anjali-desai"
    },
    {
      id: "dr-karan-malhotra",
      name: "Dr. Karan Malhotra",
      role: "Public Health Dentist",
      specialty: "Preventive & Community Dentistry",
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
      education: "BDS, MPH",
      icon: "👥",
      profilePath: "/team/dr-karan-malhotra"
    }
  ];

  // Services data
  const services = [
    { name: 'Deep Bite', icon: '😬', path: '/service/deepbite', description: 'Correction of excessive vertical overlap' },
    { name: 'Dental Crowns', icon: '👑', path: '/service/crown', description: 'Custom caps to restore damaged teeth' },
    { name: 'Dental Implants', icon: '🔩', path: '/service/dentalimplants', description: 'Permanent tooth replacement solution' },
    { name: 'Root Canal', icon: '🦷', path: '/service/rootcanaltreatment', description: 'Treatment for infected tooth pulp' },
    { name: 'Orthodontics', icon: '😁', path: '/service/orthodontics', description: 'Correction of teeth alignment' },
    { name: 'Teeth Whitening', icon: '✨', path: '/service/teethwhitening', description: 'Professional teeth bleaching' },
    { name: 'Cosmetic Dentistry', icon: '💫', path: '/service/cosmeticdentistry', description: 'Aesthetic dental improvements' },
    { name: 'Pediatric Care', icon: '👶', path: '/service/earlychildcaries', description: 'Specialized dental care for children' },
    { name: 'Gum Treatment', icon: '🦷', path: '/service/gumtreatment', description: 'Periodontal care and laser treatment' },
    { name: 'Dentures', icon: '😬', path: '/service/dentures', description: 'Complete and partial dentures' },
    { name: 'Veneers', icon: '✨', path: '/service/veneers', description: 'Porcelain veneers for smile makeover' },
    { name: 'Bridges', icon: '🌉', path: '/service/bridges', description: 'Fixed bridges for missing teeth' }
  ];

  // Handle team member click
  const handleTeamMemberClick = (profilePath) => {
    navigate(profilePath);
  };

  // Handle view all team click
  const handleViewAllTeam = () => {
    navigate('/team');
  };

  // Handle service click
  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <div className="font-sans text-gray-700 leading-relaxed overflow-x-hidden">
      {/* Hero Section with Background Image - Smaller optimized image */}
      <div className="relative h-[100px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2069&auto=format&fit=crop" 
            alt="Modern Dental Clinic Interior" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-teal-700 uppercase tracking-wider font-light mb-4 animate-float"
              style={{textShadow: '0 5px 15px rgba(0,0,0,0.3)'}}>
            About Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-teal-600 max-w-3xl mx-auto">
            Your Trusted Partner in Dental Excellence & Care
          </p>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Meet the Doctor Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left side - Content */}
            <div className="order-2 lg:order-1 animate-on-scroll opacity-0">
              <div className="inline-flex items-center px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs font-medium mb-4 border border-teal-100">
                <span className="mr-1">⚕️</span>
                Meet Your Dental Expert
              </div>
              
              <h2 className="text-3xl md:text-4xl text-[#0B2B4A] mb-3 font-light">
                Dr. Prity Raushan
              </h2>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-0.5 bg-teal-400"></span>
                <p className="text-lg md:text-xl text-teal-600 font-medium">
                  Lead Dental Surgeon
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { name: 'Cosmetic Dentistry', icon: '✨' },
                  { name: 'Restorative', icon: '🦷' },
                  { name: 'Patient-first', icon: '❤️' },
                  { name: 'Modern Tech', icon: '🔬' }
                ].map((item, index) => (
                  <span key={index} 
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-default flex items-center gap-1">
                    <span>{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                With over a decade of specialized experience, Dr. Prity Raushan combines 
                artistic precision with medical expertise to create beautiful, healthy smiles. 
                Her patient-first philosophy ensures every treatment is tailored to your 
                unique needs using the latest technology.
              </p>
              
              {/* Doctor Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { number: '10+', label: 'Years Excellence', icon: '⭐', color: 'from-yellow-400 to-yellow-500' },
                  { number: '5000+', label: 'Happy Patients', icon: '😊', color: 'from-green-400 to-green-500' },
                  { number: '8000+', label: 'Treatments', icon: '🦷', color: 'from-blue-400 to-blue-500' }
                ].map((stat, index) => (
                  <div key={index} 
                       className="text-center p-4 bg-white rounded-xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md group">
                    <span className={`text-2xl mb-2 block group-hover:scale-110 transition-transform bg-gradient-to-r ${stat.color} w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white`}>
                      {stat.icon}
                    </span>
                    <span className="block text-2xl font-bold text-[#0B2B4A] mb-1">
                      {stat.number}
                    </span>
                    <span className="text-xs text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* View Full Profile Button */}
              <div className="mt-6">
                <button 
                  onClick={() => handleTeamMemberClick('/team/dr-prity-raushan')}
                  className="inline-flex items-center gap-1 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Full Profile
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* Right side - Doctor Image - Smaller optimized */}
            <div className="order-1 lg:order-2 relative group animate-on-scroll opacity-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer max-w-md mx-auto"
                   onClick={() => handleTeamMemberClick('/team/dr-prity-raushan')}>
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Dr. Prity Raushan - Dental Surgeon" 
                  className="w-full h-[350px] md:h-[450px] object-cover object-center transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/70 via-transparent to-transparent"></div>
                
                {/* Floating badge - Smaller */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🦷</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500">Specialized in</p>
                      <p className="text-xs font-semibold text-[#0B2B4A]">Cosmetic Dentistry</p>
                    </div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Modern Clinic Section */}
      <section className="relative py-16 md:py-24 bg-white">
        {/* Background Pattern - Subtle */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 8 L52 30 L30 52 L8 30 L30 8Z' stroke='%2314b8a6' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm mb-3 block">STATE-OF-THE-ART FACILITY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0B2B4A] font-light mb-4">
              Our Modern Clinic
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Experience dental care in a serene, technologically advanced environment designed for your comfort
            </p>
          </div>

          {/* Main Clinic Image - Smaller */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl mb-12 group">
            <img 
              src="https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop" 
              alt="Modern Dental Clinic Reception" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-[#0B2B4A]/40"></div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B2B4A] via-[#0B2B4A]/70 to-transparent p-6">
              <p className="text-white text-lg md:text-xl font-light max-w-2xl">
                Where advanced technology meets patient comfort
              </p>
            </div>
          </div>

          {/* Clinic Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Treatment Room */}
            <div className="relative h-64 rounded-xl overflow-hidden group shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Modern Dental Treatment Room" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/90 via-[#0B2B4A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🦷</span>
                  <h3 className="text-lg font-light text-white">Treatment Rooms</h3>
                </div>
                <p className="text-white/80 text-sm">Modern dental chairs with integrated technology</p>
              </div>
            </div>

            {/* Advanced Equipment */}
            <div className="relative h-64 rounded-xl overflow-hidden group shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3991616/pexels-photo-3991616.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Advanced Dental Equipment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/90 via-[#0B2B4A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔬</span>
                  <h3 className="text-lg font-light text-white">Advanced Technology</h3>
                </div>
                <p className="text-white/80 text-sm">State-of-the-art diagnostic & treatment equipment</p>
              </div>
            </div>
          </div>

          {/* Equipment Grid - Smaller icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { icon: '📡', name: 'Digital X-Ray', color: 'from-teal-400 to-teal-500' },
              { icon: '⚡', name: 'Laser', color: 'from-blue-400 to-blue-500' },
              { icon: '🖥️', name: '3D Scanner', color: 'from-purple-400 to-purple-500' },
              { icon: '📷', name: 'Intraoral Camera', color: 'from-green-400 to-green-500' },
              { icon: '💻', name: 'CAD/CAM', color: 'from-orange-400 to-orange-500' },
              { icon: '🔦', name: 'Soft Tissue Laser', color: 'from-red-400 to-red-500' }
            ].map((item, index) => (
              <div key={index} 
                   className="bg-gradient-to-br from-white to-gray-50 p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group border border-gray-100">
                <div className={`text-2xl mb-2 transform group-hover:scale-110 transition-transform bg-gradient-to-r ${item.color} w-10 h-10 mx-auto rounded-lg flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <p className="text-xs font-medium text-[#0B2B4A]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm mb-3 block">COMPREHENSIVE CARE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0B2B4A] font-light mb-4">
              Our Dental Services
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of specialized dental treatments to meet all your oral health needs
            </p>
          </div>

          {/* Services Grid - Smaller cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => handleServiceClick(service.path)}
                className="group relative animate-on-scroll opacity-0 cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#0B2B4A] mb-1">{service.name}</h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">{service.description}</p>
                  <span className="text-teal-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-10">
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Expert Team Section - WITH CLICKABLE CARDS */}
      <section className="relative py-16 md:py-24 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 8 L52 30 L30 52 L8 30 L30 8Z' stroke='%2314b8a6' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm mb-3 block">DEDICATED PROFESSIONALS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0B2B4A] font-light mb-4">
              Our Expert Team
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Meet our team of 8 specialized dental professionals committed to your oral health
            </p>
          </div>
          
          {/* Team Stats Overview - Smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-md text-center border border-teal-100">
              <span className="block text-xl font-bold text-teal-600 mb-1">8+</span>
              <span className="text-xs text-gray-600">Specialists</span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-md text-center border border-teal-100">
              <span className="block text-xl font-bold text-teal-600 mb-1">50+</span>
              <span className="text-xs text-gray-600">Years Combined</span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-md text-center border border-teal-100">
              <span className="block text-xl font-bold text-teal-600 mb-1">6+</span>
              <span className="text-xs text-gray-600">Specialties</span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-md text-center border border-teal-100">
              <span className="block text-xl font-bold text-teal-600 mb-1">24/7</span>
              <span className="text-xs text-gray-600">Emergency</span>
            </div>
          </div>
          
          {/* Team Members Grid - 8 Members - Smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} 
                   className="group relative animate-on-scroll opacity-0 cursor-pointer"
                   onClick={() => handleTeamMemberClick(member.profilePath)}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
                  {/* Member Image - Smaller */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/80 via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-2 right-2 bg-teal-500 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      {member.experience}
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-sm w-8 h-8 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{member.icon}</span>
                    </div>

                    {/* View Profile Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 via-teal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-teal-600 px-3 py-1 rounded-full text-xs font-semibold transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                        View Profile →
                      </span>
                    </div>
                  </div>
                  
                  {/* Member Info - Smaller */}
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-[#0B2B4A] mb-0.5">{member.name}</h3>
                    <p className="text-teal-600 font-medium text-xs mb-1">{member.role}</p>
                    <p className="text-gray-500 text-xs mb-2">{member.specialty}</p>
                    <p className="text-[10px] text-gray-400 mb-3">{member.education}</p>
                    
                    {/* Quick Contact Icons */}
                    <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <span className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer text-xs">📧</span>
                      <span className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer text-xs">📞</span>
                      <span className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer text-xs">👥</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Team Button */}
          <div className="text-center mt-10">
            <button 
              onClick={handleViewAllTeam}
              className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Team Members
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Team Group Photo - Smaller */}
          <div className="mt-16 relative h-[300px] rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop" 
              alt="Complete Dental Team" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/40 to-[#0B2B4A]/50"></div>
            
            {/* Team stats overlay - Smaller */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B2B4A] via-[#0B2B4A]/80 to-transparent p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-teal-400 mb-1">8</span>
                  <span className="text-xs">Specialist Dentists</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-teal-400 mb-1">12</span>
                  <span className="text-xs">Support Staff</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-teal-400 mb-1">6</span>
                  <span className="text-xs">Specialties</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-teal-400 mb-1">24/7</span>
                  <span className="text-xs">Emergency Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3845695/pexels-photo-3845695.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
            alt="Dental Care Background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-[#0B2B4A]/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Our Mission',
                content: 'To provide exceptional dental care with compassion, using cutting-edge technology to ensure every patient achieves optimal oral health.',
                icon: '🎯'
              },
              {
                title: 'Our Vision',
                content: 'To be the leading dental care provider known for excellence in patient care, innovation in dental treatments, and creating healthy smiles.',
                icon: '👁️'
              }
            ].map((item, index) => (
              <div key={index} 
                   className="group relative animate-on-scroll opacity-0">
                <div className="absolute -inset-0.5 bg-white rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl">
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl md:text-3xl mb-4 text-[#0B2B4A] font-light">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm mb-3 block">OUR MILESTONES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0B2B4A] font-light mb-4">
              Achievements
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence in dental care and patient satisfaction
            </p>
          </div>
          
          {/* Achievement Stats - Smaller */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { number: '15,000+', label: 'Happy Patients', icon: '😊', color: 'from-yellow-400 to-yellow-500' },
              { number: '98%', label: 'Satisfaction', icon: '📊', color: 'from-green-400 to-green-500' },
              { number: '10+', label: 'Years Excellence', icon: '⭐', color: 'from-blue-400 to-blue-500' },
              { number: '25+', label: 'Awards Won', icon: '🏆', color: 'from-purple-400 to-purple-500' }
            ].map((item, index) => (
              <div key={index} 
                   className="group relative animate-on-scroll opacity-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative bg-white p-5 text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100">
                  <div className={`text-2xl mb-3 transform group-hover:scale-110 transition-transform bg-gradient-to-r ${item.color} w-14 h-14 mx-auto rounded-xl flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  
                  <span className="block text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent mb-1">
                    {item.number}
                  </span>
                  
                  <span className="text-xs text-gray-600">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Image - Smaller */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.pexels.com/photos/3845555/pexels-photo-3845555.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop" 
              alt="Dental Achievement" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-[#0B2B4A]/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-light text-center px-4 max-w-3xl">
                Committed to Excellence in Dental Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
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
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default About;