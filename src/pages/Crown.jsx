import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Phone, ChevronRight } from 'lucide-react'

const Crown = () => {
  const navigate = useNavigate();

  // Dental crown image URL
  const crownImage = "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${crownImage})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          {/* Breadcrumb */}
          <div className="mb-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            <Link to="/" className="text-sm hover:text-teal-200 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="text-sm hover:text-teal-200 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-teal-200">Dental Crowns</span>
          </div>

          {/* Main Heading - Centered on Image */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
            Dental Crowns
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-teal-200 max-w-3xl mx-auto animate-fadeInUp delay-100">
            Restore Your Smile with Custom-Made Crowns
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-teal-400 mt-8 rounded-full"></div>
        </div>
      </div>

      {/* Breadcrumb Navigation (Mobile - Hidden on desktop) */}
      <div className="md:hidden bg-white shadow-sm border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/services" className="hover:text-teal-600 transition-colors">Services</Link>
            <span className="mx-2">›</span>
            <span className="text-teal-600 font-medium">Dental Crowns</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service Details */}
        <div className="bg-white rounded-2xl shadow-soft-medical p-8 mb-8">
          <h2 className="text-2xl font-semibold text-deep-navy mb-4">
            What are Dental Crowns?
          </h2>
          <p className="text-gray-600 mb-6">
            A dental crown is a tooth-shaped "cap" that is placed over a tooth to restore its shape, 
            size, strength, and improve its appearance. When cemented into place, crowns fully encase 
            the entire visible portion of a tooth, providing natural-looking and long-lasting protection.
          </p>
          
          <h3 className="text-xl font-semibold text-deep-navy mb-3">
            Why You Might Need a Crown:
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>To protect a weak tooth from breaking</li>
            <li>To restore an already broken tooth</li>
            <li>To cover and support a tooth with a large filling</li>
            <li>To hold a dental bridge in place</li>
            <li>To cover misshaped or severely discolored teeth</li>
            <li>To cover a dental implant</li>
            <li>After a root canal treatment</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-deep-navy mb-3">
            Types of Crowns We Offer:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-teal-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-teal-600 mb-2">Ceramic Crowns</h4>
              <p className="text-sm text-gray-600">Natural-looking, metal-free option perfect for front teeth</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-teal-600 mb-2">Porcelain-fused-to-metal</h4>
              <p className="text-sm text-gray-600">Durable and natural-looking for back teeth</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-teal-600 mb-2">Gold Crowns</h4>
              <p className="text-sm text-gray-600">Extremely durable and gentle on opposing teeth</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-teal-600 mb-2">Zirconia Crowns</h4>
              <p className="text-sm text-gray-600">Strong, aesthetic, and biocompatible</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 p-6 bg-teal-50 rounded-xl">
            <h3 className="text-xl font-semibold text-deep-navy mb-4">Benefits of Dental Crowns:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-600">Natural appearance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-600">Long-lasting durability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-600">Protects damaged teeth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-600">Restores functionality</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/appointment')}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-full shadow-soft-medical hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book an Appointment
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-soft-medical hover:shadow-lg transition-all duration-300 border-2 border-teal-600 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </button>
        </div>

        {/* Back to Services Link */}
        <div className="text-center mt-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </div>
      </div>

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
      `}</style>
    </div>
  )
}

export default Crown