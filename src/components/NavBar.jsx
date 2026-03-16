import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, Mail, Phone, Menu, X, Calendar, ChevronRight, 
  Home, User, Stethoscope, Star, IndianRupee, MessageSquare, Info 
} from 'lucide-react';
import logo from "../assets/logo_no_background.png"; // Your logo import

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      path: "/about", 
      label: "About Us",
    },
    { 
      label: "Services", 
      dropdown: [
        { path: "/dental-implants", label: "Dental Implants" },
        { path: "/Crown", label: "Crowns" },
        { path: "/Deepbite", label: "Deep Bite" },
        { path: "/Dentalfluorosis", label: "Dental Fluorosis" },
        { path: "/Spacing", label: "Spacing" },
        { path: "/Earlychildhoodcare", label: "Early Childhood Caries" },
        { path: "/Orthodontics", label: "Orthodontics" },
        { path: "/Rootcanaltreatment", label: "Root Canal Treatment" },
        { path: "/Dentaltreatments", label: "Dental Treatments" },
        { path: "/GenralDentistry", label: "Genral Dentistry" },
        { path: "/case-blogs", label: "Case Blogs" },
        { path: "/Cosmeticdentistry", label: "Cosmetic Dentistry" },
        { path: "/TeethWhitening", label: "Teeth Whitening" },
        { path: "/Pediatricdentistry", label: "Pediatric Dentistry" },
      ]
    },
    { path: "/Treatmentcharges", label: "Treatment Charges" },
    { path: "/contact", label: "Contact" },
  ];

  // Organize services into categories for better UX
  const servicesCategories = {
    "Restorative": ["Crowns", "Dental Implants", "Root Canal Treatment"],
    "Orthodontic": ["Deep Bite", "Spacing", "Orthodontics"],
    "Cosmetic": ["Cosmetic Dentistry", "Teeth Whitening", "Dental Fluorosis"],
    "Genral": ["Genral Dentistry", "Dental Treatments", "Pediatric Dentistry", "Early Childhood Caries"],
    "Resources": ["Case Blogs"]
  };

  // Function to handle navigation and close menus
  const handleNavigation = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* TOP BAR - Premium Teal Gradient with enhanced info */}
      <div className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </span>
              <span className="hidden sm:inline text-teal-200">|</span>
              <span className="flex items-center gap-1.5">
                <span className="hidden sm:inline">Sun: By Appointment</span>
              </span>
              <span className="hidden lg:inline text-teal-200">|</span>
              <span className="hidden lg:flex items-center gap-1.5">
                <span>Emergency: +91 98765 43210</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:drprityraushan@gmail.com" className="flex items-center gap-1.5 hover:text-teal-100 transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">drprityraushan@gmail.com</span>
              </a>
              <span className="text-teal-200">|</span>
              <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-teal-100 transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - Clean White with Soft Shadow */}
      <nav className="bg-white/90 backdrop-blur-md shadow-soft-medical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LEFT: YOUR LOGO + NAME - WITH INCREASED SIZE */}
            <Link to="/" className="flex items-center gap-4 group" onClick={handleNavigation}>
              <div className="relative">
                {/* Logo Container - Increased size */}
                <div className="rounded-1xl">
                  <img
                    src={logo}
                    alt="Dr. Prity Raushan Dental Clinic"
                    className="h-13 w-15 object-contain"
                  />
                </div>
                {/* Optional glow effect */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-sky-400 rounded-full animate-pulse"></div>
              </div>
              <div className="leading-tight">
                <h1 className="text-xl md:text-2xl font-bold text-deep-navy group-hover:text-teal-600 transition-colors">
                  Dr. Prity Raushan
                </h1>
                <p className="text-xs md:text-sm text-teal-600 tracking-wider font-medium">
                  Advanced Dental Care & Smile Design
                </p>
              </div>
            </Link>

            {/* RIGHT: MENU DESKTOP */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6">
                {menuItems.map((item) => (
                  <li 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  >
                    {item.dropdown ? (
                      <div>
                        <button 
                          className="flex items-center gap-1.5 text-deep-navy font-medium hover:text-teal-600 transition-colors duration-300 group"
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-90' : ''}`} />
                        </button>
                        
                        {/* Dropdown Menu - Fixed closing issue */}
                        {activeDropdown === item.label && (
                          <div 
                            className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden animate-fadeIn"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            <div className="grid grid-cols-2 gap-4 p-4">
                              {/* Categories */}
                              {Object.entries(servicesCategories).map(([category, services]) => (
                                <div key={category} className="space-y-2">
                                  <h3 className="font-semibold text-teal-600 text-sm uppercase tracking-wider border-b border-teal-100 pb-1">
                                    {category}
                                  </h3>
                                  <div className="space-y-1">
                                    {services.map((serviceName) => {
                                      const serviceItem = item.dropdown.find(d => d.label === serviceName);
                                      return serviceItem ? (
                                        <Link
                                          key={serviceItem.path}
                                          to={serviceItem.path}
                                          className="block px-3 py-1.5 text-sm text-deep-navy hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent hover:text-teal-600 transition-all duration-300 rounded-lg"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveDropdown(null);
                                          }}
                                        >
                                          {serviceItem.label}
                                        </Link>
                                      ) : null;
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* View All Services Link */}
                            <div className="bg-teal-50 px-4 py-3 border-t border-teal-100">
                              <Link
                                to="/services"
                                className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center justify-center gap-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveDropdown(null);
                                }}
                              >
                                
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center gap-1.5 text-deep-navy font-medium hover:text-teal-600 transition-colors duration-300 group"
                        onClick={handleNavigation}
                      >
                        {item.icon && <span className="text-teal-500">{item.icon}</span>}
                        <span>{item.label}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Appointment Button - Premium Style */}
              <Link
                to="/appointment"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-full shadow-soft-medical hover:shadow-lg transition-all duration-300 overflow-hidden"
                onClick={handleNavigation}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white flex items-center justify-center shadow-soft-medical hover:shadow-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU - Premium Slide Down with enhanced items */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md shadow-soft-medical transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[800px] border-t border-teal-100" : "max-h-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Logo/Header */}
            <div className="flex items-center gap-4 pb-3 border-b border-teal-100">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold text-deep-navy">Dr. Prity Raushan</h2>
                <p className="text-xs text-teal-600">Dental Care</p>
              </div>
            </div>

            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div 
                        className="flex items-center justify-between gap-2 text-deep-navy font-semibold py-2 border-b border-teal-100 cursor-pointer"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-90' : ''}`} />
                      </div>
                      
                      {/* Mobile dropdown content */}
                      <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {/* Group services by category in mobile */}
                        {Object.entries(servicesCategories).map(([category, services]) => (
                          <div key={category} className="space-y-1">
                            <h4 className="text-xs font-semibold text-teal-600 uppercase tracking-wider mt-2 first:mt-0">
                              {category}
                            </h4>
                            {services.map((serviceName) => {
                              const serviceItem = item.dropdown.find(d => d.label === serviceName);
                              return serviceItem ? (
                                <Link
                                  key={serviceItem.path}
                                  to={serviceItem.path}
                                  className="block text-slate-600 hover:text-teal-600 transition-colors py-1.5 text-sm pl-2"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigation();
                                  }}
                                >
                                  {serviceItem.label}
                                </Link>
                              ) : null;
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-deep-navy font-medium hover:text-teal-600 transition-colors duration-300 py-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation();
                      }}
                    >
                      {item.icon && <span className="text-teal-500">{item.icon}</span>}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile Appointment Button */}
            <Link
              to="/appointment"
              className="block w-full px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-full shadow-soft-medical hover:shadow-lg transition-all duration-300 text-center"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation();
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </span>
            </Link>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-teal-100 space-y-3">
              <a 
                href="mailto:drprityraushan@gmail.com" 
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors group"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>drprityraushan@gmail.com</span>
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors group"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <div className="flex flex-col">
                  <span>Mon-Sat: 9AM-8PM</span>
                  <span className="text-xs text-teal-600">Sun: By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;