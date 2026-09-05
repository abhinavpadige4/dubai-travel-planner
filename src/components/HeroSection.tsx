export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-b from-black via-black/90 to-transparent">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover opacity-20"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 sm:py-24 text-center">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Explore Dubai in 10 Days
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Your perfect itinerary with budget tracker, packing list, visa info & more
        </p>
        <button
          className="bg-[#d4a373] hover:bg-[#e0b08a] text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105 flex items-center gap-2"
        >
          Start Planning
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};