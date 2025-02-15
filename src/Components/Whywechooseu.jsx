import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaRocket, FaHandshake, FaShieldAlt, FaChartLine } from "react-icons/fa";
import "../App.css";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative py-16 bg-black text-center overflow-hidden">
      {/* Background Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full animate-lines pointer-events-none"></div>
      </div>

      {/* Title with Orange Lines */}
      <div className="flex items-center justify-center relative z-10 mb-6">
        <div className="h-1 w-16 bg-yellow-500 hidden md:block"></div>
        <h2 className="text-4xl font-bold text-white mx-4">WHAT WE DO</h2>
        <div className="h-1 w-16 bg-yellow-500 hidden md:block"></div>
      </div>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto relative z-10 mb-12">
        At Busitron, our mission is to connect businesses, foster collaboration, and drive growth through an innovative networking platform. We understand the power of strong connections and the impact they can have on your business's success. That's why we've developed a platform that brings together businesses of all sizes, industries, and backgrounds.
      </p>

      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {/* Features */}
        {[
          { icon: <FaRocket />, title: "Innovation", text: "We leverage cutting-edge technology to ensure efficiency and success." },
          { icon: <FaHandshake />, title: "Strong Partnerships", text: "We believe in long-term business relationships built on trust." },
          { icon: <FaShieldAlt />, title: "Security & Trust", text: "Your data is safe with us, with top-tier security measures." },
          { icon: <FaChartLine />, title: "Growth-Oriented", text: "We drive business success by focusing on tangible growth." },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-700"
          >
            <div className="text-yellow-500 text-5xl mx-auto mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
