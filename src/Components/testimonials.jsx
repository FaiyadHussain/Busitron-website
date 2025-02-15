import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Smith Henry",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    feedback:
      "I had the pleasure of attending the ConnectLocal Business Mixer organized by Busitron. It was an incredible experience. The connections I made during the event have opened doors to new collaborations and partnerships.",
  },
  {
    name: "Shaik Zobain",
    role: "Director",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    feedback:
      "I've been a member of Busitron, and I’ve watched it evolve into a dynamic community of professionals. Their webinars offer top-notch insights and strategies for networking success.",
  },
  {
    name: "Robert Ken",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    feedback:
      "As a business owner, I understand the importance of networking. Busitron’s platform has been instrumental in connecting me with potential clients and partners.",
  },
  {
    name: "Alice Morgan",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback:
      "Networking has never been this seamless. Busitron’s community helped me expand my professional circle and grow my business.",
  },
  {
    name: "John Carter",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    feedback:
      "Busitron is the perfect platform for meeting like-minded professionals and exploring new opportunities.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Function to move to the next testimonial
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to move to the previous testimonial
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          WHAT CUSTOMERS SAY
          <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-6">
            <button onClick={prevSlide} className="text-white text-2xl">
              ⬅
            </button>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.slice(index, index + 3).map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-yellow-500"
                  />
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-yellow-400 text-sm mb-4">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-300">"{testimonial.feedback}"</p>
                </motion.div>
              ))}
            </motion.div>
            <button onClick={nextSlide} className="text-white text-2xl">
              ➡
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
