import React from "react";
import {
  Award,
  Camera,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Mic,
  Phone,
  Shield,
  Smile,
  Star,
  Twitter,
  User,
  Sparkles,
  Brush,
  Bone,
  Activity,
  Calendar,
  AlertCircle,
  Droplet,
  Syringe,
  Stethoscope,
  Scale,
  Pill,
  FileText,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const GenralDentistry = () => {
  // High‑quality professional dentistry background
  const heroBackground = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 font-['Inter']">
      {/* Hero section with background image and centered heading */}
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33]/80 to-[#2ac9c9]/60 mix-blend-multiply" />
        </div>
        
        {/* Centered heading */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              General Dentistry
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 max-w-2xl mx-auto font-light drop-shadow">
              Comprehensive care for a lifetime of healthy smiles
            </p>
            <div className="w-24 h-1 bg-[#2ac9c9] mx-auto mt-6 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <div className="mt-8">
          <h2 className="text-3xl mb-8 font-medium flex items-center gap-3 text-[#0B1E33]">
            <span className="w-1 h-8 rounded-full bg-[#2ac9c9]"></span>
            our general dentistry services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">dental exams</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Comprehensive oral examinations to assess your dental health and detect issues early.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brush className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">professional cleanings</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Remove plaque, tartar, and stains for a healthier, brighter smile.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">fillings</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tooth-colored composite fillings that blend naturally with your smile.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">sealants</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Protective coatings for children's teeth to prevent cavities.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Syringe className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">fluoride treatment</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Strengthen enamel and prevent decay with professional fluoride.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm rounded-[1.5rem] p-6 shadow-[0_8px_25px_-12px_rgba(11,30,51,0.1)] border border-teal-100 hover:shadow-[0_25px_40px_-16px_rgba(11,30,51,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ac9c9]/10 to-[#179b9b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#0B1E33]">oral cancer screening</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Early detection of oral abnormalities for your safety.
              </p>
            </div>
          </div>
        </div>

        {/* Additional sections (if any) can be placed here */}
        {/* For example, a CTA or team section – but we keep structure clean */}
      </div>

      {/* Global styles */}
      <style>{`
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
      `}</style>
    </div>
  );
};

export default GenralDentistry;