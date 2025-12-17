// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white p-8 rounded-lg shadow-2xl animate-bgPulse">
//   {/* Confetti particles */}
//   <div className="absolute inset-0 pointer-events-none">
//     <span className="absolute top-4 left-10 text-4xl animate-confetti1">🎉</span>
//     <span className="absolute top-8 right-20 text-3xl animate-confetti2">✨</span>
//     <span className="absolute bottom-6 left-20 text-4xl animate-confetti3">🎊</span>
//     <span className="absolute top-12 left-1/2 text-5xl animate-confetti4">🌟</span>
//     <span className="absolute bottom-10 right-10 text-3xl animate-confetti5">🔥</span>
//     <span className="absolute top-1/3 right-1/4 text-4xl animate-confetti6">💥</span>
//   </div>

//   {/* Main content */}
//   <div className="relative z-10 flex flex-col items-center gap-4 animate-slideDown">
//     <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide animate-glowText animate-shake">
//       Tailwind Finally Working!
//     </h1>
//     <div className="flex items-center gap-4">
//       <span className="text-6xl md:text-8xl animate-bounceRocket">🚀</span>
//       <span className="text-5xl animate-spinSlow">⚡</span>
//     </div>
//     <p className="text-xl md:text-2xl font-medium animate-fadeIn delay-1000">
//       Let's build something awesome! 🎨
//     </p>
//   </div>
// </div>

//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white">
        {/* Subtle animated water wave background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-wave"></div>
        </div>

        {/* Animated water drops (confetti-style but water-themed) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute top-10 left-20 text-5xl animate-confetti1 opacity-70">💧</span>
          <span className="absolute top-20 right-32 text-4xl animate-confetti2 opacity-60">💧</span>
          <span className="absolute bottom-16 left-32 text-5xl animate-confetti3 opacity-70">💧</span>
          <span className="absolute top-32 left-1/2 text-6xl animate-confetti4 opacity-80">💧</span>
          <span className="absolute bottom-20 right-20 text-4xl animate-confetti5 opacity-60">💧</span>
          <span className="absolute top-1/4 right-1/3 text-5xl animate-confetti6 opacity-70">💧</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide animate-glowText animate-shake">
            Pure Water for a Healthier Life
          </h1>
          <p className="text-2xl md:text-4xl font-medium mt-6 animate-fadeIn delay-1000">
            Premium RO Water Purifiers • Expert Sales & Service in Mumbai
          </p>
          <div className="mt-10 flex justify-center gap-6 animate-slideDown">
            <span className="text-7xl md:text-9xl animate-bounceRocket">💧</span>
            <span className="text-6xl animate-spinSlow">🌊</span>
            <span className="text-7xl md:text-9xl animate-bounceRocket delay-300">💧</span>
          </div>
          <p className="text-xl md:text-2xl mt-8 animate-fadeIn delay-2000">
            Trusted by thousands of families • Crystal clear, safe drinking water every day
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-blue-700 hover:bg-blue-100 px-10 py-5 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-110 transition"
            >
              Call Now for Service / Buy
            </button>
            <a
              href="/products"
              className="bg-transparent border-4 border-white hover:bg-white hover:text-blue-700 px-10 py-5 rounded-full text-2xl font-bold transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* Visual Sections with Images */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">Why Choose PAANI?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Premium Brands</h3>
              <p className="text-gray-700">Kent, Aquaguard, Pureit & more – Latest models with advanced RO + UV technology</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Expert Installation</h3>
              <p className="text-gray-700">Professional setup by certified technicians – Quick & hassle-free</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Reliable Service</h3>
              <p className="text-gray-700">AMC plans, timely maintenance & genuine spares</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Pure Water, Happy Families</h2>
          {/* Images will be rendered here via carousel */}
        </div>
      </section>

      {/* Call Now Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-6 text-4xl text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">Get Instant Help!</h3>
            <p className="text-xl text-gray-700 mb-8">Call us now for new purchase, service, or demo</p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full text-2xl font-bold shadow-xl transform hover:scale-105 transition"
            >
              <span className="text-4xl">📞</span>
              +91 98765 43210
            </a>
            <p className="mt-6 text-gray-600">Available 24/7 for emergencies</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;