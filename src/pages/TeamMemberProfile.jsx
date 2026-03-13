import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


const TeamMemberProfile = () => {
  const { doctorId, serviceType } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [member, setMember] = useState(null);
  const [service, setService] = useState(null);
  const [relatedSpecialists, setRelatedSpecialists] = useState([]);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    // Check if we're viewing a doctor profile
    if (doctorId) {
      const foundMember = teamMembers.find(m => m.id === doctorId);
      if (foundMember) {
        setMember(foundMember);
        setService(null);
      } else {
        navigate('/team');
      }
    }
    
    // Check if we're viewing a service
    if (serviceType) {
      const foundService = serviceInfo[serviceType.toLowerCase().replace(/\s+/g, '')];
      if (foundService) {
        setService(foundService);
        setMember(null);
        
        // Get related specialists
        const specialists = teamMembers.filter(m => 
          foundService.specialists.includes(m.id)
        );
        setRelatedSpecialists(specialists);
      } else {
        navigate('/services');
      }
    }
  }, [doctorId, serviceType, navigate]);

  if (!member && !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Render service page
  if (service) {
    return (
      <div className="font-sans text-gray-700 leading-relaxed">
        {/* Hero Section */}
        <div className="relative h-[300px] bg-gradient-to-r from-teal-600 to-[#0B2B4A] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C8 2 4 4 4 8c0 3 2 5 2 5s-2 2-2 4c0 3 4 5 8 5s8-2 8-5c0-2-2-4-2-4s2-2 2-5c0-4-4-6-8-6z' fill='white' opacity='0.2'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <span className="text-8xl mb-4 block">{service.icon}</span>
              <h1 className="text-5xl md:text-6xl text-white font-light mb-4">{service.name}</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-3xl font-light text-[#0B2B4A] mb-6">About This Treatment</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}. Our specialized team uses the latest technology and techniques 
                  to ensure optimal results with minimal discomfort.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-[#0B2B4A] mb-2">Procedure</h3>
                    <p className="text-gray-600">{service.procedure}</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-[#0B2B4A] mb-2">Duration</h3>
                    <p className="text-gray-600">{service.duration}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-light text-[#0B2B4A] mb-4">Treatment Process</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Initial Consultation</h4>
                      <p className="text-gray-600">Comprehensive examination and treatment planning</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Treatment Phase</h4>
                      <p className="text-gray-600">Actual procedure performed by specialist</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Follow-up Care</h4>
                      <p className="text-gray-600">Regular checkups and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-[#0B2B4A] mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Treatment Time</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Recovery</span>
                    <span className="font-medium">Minimal</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-medium">Covered</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-[#0B2B4A] mb-4">Our Specialists</h3>
                <div className="space-y-4">
                  {relatedSpecialists.map(specialist => (
                    <div 
                      key={specialist.id}
                      onClick={() => navigate(`/team/${specialist.id}`)}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-teal-50 transition-colors"
                    >
                      <img 
                        src={specialist.image} 
                        alt={specialist.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-[#0B2B4A]">{specialist.name}</p>
                        <p className="text-sm text-gray-500">{specialist.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/appointment')}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Appointment for {service.name}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render doctor profile
  return (
    <div className="font-sans text-gray-700 leading-relaxed">
      {/* Profile Header */}
      <div className="relative h-[300px] bg-gradient-to-r from-teal-600 to-[#0B2B4A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C8 2 4 4 4 8c0 3 2 5 2 5s-2 2-2 4c0 3 4 5 8 5s8-2 8-5c0-2-2-4-2-4s2-2 2-5c0-4-4-6-8-6z' fill='white' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <button 
          onClick={() => navigate('/team')}
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors z-10"
        >
          ← Back to Team
        </button>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Profile Header with Image */}
          <div className="relative h-40 bg-gradient-to-r from-teal-500 to-teal-600"></div>
          
          <div className="px-4 sm:px-8 pb-8">
            {/* Profile Image and Basic Info */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 -mt-20">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl mx-auto md:mx-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-light text-[#0B2B4A] mb-2">{member.name}</h1>
                <p className="text-lg md:text-xl text-teal-600 mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.specialty}</p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium">
                    ⭐ {member.experience} Experience
                  </span>
                  <span className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium">
                    🎓 {member.education}
                  </span>
                </div>
              </div>

              <div className="flex md:flex-col gap-3 justify-center">
                <button 
                  onClick={() => navigate('/appointment')}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 border-b mt-8">
              {['about', 'services', 'achievements', 'education', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium capitalize transition-colors ${
                    activeTab === tab 
                      ? 'text-teal-600 border-b-2 border-teal-600' 
                      : 'text-gray-500 hover:text-teal-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-light text-[#0B2B4A] mb-4">About {member.name}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.about}</p>
                    
                    <h3 className="text-xl font-light text-[#0B2B4A] mb-3">Languages Spoken</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.languages.map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-light text-[#0B2B4A] mb-3">Availability</h3>
                    <p className="text-gray-600 mb-4">{member.availability}</p>
                  </div>

                  <div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-[#0B2B4A] mb-4">Quick Info</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Experience</span>
                          <span className="font-medium">{member.experience}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Patients</span>
                          <span className="font-medium">5000+</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Rating</span>
                          <span className="font-medium">⭐ 4.9/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-light text-[#0B2B4A] mb-6">Services Provided</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {member.services.map((service, index) => (
                      <div 
                        key={index}
                        onClick={() => navigate(`/service/${service.toLowerCase().replace(/\s+/g, '')}`)}
                        className="p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors cursor-pointer"
                      >
                        <p className="font-medium text-[#0B2B4A] mb-2">{service}</p>
                        <p className="text-sm text-gray-500">Click for details →</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-2xl font-light text-[#0B2B4A] mb-6">Achievements & Awards</h2>
                  <div className="grid gap-4">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <span className="text-3xl">🏆</span>
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-light text-[#0B2B4A] mt-8 mb-4">Certifications</h3>
                  <div className="grid gap-3">
                    {member.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        <p className="text-gray-600">{cert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div>
                  <h2 className="text-2xl font-light text-[#0B2B4A] mb-6">Education & Training</h2>
                  <div className="space-y-4">
                    {member.education_details.map((edu, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎓</span>
                        <p className="text-gray-700">{edu}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Tab */}
              {activeTab === 'contact' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-[#0B2B4A] mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📧</span>
                        <p className="text-gray-600">{member.social.email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        <p className="text-gray-600">{member.social.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📍</span>
                        <p className="text-gray-600">123 Dental Street, City - 400001</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-[#0B2B4A] mb-4">Send a Message</h3>
                    <form className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:border-teal-500"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:border-teal-500"
                      />
                      <textarea 
                        rows="3"
                        placeholder="Your Message"
                        className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:border-teal-500"
                      ></textarea>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;