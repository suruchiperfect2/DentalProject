import React, { useState, useEffect } from "react";
import { Calendar, Phone, Award, Users, Clock, ChevronRight, ChevronLeft, Star, MapPin, Mail } from 'lucide-react';

// Professional Hero Slider Component
const HeroSlider = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                {/* Clinic Badge */}
                <div className="mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full animate-fadeInUp">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Dr. Prity Raushan Dental Clinic</span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp delay-100">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-teal-200 mb-4 animate-fadeInUp delay-200">
                  {slide.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fadeInUp delay-300">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-400">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="group px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-teal-400' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

// Live Counter Component
const LiveCounter = ({ value, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-teal-600">{count}+</div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

const Home = () => {
  // Hero Slider Images - Professional Dental Images
  const heroImages = [
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Welcome to Dr. Prity Raushan's Dental Clinic",
      subtitle: "Advanced Dental Care & Smile Design",
      description: "Experience world-class dental care in a comfortable, modern environment"
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Your Perfect Smile Awaits",
      subtitle: "Expert Care for the Whole Family",
      description: "Comprehensive dental treatments using the latest technology"
    },
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "State-of-the-Art Technology",
      subtitle: "Precision. Comfort. Excellence.",
      description: "Digital X-rays, 3D imaging, and painless treatments"
    },
    {
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Transform Your Smile Today",
      subtitle: "Cosmetic & Restorative Dentistry",
      description: "From teeth whitening to dental implants - we do it all"
    }
  ];

  // Doctor's image
  const doctorImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  // Virtual tour image
  const virtualTourImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  // Treatment images
  const treatmentImages = [
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Cosmetic Dentistry - Smile Makeovers"
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Dental Implants - Permanent Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1598256986427-82aefc7d36de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Orthodontics - Perfect Alignment"
    }
  ];

  // Team images
  const teamImages = [
    {
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Front Desk Team - Your First Smile"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Clinical Staff - Expert Care Team"
    },
    {
      url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Support Team - Always Here to Help"
    }
  ];

  // Testimonial images
  const testimonialImages = [
    {
      url: "https://images.unsplash.com/photo-1573497019418-b400bb5c074b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: 'Sarah Johnson - "Best dental experience! Very professional and caring."'
    },
    {
      url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: 'Mike Thompson - "Amazing results from my smile makeover. Highly recommend!"'
    },
    {
      url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: 'Emma Davis - "The team made me feel comfortable throughout my treatment."'
    }
  ];

  return (
    <div className="w-full">
      {/* Professional Hero Slider - Single Slider */}
      <HeroSlider images={heroImages} interval={6000} />

      {/* Hero Section - Dr. Prity Raushan */}
      <section className="bg-gradient-to-r from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Leading Dental Expert</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy leading-tight">
              Dr. Prity Raushan
            </h1>

            <p className="mt-4 text-xl text-teal-600 font-medium">
              BDS, MDS – Advanced Dental Care & Smile Design
            </p>

            <p className="mt-6 text-slate-600 text-lg">
              Providing gentle, advanced, and personalized dental treatment
              using modern technology for healthy and confident smiles with over 10+ years of experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>

              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">5000+</div>
                <div className="text-sm text-slate-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-slate-600">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={doctorImage}
                alt="Dr. Prity Raushan"
                className="w-[400px] h-[500px] rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">4.9</span>
                  <span className="text-slate-600">(500+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-teal-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-deep-navy">Expert Team</h3>
              <p className="text-sm text-slate-600 mt-2">Specialized dental professionals</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-deep-navy">Flexible Hours</h3>
              <p className="text-sm text-slate-600 mt-2">Mon-Sat: 9AM-8PM</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-deep-navy">Modern Technology</h3>
              <p className="text-sm text-slate-600 mt-2">State-of-the-art equipment</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-deep-navy">Pain-Free</h3>
              <p className="text-sm text-slate-600 mt-2">Gentle & comfortable care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Virtual Tour of Our Clinic</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Take a 360° virtual tour of our state-of-the-art dental facility
          </p>
          <div className="relative rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto">
            <img 
              src={virtualTourImage}
              alt="Clinic Virtual Tour"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition group">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[25px] border-t-transparent border-b-transparent border-l-teal-600 ml-2"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-deep-navy mb-6">
            About Dr. Prity Raushan
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Dr. Prity Raushan is a highly experienced dental professional
            dedicated to delivering exceptional oral healthcare. With a strong
            focus on patient comfort, hygiene, and precision, she specializes
            in modern dental treatments and cosmetic smile design. Her gentle
            approach and commitment to excellence have made her a trusted name
            in dental care.
          </p>
        </div>
      </section>

      {/* We Specialize In Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
            Our Specializations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {treatmentImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={image.url} alt={image.caption} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-center font-medium text-deep-navy">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
            Our Dental Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-3">
                General Dentistry
              </h3>
              <p className="text-slate-600">
                Complete oral checkups, cleaning, fillings, and preventive care for optimal dental health.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-3">
                Cosmetic Dentistry
              </h3>
              <p className="text-slate-600">
                Smile design, teeth whitening, veneers, and aesthetic treatments for your perfect smile.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-3">
                Advanced Treatments
              </h3>
              <p className="text-slate-600">
                Root canal therapy, crowns, bridges, and restorative dentistry using latest technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
            Our Expert Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={image.url} alt={image.caption} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <p className="text-center font-medium text-deep-navy">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
            Patient Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialImages.map((image, index) => (
              <div key={index} className="bg-teal-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={image.url} alt={image.caption} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-slate-600 italic">"{image.caption}"</p>
                  <div className="mt-4 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Procedures Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-teal-100">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-teal-100">Happy Patients</div>
            </div>
          </div>

          {/* Live Activity Ticker */}
          <div className="mt-8 bg-white/10 rounded-lg p-4 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="mx-4">🟢 Sarah just booked an appointment</span>
              <span className="mx-4">⭐ John left a 5-star review</span>
              <span className="mx-4">😊 Mike completed his treatment</span>
              <span className="mx-4">🦷 Emma scheduled a consultation</span>
              <span className="mx-4">👤 David recommended us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-deep-navy mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Book your appointment today and take the first step towards better dental health
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </button>
            
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-teal-100">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-teal-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-teal-600" />
                <span>drprityraushan@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span>123 Dental Street, City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add animations CSS */}
      <style jsx>{`
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;