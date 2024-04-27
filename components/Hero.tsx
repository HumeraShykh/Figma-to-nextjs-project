import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {/* Tagline */}
      <span
        className="text-lg font-medium inline-block mb-4 px-3 py-1"
        style={{ color: '#1D4ED8', marginTop: '30px' }}
      >
        Built For Traders By Traders
      </span>

      {/* Title */}
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
        Track, Analyze, and Improve Your
      </h1>
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-blue-500">
        Trading Performance
      </h1>

      {/* Description */}
      <p className="mb-6 text-md md:text-lg leading-relaxed text-gray-700">
        Edge Tracker is a powerful platform for traders to control their trading activities,
        <br />
        improve results, and make data-driven decisions.
      </p>

      {/* Call-to-action button */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <button className="bg-blue-500 text-white px-6 py-3 btn-round md:mr-4">
          Get Started
        </button>
      </div>

      {/* Responsive image */}
      <div className="flex justify-center">
        <img
          src="Capture_3.png"
          alt="Edge Tracker"
          className="mx-auto mt-6"
          style={{ width: '80%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Hero;
