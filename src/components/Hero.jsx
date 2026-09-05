import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1920&auto=format&fit=crop")',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Dubai <span className="text-amber-500">10-Day</span> Travel Planner
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
          Your personalized itinerary, budget tracker, and travel guide to the city of gold.
        </p>
        <a 
          href="#itinerary" 
          className="btn-primary inline-block text-lg px-8 py-3 rounded-full shadow-amber-500/20"
        >
          Start Planning
        </a>
      </div>
    </section>
  );
};

export default Hero;