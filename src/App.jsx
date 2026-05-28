import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Cosmeticdentistry from "./pages/Cosmeticdentistry";
import Crown from "./pages/Crown";
import Dashboard from "./pages/Dashboard";
import Deepbite from "./pages/Deepbite";
import Dentalfluorosis from "./pages/Dentalfluorosis";
import DentalImplants from "./pages/DentalImplants";
import Dentaltreatment from "./pages/Dentaltreatment";
import Earlychildhoodcare from "./pages/Earlychildhoodcare";
import GenralDentistry from "./pages/GenralDentistry";
import HomePage from "./pages/Homepage";
import Orthodontics from "./pages/Orthodontics";
import Pediatricdentistry from "./pages/Pediatricdentistry";
import Rootcanaltreatment from "./pages/Rootcanaltreatment";
import Spacing from "./pages/Spacing";
import TeamMemberProfile from "./pages/TeamMemberProfile";
import TeethWhitening from "./pages/TeethWhitening";
import Testimonials from "./pages/Testimonals";
import TreatmentCharges from "./pages/Treatmentcharges";
import UserDashboard from "./pages/UserDashboard";
import UserLogin from "./pages/UserLogin";

const AppContent = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path="/admin-panel" element={<AdminPanel />} />

          <Route path="/services" element={<Dentaltreatment />} />
          <Route path="/Dentaltreatments" element={<Dentaltreatment />} />
          <Route path="/Treatmentcharges" element={<TreatmentCharges />} />
          <Route path="/reviews" element={<Testimonials />} />

          <Route path="/dental-implants" element={<DentalImplants />} />
          <Route path="/Crown" element={<Crown />} />
          <Route path="/Deepbite" element={<Deepbite />} />
          <Route path="/Dentalfluorosis" element={<Dentalfluorosis />} />
          <Route path="/Spacing" element={<Spacing />} />
          <Route path="/Earlychildhoodcare" element={<Earlychildhoodcare />} />
          <Route path="/Orthodontics" element={<Orthodontics />} />
          <Route path="/Rootcanaltreatment" element={<Rootcanaltreatment />} />
          <Route path="/GenralDentistry" element={<GenralDentistry />} />
          <Route path="/Cosmeticdentistry" element={<Cosmeticdentistry />} />
          <Route path="/TeethWhitening" element={<TeethWhitening />} />
          <Route path="/Pediatricdentistry" element={<Pediatricdentistry />} />

          <Route path="/service/dentalimplants" element={<DentalImplants />} />
          <Route path="/service/crown" element={<Crown />} />
          <Route path="/service/deepbite" element={<Deepbite />} />
          <Route path="/service/rootcanaltreatment" element={<Rootcanaltreatment />} />
          <Route path="/service/orthodontics" element={<Orthodontics />} />
          <Route path="/service/teethwhitening" element={<TeethWhitening />} />
          <Route path="/service/cosmeticdentistry" element={<Cosmeticdentistry />} />
          <Route path="/service/earlychildcaries" element={<Earlychildhoodcare />} />
          <Route path="/service/:serviceType" element={<TeamMemberProfile />} />
          <Route path="/team/:doctorId" element={<TeamMemberProfile />} />
          <Route path="/team" element={<About />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
