import React, { useState } from 'react';

const Profile = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Doctor's main profile image with overlay text
  const mainProfileImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  // 12 Doctor images array
  const doctors = [
    {
      id: 1,
      name: "Dr. Prity Bhushan",
      specialization: "Founder & Lead Dentist",
      qualification: "BDS, MDS (Oral Surgery)",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Dental Implants", "Smile Design", "Root Canal"],
      description: "Pioneer in painless dentistry with expertise in complex surgical procedures."
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Orthodontic Specialist",
      qualification: "BDS, MDS (Orthodontics)",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Braces", "Aligners", "Jaw Correction"],
      description: "Expert in creating perfect smiles through advanced orthodontic treatments."
    },
    {
      id: 3,
      name: "Dr. Sneha Patel",
      specialization: "Periodontist",
      qualification: "BDS, MDS (Periodontology)",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Gum Treatment", "Laser Surgery", "Dental Implants"],
      description: "Specialist in gum care and dental implant procedures."
    },
    {
      id: 4,
      name: "Dr. Amit Sharma",
      specialization: "Endodontist",
      qualification: "BDS, MDS (Endodontics)",
      experience: "11+ Years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Root Canal", "Microscopic Dentistry", "Tooth Preservation"],
      description: "Pain-free root canal specialist using modern microscopic techniques."
    },
    {
      id: 5,
      name: "Dr. Priya Singh",
      specialization: "Pediatric Dentist",
      qualification: "BDS, MDS (Pedodontics)",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Child Dentistry", "Preventive Care", "Dental Anxiety Management"],
      description: "Making dental visits fun and comfortable for children."
    },
    {
      id: 6,
      name: "Dr. Vikram Mehta",
      specialization: "Prosthodontist",
      qualification: "BDS, MDS (Prosthodontics)",
      experience: "14+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Crowns", "Bridges", "Dentures"],
      description: "Expert in restorative dentistry and smile rehabilitation."
    },
    {
      id: 7,
      name: "Dr. Anjali Desai",
      specialization: "Cosmetic Dentist",
      qualification: "BDS, MDS (Cosmetic Dentistry)",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Veneers", "Teeth Whitening", "Smile Makeover"],
      description: "Creating beautiful, natural-looking smiles with cosmetic expertise."
    },
    {
      id: 8,
      name: "Dr. Sanjay Gupta",
      specialization: "Oral Surgeon",
      qualification: "BDS, MDS (Oral Surgery)",
      experience: "16+ Years",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Wisdom Teeth", "Jaw Surgery", "Dental Implants"],
      description: "Skilled in complex oral surgical procedures."
    },
    {
      id: 9,
      name: "Dr. Neha Verma",
      specialization: "Public Health Dentist",
      qualification: "BDS, MPH",
      experience: "7+ Years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Preventive Dentistry", "Community Outreach", "Dental Education"],
      description: "Dedicated to community dental health and prevention."
    },
    {
      id: 10,
      name: "Dr. Rohan Khanna",
      specialization: "Implantologist",
      qualification: "BDS, MDS (Implantology)",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Dental Implants", "Bone Grafting", "Sinus Lift"],
      description: "Specialist in advanced implantology and bone regeneration."
    },
    {
      id: 11,
      name: "Dr. Pooja Malhotra",
      specialization: "Oral Pathologist",
      qualification: "BDS, MDS (Oral Pathology)",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Oral Cancer Screening", "Diagnostic Expertise", "Lesion Detection"],
      description: "Expert in early detection and diagnosis of oral diseases."
    },
    {
      id: 12,
      name: "Dr. Arjun Nair",
      specialization: "Laser Dentist",
      qualification: "BDS, Laser Dentistry Certification",
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Laser Treatment", "Painless Procedures", "Gum Contouring"],
      description: "Pioneer in laser dentistry for pain-free treatments."
    }
  ];

  // Hospital highlights
  const hospitalHighlights = [
    { icon: "🏥", count: "10,000+", label: "Happy Patients" },
    { icon: "🦷", count: "15+", label: "Expert Doctors" },
    { icon: "⭐", count: "4.9", label: "Google Rating" },
    { icon: "🔬", count: "Modern", label: "Technology" },
    { icon: "🌡️", count: "Painless", label: "Procedures" },
    { icon: "🏆", count: "Award", label: "Winning Care" }
  ];

  // Leadership team
  const leadershipTeam = [
    {
      name: "Dr. Prity Bhushan",
      role: "Founder & Medical Director",
      qualification: "BDS, MDS (Oral Surgery)",
      experience: "15+ Years",
      vision: "Creating pain-free dental experiences with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of Orthodontics",
      qualification: "BDS, MDS (Orthodontics)",
      experience: "12+ Years",
      vision: "Transforming smiles through innovative orthodontic techniques",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Sneha Patel",
      role: "Head of Periodontics",
      qualification: "BDS, MDS (Periodontology)",
      experience: "10+ Years",
      vision: "Excellence in gum care and dental implantology",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Hospital milestones
  const milestones = [
    { year: "2008", event: "Chisel Dental Founded by Dr. Prity Bhushan" },
    { year: "2012", event: "Expanded to Multi-Specialty Dental Hospital" },
    { year: "2015", event: "Introduced Painless Laser Dentistry" },
    { year: "2018", event: "Awarded 'Best Dental Clinic' by Health Excellence" },
    { year: "2020", event: "Crossed 10,000 Happy Patients Milestone" },
    { year: "2023", event: "Launched Advanced Dental Implant Center" }
  ];

  return (
    <div className="w-full">
      {/* Hero Image with Overlay Text */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src={mainProfileImage}
          alt="Dr. Prity Bhushan"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              {/* Profile Text in Middle */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-pulse">
                OUR PROFILE
              </h1>
              <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
                Excellence in Dental Care | Compassion | Innovation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Chisel Dental: A Legacy of Excellence
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Story</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2008 by Dr. Prity Bhushan, Chisel Dental began with a simple mission: 
                to provide painless, compassionate, and world-class dental care. What started as 
                a small clinic has now grown into one of the most trusted multi-specialty dental 
                hospitals in the region.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today, Chisel Dental stands as a beacon of excellence in dental healthcare, 
                housing 15+ specialized doctors, state-of-the-art infrastructure, and a 
                patient-centric approach that has touched over 10,000 lives.
              </p>
              <div className="bg-sky-50 p-6 rounded-lg">
                <h4 className="font-bold text-sky-800 mb-2">Our Mission</h4>
                <p className="text-gray-700">To deliver exceptional dental care through innovation, expertise, and compassion, ensuring every patient leaves with a confident smile.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-600 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">2008</div>
                <div className="text-sm">Year Founded</div>
              </div>
              <div className="bg-sky-500 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Expert Doctors</div>
              </div>
              <div className="bg-sky-400 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm">Happy Patients</div>
              </div>
              <div className="bg-sky-300 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Milestones Timeline */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Our Journey Through the Years
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sky-300 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="flex-1 md:text-right md:pr-8">
                    {index % 2 === 0 ? (
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <span className="text-2xl font-bold text-sky-600">{milestone.year}</span>
                        <p className="text-gray-700 mt-2">{milestone.event}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block"></div>
                    )}
                  </div>
                  
                  <div className="w-4 h-4 bg-sky-600 rounded-full relative z-10 my-4 md:my-0"></div>
                  
                  <div className="flex-1 md:pl-8">
                    {index % 2 !== 0 ? (
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <span className="text-2xl font-bold text-sky-600">{milestone.year}</span>
                        <p className="text-gray-700 mt-2">{milestone.event}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Leadership
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visionary leaders driving excellence in dental healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">{leader.name}</h3>
                  <p className="text-sky-600 font-semibold">{leader.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{leader.qualification}</p>
                  <p className="text-gray-600 mt-3 text-sm">{leader.experience} Experience</p>
                  <div className="mt-4 p-3 bg-sky-50 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"{leader.vision}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Prity Bhushan Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Dr. Prity Bhushan
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Dr. Prity Bhushan"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-sky-500 text-white p-4 rounded-lg shadow-xl">
                <span className="text-2xl font-bold">15+ Years</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="text-2xl font-bold text-sky-600">Dr. Prity Bhushan</span>, a visionary in modern dentistry, 
                has been transforming smiles and lives for over 15 years. Her philosophy centers on 
                providing painless, personalized, and premium dental care using state-of-the-art technology.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Under her leadership, Chisel Dental has grown into a premier dental institution, 
                housing a team of 15+ specialized doctors, each expert in their respective fields. 
                The hospital is equipped with cutting-edge technology and follows international 
                sterilization protocols.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Dr. Prity's commitment to excellence has earned her numerous accolades and the 
                trust of thousands of patients. She continues to pioneer new techniques in 
                painless dentistry, ensuring every patient receives the highest standard of care.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <span className="text-sky-600 font-bold block">BDS, MDS</span>
                  <span className="text-sm text-gray-600">Oral Surgery</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <span className="text-sky-600 font-bold block">15+ Years</span>
                  <span className="text-sm text-gray-600">Experience</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <span className="text-sky-600 font-bold block">10,000+</span>
                  <span className="text-sm text-gray-600">Smiles Created</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <span className="text-sky-600 font-bold block">Award Winner</span>
                  <span className="text-sm text-gray-600">Best Dentist 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Goodness Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Chisel Dental?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hospitalHighlights.map((item, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-xl font-bold">{item.count}</div>
                <div className="text-sm text-gray-200">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg">
              "Our hospital combines medical excellence with compassionate care. 
              With 15+ specialized doctors, modern technology, and a patient-first approach, 
              we ensure every visit is comfortable and effective."
            </p>
            <p className="mt-4 font-semibold">- Dr. Prity Bhushan</p>
          </div>
        </div>
      </section>

      {/* Infrastructure & Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            State-of-the-Art Infrastructure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-sky-800 mb-4">Advanced Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>3D Digital X-rays & CBCT Scanner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>Laser Dentistry Equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>Dental Operating Microscope</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>CAD/CAM Technology for Crowns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-sky-800 mb-4">Patient Comfort</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>Air-conditioned Operation Theatres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>Private Recovery Rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>Entertainment System in Waiting Area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">✓</span>
                  <span>International Sterilization Protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Doctors Section with 12 Images - Placed right before footer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Expert Doctors
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of 15+ specialized dental professionals dedicated to your smile
            </p>
          </div>

          {/* 12 Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm">{doctor.experience}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {doctor.expertise.slice(0, 2).map((exp, idx) => (
                          <span key={idx} className="text-xs bg-sky-500 px-2 py-1 rounded-full">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-800">{doctor.name}</h3>
                  <p className="text-sky-600 text-sm font-semibold">{doctor.specialization}</p>
                  <p className="text-gray-500 text-xs mt-1">{doctor.qualification}</p>
                  
                  {/* View Profile Button */}
                  <button 
                    className="mt-3 w-full bg-sky-50 text-sky-600 py-2 rounded-lg text-sm font-semibold hover:bg-sky-100 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDoctor(doctor);
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Doctors Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              And 3 more specialist doctors... Total team of 15+ dental experts
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDoctor(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white z-10"
              >
                ✕
              </button>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-slate-800">{selectedDoctor.name}</h2>
                    <p className="text-sky-600 font-semibold">{selectedDoctor.specialization}</p>
                    <p className="text-gray-600 mt-1">{selectedDoctor.qualification}</p>
                    <p className="text-gray-700 mt-2">{selectedDoctor.description}</p>
                    
                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">Expertise:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDoctor.expertise.map((exp, idx) => (
                          <span key={idx} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-sky-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Experience:</span> {selectedDoctor.experience}
                      </p>
                      <button className="mt-3 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;