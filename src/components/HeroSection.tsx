export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] bg-[url('https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          Explore Dubai in 10 Days
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-sm">
          Your perfect itinerary with budget tracker, packing list, visa info & more
        </p>
        <button
          onClick={() => document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center px-6 py-3 bg-d4a373/90 hover:bg-d4a373 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
        >
          Start Planning
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};