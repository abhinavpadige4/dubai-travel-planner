import { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white">
              Dubai 10-Day Planner
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#itinerary" className="text-gray-300 hover:text-white transition-colors duration-200">
              Itinerary
            </a>
            <a href="#budget" className="text-gray-300 hover:text-white transition-colors duration-200">
              Budget
            </a>
            <a href="#packing" className="text-gray-300 hover:text-white transition-colors duration-200">
              Packing
            </a>
            <a href="#visa" className="text-gray-300 hover:text-white transition-colors duration-200">
              Visa Info
            </a>
            <a href="#restaurants" className="text-gray-300 hover:text-white transition-colors duration-200">
              Restaurants
            </a>
            <a href="#emergency" className="text-gray-300 hover:text-white transition-colors duration-200">
              Emergency
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#itinerary" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
              Itinerary
            </a>
            <a href="#budget" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
              Budget
            </a>
            <a href="#packing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
              Packing
            </a>
            <a href="#visa" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
              Visa Info
            </a>
            <a href="#restaurants" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
              Restaurants
            </a>
            <a href="#emergency" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
              Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
};