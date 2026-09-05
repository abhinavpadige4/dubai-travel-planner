import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D4A373] to-[#E8C29A]">
        Your 10\u2011Day Dubai Adventure
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#E8C29A]/90">
        Explore the ultimate itinerary with budget tracker, packing list, and local tips.
      </p>
      <button
        className="bg-[#D4A373] hover:bg-[#E8C29A] text-[#1A0F08] font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:-translate-y-2 shadow-lg"
      >
        Start Planning
      </button>
    </section>
  );
};

export default Hero;