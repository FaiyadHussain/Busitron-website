import React from "react";

const About = () => {
  return (
    <div className="min-h-screen mt-12 bg-black text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* WHO WE ARE Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4">
            WHO WE ARE?
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            At Busitron, we are more than just a networking platform; we are a 
            community of forward-thinking businesses and professionals driven by 
            a shared vision of growth, collaboration, and innovation.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
            Our Story
          </h2>
          <p className="text-gray-300 mt-4">
            Busitron was born from a simple idea: to create a space where 
            businesses, regardless of their size or industry, could come together 
            to explore new horizons. Our journey began with a vision of bridging 
            gaps, sparking collaborations, and transforming the way businesses network.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
            Our Values
          </h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🔗 Connection</h3>
              <p className="text-gray-300">
                We believe in the power of connection. Every interaction on 
                Busitron is an opportunity to forge meaningful relationships.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🤝 Collaboration</h3>
              <p className="text-gray-300">
                Collaboration is at the heart of our community. We encourage 
                businesses to work together and share ideas.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🚀 Innovation</h3>
              <p className="text-gray-300">
                We embrace innovation as a catalyst for progress, empowering 
                businesses to adapt and thrive.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">🛡️ Integrity</h3>
              <p className="text-gray-300">
                Trust is the cornerstone of our platform, ensuring that every 
                interaction on Busitron is built on transparency and authenticity.
              </p>
            </div>
          </div>
        </div>

        {/* Our Community Section */}
        <div>
          <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
            Our Community
          </h2>
          <p className="text-gray-300 mt-4">
            Busitron's strength lies in its diverse and vibrant community. We host 
            businesses from various industries, backgrounds, and regions, creating 
            a rich tapestry of opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
