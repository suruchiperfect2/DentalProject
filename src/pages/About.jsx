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

  // Team members data with profile paths
  const teamMembers = [
    {
      id: "dr-prity-raushan",
      name: "Dr. Prity Raushan",
      role: "Lead Dental Surgeon",
      specialty: "Cosmetic & Restorative Dentistry",
      experience: "12+ Years",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-with-stethoscope-looking-camera_85574-4572.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/confident-doctor-with-arms-crossed_1262-3603.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/young-female-doctor-standing-clinic_1303-15813.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-with-stethoscope-standing-near-patient_141793-12194.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/doctor-with-stethoscope-2022-11-10-00-19-46-utc_573074-283.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/smiling-female-doctor-with-prescription-clipboard_23-2148842881.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      image: "https://img.freepik.com/free-photo/indian-doctor-with-prescription_1262-18386.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890",
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
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Modern Dental Clinic Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B4A]/90 to-[#14b8a6]/70"></div>
        </div>

        <div className="relative text-center z-10 px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider font-light mb-6 animate-float"
              style={{textShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
            About Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto">
            Your Trusted Partner in Dental Excellence & Care
          </p>
          <div className="w-32 h-1 bg-teal-400 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>

      {/* Meet the Doctor Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side - Content */}
            <div className="order-2 lg:order-1 animate-on-scroll opacity-0">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-6 border border-teal-100">
                <span className="mr-2">⚕️</span>
                Meet Your Dental Expert
              </div>
              
              <h2 className="text-4xl md:text-5xl text-[#0B2B4A] mb-4 font-light">
                Dr. Prity Raushan
              </h2>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="w-16 h-0.5 bg-teal-400"></span>
                <p className="text-xl md:text-2xl text-teal-600 font-medium">
                  Lead Dental Surgeon
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { name: 'Cosmetic Dentistry', icon: '✨' },
                  { name: 'Restorative Dentistry', icon: '🦷' },
                  { name: 'Patient-first', icon: '❤️' },
                  { name: 'Modern Technology', icon: '🔬' }
                ].map((item, index) => (
                  <span key={index} 
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                With over a decade of specialized experience, Dr. Prity Raushan combines 
                artistic precision with medical expertise to create beautiful, healthy smiles. 
                Her patient-first philosophy ensures every treatment is tailored to your 
                unique needs using the latest technology.
              </p>
              
              {/* Doctor Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { number: '10+', label: 'Years Excellence', icon: '⭐', color: 'from-yellow-400 to-yellow-500' },
                  { number: '5000+', label: 'Happy Patients', icon: '😊', color: 'from-green-400 to-green-500' },
                  { number: '8000+', label: 'Treatments', icon: '🦷', color: 'from-blue-400 to-blue-500' }
                ].map((stat, index) => (
                  <div key={index} 
                       className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl group">
                    <span className={`text-3xl mb-3 block group-hover:scale-110 transition-transform bg-gradient-to-r ${stat.color} w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white`}>
                      {stat.icon}
                    </span>
                    <span className="block text-3xl font-bold text-[#0B2B4A] mb-1">
                      {stat.number}
                    </span>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* View Full Profile Button */}
              <div className="mt-8">
                <button 
                  onClick={() => handleTeamMemberClick('/team/dr-prity-raushan')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Full Profile
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right side - Doctor Image */}
            <div className="order-1 lg:order-2 relative group animate-on-scroll opacity-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-teal-600 rounded-[40px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
              
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl cursor-pointer"
                   onClick={() => handleTeamMemberClick('/team/dr-prity-raushan')}>
                <img 
                  src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-with-stethoscope-looking-camera_85574-4572.jpg?w=1380&t=st=1731682800~exp=1731686400~hmac=1234567890" 
                  alt="Dr. Prity Raushan - Dental Surgeon" 
                  className="w-full h-[500px] md:h-[600px] object-cover object-center transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/70 via-transparent to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🦷</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Specialized in</p>
                      <p className="text-lg font-semibold text-[#0B2B4A]">Cosmetic Dentistry</p>
                    </div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Modern Clinic Section */}
      <section className="relative py-20 md:py-28 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L70 40 L40 70 L10 40 L40 10Z' stroke='%2314b8a6' stroke-width='1' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-lg mb-4 block">STATE-OF-THE-ART FACILITY</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0B2B4A] font-light mb-6">
              Our Modern Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience dental care in a serene, technologically advanced environment designed for your comfort
            </p>
          </div>

          {/* Main Clinic Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
            <img 
              src="https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Modern Dental Clinic Reception" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-[#0B2B4A]/50"></div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B2B4A] via-[#0B2B4A]/70 to-transparent p-10">
              <p className="text-white text-2xl md:text-3xl font-light max-w-2xl">
                Where advanced technology meets patient comfort
              </p>
            </div>
          </div>

          {/* Clinic Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Treatment Room */}
            <div className="relative h-96 rounded-2xl overflow-hidden group shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Modern Dental Treatment Room" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/90 via-[#0B2B4A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🦷</span>
                  <h3 className="text-2xl font-light text-white">Treatment Rooms</h3>
                </div>
                <p className="text-white/80">Modern dental chairs with integrated technology</p>
              </div>
            </div>

            {/* Advanced Equipment */}
            <div className="relative h-96 rounded-2xl overflow-hidden group shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3991616/pexels-photo-3991616.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Advanced Dental Equipment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/90 via-[#0B2B4A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔬</span>
                  <h3 className="text-2xl font-light text-white">Advanced Technology</h3>
                </div>
                <p className="text-white/80">State-of-the-art diagnostic & treatment equipment</p>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '📡', name: 'Digital X-Ray', color: 'from-teal-400 to-teal-500' },
              { icon: '⚡', name: 'Laser System', color: 'from-blue-400 to-blue-500' },
              { icon: '🖥️', name: '3D CT Scanner', color: 'from-purple-400 to-purple-500' },
              { icon: '📷', name: 'Intraoral Camera', color: 'from-green-400 to-green-500' },
              { icon: '💻', name: 'CAD/CAM', color: 'from-orange-400 to-orange-500' },
              { icon: '🔦', name: 'Soft Tissue Laser', color: 'from-red-400 to-red-500' }
            ].map((item, index) => (
              <div key={index} 
                   className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100">
                <div className={`text-4xl mb-3 transform group-hover:scale-110 transition-transform bg-gradient-to-r ${item.color} w-16 h-16 mx-auto rounded-xl flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-[#0B2B4A]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section - NEW SECTION */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-lg mb-4 block">COMPREHENSIVE CARE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0B2B4A] font-light mb-6">
              Our Dental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of specialized dental treatments to meet all your oral health needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => handleServiceClick(service.path)}
                className="group relative animate-on-scroll opacity-0 cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B2B4A] mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{service.description}</p>
                  <span className="text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Expert Team Section - WITH CLICKABLE CARDS */}
      <section className="relative py-20 md:py-28 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L70 40 L40 70 L10 40 L40 10Z' stroke='%2314b8a6' stroke-width='1' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-lg mb-4 block">DEDICATED PROFESSIONALS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0B2B4A] font-light mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of 8 specialized dental professionals committed to your oral health
            </p>
          </div>
          
          {/* Team Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg text-center border border-teal-100">
              <span className="block text-3xl font-bold text-teal-600 mb-2">8+</span>
              <span className="text-gray-600">Specialists</span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg text-center border border-teal-100">
              <span className="block text-3xl font-bold text-teal-600 mb-2">50+</span>
              <span className="text-gray-600">Years Combined Exp</span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg text-center border border-teal-100">
              <span className="block text-3xl font-bold text-teal-600 mb-2">6+</span>
              <span className="text-gray-600">Specialties</span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg text-center border border-teal-100">
              <span className="block text-3xl font-bold text-teal-600 mb-2">24/7</span>
              <span className="text-gray-600">Emergency Care</span>
            </div>
          </div>
          
          {/* Team Members Grid - 8 Members - CLICKABLE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} 
                   className="group relative animate-on-scroll opacity-0 cursor-pointer"
                   onClick={() => handleTeamMemberClick(member.profilePath)}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Member Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://img.freepik.com/free-photo/doctor-with-stethoscope-2022-11-10-00-19-46-utc_573074-283.jpg?w=740&t=st=1731682800~exp=1731686400~hmac=1234567890";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B4A]/80 via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{member.icon}</span>
                    </div>

                    {/* View Profile Overlay - appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 via-teal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                        View Profile →
                      </span>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0B2B4A] mb-1">{member.name}</h3>
                    <p className="text-teal-600 font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{member.specialty}</p>
                    <p className="text-xs text-gray-400 mb-4">{member.education}</p>
                    
                    {/* Quick Contact Icons - stop propagation to prevent card click when clicking icons */}
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">📧</span>
                      <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">📞</span>
                      <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">👥</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Team Button */}
          <div className="text-center mt-12">
            <button 
              onClick={handleViewAllTeam}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Team Members
              <span>→</span>
            </button>
          </div>

          {/* Team Group Photo */}
          <div className="mt-20 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Complete Dental Team" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/40 to-[#0B2B4A]/60"></div>
            
            {/* Team stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B2B4A] via-[#0B2B4A]/80 to-transparent p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-teal-400 mb-2">8</span>
                  <span className="text-lg">Specialist Dentists</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold text-teal-400 mb-2">12</span>
                  <span className="text-lg">Support Staff</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold text-teal-400 mb-2">6</span>
                  <span className="text-lg">Specialties</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold text-teal-400 mb-2">24/7</span>
                  <span className="text-lg">Emergency Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3845695/pexels-photo-3845695.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Dental Care Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-[#0B2B4A]/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Mission',
                content: 'To provide exceptional dental care with compassion, using cutting-edge technology to ensure every patient achieves optimal oral health and a beautiful smile.',
                icon: '🎯'
              },
              {
                title: 'Our Vision',
                content: 'To be the leading dental care provider known for excellence in patient care, innovation in dental treatments, and creating healthy smiles for our community.',
                icon: '👁️'
              }
            ].map((item, index) => (
              <div key={index} 
                   className="group relative animate-on-scroll opacity-0">
                <div className="absolute -inset-0.5 bg-white rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-2xl">
                  <span className="text-6xl mb-6 block transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h3 className="text-3xl md:text-4xl mb-6 text-[#0B2B4A] font-light">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-lg mb-4 block">OUR MILESTONES</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0B2B4A] font-light mb-6">
              Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence in dental care and patient satisfaction
            </p>
          </div>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: '15,000+', label: 'Happy Patients', icon: '😊', color: 'from-yellow-400 to-yellow-500' },
              { number: '98%', label: 'Satisfaction Rate', icon: '📊', color: 'from-green-400 to-green-500' },
              { number: '10+', label: 'Years Excellence', icon: '⭐', color: 'from-blue-400 to-blue-500' },
              { number: '25+', label: 'Awards Won', icon: '🏆', color: 'from-purple-400 to-purple-500' }
            ].map((item, index) => (
              <div key={index} 
                   className="group relative animate-on-scroll opacity-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="relative bg-white p-8 text-center rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform bg-gradient-to-r ${item.color} w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  
                  <span className="block text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent mb-2">
                    {item.number}
                  </span>
                  
                  <span className="text-gray-600 text-lg">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Image */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.pexels.com/photos/3845555/pexels-photo-3845555.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Dental Achievement" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-[#0B2B4A]/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-light text-center px-4 max-w-4xl">
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
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default About;