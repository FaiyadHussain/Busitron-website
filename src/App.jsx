import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";  // Import the Footer component
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/Whatwedo";
import ContactUs from "./pages/Contact";
import Carrer from "./pages/Carrer";
import JobDetails from "./pages/jobDetails";
import "./App.css";
import "@fontsource/poppins"; // Automatically loads Poppins


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Carrer />} />
            <Route path="/job/:role" element={<JobDetails />} />
          </Routes>
        </div>

        {/* Footer (Always at the Bottom) */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
