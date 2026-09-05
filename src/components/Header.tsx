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
          <div className="hidden md:flex md:items-center md:space-x-6">
            <nav>
              <a href="#itinerary" className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10">
                Itinerary
              </a>
              <a href="#budget" className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10">
                Budget
              </a>
              <a href="#packing" className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10">
                Packing
              </a>
              <a href="#visa" className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10">
                Visa Info
              </a>
              <a href="#restaurants" className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10">
                Restaurants
              </a>
              <a href="#emergency" className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10">
                Emergency
              </a>
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white p-2 rounded"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#itinerary" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
              Itinerary
            </a>
            <a href="#budget" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
              Budget
            </a>
            <a href="#packing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
              Packing
            </a>
            <a href="#visa" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
              Visa Info
            </a>
            <a href="#restaurants" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
              Restaurants
            </a>
            <a href="#emergency" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
              Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
};