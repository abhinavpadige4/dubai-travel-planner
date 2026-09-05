import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-terracotta/10 to-transparent backdrop-blur-sm border-b border-terracotta/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-terracotta/20 rounded-xl flex items-center justify-center">
                <svg className="h-5 w-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-terracotta">Dubai Travel</p>
                <p className="text-xs text-terracotta/50">Planner</p>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-terracotta/70 hover:text-terracotta transition-colors font-medium">Home</Link>
            <Link to="/itinerary" className="text-terracotta/70 hover:text-terracotta transition-colors</think># FILE: src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-terracotta/5 to-transparent min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover opacity-20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-terracotta mb-6 drop-shadow-lg animate-fadeInUp">
          Explore Dubai in 10 Days
        </h1>
        <p className="text-terracotta/80 text-lg mb-8 max-w-2xl animate-fadeInUp delay-100">
          Your perfect itinerary with budget tracker, packing list & more
        </p>
        <button 
          className="bg-terracotta hover:bg-terracotta/90 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-200 shadow-lg"
        >
          Start Planning
        </button>
      </div>
    </section>
  );
};