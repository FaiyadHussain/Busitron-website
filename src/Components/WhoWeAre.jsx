import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="bg-black py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image with Overlay Effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:w-1/2"
        >
          <img
            src="https://img.freepik.com/free-photo/new-vision_1098-16178.jpg?t=st=1739611400~exp=1739615000~hmac=22551a1a1a57470613ace05d0d3e2fa0b3e6428306b47cf979209f5d1f495363&w=1060"
            alt="Team Collaboration"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4 relative">
            WHO WE ARE?{" "}
            <span className="absolute left-1 bottom-0 w-16 h-1 bg-yellow-500"></span>
          </h2>
          <p className="text-white text-lg leading-relaxed">
            At <b>Busitron</b>, we are more than just a networking platform; we are a
            community of forward-thinking businesses and professionals driven by
            a shared vision of growth, collaboration, and innovation.
          </p>
          <p className="text-white text-lg mt-4">
            Our journey began with a vision to bridge gaps, spark collaborations,
            and transform business networking. Today, we empower entrepreneurs,
            startups, and enterprises to create meaningful partnerships.
          </p>
          <p className="text-white text-lg mt-4">
            At Busitron, our mission is to connect businesses, foster collaboration, 
            and drive growth through an innovative networking platform. We understand 
            the power of strong connections and the impact they can have on your 
            business's success. That's why we've developed a platform that brings 
            together businesses of all sizes, industries, and backgrounds.
          </p>

          {/* Read More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
