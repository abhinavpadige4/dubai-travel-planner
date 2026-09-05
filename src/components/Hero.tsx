export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(210,180,140,0.8)] to-[rgba(30,30,30,0.9)]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-[var(--primary-color, #D2B48C)] mb-4 bg-gradient-to-r from-[var(--primary-color, #D2B48C)] to-[var(--accent-color, #E07A5F)] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Explore Dubai in 10 Days
        </h1>
        <p className="text-xl text-[var(--text-color, #F5F5DC)] mb-8 max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          Your perfect itinerary with budget tracker, packing list & more
        </p>
        <button 
          className="bg-gradient-to-r from-[var(--primary-color, #D2B48C)] to-[var(--accent-color, #E07A5F)] hover:from-[var(--accent-color, #E07A5F)] hover:to-[var(--primary-color, #D2B48C)] text-[var(--text-color, #F5F5DC)] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.05] hover:drop-shadow-[0_0_15px_rgba(224,122,95,0.5)] border-[1px] border-[rgba(255,255,255,0.2)] backdrop-blur-sm"
        >
          Start Planning
        </button>
      </div>
    </section>
  );
};