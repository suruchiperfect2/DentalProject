import React from "react";

const homePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20  from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          We provide modern digital solutions to help your business grow online.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Us
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We are a creative digital agency focused on delivering high-quality
          websites, applications, and digital marketing services for startups
          and businesses.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600">
              Responsive and modern websites built with the latest technologies.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">App Development</h3>
            <p className="text-gray-600">
              Scalable and user-friendly mobile and web applications.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-gray-600">
              SEO, social media, and marketing strategies to grow your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        © 2026 Your Company. All rights reserved.
      </footer>

    </div>
  );
};

export default HomePage;

