import React from "react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen  mt-12 bg-black text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* What We Do Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4">
            What We Do
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            At Busitron, our mission is to connect businesses, foster collaboration, and 
            drive growth through an innovative networking platform. We understand the power 
            of strong connections and the impact they have on business success. Our platform 
            brings together businesses of all sizes, industries, and backgrounds.
          </p>
        </div>

        {/* Our Core Services Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
            Our Core Services
          </h2>
          <div className="mt-4 space-y-4">
            {/* Networking Opportunities */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🔗 Networking Opportunities</h3>
              <p className="text-gray-300">
                A dynamic online platform where businesses connect, engage, and 
                build meaningful relationships.
              </p>
            </div>

            {/* Business Matchmaking */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🤝 Business Matchmaking</h3>
              <p className="text-gray-300">
                Intelligent algorithms suggest potential partners, clients, or 
                collaborators based on your business profile.
              </p>
            </div>

            {/* Knowledge Sharing */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">📚 Knowledge Sharing</h3>
              <p className="text-gray-300">
                Access industry insights, webinars, and articles to stay ahead 
                in your field.
              </p>
            </div>

            {/* Events and Webinars */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🎤 Events and Webinars</h3>
              <p className="text-gray-300">
                Participate in expert-led networking events and webinars for 
                learning and collaboration.
              </p>
            </div>

            {/* B2B Marketplace */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🛒 B2B Marketplace</h3>
              <p className="text-gray-300">
                Discover new opportunities, source products or services, and 
                connect with reliable suppliers and buyers.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Busitron? Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
            Why Choose Busitron?
          </h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🌍 Diverse Network</h3>
              <p className="text-gray-300">
                Connect with a diverse community of businesses, unlocking new 
                ideas and opportunities.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">⚙️ Customized Experience</h3>
              <p className="text-gray-300">
                Tailor your profile and networking goals for a personalized experience.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">📊 Data-Driven Insights</h3>
              <p className="text-gray-300">
                Track your networking success with our analytics dashboard.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🔒 Secure and Reliable</h3>
              <p className="text-gray-300">
                Your privacy and security are our top priorities with state-of-the-art protection.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold">🚀 Join Busitron Today!</h2>
          <p className="text-gray-300 mt-2">
            Unlock a world of possibilities for your business with Busitron.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WhatWeDo;
