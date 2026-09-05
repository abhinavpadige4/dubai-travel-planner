```tsx
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-orange-300/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative top icon */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
            <span className="text-2xl">🌴</span>
            <span className="text-amber-300/80 text-sm font-medium tracking-wider uppercase">
              Your Ultimate Travel Companion
            </span>
            <span className="text-2xl">🌴</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">Explore Dubai</span>
          <br />
          <span className="text-white">in 10 Days</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
          Your perfect itinerary with{' '}
          <span className="text-amber-400">budget tracker</span>,{' '}
          <span className="text-orange-400">packing list</span>,{' '}
          <span className="text-yellow-400">visa info</span> & more
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <button
            onClick={() => scrollToSection('itinerary')}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-amber-900/40 hover:shadow-amber-800/50 transition-all duration-500 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Planning
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            onClick={() => scrollToSection('budget')}
            className="px-8 py-4 glass-card text-amber-300 font-semibold text-lg rounded-xl hover:border-amber-500/40 transition-all duration-300 hover:scale-105"
          >
            💰 Budget Tracker
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up delay-600">
          {[
            { icon: '📅', value: '10', label: 'Days Planned' },
            { icon: '🏛️', value: '15+', label: 'Attractions' },
            { icon: '🍽️', value: '8', label: 'Restaurants' },
            { icon: '💰', value: '$', label: 'Budget Tool' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <span className="text-2xl font-bold text-amber-400">{stat.value}</span>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-amber-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
