import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import WhyChooseUs from "../Components/Whywechooseu";
import WhoWeAre from "../Components/WhoWeAre";
import AboutBusitron from "../Components/AboutBusitron";
import Testimonials from "../Components/testimonials";
import Statistics from "../Components/Statistics";
import Team from "../Components/Team";
import Collaborations from "../Components/Collaborations";
import TechnologiesUsed from "../Components/TechnologiesUsed";

const Home = () => {
  const textRef = useRef(null);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const threeContainerRef = useRef(null);

  const taglines = [
    "Unlocking Opportunities, One Connection at a Time",
    "Empowering Businesses, Together We Grow",
    "Linking Businesses, Unleashing Potential",
  ];

  useEffect(() => {
    // Text Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Changing Taglines Automatically
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }, 4000); // Change every 4 seconds

    // Three.js Floating Particle System
    let scene, camera, renderer, particles;

    const initThreeJS = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      threeContainerRef.current.appendChild(renderer.domElement);

      // Add Particle System
      const particleCount = 1000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20; // Random X
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Random Y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Random Z

        colors[i * 3] = Math.random(); // Random R
        colors[i * 3 + 1] = Math.random(); // Random G
        colors[i * 3 + 2] = Math.random(); // Random B
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particleGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      camera.position.z = 15;

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Animate particles
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01; // Floating effect
        }
        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();
    };

    // Initialize Three.js only if the container is available
    if (threeContainerRef.current) {
      initThreeJS();
    }

    // Handle Resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);

      // Clean up Three.js resources
      if (threeContainerRef.current && renderer) {
        threeContainerRef.current.removeChild(renderer.domElement);
      }
      if (scene) {
        scene.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            object.material.dispose();
          }
        });
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="relative max-w-svw min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Three.js Particle System */}
        <div ref={threeContainerRef} className="absolute inset-0 z-0"></div>

        {/* Text Content */}
        <div ref={textRef} className="relative text-center text-white px-6 z-10">
        <h1 className="text-7xl font-bold mb-4">
  Welcome to{" "}
  <span className="bg-gradient-to-r from-[#df3482] to-[#4B0082] text-transparent bg-clip-text">
    BUSITRON
  </span>
</h1>
          <p className="text-2xl">{taglines[taglineIndex]}</p>
        </div>
      </div>

      <WhyChooseUs />
      <WhoWeAre />
      <AboutBusitron />
      <Testimonials />
      <Statistics />
      <TechnologiesUsed/>
      {/* <Collaborations/> */}
      <Team />
    </div>
  );
};

export default Home;