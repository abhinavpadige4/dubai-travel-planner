export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 bg-[url('https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          Explore Dubai in 10 Days
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          Your perfect itinerary with budget tracker, packing list, visa info & more
        </p>
        <div className="mt-10 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
          Start Planning
        </div>
      </div>
    </section>
  );
};