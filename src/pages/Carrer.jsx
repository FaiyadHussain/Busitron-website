import React from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-12">
        
        {/* Career Section Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold border-l-8 border-blue-500 pl-6 inline-block">
            CAREER OPPORTUNITIES
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Join our team and be a part of an innovative and dynamic workplace. Explore our latest job openings and find the right fit for you.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {/* MERN Stack Developer - Fresher */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-8 border-blue-500">
            <h3 className="text-2xl font-semibold text-white">MERN Stack Developer (Fresher)</h3>
            <p className="text-gray-400 mt-2">📍 Location: Remote | 🕒 Full-time</p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              We are looking for <span className="text-blue-400 font-semibold">freshers</span> with a strong understanding of 
              <span className="text-blue-400 font-semibold"> MongoDB, Express.js, React.js, and Node.js (MERN)</span>. 
              If you are passionate about full-stack development and eager to learn, apply now!
            </p>
            <button 
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              onClick={() => navigate("/job/fresher")}
            >
              Apply Now
            </button>
          </div>

          {/* MERN Stack Lead Developer */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-8 border-blue-500">
            <h3 className="text-2xl font-semibold text-white">MERN Stack Lead Developer</h3>
            <p className="text-gray-400 mt-2">📍 Location: Remote | 🕒 Full-time</p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              We are hiring an experienced <span className="text-blue-400 font-semibold">MERN Stack Lead</span> 
              with <span className="text-blue-400 font-semibold">4+ years</span> of expertise in building scalable web applications. 
              The ideal candidate should have experience in <span className="text-blue-400 font-semibold">leading a team, architecting solutions, and deploying applications efficiently</span>.
            </p>
            <button 
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              onClick={() => navigate("/job/lead")}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6 inline-block">
            Why Work With Us?
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            At <span className="text-blue-400 font-semibold">Busitron</span>, we believe in creating a thriving environment for growth, 
            innovation, and collaboration. Join us and be part of a team that's shaping the future of technology.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Career;
