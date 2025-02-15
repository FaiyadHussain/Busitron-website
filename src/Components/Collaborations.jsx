import React from "react";

const partnerLogos = [
  { id: 1, src: "data:image/png;base64,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", alt: "Google" },
  { id: 2, src: "/images/microsoft.png", alt: "Microsoft" },
  { id: 3, src: "/images/amazon.png", alt: "Amazon" },
  { id: 4, src: "/images/tesla.png", alt: "Tesla" },
  { id: 5, src: "/images/apple.png", alt: "Apple" },
  { id: 6, src: "/images/facebook.png", alt: "Facebook" },
  { id: 7, src: "/images/netflix.png", alt: "Netflix" },
  { id: 8, src: "/images/ibm.png", alt: "IBM" },
  { id: 9, src: "/images/samsung.png", alt: "Samsung" },
];

const Collaborations = () => {
  return (
    <div className=" bg-black py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-white mb-10 tracking-wide">
        Our Collaborations
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-10 animate-scroll">
          {/* Duplicate the logos for smooth looping */}
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg w-40 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:brightness-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-28 h-28 object-contain filter invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Collaborations;
