import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const jobDetails = {
  fresher: {
    title: "MERN Stack Developer (Fresher)",
    salary: "₹2 LPA - ₹8 LPA",
    experience: "0 - 2 years",
    description: "We are looking for freshers with strong skills in MongoDB, Express.js, React.js, and Node.js (MERN). Passionate learners are welcome!",
  },
  lead: {
    title: "MERN Stack Lead Developer",
    salary: "₹5 LPA - ₹12 LPA",
    experience: "4+ years",
    description: "We are hiring an experienced MERN Stack Lead Developer to architect and lead full-stack applications. Strong leadership skills required.",
  }
};

const JobDetails = () => {
  const { role } = useParams();
  const job = jobDetails[role];
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", degree: "", passoutYear: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen mt-12 bg-black text-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4 mb-6">{job.title}</h1>
        <p className="text-lg text-gray-300 mb-4"><strong>Salary:</strong> {job.salary}</p>
        <p className="text-lg text-gray-300 mb-4"><strong>Experience:</strong> {job.experience}</p>
        <p className="text-lg text-gray-300 mb-6">{job.description}</p>

        {submitted ? (
          <p className="text-green-400 text-xl font-semibold">Your application has been submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-300">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Resume (Upload):</label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Degree Qualification:</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Passout Year:</label>
              <input
                type="number"
                name="passoutYear"
                value={formData.passoutYear}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition w-full"
            >
              Apply Now
            </button>
          </form>
        )}

        <button
          className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          onClick={() => navigate("/")}
        >
          Back to Careers
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
