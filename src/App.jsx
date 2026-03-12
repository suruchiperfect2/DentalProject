import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import NavBar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Services from "./pages/Service";


import Crown from "./pages/Crown";
import Cosmeticdentistry from "./pages/Cosmeticdentistry";
import Deepbite from "./pages/Deepbite";

import Dentalfluorosis from "./pages/Dentalfluorosis";
import DentalImplants from "./pages/DentalImplants";
import Orthodontics from "./pages/Orthodontics";
import Rootcanaltreatment from "./pages/Rootcanaltreatment";
import Pediatricdentistry from "./pages/Pediatricdentistry";
import Dentaltreatment from "./pages/Dentaltreatment";
import GenralDentistry from "./pages/GenralDentistry";
import Earlychildhoodcare from "./pages/Earlychildhoodcare";
import TeethWhitening from "./pages/TeethWhitening";
import Spacing from "./pages/Spacing";





import Testimonials from "./pages/Testimonals";
import Treatmentcharges from "./pages/Treatmentcharges";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

// ScrollToTop Component - Yeh har route change par top par scroll karega
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har route change par top par scroll karein
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Ya "smooth" chahe to
    });
  }, [pathname]);

  return null;
};

// Main App Content with ScrollToTop
const AppContent = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <ScrollToTop /> {/* 👈 Yeh line add ki hai */}
      
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          {/* Home page - Sirf ek baar define kiya */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Other pages */}
          <Route path="/home" element={<Home />} /> {/* Agar Home alag page hai to */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />


          <Route path="/Crown" element={<Crown />} /> {/* Changed from "/crown" to "/services/crown" */}
          <Route path="/Cosmeticdentistry" element={<Cosmeticdentistry />} />
          <Route path="/Deepbite" element={<Deepbite />} />
          <Route path="/Dentalfluorosis" element={<Dentalfluorosis />} />
          <Route path="/DentalImplants" element={<DentalImplants />} />
       
          <Route path="/Orthodontics" element={<Orthodontics />} />
         
        
          <Route path="/Rootcanaltreatment" element={<Rootcanaltreatment />} />





          <Route path="/Pediatricdentistry" element={<Pediatricdentistry />} />
          <Route path="/Dentaltreatment" element={<Dentaltreatment />} />
          <Route path="/GenralDentistry" element={<GenralDentistry />} />
          <Route path="/Earlychildhoodcare" element={<Earlychildhoodcare />} />
          <Route path="/TeethWhitening" element={<TeethWhitening />} />
          <Route path="/Spacing" element={<Spacing />} />
          


          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/treatmentcharges" element={<Treatmentcharges />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;