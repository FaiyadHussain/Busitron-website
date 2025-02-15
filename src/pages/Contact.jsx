import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen mt-12 bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Have questions or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="bg-gray-900 p-6 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
