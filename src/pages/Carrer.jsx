import React from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen mt-12 bg-black text-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4 mb-6">
          Career Opportunities
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Join our team and be a part of an innovative and dynamic workplace. Explore our latest job openings and find the right fit for you.
        </p>

        {/* Job Listings */}
        <div className="space-y-6">
          {/* MERN Stack Developer - Fresher */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">MERN Stack Developer (Fresher)</h3>
            <p className="text-gray-400 mt-2">Location: Remote | Full-time</p>
            <p className="text-gray-300 mt-4">
              We are looking for **freshers** with a strong understanding of **MongoDB, Express.js, React.js, and Node.js (MERN)**.
              If you are passionate about full-stack development and eager to learn, apply now!
            </p>
            <button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              onClick={() => navigate("/job/fresher")}
            >
              Apply Now
            </button>
          </div>

          {/* MERN Stack Lead Developer */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">MERN Stack Lead Developer</h3>
            <p className="text-gray-400 mt-2">Location: Remote | Full-time</p>
            <p className="text-gray-300 mt-4">
              We are hiring an experienced **MERN Stack Lead** with 4+ years of expertise in **building scalable web applications**.
              The ideal candidate should have experience in **leading a team, architecting solutions, and deploying applications efficiently**.
            </p>
            <button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              onClick={() => navigate("/job/lead")}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
