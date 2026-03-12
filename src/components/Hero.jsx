import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Professional slider images array
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "State-of-the-Art Facility",
      description: "Experience modern dentistry at its finest"
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-ec1c8f695e20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Advanced Treatment Rooms",
      description: "Equipped with latest dental technology"
    },
    {
      url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Expert Dental Team",
      description: "Dedicated professionals for your care"
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Happy Smiles",
      description: "Transforming lives one smile at a time"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Dental Care",
      description: "Your comfort is our priority"
    }
  ];

  // Right side images/videos array - now static, no auto-play
  const mediaContent = [
    {
      type: "video",
      url: "https://player.vimeo.com/external/370468553.sd.mp4?s=90bf2b2e5e2a53a4473e4d1a6b7b2d7b7f7b2e5e&profile_id=164&oauth2_token_id=57447761",
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Virtual Clinic Tour",
      duration: "2:30"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dr. Prity Bhushan",
      description: "Leading Dental Expert"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dental Implant Procedure",
      description: "Advanced Technology"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Smile Makeover",
      description: "Before & After Results"
    }
  ];

  // REMOVED: Auto-play effect for right media
  // Now only the top slider auto-plays
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Text animation effect
  useEffect(() => {
    setShowText(true);
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="w-full">
      {/* Professional Top Slider - THIS IS THE ONLY AUTO-PLAYING SLIDER */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
              {/* Slide Content */}
              <div className="absolute bottom-20 left-8 md:left-16 lg:left-24 text-white max-w-2xl">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transform translate-y-0 animate-slideUp">
                  {slide.title}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 animate-slideUp delay-300">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-20"
        >
          ←
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-20"
        >
          →
        </button>

        {/* Professional Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              } rounded-full`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section with Dr. Prity Bhushan Details and Right Media */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-50 py-16 md:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Dr. Prity Bhushan Details */}
            <div className={`transform transition-all duration-1000 ${showText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Badge */}
              <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                ⭐ Top Rated Dental Expert
              </div>

              {/* Doctor's Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4">
                Dr.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
                    Prity
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-sky-200 -z-10 animate-width"></span>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
                    Bhushan
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200 -z-10 animate-width animation-delay-500"></span>
                </span>
              </h1>

              {/* Qualifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">BDS</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">MDS</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">Implantology</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">Cosmetic Dentistry</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">15+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">10k+</div>
                  <div className="text-xs text-gray-600">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">5★</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                Renowned dental surgeon specializing in painless treatments, 
                smile makeovers, and advanced dental care. Committed to providing 
                personalized care with modern technology.
              </p>

              {/* Specializations Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <div className="bg-white p-3 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <span className="text-2xl mb-1 block">🦷</span>
                  <span className="text-xs font-semibold">Root Canal</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <span className="text-2xl mb-1 block">✨</span>
                  <span className="text-xs font-semibold">Whitening</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <span className="text-2xl mb-1 block">👑</span>
                  <span className="text-xs font-semibold">Crowns</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <span className="text-2xl mb-1 block">🔷</span>
                  <span className="text-xs font-semibold">Implants</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-1">
                  Book Consultation
                </button>
                <button className="border-2 border-sky-500 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all hover:-translate-y-1">
                  Watch Video ▶
                </button>
              </div>
            </div>

            {/* Right Side - Static Media Section */}
            <div className={`transform transition-all duration-1000 delay-300 ${showText ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-purple-200 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>
                
                {/* Main Media Container */}
                <div className="relative bg-gradient-to-br from-sky-400 to-purple-500 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Media Display - Now showing only the first image by default */}
                    <div className="relative aspect-[4/3] bg-gray-900">
                      <img 
                        src={mediaContent[0].url}
                        alt={mediaContent[0].title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Media Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h4 className="text-white font-semibold text-lg">
                          Dr. Prity Bhushan
                        </h4>
                        <p className="text-gray-200 text-sm">
                          Leading Dental Expert
                        </p>
                      </div>

                      {/* Media Type Badge */}
                      <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                        📸 Featured Image
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-white p-2 rounded-lg shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 bg-white p-2 rounded-lg shadow-lg animate-float animation-delay-2000">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🦷</span>
                    <span className="text-sm font-semibold">Painless</span>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg hidden lg:block">
                  <div className="flex flex-col gap-2">
                    <span className="text-blue-600">f</span>
                    <span className="text-pink-600">📷</span>
                    <span className="text-blue-400">🐦</span>
                    <span className="text-red-600">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        @keyframes width {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-width {
          animation: width 1s ease-out forwards;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;