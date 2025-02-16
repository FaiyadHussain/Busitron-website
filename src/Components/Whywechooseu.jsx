import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaLightbulb, FaUsers, FaLock, FaChartBar } from "react-icons/fa";
import "../App.css";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center overflow-hidden">
      {/* Background Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full animate-lines pointer-events-none"></div>
      </div>

      {/* Title with Decorative Lines */}
      <div className="flex items-center justify-center relative z-10 mb-10">
        <div className="h-1 w-24 bg-yellow-500 hidden md:block"></div>
        <h2 className="text-5xl font-extrabold text-white mx-6 uppercase tracking-wide">
          Why Choose Us?
        </h2>
        <div className="h-1 w-24 bg-yellow-500 hidden md:block"></div>
      </div>

      <p className="text-lg text-gray-300 max-w-3xl mx-auto relative z-10 mb-14 leading-relaxed">
        We provide cutting-edge business networking solutions that empower brands 
        to **grow, connect, and innovate**. Our platform fosters collaboration, 
        security, and exponential success.
      </p>

      {/* Feature Cards */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10"
      >
        {[
          {
            icon: <FaLightbulb />,
            title: "Innovative Solutions",
            text: "Empowering businesses with creative and tech-driven strategies.",
          },
          {
            icon: <FaUsers />,
            title: "Community & Collaboration",
            text: "Connecting industry leaders to foster strong partnerships.",
          },
          {
            icon: <FaLock />,
            title: "Data Security & Trust",
            text: "Robust security measures ensure complete data protection.",
          },
          {
            icon: <FaChartBar />,
            title: "Accelerated Growth",
            text: "Scaling your business with performance-driven strategies.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative p-8 bg-gray-900 rounded-xl shadow-xl border border-gray-700 flex flex-col items-center text-center overflow-hidden cursor-pointer 
            transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Icon with 3D Hover & Glow Effect */}
            <div className="text-yellow-500 text-7xl w-24 h-24 mb-5 transition-all duration-500 
              group-hover:blur-sm group-hover:scale-110 group-hover:text-yellow-400">
              {feature.icon}
            </div>

            {/* Hidden Details - Shown on Hover with Glassmorphism Effect */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 
              backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-lg font-semibold px-6">{feature.text}</p>
            </div>

            {/* Title with Dynamic Animation */}
            <h3 className="text-2xl font-bold text-white transition-all duration-500 group-hover:text-yellow-500 group-hover:text-3xl">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
